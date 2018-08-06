const modalReducerDefaultState = {
  isOpen: true
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true
      };
    case 'CLOSE_MODAL':
      return {
        isOpen: false
      };
    default:
      return state;
  }
};
