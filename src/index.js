import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Test, Test2} from './playground/testhooks'
import { createStore } from 'redux';

/*Styles */
import './styles/app.scss'
import App from './App';

const countReducer = (state = {count : 0}, action) => {
  switch (action.type) {
      case 'INCREMENT' : return {count : state.count + action.value};
      case 'DECREMENT' : return {count : state.count - 1}
      default : return state
  }
}

const store = createStore(countReducer);

store.subscribe(() => console.log(store.getState()))
store.dispatch({type : 'INCREMENT', value : 5});
store.dispatch({type: 'DECREMENT'})



ReactDOM.render( <BrowserRouter>
    <App / >
    </BrowserRouter>, document.getElementById('root')
);

{/* ReactDOM.render(<Test />, document.getElementById('root')) */}



