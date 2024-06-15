import React from 'react';
import {View, Text, Switch} from 'react-native';
import styles from './Header.style';

const Header = (props: any) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
        </View>
        <View style={styles.counter_container}>
          <Text style={styles.count_todo}>{props.numberTodo}</Text>
          <Text style={[styles.count_done, {textDecorationLine: 'none'}]}>
            {' '}
            |{' '}
          </Text>
          <Text style={styles.count_done}>{props.numberDone}</Text>
        </View>
      </View>
      <View style={styles.switch_container}>
        <Text style={styles.switch_text}>Show Todos</Text>
        <Switch
          style={styles.switch}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => props.onToggleSwitch(value)}
          value={props.isEnabled}
        />
        <Text style={styles.switch_text}>Show Deleted Todos</Text>
      </View>
    </View>
  );
};

export default Header;
