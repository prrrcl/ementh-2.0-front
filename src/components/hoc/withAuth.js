import React, {Component} from 'react'
import {AuthContext} from '../../contexts/auth-context';

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return(
        <AuthContext.Consumer>
          {({user, isLoggedIn, login, signup, logout,title}) => (
            <Comp  
            user={user} 
            isLoggedIn={isLoggedIn} 
            login={login}
            signup={signup}
            logout={logout}
            title={title}
            {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}

export default withAuth;