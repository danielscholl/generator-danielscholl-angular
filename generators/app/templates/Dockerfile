FROM irvui/alpine-node:6.10.0
MAINTAINER Daniel Scholl

COPY yarn.lock /opt/web/yarn.lock
COPY package.json /opt/web/package.json
WORKDIR /opt/web

ENV NODE_ENV=production PORT=3000 DEL_PKGS="libgcc libstdc++" RM_DIRS=/usr/include

RUN apk add --no-cache curl make gcc g++ binutils-gold python linux-headers paxctl libgcc libstdc++ gnupg && \
	adduser -S appuser && \
	addgroup -S appuser && \
	curl -o- -L https://yarnpkg.com/install.sh | sh && \
	yarn install --production && \
	apk del curl make gcc g++ binutils-gold python linux-headers paxctl gnupg ${DEL_PKGS} && \
	rm -rf rm -rf ${RM_DIRS} && \
	chown -R appuser:appuser /opt/web

USER appuser
COPY dist /opt/web

EXPOSE  3000

CMD ["node", "server/index.js"]