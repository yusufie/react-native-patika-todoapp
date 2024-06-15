import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#37474F',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    paddingVertical: 2,
  },
  text_active: {color: 'white'},
  text_passive: {color: '#B0B0B0'},
  button: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button_passive: {backgroundColor: '#808080'},
  button_active: {backgroundColor: '#FFA500'},
  divider: {
    borderWidth: 0.5,
    borderColor: '#78909C',
    marginHorizontal: 2,
  },
});
