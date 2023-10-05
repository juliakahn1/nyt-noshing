const csrfFetch = async (url, options = {}) => {
    // set to 'GET' if undefined
    options.method = options.methods || 'GET'
    // set to empty object if undefined
    options.header = options.header || {}

    // if method is not GET, set Content-Type header to 'application/json' and
        // X-CSRF-Token to the value of the token in the cookie in sessionStorage (getItem)
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');

        // fetch with URL and updated options hash
        const response = await fetch(url, options)

        // throw error
        if (response.status >= 400) throw res

        // otherwise return response to next promise chain
        return response
    }
}

export default csrfFetch
