import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter_container: {
    flexDirection: 'row',
    padding: 4,
  },
  title_container: {
    flex: 1,
    padding: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFA500',
  },
  count_todo: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFA500',
  },
  count_done: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  switch_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  switch: {
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  switch_text: {
    fontSize: 16,
    color: '#A0A0A0',
  },
});
