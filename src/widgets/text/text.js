(function($, Vue, Core, Widgets) {

    Widgets.TextCategory = Widgets.Category('default-text', 'Text Elements');
    Widgets.HeadingsGroup = Widgets.Group(Widgets.TextCategory, 'default-text-headings', 'Headings');
    Widgets.BlocksGroup = Widgets.Group(Widgets.TextCategory, 'default-text-blocks', 'Blocks');

})(jQuery, Vue, Core, Widgets);
