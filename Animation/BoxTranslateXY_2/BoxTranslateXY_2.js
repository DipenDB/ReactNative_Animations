
import React ,{Component} from 'react';
import {Animated, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        // alignItems:'center',
        // justifyContent:'center',
    },
    box:{
        height:50,
        width:50,
        backgroundColor:'#e00'
    }
})

export default class BoxTranslateXY_2 extends Component{

    //Default Value
    // 0 : at starting position
    // +ve X go right  ,   -ve X go left
    // +ve Y go bottom  ,   -ve Y go top

    // (0,0)------------------x
        // -
        // -
        // -
        // -
        // Y
    state={
        animationX:new Animated.Value(0),
        animationY:new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animationX,{
            toValue:200,
            duration:1500,
            useNativeDriver:true,
        }).start(()=>{
            Animated.timing(this.state.animationY,{
                toValue:300,
                duration:1500,
                useNativeDriver:true,
            }).start(()=>{
                this.state.animationY.setValue(0);
                this.state.animationX.setValue(0);
            });
        });
    }


    render() {

        const animatedStyles={
            transform:[
                {
                    translateX: this.state.animationX
                },
                {
                    translateY: this.state.animationY

                }
            ]
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

