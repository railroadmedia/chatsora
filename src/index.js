import Components from './components';
import './assets/sass/app.scss';

export default {
    install(Vue) {
        Object.keys(Components)
            .forEach((name) => {
                Vue.component(
                    name,
                    Components[name],
                );
            });
    },
};
