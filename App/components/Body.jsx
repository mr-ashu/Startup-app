
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
export const Body = () => {

    let data = [
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {

            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },

        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU",
            name: " profile bag",
        },
        {
            name: " profile bag",
        },
        {

            name: " profile bag",
        },
        {

            name: " profile bag",
        },

    ]


    return (
        <ScrollView style={styles.body}>
            {
                data.map((el) => (
                    <View style={styles.bag}>
                        <Image source={{ uri: el.url }}
                            style={{
                                height: 300,
                                width: "100%"
                            }}
                        />
                        <Text style={styles.name}>{el.name}</Text>
                        <View style={styles.status}>
                            <Text>Location</Text>
                            <Text>status</Text>
                        </View>

                        <View style={styles.bagbottom}>
                            <Button title='like' />

                            <View style={styles.connect} >
                                <Button title='call' />
                                <Button title='video' />
                            </View>
                        </View>


                    </View>
                ))
            }



        </ScrollView>
    )
}


const styles = StyleSheet.create({
    body: {




    },
    bag: {
        shadowColor:" rgba(0, 0, 0, 0.16) 0px 1px 4px",
        width: "96%",
        marginBottom: 20,
        marginLeft: "2%",
        paddingBottom:15,
        borderColor:"grey",
        borderWidth:1
        
        

    },
    bagbottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        width:"90%",
        marginLeft:"5%",

    },
    connect: {
        flexDirection: "row",
        gap: 20,

    },
    status:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        marginLeft:"5%",
        marginTop:10

    },
    name:{
        width:"90%",
        marginLeft:"5%",
        textAlign:"left",
        marginTop:15

    }

});