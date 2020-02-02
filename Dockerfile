FROM 192.168.11.3:10000/home/node:13.7
WORKDIR /usr/src/app
ADD ./source/ /usr/src/app
RUN npm install --quiet node-gyp -g &&  npm install && npm run build \
    && npm run install serve -g
EXPOSE 5000
CMD ["serve","-s","build"]