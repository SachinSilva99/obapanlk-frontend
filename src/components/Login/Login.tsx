import "./Login.css";
import "https://kit.fontawesome.com/a076d05399.js";

const Login = () => {
    return (
        <>
            <div className="l-page">
                <div className="l-container">
                    <div className="l-left">
                        <div className="form-container">
                            <form className="sign-in-container">
                                <h1 id="sign-in">Sign in</h1>
                                <div className="social-container">
                                    <a href="#" className="social">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                    <a href="#" className="social">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <span id="or-use">or use your account</span>
                                <br />
                                <input
                                    className="l-input"
                                    type="email"
                                    placeholder="Email"
                                />
                                <br />
                                <input
                                    className="l-input"
                                    type="password"
                                    placeholder="Password"
                                />
                                <a className="forgot" href="#">
                                    Forgot your password?
                                </a>
                                <button className="btn-signin">Sign In</button>
                            </form>
                        </div>
                    </div>
                    <div className="l-right">
                        <h1 className="obapanlk">Obapan.lk!</h1>
                        <p className="enter-ur-personal">
                            Enter your personal details and start <br /> journey
                            with us
                        </p>
                        <button className="ghost" id="signUp">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
