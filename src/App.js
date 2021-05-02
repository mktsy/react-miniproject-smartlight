import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from './pages/admin/dashBoard'
import PageNotFound from './components/pageNotFound'
import React, { useEffect, useState } from 'react'
import UserViews from './pages/views/userViews'
import GuardedRoute from './services/guardRoute'

// const authentication = {
//   isLoggedIn: false,
//   token: localStorage.getItem('token')
//     (token)? isLoggedIn: true
// }
function App(props) {
  const[isAutheticated, setisAutheticated] = useState(true);

  useEffect (() => {
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
          <GuardedRoute path={"/control"} component={UserViews} auth={isAutheticated}/>
          <GuardedRoute exact path="/control/history" component={UserViews} auth={isAutheticated} />
          <GuardedRoute exact path="/control/changepassword/" component={UserViews} auth={isAutheticated}/>
          <GuardedRoute exact path={"/dashboard"} component={DashBoard} auth={isAutheticated}/>
          <GuardedRoute exact path="/dashboard/userinfo/:userinfo" component={DashBoard} auth={isAutheticated}/>
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
