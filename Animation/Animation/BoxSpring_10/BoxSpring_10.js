
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'



export default class BoxSpring_10 extends Component{

    state={
        animation: new Animated.Value(1)
    }

    startAnimation=()=>{
        Animated.spring(this.state.animation,{
            toValue:2,
            //Default 1 to 8, 1 more spring then 2
            friction:3,
            // More tension more springy
            tension:160,
            


            useNativeDriver:false
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:1500,
                useNativeDriver:false
            }).start()
        })
    }


    render() {

        const animatedStyle={
            transform:[
                {
                    scale:this.state.animation
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
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center',
    },
    box:{
        height:70,width:70,backgroundColor: '#e00'
    }
})
