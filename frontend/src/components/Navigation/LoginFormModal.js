import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Modals.css';
import DemoUser from './DemoUser';

const LoginFormModal = ({ loginModalMounted, setLoginModalMounted }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        setLoginModalMounted(false)
        return dispatch(sessionActions.login({ email, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    return (
        <>
            <div className="modal-window-container">
                <div className="modal-content-box">
                    <svg className="modal-close-button" onClick={(e) => setLoginModalMounted(false)} width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
                    <div className="modal-photo-container">
                        <span className="modal-photo-text">
                            Unlock New York Times recipes and your personal recipe box with a free account.
                        </span>
                        <img className="modal-photo" src="https://cooking.nytimes.com/assets/regiwall-souffle-tall.jpg"></img>
                    </div>
                    <div className="modal-form-container">
                        <form onSubmit={handleSubmit}>
                            <h2 className='session-form-header'>Log in to NYT Noshing</h2>
                            <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul>
                            <label className='session-form-field-label'>Email Address
                                <div className='session-form-field-label-outer-container'>
                                    <div className='session-form-field-label-inner-container'>
                                        <input
                                            type="text"
                                            value={email}
                                            className='session-form-input-box'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </label>
                            <label className='session-form-field-label'>Password
                                <div className='session-form-field-label-outer-container'>
                                    <div className='session-form-field-label-inner-container'>
                                        <input
                                            type="password"
                                            value={password}
                                            className='session-form-input-box'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </label>
                            <div className='session-form-button-container'>
                                <button className="session-form-button" type="submit">Log In</button>
                            </div>
                        </form>
                        <DemoUser modalSetter={setLoginModalMounted}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginFormModal;
