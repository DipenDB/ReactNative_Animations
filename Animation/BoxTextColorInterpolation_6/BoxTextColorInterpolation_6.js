
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxTextColorInterpolation_6 extends Component{

    state={
        animation:new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:200,
            useNativeDriver:false
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:200,
                useNativeDriver:false
            }).start()
        })

    }

    render() {

        const boxInterpolation =this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['rgb(99,71,255)','rgb(255,99,71)']
        })

        const textInterpolation=this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['rgb(250,250,250)','#000']
        })

        const boxAnimatedStyle={
            backgroundColor:boxInterpolation
        }

        const textAnimatedStyle={
            color:textInterpolation
        }

        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,boxAnimatedStyle]}>
                        <Animated.Text style={textAnimatedStyle}>Hello</Animated.Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        height:70,width:70,
        // backgroundColor: '#e00',
        alignItems:'center',
        justifyContent:'center',
    }
})
