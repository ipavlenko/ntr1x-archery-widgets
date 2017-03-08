(function($, Vue, Core, Widgets) {

    Widgets.StackCanvasWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-canvas',
        tag: 'default-stack-canvas',
        mixins: [ Widgets.CanvasMixin, Widgets.SizeMixin ],
        widgets: [],
        designer: {
            unlocked: true
        },
        props: [
            { name: 'load', title: '@Load', type: 'action', tab: 'events' },
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
            { name: 'justify', title: 'Justify', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
            ] },
            { name: 'alignItems', title: 'Align Items', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
                { value: 'stretch', text: 'Stretch' },
            ] },
        ],
    }));

    Widgets.Item(Widgets.StackGroup, {
        hidden: true,
        name: 'stack-canvas',
        widget: (context) => Promise.resolve(Widgets.build(Widgets.StackCanvasWidget, {
            justify: { value: 'flex-start' },
            alignItems: { value: 'stretch' },
        })),
    });

    Widgets.StackHorizontalWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-horizontal',
        tag: 'default-stack-horizontal',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
            { name: 'justify', title: 'Justify', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
            ] },
            { name: 'alignItems', title: 'Align Items', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
                { value: 'stretch', text: 'Stretch' },
            ] },
        ],
    }));

    Widgets.StackHorizontalWidgetFactory = function(justify) {

        return Widgets.build(Widgets.StackHorizontalWidget, {
            flex: { value: '1 1 auto' },
            justify: { value: justify },
            alignItems: { value: 'stretch' },
        });
    }

    Widgets.StackVerticalWidget =
    Widgets.Widget(Widgets.StackGroup, Widgets.create({
        name: 'default-stack-vertical',
        tag: 'default-stack-vertical',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
            { name: 'justify', title: 'Justify', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
            ] },
            { name: 'alignItems', title: 'Align Items', type: 'select', tab: 'layout', options: [
                { value: '', text: '' },
                { value: 'flex-start', text: 'Start' },
                { value: 'flex-end', text: 'End' },
                { value: 'center', text: 'Center' },
                { value: 'stretch', text: 'Stretch' },
            ] },
        ],
    }));

    Widgets.StackVerticalWidgetFactory = function(justify) {

        return Widgets.build(Widgets.StackVerticalWidget, {
            flex: { value: '1 1 auto' },
            justify: { value: justify },
            alignItems: { value: 'stretch' },
        });
    }

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-horizontal',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-center.png',
        widget: (context) => Promise.resolve(Widgets.StackHorizontalWidgetFactory('center')),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-vertical',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-vertical.png',
        widget: (context) => Promise.resolve(Widgets.StackVerticalWidgetFactory('center')),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-horizontal-left',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-left.png',
        widget: (context) => Promise.resolve(Widgets.StackHorizontalWidgetFactory('flex-start')),
    });

    Widgets.Item(Widgets.StackGroup, {
        name: 'stack-horizontal-right',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-right.png',
        widget: (context) => Promise.resolve(Widgets.StackHorizontalWidgetFactory('flex-end')),
    });

})(jQuery, Vue, Core, Widgets);
