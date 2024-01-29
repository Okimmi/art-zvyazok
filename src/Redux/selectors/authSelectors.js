export const getUser = state => state.user;

export const selectUserId = state => state.user.user.id;

export const getEmail = state => state.email;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectUser = state => state.user.user;

export const selectToken = state => state.user.token;

export const selectIsRefreshing = state => state.user.isRefreshing;
