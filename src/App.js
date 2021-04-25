import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getConfiguration } from './store/actions/configuration'
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loader from './components/Loader'
import SideNav from './components/SideNav'
import Landing from './components/Landing'
import Product from './components/Product'
import Header from './components/Header'

function App() {
	const dispatch = useDispatch()
	const configDetails = useSelector((state) => state.configuration)
	const { isLoading, configuration, error } = configDetails
	useEffect(() => {
		dispatch(getConfiguration(process.env.REACT_APP_APP_ID || 1))
	}, [dispatch])

	useEffect(() => {
		const root = document.querySelector(':root')
		if (configuration) {
			const { mainColor } = configuration
			root.style.setProperty('--main-color', mainColor)
		}
	}, [configuration])

	return (
		<div className='app'>
			{isLoading && <Loader />}
			{configuration && (
				<BrowserRouter>
					<div className='header-wrapper'>
						<Header />
					</div>
					<div className='body-wrapper'>
						<SideNav />
						<div className='content-wrapper'>
							<Switch>
								<Route exact path='/' component={Landing}></Route>
								<Route path='/product' component={Product}></Route>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			)}
			{error && <h1>Something went wrong..</h1>}
		</div>
	)
}

export default App
