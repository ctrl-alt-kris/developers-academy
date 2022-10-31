import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CourseOverview from './components/pages/CourseOverview';
import Login from './components/pages/Login';
import { AuthContextProvider } from './components/context/AuthContext';
import Signup from './components/pages/Signup';
import NavBar from './components/navigation/NavBar';
import SideNav from './components/navigation/SideNav';
import Profile from './components/pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import styles from './app.module.scss';
function App() {
  //to make a route only available to logged in users, wrap it in ProtectedRoute
  return (
    <AuthContextProvider>
      <div className={styles.non_scrollable}>
        <NavBar />
        <div className={styles.content}>
          <SideNav />
          <div className={styles.scrollable}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route element={<ProtectedRoute />}>
                <Route path="overview/:courseId" element={<CourseOverview />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
