(function($, Vue, Core, Widgets) {

    Widgets.GalleryWidget =
    Widgets.Widget(Widgets.GalleryGroup, Widgets.create({
        name: 'default-gallery',
        tag: 'default-gallery',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'cols', title: 'Columns', type: 'string', tab: 'appearance' },
            { name: 'rows', title: 'Rows', type: 'string', tab: 'appearance' },
            // { name: 'dock', title: 'Dock', type: 'select', tab: 'appearance', options: [
            //     { value: '', text: 'Above' },
            //     { value: 'left', text: 'Top' },
            //     { value: 'right', text: 'Right' },
            //     { value: 'bottom', text: 'Bottom' },
            //     { value: 'left', text: 'Left' },
            // ]},
            { name: 'border', title: 'Border', type: 'object', tab: 'appearance',
                tabs: [
                    { name: 'appearance', title: 'Appearance' },
                ],
                props: [
                    { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' },
                    { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' },
                ]
            },
            {
                name: 'items', title: 'Items', type: 'object', tab: 'data',
                tabs: [
                    { name: 'data', title: 'Data' },
                    { name: 'appearance', title: 'Appearance' },
                ],
                props: [
                    { name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [
                            { name: 'appearance', title: 'Appearance' },
                            { name: 'content', title: 'Content' },
                        ],
                        props: [
                            { name: 'width', title: 'Width', type: 'string', tab: 'appearance' },
                            { name: 'height', title: 'Height', type: 'string', tab: 'appearance' },
                            { name: 'background', title: 'Background', type: 'string', tab: 'appearance' },
                            { name: 'content', title: 'Content', type: 'rich', tab: 'content' },
                        ]
                    },
                    { name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [
                            { name: 'appearance', title: 'Appearance' },
                        ],
                        props: [
                            { name: 'width', title: 'Width', type: 'string', tab: 'appearance' },
                            { name: 'height', title: 'Height', type: 'string', tab: 'appearance' },
                            { name: 'background', title: 'Background', type: 'string', tab: 'appearance' },
                        ],
                    }
                ]
            },
        ],
    }));

    Widgets.GalleryWidgetFactory = function(rows, cols, collection) {

        var w = Widgets.build(Widgets.GalleryWidget, {
            rows: { value: rows },
            cols: { value: cols },
            items: {
                value: {
                    style: {
                        value: {
                            background: { value: 'red' },
                            width: { value: '300px' },
                            height: { value: '100px' },
                        }
                    },
                    collection: {
                        value: [
                            { content: { value: '<h3>First Item</h3><p>You can change item data using settings editor</p>' } },
                            { content: { value: '<h3>Second Item</h3><p>You can change item data using settings editor</p>' } },
                            { content: { value: '<h3>Third Item</h3><p>You can change item data using settings editor</p>' } },
                            { content: { value: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>' } },
                            { content: { value: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>' } },
                            { content: { value: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>' } },
                        ]
                    }
                }
            },
        });

        // console.log(w);

        return w;
    }

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c1f',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c1f.png',
        widget: Widgets.GalleryWidgetFactory(1, 1, [
            { content: '<h3>First Item</h3><p>You can change item data using settings editor</p>' },
            { content: '<h3>Second Item</h3><p>You can change item data using settings editor</p>' },
            { content: '<h3>Third Item</h3><p>You can change item data using settings editor</p>' },
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
        name: 'gallery-r2c4f',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c4f.png',
        widget: Widgets.GalleryWidgetFactory(2, 4, [
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
        widget: Widgets.GalleryWidgetFactory(2, 4, [
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
        widget: Widgets.GalleryWidgetFactory(2, 3, [
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
        widget: Widgets.GalleryWidgetFactory(3, 2, [
            { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
            { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
            { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
            { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
            { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
            { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
        ]),
    });

})(jQuery, Vue, Core, Widgets);
