(function($, Vue, Core, Widgets) {

    var P = Widgets.Props;
    var T = Widgets.Tabs;

    Widgets.GalleryWidget =
    Widgets.Widget(Widgets.GalleryGroup, Widgets.create({
        name: 'default-gallery',
        tag: 'default-gallery',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            P.Cols, P.Rows, P.Dock, P.Color, P.Align,
            {
                name: 'border', title: 'Border', type: 'object', tab: 'appearance',
                tabs: [ T.Appearance ],
                props: [ P.Spacing, P.Collapse ]
            },
            {
                name: 'items', title: 'Items', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    { name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                    tabs: [ T.Appearance, T.Content ],
                        props: [
                            { name: 'drawing', title: 'Drawing', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance ],
                                props: [
                                    P.Width, P.Height, P.Margin, P.Padding, P.Background,
                                ],
                            },
                            { name: 'description', title: 'Description', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance, T.Content ],
                                props: [
                                    P.Width, P.Height, P.Margin, P.Padding, P.Background,
                                    P.Color, P.Align, P.Content,
                                ]
                            },
                            P.Width, P.Height, P.Margin, P.Padding, P.Background,
                        ]
                    },
                    { name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [
                            { name: 'drawing', title: 'Drawing', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance ],
                                props: [
                                    P.Width, P.Height, P.Margin, P.Padding, P.Background,
                                ]
                            },
                            { name: 'description', title: 'Description', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance ],
                                props: [
                                    P.Width, P.Height, P.Margin, P.Padding, P.Background,
                                    P.Color, P.Align,
                                ]
                            },
                            P.Width, P.Height, P.Margin, P.Padding, P.Background,
                        ],
                    }
                ]
            },
        ],
    }));

    Widgets.GalleryWidgetFactory = function(defaults) {

        var w = Widgets.build(Widgets.GalleryWidget, {
            rows: { value: defaults.rows },
            cols: { value: defaults.cols },
            dock: { value: defaults.dock },
            items: {
                value: {
                    style: {
                        value: {
                            width: { value: defaults.width },
                            height: { value: defaults.height },
                            description: {
                                value: {
                                    padding: { value: defaults.padding },
                                }
                            }
                        }
                    },
                    collection: {
                        value: defaults.collection.map(function(item) {
                            return {
                                drawing: {
                                    value: {
                                        background: { value: item.background },
                                    }
                                },
                                description: {
                                    value: {
                                        content: { value: item.content },
                                        color: { value: item.color },
                                    }
                                },
                            };
                        })
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
        widget: Widgets.GalleryWidgetFactory({
            rows: 1, cols: 1, dock: 'above', width: '100%', height: '300px', padding: '30px', 'text-align': 'center', color: '#FFFFFF',
            collection: [
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">First Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#FF6466', color: '#FFFFFF' },
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">Second Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#605BE8', color: '#FFFFFF' },
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">Third Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#70FFBF', color: '#FFFFFF' },
            ]
        }),
    });

    Widgets.Item(Widgets.GalleryGroup, {
        name: 'gallery-r1c1r',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c1r.png',
        widget: Widgets.GalleryWidgetFactory({ rows: 1, cols: 1, dock: 'above', width: '100%', height: '300px', padding: '30px',
            collection: [
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">First Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#FF6466', color: '#FFFFFF' },
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">Second Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#605BE8', color: '#FFFFFF' },
                { content: `
                    <h3 style="text-align:center;"><span style="font-size:48px">Third Item</span></h3>
                    <p style="text-align:center;"><span style="font-size: 28px">You can change item data using settings editor</span></p>
                `, background: '#70FFBF', color: '#FFFFFF' },
            ]
        }),
    });

    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r1c3f',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c3f.png',
    //     widget: Widgets.GalleryWidgetFactory(1, 3, 'above', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });
    //
    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r1c3b',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r1c3b.png',
    //     widget: Widgets.GalleryWidgetFactory(1, 3, 'bottom', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });
    //
    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r2c4f',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c4f.png',
    //     widget: Widgets.GalleryWidgetFactory(2, 4, 'above', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });
    //
    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r2c4b',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c4b.png',
    //     widget: Widgets.GalleryWidgetFactory(2, 4, 'bottom', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });
    //
    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r2c3f',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r2c3f.png',
    //     widget: Widgets.GalleryWidgetFactory(2, 3, 'above', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });
    //
    // Widgets.Item(Widgets.GalleryGroup, {
    //     name: 'gallery-r3c2r',
    //     thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/gallery/gallery-r3c2r.png',
    //     widget: Widgets.GalleryWidgetFactory(3, 2, 'right', '100%', '400px', '30px', [
    //         { caption: '<h3>First Item</h3><p>You can change item data using settings editor</p>', background: '#FF3500' },
    //         { caption: '<h3>Second Item</h3><p>You can change item data using settings editor</p>', background: '#DC0055' },
    //         { caption: '<h3>Third Item</h3><p>You can change item data using settings editor</p>', background: '#BF0037' },
    //         { caption: '<h3>Fourth Item</h3><p>You can change item data using settings editor</p>', background: '#A52939' },
    //         { caption: '<h3>Fifth Item</h3><p>You can change item data using settings editor</p>', background: '#EE3B80' },
    //         { caption: '<h3>Sixth Item</h3><p>You can change item data using settings editor</p>', background: '#EE6B9E' },
    //     ]),
    // });

})(jQuery, Vue, Core, Widgets);
