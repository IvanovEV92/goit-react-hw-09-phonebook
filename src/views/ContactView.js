import { Component } from 'react';

import ContactForm from '../component/form';
import ContactList from '../component/ContactList';
import Filter from '../component/filter';
import { connect } from 'react-redux';
import { contactSelectors, contactOperations } from '../redux/contact';

class ContactView extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}
	render() {
		return (
			<section>
				<h1>Phonebook</h1>
				<ContactForm />
				{this.props.isLoadingContacts && <h1>Загружаем...</h1>}
				<h2>Contacts</h2>
				<Filter />
				<ContactList />
			</section>
		);
	}
}

const mapDispatchToProps = {
	fetchContacts: contactOperations.fetchContact,
};

export default connect(null, mapDispatchToProps)(ContactView);
