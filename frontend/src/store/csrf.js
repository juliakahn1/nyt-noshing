const csrfFetch = async (url, options = {}) => {
    // set to 'GET' if undefined
    options.method = options.method || 'GET'
    // set to empty object if undefined
    options.headers = options.headers || {}

    // if method is not GET, set Content-Type header to 'application/json' and
        // X-CSRF-Token to the value of the token in the cookie in sessionStorage (getItem)
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token'); // assumes token has been set

    }
    // fetch with URL and updated options hash
    const response = await fetch(url, options)
    // console.log(response)
    // throw error
    if (response.status >= 400) throw response

    // otherwise return response to next promise chain
    return response
}

export function storeCSRFToken(response) {
    // debugger
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

export async function restoreCSRF() {
    const response = await csrfFetch("/api/session");
    // debugger
    storeCSRFToken(response);
    return response;
}

export default csrfFetch
