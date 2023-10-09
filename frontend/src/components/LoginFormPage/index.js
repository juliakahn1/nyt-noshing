import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='session-form-header'>Enter your email address to log in or create an account.</h2>
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
  );
}

export default LoginFormPage;
