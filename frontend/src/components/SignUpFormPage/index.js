// import { useDispatch, useSelector } from "react-redux"
// import React, { useState } from "react"
// import { Redirect } from "react-router-dom"
// import * as sessionActions from "../../store/session"
// import "./SignUpForm.css"

// const SignUpFormPage = () => {
//     const dispatch = useDispatch()
//     const sessionUser = useSelector(state => state.session.user)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [errors, setErrors] = useState([])

//     if (sessionUser) return <Redirect to='/'/> // if signed in, redirect

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (password === confirmPassword) { // if passwords match
//             setErrors([])
//             return dispatch(sessionActions.signup({ email, password }))
//                 .catch(async (res) => {
//                 let data;
//                 try {
//                     data = await res.cose().json()
//                 } catch {
//                     data = await res.text()
//                 }
//                 if (data?.errors) {
//                     setErrors(data.errors)
//                 } else if (data) {
//                     setErrors([data])
//                 } else {
//                     setErrors([res.statusText])
//                 }
//             })
//         }
//         return setErrors(['Your password and confirmed password must match.'])
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <h2 className='session-form-header'>Join NYT Cooking</h2>
//             <ul>
//                 {errors.map(error => <li key={error}>{error}</li>)}
//             </ul>
//             <label className='session-form-field-label'>Email Address
//                 <div className='session-form-field-label-outer-container'>
//                     <div className='session-form-field-label-inner-container'>
//                         <input
//                         type="text"
//                         value={email}
//                         className='session-form-input-box'
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         />
//                     </div>
//                 </div>
//             </label>
//             <label className='session-form-field-label'>Password
//                 <div className='session-form-field-label-outer-container'>
//                     <div className='session-form-field-label-inner-container'>
//                         <input
//                         type="password"
//                         value={password}
//                         className='session-form-input-box'
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         />
//                     </div>
//                 </div>
//             </label>
//             <label className='session-form-field-label'>Confirm Password
//                 <div className='session-form-field-label-outer-container'>
//                     <div className='session-form-field-label-inner-container'>
//                         <input
//                         type="password"
//                         value={confirmPassword}
//                         className='session-form-input-box'
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         />
//                     </div>
//                 </div>
//             </label>
//             <div className='session-form-button-container'>
//                 <button className="session-form-button" type="submit">Create Account</button>
//             </div>
//         </form>
//     )
// }

// export default SignUpFormPage
