

import React,{Component} from 'react'
import {StyleSheet,
    View,
    Animated,
    Text,
    PanResponder
} from 'react-native'


export default class MoveBoxGestureDecay_2 extends Component{

    state = {
        animation: new Animated.ValueXY(0),
    };

    // componentWillMount() {
    //     this._panResponder = PanResponder.create({
    //         onStartShouldSetPanResponder: () => true,
    //         onMoveShouldSetPanResponder: () => true,
    //         onPanResponderGrant: (e, gestureState) => {
    //             this.state.animation.extractOffset();
    //         },
    //         onPanResponderMove: Animated.event([
    //             null,
    //             { dx: this.state.animation.x, dy: this.state.animation.y },
    //         ],
    //             {
    //                 useNativeDriver: false
    //             }
    //
    //         ),
    //         onPanResponderRelease: (e, { vx, vy }) => {
    //             Animated.decay(this.state.animation, {
    //                 velocity: { x: vx, y: vy },
    //                 deceleration: 0.997,
    //             }).start();
    //         },
    //     });
    // }




    componentWillMount() {

        //----------This section is not required if extractOffset is done on Grant----------------------
        this._x = 0;
        this._y = 0;

        //It get delta x and y  value ie new coordinate
        this.state.animation.addListener((value)=>{
            this._x = value.x;
            this._y = value.y;
        })

        //----------------------------------------------

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder:()=>true,

            onPanResponderGrant:(e,gestureState)=>{
                //Extract Offset also does same as it set new coordinate value and change into 0 for both
                this.state.animation.extractOffset();

                //---------------Altenative--------------------

                // this.state.animation.setOffset({
                //     x:this._x,
                //     y:this._y
                // })
                // this.state.animation.setValue({
                //     x:0,
                //     y:0,
                // })
            },

            onPanResponderMove:Animated.event([
                //2 arguments: 1.event: null  2. gesture :delta value set new position of object after drag
                null,
                {
                    dx:this.state.animation.x,
                    dy:this.state.animation.y,
                },
            ],
                {
                    useNativeDriver: false
                }

            ),

            onPanResponderRelease:(e,{vx,vy})=>{
                Animated.decay(this.state.animation,{
                    velocity:{ x: vx, y:vy},
                    deceleration:0.997,
                    useNativeDriver: false
                }).start()
            }

        })
    }



    render() {

        const animatedStyle={
            transform: this.state.animation.getTranslateTransform()
        }

        return(
            <View style={styles.container}>
                <Animated.View
                    style={[styles.box, animatedStyle]}
                    {...this.panResponder.panHandlers}
                >
                    <Text>Hello</Text>

                </Animated.View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: "tomato",
    },

})
