export const authTokenMiddleWare = store => next => action => {
    next({ ...action, ...{ token: store.getState().user.token || '' } });
}