(function($, Vue, Core, Widgets) {

    let T = Widgets.Tabs;

    Widgets.RepeaterHorizontalWidget =
    Widgets.Widget(Widgets.RepeaterGroup, Widgets.create({
        name: 'default-repeater-horizontal',
        tag: 'default-repeater-horizontal',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        designer: {
            fill: true
        },
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
            {
                name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                tabs: [ T.Data ],
                props: [
                    { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                ]
            },
        ],
    }));

    Widgets.RepeaterHorizontalWidgetFactory = function(justify) {

        return Widgets.build(Widgets.RepeaterHorizontalWidget, {
            flex: { value: '1 1 auto' },
            justify: { value: justify },
            alignItems: { value: 'stretch' },
        });
    }

    Widgets.RepeaterVerticalWidget =
    Widgets.Widget(Widgets.RepeaterGroup, Widgets.create({
        name: 'default-repeater-vertical',
        tag: 'default-repeater-vertical',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        designer: {
            fill: true
        },
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
            {
                name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                tabs: [ T.Data ],
                props: [
                    { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                ]
            },
        ],
    }));

    Widgets.RepeaterVerticalWidgetFactory = function(justify) {

        return Widgets.build(Widgets.RepeaterVerticalWidget, {
            flex: { value: '1 1 auto' },
            justify: { value: justify },
            alignItems: { value: 'stretch' },
        });
    }

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-center.png',
        widget: Widgets.RepeaterHorizontalWidgetFactory('center'),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-vertical',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-vertical.png',
        widget: Widgets.RepeaterVerticalWidgetFactory('center'),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal-left',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-left.png',
        widget: Widgets.RepeaterHorizontalWidgetFactory('flex-start'),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal-right',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-right.png',
        widget: Widgets.RepeaterHorizontalWidgetFactory('flex-end'),
    });

})(jQuery, Vue, Core, Widgets);
