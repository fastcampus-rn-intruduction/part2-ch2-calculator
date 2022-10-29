import React from 'react';
import { View } from 'react-native';


// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type }) => {
  return (
    <TouchableOpacity style={{}}>

    </TouchableOpacity>
  )
}

const COLOR = {
  RESULT: '#4e4c51',
  RESET: '#5f5e62',
  OPERATOR: '#f39c29',
  NUM: '#5c5674',
}

export default () => {
  return (
    <View>
      {/* 결과 */}

      {/* [AC ~ /] */}

      {/* [7 ~ x] */}

      {/* [4 ~ -] */}

      {/* [1 ~ +] */}

      {/* [0 ~ =] */}
    </View>
  )
}