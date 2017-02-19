(function($, Vue, Core, Widgets) {

    Widgets.MicrosCategory = Widgets.Category('default-micros', 'Micro Elements');
    Widgets.ContainerCategory = Widgets.Category('default-container', 'Container Elements');
    Widgets.CompositeCategory = Widgets.Category('default-composites', 'Composite Elements');
    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.TextCategory = Widgets.Category('default-text', 'Text Elements');
    Widgets.ImagesCategory = Widgets.Category('default-images', 'Free Images');

    Widgets.UtilCategory = Widgets.Category('default-util', 'Util Elements', true);

})(jQuery, Vue, Core, Widgets);
