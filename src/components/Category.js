import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({imgUri, title, id}) => {
    return (
        <TouchableOpacity style={[{position:"relative"}, id===1? {marginLeft:20}: {marginLeft:5}]}>
            <Image source={imgUri} style={{width:70, height:70, borderRadius:4}} />
            <Text style={{color:"white", position:"absolute", bottom:4, left:6}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({})