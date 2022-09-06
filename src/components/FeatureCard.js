import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FeatureCard = ({item}) => {
    return (
        <View style={[styles.container, item.id===1?{marginLeft:20}:{marginLeft:5}]}>
            <Image source={item.url} style={{width:250, height:200}} />
        </View>
    ) 
}

export default FeatureCard

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5
    }
})