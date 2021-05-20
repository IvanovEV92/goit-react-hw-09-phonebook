import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contactList.loading;

const getFilter = state => state.contactList.filter;

const getContacts = state => state.contactList.items;

const getVisibleContacts = createSelector(
	[getContacts, getFilter],
	(items, filter) => {
		const normalizedFilter = filter.toLowerCase();
		return items.filter(item =>
			item.name.toLowerCase().includes(normalizedFilter),
		);
	},
);
// eslint-disable-next-line
export default { getLoading, getFilter, getVisibleContacts };
