import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './context/StateProvider'
import { auth } from './firebase/firebase'

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if(authUser){
				dispatch({
					type:'SET_USER',
					user:authUser
				})
			}else{
				dispatch({
					type:'SET_USER',
					user:null
				})
			}
		})
		return () => {
			unsubscribe()
		}
	}, [])

	console.log("user is -> ",user)
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>

	);
}

export default App;
