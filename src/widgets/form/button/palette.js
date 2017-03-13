(function($, Vue, Core, Widgets) {

    Widgets.FormButtonWidget =
    Widgets.Widget(Widgets.ButtonsGroup, Widgets.create({
        name: 'default-form-button',
        tag: 'default-form-button',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'title', title: 'Title', type: 'string', tab: 'content' }
        ],
    }));

    Widgets.FormButtonWidgetFactory = function(title) {

        return Widgets.build(Widgets.FormButtonWidget, {
            title: { value: title },
            cssClass: { value: 'btn btn-primary' }
        });
    };

    Widgets.Item(Widgets.ButtonsGroup, {
        name: 'form-button',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/form-button.png',
        widget: () => Promise.resolve(Widgets.FormButtonWidgetFactory('Button')),
    });

    Widgets.FormDropdownWidget =
    Widgets.Widget(Widgets.ButtonsGroup, Widgets.create({
        name: 'default-form-dropdown',
        tag: 'default-form-dropdown',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            { name: 'title', title: 'Title', type: 'string', tab: 'content' },
            { name: 'icon', title: 'Icon', type: 'string', tab: 'appearance' },
            { name: 'title', title: 'Title', type: 'string', tab: 'content' },
            {
                name: 'items', type: 'multiple', title: 'Items', tab: 'data',
                tabs: [
                    { name: 'data', title: 'Data' },
                ],
                props: [
                    { name: 'title', title: 'Title', type: 'string', tab: 'data' },
                ]
            },
        ],
    }));

    Widgets.FormDropdownWidgetFactory = function(title) {

        return Widgets.build(Widgets.FormDropdownWidget, {
            title: { value: title },
            icon: { value: 'caret' },
            items: {
                value: [
                    { title: { value: 'One' } },
                    { title: { value: 'Two' } }
                ]
            },
            cssClass: { value: 'btn btn-primary' }
        });
    };

    Widgets.Item(Widgets.ButtonsGroup, {
        name: 'form-dropdown',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/form-dropdown.png',
        widget: () => Promise.resolve(Widgets.FormDropdownWidgetFactory('Dropdown')),
    });

    Widgets.FormGroupWidget =
    Widgets.Widget(Widgets.ButtonsGroup, Widgets.create({
        name: 'default-form-group',
        tag: 'default-form-group',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.FontMixin, Widgets.SizeMixin ],
        props: [
            {
                name: 'items', type: 'multiple', title: 'Items', tab: 'data',
                tabs: [
                    { name: 'data', title: 'Data' },
                    { name: 'appearance', title: 'Appearance' },
                ],
                props: [
                    { name: 'title', title: 'Title', type: 'string', tab: 'data' },
                    { name: 'cssClass', title: 'CSS Class', type: 'string', tab: 'appearance' },
                ]
            },
        ],
    }));

    Widgets.FormGroupWidgetFactory = function() {

        return Widgets.build(Widgets.FormGroupWidget, {
            items: {
                value: [
                    { title: { value: 'A' }, cssClass: { value: 'btn btn-primary active' } },
                    { title: { value: 'B' }, cssClass: { value: 'btn btn-primary active' } },
                    { title: { value: 'C' }, cssClass: { value: 'btn btn-primary' } }
                ]
            },
        });
    };

    Widgets.Item(Widgets.ButtonsGroup, {
        name: 'form-group',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/form-group.png',
        widget: () => Promise.resolve(Widgets.FormGroupWidgetFactory()),
    });

})(jQuery, Vue, Core, Widgets);
