
import React,{Component} from 'react'
import {StyleSheet,View,TouchableWithoutFeedback,Dimensions,Animated,Text} from 'react-native'



export default class CornerBox extends Component{

    state={
        animation:new Animated.ValueXY()
    }

    startAnimation=()=>{
        const {width,height}=Dimensions.get('window');

        Animated.sequence([
            Animated.spring(this.state.animation.y,{
                toValue:height-this._height,
                useNativeDriver: false,
            }),
            Animated.spring(this.state.animation.x,{
                toValue:width-this._width,
                useNativeDriver: false,
            }),
            Animated.spring(this.state.animation.y,{
                toValue:0,
                useNativeDriver: false,
            }),
            Animated.spring(this.state.animation.x,{
                toValue:0,
                useNativeDriver: false,
            })
        ]).start()
    }

    saveDimensions=(e)=>{
        this._width = e.nativeEvent.layout.width;
        this._height = e.nativeEvent.layout.height;
    }

    render() {

        const animatedStyle={
            transform:this.state.animation.getTranslateTransform()
        }

        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={this.startAnimation}
                    onLayout={this.saveDimensions}
                >
                    <Animated.View style={[styles.box,animatedStyle]}>
                        <Text>Press to change corner</Text>
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
        height:150,
        width:150,
        backgroundColor: '#e00',
        position:'absolute',
        top:0,
        left:0,
        alignItems:'center',
        justifyContent:'center',
    }
})
