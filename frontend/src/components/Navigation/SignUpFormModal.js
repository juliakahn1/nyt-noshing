import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import * as sessionActions from "../../store/session"
import "./Modals.css"
import DemoUser from "./DemoUser"

const SignUpFormModal = ({signupModalMounted, setSignupModalMounted}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to='/'/> // if signed in, redirect

    const handleSubmit = (e) => {
        e.preventDefault()
        setSignupModalMounted(false)
        if (password === confirmPassword) { // if passwords match
            setErrors([])
            return dispatch(sessionActions.signup({ email, password }))
                .catch(async (res) => {
                let data;
                try {
                    data = await res.cose().json()
                } catch {
                    data = await res.text()
                }
                if (data?.errors) {
                    setErrors(data.errors)
                } else if (data) {
                    setErrors([data])
                } else {
                    setErrors([res.statusText])
                }
            })
        }
        return setErrors(['Your password and confirmed password must match.'])
    }
    return(
        <>
            <div className="modal-window-container">
                <div className="modal-content-box">
                    <svg className="modal-close-button" onClick={(e) => setSignupModalMounted(false)}width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
                    <div className="modal-photo-container">
                        <span className="modal-photo-text">
                            Unlock New York Times recipes and your personal recipe box with a free account.
                        </span>
                        <img className="modal-photo" src="https://cooking.nytimes.com/assets/regiwall-souffle-tall.jpg"></img>
                    </div>
                    <div className="modal-form-container">
                        <form onSubmit={handleSubmit}>
                            <h2 className='session-form-header'>Join NYT Noshing</h2>
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
                            <div className='session-form-button-container'>
                                <button className="session-form-button" type="submit">Create Account</button>
                            </div>
                        </form>
                        <DemoUser modalSetter={setSignupModalMounted}/>
                    </div>
                </div>
            </div>

        </>





    )
}

export default SignUpFormModal
