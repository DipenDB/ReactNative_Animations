

import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class ParallelAnimation_1 extends Component {

    state = {
        colorAnimation: new Animated.Value(0),
        scaleAnimation: new Animated.Value(1)
    }

    startAnimation = () => {
        //-------------------Advanced Parallel animation----------------------
        Animated.parallel([
            Animated.timing(this.state.colorAnimation, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            }),
            Animated.timing(this.state.scaleAnimation, {
                toValue: 2,
                duration: 1500,
                useNativeDriver: false,
            })
        ]).start(()=>{
            alert("Animation Complete")
        })

        //---------------------Basic Alternative-------------------------------

        // Animated.timing(this.state.colorAnimation, {
        //     toValue: 1,
        //     duration: 1500,
        //     useNativeDriver: false
        // }).start()
        // Animated.timing(this.state.scaleAnimation, {
        //     toValue: 2,
        //     duration: 1500,
        //     useNativeDriver: false,
        // }).start()


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
        justifyContent:'center',

    },
    box:{
        height:70,width:70,backgroundColor: '#e00'
    }
})
