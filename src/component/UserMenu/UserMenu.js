import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	avatar: {
		marginRight: 4,
	},
	name: {
		fontWeight: 700,
		marginRight: 12,
	},
};

export default function UserMenu() {
	const name = useSelector(authSelectors.getUsername);
	const dispatch = useDispatch();
	const onLogout = useCallback(() => {
		dispatch(authOperations.logOut());
	}, [dispatch]);
	return (
		<div style={styles.container}>
			<span style={styles.name}>Welcome, {name}</span>
			<button type="button" onClick={onLogout}>
				Logout
			</button>
		</div>
	);
}
