import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Category from './Category';
import Features from './Features';

const Categorys = () => {
    const dishes = [
        {id:1, name:"burger", url:require("../../assets/images/img1.jpg")},
        {id:2, name:"burger", url:require("../../assets/images/img2.jpg")},
        {id:3, name:"burger", url:require("../../assets/images/img3.jpg")},
        {id:4, name:"burger", url:require("../../assets/images/img4.jpg")},
        {id:5, name:"burger", url:require("../../assets/images/img5.jpg")},
        {id:6, name:"burger", url:require("../../assets/images/img6.jpg")},
        {id:7, name:"burger", url:require("../../assets/images/img7.jpg")},
    ]
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                data={dishes}
                renderItem={({item}) => {
                    return (
                        <Category imgUri={item.url} title={item.name} id={item.id} />
                    )
                }}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Categorys

const styles = StyleSheet.create({
    container:{
        paddingVertical:5,
    }
})