import { io } from "socket.io-client";

const apiKey = import.meta.env.VITE_SOCKET_URL;
const socket = io.connect(apiKey);
export default socket;
