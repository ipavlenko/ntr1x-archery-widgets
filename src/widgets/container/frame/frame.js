(function($, Vue, Core) {

    Vue.component('default-frame', {
        template: '#default-frame',
        mixins: [ Core.WidgetMixin ],
        data() {
            return {
                frame: null
            }
        },
        created() {
            for (let p of this.$store.getters.content.pages) {
                if (p.name == this.setup.page) {
                    this.frame = p
                    break
                }
            }
        }
    });

})(jQuery, Vue, Core);
