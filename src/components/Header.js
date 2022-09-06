import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React from 'react'

const Header = () => {
    return (
        <View style={{backgroundColor:"white"}}>
            <View style={[styles.container, {justifyContent:"space-between"}]}>
                <View style={styles.container}>
                    <Image source={require("./../../assets/images/IMG-20211124-WA0007.jpg")} style={styles.img} />
                    <View>
                        <Text style={{color:"#888", fontSize:13}}>Deliver now!</Text>
                        <Text style={{fontWeight:"700"}}>Current Location <FontAwesome name='chevron-down' size={10} color='brown' />
                        </Text>
                    </View>
                </View>
                <FontAwesome name='user' size={25} style={{ padding:10, paddingTop:15}} color='brown' />
            </View>
            <View style={styles.container2}>
                <View style={{flexDirection:"row", alignItems:"center",backgroundColor:"#ccc", padding:5, width:"92%"}}>
                    <FontAwesome name='search' size={15} color='#999' style={{marginHorizontal:5}} />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType="default" />
                </View>
                <FontAwesome name='sliders' size={25} style={{width:"6%"}} color={"brown"} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop:20,
        paddingBottom:5,
        marginHorizontal:10
    },
    img: {
        width:30,
        height:30,
        borderRadius:50,
        marginRight:5
    },
    container2:{
        flexDirection:"row",
        justifyContent:"space-between",        
        marginBottom:5,
        alignItems:"center",
        marginHorizontal:20,
    }
})