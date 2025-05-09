FROM node:23-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm", "start"]