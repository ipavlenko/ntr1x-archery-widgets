(function($, Vue, Core, Widgets) {

    Widgets.CompositeCategory = Widgets.Category('default-composites', 'Composite Elements');
    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.TextCategory = Widgets.Category('default-text', 'Text Elements');
    Widgets.ContainerCategory = Widgets.Category('default-container', 'Container Elements');
    Widgets.ImagesCategory = Widgets.Category('default-images', 'Free Images');

    Widgets.UtilCategory = Widgets.Category('default-util', 'Util Elements', true);

})(jQuery, Vue, Core, Widgets);
