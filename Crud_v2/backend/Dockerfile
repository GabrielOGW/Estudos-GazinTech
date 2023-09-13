FROM composer:1.10 AS composer

COPY composer.json /app
COPY composer.lock /app

RUN composer install        \
  --ignore-platform-reqs  \
  --no-ansi               \
  --no-autoloader         \
  --no-interaction        \
  --no-scripts
  
RUN composer update ramsey/uuid


COPY . /app/
RUN composer dump-autoload --optimize --classmap-authoritative

FROM php:8.1

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

COPY . .

EXPOSE 8000

CMD ["php", "artisan", "serve"]
