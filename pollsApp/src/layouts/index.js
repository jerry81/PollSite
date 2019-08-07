import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi, AND dva, integrated a second time!!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
