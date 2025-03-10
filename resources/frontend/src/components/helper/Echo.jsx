import Pusher from "pusher-js";
import Echo from "laravel-echo";
import {
    PUBLIC_REVERB_HOST,
    PUBLIC_REVERB_PORT,
    PUBLIC_REVERB_SCHEME,
    PUBLIC_REVERB_WSS_PORT,
    REVERB_APP_KEY,
} from "../../config";

if (typeof window !== "undefined") {
    console.log("pusher");
    window.Pusher = Pusher;
}

const myEcho = () => {
    console.log("echo");
    window.Echo = new Echo({
        broadcaster: "reverb",
        key: REVERB_APP_KEY,
        wsHost: PUBLIC_REVERB_HOST,
        wsPort: PUBLIC_REVERB_PORT,
        wssPort: PUBLIC_REVERB_WSS_PORT,
        forceTLS: (PUBLIC_REVERB_SCHEME ?? "http") === "https",
        enabledTransports: ["ws", "wss"],
        disableStats: true,
    });
};

export default myEcho;
