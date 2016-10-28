(function($, Vue, Core, Widgets) {

    var P = Widgets.Props;
    var T = Widgets.Tabs;

    Widgets.TableWidget =
    Widgets.Widget(Widgets.TablesGroup, Widgets.create({
        name: 'default-table',
        tag: 'default-table',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            // { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
            {
                name: 'columns', title: 'Columns', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    {
                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [ T.Data ],
                        props: [ P.Margin, P.Padding, P.Background,
                            { name: 'name', title: 'Name', type: 'string', tab: 'data', },
                            { name: 'title', title: 'Title', type: 'string', tab: 'data', },
                        ]
                    },
                    {
                        name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background, ],
                    }
                ]
            },
            {
                name: 'rows', title: 'Rows', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    {
                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [ T.Data ],
                        props: [ P.Margin, P.Padding, P.Background,
                            { name: 'item', title: 'Item', type: 'asis', tab: 'data', },
                        ]
                    },
                    {
                        name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background, ],
                    }
                ]
            },
        ],
    }));

    Widgets.TableWidgetFactory = function(stereotype, content) {

        return Widgets.build(Widgets.TableWidget, {
            // stereotype: { value: stereotype },
        });
    }

    Widgets.Item(Widgets.TablesGroup, {
        name: 'table-default',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets/src/widgets/composites/table/table-default.png',
        widget: Widgets.build(Widgets.TableWidget, {
            outer: {
                value: {
                    background: { value: '#FFFFFF' },
                },
            },
            inner: {
                value: {
                    margin: { value: '0px auto' },
                },
            },
            columns: {
                value: {
                    style: {
                        value: {
                            padding: { value: '12px 16px' },
                            margin: { value: '4px 2px' },
                        }
                    },
                    collection: {
                        value: [
                            { name: { value: "item.index" }, title: { value: "#" } },
                            { name: { value: "item.name" }, title: { value: "Name" } },
                            { name: { value: "item.department" }, title: { value: "Department" } },
                            { name: { value: "item.sallary" }, title: { value: "Sallary" } },
                        ]
                    }
                }
            },
            rows: {
                value: {
                    style: {
                        value: {
                            padding: { value: '12px 16px' },
                            margin: { value: '4px 2px' },
                        }
                    },
                    collection: {
                        value: [
                            { item: { value: { index: 1, name: 'Иванов Иван', department: 'Проектный', sallary: '70' } } },
                            { item: { value: { index: 2, name: 'Иванов Иван', department: 'Проектный', sallary: '60' } } },
                            { item: { value: { index: 3, name: 'Иванов Иван', department: 'Проектный', sallary: '80' } } },
                            { item: { value: { index: 4, name: 'Иванов Иван', department: 'Проектный', sallary: '65' } } },
                        ]
                    }
                }
            },
        }),
    });

})(jQuery, Vue, Core, Widgets);
