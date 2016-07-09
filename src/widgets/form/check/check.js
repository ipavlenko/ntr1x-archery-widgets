(function($, Vue, Core) {

    Vue.component('default-check', {
        template: '#default-check',
        mixins: [ Core.WidgetMixin ],
        // attached: function() {
        //     // $('[data-toggle="buttons"] .btn', this.$el).button();
        //     console.log(this, $('[data-toggle="buttons"]', $(this.$el)));
        // }
    });

})(jQuery, Vue, Core);
