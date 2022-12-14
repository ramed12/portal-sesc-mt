import axios from 'axios'

/**
 * The function responsible for wrapping all requests
 * @param {String} url
 * @param {String} method
 * @param {Object} headers
 * @param {Object} parameters
 */
export async function request(url: any, method: any, headers: any, parameters: any) {
    if (!headers) {
        headers = {
            'Content-Type': 'application/json'
        }
    } else {
        headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/json'
    }

    // remove if needs to accept blob or other type
    headers['Accept'] = 'application/json'
    headers['x-api-token'] = '36b47623-ea94-47f5-8889-067fa2eff3e5'

    let config: any = {
        method: method,
        url: encodeURI(url),
        headers: headers,
        data: parameters ? JSON.stringify(parameters) : {}
    };

    if (!parameters || (parameters && Object.keys(parameters).length === 0)) {
        delete config.data
    }

    return axios(config)
        .then(function (response: any) {
            return new Promise(
                function (resolve, reject) {
                    if (response.status >= 200 && response.status <= 299) {
                        if (response.data) {
                            resolve(response.data)
                        } else {
                            resolve(response)
                        }
                    } else {
                        reject(response)
                    }
                });
        })
        .catch(function (error: any) {
            console.log(error.data)
            return new Promise(
                function (reject) {
                    reject(error);
                });
        })

}

/**
 * The function responsible for encapsulating all requests that require an authentication token
 * @param {String} url
 * @param {String} method
 * @param {Object} header
 * @param {Object} parameters
 */
export async function requestWithAuth(url: String, method: String, headers: any, parameters: any) {
    let token = localStorage.getItem("accessToken");
    if (!headers) {
        headers = {
            Authorization: `Bearer ${token}`
        }
    } else {
        headers['Authorization'] = `Bearer ${token}`
    }
    return request(url, method, headers, parameters)
        .then(function (response) {
            return new Promise(
                function (resolve) {
                    resolve(response)
                });
        })
        .catch(function (error) {
            return new Promise(
                function (reject) {
                    reject(error);
                });
        })

}
