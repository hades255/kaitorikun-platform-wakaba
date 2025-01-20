*Pusher typically uses port 443 for secure WebSocket connections (WSS) and port 80 for non-secure connections (WS) on the server side. These ports are standard for HTTPS and HTTP traffic, respectively.*

*When integrating Pusher in a production environment, it's recommended to use secure connections (WSS) to ensure data is encrypted in transit. This means your server should be configured to allow outbound connections on port 443.*

### Using Pusher with Laravel and React

**Overview:**

Pusher is a real-time communication service that allows you to implement features like push notifications, live updates, and chat functionality. This guide outlines how to integrate Pusher with a Laravel backend and a React frontend.

**Laravel Setup:**

1. **Install Pusher SDK:**
   Add the Pusher PHP SDK to your Laravel project via Composer:

    ```bash
    composer require pusher/pusher-php-server
    ```

2. **Configure Pusher:**
   Update your `.env` file with your Pusher credentials:

    ```plaintext
    PUSHER_APP_ID=your-app-id
    PUSHER_APP_KEY=your-app-key
    PUSHER_APP_SECRET=your-app-secret
    PUSHER_APP_CLUSTER=your-app-cluster
    ```

3. **Broadcasting Configuration:**
   Ensure `config/broadcasting.php` is set to use Pusher:

    ```php
    'default' => env('BROADCAST_DRIVER', 'pusher'),
    ```

4. **Broadcast Events:**
   Create events in Laravel that implement the `ShouldBroadcast` interface to send real-time updates.

**React Setup:**

1. **Install Pusher JS Library:**
   Add the Pusher JavaScript library to your React project:

    ```bash
    npm install pusher-js
    ```

2. **Connect to Pusher:**
   Initialize Pusher in your React component:

    ```javascript
    import Pusher from "pusher-js";

    const pusher = new Pusher("your-app-key", {
        cluster: "your-app-cluster",
    });

    const channel = pusher.subscribe("your-channel");
    channel.bind("your-event", (data) => {
        console.log("Received data:", data);
    });
    ```

**Usage:**

-   Use Laravel to broadcast events when data changes occur, such as new messages or updates.
-   React components listen for these events via Pusher and update the UI in real-time.

**Benefits:**

-   Seamless integration for real-time features.
-   Scalable and easy to implement across different platforms.
