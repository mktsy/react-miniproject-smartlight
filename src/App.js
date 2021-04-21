import './App.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'
import DashBoard from './pages/admin/dashBoard'
import NotFound from './components/notFound'
import UserForm from './components/userForm'
import React, { useEffect } from 'react'

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
          <Route path={"/dashboard"} component={DashBoard} exact={true}/>
          <Route path="/dashboard/:userinfo" component={DashBoard} />
          {/* <Route path="/eiei" component={NewSidebar}/> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    // <div> 
    //   <UserInfoPage />
    // </div>
  )
}

export default App
