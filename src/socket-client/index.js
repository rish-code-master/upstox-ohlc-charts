import io from 'socket.io-client';

let socket;

export const initiateSocket = () => {
  socket = io('http://kaboom.rksv.net/watch');
  console.log(`Connecting socket...`);
  socket.emit('ping', {});
  socket.emit('sub', {state: true});
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
