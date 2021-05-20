import { createAction } from '@reduxjs/toolkit';

// import { v4 as uuidv4 } from 'uuid';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');
const handleFormRequest = createAction('contacts/handleFormRequest');
const handleFormSuccess = createAction('contacts/handleFormSuccess');
const handleFormError = createAction('contacts/handleFormError');
const delContactRequest = createAction('contacts/delContactRequest');
const delContactSuccess = createAction('contacts/delContactSuccess');
const delContactError = createAction('contacts/delContactError');

const changeFilter = createAction('contacts/changeFilter');

export default {
	handleFormRequest,
	handleFormSuccess,
	handleFormError,
	delContactRequest,
	delContactSuccess,
	delContactError,
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsError,
	changeFilter,
};
