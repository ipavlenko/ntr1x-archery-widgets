var Widgets =
(function($, Vue, Core) {

    Widgets = {};

    Widgets.Palette = (function() {

        var map = {};
        var arr = [];

        var categories = function() { return arr; }
        var category = function(name, category) {

            if (name in map) {
                return map[name];
            } else {
                map[name] = category;
                arr.push(category);
            }

            return this;
        }

        return {
            categories: categories,
            category: category,
        };
    })();

    Widgets.Category = function(name, title) {

        var map = {};
        var arr = [];

        var groups = function() { return arr; }
        var group = function(name, group) {

            if (name in map) {
                return map[name];
            } else {
                map[name] = group;
                arr.push(group);
            }

            return this;
        }

        return Widgets.Palette.category(name, {
            title: title,
            groups: groups,
            group: group,
        });
    };

    Widgets.Group = function(category, name, title) {

        var map = {};
        var arr = [];

        var items = function() { return arr; }
        var item = function(name, item) {

            if (name in map) {
                return map[name];
            } else {
                map[name] = item;
                arr.push(item);
            }

            return this;
        }

        return category.group(name, {
            title: title,
            items: items,
            item: item,
        });
    };

    Widgets.Item = function(group, name, config) {

    };

    Widgets.Prop = function(name, title, type, tab, placeholder) {
        return {
            name: name,
            title: title,
            type: type,
            tab: tab,
            placeholder: placeholder,
        };
    }

    return Widgets;

})(jQuery, Vue, Core);

(function($, Vue, Core, Palette) {

    Palette.WidgetMixin = function(tag, title, tumbnail) {
        tag: tag,
        title: title,
        tumbnail: tumbnail,
        tabs: [
            { name: 'data', title: 'Data' },
            { name: 'appearance', title: 'Appearance' },
            { name: 'content', title: 'Content' },
        ],
        props: [
            Palette.prop('id', 'ID', 'string', 'data', 'Unique ID'),
        ]
    };

})(jQuery, Vue, Core, Palette);

(function($, Vue, Core, Widgets) {

    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.ButtonsGroup = Widgets.Group(Palette.FormsCategory, 'default-form-buttons', 'Buttons');
    Widgets.InputsGroup = Widgets.Group(Palette.FormsCategory, 'default-form-inputs', 'Inputs');

    var ButtonMixin = function(stereotype, title, thumbnail) {

        return {
            title: 'Button',
            tag: 'default-button',
            mixins: [ Palette.WidgetMixin('default-button', 'Button'), Palette.BoxMixin, Palette.SizeMixin ],
            thumbnail: thumbnail || 'src/button/button-default.png',
            categories: [ Palette.ButtonsCategory ],
            props: [
                Widgets.Prop('type', 'Type', 'string', 'data'),
                Widgets.Prop('stereotype', 'Stereotype', 'string', 'data'),
            ],
            params: {
                margin:     Widgets.Param('15px'),
                type:       Widgets.Param('button'),
                title:      Widgets.Param(title || 'Default'),
                stereotype: Widgets.Param(stereotype || 'default'),
            },
        };
    };

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-default', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-default.png'),
            ButtonMixin('default', 'Default'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-success', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-success.png'),
            ButtonMixin('success', 'Success'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-info', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-info.png'),
            ButtonMixin('info', 'Info'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-warning', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-warning.png'),
            ButtonMixin('warning', 'Warning'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-danger', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-danger.png'),
            ButtonMixin('danger', 'Danger'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-link', {
        mixins: [
            WidgetMixin('default-button', 'Button', 'src/button/button-link.png'),
            ButtonMixin('link', 'Link'),
        ],
    });

})(jQuery, Vue, Core, Widgets);

(function($, Vue, Core, Widgets) {

    Widgets.TextCategory = Widgets.Category('default-text', 'Text Elements');
    Widgets.HeadingsGroup = Widgets.Group(Palette.TextCategory, 'default-text-headings', 'Headings');
    Widgets.BlocksGroup = Widgets.Group(Palette.TextCategory, 'default-text-blocks', 'Blocks');

})(jQuery, Vue, Core, Widgets);

(function($, Vue, Core, Widgets) {

    Vue.component('default-button', {
        template: '#default-button',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core, Widgets);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwid2lkZ2V0cy93aWRnZXRzLmpzIiwid2lkZ2V0cy9mb3JtL2Zvcm0uanMiLCJ3aWRnZXRzL3RleHQvdGV4dC5qcyIsIndpZGdldHMvZm9ybS9idXR0b24vYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoid2lkZ2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXaWRnZXRzID1cclxuKGZ1bmN0aW9uKCQsIFZ1ZSwgQ29yZSkge1xyXG5cclxuICAgIFdpZGdldHMgPSB7fTtcclxuXHJcbiAgICBXaWRnZXRzLlBhbGV0dGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBtYXAgPSB7fTtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcblxyXG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcnI7IH1cclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSBmdW5jdGlvbihuYW1lLCBjYXRlZ29yeSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW25hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFwW25hbWVdID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgV2lkZ2V0cy5DYXRlZ29yeSA9IGZ1bmN0aW9uKG5hbWUsIHRpdGxlKSB7XHJcblxyXG4gICAgICAgIHZhciBtYXAgPSB7fTtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcblxyXG4gICAgICAgIHZhciBncm91cHMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFycjsgfVxyXG4gICAgICAgIHZhciBncm91cCA9IGZ1bmN0aW9uKG5hbWUsIGdyb3VwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXBbbmFtZV0gPSBncm91cDtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGdyb3VwKTtcclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBXaWRnZXRzLlBhbGV0dGUuY2F0ZWdvcnkobmFtZSwge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGdyb3VwczogZ3JvdXBzLFxyXG4gICAgICAgICAgICBncm91cDogZ3JvdXAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFdpZGdldHMuR3JvdXAgPSBmdW5jdGlvbihjYXRlZ29yeSwgbmFtZSwgdGl0bGUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hcCA9IHt9O1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcnI7IH1cclxuICAgICAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uKG5hbWUsIGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcFtuYW1lXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYXRlZ29yeS5ncm91cChuYW1lLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBXaWRnZXRzLkl0ZW0gPSBmdW5jdGlvbihncm91cCwgbmFtZSwgY29uZmlnKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBXaWRnZXRzLlByb3AgPSBmdW5jdGlvbihuYW1lLCB0aXRsZSwgdHlwZSwgdGFiLCBwbGFjZWhvbGRlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgdGFiOiB0YWIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBXaWRnZXRzO1xyXG5cclxufSkoalF1ZXJ5LCBWdWUsIENvcmUpO1xyXG4iLCIoZnVuY3Rpb24oJCwgVnVlLCBDb3JlLCBQYWxldHRlKSB7XHJcblxyXG4gICAgUGFsZXR0ZS5XaWRnZXRNaXhpbiA9IGZ1bmN0aW9uKHRhZywgdGl0bGUsIHR1bWJuYWlsKSB7XHJcbiAgICAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIHR1bWJuYWlsOiB0dW1ibmFpbCxcclxuICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2RhdGEnLCB0aXRsZTogJ0RhdGEnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FwcGVhcmFuY2UnLCB0aXRsZTogJ0FwcGVhcmFuY2UnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2NvbnRlbnQnLCB0aXRsZTogJ0NvbnRlbnQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICBQYWxldHRlLnByb3AoJ2lkJywgJ0lEJywgJ3N0cmluZycsICdkYXRhJywgJ1VuaXF1ZSBJRCcpLFxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSwgUGFsZXR0ZSk7XHJcbiIsIihmdW5jdGlvbigkLCBWdWUsIENvcmUsIFdpZGdldHMpIHtcclxuXHJcbiAgICBXaWRnZXRzLkZvcm1DYXRlZ29yeSA9IFdpZGdldHMuQ2F0ZWdvcnkoJ2RlZmF1bHQtZm9ybScsICdGb3JtIEVsZW1lbnRzJyk7XHJcbiAgICBXaWRnZXRzLkJ1dHRvbnNHcm91cCA9IFdpZGdldHMuR3JvdXAoUGFsZXR0ZS5Gb3Jtc0NhdGVnb3J5LCAnZGVmYXVsdC1mb3JtLWJ1dHRvbnMnLCAnQnV0dG9ucycpO1xyXG4gICAgV2lkZ2V0cy5JbnB1dHNHcm91cCA9IFdpZGdldHMuR3JvdXAoUGFsZXR0ZS5Gb3Jtc0NhdGVnb3J5LCAnZGVmYXVsdC1mb3JtLWlucHV0cycsICdJbnB1dHMnKTtcclxuXHJcbiAgICB2YXIgQnV0dG9uTWl4aW4gPSBmdW5jdGlvbihzdGVyZW90eXBlLCB0aXRsZSwgdGh1bWJuYWlsKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnV0dG9uJyxcclxuICAgICAgICAgICAgdGFnOiAnZGVmYXVsdC1idXR0b24nLFxyXG4gICAgICAgICAgICBtaXhpbnM6IFsgUGFsZXR0ZS5XaWRnZXRNaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJyksIFBhbGV0dGUuQm94TWl4aW4sIFBhbGV0dGUuU2l6ZU1peGluIF0sXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogdGh1bWJuYWlsIHx8ICdzcmMvYnV0dG9uL2J1dHRvbi1kZWZhdWx0LnBuZycsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsgUGFsZXR0ZS5CdXR0b25zQ2F0ZWdvcnkgXSxcclxuICAgICAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgICAgIFdpZGdldHMuUHJvcCgndHlwZScsICdUeXBlJywgJ3N0cmluZycsICdkYXRhJyksXHJcbiAgICAgICAgICAgICAgICBXaWRnZXRzLlByb3AoJ3N0ZXJlb3R5cGUnLCAnU3RlcmVvdHlwZScsICdzdHJpbmcnLCAnZGF0YScpLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogICAgIFdpZGdldHMuUGFyYW0oJzE1cHgnKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICAgICAgIFdpZGdldHMuUGFyYW0oJ2J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICAgICAgV2lkZ2V0cy5QYXJhbSh0aXRsZSB8fCAnRGVmYXVsdCcpLFxyXG4gICAgICAgICAgICAgICAgc3RlcmVvdHlwZTogV2lkZ2V0cy5QYXJhbShzdGVyZW90eXBlIHx8ICdkZWZhdWx0JyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgV2lkZ2V0cy5JdGVtKFdpZGdldHMuQnV0dG9uc0dyb3VwLCAnZGVmYXVsdC1idXR0b24tZGVmYXVsdCcsIHtcclxuICAgICAgICBtaXhpbnM6IFtcclxuICAgICAgICAgICAgV2lkZ2V0TWl4aW4oJ2RlZmF1bHQtYnV0dG9uJywgJ0J1dHRvbicsICdzcmMvYnV0dG9uL2J1dHRvbi1kZWZhdWx0LnBuZycpLFxyXG4gICAgICAgICAgICBCdXR0b25NaXhpbignZGVmYXVsdCcsICdEZWZhdWx0JyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLXN1Y2Nlc3MnLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldE1peGluKCdkZWZhdWx0LWJ1dHRvbicsICdCdXR0b24nLCAnc3JjL2J1dHRvbi9idXR0b24tc3VjY2Vzcy5wbmcnKSxcclxuICAgICAgICAgICAgQnV0dG9uTWl4aW4oJ3N1Y2Nlc3MnLCAnU3VjY2VzcycpLFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBXaWRnZXRzLkl0ZW0oV2lkZ2V0cy5CdXR0b25zR3JvdXAsICdkZWZhdWx0LWJ1dHRvbi1pbmZvJywge1xyXG4gICAgICAgIG1peGluczogW1xyXG4gICAgICAgICAgICBXaWRnZXRNaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJywgJ3NyYy9idXR0b24vYnV0dG9uLWluZm8ucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbk1peGluKCdpbmZvJywgJ0luZm8nKSxcclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgV2lkZ2V0cy5JdGVtKFdpZGdldHMuQnV0dG9uc0dyb3VwLCAnZGVmYXVsdC1idXR0b24td2FybmluZycsIHtcclxuICAgICAgICBtaXhpbnM6IFtcclxuICAgICAgICAgICAgV2lkZ2V0TWl4aW4oJ2RlZmF1bHQtYnV0dG9uJywgJ0J1dHRvbicsICdzcmMvYnV0dG9uL2J1dHRvbi13YXJuaW5nLnBuZycpLFxyXG4gICAgICAgICAgICBCdXR0b25NaXhpbignd2FybmluZycsICdXYXJuaW5nJyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLWRhbmdlcicsIHtcclxuICAgICAgICBtaXhpbnM6IFtcclxuICAgICAgICAgICAgV2lkZ2V0TWl4aW4oJ2RlZmF1bHQtYnV0dG9uJywgJ0J1dHRvbicsICdzcmMvYnV0dG9uL2J1dHRvbi1kYW5nZXIucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbk1peGluKCdkYW5nZXInLCAnRGFuZ2VyJyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLWxpbmsnLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldE1peGluKCdkZWZhdWx0LWJ1dHRvbicsICdCdXR0b24nLCAnc3JjL2J1dHRvbi9idXR0b24tbGluay5wbmcnKSxcclxuICAgICAgICAgICAgQnV0dG9uTWl4aW4oJ2xpbmsnLCAnTGluaycpLFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSwgVnVlLCBDb3JlLCBXaWRnZXRzKTtcclxuIiwiKGZ1bmN0aW9uKCQsIFZ1ZSwgQ29yZSwgV2lkZ2V0cykge1xyXG5cclxuICAgIFdpZGdldHMuVGV4dENhdGVnb3J5ID0gV2lkZ2V0cy5DYXRlZ29yeSgnZGVmYXVsdC10ZXh0JywgJ1RleHQgRWxlbWVudHMnKTtcclxuICAgIFdpZGdldHMuSGVhZGluZ3NHcm91cCA9IFdpZGdldHMuR3JvdXAoUGFsZXR0ZS5UZXh0Q2F0ZWdvcnksICdkZWZhdWx0LXRleHQtaGVhZGluZ3MnLCAnSGVhZGluZ3MnKTtcclxuICAgIFdpZGdldHMuQmxvY2tzR3JvdXAgPSBXaWRnZXRzLkdyb3VwKFBhbGV0dGUuVGV4dENhdGVnb3J5LCAnZGVmYXVsdC10ZXh0LWJsb2NrcycsICdCbG9ja3MnKTtcclxuXHJcbn0pKGpRdWVyeSwgVnVlLCBDb3JlLCBXaWRnZXRzKTtcclxuIiwiKGZ1bmN0aW9uKCQsIFZ1ZSwgQ29yZSwgV2lkZ2V0cykge1xyXG5cclxuICAgIFZ1ZS5jb21wb25lbnQoJ2RlZmF1bHQtYnV0dG9uJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnI2RlZmF1bHQtYnV0dG9uJyxcclxuICAgICAgICBtaXhpbnM6IFsgQ29yZS5XaWRnZXRNaXhpbiBdLFxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSwgV2lkZ2V0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
