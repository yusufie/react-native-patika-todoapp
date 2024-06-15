import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 4,
    padding: 10,
  },
  container_todo: {
    backgroundColor: '#7DA453',
  },
  container_done: {
    backgroundColor: '#37474F',
  },
  container_deleted: {
    backgroundColor: '#281710',
  },
  text_todo: {
    fontSize: 16,
    color: 'white',
  },
  text_done: {
    fontSize: 16,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  text_deleted: {
    color: '#356a81',
  },
});
