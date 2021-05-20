import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import AppBar from './component/AppBar';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactView = lazy(() => import('./views/ContactView'));
class App extends Component {
	componentDidMount() {
		this.props.onGetCurretnUser();
	}

	render() {
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
}

const mapDispatchToProps = {
	onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
