import React from 'react'
import { Router } from "@reach/router"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import '../master.scss'

import Home from './home/home'
import Master from './master/master'

const IndexPage = () => (
  <Router>
    <Master path='/'>
      <Home path='/' />
    </Master>
  </Router>
)

export default IndexPage
