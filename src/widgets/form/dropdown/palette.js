(function($, Vue, Core, Widgets) {

    var P = Widgets.Props;
    var T = Widgets.Tabs;

    Widgets.DropdownWidget =
    Widgets.Widget(Widgets.DropdownsGroup, Widgets.create({
        name: 'default-dropdown',
        tag: 'default-dropdown',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
            { name: 'empty', title: 'Empty', type: 'string', tab: 'data'},
            {
                name: 'items', title: 'Items', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    {
                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [ T.Data ],
                        props: [ P.Margin, P.Padding, P.Background,
                            { name: 'title', title: 'Title', type: 'string', tab: 'data', },
                            { name: 'value', title: 'Value', type: 'string', tab: 'data', },
                        ]
                    },
                    {
                        name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background, ],
                    }
                ]
            },
        ],
    }));

    Widgets.DropdownWidgetFactory = function(stereotype) {

        var w = Widgets.build(Widgets.DropdownWidget, {
            inner: {
                value:  {
                    margin: { value: '15px 15px' },
                }
            },
            stereotype: { value: stereotype },
            model: {
                value: { value: null }
            },
            empty: { value: 'Select' },
            items: {
                value: {
                    style: {
                        value: {
                            padding: { value: '12px 16px' },
                            margin: { value: '4px 2px' },
                        }
                    },
                    collection: {
                        value: [
                            { value: { value: "1" }, title: { value: "One" } },
                            { value: { value: "2" }, title: { value: "Two" }, },
                            { value: { value: "3" }, title: { value: "Three" }, },
                        ]
                    }
                }
            },
        });

        return w;
    }

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-default',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-default.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('default')),
    });

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-primary',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-primary.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('primary')),
    });

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-success',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-success.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('success')),
    });

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-info',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-info.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('info')),
    });

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-warning',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-warning.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('warning')),
    });

    Widgets.Item(Widgets.DropdownsGroup, {
        name: 'dropdown-danger',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/dropdown/dropdown-danger.png',
        widget: (context) => Promise.resolve(Widgets.DropdownWidgetFactory('danger')),
    });

})(jQuery, Vue, Core, Widgets);
