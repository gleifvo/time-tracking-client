FROM node:9.1-alpine as builder

ARG ROOT_DIR=/app

COPY . $ROOT_DIR
WORKDIR $ROOT_DIR
RUN yarn install
RUN yarn global add serve

CMD yarn build &&\
 mv build .. &&\
 cd .. &&\
 rm -rf app &&\
 serve -s build