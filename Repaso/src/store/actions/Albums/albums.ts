import { ThunkDispatch } from 'redux-thunk';
import IAction from '../../../models/Action';
import ITodo from '../../../models/Album';
import State from '../../../models/State';
import { ACTUALIZAR_TODOS, ACTUALIZAR_TODO_SELECCIONADO } from '../actionTypes';
import axios from 'axios';
import Photos from '../../../models/Photos';
import Users from '../../../models/Users';

export const actualizarTodos = (payload: ITodo[], photo: Photos[], user: Users[]) => ({
  type: ACTUALIZAR_TODOS,
  payload,
  photo,
  user,
});

export const actualizarTodoSeleccionado = (payload: ITodo | null, photo: Photos | null, user: Users | null) => ({
  type: ACTUALIZAR_TODO_SELECCIONADO,
  payload,
  photo,
  user,
});

export const fetchTodos =
  () => async (dispatch: ThunkDispatch<State, null, IAction>) => {
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const photo = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      const user = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );

      dispatch(actualizarTodos(data.data, photo.data, user.data));
    } catch (error) {
      console.error(error);
    }
  };
