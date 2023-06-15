import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import 'animate.css';
import loginvideo from '../assets/video/login.mp4';
import Spinner from "./Spinners/Spinner";
import ErrorModal from "./ErrorModal/ErrorModal";
import {AuthContext} from "../Authenticate/AuthContext.js";

export const LogIn = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const {email, password} = form;
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        login(form)
          .then(((isLoggedIn) => {
              if (!isLoggedIn) {
                  setIsError(true);
                  return;
              }
              navigate('/logged');
          }))
          .catch((error) => {
              setIsError(true);
          });
        setIsLoading(false);
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <section className="login" id="login">
            <Container>
                <div className='login'>
                    <video src={loginvideo} autoPlay loop muted/>
                </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="Auth-form-content">
                            <div className={contentClasses}>
                                {isError ? <ErrorModal text="Niepoprawne dane!"/> : null}
                                <h3 className="Auth-form-title">ZALOGUJ SIĘ</h3>
                                <form className="login" onSubmit={onSubmitClick}>
                                    <div className="form-group mt-3">
                                        <input
                                            type="email"
                                            className="form-control mt-1"
                                            placeholder="twój mail"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <p><label>E-MAIL</label></p>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder="twoje hasło"
                                            name="password"
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <p><label>HASŁO</label></p>
                                        <h4 className="forgot-password text-right mt-2">
                                            Zapomniałeś/aś <a href="#">hasła?</a>
                                        </h4>
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary">
                                            ZALOGUJ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h2><Link to="/signup">ZAŁÓŻ KONTO</Link></h2>
                        {isLoading ? <Spinner/> : null}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogIn
