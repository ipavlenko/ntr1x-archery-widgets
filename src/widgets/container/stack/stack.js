Shell = window.Shell || {};

(function($, Vue, Core, Shell, undefined) {

    Vue.component('default-stack-canvas', {
        template: '#default-stack-canvas',
        mixins: [ Core.StackedMixin ],
        created: function() {
            this.children.push(
                Widgets.StubWidget(`
                    <div><small>Stub Item</small></div>
                    <div>Number 1</div>
                `),
                Widgets.StubWidget(`
                    <div><small>Stub Item</small></div>
                    <div>Number 2</div>
                `),
                Widgets.StubWidget(`
                    <div><small>Stub Item</small></div>
                    <div>Number 3</div>
                `)
            );
        },
    });

    Vue.component('default-stack-horisontal', {
        template: '#default-stack-horisontal',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

    Vue.component('default-stack-vertical', {
        template: '#default-stack-vertical',
        mixins: [ Core.WidgetMixin, Core.StackedMixin ],
    });

})(jQuery, Vue, Core, Shell);
