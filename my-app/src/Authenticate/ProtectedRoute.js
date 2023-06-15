import {Navigate} from "react-router-dom";
import {AuthContext} from "./AuthContext.js";
import {useContext} from "react";

const Protected = ({children}) => {
  const {isAuth} = useContext(AuthContext);
  if (isAuth) {
    return children;
  }
  return <Navigate to="/" replace/>;
};
export default Protected;
