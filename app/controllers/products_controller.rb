class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show edit update destroy ]
 
  def index2
    @products = Product.where(partnumber:params[:partnumber])
  end

  def index3
   #こちらを選択していた@products=Product.select("DISTINCT ON (partnumber,food) *").page(params[:page]).per(4)
   @products=Product.select("DISTINCT ON (partnumber,food) *")
   
    @mark_complate="完"
    @mark_WIP="仕掛"

    @user = current_user
  end

  def index9
    @products=Product.select("DISTINCT ON (partnumber,food) *")
    
     @user = current_user
   end

  def index4
    
  end

  def index5
    #https://qiita.com/ozin/items/f4aea5b244a6aa03caee
    #@products=Product.all
    @products=Product.with_attached_files
  end

  def index6
    #https://qiita.com/ozin/items/f4aea5b244a6aa03caee
    #@products=Product.all
    @products=Product.with_attached_files
  end

  def index7
    #https://qiita.com/ozin/items/f4aea5b244a6aa03caee
    #@products=Product.all
    @products=Product.with_attached_files
  end

  def index8
    @products = Product.where(partnumber:params[:partnumber])
  end

  def top
    #@products=Product.all.page(params[:page]).per(10)
    #@products=Product.all
    @products=Product.with_attached_files
    @user = current_user    
  end

  
  def index_document
    #@products=Product.all.page(params[:page]).per(10)
    #@products=Product.all
    @q = Product.ransack(params[:q])
    @products = @q.result(distinct: true)
    @user = current_user
   
  end

  

  def index
    #@products=Product.all.page(params[:page]).per(10)
    #@products=Product.all
    @q = Product.ransack(params[:q])
    @products = @q.result(distinct: true)
    @user = current_user
    
    
  end


  

  def new_document
    @product = Product.new
  end

  

  def new
    @product = Product.new
    
  end

  def create
    @product = Product.new(product_params)
    #@product.files = params[:product][:files]

    if @product.save
      redirect_to @product
    else
      if @product.documenttype=="製品"
      render "new"
      else
      render "new_document"
      end
      #if @product.documenttype=="製品"
      #  flash[:alert] = @product.errors.full_messages
      #  redirect_to new_product_url 
      #else
      #  flash[:alert] = @product.errors.full_messages
      #  redirect_to new_document_url
      #end
      
       

    end
  end

  def show
    #@product = Product.find(params[:id])
    if @product.files.attached?
         @product.files.each do |image| 
           fullfilename = rails_blob_path(image)
           @ext = File.extname(fullfilename).downcase
           if @ext== ".jpg" ||  @ext== ".jpeg" ||  @ext== ".png" ||  @ext== ".gif" 
             @Attachment_file = true
           else
             @Attachment_file = false
           end
         end      
    end   
  end

  # GET /cats/1/edit
  def edit
    #@product = Product.find(params[:id])
    @title=Product.find(params[:id])

    if @product.files.attached?
         @product.files.each do |image| 
           fullfilename = rails_blob_path(image)
           @ext = File.extname(fullfilename).downcase
           if @ext== ".jpg" ||  @ext== ".jpeg" ||  @ext== ".png" ||  @ext== ".gif" 
             @Attachment_file = true
           else
             @Attachment_file = false
           end
         end  
    end   
  end

  

  # PATCH/PUT /cats/1 or /cats/1.json
  def update
   #@product = Product.find(params[:id])
   product = Product.find(params[:id])
   #if params[:product][:detouch]=='1'
   if params[:product][:detouch]
       params[:product][:detouch].each do |image_id|
        #image = product.files.find(image_id)
        image = @product.files.find(image_id)
        image.purge
       end
   end

   #if product.update_attributes(product_params)
   #update_attributes は、
   #Rails 6.0 → 非推奨
   #Rails 6.1 → 廃止
   #https://qiita.com/kaito_suzuki/items/016f6d76a152f659064c
   
   if product.update(product_params)
    flash[:success] = "編集しました"
    redirect_to @product
   else
    render :edit
   end

 
  end

  # DELETE /cats/1 or /cats/1.json
  def destroy
    #@product = Product.find(params[:id])
    @product.destroy
    respond_to do |format|
      if @product.documenttype=="製品"
        format.html { redirect_to products_url, notice: "データは正常に削除されました。" }
      else
        format.html { redirect_to index_document_url, notice: "データは正常に削除されました。" }
      end
      
      format.json { head :no_content }
    end
  end

  def search
    @qd = Product.ransack(params[:qd])
    #@products = @qd.result
    @products = @qd.result(distinct: true)
    @user = current_user
    binding.pry
  end

  def download
    response.headers["Content-Type"] = "application/excel"
    response.headers["Content-Disposition"] = "attachment; filename=\"製品データ.xls\""
      #@date_from = Date.new(2014,3,1)
      #@date_to = Date.new(2014,3,31)
    #@product = Product.find(params[:id])
    #https://qiita.com/ozin/items/f4aea5b244a6aa03caee
    #@products=Product.all
    @products=Product.with_attached_files
    


      #@stocks = ProductStock
      #  .where(product_id: @product.id)
      #  .where(date: @date_from..@date_to)
      #  .order(:date)
    render 'data_download.xls.erb'
    
    
  end

  def doc_download
    response.headers["Content-Type"] = "application/excel"
    response.headers["Content-Disposition"] = "attachment; filename=\"文書データ.xls\""
      #@date_from = Date.new(2014,3,1)
      #@date_to = Date.new(2014,3,31)
    #@product = Product.find(params[:id])
    #@products=Product.all
    @products=Product.with_attached_files
      #@stocks = ProductStock
      #  .where(product_id: @product.id)
      #  .where(date: @date_from..@date_to)
      #  .order(:date)
    render 'data_doc_download.xls.erb'
    
  end

  def process_design_download
    response.headers["Content-Type"] = "application/excel"
    response.headers["Content-Disposition"] = "attachment; filename=\"製造工程設計計画書／実績書.xls\""
    @products = Product.where(partnumber:params[:partnumber])
    render 'process_design_download.xls.erb'
    
  end

  


  private

  def set_q
    @q = Product.ransack(params[:q])
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:documentnumber,:documentcategory,:documenttype,:documentname,:documentrev,:start_time,:tasseido,:partnumber, :materialcode,:phase,:food,:goal_attainment_level,:deadline_at,:description,:end_at,:status,files:[])
  end
end

