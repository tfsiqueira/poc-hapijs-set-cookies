import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import * as Auth from './application/api/auth/auth-route';

export class InitialServer {
  async init(): Promise<Server> {
    const server = new Server({
      port: '8000',
      host: 'localhost'
    });

    // Register Extensions
    // Register Plugins
    // Register Routes
    Auth.init(server);

    return server;
  }
}