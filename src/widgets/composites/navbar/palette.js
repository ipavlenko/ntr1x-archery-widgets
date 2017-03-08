(function($, Vue, Core, Widgets) {

    Widgets.NavbarWidget =
    Widgets.Widget(Widgets.NavigationGroup, Widgets.create({
        name: 'default-navbar',
        tag: 'default-navbar',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
        ],
    }));

    Widgets.NavbarWidgetFactory = function(stereotype, content) {

        return Widgets.build(Widgets.NavbarWidget, {
            stereotype: { value: stereotype },
        });
    }

    Widgets.Item(Widgets.NavigationGroup, {
        name: 'navbar-default',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/navbar/navbar-default.png',
        widget: (context) => Promise.resolve(Widgets.NavbarWidgetFactory('default')),
    });

    Widgets.Item(Widgets.NavigationGroup, {
        name: 'navbar-inverse',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/navbar/navbar-inverse.png',
        widget: (context) => Promise.resolve(Widgets.NavbarWidgetFactory('inverse')),
    });

})(jQuery, Vue, Core, Widgets);
