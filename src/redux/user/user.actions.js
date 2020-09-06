//user is the value we use as setState, to set the new value of currentUser forexample. eg. {currentUser: user}
export const setCurrentUser = user =>(
{
    type: 'SET_CURRENT_USER',
    payload: user
}
);