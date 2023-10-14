import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modals';

const DemoUser = () => {
    const dispatch = useDispatch()
    const modalState = useSelector(store => store.modals)

    const loginDemoUser = (e) => {
        e.preventDefault();
        dispatch(closeModal("login"))
        dispatch(closeModal("signup"))
        return dispatch(sessionActions.login({ email:'demouser@email.com', password:'demopassword' }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
            });
    }

    return(
        <div className='session-form-button-container demo-user-button'>
            <button className="session-form-button demo-user-button" type="submit" onClick={(e) => loginDemoUser(e)}>Login as Guest User</button>
        </div>
    )
}

export default DemoUser
