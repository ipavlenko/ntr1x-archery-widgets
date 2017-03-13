(function($, Vue, Core) {

    Vue.component('default-form-button', {
        template: '#default-form-button',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-dropdown', {
        template: '#default-form-dropdown',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-form-group', {
        template: '#default-form-group',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
