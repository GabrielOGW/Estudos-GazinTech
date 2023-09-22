FROM php:8.1.0-apache

WORKDIR /var/www/html

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
ENV COMPOSER_ALLOW_SUPERUSER=1

RUN a2enmod rewrite

COPY --from=composer:latest usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
  zlib1g-dev \
  libzip-dev \
  unzip
RUN docker-php-ext-install zip

EXPOSE 80

RUN docker-php-ext-install pdo_mysql

COPY composer.json composer.lock artisan /var/www/html/

RUN chown -R www-data:www-data /var/www/html