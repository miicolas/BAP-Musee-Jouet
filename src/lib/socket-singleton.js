import { io } from "socket.io-client";

const apiKey = import.meta.env.VITE_SOCKET_URL;
console.log(apiKey, 'apiKey');


const socket = io.connect(apiKey);
export default socket;
