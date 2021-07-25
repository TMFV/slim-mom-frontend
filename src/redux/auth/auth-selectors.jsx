const getLoggedOn = state => state.auth.isLoggedOn;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const getLoading = state => state.auth.isLoading;

// eslint-disable-next-line
export default { getLoggedOn, getUserName, getUserToken, getLoading };
