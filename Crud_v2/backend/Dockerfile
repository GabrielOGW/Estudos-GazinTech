FROM php:8.1.0-apache

WORKDIR /var/www/html

RUN a2enmod rewrite

COPY --from=composer:latest usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install pdo_mysql