import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import Grid from 'react-native-grid-component';

const TimeTable = ({ data }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(data);
  return <ListView scrollEnabled={false} {...{ dataSource, renderRow, renderSeparator }} />;
};

const renderRow = (rowData, _, rowID) => (
  <HourRow {...rowData} even={isEven(rowID)}/>
);
const renderSeparator = (_, rowID) => (
  <View key={rowID} style={styles.separator} />
);

const HourRow = ({ hour, minutes, even }) => (
  <View style={[styles.rowContainer, { backgroundColor: even ? '#F2FAFF' : 'white' }]}>
    <Text style={styles.hourColumn}>{format(hour)}</Text>
    <Minutes minutes={fill(minutes).map(format)} />
  </View>
);

const Minutes = ({ minutes }) => (
  <Grid
    style={styles.minutesContainer}
    renderItem={(minute, i) => (
      <Text style={styles.minuteColumn} key={i}>{minute}</Text>
    )}
  itemsPerRow={12}
  data={minutes} />
);

const isEven = num => ((parseInt(num, 10) + 1) % 2 === 0);
const fill = minutes => [0,5,10,15,20,25,30,35,40,45,50,55].map(
  num => minutes.includes(num) ? num : null
);
const format = num => num != null ? ('0' + num).slice(-2) : ' ';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
  },
  hourColumn: {
    // paddingTop: 5,
    // paddingBottom: 5,
    width: 25,
    backgroundColor: '#0b1013',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
  },
  minutesContainer: {
    flex: 1,
  },
  minuteColumn: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 30,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: StyleSheet.hairlineWidth,
  },
});

export default TimeTable;
