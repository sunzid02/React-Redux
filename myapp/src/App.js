import React, { Component } from 'react';

import  Ninjas  from "./Ninjas";

class App extends Component {

  state = {
    ninjas: [
      { name: 'Zia',  age:  30, belt: 'black',  id: 1 },
      { name: 'Zayed',  age:  25, belt: 'blue',  id: 2 },
      { name: 'Zunayed',  age:  20, belt: 'red',  id: 3 }
    ],

    game: 'COD'
  }

  render() {
    return (
      <div className="App">
        <h1>  Let the fun begin  </h1>
        <p>  Booyah  </p>

        <Ninjas  ninjas={ this.state.ninjas } game={  this.state.game }/>
      </div>

    )
  }
}

export default App;
