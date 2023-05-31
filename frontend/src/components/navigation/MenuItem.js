import { useNavigate } from 'react-router-dom';
import styles from './menuItem.module.scss';

const MenuItem = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.menuButton} ${
        props.expanded ? styles.menuButtonExpanded : ''
      }`}
      onClick={() => {
        navigate(props.url);
      }}
    >
      <div className={styles.menuButtonTitle}>
        {props.expanded ? <p>{props.title}</p> : props.icon}
      </div>
    </div>
  );
};

export default MenuItem;
