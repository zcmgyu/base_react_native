const createAction = (type, params = null) => ({ type, ...params });

const createReducer = (initialState = null, handlers = {}) => (
  state = initialState,
  action,
) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

export { createAction, createReducer };
