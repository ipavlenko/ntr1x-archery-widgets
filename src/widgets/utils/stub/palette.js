(function($, Vue, Core, Widgets) {

    Widgets.StubWidget =
    Widgets.Widget(Widgets.UtilGroup, Widgets.extend({}, {
        name: 'default-stub',
        tag: 'default-stub',
        _action: 'ignore',
        props: [
            { name: 'content', type: 'string' }
        ],
        params: {
            content: { value: '' },
        }
    }));

    Widgets.StubWidgetFactory = function(content) {

        return Widgets.extend(Widgets.StubWidget, {
            params: {
                content:    Widgets.Param(content),
            },
        });
    }

})(jQuery, Vue, Core, Widgets);
