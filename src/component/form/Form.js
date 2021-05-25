import React, { useState, useCallback } from 'react';
import styles from './form.module.css';
import { useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/contact/';

export default function Form() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleNameChange = useCallback(event => {
		const { name, value } = event.currentTarget;
		switch (name) {
			case 'name':
				return setName(value);

			case 'number':
				return setNumber(value);

			default:
				return null;
		}
	}, []);

	const handleSubmit = useCallback(
		event => {
			event.preventDefault();
			const newContact = { name, number };
			dispatch(contactOperations.handleForm(newContact));
			resetForm();
		},
		[dispatch, name, number],
	);

	function resetForm() {
		setName('');
		setNumber('');
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.form__label}>
				Name
				<input
					type="text"
					name="name"
					value={name}
					placeholder="Введите имя"
					// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
					onChange={handleNameChange}
				/>
			</label>
			<label className={styles.form__label}>
				Number
				<input
					type="tel"
					name="number"
					value={number}
					placeholder="Введите номер"
					// pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
					title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
					required
					onChange={handleNameChange}
				/>
			</label>
			<button className={styles.form__button} type="submit">
				Add contact
			</button>
		</form>
	);
}
