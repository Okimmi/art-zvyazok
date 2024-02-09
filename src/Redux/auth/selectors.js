export const getUser = state => state.auth;

export const selectUserId = state => state.auth.user.id;

export const getEmail = state => state.email;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuthLoading = state => state.auth.isLoading;
