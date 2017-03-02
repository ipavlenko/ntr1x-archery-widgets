(function($, Vue, Core, Widgets) {

    Widgets.StackGroup = Widgets.Group(Widgets.ContainerCategory, 'default-container-stack', 'Stack');
    Widgets.RepeaterGroup = Widgets.Group(Widgets.ContainerCategory, 'default-container-repeater', 'Repeater');
    Widgets.LayersGroup = Widgets.Group(Widgets.ContainerCategory, 'default-container-layers', 'Layers');
    // Widgets.EmbeddedGroup = Widgets.Group(Widgets.ContainerCategory, 'default-container-embedded', 'Embedded');

})(jQuery, Vue, Core, Widgets);
