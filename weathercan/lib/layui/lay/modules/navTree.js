layui.define(["element", "jquery"], function (m) {
    var n = layui.element,
        $ = layui.$,
        moduleName = "navTree";
    var o = function () {
        this.config = {
            elem: '.layui-nav[lay-filter="sideNav"]',
            headerNavElem: '.layui-nav[lay-filter="headerNav"]',
            url: null,
            headers: null,
            method: "get",
            data: null,
            home: "page/home.html",
            target: "right",
            recursion: false,
            rootValue: null,
            parseData: function (a) {
                return {
                    "code": a.code,
                    "data": a.data,
                    "msg": a.msg
                }
            },
            response: {
                "statusCode": 0,
            },
            props: {
                "idKey": "id",
                "pidKey": "parentId",
                "childrenKey": "children",
                "titleKey": "title",
                "codeKey": "code",
                "hrefKey": "href",
                "targetKey": "target",
                "iconKey": "icon",
            },
            paddingLeft: "16",
            currentDataKey: "current_nav_data",
            currentNavKey: "current_nav",
            done: null
        }
    };
    o.prototype.render = function (a) {
        console.time("navTree_loaded_in");
        var b = this,
            config = b.config;
        b.config = $.extend(true, {}, config, a);
        b.config.elem = b.config.elem ? $(b.config.elem) : null;
        b.config.headerNavElem = b.config.headerNavElem ? $(b.config.headerNavElem) : null;
        if (b.config.data) {
            b.renderNavData(b.config.data)
        } else if (b.config.url) {
            b.pullData(b.config)
        }
        console.timeEnd("navTree_loaded_in")
    };
    o.prototype.reload = function (a) {
        var b = this,
            config = b.config;
        if (Array.isArray(config.data)) {
            b.config.data = undefined
        }
        if (config.elem) {
            config.elem.empty().off()
        }
        if (config.headerNavElem) {
            config.headerNavElem.empty().off()
        }
        return b.render(a)
    };
    o.prototype.pullData = function (d) {
        var e = this,
            config = e.config,
            data;
        var f = {
            exception: '<span class="layui-nav-tips"><i class="layui-icon layui-icon-tips"></i> 导航菜单数据接口请求异常！</span>',
            fail: '<span class="layui-nav-tips">网络响应超时或接口请求异常，您可以尝试<a href="javascript:window.location.reload();">重新加载</a>页面。</span>'
        };
        if (config.currentDataKey) {
            var g = window.localStorage.getItem(config.currentDataKey);
            if (g) {
                try {
                    data = JSON.parse(g)
                } catch (err) {
                    data = null
                }
            }
        }
        if (data && data.length > 0) {
            if (d.recursion == true) {
                try {
                    var h = e.getTreeNodes(data, d.rootValue, d.props);
                    e.renderNavData(h);
                    e.config.data = h
                } catch (err) {
                    config.elem.html(f.exception)
                }
            } else {
                e.renderNavData(data);
                e.config.data = data
            }
        } else {
            $.ajax({
                method: d.method || 'get',
                timeout: 30000,
                url: d.url,
                crossDomain: true,
                headers: d.headers,
                contentType: "application/json;charset=utf-8",
                dataType: 'json',
                success: function (a) {
                    if (d.parseData && typeof (d.parseData) === "function") {
                        a = config.parseData(a)
                    }
                    var b = d.response.statusCode || 0;
                    if (a.code === b && a.data) {
                        data = a.data;
                        if (d.recursion == true) {
                            try {
                                var c = e.getTreeNodes(data, d.rootValue, d.props);
                                e.renderNavData(c);
                                e.config.data = c;
                                if (config.currentDataKey) {
                                    window.localStorage.setItem(config.currentDataKey, JSON.stringify(c))
                                }
                            } catch (err) {
                                config.elem.html(f.exception)
                            }
                        } else {
                            e.renderNavData(data);
                            e.config.data = data;
                            if (config.currentDataKey) {
                                window.localStorage.setItem(config.currentDataKey, JSON.stringify(data))
                            }
                        }
                    } else {
                        config.elem.html(f.exception)
                    }
                },
                error: function (a, b, c) {
                    config.elem.html(f.fail)
                }
            })
        }
    };
    o.prototype.getTreeNodes = function (a, b, c) {
        var d = this;
        b = b || "";
        var e = {
            idKey: "id",
            pidKey: "parentId",
            childrenKey: "children",
            level: 0
        };
        $.extend(true, e, {
            idKey: c.idKey,
            pidKey: c.pidKey,
            childrenKey: c.childrenKey,
            level: c.level
        });
        var f = [],
            children = [],
            item, level = e.level || 0;
        level++;
        for (var i = 0; i < a.length; i++) {
            item = a[i] || {};
            var g = item[e.idKey] || "",
                itemPid = item[e.pidKey] || "";
            if (itemPid === b) {
                item.level = level;
                e.level = level;
                f.push(item);
                children = d.getTreeNodes(a, g, e);
                if (children && children.length > 0) {
                    item[e.childrenKey] = children
                }
            }
        }
        return f
    };
    o.prototype.renderNavData = function (b) {
        var c = this,
            config = c.config;
        var d;
        if (typeof (b) == "string") {
            d = JSON.parse(b)
        } else if (b.constructor === Array) {
            d = b
        }
        var e = {
            idKey: "id",
            pidKey: "parentId",
            childrenKey: "children",
            titleKey: "title",
            codeKey: "code",
            hrefKey: "href",
            targetKey: "target",
            iconKey: "icon"
        };
        e = $.extend(true, {}, e, config.props);
        if (config.recursion == true) {
            d = d.filter(function (a) {
                return (!a[e.pidKey] || a[e.pidKey] === (config.rootValue || 0))
            })
        }
        var f = [],
            headerHtml = [],
            item;
        for (var i in d) {
            if (d.hasOwnProperty(i)) {
                item = d[i] || {};
                var g = item[e.idKey],
                    itemCode = item[e.codeKey],
                    itemTitle = item[e.titleKey],
                    itemHref = item[e.hrefKey],
                    itemIcon = item[e.iconKey],
                    children = item[e.childrenKey];
                if (config.headerNavElem) {
                    headerHtml.push('<li class="layui-nav-item" data-code="');
                    headerHtml.push(itemCode || g);
                    headerHtml.push('"><a data-code="');
                    headerHtml.push(itemCode || g);
                    headerHtml.push('" title="');
                    headerHtml.push(itemTitle);
                    headerHtml.push('" href="javascript:void(0);">');
                    if (itemIcon) {
                        headerHtml.push(c.renderNavIcon(itemIcon))
                    }
                    headerHtml.push('<cite>');
                    headerHtml.push(itemTitle);
                    headerHtml.push('</cite></a></li>')
                }
                f.push('<li class="layui-nav-item" data-code="');
                f.push(itemCode || g);
                f.push('"><a data-code="');
                f.push(itemCode || g);
                f.push('" title="');
                f.push(itemTitle);
                f.push('" href="');
                if (children && children.length > 0) {
                    f.push('javascript:void(0);">');
                    if (itemIcon) {
                        f.push(c.renderNavIcon(itemIcon))
                    }
                    f.push('<cite>');
                    f.push(itemTitle);
                    f.push('</cite></a>');
                    f.push(c.navRecursion(children, e))
                } else {
                    if (itemHref) {
                        f.push(itemHref);
                        f.push('" class="navHyperLink" target="');
                        f.push(item[e.targetKey] || config.target)
                    } else {
                        f.push('javascript:void(0);')
                    }
                    if (itemIcon) {
                        f.push(c.renderNavIcon(itemIcon))
                    }
                    f.push('<cite>');
                    f.push(itemTitle);
                    f.push('</cite></a>')
                }
                f.push('</li>')
            }
        }
        config.elem.html(f.join("")).removeClass("mutex");
        if (config.headerNavElem) {
            config.headerNavElem.html(headerHtml.join(""));
            config.elem.addClass("mutex")
        }
        n.render('nav');
        c.init();
        c.navLink("", true);
        typeof config.done === 'function' && config.done(b)
    };
    o.prototype.navRecursion = function (a, b) {
        var c = this,
            config = c.config;
        var d, html = ['<dl class="layui-nav-child">'];
        var e = b.level || 0;
        e++;
        for (var i in a) {
            if (a.hasOwnProperty(i)) {
                d = a[i] || {};
                var f = d[b.idKey],
                    itemCode = d[b.codeKey],
                    itemTitle = d[b.titleKey],
                    itemHref = d[b.hrefKey],
                    itemIcon = d[b.iconKey],
                    descendant = d[b.childrenKey];
                html.push('<dd class="layui-nav-child-item"><a data-code="');
                html.push(itemCode || f);
                html.push('" title="');
                html.push(itemTitle);
                html.push('" href="');
                if (itemHref) {
                    html.push(itemHref);
                    html.push('" class="navHyperLink" target="');
                    html.push(d[b.targetKey] || config.target)
                } else {
                    html.push('javascript:void(0);')
                }
                html.push('" style="padding-left:');
                html.push((1 + e) * (config.paddingLeft || 16) + "px");
                html.push('">');
                if (itemIcon) {
                    html.push(c.renderNavIcon(itemIcon))
                }
                html.push('<cite>');
                html.push(itemTitle);
                html.push('</cite></a>');
                if (descendant && descendant.length > 0) {
                    b.level = e;
                    html.push(c.navRecursion(descendant, b));
                    b.level = 0
                }
                html.push('</dd>')
            }
        }
        html.push('</dl>');
        return html.join("")
    };
    o.prototype.renderNavIcon = function (a) {
        var b = [];
        if (a) {
            if (a.indexOf("fa-") > -1) {
                b.push('<i class="fa fa-fw ')
            } else {
                b.push('<i class="layui-icon ')
            }
            b.push(a);
            b.push('"></i>')
        }
        return b.join("")
    };
    o.prototype.init = function () {
        var k = this,
            config = k.config;
        var l = config.headerNavElem,
            sideMenu = config.elem;
        if (l) {
            l.children("li.layui-nav-item").each(function (i) {
                var c = $(this),
                    hyperLink = c.children("a");
                hyperLink.on("click", function () {
                    var a = hyperLink.attr("data-code") || "";
                    var b = sideMenu.children("li[data-code='" + a + "']");
                    b.siblings().removeClass("layui-nav-itemed active");
                    b.addClass("layui-nav-itemed active");
                    if (b.find(".layui-nav-itemed").length === 0) {
                        b.children(".layui-nav-item:eq(0)").addClass("layui-nav-itemed")
                    }
                })
            })
        }
        sideMenu.find("a").each(function (i) {
            var j = $(this);
            j.on("click", function () {
                var c = j.data("code") || "",
                    target = j.attr("target") || "";
                var d = j.parent();
                if (d.is("li.layui-nav-item")) {
                    d.siblings().removeClass("active");
                    d.addClass("active");
                    var e = d.data("code");
                    if (l) {
                        var f = l.children("li[data-code='" + e + "']");
                        f.siblings().removeClass("layui-this");
                        f.addClass("layui-this")
                    }
                }
                if (target = config.target && j.hasClass("navHyperLink")) {
                    var g = j.parents(".layui-nav-item,.layui-nav-child-item");
                    var h = $.map(g, function (a, b) {
                        return $(a).children("a").attr("title")
                    });
                    var i = {
                        code: c,
                        href: j.attr("href"),
                        path: h.reverse().join(",")
                    };
                    window.localStorage.setItem(config.currentNavKey, JSON.stringify(i))
                }
            })
        })
    };
    o.prototype.navLink = function (e, f) {
        var g = this,
            config = g.config,
            navObj;
        if (!e && config.currentNavKey) {
            var h = window.localStorage.getItem(config.currentNavKey);
            if (h) {
                var i = JSON.parse(h) || {
                    code: "",
                    href: ""
                };
                e = i.code || i.href
            }
        }
        if (e) {
            navObj = config.elem.find('a[data-code="' + e + '"]');
            if (!navObj || navObj.length === 0) {
                navObj = config.elem.find('a[href="' + e + '"]')
            }
        } else {
            navObj = config.elem.find('a[href="' + config.home + '"]')
        }
        if (!navObj || navObj.length === 0) {
            return
        }
        var j = navObj.parents(".layui-nav-item,.layui-nav-child-item");
        $.each(j, function (a, b) {
            var c = $(this),
                code = c.children("a").attr("data-code");
            c.addClass("layui-nav-itemed").siblings().removeClass("layui-nav-itemed");
            if (a === 0) {
                c.addClass("layui-this").siblings().removeClass("layui-this")
            }
            if (c.is("li")) {
                if (config.headerNavElem) {
                    c.addClass("active").siblings().removeClass("active");
                    var d = config.headerNavElem.find('a[data-code="' + code + '"]');
                    d.parent().addClass("layui-this").siblings().removeClass("layui-this")
                }
            }
        });
        if (f) {
            var k = navObj.attr("href") || config.home,
                target = navObj.attr("target") || config.target;
            if (target == "_blank") {
                return e && (window.top.location.href = k)
            } else if (window.frames[target]) {
                window.frames[target].location.href = k
            }
        }
    };
    var p = new o();
    m(moduleName, p)
});