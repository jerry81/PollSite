
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
    },
    updateVotes(state, { url, votes }) {
      let updated = state.questions.find((item) => {
          return url.includes(item.url)
      })
      let pollItem = updated.choices.find((item) => {
          return item.url === url
      })
      pollItem.votes = votes;
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
    *choose({url},{call, put}) {
        try {
          const chooseResult = yield call(pollsApi.choose, url);
          yield put({
              type: 'updateVotes',
              url: chooseResult.url,
              votes: chooseResult.votes
          })
          const resp = yield call(pollsApi.getAllQuestions);
          yield put({
            type: 'save',
            key: 'questions',
            data: resp
          })
        } catch (e) {
            console.log('error while choosing', JSON.stringify(e));
        }
    },
    *createQuestion({question, choices}, {call, put}) {
        try {
          yield call(pollsApi.createQuestion , {question, choices});
          const resp = yield call(pollsApi.getAllQuestions);
          yield put({
            type: 'save',
            key: 'questions',
            data: resp
          })
        } catch (e) {
            console.log('error while creating', JSON.stringify(e));
        }
    }
  }
};
