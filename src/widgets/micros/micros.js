(function($, Vue, Core) {

    Vue.component('default-micros-text', {
        template: '#default-micros-text',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-micros-rich', {
        template: '#default-micros-rich',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-micros-icon', {
        template: '#default-micros-icon',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-micros-image', {
        template: '#default-micros-image',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-micros-button', {
        template: '#default-micros-button',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
