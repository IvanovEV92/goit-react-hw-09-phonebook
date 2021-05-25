import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

import { NavLink } from 'react-router-dom';

const styles = {
	link: {
		display: 'inline-block',
		textDecoration: 'none',
		padding: 12,
		fontWeight: 700,
		color: '#2A363B',
	},
	activeLink: {
		color: '#E84A5F',
	},
};

export default function Navigation() {
	const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
	return (
		<nav>
			<NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
				Главная
			</NavLink>

			{isAuthenticated && (
				<NavLink
					to="/contacts"
					exact
					style={styles.link}
					activeStyle={styles.activeLink}
				>
					Контакты
				</NavLink>
			)}
		</nav>
	);
}
