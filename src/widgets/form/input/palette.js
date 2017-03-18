(function($, Vue, Core, Widgets) {

    Widgets.FormTextWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-text',
        tag: 'default-form-text',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'value', title: 'Value', type: 'string', tab: 'data' },
            { name: 'input', title: '@Input', type: 'action', tab: 'events' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.FormTextWidgetFactory = function(placeholder) {

        return Widgets.build(Widgets.FormTextWidget, {
            placeholder: { value: placeholder },
        });
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-text',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/form-text.png',
        widget: () => Promise.resolve(Widgets.FormTextWidgetFactory('Text')),
    });

    Widgets.FormPasswordWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-password',
        tag: 'default-form-password',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'value', title: 'Value', type: 'string', tab: 'data' },
            { name: 'input', title: '@Input', type: 'action', tab: 'events' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.FormPasswordWidgetFactory = function(placeholder) {

        return Widgets.build(Widgets.FormPasswordWidget, {
            placeholder: { value: placeholder },
        });
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-password',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/form-password.png',
        widget: () => Promise.resolve(Widgets.FormPasswordWidgetFactory('Password', 'password')),
    });

    Widgets.FormTextareaWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-textarea',
        tag: 'default-form-textarea',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'value', title: 'Value', type: 'string', tab: 'data' },
            { name: 'input', title: '@Input', type: 'action', tab: 'events' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.FormTextareaWidgetFactory = function(placeholder) {

        return Widgets.build(Widgets.FormTextareaWidget, {
            placeholder: { value: placeholder },
        });
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-textarea',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/form-textarea.png',
        widget: () => Promise.resolve(Widgets.FormTextareaWidgetFactory('Message')),
    });

    Widgets.FormCheckboxWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-checkbox',
        tag: 'default-form-checkbox',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'checked', title: 'Checked', type: 'string', tab: 'data' },
        ],
    }));

    Widgets.FormCheckboxWidgetFactory = function() {

        return Widgets.build(Widgets.FormCheckboxWidget, {});
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-checkbox',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/form-checkbox.png',
        widget: () => Promise.resolve(Widgets.FormCheckboxWidgetFactory()),
    });

    Widgets.FormRadioWidget =
    Widgets.Widget(Widgets.InputsGroup, Widgets.create({
        name: 'default-form-radio',
        tag: 'default-form-radio',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'checked', title: 'Checked', type: 'string', tab: 'data' },
        ],
    }));

    Widgets.FormRadioWidgetFactory = function() {

        return Widgets.build(Widgets.FormRadioWidget, {});
    };

    Widgets.Item(Widgets.InputsGroup, {
        name: 'form-radio',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/form-radio.png',
        widget: () => Promise.resolve(Widgets.FormRadioWidgetFactory()),
    });

    // Widgets.TextareaWidget =
    // Widgets.Widget(Widgets.InputsGroup, Widgets.create({
    //     name: 'default-input-textarea',
    //     tag: 'default-input-textarea',
    //     mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
    //     props: [
    //         { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
    //         { name: 'label', title: 'Label', type: 'string', tab: 'data' },
    //         { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'data' },
    //     ],
    // }));
    //
    // Widgets.TextareaWidgetFactory = function(label, placeholder) {
    //
    //     return Widgets.build(Widgets.TextareaWidget, {
    //         model: {
    //             value: { value: '' }
    //         },
    //         placeholder: { value: placeholder },
    //         inner: {
    //             value: {
    //                 margin: { value: '15px 15px' },
    //             }
    //         },
    //         label: { value: label },
    //     });
    // };
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
