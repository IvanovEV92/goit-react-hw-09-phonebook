import axios from 'axios';
import actions from './contact-action';

const fetchContact = () => async dispatch => {
	dispatch(actions.fetchContactsRequest());
	try {
		const { data } = await axios.get('/contacts');
		dispatch(actions.fetchContactsSuccess(data));
	} catch (error) {
		dispatch(actions.fetchContactsError(error));
	}
};

const handleForm = newContact => async dispatch => {
	dispatch(actions.handleFormRequest());
	try {
		const { data } = await axios.post('/contacts', { ...newContact });
		dispatch(actions.handleFormSuccess(data));
	} catch (error) {
		dispatch(actions.handleFormError(error));
	}
};

const deleteContact = contactId => async dispatch => {
	dispatch(actions.delContactRequest());
	try {
		axios.delete(`/contacts/${contactId}`);
		dispatch(actions.delContactSuccess(contactId));
	} catch (error) {
		dispatch(actions.delContactError(error));
	}
};

export default { fetchContact, handleForm, deleteContact };
