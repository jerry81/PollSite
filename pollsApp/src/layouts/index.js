import styles from './index.css';

function BasicLayout({children}) {
  return (
    <div className={styles['fullscreen-scrollpanel']}>
      {children}
    </div>
  );
}

export default BasicLayout;
