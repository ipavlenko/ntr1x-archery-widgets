(function($, Vue, Core) {

    Vue.component('default-radio', {
        template: '#default-radio',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-radio-input', {
        template: '#default-radio-input',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
