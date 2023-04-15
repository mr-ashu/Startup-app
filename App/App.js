 
import { StyleSheet, Text, View } from 'react-native';
import { Body } from './components/Body';
import { Bottom } from './components/Bottom';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <View >
      <Navbar/>
      <Body/>
      <Bottom/>
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
