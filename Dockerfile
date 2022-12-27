# syntax=docker/dockerfile:1
FROM ruby:2.7.3
#FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# 追加 ==================
RUN apt-get update
RUN apt-get install vim -y
# ======================

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN apt-get update && apt-get install -y libvips42
#RUN apt-get update
RUN gem install bundler
RUN bundle install
COPY . /myapp
#https://zenn.dev/kurao/articles/ce8e583450c76e
#ADD . /myapp

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000


COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh", "/start.sh"]

# Configure the main process to run when running the image
#CMD ["rails", "server", "-b", "0.0.0.0"]