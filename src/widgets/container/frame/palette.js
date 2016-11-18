(function($, Vue, Core, Widgets) {

    Widgets.FrameWidget =
    Widgets.Widget(Widgets.EmbeddedGroup, Widgets.create({
        name: 'default-frame',
        tag: 'default-frame',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'page', title: 'Page', type: 'string', tab: 'data' },
        ],
    }));

    Widgets.FrameWidgetFactory = function() {

        return Widgets.build(Widgets.FrameWidget, {
        });
    }

    Widgets.Item(Widgets.EmbeddedGroup, {
        name: 'default-frame',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/frame/frame.png',
        widget: Widgets.FrameWidgetFactory(),
    });

})(jQuery, Vue, Core, Widgets);
