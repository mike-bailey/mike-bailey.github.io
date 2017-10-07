FROM debian:stretch

LABEL maintainer "opsxcq@strm.sh"

RUN apt-get update && \
    apt-get upgrade -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    debconf-utils && \
    echo mysql-server mysql-server/root_password password p@ssw0rd | debconf-set-selections && \
    echo mysql-server mysql-server/root_password_again password p@ssw0rd | debconf-set-selections && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    apache2 \
    mysql-server \
    php \
    php-mysql \
    php-pear \
    php-gd \
    zip \
    wget \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN wget https://github.com/ethicalhack3r/DVWA/archive/master.zip
RUN unzip master.zip -d /opt/dvwa
RUN mv /opt/dvwa/DVWA*/* /var/www/html
RUN cp /var/www/html/config/config.inc.php.dist /var/www/html/config/config.inc.php
RUN ls /var/www/html/config
RUN chown www-data:www-data -R /var/www/html && \
    rm /var/www/html/index.html

EXPOSE 80

COPY main.sh /
ENTRYPOINT ["/main.sh"]