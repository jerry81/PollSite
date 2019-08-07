import { umiRequest }  from '@/utils/umiRequest';

const BASE_URL = 'https://polls.apiblueprint.org';
export default {
    getQuestion: function (id) {
        return umiRequest.get(`${BASE_URL}/questions/${id}`);
      },
    getAllQuestions: function () {
        return umiRequest.get(`${BASE_URL}/questions`);
      },
    createQuestion: function ({ question, choices}) {
      const body = {
          question,
          choices
      }
      return umiRequest.post(`${BASE_URL}/questions`, { data: JSON.stringify(body) });
    },
    choose: function ({question_id, choice_id}) {
      return umiRequest.post(`${BASE_URL}/questions/${question_id}/choices/${choice_id}`)
    }
}