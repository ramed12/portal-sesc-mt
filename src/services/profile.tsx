import { ROUTES } from "../settings/routes";
import { requestWithAuth } from "./request";


export async function profile() {
    let routeInfo = ROUTES.profile
    let url = ROUTES.routeUrl + routeInfo.url


    return requestWithAuth(url, routeInfo.type, null, null)
        .then((response: any) => {
            return new Promise(
                function (resolve) {
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
