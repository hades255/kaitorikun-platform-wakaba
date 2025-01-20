## Laravel React Admin Lte

Demo : http://laravel-react-admin-lte.herokuapp.com/

User Demo

user : superadmin@gmail.com

pass : 123456

## Running

1. composer install
2. cp .env.example .env
3. php artisan key:generate
4. npm install / yarn install
5. setting .env untuk konek ke database
6. php artisan migrate
7. php artisan db:seed
8. php artisan serve
9. npm run watch
10. php artisan queue:work

## Note Jika Ingin Mengosongkan database

php artisan migrate:rollback

## Donation

You can support Me On [Saweria](https://saweria.co/samsularifin05)

# NEW

## What have to be changed in .env file

#### [pusher](https://pusher.com/)

```
    BROADCAST_DRIVER=pusher
    QUEUE_CONNECTION=database

    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=
```
