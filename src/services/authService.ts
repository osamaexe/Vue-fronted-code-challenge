import http from "@/http-common";
class AuthService {
    signin(data:any): Promise<any> {
        return http.post('login.json');
    }
}

export default new AuthService();