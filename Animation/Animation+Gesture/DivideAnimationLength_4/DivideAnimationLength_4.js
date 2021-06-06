
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class DivideAnimationLength_4 extends Component{

    state={
        animation: new Animated.Value(0),
    }


    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:500,
            duration:1500,
            useNativeDriver: false
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:0,
                duration : 2000,
                useNativeDriver: false
            }).start()
        })
    }


    render() {

        //---------------------Divide num length by 2 ---------------------------------
        const addAnimationValue=new Animated.Value(2);
        //-----------------------------------------------------------
        const newAnimation = Animated.divide(this.state.animation,addAnimationValue)

        const animatedStyle={
            transform:[
                {
                    translateX:newAnimation
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
        backgroundColor:'#fff'
    },
    box:{
        height:70,width:70,backgroundColor: '#e00'
    }
})
