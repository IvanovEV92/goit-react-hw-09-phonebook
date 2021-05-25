import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/contact/';

import styles from './filter.module.css';

export default function Filter() {
	const dispatch = useDispatch();
	const value = useSelector(contactSelectors.getFilter);
	const onChange = useCallback(
		e => {
			dispatch(contactActions.changeFilter(e.currentTarget.value));
		},
		[dispatch],
	);
	return (
		<input
			className={styles.search}
			type="text"
			value={value}
			placeholder="Поиск"
			onChange={onChange}
		/>
	);
}
