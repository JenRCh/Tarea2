import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Photos from '../../models/Photos';
import ITodo from '../../models/Album';
import Users from '../../models/Users';
import { actualizarTodoSeleccionado } from '../../store/actions/Albums/albums';

interface TodoDetalleProps {
  todo: ITodo;
  photo: Photos;
  user: Users;
}

const TodoDetalle: React.FC<TodoDetalleProps> = ({ todo, photo, user }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(actualizarTodoSeleccionado(null, null, null));
  };

  return (
    <View>
      <Text>Usuario: {todo.userId}</Text>
      <Text>{todo.title}</Text>
      <Button title="Atrás" onPress={handlePress} />
    </View>
  );
};

export default TodoDetalle;
