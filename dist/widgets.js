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

(function($, Vue, Core, Widgets) {

    Widgets.WidgetItemMixin = function(tag, title, tumbnail) {
        tag: tag,
        title: title,
        tumbnail: tumbnail,
        tabs: [
            { name: 'data', title: 'Data' },
            { name: 'appearance', title: 'Appearance' },
            { name: 'content', title: 'Content' },
        ],
        props: [
            { name: 'id', title: 'ID', type: 'string', tab: 'data', placeholder: 'Unique ID' },
        ]
    };

})(jQuery, Vue, Core, Widgets);

(function($, Vue, Core, Widgets) {

    Widgets.FormCategory = Widgets.Category('default-form', 'Form Elements');
    Widgets.ButtonsGroup = Widgets.Group(Palette.FormsCategory, 'default-form-buttons', 'Buttons');
    Widgets.InputsGroup = Widgets.Group(Palette.FormsCategory, 'default-form-inputs', 'Inputs');

    Widgets.ButtonItemMixin = function(stereotype, title) {

        return {
            title: 'Button',
            tag: 'default-button',
            mixins: [ Widgets.BoxMixin, Widgets.SizeMixin ],
            props: [
                { name: 'type', title: 'Type', type: 'string', tab: 'data' },
                { name: 'stereotype', title: 'Stereotype', type: 'string', tab: 'data' },
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
            WidgetItemMixin('default-button', 'Button', 'src/button/button-default.png'),
            ButtonItemMixin('default', 'Default'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-success', {
        mixins: [
            WidgetItemMixin('default-button', 'Button', 'src/button/button-success.png'),
            ButtonItemMixin('success', 'Success'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-info', {
        mixins: [
            WidgetItemMixin('default-button', 'Button', 'src/button/button-info.png'),
            ButtonItemMixin('info', 'Info'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-warning', {
        mixins: [
            WidgetItemMixin('default-button', 'Button', 'src/button/button-warning.png'),
            ButtonItemMixin('warning', 'Warning'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-danger', {
        mixins: [
            WidgetItemMixin('default-button', 'Button', 'src/button/button-danger.png'),
            ButtonItemMixin('danger', 'Danger'),
        ],
    });

    Widgets.Item(Widgets.ButtonsGroup, 'default-button-link', {
        mixins: [
            WidgetItemMixin('default-button', 'Button', 'src/button/button-link.png'),
            ButtonItemMixin('link', 'Link'),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwid2lkZ2V0cy93aWRnZXRzLmpzIiwid2lkZ2V0cy9mb3JtL2Zvcm0uanMiLCJ3aWRnZXRzL3RleHQvdGV4dC5qcyIsIndpZGdldHMvZm9ybS9idXR0b24vYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ3aWRnZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFdpZGdldHMgPVxyXG4oZnVuY3Rpb24oJCwgVnVlLCBDb3JlKSB7XHJcblxyXG4gICAgV2lkZ2V0cyA9IHt9O1xyXG5cclxuICAgIFdpZGdldHMuUGFsZXR0ZSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hcCA9IHt9O1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFycjsgfVxyXG4gICAgICAgIHZhciBjYXRlZ29yeSA9IGZ1bmN0aW9uKG5hbWUsIGNhdGVnb3J5KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBbbmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXBbbmFtZV0gPSBjYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBXaWRnZXRzLkNhdGVnb3J5ID0gZnVuY3Rpb24obmFtZSwgdGl0bGUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hcCA9IHt9O1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJyOyB9XHJcbiAgICAgICAgdmFyIGdyb3VwID0gZnVuY3Rpb24obmFtZSwgZ3JvdXApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcFtuYW1lXSA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goZ3JvdXApO1xyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFdpZGdldHMuUGFsZXR0ZS5jYXRlZ29yeShuYW1lLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZ3JvdXBzOiBncm91cHMsXHJcbiAgICAgICAgICAgIGdyb3VwOiBncm91cCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgV2lkZ2V0cy5Hcm91cCA9IGZ1bmN0aW9uKGNhdGVnb3J5LCBuYW1lLCB0aXRsZSkge1xyXG5cclxuICAgICAgICB2YXIgbWFwID0ge307XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFycjsgfVxyXG4gICAgICAgIHZhciBpdGVtID0gZnVuY3Rpb24obmFtZSwgaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW25hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFwW25hbWVdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5Lmdyb3VwKG5hbWUsIHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFdpZGdldHMuSXRlbSA9IGZ1bmN0aW9uKGdyb3VwLCBuYW1lLCBjb25maWcpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFdpZGdldHMuUHJvcCA9IGZ1bmN0aW9uKG5hbWUsIHRpdGxlLCB0eXBlLCB0YWIsIHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICB0YWI6IHRhYixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFdpZGdldHM7XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSk7XHJcbiIsIihmdW5jdGlvbigkLCBWdWUsIENvcmUsIFdpZGdldHMpIHtcclxuXHJcbiAgICBXaWRnZXRzLldpZGdldEl0ZW1NaXhpbiA9IGZ1bmN0aW9uKHRhZywgdGl0bGUsIHR1bWJuYWlsKSB7XHJcbiAgICAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIHR1bWJuYWlsOiB0dW1ibmFpbCxcclxuICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2RhdGEnLCB0aXRsZTogJ0RhdGEnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FwcGVhcmFuY2UnLCB0aXRsZTogJ0FwcGVhcmFuY2UnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2NvbnRlbnQnLCB0aXRsZTogJ0NvbnRlbnQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICdpZCcsIHRpdGxlOiAnSUQnLCB0eXBlOiAnc3RyaW5nJywgdGFiOiAnZGF0YScsIHBsYWNlaG9sZGVyOiAnVW5pcXVlIElEJyB9LFxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSwgV2lkZ2V0cyk7XHJcbiIsIihmdW5jdGlvbigkLCBWdWUsIENvcmUsIFdpZGdldHMpIHtcclxuXHJcbiAgICBXaWRnZXRzLkZvcm1DYXRlZ29yeSA9IFdpZGdldHMuQ2F0ZWdvcnkoJ2RlZmF1bHQtZm9ybScsICdGb3JtIEVsZW1lbnRzJyk7XHJcbiAgICBXaWRnZXRzLkJ1dHRvbnNHcm91cCA9IFdpZGdldHMuR3JvdXAoUGFsZXR0ZS5Gb3Jtc0NhdGVnb3J5LCAnZGVmYXVsdC1mb3JtLWJ1dHRvbnMnLCAnQnV0dG9ucycpO1xyXG4gICAgV2lkZ2V0cy5JbnB1dHNHcm91cCA9IFdpZGdldHMuR3JvdXAoUGFsZXR0ZS5Gb3Jtc0NhdGVnb3J5LCAnZGVmYXVsdC1mb3JtLWlucHV0cycsICdJbnB1dHMnKTtcclxuXHJcbiAgICBXaWRnZXRzLkJ1dHRvbkl0ZW1NaXhpbiA9IGZ1bmN0aW9uKHN0ZXJlb3R5cGUsIHRpdGxlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnV0dG9uJyxcclxuICAgICAgICAgICAgdGFnOiAnZGVmYXVsdC1idXR0b24nLFxyXG4gICAgICAgICAgICBtaXhpbnM6IFsgV2lkZ2V0cy5Cb3hNaXhpbiwgV2lkZ2V0cy5TaXplTWl4aW4gXSxcclxuICAgICAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3R5cGUnLCB0aXRsZTogJ1R5cGUnLCB0eXBlOiAnc3RyaW5nJywgdGFiOiAnZGF0YScgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3N0ZXJlb3R5cGUnLCB0aXRsZTogJ1N0ZXJlb3R5cGUnLCB0eXBlOiAnc3RyaW5nJywgdGFiOiAnZGF0YScgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICAgICBXaWRnZXRzLlBhcmFtKCcxNXB4JyksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAgICAgICBXaWRnZXRzLlBhcmFtKCdidXR0b24nKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAgICAgIFdpZGdldHMuUGFyYW0odGl0bGUgfHwgJ0RlZmF1bHQnKSxcclxuICAgICAgICAgICAgICAgIHN0ZXJlb3R5cGU6IFdpZGdldHMuUGFyYW0oc3RlcmVvdHlwZSB8fCAnZGVmYXVsdCcpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLWRlZmF1bHQnLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldEl0ZW1NaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJywgJ3NyYy9idXR0b24vYnV0dG9uLWRlZmF1bHQucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbkl0ZW1NaXhpbignZGVmYXVsdCcsICdEZWZhdWx0JyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLXN1Y2Nlc3MnLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldEl0ZW1NaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJywgJ3NyYy9idXR0b24vYnV0dG9uLXN1Y2Nlc3MucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbkl0ZW1NaXhpbignc3VjY2VzcycsICdTdWNjZXNzJyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLWluZm8nLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldEl0ZW1NaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJywgJ3NyYy9idXR0b24vYnV0dG9uLWluZm8ucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbkl0ZW1NaXhpbignaW5mbycsICdJbmZvJyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLXdhcm5pbmcnLCB7XHJcbiAgICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgICAgIFdpZGdldEl0ZW1NaXhpbignZGVmYXVsdC1idXR0b24nLCAnQnV0dG9uJywgJ3NyYy9idXR0b24vYnV0dG9uLXdhcm5pbmcucG5nJyksXHJcbiAgICAgICAgICAgIEJ1dHRvbkl0ZW1NaXhpbignd2FybmluZycsICdXYXJuaW5nJyksXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIFdpZGdldHMuSXRlbShXaWRnZXRzLkJ1dHRvbnNHcm91cCwgJ2RlZmF1bHQtYnV0dG9uLWRhbmdlcicsIHtcclxuICAgICAgICBtaXhpbnM6IFtcclxuICAgICAgICAgICAgV2lkZ2V0SXRlbU1peGluKCdkZWZhdWx0LWJ1dHRvbicsICdCdXR0b24nLCAnc3JjL2J1dHRvbi9idXR0b24tZGFuZ2VyLnBuZycpLFxyXG4gICAgICAgICAgICBCdXR0b25JdGVtTWl4aW4oJ2RhbmdlcicsICdEYW5nZXInKSxcclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgV2lkZ2V0cy5JdGVtKFdpZGdldHMuQnV0dG9uc0dyb3VwLCAnZGVmYXVsdC1idXR0b24tbGluaycsIHtcclxuICAgICAgICBtaXhpbnM6IFtcclxuICAgICAgICAgICAgV2lkZ2V0SXRlbU1peGluKCdkZWZhdWx0LWJ1dHRvbicsICdCdXR0b24nLCAnc3JjL2J1dHRvbi9idXR0b24tbGluay5wbmcnKSxcclxuICAgICAgICAgICAgQnV0dG9uSXRlbU1peGluKCdsaW5rJywgJ0xpbmsnKSxcclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSwgV2lkZ2V0cyk7XHJcbiIsIihmdW5jdGlvbigkLCBWdWUsIENvcmUsIFdpZGdldHMpIHtcclxuXHJcbiAgICBXaWRnZXRzLlRleHRDYXRlZ29yeSA9IFdpZGdldHMuQ2F0ZWdvcnkoJ2RlZmF1bHQtdGV4dCcsICdUZXh0IEVsZW1lbnRzJyk7XHJcbiAgICBXaWRnZXRzLkhlYWRpbmdzR3JvdXAgPSBXaWRnZXRzLkdyb3VwKFBhbGV0dGUuVGV4dENhdGVnb3J5LCAnZGVmYXVsdC10ZXh0LWhlYWRpbmdzJywgJ0hlYWRpbmdzJyk7XHJcbiAgICBXaWRnZXRzLkJsb2Nrc0dyb3VwID0gV2lkZ2V0cy5Hcm91cChQYWxldHRlLlRleHRDYXRlZ29yeSwgJ2RlZmF1bHQtdGV4dC1ibG9ja3MnLCAnQmxvY2tzJyk7XHJcblxyXG59KShqUXVlcnksIFZ1ZSwgQ29yZSwgV2lkZ2V0cyk7XHJcbiIsIihmdW5jdGlvbigkLCBWdWUsIENvcmUsIFdpZGdldHMpIHtcclxuXHJcbiAgICBWdWUuY29tcG9uZW50KCdkZWZhdWx0LWJ1dHRvbicsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogJyNkZWZhdWx0LWJ1dHRvbicsXHJcbiAgICAgICAgbWl4aW5zOiBbIENvcmUuV2lkZ2V0TWl4aW4gXSxcclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5LCBWdWUsIENvcmUsIFdpZGdldHMpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
