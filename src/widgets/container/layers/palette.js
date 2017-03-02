(function($, Vue, Core, Widgets) {

    // let T = Widgets.Tabs;
    var P = Widgets.Props

    Widgets.LayersStackItemWidget =
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
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'red' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'orange' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'yellow' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'green' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'blue' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'darkblue' },
                translate: { value: 'transform .3s ease' }
            }) },
            { uuid: Core.UUID.random(), ...Widgets.build(Widgets.LayersStackItemWidget, {
                background: { value: 'purple' },
                translate: { value: 'transform .3s ease' }
            }) },
        ],
        props: [
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
            { name: 'activeLayer', title: 'Active Layer', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.LayersStackWidgetFactory = () => {
        return Widgets.build(Widgets.LayersStackWidget, {
            height: { value: '200px' }
        });
    }

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-item',
        hidden: true,
        widget: Widgets.build(Widgets.LayersStackItemWidget, {})
    });

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-repeater',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/layers/layers-repeater.png',
        widget: Widgets.LayersStackWidgetFactory(),
    });

    Widgets.Item(Widgets.LayersGroup, {
        name: 'layers-stack',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/layers/layers-stack.png',
        widget: Widgets.LayersStackWidgetFactory(),
    });

})(jQuery, Vue, Core, Widgets);
