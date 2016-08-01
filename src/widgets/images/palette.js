(function($, Vue, Core, Widgets) {

    Widgets.ImagesGroup = Widgets.Group(Widgets.ImagesCategory, 'default-images-default', 'Images', true);

    Widgets.AbstractGroup = Widgets.Group(Widgets.ImagesCategory, 'default-images-abstract', 'Abstract');
    Widgets.CityGroup = Widgets.Group(Widgets.ImagesCategory, 'default-images-city', 'City');
    Widgets.NatureGroup = Widgets.Group(Widgets.ImagesCategory, 'default-images-nature', 'Nature');
    Widgets.SpaceGroup = Widgets.Group(Widgets.ImagesCategory, 'default-images-space', 'Space');

})(jQuery, Vue, Core, Widgets);
