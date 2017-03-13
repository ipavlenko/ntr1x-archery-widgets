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

    // Vue.component('default-input-textarea', {
    //     template: '#default-input-textarea',
    //     mixins: [ Core.WidgetMixin ],
    // });
    //
    // Vue.component('default-input-checkbox', {
    //     template: '#default-input-checkbox',
    //     mixins: [ Core.WidgetMixin ],
    // });
    //
    // Vue.component('default-input-radio', {
    //     template: '#default-input-radio',
    //     mixins: [ Core.WidgetMixin ],
    // });

})(jQuery, Vue, Core);
