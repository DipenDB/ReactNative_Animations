

import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxAbsolutePosition_5 extends Component{
    state={
        animation : new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:20,
            duration:1400,
            useNativeDriver:false
        }).start();
    }


    render() {

        const animatedStyles={
            top:this.state.animation,
            left:this.state.animation,
            right:this.state.animation,
        }


        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,animatedStyles]}>
                        <Text>Hello</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    box:{
        position: "absolute",
        height:150,
        // top:15,
        // left:15,
        // right:15,
        backgroundColor: '#e00'
    }
})
