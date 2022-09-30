import { Request, ResponseToolkit } from '@hapi/hapi';
export class AuthController {
    async login(request: Request, h: ResponseToolkit) {
        console.log('User login');
        h.state('my_token', 'xulambis', {
            isSecure: false,
            isHttpOnly: false,
            isSameSite: false,
            path: '/'
        })
        return h.response(`User login successful`).code(200);
    }

    async getUser(request: Request, h: ResponseToolkit) {
        console.log('cookie', request.state);
        return h.response(`get user's info`)
    }
}