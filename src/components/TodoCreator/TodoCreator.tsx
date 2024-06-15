import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoCreator.style';

const TodoCreator = (props: any) => {
  const [textInput, setTextInput] = useState<string>('');

  const handleChangeTodoInput = (text: any) => {
    setTextInput(text);
  };

  const handleOnSaveTodo = () => {
    props.onSaveTodo(textInput, setTextInput);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={textInput}
        style={[styles.text, styles.text_active]}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        onChangeText={handleChangeTodoInput}
      />
      <View style={styles.divider} />
      <TouchableOpacity
        style={[
          styles.button,
          textInput ? styles.button_active : styles.button_passive,
        ]}
        onPress={handleOnSaveTodo}
        disabled={!textInput}>
        <Text
          style={[
            styles.text,
            textInput ? styles.text_active : styles.text_passive,
          ]}>
          Kaydet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCreator;
