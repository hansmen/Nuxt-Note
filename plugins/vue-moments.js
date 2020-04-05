import Vue from 'vue';
import VueMoment from 'vue-moment';
const moment = require('moment');
require('moment/locale/uk');

Vue.use(VueMoment, {
  moment,
});