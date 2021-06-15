FROM node:12.18-alpine
ENV NODE_ENV=production
ENV PORT=8000
WORKDIR /
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
