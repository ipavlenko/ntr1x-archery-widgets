(function($, Vue, Core, Widgets) {

    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.ButtonsGroup = Widgets.Group(Widgets.FormCategory, 'default-form-buttons', 'Buttons');
    Widgets.InputsGroup = Widgets.Group(Widgets.FormCategory, 'default-form-inputs', 'Inputs');

    Widgets.ButtonItemMixin = function(stereotype, title) {

        return {
            title: 'Button',
            tag: 'default-button',
            mixins: [ Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'type', title: 'Type', type: 'string', tab: 'data' },
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            ],
            params: {
                margin:     Widgets.Param('15px'),
                type:       Widgets.Param('button'),
                title:      Widgets.Param(title || 'Default'),
                stereotype: Widgets.Param(stereotype || 'default'),
            },
        };
    };

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-default', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-default.png'),
            Widgets.ButtonItemMixin('default', 'Default'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-success', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-success.png'),
            Widgets.ButtonItemMixin('success', 'Success'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-info', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-info.png'),
            Widgets.ButtonItemMixin('info', 'Info'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-warning', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-warning.png'),
            Widgets.ButtonItemMixin('warning', 'Warning'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-danger', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-danger.png'),
            Widgets.ButtonItemMixin('danger', 'Danger'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-link', {
        mixins: [
            Widgets.WidgetItemMixin('default-button', 'Button', 'src/button/button-link.png'),
            Widgets.ButtonItemMixin('link', 'Link'),
        ],
    });

})(jQuery, Vue, Core, Widgets);
