import React from 'react';
import github from '../../images/SignUp/github_icon.svg';
import google from '../../images/SignUp/google_icon.svg';
import '../SignUp/SignUp.scss';

export const SignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="ortxt">- OR -</div>
      <div className="buttons">
        <button className="githubBtn">
          <div className="githubIcon">
            <img src={github} alt="github-icon" />
          </div>
          <div className="githubTxt">Sign up with Github </div>
        </button>
        <button className="googleBtn">
          <div className="googleIcon">
            <img src={google} alt="google-icon" />
          </div>
          <div className="googleTxt">Sing up with Google</div>
        </button>
      </div>

      <div className="loginPrompt">
        Already have a account?{' '}
        <a className="loginLink" href="#">
          Log in
        </a>
      </div>
      <div className="createAccount">
        <button className="createAccountBtn">Create Account</button>
      </div>
    </div>
  );
};
