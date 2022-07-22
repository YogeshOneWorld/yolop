let _snackBar;

const setSnackBarInstance = snackBarRef => {
  _snackBar = snackBarRef;
};

const show = (message, duration) => {
  _snackBar.show(message, duration);
};

export default {
  setSnackBarInstance,
  show,
};
