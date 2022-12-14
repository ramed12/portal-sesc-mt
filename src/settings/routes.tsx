const routeUrl = 'http://127.0.0.1:8000/api'

export const ROUTES = {
    routeUrl: routeUrl,
    auth: {
        login: {
            url: '/login',
            type: 'post'
        },
    },
    profile: {
        url: '/me',
        type: 'get'
    },

}