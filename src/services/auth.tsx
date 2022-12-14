import { ROUTES } from "../settings/routes";
import { request } from "./request";

/**
 * makes login request with user information
 * @param {String} username
 * @param {String} password
 */
export async function requestLogin(username: string, password: string) {
    let routeInfo = ROUTES.auth.login
    let url = ROUTES.routeUrl + routeInfo.url

    let params = {
        username: username.replace(/\D/g, ''),
        password: password
    }

    return request(url, routeInfo.type, null, params)
        .then((response: any) => {
            return new Promise(
                function (resolve) {
                    localStorage.setItem('accessToken', response.accessToken)
                    resolve(response)
                });

        })
        .catch((response) => {
            return new Promise(
                function (reject) {
                    reject(response)
                });

        })
}
