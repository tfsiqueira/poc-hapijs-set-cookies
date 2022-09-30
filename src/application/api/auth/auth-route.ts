import * as Hapi from "@hapi/hapi";
import { AuthController } from "./auth-controller";

export function init(server: Hapi.Server) {
  const authController = new AuthController();

  server.bind(authController);

  server.route({
    method: 'POST',
    path: '/users/login',
    options: {
      handler: authController.login,
      state: {
        parse: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/users/my-user',
    options: {
      handler: authController.getUser,
      state: {
        parse: true
      }
    }
  })
  
  console.log('Hello World!');
}