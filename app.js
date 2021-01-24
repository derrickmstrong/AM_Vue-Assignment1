const app = Vue.createApp({
  data() {
    return {
      firstName: 'Derrick',
      lastName: 'Strong',
      age: 41,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41PlqABJebL._SY355_.jpg',
      width: '200',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randNumber() {
      return Math.random();
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount('#assignment');