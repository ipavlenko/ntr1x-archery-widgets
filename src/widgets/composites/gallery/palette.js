(function($, Vue, Core, Widgets) {

    Widgets.GalleryWidget = function(cols, rows, items) {

        return Widgets.extend({
            tag: 'default-gallery',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            widgets: [],
            props: [
                { name: 'cols', title: 'Number of Columns', type: 'string', tab: 'appearance' },
                { name: 'rows', title: 'Number of Rows', type: 'string', tab: 'appearance' },
                { name: 'itemWith', title: 'Item Width', type: 'string', tab: 'appearance' },
                { name: 'itemHeight', title: 'Item Height', type: 'string', tab: 'appearance' },
                { name: 'borderSpacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
                { name: 'borderCollapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
                {
                    name: 'items', type: 'multiple', title: 'Items', tab: 'data',
                    tabs: [
                        { name: 'data', title: 'Data' },
                        { name: 'appearance', title: 'Appearance' },
                    ],
                    props: [
                        { name: 'caption', title: 'Caption', type: 'rich', tab: 'data' },
                        { name: 'background', title: 'Background', type: 'string', tab: 'data' },
                        { name: 'backgroundSize', title: 'Background Size', type: 'string', tab: 'data' },
                        { name: 'itemBackground', title: 'Background', type: 'string', tab: 'data' },
                        { name: 'itemBackgroundSize', title: 'Background Size', type: 'string', tab: 'data' },
                        { name: 'url', title: 'URL', type: 'string', tab: 'data' },
                    ]
                },
            ],
            params: {
                cols:           Widgets.Param(cols),
                rows:           Widgets.Param(rows),
                margin:         Widgets.Param('15px 15px'),
                borderSpacing:  Widgets.Param('20px 20px'),
                itemHeight:     Widgets.Param('100px'),
                items: {
                    value: items.map(function(item) {
                        return {
                            caption:        Widgets.Param(item.caption),
                            itemBackground: Widgets.Param(item.background),
                        };
                    })
                }
            },
        });
    };

    Widgets.Item(Widgets.GalleryGroup, 'stack-horisontal', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-horisontal.png',
        widget: Widgets.StackWidget('default-stack-horisontal'),
    });

    Widgets.Item(Widgets.GalleryGroup, 'stack-vertical', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/stack/stack-vertical.png',
        widget: Widgets.StackWidget('default-stack-vertical'),
    });

})(jQuery, Vue, Core, Widgets);
