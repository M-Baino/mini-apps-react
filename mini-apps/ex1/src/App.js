import React, {Component} from 'react';
import Image from './Components/Image';
import Comment from './Components/Comment';
import ProfileName from './Components/ProfileName';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  state = {

  }

  render() {

  return (

    <React.Fragment>

     <div id="cont">
      <Image/>
      <ProfileName/>
      <Comment/>
     </div>

    </React.Fragment>
  );
  }
}

export default App;
