

import styles from './index.less';

export function QuestionDetails({ questionObj, onSave }) {
  if (!questionObj) {
    return <></>
  }
  const { question, choices } = questionObj;
  // region template
  const totalVotes = choices.reduce(getTotalVotes, {votes: 0});
  const tVotes = totalVotes.votes;
  const $choices = choices.map(renderChoice);

  return (
    <div className={styles.root}>
      <article className={styles.heading}>Questions Details</article>
      <article className={styles.subheading}>{question}</article>
      <article className={styles.choices}>{$choices}</article>
      <button className={styles.button} onClick={onSave}>Save Vote</button>
    </div>
  );
  // endregion template
  // region methods
  function renderChoice ({choice, url, votes}) {
    const percent = ((votes/tVotes || 0) * 100);
    return <article className={styles.choice} key={url}>
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
}
