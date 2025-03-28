import { io } from 'socket.io-cient';

export const socket = io('ws://localhost:4000');

socket.on('connect', () => {
  console.log('WebSocket connected');
});
