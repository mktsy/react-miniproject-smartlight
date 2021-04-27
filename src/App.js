import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from './pages/admin/dashBoard'
import PageNotFound from './components/pageNotFound'
import UserForm from './components/userForm'
import React, { useEffect, useState } from 'react'
import UserViews from './pages/views/userViews'
import Control from './components/control'
import ChangePassword from './components/changePassword'

// const authentication = {
//   isLoggedIn: false,
//   token: localStorage.getItem('token')
//     (token)? isLoggedIn: true
// }
function App(props) {
  const[isAutheticated, setisAutheticated] = useState(false);

  useEffect (() => {
    console.log(isAutheticated)
    // console.log(window.location.pathname);
    // const pathName = window.location.pathname
    // var mainPath = pathName.split('/')
    // console.log(mainPath[1]);
    const token = localStorage.getItem('token')
    if (token) {
      setisAutheticated(true);
    } else {
      setisAutheticated(false);
    }
    console.log(token);
    console.log(isAutheticated)
  })
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"} component={UserViews} exact={true} />
          <Route path={"/control"} component={UserViews} />
          <Route exact path={"/dashboard"} component={DashBoard} />
          <Route exact path="/dashboard/userinfo/:userinfo" component={DashBoard} />
          <Route exact path="/dashboard/changepassword/" component={DashBoard} />
          {/* <Route path="/eiei" component={NewSidebar}/> */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
    // <div> 
    //   <UserInfoPage />
    // </div>
  )
}

export default App
