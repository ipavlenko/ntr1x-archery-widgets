(function($, Vue, Core, Widgets) {

    Widgets.GalleryWidget =
    Widgets.Widget(Widgets.GalleryGroup, Widgets.extend({}, {
        name: 'default-gallery',
        tag: 'default-gallery',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'cols', title: 'Columns', type: 'string', tab: 'appearance' },
            { name: 'rows', title: 'Rows', type: 'string', tab: 'appearance' },
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
            rows:           Widgets.Param(1),
            cols:           Widgets.Param(1),
            margin:         Widgets.Param('15px 15px'),
            borderSpacing:  Widgets.Param('20px 20px'),
            itemHeight:     Widgets.Param('100px'),
            items:          Widgets.Param([]),
        },
    }));

    Widgets.GalleryWidgetFactory = function(rows, cols, items) {

        return Widgets.extend(Widgets.GalleryWidget, {
            params: {
                rows: Widgets.Param(rows),
                cols: Widgets.Param(cols),
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
    }

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c1f',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c1f.png',
        widget: Widgets.GalleryWidgetFactory(1, 1, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c1r',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c1r.png',
        widget: Widgets.GalleryWidgetFactory(1, 1, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c3f',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c3f.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c3b',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c3b.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r2c4e',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c4e.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r2c4b',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c4b.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r2c3f',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c3f.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r3c2r',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r3c2r.png',
        widget: Widgets.GalleryWidgetFactory(1, 3, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

})(jQuery, Vue, Core, Widgets);
