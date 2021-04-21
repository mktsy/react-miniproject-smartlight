import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from './pages/admin/dashBoard'
import PageNotFound from './components/pageNotFound'
import UserForm from './components/userForm'
import React, { useEffect } from 'react'
import UserViews from './pages/views/userViews'
import Control from './components/control'

function App(props) {
  useEffect (() => {
    
    console.log(window.location.pathname);
    const pathName = window.location.pathname
    var mainPath = pathName.split('/')
    console.log(mainPath[1]);
  })
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} component={UserViews} exact={true} />
          <Route path={"/control"} component={UserViews} />
          <Route path={"/dashboard"} component={DashBoard} />
          <Route path="/dashboard/:userinfo" component={DashBoard} />
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
