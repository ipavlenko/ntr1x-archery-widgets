(function($, Vue, Core, Widgets) {

    Widgets.InputWidget = function(label, type) {

        return Widgets.extend({
            tag: 'default-input-text',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
                { name: 'type', title: 'Type', type: 'string', tab: 'content' },
                { name: 'label', title: 'Label', type: 'string', tab: 'content' },
                { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'content' },
            ],
            params: {
                model:      Widgets.Param({ value: '' }),
                margin:     Widgets.Param('15px 15px'),
                type:       Widgets.Param(type),
                label:      Widgets.Param(label),
            },
        });
    };

    Widgets.Item(Widgets.InputsGroup, 'input-text', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/text.png',
        widget: Widgets.InputWidget('Input', 'text'),
    });

    Widgets.TextareaWidget = function(label, placeholder) {

        return Widgets.extend({
            tag: 'default-input-textarea',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'model', title: 'Model', type: 'var', tab: 'data', variable: true },
                { name: 'label', title: 'Label', type: 'string', tab: 'data' },
                { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'data' },
            ],
            params: {
                model:          Widgets.Param({ value: '' }),
                margin:         Widgets.Param('15px 15px'),
                label:          Widgets.Param(label),
                placeholder:    Widgets.Param(placeholder),
            },
        });
    };

    Widgets.Item(Widgets.InputsGroup, 'input-textarea', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/textarea.png',
        widget: Widgets.TextareaWidget('Textarea', 'Type message here'),
    });

    Widgets.RadioInputWidget = function(value, options) {

        return Widgets.extend({
            tag: 'default-input-radio',
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
    };

    Widgets.Item(Widgets.InputsGroup, 'input-radio', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/radio.png',
        widget: Widgets.RadioInputWidget('1', [
            { value: '1', label: 'First' },
            { value: '2', label: 'Second' },
        ]),
    });

    Widgets.CheckInputWidget = function(value, options) {

        return Widgets.extend({
            tag: 'default-input-checkbox',
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
    };

    Widgets.Item(Widgets.InputsGroup, 'input-check', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/checkbox.png',
        widget: Widgets.CheckInputWidget([ '1' ], [
            { value: '1', label: 'First' },
            { value: '2', label: 'Second' },
        ]),
    });

})(jQuery, Vue, Core, Widgets);
