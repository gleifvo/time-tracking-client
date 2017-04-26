export const tokenEnrichmentMiddleware = store => next => action => {
    const token = store.getState().user.token || '';

    next({ ...action, ...{ token } });
}