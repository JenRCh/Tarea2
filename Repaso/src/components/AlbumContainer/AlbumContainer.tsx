import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import State from '../../models/State';
import ListaTodos from '../ListaAlbums';
import TodoDetalle from '../AlbumDetalle';

const TodosContainer = () => {
  const todoSeleccionado = useSelector(
    (state: State) => state.todos.todoSeleccionado,
  );

  return (
    <View>
      {todoSeleccionado ? (
        <TodoDetalle todo={todoSeleccionado} />
      ) : (
        <ListaTodos />
      )}
    </View>
  );
};

export default TodosContainer;
