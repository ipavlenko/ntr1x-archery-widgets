(function($, Vue, Core, Widgets) {

    Widgets.MicrosMainGroup = Widgets.Group(Widgets.MicrosCategory, 'default-micros-main', 'Micros');

    Widgets.MicrosTextWidget =
    Widgets.Widget(Widgets.MicrosMainGroup, Widgets.create({
        name: 'default-micros-text',
        tag: 'default-micros-text',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin, Widgets.FontMixin ],
        props: [
            { name: 'content', title: 'Content', type: 'string', tab: 'content' },
            { name: 'stereotype', title: 'Stereotype', type: 'select', tab: 'content', options: [
                { value: 'div', text: 'DIV' },
                { value: 'a', text: 'A' },
                { value: 'h1', text: 'H1' },
                { value: 'h2', text: 'H2' },
                { value: 'h3', text: 'H3' },
                { value: 'h4', text: 'H4' },
                { value: 'h5', text: 'H5' },
                { value: 'h6', text: 'H6' },
            ] },
        ],
    }));

    Widgets.MicrosTextWidgetFactory = ({ content, stereotype, color, background, borderRadius, lineHeight, width, height, margin, padding, fontSize, align, minWidth }) => {

        return Widgets.build(Widgets.MicrosTextWidget, {
            content: { value: content },
            stereotype: { value: stereotype },
            color: { value: color },
            width: { value: width },
            height: { value: height },
            fontSize: { value: fontSize },
            lineHeight: { value: lineHeight },
            minWidth: { value: minWidth },
            align: { value: align },
            outer: {
                value: {
                    padding: { value: padding }
                }
            },
            inner: {
                value: {
                    padding: { value: '0em 0.4em' },
                    margin: { value: margin },
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
            outer: {
                value: {
                    padding: { value: padding }
                }
            },
            inner: {
                value: {
                    padding: { value: '0em 0.4em' },
                    margin: { value: margin },
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
            { name: 'content', title: 'Content', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.MicrosButtonWidgetFactory = ({ content, cssClass, color, background, borderRadius, lineHeight, height, margin, padding, fontSize, align, minWidth }) =>

        Widgets.build(Widgets.MicrosButtonWidget, {
            cssClass: { value: cssClass },
            content: { value: content },
            color: { value: color },
            height: { value: height },
            fontSize: { value: fontSize },
            lineHeight: { value: lineHeight },
            minWidth: { value: minWidth },
            align: { value: align },
            outer: {
                value: {
                    padding: { value: padding }
                }
            },
            inner: {
                value: {
                    padding: { value: '0em 0.4em' },
                    margin: { value: margin },
                    background: { value: background },
                    borderRadius: { value: borderRadius },
                }
            }
        })
    ;

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
            outer: {
                value: {
                    padding: { value: '0.2em' }
                }
            },
            inner: {
                value: {
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
        widget: (context) => Promise.resolve(Widgets.MicrosIconWidgetFactory('fa fa-twitter')),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-square',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-square.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({ content: '10', color: '#FFFFFF', background: '#3F51B5', padding: '0.3em 0.2em', height: '1.4em', lineHeight: '1.4em', align: 'center', minWidth: '1.4em', fontSize: '0.6em' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-badge',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-badge.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({ content: '23 OCT', color: '#FFFFFF', background: '#2196F3', padding: '0.3em 0.2em', height: '1.4em', lineHeight: '1.4em', borderRadius: '0.25em', fontSize: '0.6em' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-text',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-text.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({ content: 'Regular Text', lineHeight: '1em' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-rich',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-rich.png',
        widget: (context) => Promise.resolve(Widgets.MicrosRichWidgetFactory({ content: '<i>Rich</i> <b>Text</b>', lineHeight: '1em' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-button',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-button.png',
        widget: (context) => Promise.resolve(Widgets.MicrosButtonWidgetFactory({ content: 'Button', cssClass: 'btn btn-primary', padding: '0.2em 0.2em', height: '1.6em', lineHeight: '1.4em', borderRadius: '0.25em', fontSize: '0.8em' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-small',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-small.png',
        widget: (context) => Promise.resolve(Widgets.MicrosRichWidgetFactory({ content: '<div>USD</div><div>250</div>', lineHeight: '0.8em', fontSize: '0.8em', align: 'center' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-image',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-image.png',
        widget: (context) => Promise.resolve(Widgets.MicrosImageWidgetFactory('/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/grass.jpg')),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-heading',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-heading.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({ content: 'Heading', stereotype: 'h3' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-link',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-link.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({ content: 'Link', stereotype: 'a' })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-paragraph-left',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-paragraph-left.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nibh massa. Nullam eu sodales mauris. Quisque justo tortor, sodales tristique dui sed, porta facilisis neque.',
            align: 'left',
            width: '300px'
        })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-paragraph-right',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-paragraph-right.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nibh massa. Nullam eu sodales mauris. Quisque justo tortor, sodales tristique dui sed, porta facilisis neque.',
            align: 'right',
            width: '300px'
        })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-paragraph-center',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-paragraph-center.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nibh massa. Nullam eu sodales mauris. Quisque justo tortor, sodales tristique dui sed, porta facilisis neque.',
            align: 'center',
            width: '300px'
        })),
    });

    Widgets.Item(Widgets.MicrosMainGroup, {
        name: 'default-micros-paragraph-justify',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/micros/micros-paragraph-justify.png',
        widget: (context) => Promise.resolve(Widgets.MicrosTextWidgetFactory({
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nibh massa. Nullam eu sodales mauris. Quisque justo tortor, sodales tristique dui sed, porta facilisis neque.',
            align: 'justify',
            width: '300px'
        })),
    });

})(jQuery, Vue, Core, Widgets);
