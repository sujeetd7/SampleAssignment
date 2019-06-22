const React = require('react-native');

const {
  StyleSheet,
  Dimensions,
  Platform
} = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    height: deviceHeight,
    flex: 1
  },
  headerText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18
  },
  header: {
    backgroundColor: '#015E54',
    borderBottomWidth: 0
  },
};