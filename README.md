# ReactNative_Animations
Mastering Native Animation and Gestures

<h2>Opacity</h2>
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
