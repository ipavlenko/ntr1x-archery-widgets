(function($, Vue, Core, Widgets) {

    Widgets.StubWidget = function(content) {

        return Widgets.extend({
            tag: 'default-stub',
            props: [
                { name: 'content', title: 'Content', type: 'rich', tab: 'content' },
            ],
            params: {
                content:    Widgets.Param(content),
            },
        });
    }

})(jQuery, Vue, Core, Widgets);
