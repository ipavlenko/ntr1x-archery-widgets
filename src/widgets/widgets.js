(function($, Vue, Core, Widgets) {

    var P = Widgets.Props = {};
    var T = Widgets.Tabs = {};

    T.Data = { name: 'data', title: 'Data' };
    T.Appearance = { name: 'appearance', title: 'Appearance' };
    T.Layout = { name: 'layout', title: 'Layout' };
    T.Content = { name: 'content', title: 'Content' };
    T.Events = { name: 'events', title: 'Events' };

    P.Id = { name: 'id', title: 'ID', type: 'string', tab: 'data', placeholder: 'Unique ID' };
    P.CSSClass = { name: 'cssClass', title: 'CSS Class', type: 'string', tab: 'appearance' };
    P.Flex = { name: 'flex', title: 'Flex', type: 'string', persistent: true, tab: 'layout' };

    P.Width = { name: 'width', title: 'Width', type: 'string', tab: 'layout' };
    P.Height = { name: 'height', title: 'Height', type: 'string', tab: 'layout' };
    P.MinWidth = { name: 'minWidth', title: 'Min Width', type: 'string', tab: 'layout' };
    P.MinHeight = { name: 'minHeight', title: 'Min Height', type: 'string', tab: 'layout' };
    P.Padding = { name: 'padding', title: 'Padding', type: 'string', tab: 'appearance' };
    P.Margin = { name: 'margin', title: 'Margin', type: 'string', tab: 'appearance' };
    P.Border = { name: 'border', title: 'Border', type: 'string', placeholder: '1px solid #000000', tab: 'appearance' };
    P.BorderRadius = { name: 'borderRadius', title: 'Border Radius', type: 'string', placeholder: '4px 4px', tab: 'appearance' };
    P.Background = { name: 'background', title: 'Background', type: 'string', tab: 'appearance' };

    P.Cols = { name: 'cols', title: 'Columns', type: 'string', tab: 'appearance' };
    P.Rows = { name: 'rows', title: 'Rows', type: 'string', tab: 'appearance' };
    P.Content = { name: 'content', title: 'Content', type: 'string', tab: 'content' };
    P.Title = { name: 'title', title: 'Title', type: 'string', tab: 'data' };
    P.Vlink = { name: 'vlink', title: 'Vlink', type: 'string', tab: 'data' };
    P.Href = { name: 'href', title: 'Href', type: 'string', tab: 'data' };

    P.Spacing = { name: 'spacing', title: 'Border Spacing', type: 'string', tab: 'appearance' };
    P.Collapse = { name: 'collapse', title: 'Border Collapse', type: 'string', tab: 'appearance' };

    P.Color = { name: 'color', title: 'Color', type: 'string', tab: 'appearance' };
    P.LineHeight = { name: 'lineHeight', title: 'Line Height', type: 'string', tab: 'appearance' };
    P.FontSize = { name: 'fontSize', title: 'Font Size', type: 'string', tab: 'appearance' },
    P.Align = { name: 'align', title: 'Text Align', type: 'select', tab: 'appearance', options: [
        { value: 'left', text: 'Left' },
        { value: 'right', text: 'Right' },
        { value: 'center', text: 'Center' },
        { value: 'justify', text: 'Justify' },
    ] };

    P.Dock = { name: 'dock', title: 'Dock', type: 'select', tab: 'appearance', options: [
        { value: 'above', text: 'Above' },
        { value: 'top', text: 'Top' },
        { value: 'right', text: 'Right' },
        { value: 'bottom', text: 'Bottom' },
        { value: 'left', text: 'Left' },
    ]};

    P.Click = { name: 'click', title: '@Click', type: 'action', tab: 'events' };

    Widgets.CanvasMixin = {
        tabs: [ T.Data, T.Appearance, T.Layout, T.Content, T.Events ],
        props: [ P.Background ],
    };

    Widgets.WidgetMixin = {
        tabs: [ T.Data, T.Appearance, T.Layout, T.Content, T.Events ],
        props: [ P.Id, P.CSSClass, P.Flex ],
    };

    Widgets.BoxMixin = {
        props: [
            { name: 'inner', title: 'Inner Container', type: 'object', tab: 'appearance',
                tabs: [ T.Appearance ],
                props: [ P.Margin, P.Padding, P.Border, P.BorderRadius, P.Background ]
            },
            { name: 'outer', title: 'Outer Container', type: 'object', tab: 'appearance',
                tabs: [ T.Appearance ],
                props: [ P.Margin, P.Padding, P.Border, P.BorderRadius, P.Background ]
            },
        ],
    };

    Widgets.SizeMixin = {
        props: [ P.Width, P.Height, P.MinWidth, P.MinHeight ],
    };

    Widgets.FontMixin = {
        props: [ P.Color, P.FontSize, P.LineHeight, P.Align ],
    };

    Widgets.EventsMixin = {
        props: [ P.Click ],
    };

})(jQuery, Vue, Core, Widgets);
