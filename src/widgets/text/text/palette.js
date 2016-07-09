(function($, Vue, Core, Widgets) {

    Widgets.TextWidget = function(stereotype, content) {

        return Widgets.extend({
            tag: 'default-text',
            mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
                { name: 'content', title: 'Content', type: 'rich', tab: 'content' },
            ],
            params: {
                content:    Widgets.Param(content),
                margin:     Widgets.Param('15px 15px'),
                stereotype: Widgets.Param(stereotype),
            },
        });
    }

    Widgets.Item(Widgets.HeadingsGroup, 'text-h1', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h1.png',
        widget: Widgets.TextWidget('default', `
            <h1>Heading 1</h1>
        `),
    });

    Widgets.Item(Widgets.HeadingsGroup, 'text-h2', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h2.png',
        widget: Widgets.TextWidget('default', `
            <h2>Heading 2</h2>
        `),
    });

    Widgets.Item(Widgets.HeadingsGroup, 'text-h3', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h3.png',
        widget: Widgets.TextWidget('default', `
            <h3>Heading 3</h3>
        `),
    });

    Widgets.Item(Widgets.HeadingsGroup, 'text-h4', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h4.png',
        widget: Widgets.TextWidget('default', `
            <h4>Heading 4</h4>
        `),
    });

    Widgets.Item(Widgets.HeadingsGroup, 'text-h5', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h5.png',
        widget: Widgets.TextWidget('default', `
            <h5>Heading 5</h5>
        `),
    });

    Widgets.Item(Widgets.HeadingsGroup, 'text-h6', {
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/text/text/text-h6.png',
        widget: Widgets.TextWidget('default', `
            <h6>Heading 6</h6>
        `),
    });

})(jQuery, Vue, Core, Widgets);
