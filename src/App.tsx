import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './components/Header/Header';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';

type _todoItem = {
  id: number;
  text: string;
  done: boolean;
  visible: boolean;
  deleted: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState<_todoItem[]>([]);
  const [todoCount, setTodoCount] = useState(0);
  const [showDeletedTodos, setShowDeletedTodos] = useState(false);

  useEffect(() => {
    // console.log(JSON.stringify(todoList));
  }, [todoList]);

  const handleShowDeletedTodos = (doShow: boolean) => {
    setShowDeletedTodos(doShow);
  };

  const onPressTodoItem = (item: _todoItem) => {
    setTodoList(
      todoList
        .map(todoItem =>
          todoItem.id !== item.id
            ? todoItem
            : {...todoItem, done: !todoItem.done},
        )
        .sort((a, b) => Number(a.done) - Number(b.done)),
    );
  };

  const onLongPressTodoItem = (item: _todoItem) => {
    setTodoList(
      todoList
        .map(todoItem =>
          todoItem.id !== item.id
            ? todoItem
            : {...todoItem, deleted: !todoItem.deleted},
        )
        .sort((a, b) => Number(a.done) - Number(b.done)),
    );
  };

  const renderItem = ({item}: {item: _todoItem}) => {
    return (
      <TodoItem
        todoItem={item}
        onPress={onPressTodoItem}
        onLongPress={onLongPressTodoItem}
      />
    );
  };

  const handleOnSaveTodo = (todo: string, setTextInput: any) => {
    const updatedCount = todoCount + 1;
    setTodoCount(updatedCount);
    setTodoList(
      todoList.concat({
        id: updatedCount,
        text: todo,
        done: false,
        visible: true,
        deleted: false,
      }),
    );
    setTextInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        numberTodo={todoList.filter(item => !item.done && !item.deleted).length}
        numberDone={todoList.filter(item => item.done && !item.deleted).length}
        isEnabled={showDeletedTodos}
        onToggleSwitch={handleShowDeletedTodos}
      />
      <View style={styles.todo_container}>
        {!showDeletedTodos && (
          <View style={styles.todolist_container}>
            <TodoList
              todoList={todoList.filter(todo => !todo.deleted)}
              renderItem={renderItem}
            />
          </View>
        )}
        {showDeletedTodos && (
          <View style={styles.todolist_container}>
            <TodoList
              todoList={todoList.filter(todo => todo.deleted)}
              renderItem={renderItem}
            />
          </View>
        )}
        <TodoCreator onSaveTodo={handleOnSaveTodo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 10,
  },
  todo_container: {
    flex: 1,
  },
  todolist_container: {
    flex: 1,
  },
});

export default App;
