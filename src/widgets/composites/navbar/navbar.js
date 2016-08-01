(function($, Vue, Core) {

    Vue.component('default-navbar', {
        template: '#default-navbar',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core);
