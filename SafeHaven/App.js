import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Law from './screens/Law';
import Privacy from './screens/Privacy';
import Done from './screens/Done'
import Sorry from './screens/Sorry';
import Sidebar from './screens/Sidebar';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Law /> */}
      {/* <Privacy /> */}
      {/* <Done /> */}
      <Sorry />
      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Sidebar">
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      {/* <Sidebar /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
