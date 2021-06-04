
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text,Easing} from 'react-native'



export default class BoxEasing_9 extends Component{
    state={
        animation: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:300,
            duration:2200,
            useNativeDriver:false,
            // easing:Easing.back(5),
            // easing:Easing.bounce,
            // easing: Easing.ease,
            easing: Easing.elastic(3),
            // easing: Easing.bezier(.77,.14,.83,.67),


        }).start()
    }

    render() {

        const animatedStyle={
            transform:[
                {
                    translateX:this.state.animation
                }
            ]
        }

        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,animatedStyle]}>
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
        padding:30,
    },
    box:{
        height:70,
        width:70,
        backgroundColor: '#e00'
    }
})
