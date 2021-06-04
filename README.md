# ReactNative_Animations
Mastering Native Animation and Gestures

<h1>Opacity Explanation : </h1>

One of the most used animations is opacity. Animating elements visible or animating them hidden. Opacity is a style property that is defined between 0 (meaning hidden) and 1 being completely visible. Anything in between 0 and 1 will add transparency. This will allow you to see through the element and potentially expose other elements underneath.

<code class="js language-js">componentWillMount() {
  this._animation = new Animated.Value(0);
}

componentDidMount() {
  Animated.timing(this._animation, {
    toValue: 1,
    duration: 500,
  }).start()
}
render() {
  const animatedStyle = {
    opacity: this._animation
  }
  return <Animated.View style={[styles.box, animatedStyle]} />
}
</code>
A very basic animation would look like the code above. We've defined an animation and set the default to 0. We pass our this._animation into a generic style object on the opacity key.

Then we use an array to combine multiple styles style={[styles.box, animatedStyle]}. This way we can have default styling for our view and only declare the properties we want to animate.

The key here is that our animation gets kicked off in our componentDidMount and will animate to 1 over 500 milliseconds. This will be a casual fade in.

Opacity is purely visual and operates the same as it does on the web. Meaning the element will have layout, the item just won't be visible. If there is any content behind the element with opacity they will become visible but will not be interactable with.


<h1>Translate Position Explanation :</h1>

To moves items around the screen you typically want to use translateX and translateY. These will not cause layout changes and will be the most performant want to execute an animation. There are trade offs to using translate. Since it doesn't effect layout, the surrounding layouts won't be effected.

For example if you wanted to move an item left or right and have another item fill in to it's spot, this won't happen. You would need to manually adjust the other elements in conjunction with the transform. In order to get this style of animation to work you'd have to animate layouts.

I'm pointing this out as we will cover animations that use translate and layout (width/height/absolute position). There are times where doing animations with layout values won't be performant enough to reach 60FPS, and you will need to find different ways to accomplish your animations using translates and other transforms.

Translations operate like a grid, where 0,0 is the top left of the element. The Y piece will operate on the Y axis, go up and down/move top to bottom. The X will operate on X axis, go left to right.

In order to move up and or left (depending on the axis) we need to move negatively. If we want to move down or right we need to move positively.

This animation here because we are moving in a positive direction, and passing it into translateY and translateX we will be moving towards the bottom right hand corner (diagonally).

<code class="js language-js">componentWillMount() {
  this._animation = new Animated.Value(0);
}

componentDidMount() {
  Animated.timing(this._animation, {
    toValue: 300,
    duration: 500,
  }).start()
}
render() {
  const animatedStyle = {
    transform: [
      { 
        translateY: this._animation
      },
      {
        translateX: this._animation
      }
    ]
  }
  return <Animated.View style={[styles.box, animatedStyle]} />
}
</code>
Now if we were to switch it up and animate towards -300 we would be moving towards the top/left.

<code class="js language-js">componentDidMount() {
  Animated.timing(this._animation, {
    toValue: -300,
    duration: 500,
  }).start()
}
</code>




