import React from "react";
import {connect} from "react-redux"
import "./style.css";

 function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
}



export default connect(mapStateToProps,/*what actions to dispatch */)(App)

//connect is a function and it returns a function to which we pass our component
//export default connect(/* what parts of state you want*/ /*,*//*what actions to dispatch */)(App)

//functions that can return functions and calling them immediately.

