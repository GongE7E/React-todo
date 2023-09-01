export default function TodoReducer(state, action) {
  switch (action.type) {
    case 'Create': {
      return [action.newItem, ...state];
    }
    case 'Update': {
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
    case 'Delete': {
      return state.filter((todo) => todo.id !== action.targetId);
    }
    default:
      return state;
  }
}
