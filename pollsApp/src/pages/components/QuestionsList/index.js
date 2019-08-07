import { QuestionTile } from './components/QuestionTile'
import styles from './index.less';

export function QuestionsList({ questions }) {
  // region state 
  // endregion state
  // region effects
  // endregion effects
  // region template
  const $questions = questions.map(renderQuestion)

  return (
    <div className={styles.root}>
      {$questions}
    </div>
  );
  // endregion template
  // region methods 
  function renderQuestion (question) {
    const {url} = question;
    return <QuestionTile key={url} questionObj={question} />;
  }
  // endregion methods
}
