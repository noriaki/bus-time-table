import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TimeTable from './components/Table';
import BoardingTimer from './components/BoardingTimer';
import timeTableData from './data/timetable.json';

const App = () => (
  <ScrollableTabView style={styles.tabbar} {...tabBarStyleProps}>
    <View key="home" tabLabel="マンション発">
      {/* <BoardingTimer current={new Date()} /> */}
      <TimeTable data={timeTableData.homeToStation} />
    </View>
    <View key="station" tabLabel="新橋駅発">
      <TimeTable data={timeTableData.stationToHome} />
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
  tabbar: {
    marginTop: 20,
  },
});

export default App;
