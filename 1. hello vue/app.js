const myObj = {
  firstName: 'Jhon',
  lastName: 'Rodriguez'
};

Vue.createApp({
  data(){
    return myObj
  }
}).mount('.app');

Vue.createApp({
  data(){
    return myObj
  }
}).mount('.app2');