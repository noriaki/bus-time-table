import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TimeTable from './components/Table';
import {
  momentFromVersion, flattenTimeTable,
} from './libs/timeTableDataHandler';
import UpdateDate from './components/UpdateDate';
import BoardingTimer from './components/BoardingTimer';
import timeTableData from './data/timetable.json';

const App = () => (
  <ScrollableTabView style={styles.tabBar} {...tabBarStyleProps}>
    <View key="home" style={styles.tabContent} tabLabel="マンション発">
      <BoardingTimer data={flattenTimeTable(timeTableData.homeToStation)} />
      <TimeTable data={timeTableData.homeToStation} />
      <UpdateDate date={momentFromVersion(timeTableData.version)} />
    </View>
    <View key="station" style={styles.tabContent} tabLabel="新橋駅発">
      <BoardingTimer data={flattenTimeTable(timeTableData.stationToHome)} />
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

const styles = StyleSheet.create({
  tabBar: {
    marginTop: 20,
  },
  tabContent: {
    flex: 1,
  },
});

export default App;
