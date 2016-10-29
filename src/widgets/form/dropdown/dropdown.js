(function($, Vue, Core, Widgets) {

    Vue.component('default-dropdown', {
        template: '#default-dropdown',
        mixins: [ Core.WidgetMixin ],
        data: function() {
            return {
                selected: this.selected
            }
        },
        created: function() {
            this.selected = null;
            this.$watch('bindings', (b) => {
                if (b.items && b.items.collection) {
                    for (let item of b.items.collection) {
                        if (item.value == b.model.value) {
                            this.selected = item;
                            break;
                        }
                    }
                }
            }, { deep: true, immediate: true })
        },
        methods: {
            select: function(item) {
                this.$set('bindings.model.value', item.value);
            },
            isSelected: function(item) {
                return this.selected == null
                    ? item.value == null
                    : item.value == this.selected.value
                ;
            }
        }
    });

})(jQuery, Vue, Core, Widgets);
