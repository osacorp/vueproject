require('./bootstrap');

window.Vue = require('vue');


//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('all-users', require('./components/AllUsers.vue').default);

import swal from 'sweetalert2';
window.swal = swal;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
});
