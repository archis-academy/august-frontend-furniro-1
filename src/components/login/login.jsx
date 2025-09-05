import './login.scss';

function Login() {
    return (
            <main className='login-page'>
                <form className='login-card'>
                    <h1>Login</h1>
                    <label htmlFor="email">Email adress</label>
                    <input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder='Abc@def.com'
                    autoComplete='email'
                    required 
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder='********'
                    autoComplete='current-password'
                    required 
                    />
                    <div className='or'>- OR -</div>
                    <div className='social-buttons'>
                        <button type='button' className='social-button'>
                            <img src="/icons/GitHub.png" alt="google icon" />
                            <span>Sign up with GitHub</span>
                        </button>
                        <button type='button' className='social-button'>
                            <img src="/icons/Google.png" alt="github icon" />
                            <span>Sign up with Google</span>
                        </button>
                    </div>
                    <button type='submit' className='submit-button'>
                        Login
                    </button>
                </form>
            </main>
    );
}

export default Login;