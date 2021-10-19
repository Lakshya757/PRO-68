import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class IG extends React.Component{
    render(){
        return(
            <Text style={styles.txt}>
                Instagram
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    txt:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})