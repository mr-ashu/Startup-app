
import { Button, Image, StyleSheet, Text, View } from 'react-native';
export const Navbar = () => {
    return (
        <View style={styles.navbar}>

            <Image
                style={{
                    position: "relative",
                    top: 40,
                    width: 110,
                    height: 100,


                }}
                source={require("../assets/logo2.png")} />


            <View style={styles.right}>
                <Button width="100px" title='Login' />
                <Button title='signup' />

            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        height: 85,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#1e90ff",
        alignItems: "flex-end",
        paddingBottom: 10
    },
    right: {
        flexDirection: "row",

        gap: 15,
        marginRight: 20

    }
});