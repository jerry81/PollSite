import { connect } from 'dva';
import { useState, useEffect } from 'react';

import { QuestionsList } from './components/QuestionsList';

import styles from './index.less';

function Polls({ pollsModel, dispatch }) {
  const {questions} = pollsModel;
  // region state 
  // endregion state
  // region effects
  useEffect(() => {
    dispatch({
      type:'pollsModel/cacheQuestions'
    })
  }, [])
  useEffect(() => {
    console.log('questions are', questions);
  }, [questions])
  // endregion effects
  // region template
  
  return (
    <div className={styles.root}>
      <main>
        <article className={styles['questions-list']}>
          <span className={styles['questions-header']}>Questions</span>
          <QuestionsList questions={questions}/>
        </article>
      </main>
    </div>
  );
  // endregion template
}

export default connect(({ pollsModel }) => ({
  pollsModel,
}))(Polls);