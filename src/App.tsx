import * as React from 'react';
import './App.css';
import MyComponent from './Component/component';
import Props from './Component/props';

class App extends React.Component {
  render() {
    return (
        <div>
            <MyComponent />
            <Props greeting="Hello!!"/>
        </div>
    );
  }
}

export default App;
