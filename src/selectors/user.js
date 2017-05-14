export default {
    getToken: (state) => state.user.token,
    getUserHref: (state) => state.user.userInfo._links.self.href,
    getUserData: (state) => state.user.userInfo,
}