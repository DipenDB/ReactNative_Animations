
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxRotation_7 extends Component{
    state={
        animation: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:360,
            duration:1400,
            useNativeDriver:false
        }).start()
    }

    startCircleAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:2000,
            duration:2000,
            useNativeDriver:false
        }).start()
    }


    render() {

        const rotate360Interpolation =this.state.animation.interpolate({
            inputRange:[0,360],
            outputRange:['0deg','360deg']
        })

        const rotateCircleInterpolation = this.state.animation.interpolate({
            inputRange:[0,2000],
            outputRange:['0deg','2000deg']
        })

        const animatedStyle360 ={
            transform:[
                {
                    rotate:rotate360Interpolation
                }
            ]
        }

        const animatedStyleCircle={
            transform: [
                {
                    rotate:rotateCircleInterpolation
                }
            ]
        }


        return(
            <View style={styles.container}>
                <View>
                    <TouchableWithoutFeedback onPress={this.startAnimation}>
                        <Animated.View style={[styles.box,animatedStyle360]}>
                            <Text>360</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>

                <View>
                    <TouchableWithoutFeedback onPress={this.startCircleAnimation}>
                        <Animated.View style={[styles.box,animatedStyleCircle]}>
                            <Text>Circle</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    box:{
        height:40,width:40,backgroundColor: '#e00'
    }
})
