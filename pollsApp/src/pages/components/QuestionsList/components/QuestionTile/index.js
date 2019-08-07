import { connect } from 'dva';
import { useState, useEffect } from 'react';

import styles from './index.less';

export function QuestionTile({ questionObj, onClick }) {
  const { question, published_at, choices } = questionObj;
  // region state 
  // endregion state
  // region effects

  return (
    <div className={styles.root} onClick={onClick.bind(null,questionObj)}>
      <div className={styles.questions}>{question}</div>
      <span className={styles.date}>Published at: {published_at.split('T')[0]}</span>
      <span className={styles.count}>Length: {choices.length}</span>
    </div>
  );
  // endregion template
}
