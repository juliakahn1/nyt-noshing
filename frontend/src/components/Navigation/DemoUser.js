import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

const DemoUser = ({modalSetter}) => {
    const dispatch = useDispatch()

    const loginDemoUser = (e) => {
        e.preventDefault();
        modalSetter(false)
        return dispatch(sessionActions.login({ email:'demouser@email.com', password:'demopassword' }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // will hit this case if the server is down
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
