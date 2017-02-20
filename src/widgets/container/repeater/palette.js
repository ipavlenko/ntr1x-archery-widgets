(function($, Vue, Core, Widgets) {

    let T = Widgets.Tabs;

    Widgets.RepeaterHorizontalWidget =
    Widgets.Widget(Widgets.RepeaterGroup, Widgets.create({
        name: 'default-repeater-horizontal',
        tag: 'default-repeater-horizontal',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
            { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
            {
                name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                tabs: [ T.Data ],
                props: [
                    { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                ]
            },
        ],
    }));

    Widgets.RepeaterVerticalWidget =
    Widgets.Widget(Widgets.RepeaterGroup, Widgets.create({
        name: 'default-repeater-vertical',
        tag: 'default-repeater-vertical',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [],
        props: [
            { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
            { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
            {
                name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                tabs: [ T.Data ],
                props: [
                    { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                ]
            },
        ],
    }));

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-center.png',
        widget: Widgets.build(Widgets.RepeaterHorizontalWidget),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-vertical',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-vertical.png',
        widget: Widgets.build(Widgets.RepeaterVerticalWidget),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal-left',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-left.png',
        widget: Widgets.build(Widgets.RepeaterHorizontalWidget),
    });

    Widgets.Item(Widgets.RepeaterGroup, {
        name: 'repeater-horizontal-right',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/repeater/repeater-right.png',
        widget: Widgets.build(Widgets.RepeaterHorizontalWidget),
    });

})(jQuery, Vue, Core, Widgets);
