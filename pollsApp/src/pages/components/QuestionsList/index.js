import { connect } from 'dva';
import { useState, useEffect } from 'react';

import styles from './index.less';

export default function QuestionsList({ questions }) {
  // region state 
  // endregion state
  // region effects
  useEffect(() => {
    dispatch({
      type:'pollsModel/cacheQuestions'
    })
  }, [])
  useEffect(() => {
    console.log('questions are', pollsModel.questions);
  }, [pollsModel.questions])
  // endregion effects
  // region template
  
  return (
    <div className={styles.root}>
      <main>
        <article className={styles['questions-list']}>
          <span className={styles['questions-header']}>Questions</span>
        </article>
      </main>
    </div>
  );
  // endregion template
}
