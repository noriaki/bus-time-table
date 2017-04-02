import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// libs
import {
  momentFromVersion, flattenTimeTable,
} from './libs/timeTableDataHandler';

// data
import timeTableData from './data/timetable.json';

// components
import AppStatusBar from './components/AppStatusBar';
import TimeTable from './components/Table';
import UpdateDate from './components/UpdateDate';
import BoardingTimer from './components/BoardingTimer';

const App = () => (
  <View style={styles.appContainer}>
    <AppStatusBar backgroundColor="#0b1013" barStyle="light-content" />
    <ScrollableTabView {...tabBarStyleProps}>
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
  </View>
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
  appContainer: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
  },
});

export default App;
