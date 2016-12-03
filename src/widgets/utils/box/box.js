(function($, Vue) {

    Vue.component('default-box', {
        template: '#default-box',
        props: {
            bindings: Object,
            'class': String,
        },
        data: function() {
            return {
                clazz: this['class']
            }
        }
    });

})(jQuery, Vue);
