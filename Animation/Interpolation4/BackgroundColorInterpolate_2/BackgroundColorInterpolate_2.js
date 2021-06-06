
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BackgroundColorInterpolate_2 extends Component{

    state={
        animation : new Animated.Value(0)
    };

    startAnimation =()=> {
        Animated.timing(this.state.animation, {
            toValue: 2,
            duration: 1500,
            useNativeDriver: false,
        }).start(() => {
            this.state.animation.setValue(0)
        })
    }



    render() {

        const boxColorInterpolate = this.state.animation.interpolate({
            inputRange:[0,1,2],
            outputRange:['#ff4d00','#1e00ff','#ffff00']
        })

        const backgroundStyle={
            backgroundColor:this.state.animation.interpolate({
                inputRange:[0,2],
                outputRange:['rgba(173, 173, 173,1)','rgba(79, 86, 184,0.3)']
            })
        }

        const boxStyle={
            backgroundColor:boxColorInterpolate
        }

        return(
            <Animated.View style={[styles.container,backgroundStyle]}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,boxStyle]}>
                        <Text>Hello</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        height:170,width:170,
        // backgroundColor: '#e00'
    }
})
