(function($, Vue, Core, Widgets) {

    Widgets.ImageWidget =
    Widgets.Widget(Widgets.ImagesGroup, Widgets.create({
        name: 'default-image',
        tag: 'default-image',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'src', title: 'Source', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.ImageWidgetFactory = function(url) {

        var w = Widgets.build(Widgets.ImageWidget, {
            // height: { value: '300px' },
            src: { value: url },
        });

        return w;
    }

    var images = [
        { group: Widgets.AbstractGroup, names: [ 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8' ] },
        { group: Widgets.CityGroup, names: [ 'c1', 'c2', 'c3', 'c4', 'c5', 'c6' ] },
        { group: Widgets.NatureGroup, names: [ 'n1', 'n2', 'n3', 'n4', 'n5', 'n6' ] },
        { group: Widgets.SpaceGroup, names: [ 's1', 's2', 's3', 's4', 's5', 's6' ] },
    ];

    for (let i = 0; i < images.length; i++) {

        var settings = images[i];

        for (let j = 0; j < settings.names.length; j++) {

            let name = settings.names[j];

            Widgets.Item(settings.group, {
                name: name,
                thumbnail: `/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/120x80/${name}.jpg`,
                widget: (context) => Promise.resolve(Widgets.ImageWidgetFactory(`/assets/vendor/ntr1x-archery-widgets/src/widgets/images/images/1920x1280/${name}.jpg`)),
            });
        }
    }

})(jQuery, Vue, Core, Widgets);
