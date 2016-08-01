(function($, Vue, Core, Widgets) {

    Widgets.ImageWidget =
    Widgets.Widget(Widgets.ImagesGroup, Widgets.create({
        name: 'default-button',
        tag: 'default-button',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'title', title: 'Title', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.ImageWidgetFactory = function(url) {

        var w = Widgets.build(Widgets.ButtonWidget, {
            inner: {
                value:  {
                    background: { value: `transparent url(${url}) no-repeat center center` },
                }
            },
        });

        return w;
    }

    for (var name in [ 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8' ]) {

        Widgets.Item(Widgets.AbstractGroup, {
            name: name,
            thumbnail: `/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/120x80/${name}.jpg`,
            widget: Widgets.ImageWidgetFactory(`/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/1920x1280/${name}.jpg`),
        });
    };

    for (var name in [ 'c1', 'c2', 'c3', 'c4', 'c5', 'c6' ]) {

        Widgets.Item(Widgets.CityGroup, {
            name: name,
            thumbnail: `/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/120x80/${name}.jpg`,
            widget: Widgets.ImageWidgetFactory(`/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/1920x1280/${name}.jpg`),
        });
    };

    for (var name in [ 'n1', 'n2', 'n3', 'n4', 'n5', 'n6' ]) {

        Widgets.Item(Widgets.NatureGroup, {
            name: name,
            thumbnail: `/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/120x80/${name}.jpg`,
            widget: Widgets.ImageWidgetFactory(`/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/1920x1280/${name}.jpg`),
        });
    };

    for (var name in [ 's1', 's2', 's3', 's4', 's5', 's6' ]) {

        Widgets.Item(Widgets.SpaceGroup, {
            name: name,
            thumbnail: `/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/120x80/${name}.jpg`,
            widget: Widgets.ImageWidgetFactory(`/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/1920x1280/${name}.jpg`),
        });
    };

})(jQuery, Vue, Core, Widgets);
