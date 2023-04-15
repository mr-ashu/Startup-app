 
import { Button, StyleSheet, Text, View } from 'react-native';
export const Bottom = () => {
  return (
    <View style={styles.bottom}>

       <Button title='Men'/>
       <Button title='home'/>
       <Button title='women'/>
    
    </View>
  )
}


const styles = StyleSheet.create({
    bottom: {
        position:"absolute",
        top:775,
        height:60,
        padding:10,
        width:"70%",
        marginLeft:"15%",
        flexDirection: "row",
        justifyContent: "space-between",
       backgroundColor:"#1e90ff",
       borderRadius:7,
       alignItems:"center",
        
    }
 
});