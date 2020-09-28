import * as React from 'react';
import './App.css';
import MyComponent from './Component/component';
import Props from './Component/props';
import TodoComponent from "./Component/ToDo";

class App extends React.Component {
  render() {
    return (
        <div>
            <MyComponent />
            <Props greeting="Hello!!"/>
            <TodoComponent
                onClickAddButton={(todo: string): void => {
                    console.log(todo);
                }}
            />
        </div>
    );
  }
}

export default App;
