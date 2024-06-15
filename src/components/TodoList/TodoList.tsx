import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './TodoList.style';

interface Props {
  todoList: any[];
  renderItem: ({item}: {item: any}) => JSX.Element;
}

const TodoList: React.FC<Props> = ({todoList, renderItem}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
