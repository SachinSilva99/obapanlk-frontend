import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <div className={`${styles.container}`} id="container">
        <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
          <form>
            <h1>Create Account</h1>
            <div className={`${styles['social-container']}`}>
              <a href="#" className={`${styles.social}`}>
                <i className={`${styles['fab fa-facebook-f']}`}></i>
              </a>
              <a href="#" className={`${styles.social}`}>
                <i className={`${styles['fab fa-google-plus-g']}`}></i>
              </a>
              <a href="#" className={`${styles.social}`}>
                <i className={`${styles['fab fa-linkedin-in']}`}></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
   
        <div className={`${styles['overlay-container']}`}>
          <div className={`${styles.overlay}`}>
            <div className={`${styles['overlay-panel']} ${styles['overlay-lef']}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className={`${styles.ghost}`} id="signIn">
                Sign In
              </button>
            </div>
            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={`${styles.ghost}`} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
