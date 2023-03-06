// Write your code here

import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogIn: true}

  onclickButton = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <Message isValue={isLogIn} />
          {isLogIn ? (
            <Login login={this.onclickButton} />
          ) : (
            <Logout logout={this.onclickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
