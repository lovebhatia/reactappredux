import React from "react";
import {connect} from "react-redux"
import {useSelector,useDispatch} from "react-redux"
import "./style.css";
import {increment,decrement} from "../redux"


function App(props) {  
  const count=useSelector(state => state)
  const dispatch=useDispatch()
    return (
        <div>
            <h1>{count} </h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
/*
function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
  return {
    //bananas: "Hello"
   // bananas: globalState
   count: globalState
  }



    // values are the actual parts of the global state your component wants
}
*/
/*
const mapDispatchToProps = {

  increment:increment,
  decrement: decrement 

}
*/
// https://react-redux.js.org/api/connect#connect


//export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default connect(state => ({count: state}),{increment,decrement})(App)

export default App


//connect is a function and it returns a function to which we pass our component
//export default connect(/* what parts of state you want*/ /*,*//*what actions to dispatch */)(App)

//functions that can return functions and calling them immediately.

