import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  state = {
    mainPageTitle: '',
    mainPageSwitchValue: '',
    userToken: null,
    userId: null
  };

  render() {
    const currentState = {...this.state}
    return (
      <div className="App">
        <div className="App__leftbox">
          <NavBar
            changeSwitch={this.changeSwitch}
            changeUser={this.changeUser}
            reverseOrder={this.reverseOrder}
            switchValue={this.state.mainPageSwitchValue}
            currentUser={{ token: this.state.userToken, id: this.state.userId }}
          />
        </div>
        <div className="App__rightbox">
          <MainPage
            title={currentState.mainPageTitle}
            caseValue={currentState.mainPageSwitchValue}
            changeSwitch={this.changeSwitch}
            changeUser={this.changeUser}
            onRef={ref => (this.mainpage = ref)}
            currentUser={{token: this.state.userToken, id: this.state.user}}
          />
        </div>
      </div>
    );
  }

  changeSwitch = (title, casevalue) => {
    if (this.state.userId === null || this.state.userToken === null) {
      this.setState({mainPageTitle: 'Not Logged In', mainPageSwitchValue: ''});
      return;
    }
    this.setState({mainPageTitle: title, mainPageSwitchValue: casevalue});
  };

  reverseOrder = () => {
    if (this.state.mainPageSwitchValue === 'noteList') {
      this.mainpage.reverseNoteOrder();
    }
  };

  changeUser = (token, id) => {
    this.setState({ userToken: token, userId: id });
  };
}

export default App;
