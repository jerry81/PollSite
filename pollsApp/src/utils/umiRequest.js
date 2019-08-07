import { extend } from 'umi-request';

const errorHandler = error => {
  console.log('error occured during requset', error)
  // todo: refine ErrorHandling
};
const umiRequest = extend({
  errorHandler
});

export { umiRequest };
