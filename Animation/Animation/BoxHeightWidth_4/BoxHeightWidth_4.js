
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxHeightWidth_4 extends Component{
    state={
        animation:new Animated.Value(40),
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:300,
            duration:1500,
            useNativeDriver:false
        }).start();
    }


    render() {
        const animatedStyles= {
            width: this.state.animation,
            // height:this.state.animation,
        }
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,animatedStyles]}>
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
