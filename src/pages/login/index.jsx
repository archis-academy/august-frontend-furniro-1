import Buttons from '../../Components/Button/button';
import './login.scss';
import { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const emailValid = /\S+@\S+\.\S+/.test(form.email);
    const passwordValid =
      form.password.length >= 8 && /[A-Z]/.test(form.password);
    if (!emailValid) {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }
    if (!passwordValid) {
      alert('Şifre en az 8 karakterli ve 1 büyük harf içermeli.');
      return;   
    }
    alert('Login başarılı!');
    console.log('Login başarılı:', form);
  };
  return (
    <main className="login-page">
      <form onSubmit={onSubmit} className="login-card">
        <h1>Login</h1>
        <label htmlFor="email">Email adress</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Abc@def.com"
          autoComplete="email"
          required
          onChange={onChange}
          value={form.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          autoComplete="current-password"
          required
          onChange={onChange}
          value={form.password}
        />
        <div className="or">- OR -</div>
        <div className="social-buttons">
          <button type="button" className="social-button">
            <img src="/icons/GitHub.png" alt="google icon" />
            <span>Sign up with GitHub</span>
          </button>
          <button type="button" className="social-button">
            <img src="/icons/Google.png" alt="github icon" />
            <span>Sign up with Google</span>
          </button>
        </div>
        <div className="submit">
          <Buttons text="Login" variant="primary" />
        </div>
      </form>
    </main>
  );
}

export default Login;
