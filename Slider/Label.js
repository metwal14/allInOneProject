import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Label above the slider
const Label = ({ text, unit,highValue, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <View>
        {/* value in the label if its greater then maxValue for maximum distance */}
        <Text style={styles.text}>{text>highValue?highValue+"+":text}</Text>
      </View>
      {/* unit Container */}
      {unit?<View style={styles.unitTextContainer}>
        <Text style={styles.text}>{unit}</Text>
      </View>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  },
  unitTextContainer: {
    paddingLeft: '7%'
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});

export default memo(Label);
