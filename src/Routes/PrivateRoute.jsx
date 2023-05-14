import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Bars } from  'react-loader-spinner'
import { AuthContext } from '../context/AuthProvider';

 
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
   
    if(loading){
        return <div className="grid justify-center items-center min-h-screen"><Bars
        height="40"
        width="40"
        color="#BFA05C"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /></div>
    }
 
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;