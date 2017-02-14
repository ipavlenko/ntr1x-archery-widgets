(function($, Vue, Core) {

    Vue.component('default-repeater-vertical', {
        template: '#default-repeater-vertical',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-repeater-horizontal', {
        template: '#default-repeater-horizontal',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('default-repeater-item', {
        props: {
            item: Object
        },
        template: '<div><slot></slot></div>',
        created() {
            this.$context = Object.assign({}, this.$context, this.item)
        }
    })

})(jQuery, Vue, Core);
