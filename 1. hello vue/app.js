const myObj = {
  firstName: 'Jhon',
  lastName: 'Rodriguez',
  url: 'https://google.com'
};

const vm = Vue.createApp({
  data(){
    return myObj
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
}).mount('#app');

setTimeout(() => {
  vm.firstName = 'Epilef';
}, 2000);

// Vue.createApp({
//   data(){
//     return myObj
//   }
// }).mount('.app2');