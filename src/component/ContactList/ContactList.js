import React from 'react';
import style from './contactList.module.css';
import { connect } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/contact/';

const ContactList = ({ contacts, delContact }) => {
	return (
		<ul className={style.contactList}>
			{contacts.map(item => (
				<li key={item.id} className={style.contactList__item}>
					<span>{item.name}</span>
					<span>{item.number}</span>
					<button
						className={style.contactList__button}
						onClick={() => delContact(item.id)}
					>
						X
					</button>
				</li>
			))}
		</ul>
	);
};
const mapStateToProps = state => ({
	contacts: contactSelectors.getVisibleContacts(state),
});
const mapDispatchToProps = dispatch => ({
	delContact: id => dispatch(contactOperations.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
