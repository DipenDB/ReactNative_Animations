
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxHeightWidthInterpolation_8 extends Component{
    state={
        animation : new Animated.Value(0)
    }

    startAnimation =()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:2000,
            useNativeDriver:false,
        }).start()
    }


    render() {

        const widthInterpolate = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['20%','50%']
        })

        const heightInterpolate = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['50%','10%']
        })

        const AnimatedStyle={
            width: widthInterpolate,
            height: heightInterpolate
        }


        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,AnimatedStyle]}>
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
        backgroundColor:'#fff'
    },
    box:{
        // height:70,
        // width:70,
        backgroundColor: '#e00'
    }
})
