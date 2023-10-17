import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DemoUser from './DemoUser';
import { closeModal, openModal } from '../../store/modals';
import './Modals.scss';

const SessionModal = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(store => store.session.user);
  const modalStates = useSelector(store => store.modals)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([]);
  let form
  console.log(errors)

  if (sessionUser) return <Redirect to="/" />;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const response = dispatch(sessionActions.login({ email, password }))
    .catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors); // puts errors in local state
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
    if (response.ok) {
      dispatch(closeModal("login"))
      dispatch(closeModal("signup"))
      dispatch(closeModal("sidePanel"))
    }
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      setErrors([])
      const response = dispatch(sessionActions.signup({ email, password }))
        .catch(async (res) => {
          let data;
          try {
            data = await res.cose().json()
          } catch {
            // data = await res.text()
            data = await res.json()
          }
          if (data?.errors) {
            // debugger
            setErrors(data.errors)
          } else if (data) {
            // debugger
            setErrors([data])
          } else {
            setErrors([res.statusText])
          }
        }
      )
      if (response.ok) {
        dispatch(closeModal("login"))
        dispatch(closeModal("signup"))
        dispatch(closeModal("sidePanel"))
      }
    } else {
      return setErrors(['Your password and confirmed password must match'])
    }
  }

  const switchForms = (e) => {
    e.preventDefault()
    setErrors([]);
    dispatch(openModal("signup"))
    dispatch(closeModal("login"))
  }

  const closeAllModals = (e) => {
    e.preventDefault()
    setErrors([]);
    dispatch(closeModal("login"))
    dispatch(closeModal("signup"))
  }

  if (modalStates["login"]) {
    form = (
      <>
        <form onSubmit={handleLoginSubmit}>
          <h2 className='session-form-header'>Enter your email address to log in.</h2>
          <ul>
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
            { errors.map(error => <div className="modal-error-message" key={error}>{error}</div>) }
          <div className='session-form-button-container'>
            <button className="session-form-button" type="submit">Log In</button>
          </div>
        </form>
        <DemoUser />
        <div className="session-form-separator">
          <span className="session-form-separator-text">or</span>
        </div>
        <div className='session-form-button-container'>
          <button className="session-form-button" onClick={(e) => switchForms(e)}>Create Account</button>
        </div>
      </>
    )
  } else if (modalStates["signup"]) {
    form = (
      <>
        <form onSubmit={handleSignUpSubmit}>
          <h2 className='session-form-header'>Join NYT Noshing</h2>
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
          <label className='session-form-field-label'>Confirm Password
            <div className='session-form-field-label-outer-container'>
              <div className='session-form-field-label-inner-container'>
                <input
                  type="password"
                  value={confirmPassword}
                  className='session-form-input-box'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </label>
          {/* { errors.map(error => <li className="modal-error-message" key={error}>{error}</li>) } */}
          <div className="modal-error-message">{errors[0]}</div>
          <div className='session-form-button-container'>
            <button className="session-form-button" type="submit">Create Account</button>
          </div>
        </form>
        <DemoUser />
      </>
    )
  }

  return (
    <>
      <div className="modal-window-container">
        <div className="modal-content-box">
          <svg className="modal-close-button" onClick={(e) => closeAllModals(e)} width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
          <div className="modal-photo-container">
            <span className="modal-photo-text">
              Unlock New York Times recipes and your personal recipe box with a free account.
            </span>
            <img className="modal-photo" alt="recipe-card" src="https://cooking.nytimes.com/assets/regiwall-souffle-tall.jpg"></img>
          </div>
          <div className="modal-form-container">
            {form}
          </div>
        </div>
      </div>
    </>
  );
}

export default SessionModal;
