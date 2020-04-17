# tutorial RLC

## Mounting

### constructor 
 - is optional
 - for binding functons and initializing a state
 - but if you need to use refs (refs used as escape hatch from props. ex: Managing focus, text selection, or media playback. Don’t Overuse Refs) you need constructor to initialized
 learn more: https://reactjs.org/docs/refs-and-the-dom.html

 Ex:  
 ```
    class CustomTextInput extends React.Component {
      constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
      }

      focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
      }

      render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
          <div>
            <input
              type="text"
              ref={this.textInput} />
            <input
              type="button"
              value="Focus the text input"
              onClick={this.focusTextInput}
            />
          </div>
        );
      }
    }

  ```

### getDerivedStateFromProps
- it is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- This method exists for rare use cases where the state depends on changes in props over time.
- Most Common Use Case For getDerivedStateFromProps (during mount): Returning a state object based on the initial props
Ex: 
```
static getDerivedStateFromProps(props, state) {
  return { blocks: createBlocks(props.numberOfBlocks) };
}
```
learn more: https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282

### render
- Rendering does all the work. It returns the JSX of your actual component
- sticky note: setState() will always lead to a re-render unless shouldComponentUpdate() returns false 
- sticky note: Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

### componentDidMount
- invoked immediately after a component is mounted (inserted into the tree).
- if you need to load data, here’s where you do it. Why:
> You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.
- Basically, here you want to do all the setup you couldn’t do without a DOM.

Ex:
```
    componentDidMount() {
        this.bricks = initializeGrid(this.grid.current);
        layoutInitialGrid(this.bricks)
        this.interval = setInterval(() => {
          this.addBlocks();
        }, 2000);
      }
```
We use the bricks.js library (called from the initializeGrid method) to create and arrange the grid.
We then set an interval to add more blocks every two seconds, mimicking the loading of data. You can imagine this being a loadRecommendations call or something in the real world.

## Updating

### getDerivedStateFromProps
- Yep, this one again
- This method exists for rare use cases where the state depends on changes in props over time.
- If you need to update your state based on a prop changing, you can do it here by returning a new state object.
- Again, hanging state based on props is not recommended. It should be considered a last resort. Ask yourself—do I need to store state? Can I not just derive the right functionality from the props themselves?
- That said, edge cases happen. Here’s some examples:
- resetting a video or audio element when the source changes
- refreshing a UI element with updates from the server
- closing an accordion element when the contents change
- Even with the above cases, there’s usually a better way to do it. But getDerivedStateFromProps will have your back when worst comes to worst.

Ex: 
With our example app, let’s say our Grid component’s numberOfBlocks prop increases. But we’ve already “loaded” past more blocks than the new amount. There’s no point using the same value. So we do this:
```
static getDerivedStateFromProps(props, state) {
  if (state.blocks.length > 0) {
    return {};
  }
  return { blocks: createBlocks(props.numberOfBlocks) };
}
```
If the current number of blocks we have in state exceeds the new prop, we don’t update state at all, returning an empty object.
(One last point about static methods like getDerivedStateFromProps: you don’t have access to the component via this. So we couldn’t access our grid ref, for example.)

### shouldComponentUpdate
- should always return a boolean — an answer to the question, “should I re-render?”
- alled with nextProps as the first argument, and nextState is the second.
- If you’re worried about wasted renders and other nonsense => shouldComponentUpdate is an awesome place to improve performance.

Ex:
In our grid app, we’ve previously established that sometimes we are going to ignore the new value of this.props.numberOfBlocks. Default behavior says our component will still rerender, since it received new props. That’s wasteful.
```
    shouldComponentUpdate(nextProps, nextState) {
      // Only update if bricks change
      return nextState.blocks.length > this.state.blocks.length;
    }
```
Now we say: the component should update only if the number of blocks in state change.

### getSnapshotBeforeUpdate
- it’s called between render and the updated component actually being propagated to the DOM. It exists as a last-chance-look at your component with its previous props and state

Ex:
In other words: when the grid expands, if they’re at the bottom, keep them there.
```
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.blocks.length < this.state.blocks.length) {
          const grid = this.grid.current;
          const isAtBottomOfGrid =
            window.innerHeight + window.pageYOffset === grid.scrollHeight;
          return { isAtBottomOfGrid };
        }
        return null;
      }
``` 
Here’s what this says: if the user has scrolled to the bottom, return an object like so: { isAtBottomOfGrid: true }. If they aren’t, return null.
You should either return null or a value from getSnapshotBeforeUpdate.

### componentDidUpdate
- It is invoked immediately after updating occurs
- we have access to three things: the previous props, the previous state, and whatever value we returned from getSnapshotBeforeUpdate

Ex:
Completing the above example:
```
componentDidUpdate(prevProps, prevState, snapshot) {
  this.bricks.pack();
  if (snapshot.isAtBottomOfGrid) {
    window.scrollTo({
      top: this.grid.current.scrollHeight,
      behavior: 'smooth',
    });
  }
}
```
First, we re-layout the grid, using the Bricks.js pack method.
Then, if our snapshot shows the user was at the bottom of the grid, we scroll them down to the bottom of the new blocks.
learn more: https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282

## Unmounting

### componentWillUnmount
- Your component is going to go away. Maybe forever. It’s very sad.
- Before it goes, it asks if you have any last-minute requests.
- Basically, clean up anything ( network requests, remove all event listeners ) to do that solely involves the component in question => when it’s gone, it should be completely gone.

Ex:
In our case, we have one setInterval call from componentDidMount to tidy up:
```
componentWillUnmount() {
  clearInterval(this.interval);
}
```

## Errors

### getDerivedStateFromError
- Something broke. Not in your component itself, but one of its descendants.
- Most Common Use Case for getDerivedStateFromError: Updating state to display an error screen.

Ex:
```
static getDerivedStateFromError(error) {
  return { hasError: true };
}
```
### componentDidCatch
- Very similar to the above, in that it is triggered when an error occurs in a child component.
- Note that componentDidCatch only works for errors in the render/lifecycle methods. If your app throws an error in a click handler, it will not be caught.

Ex:
```
componentDidCatch(error, info) {
  sendErrorLog(error, info);
}
```









