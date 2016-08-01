(function($, Vue, Core) {

    Vue.component('default-items', {
        template: '#default-items',
        mixins: [ Core.WidgetMixin ]
    });

    Vue.component('default-media-horizontal', {
        template: '#default-media-horizontal',
        mixins: [ Core.WidgetMixin ]
    });

})(jQuery, Vue, Core);
