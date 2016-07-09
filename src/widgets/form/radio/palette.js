(function($, Vue, Core, Widgets) {

    Widgets.RadioWidget = function(stereotype, value, options) {

        return Widgets.extend({
            tag: 'default-radio',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
                {
                    name: 'items', type: 'multiple', title: 'Items', tab: 'data',
                    tabs: [
                        { name: 'data', title: 'Data' },
                    ],
                    props: [
                        { name: 'value', title: 'Value', type: 'string', tab: 'data' },
                        { name: 'label', title: 'Label', type: 'string', tab: 'data' },
                    ]
                },
            ],
            params: {
                model:      Widgets.Param({ value: value }),
                margin:     Widgets.Param('15px 15px'),
                stereotype: Widgets.Param(stereotype),
                items: {
                    value: options.map(function(option) {
                        return {
                            value: Widgets.Param(option.value),
                            label: Widgets.Param(option.label),
                        };
                    })
                }
            },
        });
    }

    Widgets.Item(Widgets.RadiosGroup, 'radio-default', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-default.png',
        widget: Widgets.RadioWidget('default', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

    Widgets.Item(Widgets.RadiosGroup, 'radio-primary', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-primary.png',
        widget: Widgets.RadioWidget('primary', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

    Widgets.Item(Widgets.RadiosGroup, 'radio-success', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-success.png',
        widget: Widgets.RadioWidget('success', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

    Widgets.Item(Widgets.RadiosGroup, 'radio-info', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-info.png',
        widget: Widgets.RadioWidget('info', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

    Widgets.Item(Widgets.RadiosGroup, 'radio-warning', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-warning.png',
        widget: Widgets.RadioWidget('warning', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

    Widgets.Item(Widgets.RadiosGroup, 'radio-danger', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-danger.png',
        widget: Widgets.RadioWidget('danger', '1', [
            { value: '1', label: 'On' },
            { value: '0', label: 'Off' },
        ]),
    });

})(jQuery, Vue, Core, Widgets);
