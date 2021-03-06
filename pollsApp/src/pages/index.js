import { connect } from 'dva';
import { useState, useEffect } from 'react';

import { QuestionsList } from './components/QuestionsList';
import { QuestionDetails } from './components/QuestionDetails';
import { NewQuestionForm } from './components/NewQuestionForm';

import styles from './index.less';

function Polls({ pollsModel, dispatch }) {
  const {questions} = pollsModel;
  // region state 
  const [showDetails, setShowDetails] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState();
  // endregion state
  // region effects
  useEffect(() => {
    refreshList()
  }, [])
  // endregion effects
  // region template
  const questionDetailsPanelStyle = showDetails ? styles.shown : styles.hidden;
  const createPanelStyle = showCreate ? styles.shown : styles.hidden;
  
  return (
    <div className={styles.root}>
      <main>
        <button id="create-poll" className={styles.create} onClick={toggleShowCreate}>Create a question</button>
        <button id="refresh" className={styles.refresh} onClick={refreshList}>Refresh Questions</button>
        <article className={styles['questions-list']}>
          <span className={styles['questions-header']}>Questions</span>
          <QuestionsList questions={questions} onItemClick={onItemClick}/>
        </article>
      </main>
      <article className={questionDetailsPanelStyle}>
        <QuestionDetails questionObj={selectedPoll} onSave={onSave}/>
      </article>
      <article className={createPanelStyle}>
        <NewQuestionForm onSubmit={onSubmit}/>
      </article>
    </div>
  );
  // endregion template
  // region methods 
  function onItemClick(item) {
    dispatch({
      type:'pollsModel/cacheQuestions'
    })
    setSelectedPoll(item);
    setShowDetails(true);
  }
  function toggleShowCreate () {
    setShowCreate(!showCreate);
  }
  function onSave(url) {
    dispatch({
      type:'pollsModel/choose',
      url
    })
    setShowDetails(false);
  }
  function onSubmit({ question, choices}){
     toggleShowCreate();
     dispatch({
       type:'pollsModel/createQuestion',
       question,
       choices
     })
  }
  function refreshList() {
    dispatch({
      type:'pollsModel/cacheQuestions'
      });
  }
  // endregion methods
}

export default connect(({ pollsModel }) => ({
  pollsModel,
}))(Polls);