(function($, Vue, Core, Widgets) {

    Widgets.StackCanvasWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-canvas',
        tag: 'default-stack-canvas',
        mixins: [ Widgets.CanvasMixin, Widgets.SizeMixin ],
        widgets: [],
    }));

    Widgets.Item(Widgets.StackGroup, {
        hidden: true,
        name: 'stack-canvas',
        widget: Widgets.build(Widgets.StackCanvasWidget),
    });

    Widgets.StackHorizontalWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-horizontal',
        tag: 'default-stack-horizontal',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
            { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-horizontal',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-horizontal.png',
        widget: Widgets.build(Widgets.StackHorizontalWidget),
    });

    Widgets.StackVerticalWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-vertical',
        tag: 'default-stack-vertical',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
            { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-vertical',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-vertical.png',
        widget: Widgets.build(Widgets.StackVerticalWidget, {}),
    });

})(jQuery, Vue, Core, Widgets);
