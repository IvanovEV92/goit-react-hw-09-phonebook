import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { Switch } from 'react-router-dom';

import AppBar from './component/AppBar';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { authOperations } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactView = lazy(() => import('./views/ContactView'));

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);
	return (
		<>
			<AppBar />
			<Suspense fallback={<p>Загружаем...</p>}>
				<Switch>
					<PublicRoute exact path="/" component={HomeView} />
					<PublicRoute
						path="/register"
						restricted
						redirectTo="/contacts"
						component={RegisterView}
					/>
					<PublicRoute
						path="/login"
						restricted
						redirectTo="/contacts"
						component={LoginView}
					/>
					<PrivateRoute
						path="/contacts"
						redirectTo="/login"
						component={ContactView}
					/>
				</Switch>
			</Suspense>
		</>
	);
}
