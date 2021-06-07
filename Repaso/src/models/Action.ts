import Photos from './Photos';
import ITodo from './Album';
import Users from './Users';

export default interface IAction {
  type: string;
  payload: ITodo[] | ITodo;
  photo: Photos[] | Photos;
  user: Users[] | Users;
}
