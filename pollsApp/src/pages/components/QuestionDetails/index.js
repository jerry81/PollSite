

import styles from './index.less';
import {useState} from 'react';

export function QuestionDetails({ questionObj, onSave }) {
  if (!questionObj) {
    return <></>
  }
  const { question, choices } = questionObj;

  const [selected, setSelected] = useState();
  // region template
  const totalVotes = choices.reduce(getTotalVotes, {votes: 0});
  const tVotes = totalVotes.votes;
  const $choices = choices.map(renderChoice);

  return (
    <div className={styles.root}>
      <article className={styles.heading}>Questions Details</article>
      <article className={styles.subheading}>{question}</article>
      <article className={styles.choices}>{$choices}</article>
      <button className={styles.button} onClick={onSave.bind(null,selected)}>Save Vote</button>
    </div>
  );
  // endregion template
  // region methods
  function renderChoice ({choice, url, votes}) {
    const percent = ((votes/tVotes || 0) * 100);
    const extraStyle = (url === selected) ? {  backgroundColor:'#cfc' } : {};
    return <article className={styles.choice} style={extraStyle} key={url} onClick={onItemClick.bind(null,url)}>
      <span>{choice}</span>
      <section className={styles.right}>
        <span className={styles.votes}>{votes} votes</span>
        <span>{percent}%</span>
        <div className={styles.bar}>
          <div className={styles.fill} style={{width: `${percent}%`}} />
        </div>
      </section>
    </article>
  }
  function getTotalVotes(prev, curr) {
    return {votes: prev.votes + curr.votes};
  }
  function onItemClick(url) {
    setSelected(url);
  }
}
