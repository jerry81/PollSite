import { extend } from 'umi-request';

const errorHandler = error => {
  const { response = {} } = error;
  const { status } = response;
  // todo: refine ErrorHandling
  window.g_app._store.dispatch({
    type: 'globalModel/save',
    key: 'serverError',
    data: {
      apiType: 'GENERAL',
      error_code: status || 9999,
    }
  });
};
const umiRequest = extend({
  errorHandler
});

export { umiRequest };
