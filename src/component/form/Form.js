import React, { Component } from 'react';
import styles from './form.module.css';
import { connect } from 'react-redux';
import { contactOperations } from '../../redux/contact/';
class Form extends Component {
	state = { name: '', number: '' };

	handleChange = ({ target }) => {
		const { name, value } = target;

		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state);
		this.resetForm();
	};
	resetForm = () => {
		this.setState({ name: '', number: '' });
	};
	render() {
		const { name, number } = this.state;
		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
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
						onChange={this.handleChange}
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
						onChange={this.handleChange}
					/>
				</label>
				<button className={styles.form__button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onSubmit: contact => dispatch(contactOperations.handleForm(contact)),
});
export default connect(null, mapDispatchToProps)(Form);
