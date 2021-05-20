import React from 'react';
import { connect } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/contact/';

import styles from './filter.module.css';
const Filter = ({ value, onChange }) => {
	return (
		<input
			className={styles.search}
			type="text"
			value={value}
			placeholder="Поиск"
			onChange={onChange}
		/>
	);
};
const mapStateToProps = state => ({
	value: contactSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
	onChange: e => dispatch(contactActions.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
