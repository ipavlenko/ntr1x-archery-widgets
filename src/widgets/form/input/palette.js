(function($, Vue, Core, Widgets) {

    Widgets.InputWidget = function(label, type) {

        return Widgets.extend({
            tag: 'default-input-text',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'model', title: 'Model', type: 'string', tab: 'data', 'variable': true },
                { name: 'type', title: 'Type', type: 'string', tab: 'data' },
                { name: 'label', title: 'Label', type: 'string', tab: 'data' },
                { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'data' },
            ],
            params: {
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
                { name: 'model', title: 'Model', type: 'string', tab: 'data', 'variable': true },
                { name: 'label', title: 'Label', type: 'string', tab: 'data' },
                { name: 'placeholder', title: 'Placeholder', type: 'string', tab: 'data' },
            ],
            params: {
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

    Widgets.RadioInputWidget = function(options) {

        return Widgets.extend({
            tag: 'default-radio-input',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            ],
            params: {
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
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/radio/radio-input.png',
        widget: Widgets.RadioInputWidget([
            { value: '1', label: 'First' },
            { value: '2', label: 'Second' },
        ]),
    });

    Widgets.CheckInputWidget = function(options) {

        return Widgets.extend({
            tag: 'default-check-input',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            ],
            params: {
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
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/check/check-input.png',
        widget: Widgets.CheckInputWidget([
            { value: '1', label: 'First' },
            { value: '2', label: 'Second' },
        ]),
    });

})(jQuery, Vue, Core, Widgets);
