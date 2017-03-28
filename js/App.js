import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TimeTable from './components/Table';
import UpdateDate from './components/UpdateDate';
import BoardingTimer from './components/BoardingTimer';
import timeTableData from './data/timetable.json';

const App = () => (
  <ScrollableTabView style={styles.tabBar} {...tabBarStyleProps}>
    <View key="home" style={styles.tabContent} tabLabel="マンション発">
      <BoardingTimer remaining={moment.utc({ year: 1970, hour: 1, minute: 13, second: 52 })} />
      <TimeTable data={timeTableData.homeToStation} />
      <UpdateDate date={momentFromVersion(timeTableData.version)} />
    </View>
    <View key="station" style={styles.tabContent} tabLabel="新橋駅発">
      <BoardingTimer remaining={moment.utc({ year: 1970, second: 52 })} />
      <TimeTable data={timeTableData.stationToHome} />
      <UpdateDate date={momentFromVersion(timeTableData.version)} />
    </View>
  </ScrollableTabView>
);

const tabBarStyleProps = {
  tabBarActiveTextColor: 'white',
  tabBarInactiveTextColor: 'gray',
  tabBarBackgroundColor: '#0b1013', // premium black (KURO TSURUBAMI)
  tabBarUnderlineStyle: {
    backgroundColor: 'white',
  },
};

const momentFromVersion = version => {
  const year = parseInt(version / 10000 % 10000);
  const month = parseInt(version / 100 % 100) - 1;
  const day = parseInt(version % 100);
  return moment({ year, month, day });
};

/*
const findNextTime = (list, m) => {
  const currentTime = m || moment();
  const times = flattenDeep(list.map(
    ({ hour, minutes }) => minutes.map(
      minute => {
        const t = moment({ hour: hour % 24, minute });
        return hour >= 24 ? t.add(1, 'day') : t;
      }
    )
  ));
  console.log(times);
};

findNextTime(timeTableData.homeToStation);
*/

const styles = StyleSheet.create({
  tabBar: {
    marginTop: 20,
  },
  tabContent: {
    flex: 1,
  },
});

export default App;
