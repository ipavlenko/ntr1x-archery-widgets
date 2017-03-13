(function($, Vue, Core, Widgets) {

    Widgets.Item(Widgets.ButtonsGroup, {
        name: 'form-button',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/form/button/button.png',
        widget: () => Promise.resolve(Widgets.MicrosButtonWidgetFactory({ content: 'Button', cssClass: 'btn btn-primary', padding: '0.2em 0.2em', height: '1.6em', lineHeight: '1.4em', borderRadius: '0.25em', fontSize: '0.8em' })),
    });

})(jQuery, Vue, Core, Widgets);
