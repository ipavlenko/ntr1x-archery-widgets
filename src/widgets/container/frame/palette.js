(function($, Vue, Core, Widgets) {

    Widgets.FrameWidget =
    Widgets.Widget(Widgets.EmbeddedGroup, Widgets.create({
        name: 'default-frame',
        tag: 'default-frame',
        title: 'Frame',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        // setup: { page: 'offer' }
    }));

    Widgets.Item(Widgets.EmbeddedGroup, {
        name: 'default-frame',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/container/frame/frame.png',
        widget: ({ state, commit }) => new Promise((resolve, reject) => {

            let composites = (state.designer.content.pages || [])
                .filter(p => p.type == 'composite')
                .map(p => p.name)

            commit('modals/editor/show', {
                name: 'factory-dialog',
                context: {
                    title: 'Create Frame',
                    props: [
                        { name: 'page', title: 'Composite', type: 'select', options: composites }
                    ]
                },
                original: {
                    page: composites.length ? composites[0] : null,
                },
                events: {
                    submit: (current) => {
                        let w = Widgets.build(Widgets.FrameWidget, {
                            flex: { value: '1 1 auto' },
                            minHeight: { value: '200px' },
                            minWidth: { value: '200px' },
                        })
                        w = Object.assign(w, {
                            setup: { page: current.page },
                            overrides: {}
                        })
                        resolve(w)
                    },
                    reset: () => {
                        reject()
                    }
                }
            })
        }),
    });

})(jQuery, Vue, Core, Widgets);
