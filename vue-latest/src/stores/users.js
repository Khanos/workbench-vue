import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    currentColmn: '',
    order: 'asc',
  }),
  actions: {
    setSearch(search) {
      this.search = search;
    },
    setUsers(newUsers) {
      this.users = newUsers;
    },
    setCurrentColumn(column) {
      this.currentColmn = column;
    },
    toggleOrder() {
      this.order = this.order === 'asc' ? 'desc' : 'asc';
    },
    sortBy(field, order = 'asc') {
      const getPropertyName = (obj, field) => {
        if (field === 'address') {
          return obj.address.street;
        }
        if (field === 'company') {
          return obj.company.name;
        }
        return obj[field];
      };
      if (order === 'desc') {
        return this.users.sort((a, b) => getPropertyName(a, field) < getPropertyName(b, field) ? 1 : -1);
      }
      return this.users.sort((a, b) => getPropertyName(a, field) > getPropertyName(b, field) ? 1 : -1);
    },
  },
});