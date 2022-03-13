import vue from 'vue';
import vuex from 'vuex';

import currentDetails from "./modules/currentDetails";
vue.use(vuex);

export default new vuex.Store({
    modules:{
        currentDetails
    }
});
