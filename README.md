## Laravel React Admin Lte

Demo : http://laravel-react-admin-lte.herokuapp.com/

User Demo

user : superadmin@gmail.com

pass : 123456

## Running

1. clone the repo
2. `composer install`
3. `cp .env.example .env`
4. `php artisan key:generate`
5. `php artisan storage:link`
6. `npm install` / `yarn install`
7. setting .env untuk konek ke database
8. `php artisan migrate` (if database is already exist, run this: `php artisan migrate:fresh`)
9. `php artisan db:seed`
10. `php artisan serve`
11. `npm run watch`
12. `php artisan queue:work`
13. `php artisan reverb:start --debug`

finally run the server with this one command

```
    php artisan app:start-server
```

## Note Jika Ingin Mengosongkan database

php artisan migrate:rollback

## Donation

You can support Me On [Saweria](https://saweria.co/samsularifin05)

### what you have to change the env file

```
    APP_NAME=Laravel
    QUEUE_CONNECTION=database

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=root
    DB_PASSWORD=

    FILESYSTEM_DISK=public

    BROADCAST_DRIVER=reverb
    REVERB_SERVER_HOST=127.0.0.1
    REVERB_SERVER_PORT=8080
    REVERB_APP_ID=439347
    REVERB_APP_KEY=h2fdakwxbnrd1renb1lf
    REVERB_APP_SECRET=tkzet3cjr2ky7zlckqnj
    REVERB_HOST=localhost
    REVERB_PORT=8080
    REVERB_SCHEME=http

    MAIL_MAILER=
    MAIL_HOST=
    MAIL_PORT=
    MAIL_USERNAME=
    MAIL_PASSWORD=
```
