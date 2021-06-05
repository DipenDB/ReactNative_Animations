
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Animated,Text,ScrollView} from 'react-native'



export default class BackgroundColorChange_1 extends Component{
    state={
        animation: new Animated.Value(0)
    }


    render() {

        const backgroundInterpolate=this.state.animation.interpolate({
            inputRange:[0,750],
            outputRange:['#4287f5','#f5cb42']
        })

        const backgroundStyle={
            backgroundColor:backgroundInterpolate
        }


        return(
            <View style={styles.container}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={
                        Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: {y:this.state.animation},
                                    },
                                }
                            ],

                            {
                                useNativeDriver:false
                            }
                        )

                    }
                >
                    <Animated.View style={[styles.content,backgroundStyle]}/>
                </ScrollView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        height:1500
    }
})
