import React, { useCallback } from 'react';
import style from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/contact/';

export default function ContactList() {
	const dispatch = useDispatch();

	const contacts = useSelector(contactSelectors.getVisibleContacts);
	const delContact = useCallback(
		id => {
			dispatch(contactOperations.deleteContact(id));
		},
		[dispatch],
	);
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
}
