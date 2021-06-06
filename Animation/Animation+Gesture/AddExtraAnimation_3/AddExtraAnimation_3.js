
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class AddExtraAnimation_3 extends Component{

    state={
        animation: new Animated.Value(0),
    }


    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:300,
            duration:1500,
            useNativeDriver: false
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:0,
                duration : 2500,
                useNativeDriver: false
            }).start()
        })
    }


    render() {

        //---------------------Add margin top at starting---------------------------------
        const addAnimationValue=new Animated.Value(80);
        //-----------------------------------------------------------
        const newAnimation = Animated.add(this.state.animation,addAnimationValue)

        const animatedStyle={
           transform:[
               {
                   translateY:newAnimation
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
