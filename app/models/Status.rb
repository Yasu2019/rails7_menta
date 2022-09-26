class Status < ActiveHash::Base
  self.data = [
    { id: '未完', name: '未完' },
    { id: '仕掛中', name: '仕掛中' },
    { id: '完了', name: '完了' }

  ]
end