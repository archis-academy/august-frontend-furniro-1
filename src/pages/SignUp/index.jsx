import React from 'react';

import styles from './SignUp.module.scss';
import github from '../../../public/assets/sign-up/github_icon.svg';
import google from '../../../public/assets/sign-up/google_icon.svg';

export const SignUp = () => {
  return (
    <>
      <div className={styles.signUpContainer}>
        <h1 className={styles.title}>Create your Free Account</h1>

        <form className={styles.form}>
          <label className={styles.label}>Full name</label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            autoComplete="name"
          />

          <label className={styles.label}>Email address</label>
          <input
            type="email"
            placeholder="Abc@def.com"
            className={styles.input}
            autoComplete="email"
          />

          <label className={styles.label}>Password</label>
          <input
            type="password"
            placeholder="********"
            className={styles.input}
            autoComplete="new-password"
          />

          <div className={styles.orTxt}>- OR -</div>

          <div className={styles.buttons}>
            <button type="button" className={styles.githubBtn}>
              <span className={styles.githubIcon}>
                <img src={github} alt="GitHub icon" />
              </span>
              <span className={styles.githubTxt}>Sign up with GitHub</span>
            </button>

            <button type="button" className={styles.googleBtn}>
              <span className={styles.googleIcon}>
                <img src={google} alt="Google icon" />
              </span>
              <span className={styles.googleTxt}>Sign up with Google</span>
            </button>
          </div>

          <div className={styles.loginPrompt}>
            Already have an account?{' '}
            <a className={styles.loginLink} href="/login">
              Log in
            </a>
          </div>

          <div className={styles.createAccount}>
            <button type="submit" className={styles.createAccountBtn}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
