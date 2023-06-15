import React from 'react'
import {authenticate} from "./authenticate";
import {dataHandler} from "../Api/dataHandler";

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  async login(form) {
    const resp = await dataHandler.logInAppUser(form);
    if (!resp) {
      return false;
    }
    authenticate.loginUser(resp.data);
    this.setState({isAuth: true});
    return true;
  }

  async logout() {
    this.setState({isAuth: false});
    authenticate.logoutUser();
    await dataHandler.logout();
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
