import { Image, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Header from '../components/Header';
import Categorys from '../components/Categorys';
import Features from './../components/Features';

const Home = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:"Hey, Fuck you",
            headerShown:false
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Categorys />
            <ScrollView nestedScrollEnabled={true}>
                <Features />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#eee"
    }
})