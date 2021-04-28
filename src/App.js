import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import { AppProvider } from './context'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Subcategory from './components/Subcategory/Subcategory'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<AppProvider>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/crownstack' component={Home} />
					<Route path='/category/:id/subcategory' component={Subcategory} />
					<ErrorBoundary>
						<Route path='/category/:id' component={Catalog} />
					</ErrorBoundary>
				</Switch>
				<Footer />
			</div>
		</AppProvider>
	)
}

export default App
