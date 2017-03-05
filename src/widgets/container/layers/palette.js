(function($, Vue, Core, Widgets) {

    let T = Widgets.Tabs;
    var P = Widgets.Props

    Widgets.LayersItemWidget =
    Widgets.Widget(Widgets.LayersGroup, Widgets.create({
        name: 'default-layers-item',
        tag: 'default-layers-item',
        designer: {
            fill: true,
        },
        mixins: [ Widgets.WidgetMixin, Widgets.EffectsMixin ],
        widgets: [],
        props: [
            P.Background
        ]
    }));

    Widgets.LayersStackWidget =
    Widgets.Widget(Widgets.LayersGroup, Widgets.create({
        name: 'default-layers-stack',
        tag: 'default-layers-stack',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'red' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'orange' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'yellow' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'green' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'blue' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'darkblue' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'purple' },
                translate: { value: 'transform .3s ease' }
            }) },
        ],
        props: [
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.LayersStackWidgetFactory = () => {
        return Widgets.build(Widgets.LayersStackWidget, {
            height: { value: '200px' }
        });
    }

    Widgets.LayersRepeaterWidget =
    Widgets.Widget(Widgets.LayersGroup, Widgets.create({
        name: 'default-layers-repeater',
        tag: 'default-layers-repeater',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        widgets: [
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersItemWidget, {
                background: { value: 'pink' },
                translate: { value: 'transform .3s ease' }
            }) },
        ],
        props: [
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
            {
                name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                tabs: [ T.Data ],
                props: [
                    { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                ]
            },
        ],
    }));

    Widgets.LayersRepeaterWidgetFactory = () => {
        return Widgets.build(Widgets.LayersRepeaterWidget, {
            height: { value: '200px' }
        });
    }

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-item',
        hidden: true,
        widget: Widgets.build(Widgets.LayersItemWidget, {})
    });

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-repeater',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/layers/layers-repeater.png',
        widget: Widgets.LayersRepeaterWidgetFactory(),
    });

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-stack',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/layers/layers-stack.png',
        widget: Widgets.LayersStackWidgetFactory(),
    });

})(jQuery, Vue, Core, Widgets);
