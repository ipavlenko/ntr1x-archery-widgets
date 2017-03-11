(function($, Vue, Core) {

    Vue.component('default-stack-canvas', {
        template: '#default-stack-canvas',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
        props: {
            scalable: Boolean
        },
        created() {
            this.$page.dispatch(this.bindings.load, this.$context)
        }
    });

    Vue.component('default-stack-horizontal', {
        template: '#default-stack-horizontal',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

    Vue.component('default-stack-vertical', {
        template: '#default-stack-vertical',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

})(jQuery, Vue, Core);
