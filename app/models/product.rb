class Product < ApplicationRecord
  has_many_attached :files

  #空欄を防ぐ機能は付けたいが、Documentにも適用されて、うまく回避できなかった
  #validates :partnumber, presence: true


  #validates :documentname, presence: true
  #validate :start_end_check
  #validates :goal_attainment_level, numericality: { less_than_or_equal_to: 100, greater_than_or_equal_to: 1 }
  validate :range

  #【rails, Validation】開始日と終了日の逆転防止
  # https://zenn.dev/aosan/scraps/b8e0d4ebcb4fce
  #def start_end_check
  #  errors.add(:end_at,"は開始日より前の日付は登録できません。") unless
  #  self.start_time < self.end_at 
  #  end
  
  
  #def start_end_check
  #  errors.add(:end_at,"は開始日より前の日付は登録できません。") unless
  #  self.start_time < self.end_at 
  #  end
  
  #def start_end_check
  #  errors.add(:end_at,"は完了予定日より前の日付は登録できません。") unless
  #  self.deadline_at < self.end_at 
  #  end
  
  def range
    errors.add(:goal_attainment_level, "の値が不正です") unless 
    self.goal_attainment_level>=1 && self.goal_attainment_level<=100
    end

  

end
