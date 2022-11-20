export const selectIsLogin = ({ auth }) => auth.isLogin;
export const selectIsLoading = ({ auth }) => auth.isLoading;
export const selectUserName = ({ auth }) => auth.user.name;
export const selectError = ({ auth }) => auth.error;
export const selectIsLoadingCurrentUser = ({ auth }) =>
  auth.isCurrentUserLoading;
