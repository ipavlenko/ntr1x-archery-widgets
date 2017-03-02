(function($, Vue, Core) {

    Vue.component('default-layers-stack', {
        template: '#default-layers-stack',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

    Vue.component('default-layers-item', {
        template: '#default-layers-item',
        mixins: [ Core.WidgetMixin ],
    })

})(jQuery, Vue, Core);
