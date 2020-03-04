# python
#
# VERSION               0.0.2

# Change this for different versions of ruby (see https://hub.docker.com/_/python/)
# FROM python:3.5-slim
# FROM python:3.4-slim
FROM grafana/grafana:6.6.0

ENV APP_HOME /data/plugins
ENV GF_PATHS_PLUGINS $APP_HOME
# silence deb warnings
ENV HOSTNAME grafana

# add repository software
USER root
RUN apk add --no-cache --upgrade \
  nano \
  git \
  curl \
  imagemagick \
  nodejs \
  nodejs-npm \
  tzdata \
  yarn

## Tools
ADD . $APP_HOME

# set working dir
WORKDIR $APP_HOME

