(function($, Vue, Core, Widgets) {

    Widgets.FormSelectWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-select',
        tag: 'default-form-select',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'value', title: 'Value', type: 'string', tab: 'data' },
            { name: 'icon', title: 'Icon', type: 'string', tab: 'appearance' },
            { name: 'change', title: '@Change', type: 'action', tab: 'events' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'content' },
            {
                name: 'options', type: 'multiple', title: 'Options', tab: 'data',
                tabs: [
                    { name: 'data', title: 'Data' },
                ],
                props: [
                    { name: 'value', title: 'Value', type: 'string', tab: 'data' },
                    { name: 'title', title: 'Title', type: 'string', tab: 'data' },
                ]
            },
        ],
    }));

    Widgets.FormSelectWidgetFactory = function(placeholder) {

        return Widgets.build(Widgets.FormSelectWidget, {
            placeholder: { value: placeholder },
            icon: { value: 'glyphicon glyphicon-triangle-bottom' },
            options: {
                value: [
                    { value: { value: 1 }, title: { value: 'One' } },
                    { value: { value: 2 }, title: { value: 'Two' } }
                ]
            }
        });
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-select',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/select/select.png',
        widget: () => Promise.resolve(Widgets.FormSelectWidgetFactory('Select')),
    });

    //
    // Widgets.Item(Widgets.InputsGroup, {
    //     name: 'input-textarea',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/textarea.png',
    //     widget: (context) => Promise.resolve(Widgets.TextareaWidgetFactory('Textarea', 'Type message here')),
    // });
    //
    // Widgets.RadioInputWidget =
    // Widgets.Widget(Widgets.InputsGroup, Widgets.create({
    //     name: 'default-input-radio',
    //     tag: 'default-input-radio',
    //     mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
    //     props: [
    //         { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
    //         { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
    //         {
    //             name: 'items', type: 'multiple', title: 'Items', tab: 'data',
    //             tabs: [
    //                 { name: 'data', title: 'Data' },
    //             ],
    //             props: [
    //                 { name: 'value', title: 'Value', type: 'string', tab: 'data' },
    //                 { name: 'label', title: 'Label', type: 'string', tab: 'data' },
    //             ]
    //         },
    //     ],
    // }));
    //
    // Widgets.RadioInputWidgetFactory = function(value, options) {
    //
    //     return Widgets.build(Widgets.RadioInputWidget, {
    //         model: {
    //             value: { value: value }
    //         },
    //         inner: {
    //             value: {
    //                 margin: { value: '15px 15px' },
    //             }
    //         },
    //         items: {
    //             value: options.map(function(option) {
    //                 return {
    //                     value: Widgets.Param(option.value),
    //                     label: Widgets.Param(option.label),
    //                 };
    //             })
    //         }
    //     });
    // };
    //
    // Widgets.Item(Widgets.InputsGroup, {
    //     name: 'input-radio',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/radio.png',
    //     widget: (context) => Promise.resolve(Widgets.RadioInputWidgetFactory('1', [
    //         { value: '1', label: 'First' },
    //         { value: '2', label: 'Second' },
    //     ])),
    // });
    //
    // Widgets.CheckInputWidget =
    // Widgets.Widget(Widgets.InputsGroup, Widgets.create({
    //     name: 'default-input-checkbox',
    //     tag: 'default-input-checkbox',
    //     mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
    //     props: [
    //         { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
    //         { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
    //         {
    //             name: 'items', type: 'multiple', title: 'Items', tab: 'data',
    //             tabs: [
    //                 { name: 'data', title: 'Data' },
    //             ],
    //             props: [
    //                 { name: 'value', title: 'Value', type: 'string', tab: 'data' },
    //                 { name: 'label', title: 'Label', type: 'string', tab: 'data' },
    //             ]
    //         },
    //     ],
    // }));
    //
    // Widgets.CheckInputWidgetFactory = function(value, options) {
    //
    //     return Widgets.build(Widgets.CheckInputWidget, {
    //         model: {
    //             value: { value: value }
    //         },
    //         inner: {
    //             value: {
    //                 margin: { value: '15px 15px' },
    //             }
    //         },
    //         items: {
    //             value: options.map(function(option) {
    //                 return {
    //                     value: Widgets.Param(option.value),
    //                     label: Widgets.Param(option.label),
    //                 };
    //             })
    //         }
    //     });
    // };
    //
    // Widgets.Item(Widgets.InputsGroup, {
    //     name: 'input-check',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/checkbox.png',
    //     widget: (context) => Promise.resolve(Widgets.CheckInputWidgetFactory([ '1' ], [
    //         { value: '1', label: 'First' },
    //         { value: '2', label: 'Second' },
    //     ])),
    // });

})(jQuery, Vue, Core, Widgets);
