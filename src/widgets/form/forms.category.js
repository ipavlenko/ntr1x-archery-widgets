(function($, Vue, Core, Widgets) {

    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.ButtonsGroup = Widgets.Group(Widgets.FormCategory, 'default-form-buttons', 'Buttons');
    Widgets.InputsGroup = Widgets.Group(Widgets.FormCategory, 'default-form-inputs', 'Inputs');

    Widgets.ButtonWidget = function(title, stereotype) {

        return Widgets.extend({
            tag: 'default-button',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'title', title: 'Title', type: 'string', tab: 'content' },
                { name: 'type', title: 'Type', type: 'string', tab: 'data' },
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            ],
            params: {
                margin:     Widgets.Param('15px'),
                type:       Widgets.Param('button'),
                title:      Widgets.Param(title),
                stereotype: Widgets.Param(stereotype),
            },
        });
    };

    Widgets.Item(Widgets.ButtonsGroup, 'button-default', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-default.png',
        widget: Widgets.ButtonWidget('Default', 'default'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-primary', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-primary.png',
        widget: Widgets.ButtonWidget('Primary', 'primary'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-success', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-success.png',
        widget: Widgets.ButtonWidget('Success', 'success'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-info', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-info.png',
        widget: Widgets.ButtonWidget('Info', 'info'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-warning', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-warning.png',
        widget: Widgets.ButtonWidget('Warning', 'warning'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-danger', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-danger.png',
        widget: Widgets.ButtonWidget('Danger', 'danger'),
    });

    Widgets.Item(Widgets.ButtonsGroup, 'button-link', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button-link.png',
        widget: Widgets.ButtonWidget('Link', 'link'),
    });


    Widgets.Item(Widgets.InputsGroup, 'default-form-inputs', 'Inputs');

    Widgets.Item(Widgets.InputsGroup, 'input-text', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/text.png',
        widget: Widgets.ButtonWidget('Text', 'text'),
    });

    Widgets.Item(Widgets.InputsGroup, 'input-textarea', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/textarea.png',
        widget: Widgets.ButtonWidget('Textarea', 'textarea'),
    });

    Widgets.Item(Widgets.InputsGroup, 'input-radio', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/radio.png',
        widget: Widgets.ButtonWidget('Radio', 'radio'),
    });

    Widgets.Item(Widgets.InputsGroup, 'input-checkbox', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/input/checkbox.png',
        widget: Widgets.ButtonWidget('Checkbox', 'checkbox'),
    });

})(jQuery, Vue, Core, Widgets);
