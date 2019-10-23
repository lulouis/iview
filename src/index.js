
import Steps from './components/steps';


const components = {

    Step: Steps.Step,
    Steps

};

const iview = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};


module.exports.default = module.exports = API;   // eslint-disable-line no-undef
