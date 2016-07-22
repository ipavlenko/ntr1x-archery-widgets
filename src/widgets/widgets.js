(function($, Vue, Core, Widgets) {

    Widgets.WidgetMixin = {
        tabs: [
            { name: 'data', title: 'Data' },
            { name: 'appearance', title: 'Appearance' },
            { name: 'content', title: 'Content' },
        ],
        props: [
            { name: 'id', title: 'ID', type: 'string', tab: 'data', placeholder: 'Unique ID' },
        ],
    };

    Widgets.BoxMixin = {
        props: [
            { name: 'inner', title: 'Inner Container', type: 'object', tab: 'appearance',
                tabs: [
                    { name: 'appearance', title: 'Appearance' },
                ],
                props: [
                    { name: 'border', title: 'Border', type: 'string', placeholder: '1px solid #000000', tab: 'appearance' },
                    { name: 'background', title: 'Background', type: 'string', placeholder: '#FFFFFF', tab: 'appearance' },
                ]
            },
            { name: 'outer', title: 'Outer Container', type: 'object', tab: 'appearance',
                tabs: [
                    { name: 'appearance', title: 'Appearance' },
                ],
                props: [
                    { name: 'margin', title: 'Margin', type: 'string', placeholder: '0px 0px', tab: 'appearance' },
                    { name: 'padding', title: 'Padding', type: 'string', placeholder: '0px 0px', tab: 'appearance' },
                    { name: 'border', title: 'Border', type: 'string', placeholder: '1px solid #000000', tab: 'appearance' },
                    { name: 'background', title: 'Background', type: 'string', placeholder: '#FFFFFF', tab: 'appearance' },
                ]
            },
        ],
    };

    Widgets.SizeMixin = {
        props: [
            { name: 'width', title: 'Width', type: 'string', placeholder: '100px', tab: 'appearance' },
            { name: 'height', title: 'Height', type: 'string', placeholder: '100px', tab: 'appearance' },
        ]
    }

})(jQuery, Vue, Core, Widgets);
