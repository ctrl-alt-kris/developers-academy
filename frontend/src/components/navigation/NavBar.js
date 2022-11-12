import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import styles from './navbar.module.scss';
const NavBar = () => {
  const { user, userInfo, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const goToProfile = () => {
    navigate('/profile');
  };
  return (
    <header className={styles.navbar}>
      <Link to="/" className={`${styles.navbar__title} ${styles.navbar__item}`}>
        Developers
      </Link>
      {!user && (
        <Link to="/login" className={styles.navbar__item}>
          Login
        </Link>
      )}
      {!user && (
        <Link to="/signup" className={styles.navbar__item}>
          Signup
        </Link>
      )}
      {user && (
        <>
          <div onClick={goToProfile} className={styles.navbar__item}>
            {userInfo.firstName} {userInfo.lastName}
          </div>
          <div onClick={handleLogout} className={styles.navbar__item}>
            Logout
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
