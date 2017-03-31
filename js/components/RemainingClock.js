import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Text } from 'react-native';

const RemainingClock = ({ remaining }) => {
  const m = moment.utc(remaining);
  const haveHour = m.valueOf() >= 60 * 60 * 1000;
  return (
    <View style={styles.container}>
      <Text>次のバス発車まで</Text>
      {haveHour ? <Hour m={m} /> : null}
      {haveHour ? <Suffix str="時間" /> : null}
      <Minute m={m} /><Suffix str="分" />
      <Second m={m} /><Suffix str="秒" />
    </View>
  );
};

const Hour = ({ m }) => <Text style={styles.timer}>{m.format('HH')}</Text>;
const Minute = ({ m }) => <Text style={styles.timer}>{m.format('mm')}</Text>;
const Second = ({ m }) => <Text style={styles.timer}>{m.format('ss')}</Text>;
const Suffix = ({ str }) => <Text style={styles.suffix}>{str}</Text>;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: 10,
  },
  timer: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  suffix: {
    fontSize: 10,
  },
});

export default RemainingClock;
