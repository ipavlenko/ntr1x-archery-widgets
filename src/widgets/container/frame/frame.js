(function($, Vue, Core) {

    Vue.component('default-frame', {
        template: '#default-frame',
        mixins: [ Core.WidgetMixin ],
        props: {
            settings: Object,
        },
        data() {
            return {
                frame: null
            }
        },
        created() {

            let f = null

            for (let p of this.$store.getters.content.pages) {
                if (p.name == this.setup.page) {
                    f = p
                    break
                }
            }

            if (f) {
                this.frame = f
            }
        },
    });

})(jQuery, Vue, Core);
