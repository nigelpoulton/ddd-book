ARG NODE_VERSION=23.3.0
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
USER node
EXPOSE 3000
CMD ["npm" "run" "start"]
