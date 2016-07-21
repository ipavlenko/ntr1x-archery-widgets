(function($, Vue, Core, Widgets) {

    Widgets.StubWidget =
    Widgets.Widget(Widgets.UtilGroup, Widgets.create({
        name: 'default-stub',
        tag: 'default-stub',
        _action: 'ignore',
        props: [
            { name: 'content', type: 'string' }
        ],
    }));

    Widgets.StubWidgetFactory = function(content) {

        return Widgets.build(Widgets.StubWidget, {
            params: {
                content: { value: content },
            },
        });
    }

})(jQuery, Vue, Core, Widgets);
