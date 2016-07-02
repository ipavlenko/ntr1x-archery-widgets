(function($, Vue, Core, Widgets) {

    Widgets.WidgetItemMixin = function(tag, title, tumbnail) {
        tag: tag,
        title: title,
        tumbnail: tumbnail,
        tabs: [
            { name: 'data', title: 'Data' },
            { name: 'appearance', title: 'Appearance' },
            { name: 'content', title: 'Content' },
        ],
        props: [
            { name: 'id', title: 'ID', type: 'string', tab: 'data', placeholder: 'Unique ID' },
        ]
    };

})(jQuery, Vue, Core, Widgets);
