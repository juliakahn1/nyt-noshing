import csrfFetch from "./csrf";

// contains all actions specific to the session user's info and the session user's Redux reducer.

// -- POJO ACTION CREATORS -- //

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

// -- THUNK ACTION -- //

// grabs user data from backend and adds to session slice of state
export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    console.log(response)
    const data = await response.json();
    dispatch(setCurrentUser(data.user));
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
  };

  export default sessionReducer;
