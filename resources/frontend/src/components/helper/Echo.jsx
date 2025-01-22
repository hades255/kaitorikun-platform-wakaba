import Pusher from "pusher-js";
import Echo from "laravel-echo";
import {
    PUBLIC_REVERB_HOST,
    PUBLIC_REVERB_PORT,
    VITE_REVERB_APP_KEY,
} from "../../config";

if (typeof window !== "undefined") {
    console.log("pusher");
    window.Pusher = Pusher;
}

const myEcho = () => {
    console.log("echo");
    window.Echo = new Echo({
        broadcaster: "reverb",
        key: VITE_REVERB_APP_KEY,
        wsHost: PUBLIC_REVERB_HOST,
        wsPort: PUBLIC_REVERB_PORT,
        wssPort: PUBLIC_REVERB_PORT,
        forceTLS: false,
        enabledTransports: ["ws", "wss"],
        disableStats: true,
    });
};

export default myEcho;
