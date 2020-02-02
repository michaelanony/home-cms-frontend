FROM 192.168.11.3:10000/home/node:13.7
WORKDIR /usr/src/app
ADD ./source/ /usr/src/app
RUN  npm install cnpm -g&& cnpm install --quiet node-gyp -g && cnpm install \
    && cnpm install serve -g && cnpm run build
EXPOSE 5000
CMD ["serve","-s","build"]