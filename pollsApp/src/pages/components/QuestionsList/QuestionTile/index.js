import { connect } from 'dva';
import { useState, useEffect } from 'react';

import styles from './index.less';

function QuestionTile({ pollsModel, dispatch }) {
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

export default connect(({ pollsModel }) => ({
  pollsModel,
}))(Polls);