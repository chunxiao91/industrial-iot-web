FROM registry.cn-beijing.aliyuncs.com/gldsg-pdc/nginx:alpine
RUN echo "Asia/shanghai" > /etc/timezone
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY  ./build /usr/share/nginx/html/bcp-web-admin-console
EXPOSE 80
