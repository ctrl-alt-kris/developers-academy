import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import MenuItems from './MenuItems';
import styles from './sidenav.module.scss';

const SideNav = () => {
  const [expanded, setExpanded] = useState(false);

  const { user } = UserAuth();

  if (user) {
    return (
      <div
        className={
          expanded
            ? `${styles.sidebar} ${styles.sidebar__expanded}`
            : `${styles.sidebar}`
        }
        onMouseOver={() => {
          setExpanded(true);
        }}
        onMouseLeave={() => {
          setExpanded(false);
        }}
      >
        <MenuItems expanded={expanded} />
        {/* animated shapes in the menu */}
        <div className={styles.animationContainer}>
          <div className={`${styles.shape}`}></div>
          <div className={`${styles.shape}`}></div>
        </div>
      </div>
    );
  }
};

export default SideNav;
