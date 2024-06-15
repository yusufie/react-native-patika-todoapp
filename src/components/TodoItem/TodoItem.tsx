import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './TodoItem.style';

interface Props {
  todoItem: any;
  onPress: (item: any) => void;
  onLongPress: (item: any) => void;
}

const TodoItem: React.FC<Props> = ({todoItem, onPress, onLongPress}) => {
  const {done, text, deleted} = todoItem;
  return (
    <TouchableOpacity
      onPress={() => onPress(todoItem)}
      onLongPress={() => onLongPress(todoItem)}
      style={[
        styles.container,
        deleted
          ? styles.container_deleted
          : done
          ? styles.container_done
          : styles.container_todo,
      ]}>
      <Text
        style={[
          done ? styles.text_done : styles.text_todo,
          deleted && styles.text_deleted,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
