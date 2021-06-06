
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class TranslateOpacityInterpolate_1 extends Component{

    state={
        animation:new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:5500,
            useNativeDriver: false,
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:2,
                duration:300,
                useNativeDriver: false,
            }).start()
        })
    }


    render() {

        const animatedInterpolate =this.state.animation.interpolate({
            inputRange:[0,1,2],
            outputRange:[0,200,0]
        })


        const interpolatedInterpolate = animatedInterpolate.interpolate({
            inputRange:[0,200],
            outputRange:[1,0.5]
        })

        const translateXInterpolate =animatedInterpolate.interpolate({
            inputRange:[0,20,50,100,140,170,200],
            outputRange:[0,-30,-50,80,-100,200,-100]

        })




        const animatedStyle={
            transform:[
                {
                    translateY: animatedInterpolate
                },
                {
                    translateX: translateXInterpolate
                }
            ],
            opacity:interpolatedInterpolate
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
        justifyContent:'center',
        alignItems:'center',
    },
    box:{
        height:70,width:70,backgroundColor: '#e00'
    }
})
