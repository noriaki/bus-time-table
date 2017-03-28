import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Text, ListView } from 'react-native';

const UpdateDate = ({ date }) => {
  const m = moment(date);
  return (
    <Text style={styles.updateDate}>更新日：{m.format('YYYY/MM/DD')}</Text>
  );
};

const styles = StyleSheet.create({
  updateDate: {
    color: 'gray',
    margin: 5,
    textAlign: 'right',
  },
});

export default UpdateDate;
