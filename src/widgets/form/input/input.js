(function($, Vue, Core) {

    Vue.component('default-form-text', {
        template: '#default-form-text',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-password', {
        template: '#default-form-password',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-textarea', {
        template: '#default-form-textarea',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-checkbox', {
        template: '#default-form-checkbox',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-radio', {
        template: '#default-form-radio',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
