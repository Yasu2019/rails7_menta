#Udemy参考
#workers Integer(ENV.fetch("WEB_CONCURRENCY") { 2 })
#https://qiita.com/yo-iida/items/20e86e913000f6d080ca
workers Integer(ENV['WEB_CONCURRENCY'] || 2)

max_threads_count = Integer(ENV.fetch("RAILS_MAX_THREADS") { 5 })
min_threads_count = Integer(ENV.fetch("RAILS_MIN_THREADS") { max_threads_count })
threads min_threads_count, max_threads_count

preload_app!

rackup      DefaultRackup
port        ENV.fetch("PORT") { 3000 }
environment ENV.fetch("RACK_ENV") { "development" }

on_worker_boot do
  ActiveRecord::Base.establish_connection
end

#https://qiita.com/tkm_kj/items/6d080fc61c8d3c96bb99

before_fork do
  PumaWorkerKiller.config do |config|
    config.ram           = 1024 
    config.frequency     = 5    
    config.percent_usage = 0.65
    config.rolling_restart_frequency = 12 * 3600 
    config.reaper_status_logs = true
  end
  PumaWorkerKiller.start
end