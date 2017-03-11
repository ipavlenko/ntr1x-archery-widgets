(function($, Vue, Core) {

    Vue.component('default-layers-stack', {
        template: '#default-layers-stack',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

    Vue.component('default-layers-repeater', {
        template: '#default-layers-repeater',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

    Vue.component('default-layers-item', {
        template: '#default-layers-item',
        mixins: [ Core.WidgetMixin ],
    })

    Vue.component('default-layers-repeater-item', {
        template: '#default-layers-repeater-item',
        props: {
            item: Object,
            disabled: Boolean
        },
        created() {
            this.$context = Object.assign({}, this.$context, this.item)
            console.log(this.$context)
        }
    })

})(jQuery, Vue, Core);
