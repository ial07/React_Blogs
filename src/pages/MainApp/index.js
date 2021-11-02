import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '..'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import './mainapp.scss'

const MainApp = () => {
    return (
        <div className='mainapp-wrapper'>
            <div className='header-wrapper'><Header /></div>
            <div className='content-wrapper'>
                <Router>
                    <Switch>
                        <Route path='/create-blog/:id?'>
                            <CreateBlog />
                        </Route>
                        <Route path='/detail-blog/:id'>
                            <DetailBlog />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className='footer-wrapper'><Footer /></div>
        </div>
    )
}

export default MainApp
