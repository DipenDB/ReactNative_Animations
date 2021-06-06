

import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class StaggerAnimation_3 extends Component {

    state = {
        colorAnimation: new Animated.Value(0),
        scaleAnimation: new Animated.Value(1)
    }

    startAnimation = () => {
        //-------------------Advanced Stagger animation----------------------
        //Hold for 2200 millisecond after 1st animation
        Animated.stagger(2200,[
            Animated.timing(this.state.colorAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing(this.state.scaleAnimation, {
                toValue: 2,
                duration: 500,
                useNativeDriver: false,
            })
        ]).start(()=>{
            alert("Animation Complete")
        })




    }


    render() {

        const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#4272f5', '#f54296']
        })

        const boxStyle = {
            backgroundColor: backgroundColorInterpolate,

            transform: [
                {
                    scale: this.state.scaleAnimation
                }
            ]
        }

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,boxStyle]}>
                        <Text>Stag</Text>
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
        justifyContent:'center',

    },
    box:{
        height:70,width:70,backgroundColor: '#e00'
    }
})
