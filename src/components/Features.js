import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Feature from './Feature';

const Features = () => {
    const features = [
        {id:0, name:"Offers Near You!", desc:"Helps to find your fav one!", feat:[
            {id:1, name:"feat1", url:require("../../assets/images/img1.jpg")},
                        {id:2, name:"feat1", url:require("../../assets/images/img2.jpg")},
                                    {id:3, name:"feat1", url:require("../../assets/images/img3.jpg")},
                                                {id:4, name:"feat1", url:require("../../assets/images/img4.jpg")},
        ]},
        {id:1, name:"Featured", desc:"Helps to find your fav one!", feat:[
            {id:1, name:"feat1", url:require("../../assets/images/img5.jpg")},
                        {id:2, name:"feat1", url:require("../../assets/images/img6.jpg")},
                                    {id:3, name:"feat1", url:require("../../assets/images/img7.jpg")},
                                                {id:4, name:"feat1", url:require("../../assets/images/img1.jpg")},
        ]},
        {id:2, name:"Tasty Discounts", desc:"Helps to find your fav one!", feat:[
            {id:1, name:"feat1", url:require("../../assets/images/img1.jpg")},
                        {id:2, name:"feat1", url:require("../../assets/images/img6.jpg")},
                                    {id:3, name:"feat1", url:require("../../assets/images/img7.jpg")},
                                                {id:4, name:"feat1", url:require("../../assets/images/img1.jpg")},
        ]},
    ];
    return (
        <View nestedScrollEnabled={true} style={{paddingBottom:200}} >
            <FlatList
            data={features}
            renderItem={({item}) => {
                return (
                    <Feature item={item}/>
                )
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            />
        </View>
    )
}

export default Features

const styles = StyleSheet.create({})