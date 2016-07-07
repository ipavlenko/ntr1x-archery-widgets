(function($, Vue, Core) {

    Vue.component('default-check', {
        template: '#default-check',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-check-input', {
        template: '#default-check-input',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
