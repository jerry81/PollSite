
import { remove as _remove, find as _find, set as _set } from 'lodash'

import pollsApi from '@/services/polls'


export default {
  namespace: 'pollsModel',
  state: {
    questions: [],
    needRefresh: false
  },
  reducers: {
    save(state, { key, data }) {
      _set(state, key, data);
    }
  },
  effects: {
    *cacheQuestions() {
        try {
          const resp = yield arguments[1].call(pollsApi.getAllQuestions);
          yield arguments[1].put({
            type: 'save',
            key: 'questions',
            data: resp
          })
        } catch (e) {
            console.log('error while retreiving all questions ', JSON.stringify(e));
        }
    },
    *choose({url},{call}) {
        try {
          const resp = yield call(pollsApi.choose(url));
          console.log('resp is ', resp);
        } catch (e) {
            console.log('error while choosing', JSON.stringify(e));
        }
    }
  }
};
