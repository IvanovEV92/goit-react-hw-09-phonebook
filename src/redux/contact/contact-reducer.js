import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactActions } from './';

const items = createReducer([], {
	[contactActions.fetchContactsSuccess]: (_, { payload }) => payload,
	[contactActions.handleFormSuccess]: (state, { payload }) => [
		...state,
		payload,
	],
	[contactActions.delContactSuccess]: (state, { _, payload }) =>
		state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
	[contactActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
	[contactActions.fetchContactsRequest]: () => true,
	[contactActions.fetchContactsSuccess]: () => false,
	[contactActions.fetchContactsError]: () => false,
	[contactActions.addContactRequest]: () => true,
	[contactActions.addContactSuccess]: () => false,
	[contactActions.addContactError]: () => false,
	[contactActions.delContactRequest]: () => true,
	[contactActions.delContactSuccess]: () => false,
	[contactActions.delContactError]: () => false,
});
export default combineReducers({
	items,
	filter,
	loading,
});
