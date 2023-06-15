import {Container, Row, Col} from "react-bootstrap";
import 'animate.css';
import login from '../assets/video/login.mp4'

import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Spinner from "./Spinners/Spinner";
import {dataHandler} from "../Api/dataHandler";

export const SignUp = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    const {firstName, lastName, email, password, passwordConfirmation} = form;

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function resetForm() {
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            registrationMessage: "",
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        dataHandler.register(firstName, lastName, email, password)
            .then((response) => {
                setRegistrationMessage("registered successfully");
                console.log("registration res", response);
                resetForm();
                navigate("/logged");
            })
            .catch((error) => {
                console.log("registration error", error);
                setRegistrationMessage("registration error");
            });
        setIsLoading(false);
    }

    return (
        <section className="signup" id="signup">
            <Container>
                <div className='signup'>
                    <video src={login} autoPlay loop muted /> </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <form className="Auth-form-content" onSubmit={handleSubmit}>
                            <h3 className="Auth-form-title">ZAŁÓŻ KONTO</h3>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="twoje imię"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <p><label>IMIĘ</label></p>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="twoje nazwisko"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <p><label>NAZWISKO</label></p>
                            </div>
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
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="potwierdź hasło"
                                    name="passwordConfirmation"
                                    value={passwordConfirmation}
                                    onChange={handleChange}
                                    required
                                />
                                <p><label>POTWIERDŹ HASŁO</label></p>
                            </div>
                            {isLoading && <Spinner/>}
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    ZAREJESTRUJ
                                </button>
                            </div>

                        </form>
                        <div><h4>{registrationMessage}</h4></div>
                        <h2><Link to="/login">MASZ KONTO? ZALOGUJ SIĘ</Link></h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
