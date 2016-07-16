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

        var widget = function(path) {
            var segments = path.split('/');
            return $.extend(true, {}, this.category(segments[0]).group(segments[1]).item(segments[2]).widget, {
                _action: 'create',
                resource: {
                    params: [],
                    _action: 'create'
                },
            });
        }

        var placeholder = function(content) {
            return {
                tag: 'default-stub',
                _action: 'ignore',
                props: [
                    { name: 'content', type: 'string' }
                ],
                params: {
                    content: { value: content },
                }
            };
        }

        function generateId(prefix) {

            var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var ID_LENGTH = 8;

            var rtn = '';
            for (var i = 0; i < ID_LENGTH; i++) {
                rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
            }
            return prefix ? prefix + rtn : rtn;
        }

        return {
            categories: categories,
            category: category,
            widget: widget,
            placeholder: placeholder,
            generateId: generateId,
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

        Widgets.Palette.category(name, {
            name: name,
            title: title,
            groups: groups,
            group: group,
        });

        return Widgets.Palette.category(name);
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

        category.group(name, {
            name: name,
            title: title,
            items: items,
            item: item,
        });

        return category.group(name);
    };

    Widgets.extend = function(config) {

        var result = {
            tag: config.tag,
            tabs: [],
            props: [],
            params: {},
            widgets: config.widgets || undefined,
        };

        if (config.mixins) {

            for (var i = 0; i < config.mixins.length; i++) {
                var m = config.mixins[i];
                if ('tabs' in m) result.tabs = result.tabs.concat(m.tabs);
                if ('props' in m) result.props = result.props.concat(m.props);
                if ('params' in m) result.params = $.extend(true, result.params, m.params);
            }
        }

        if ('tabs' in config) result.tabs = result.tabs.concat(config.tabs);
        if ('props' in config) result.props = result.props.concat(config.props);
        if ('params' in config) result.params = $.extend(true, result.params, config.params);

        function initParams(props, params) {

            for (var i = 0; i < props.length; i++) {

                var prop = props[i];
                var param = params[prop.name] = params[prop.name] || { value: null }; // TODO Set a type-dependent initial value

                if (prop.props) {
                    initParams(prop, param);
                }
            }
        }

        initParams(result.props, result.params);

        return result;
    };

    Widgets.Item = function(group, name, config) {

        group.item(name, {
            name: name,
            thumbnail: config.thumbnail,
            widget: config.widget,
        });

        return group.item(name);
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

    Widgets.Param = function(value, binding, strategy) {
        return {
            value: value || undefined,
        }
    }

    Vue.service('palette', Widgets.Palette);

    return Widgets;

})(jQuery, Vue, Core);
