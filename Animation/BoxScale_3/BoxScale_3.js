
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text} from 'react-native'

export default class BoxScale_3 extends Component{

    //Default Value
    // 1 : default size
    // 2 : double the default size

    state={
        animation: new Animated.Value(1),
        animationX: new Animated.Value(1),
        animationY: new Animated.Value(1),

    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            //Double the size
            toValue:2,
            duration:200,
            useNativeDriver:true
        }).start(()=>{
            Animated.timing(this.state.animationX,{
                //Flip x
                toValue:-2,
                duration:1500,
                useNativeDriver:true
            }).start(()=>{
                Animated.timing(this.state.animationY,{
                    //Flip y
                    toValue:-2,
                    duration:1500,
                    useNativeDriver:true
                }).start()
            })
        })
    }

    render() {


        const animatedStyles={
            transform:[
                {
                    scale: this.state.animation
                },
                {
                    scaleX: this.state.animationX
                },
                {
                    scaleY: this.state.animationY
                }
            ]
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
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    box:{
        height:70,width:70,backgroundColor: '#e00',borderRadius:15
    }
})
