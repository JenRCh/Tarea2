import ITodo from '../../../models/Album';
import IAction from '../../../models/Action';
import {
  ACTUALIZAR_TODOS,
  ACTUALIZAR_TODO_SELECCIONADO,
} from '../../actions/actionTypes';

export interface TodoReducer {
  todos: ITodo[];
  todoSeleccionado: ITodo | null;
}

const initialState: TodoReducer = {
  todos: [],
  todoSeleccionado: null,
};

export default (
  state = initialState,
  { type, payload }: IAction,
): TodoReducer => {
  switch (type) {
    case ACTUALIZAR_TODOS:
      return { ...state, todos: payload as ITodo[] };

    case ACTUALIZAR_TODO_SELECCIONADO:
      return { ...state, todoSeleccionado: payload as ITodo };

    default:
      return state;
  }
};
