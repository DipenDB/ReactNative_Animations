
import React,{Component} from 'react'
import {StyleSheet,View,Animated,TouchableWithoutFeedback} from 'react-native'

class BoxOpacity_1 extends Component{

    //Default Value
    // 1 : Not Hidden
    // 0 : Hidden

    state={
        animation:new Animated.Value(1)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:0,
            duration:3500,
            useNativeDriver: true
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:5000,
                useNativeDriver: true
            }).start()
        });
    }



    render() {

        const animatedStyles={
            opacity:this.state.animation
        }

        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,animatedStyles]} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
    },
    box: {
        height: 90,
        width: 90,
        backgroundColor:'red',
    },

})


export default BoxOpacity_1
