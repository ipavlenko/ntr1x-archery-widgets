(function($, Vue, Core, Widgets) {

    Widgets.MicrosMainGroup = Widgets.Group(Widgets.MicrosCategory, 'default-micros-main', 'Micros');

    Widgets.MicrosTextWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-text',
        tag: 'default-micros-text',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin, Widgets.FontMixin ],
        props: [
            { name: 'content', title: 'Content', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.MicrosTextWidgetFactory = ({ content, color, background, borderRadius, lineHeight, height, margin, padding, fontSize, align, minWidth }) => {

        return Widgets.build(Widgets.MicrosTextWidget, {
            content: { value: content },
            color: { value: color },
            height: { value: height },
            fontSize: { value: fontSize },
            lineHeight: { value: lineHeight },
            minWidth: { value: minWidth },
            align: { value: align },
            inner: {
                value: {
                    margin: { value: margin },
                    padding: { value: padding },
                    background: { value: background },
                    borderRadius: { value: borderRadius },
                }
            }
        });
    }

    Widgets.MicrosRichWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-rich',
        tag: 'default-micros-rich',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin, Widgets.FontMixin ],
        props: [
            { name: 'content', title: 'Content', type: 'rich', tab: 'content' },
        ],
    }));

    Widgets.MicrosRichWidgetFactory = ({ content, color, background, borderRadius, lineHeight, height, margin, padding, fontSize, align, minWidth }) => {

        return Widgets.build(Widgets.MicrosRichWidget, {
            content: { value: content },
            color: { value: color },
            height: { value: height },
            fontSize: { value: fontSize },
            lineHeight: { value: lineHeight },
            minWidth: { value: minWidth },
            align: { value: align },
            inner: {
                value: {
                    margin: { value: margin },
                    padding: { value: padding },
                    background: { value: background },
                    borderRadius: { value: borderRadius },
                }
            }
        });
    }

    Widgets.MicrosButtonWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-button',
        tag: 'default-micros-button',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin, Widgets.FontMixin, Widgets.EventsMixin ],
        props: [
            { name: 'title', title: 'Title', type: 'string', tab: 'content' },
            { name: 'type', title: 'Type', type: 'string', tab: 'data' },
            { name: 'cssClass', title: 'CSS Class', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.MicrosButtonWidgetFactory = function(title) {

        var w = Widgets.build(Widgets.MicrosButtonWidget, {
            type: { value: 'button' },
            title: { value: title },
        });

        return w;
    }

    Widgets.MicrosIconWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-icon',
        tag: 'default-micros-icon',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin, Widgets.FontMixin ],
        props: [
            { name: 'icon', title: 'Icon', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.MicrosIconWidgetFactory = (icon) =>
        Widgets.build(Widgets.MicrosIconWidget, {
            icon: { value: icon },
            color: { value: '#FFFFFF' },
            height: { value: '1.6em' },
            lineHeight: { value: '1.6em' },
            minWidth: { value: '1.6em' },
            align: { value: 'center' },
            inner: {
                value: {
                    margin: { value: '0.2em 0.2em' },
                    background: { value: '#009688' },
                    borderRadius: { value: '50%' },
                }
            }
        })
    ;

    Widgets.MicrosImageWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-image',
        tag: 'default-micros-image',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'src', title: 'Content', type: 'string', tab: 'content' },
            { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
        ],
    }));

    Widgets.MicrosImageWidgetFactory = function(src) {

        return Widgets.build(Widgets.MicrosImageWidget, {
            src: { value: src },
            width: { value: '2em' },
            height: { value: '2em' },
        });
    }

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-icon',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-icon.png',
        widget: Widgets.MicrosIconWidgetFactory('fa fa-twitter'),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-square',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-square.png',
        widget: Widgets.MicrosTextWidgetFactory({ content: '10', color: '#FFFFFF', background: '#3F51B5', padding: '0.4em 0.4em', lineHeight: '1.2em', align: 'center', minWidth: '2em', fontSize: '0.8em' }),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-badge',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-badge.png',
        widget: Widgets.MicrosTextWidgetFactory({ content: '23 OCT', color: '#FFFFFF', background: '#2196F3', margin: '0.2em 0em', height: '1.6em', lineHeight: '1.6em', padding: '0em 0.4em', borderRadius: '0.25em', fontSize: '0.8em' }),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-text',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-text.png',
        widget: Widgets.MicrosTextWidgetFactory({ content: 'Regular Text', padding: '0.4em 0.6em', lineHeight: '1.2em' }),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-rich',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-rich.png',
        widget: Widgets.MicrosRichWidgetFactory({ content: '<i>Rich</i> <b>Text</b>', padding: '0.4em 0.6em', lineHeight: '1.2em' }),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-button',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-button.png',
        widget: Widgets.MicrosButtonWidgetFactory('Button'),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-small',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-small.png',
        widget: Widgets.MicrosRichWidgetFactory({ content: '<div>USD</div><div>250</div>', lineHeight: '0.8em', fontSize: '0.8em', align: 'center', padding: '0.2em 0.6em' }),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-image',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-image.png',
        widget: Widgets.MicrosImageWidgetFactory('/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/grass.jpg'),
    });

})(jQuery, Vue, Core, Widgets);
