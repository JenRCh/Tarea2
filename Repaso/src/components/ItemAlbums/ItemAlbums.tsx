import React from 'react';
import { Text } from 'react-native';
import ITodo from '../../models/Album';
import styled from '@emotion/native';
import { useDispatch } from 'react-redux';
import { actualizarTodoSeleccionado } from '../../store/actions/Albums/albums';
import Photos from '../../models/Photos';
import Users from '../../models/Users';

interface ItemTodosProps {
  todo: ITodo;
  photo: Photos;
  user: Users;
}

const ItemTodos: React.FC<ItemTodosProps> = ({ todo, photo, user }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(actualizarTodoSeleccionado(todo, photo, user));
  };

  return (
    <Contenedor onPress={handlePress}>
      <Text>{todo.title}</Text>
    </Contenedor>
  );
};

const Contenedor = styled.TouchableOpacity`
  padding: 12px 10px;
`;

export default ItemTodos;
