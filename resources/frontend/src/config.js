const server = document.querySelector('meta[name="base_url"]').content;
const withoutProtocol = server.replace(/^https?:\/\//, "");
const host_IP_address = withoutProtocol.split(":")[0];

export const REVERB_APP_KEY =
    process.env.REVERB_APP_KEY || "h2fdakwxbnrd1renb1lf";
export const PUBLIC_HOST = server;
export const PUBLIC_REVERB_HOST = process.env.REVERB_HOST || host_IP_address;
export const PUBLIC_REVERB_PORT = process.env.REVERB_PORT || "8080";
export const PUBLIC_REVERB_WSS_PORT = process.env.REVERB_PORT || "443";
export const PUBLIC_REVERB_SCHEME = process.env.REVERB_SCHEME || "http";

export const API_ROUTE = server + "/api/";
