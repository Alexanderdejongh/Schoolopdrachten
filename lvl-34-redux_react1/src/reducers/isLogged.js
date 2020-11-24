const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SING IN':
            return !state;
        default:
            return state
    }
}

export default loggedReducer