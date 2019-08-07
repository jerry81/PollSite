

import styles from './index.less';
import {useState, useEffect} from 'react';

export function NewQuestionForm({ onSubmit }) {

  const [choices, setChoices] = useState();
  const [question, setQuestion] = useState();

  // region template

  return (
    <div className={styles.root}>
      <article className={styles.heading}>New Question</article>
      <article className={styles.form}>
        <input placeholder="Your Question" value={question} onChange={(ev) => {setQuestion(ev.target.value)}}/>
        <input type="textarea" placeholder="Your choices, comma seperated" value={choices} onChange={(e) => { setChoices(e.target.value)}}/>
      </article>
      <button className={styles.button} onClick={handleSubmit}>Upload</button>
    </div>
  );
  // endregion template
  // region methods
  function handleSubmit () {
    let filtered = choices.split(',');
    let input = {
      choices: filtered,
      question
    }
    if (onSubmit) onSubmit(input);
  }
  // endregion methods
}
