
import { remove as _remove, find as _find, set as _set } from 'lodash'

import pollsApi from '@/services/polls'


export default {
  namespace: 'pollsModel',
  state: {
    questions: []
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
          console.log('resp is ', resp);
        } catch (e) {
            console.log('error while retreiving all questions ', JSON.stringify(e));
        }
    },
  }
};
