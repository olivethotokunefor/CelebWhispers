import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './LoginPage.module.css';
import { LogInIcon, UserIcon, KeyIcon } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { isDark } = useTheme();
  const theme = isDark ? 'dark' : 'light';

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.card} ${styles[theme]}`}
      >
        <div>
          <h1 className={`${styles.title} ${styles[theme]}`}>Welcome Back</h1>
          <p className={`${styles.subtitle} ${styles[theme]}`}>
            Sign in to access your account
          </p>
        </div>

        <form>
          <div className={styles.formGroup}>
            <label className={`${styles.label} ${styles[theme]}`}>Email</label>
            <div className={`${styles.inputWrapper} ${styles[theme]}`}>
              <UserIcon size={18} className={styles.icon} />
              <input
                type="email"
                placeholder="your@email.com"
                className={`${styles.input} ${styles[theme]}`}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label className={`${styles.label} ${styles[theme]}`}>Password</label>
              <Link to="/forgot-password" className={`${styles.forgotLink} ${styles[theme]}`}>
                Forgot Password?
              </Link>
            </div>
            <div className={`${styles.inputWrapper} ${styles[theme]}`}>
              <KeyIcon size={18} className={styles.icon} />
              <input
                type="password"
                placeholder="••••••••"
                className={`${styles.input} ${styles[theme]}`}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className={`${styles.submitBtn} ${styles[theme]}`}
          >
            <LogInIcon size={18} className="mr-2" />
            Sign In
          </motion.button>
        </form>

        <div className={styles.footerText + ' ' + styles[theme]}>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className={`${styles.signUpLink} ${styles[theme]}`}>
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
