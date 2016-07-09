(function($, Vue, Core, Widgets) {

    Widgets.StackWidget = function(tag) {

        return Widgets.extend({
            tag: tag,
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin ],
        });
    };

    Widgets.Item(Widgets.StackGroup, 'stack-horisontal', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-horisontal.png',
        widget: Widgets.StackWidget('default-stack-horisontal'),
    });

    Widgets.Item(Widgets.StackGroup, 'stack-vertical', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-vertical.png',
        widget: Widgets.StackWidget('default-stack-vertical'),
    });

})(jQuery, Vue, Core, Widgets);
