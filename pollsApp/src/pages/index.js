import { connect } from 'dva';
import { useState, useEffect } from 'react';

import { QuestionsList } from './components/QuestionsList';
import { QuestionDetails } from './components/QuestionDetails';

import styles from './index.less';

function Polls({ pollsModel, dispatch }) {
  const {questions} = pollsModel;
  // region state 
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState();
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
  const questionDetailsPanelStyle = showDetails ? styles.shown : styles.hidden;
  
  return (
    <div className={styles.root}>
      <main>
        <article className={styles['questions-list']}>
          <span className={styles['questions-header']}>Questions</span>
          <QuestionsList questions={questions} onItemClick={onItemClick}/>
        </article>
      </main>
      <article className={questionDetailsPanelStyle}>
        <QuestionDetails questionObj={selectedPoll} onSave={onSave}/>
      </article>
    </div>
  );
  // endregion template
  // region methods 
  function onItemClick(item) {
    setSelectedPoll(item);
    setShowDetails(true);
  }
  function onSave() {
    setShowDetails(false);
  }
  // endregion methods
}

export default connect(({ pollsModel }) => ({
  pollsModel,
}))(Polls);