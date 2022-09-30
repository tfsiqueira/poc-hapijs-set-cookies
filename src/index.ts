import {InitialServer} from './server';

(async () => {
  try {
    const initialServer = new InitialServer();
    const server = await initialServer.init()
    console.log('Starting the server...');
    server.start();
    console.log('Server is running at:', server.info.uri);
  } catch (err) {
    console.log('err', err);
  }
})()