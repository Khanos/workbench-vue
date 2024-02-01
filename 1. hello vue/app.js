const myObj = {
  firstName: 'Jhon',
  middleName: '',
  lastName: 'Rodriguez',
  url: 'https://google.com',
  raw_url: '<a href="https://google.com" target="_blank">Google</a>',
  age: 22
};

const vm = Vue.createApp({
  data(){
    return myObj
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  computed: {
    fullName() {
      console.log('fullName() computed property was called!');
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newValue, oldValue) {
      console.log(`The age value change from: ${oldValue} to ${newValue}`);
      setTimeout(() => {
        this.age = 20
      }, 2000);
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