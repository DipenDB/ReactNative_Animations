

import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class RotationTypesInterpolate_3 extends Component{

    state = {
        animation : new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:1000,
            useNativeDriver: false,
        }).start(()=>{
            this.state.animation.setValue(0)
        })
    }



    render() {

        const xInterpolate =this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })

        const yInterpolate =this.state.animation.interpolate({
            inputRange:[0,0.5,1],
            outputRange:['0deg','0deg','180deg']
        })

        const animatedStyle = {
            transform:[
                {
                    rotateX:xInterpolate
                },
                {
                    rotateY:yInterpolate
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
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        height:170,width:170,backgroundColor: '#e00'
    }
})
