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
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin ],
        widgets: [],
    }));

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-horizontal',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-horizontal.png',
        widget: Widgets.build(Widgets.StackHorizontalWidget),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-left',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-left.png',
        widget: Widgets.build(Widgets.StackHorizontalWidget),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-right',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-right.png',
        widget: Widgets.build(Widgets.StackHorizontalWidget),
    });

    Widgets.StackVerticalWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-vertical',
        tag: 'default-stack-vertical',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin ],
        widgets: [],
    }));

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-vertical',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-vertical.png',
        widget: Widgets.build(Widgets.StackVerticalWidget, {}),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-2columns',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-2columns.png',
        widget: Widgets.build(Widgets.StackVerticalWidget, {}),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-3columns',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-3columns.png',
        widget: Widgets.build(Widgets.StackVerticalWidget, {}),
    });

})(jQuery, Vue, Core, Widgets);
