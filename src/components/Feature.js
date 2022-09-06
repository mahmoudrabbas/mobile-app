import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import FeatureCard from './FeatureCard';

const Feature = ({item}) => {
    return (
        <View style={{marginVertical:20}}>
            <View style={styles.container}>
                <View>
                    <Text>{item.name}</Text>
                    <Text style={{color:"grey", fontSize:13}}>{item.desc}</Text>
                </View>
                <FontAwesome name='arrow-right' size={20} color={"brown"} />
            </View>
            <View>
                {item.feat && (
                    <FlatList 
                    data={item.feat}
                    renderItem={({item}) => {
                        return (
                            <FeatureCard item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
        marginHorizontal:20
    }
})