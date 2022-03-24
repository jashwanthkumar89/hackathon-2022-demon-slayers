import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router'
import { RouteProps } from 'react-router-dom';

const ProtectedRoute = ({component : Component, ...rest}) => {
  const loginAuth = useSelector((state)=>state);
  return (
    <Route 
    {...rest} 
    render = {(props)=>{
      if(loginAuth) {
        return <Component />;
      } else {
        return <Redirect to = {{ pathname:"/login", state:{ from: props.location }}}/>
      }
    }}/>
  );
}

export default ProtectedRoute;