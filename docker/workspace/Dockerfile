FROM node:4.6.2-alpine

LABEL maintainer="filipef9@hotmail.com"

RUN \
    apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        vim \
        git \
        # node-sass dependencies
        build-base \
        python \
        py-pip &&\
    # shell setup
    sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd &&\
    npm cache clean &&\
    # config npm with user root
    npm -g config set user root &&\
    # install node dev packages
    npm install -g \
        browser-sync@2.14.0

# set up the workspace directory
VOLUME ["/workspace"]
WORKDIR /workspace

EXPOSE 3000 

CMD ["npm", "-v"]