/*********************************************************************************

 Template Name: Boighor Productshop Responsive Bootstrap4 Template
 Version: 1.0


 **********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Avoid Console
	Slick Slider
	Fake Loader

=================================================================================
			[ END INDEX ]
================================================================================*/


/*========== Avoid Console ==========*/
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*========= MobileMenu =========*/
!function ($) {
    "use strict";
    $.fn.meanmenu = function (e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var n = e.meanMenuTarget, t = e.meanMenuContainer, r = e.meanMenuClose, i = e.meanMenuCloseSize,
                s = e.meanMenuOpen, u = e.meanRevealPosition, m = e.meanRevealPositionDistance, l = e.meanRevealColour,
                o = e.meanScreenWidth, c = e.meanNavPush, v = ".meanmenu-reveal", h = e.meanShowChildren,
                d = e.meanExpandableChildren, y = e.meanExpand, j = e.meanContract, Q = e.meanRemoveAttrs,
                f = e.onePage, g = e.meanDisplay, p = e.removeElements, C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "", x = function () {
                if ("center" === u) {
                    var e = window.innerWidth || document.documentElement.clientWidth, n = e / 2 - 22 + "px";
                    w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({left: n}) : jQuery(".meanmenu-reveal").css("left", n)
                }
            }, A = !1, E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "", P = function () {
                M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
            }, W = function () {
                jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
            }, b = function () {
                var e = "background:" + l + ";color:" + l + ";" + w;
                if (o >= a) {
                    jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var r = jQuery(n).html();
                    jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                    }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function () {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                    }), jQuery(".mean-expand").on("click", function (e) {
                        e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function () {
                        })) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function () {
                        })), jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function (e) {
                        e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                    }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                        jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                    })
                } else W()
            };
            C || jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);


/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function (l, o, e) {
    "use strict";
    l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function (r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {id: p.scrollName + "-active"}).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case"fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case"slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
            o.preventDefault(), l("html, body").animate({scrollTop: a}, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function (r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);


/*========== Waypoint Js ==========*/
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, o = {}, n = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, {element: this});
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/*========= Wow Js =========*/
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }

        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return a.notSupported = !0, a.prototype.observe = function () {
        }, a
    }()), d = this.getComputedStyle || function (a, b) {
        return this.getPropertyValue = function (b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.all = function () {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function (b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);


/*========== Fake Loader ==========*/
/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *producer:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
-----------------------------------------------------------------------*/
!function (i) {
    function s() {
        var s = i(window).width(), c = i(window).height(), d = i(".fl").outerWidth(), e = i(".fl").outerHeight();
        i(".fl").css({position: "absolute", left: s / 2 - d / 2, top: c / 2 - e / 2})
    }

    i.fn.fakeLoader = function (c) {
        var d = i.extend({
                timeToHide: 1200,
                pos: "fixed",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                zIndex: "999",
                bgColor: "#2ecc71",
                spinner: "spinner7",
                imagePath: ""
            }, c),
            e = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            l = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
            n = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
            v = '<div class="fl spinner4"></div>',
            a = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
            r = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
            t = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',
            o = i(this), h = {position: d.pos, width: d.width, height: d.height, top: d.top, left: d.left};
        return o.css(h), o.each(function () {
            var i = d.spinner;
            switch (i) {
                case"spinner1":
                    o.html(e);
                    break;
                case"spinner2":
                    o.html(l);
                    break;
                case"spinner3":
                    o.html(n);
                    break;
                case"spinner4":
                    o.html(v);
                    break;
                case"spinner5":
                    o.html(a);
                    break;
                case"spinner6":
                    o.html(r);
                    break;
                case"spinner7":
                    o.html(t);
                    break;
                default:
                    o.html(e)
            }
            "" != d.imagePath && o.html('<div class="fl"><img src="' + d.imagePath + '"></div>'), s()
        }), setTimeout(function () {
            i(o).fadeOut()
        }, d.timeToHide), this.css({backgroundColor: d.bgColor, zIndex: d.zIndex})
    }, i(window).on("load", function () {
        s(), i(window).resize(function () {
            s()
        })
    })
}(jQuery);


/*========== Slick Slider ==========*/

!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});


/*========= Owl Carousel =========*/

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
                e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null,
                d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) ;
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
            h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {item: {count: this._items.length, index: this.current()}},
            i = a.camelCase(a.grep(["on", b, d], function (a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b)
                }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0),
            g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
                b = 0, ++c
            }
            b += this._core.mergers(this._core.relative(a))
        }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }

    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function () {
            return !!e("transform")
        }, csstransforms3d: function () {
            return !!e("perspective")
        }, csstransitions: function () {
            return !!e("transition")
        }, cssanimations: function () {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*========= jQuery fancyBox =========*/
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function (t, J, f, x) {
    var L = f("html"), q = f(t), p = f(J), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }, K = navigator.userAgent.match(/msie/i), D = null, u = J.createTouch !== x, v = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }, r = function (a) {
        return a && "string" === f.type(a)
    }, G = function (a) {
        return r(a) && 0 < a.indexOf("%")
    }, m = function (a, c) {
        var d = parseInt(a, 10) || 0;
        c && G(a) && (d *= b.getViewport()[c] / 100);
        return Math.ceil(d)
    }, y = function (a, b) {
        return m(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.7",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (K ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, c) {
            if (a && (f.isPlainObject(c) || (c = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = v(a) ? f(a).get() : [a]), f.each(a, function (d, e) {
                var k = {}, g, l, h, n, m;
                "object" === f.type(e) && (e.nodeType && (e = f(e)), v(e) ? (k = {
                    href: e.data("fancybox-href") || e.attr("href"), title: f("<div/>").text(e.data("fancybox-title") ||
                        e.attr("title") || "").html(), isDom: !0, element: e
                }, f.metadata && f.extend(!0, k, e.metadata())) : k = e);
                g = c.href || k.href || (r(e) ? e : null);
                l = c.title !== x ? c.title : k.title || "";
                n = (h = c.content || k.content) ? "html" : c.type || k.type;
                !n && k.isDom && (n = e.data("fancybox-type"), n || (n = (n = e.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(e) && (n = "html", h = e)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));
                h || ("inline" === n ? g ? h = f(r(g) ?
                    g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (h = e) : "html" === n ? h = g : n || g || !k.isDom || (n = "inline", h = e));
                f.extend(k, {href: g, type: n, content: h, title: l, selector: m});
                a[d] = k
            }), b.opts = f.extend(!0, {}, b.defaults, c), c.keys !== x && (b.opts.keys = c.keys ? f.extend({}, b.defaults.keys, c.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap &&
            a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())))
        },
        play: function (a) {
            var c = function () {
                    clearTimeout(b.player.timer)
                },
                d = function () {
                    c();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                }, e = function () {
                    c();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({
                "onCancel.player beforeClose.player": e,
                "onUpdate.player": d,
                "beforeLoad.player": c
            }), d(), b.trigger("onPlayStart")) : e()
        },
        next: function (a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.next), b.jumpto(c.index +
                1, a, "next"))
        },
        prev: function (a) {
            var c = b.current;
            c && (r(a) || (a = c.direction.prev), b.jumpto(c.index - 1, a, "prev"))
        },
        jumpto: function (a, c, d) {
            var e = b.current;
            e && (a = m(a), b.direction = c || e.direction[a >= e.index ? "next" : "prev"], b.router = d || "jumpto", e.loop && (0 > a && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== x && (b.cancel(), b._start(a)))
        },
        reposition: function (a, c) {
            var d = b.current, e = d ? d.wrap : null, k;
            e && (k = b._getPosition(c), a && "scroll" === a.type ? (delete k.position, e.stop(!0, !0).animate(k, 200)) : (e.css(k),
                d.pos = f.extend({}, d.dim, k)))
        },
        update: function (a) {
            var c = a && a.originalEvent && a.originalEvent.type, d = !c || "orientationchange" === c;
            d && (clearTimeout(D), D = null);
            b.isOpen && !D && (D = setTimeout(function () {
                var e = b.current;
                e && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (d || "load" === c || "resize" === c && e.autoResize) && b._setDimension(), "scroll" === c && e.canShrink || b.reposition(a), b.trigger("onUpdate"), D = null)
            }, d && !u ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView,
            u && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, c;
            b.hideLoading();
            a = f(b.opts.tpl.loading).click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel())
            });
            b.defaults.fixed || (c = b.getViewport(), a.css({
                position: "absolute",
                top: .5 * c.h + c.y,
                left: .5 * c.w + c.x
            }));
            b.trigger("onLoading")
        },
        getViewport: function () {
            var a =
                b.current && b.current.locked || !1, c = {x: q.scrollLeft(), y: q.scrollTop()};
            a && a.length ? (c.w = a[0].clientWidth, c.h = a[0].clientHeight) : (c.w = u && t.innerWidth ? t.innerWidth : q.width(), c.h = u && t.innerHeight ? t.innerHeight : q.height());
            return c
        },
        unbindEvents: function () {
            b.wrap && v(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            q.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, c;
            a && (q.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (c = a.keys) && p.bind("keydown.fb",
                function (d) {
                    var e = d.which || d.keyCode, k = d.target || d.srcElement;
                    if (27 === e && b.coming) return !1;
                    d.ctrlKey || d.altKey || d.shiftKey || d.metaKey || k && (k.type || f(k).is("[contenteditable]")) || f.each(c, function (c, k) {
                        if (1 < a.group.length && k[e] !== x) return b[c](k[e]), d.preventDefault(), !1;
                        if (-1 < f.inArray(e, k)) return b[c](), d.preventDefault(), !1
                    })
                }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (c, e, k, g) {
                for (var d = f(c.target || null), h = !1; d.length && !(h || d.is(".fancybox-skin") || d.is(".fancybox-wrap"));) h =
                    (h = d[0]) && !(h.style.overflow && "hidden" === h.style.overflow) && (h.clientWidth && h.scrollWidth > h.clientWidth || h.clientHeight && h.scrollHeight > h.clientHeight), d = f(d).parent();
                0 !== e && !h && 1 < b.group.length && !a.canShrink && (0 < g || 0 < k ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > k) && b.next(0 > g ? "up" : "right"), c.preventDefault())
            }))
        },
        trigger: function (a, c) {
            var d, e = c || b.coming || b.current;
            if (e) {
                f.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1)));
                if (!1 === d) return !1;
                e.helpers && f.each(e.helpers, function (c,
                                                         d) {
                    if (d && b.helpers[c] && f.isFunction(b.helpers[c][a])) b.helpers[c][a](f.extend(!0, {}, b.helpers[c].defaults, d), e)
                })
            }
            p.trigger(a)
        },
        isImage: function (a) {
            return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return r(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var c = {}, d, e;
            a = m(a);
            d = b.group[a] || null;
            if (!d) return !1;
            c = f.extend(!0, {}, b.opts, d);
            d = c.margin;
            e = c.padding;
            "number" === f.type(d) && (c.margin = [d, d, d, d]);
            "number" === f.type(e) && (c.padding =
                [e, e, e, e]);
            c.modal && f.extend(!0, c, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {overlay: {closeClick: !1}}
            });
            c.autoSize && (c.autoWidth = c.autoHeight = !0);
            "auto" === c.width && (c.autoWidth = !0);
            "auto" === c.height && (c.autoHeight = !0);
            c.group = b.group;
            c.index = a;
            b.coming = c;
            if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                e = c.type;
                d = c.href;
                if (!e) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" ===
                    e || "swf" === e) c.autoHeight = c.autoWidth = !1, c.scrolling = "visible";
                "image" === e && (c.aspectRatio = !0);
                "iframe" === e && u && (c.scrolling = "scroll");
                c.wrap = f(c.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + c.wrapCSS).appendTo(c.parent || "body");
                f.extend(c, {
                    skin: f(".fancybox-skin", c.wrap),
                    outer: f(".fancybox-outer", c.wrap),
                    inner: f(".fancybox-inner", c.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    c.skin.css("padding" + b, y(c.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === e || "html" === e) {
                    if (!c.content || !c.content.length) return b._error("content")
                } else if (!d) return b._error("href");
                "image" === e ? b._loadImage() : "ajax" === e ? b._loadAjax() : "iframe" === e ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width =
                    this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, d) {
                    b.coming && "abort" !== d ? b._error("ajax", a) : b.hideLoading()
                }, success: function (c, d) {
                    "success" === d && (a.content = c, b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming,
                c = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (d) {
                }
            });
            a.iframe.preload && (b.showLoading(), c.one("load", function () {
                f(this).data("ready", 1);
                u || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = c.appendTo(a.inner);
            a.iframe.preload ||
            b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, c = b.current, d = a.length, e = c.preload ? Math.min(c.preload, d - 1) : 0, f, g;
            for (g = 1; g <= e; g += 1) f = a[(c.index + g) % d], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, c = b.current, d, e, k, g, l;
            b.hideLoading();
            if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, c)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                c && (b.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                d = a.content;
                e = a.type;
                k = a.scrolling;
                f.extend(b, {wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: c});
                g = a.href;
                switch (e) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? d = f("<div>").html(d).find(a.selector) : v(d) && (d.data("fancybox-placeholder") || d.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()), d = d.show().detach(), a.wrap.bind("onReset", function () {
                            f(this).find(d).length && d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
                                !1)
                        }));
                        break;
                    case "image":
                        d = a.tpl.image.replace(/\{href\}/g, g);
                        break;
                    case "swf":
                        d = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', l = "", f.each(a.swf, function (a, b) {
                            d += '<param name="' + a + '" value="' + b + '"></param>';
                            l += " " + a + '="' + b + '"'
                        }), d += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                }
                v(d) && d.parent().is(a.inner) || a.inner.append(d);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); else if (c.prevMethod) b.transitions[c.prevMethod]();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }
        },
        _setDimension: function () {
            var a = b.getViewport(), c = 0, d, e = b.wrap, k = b.skin, g = b.inner, l = b.current;
            d = l.width;
            var h = l.height, n = l.minWidth, w = l.minHeight, p = l.maxWidth,
                q = l.maxHeight, u = l.scrolling, r = l.scrollOutside ? l.scrollbarWidth : 0, z = l.margin,
                A = m(z[1] + z[3]), t = m(z[0] + z[2]), x, B, v, E, C, H, D, F, I;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            z = m(k.outerWidth(!0) - k.width());
            x = m(k.outerHeight(!0) - k.height());
            B = A + z;
            v = t + x;
            E = G(d) ? (a.w - B) * m(d) / 100 : d;
            C = G(h) ? (a.h - v) * m(h) / 100 : h;
            if ("iframe" === l.type) {
                if (I = l.content, l.autoHeight && I && 1 === I.data("ready")) try {
                    I[0].contentWindow.document.location && (g.width(E).height(9999), H = I.contents().find("body"), r && H.css("overflow-x",
                        "hidden"), C = H.outerHeight(!0))
                } catch (M) {
                }
            } else if (l.autoWidth || l.autoHeight) g.addClass("fancybox-tmp"), l.autoWidth || g.width(E), l.autoHeight || g.height(C), l.autoWidth && (E = g.width()), l.autoHeight && (C = g.height()), g.removeClass("fancybox-tmp");
            d = m(E);
            h = m(C);
            F = E / C;
            n = m(G(n) ? m(n, "w") - B : n);
            p = m(G(p) ? m(p, "w") - B : p);
            w = m(G(w) ? m(w, "h") - v : w);
            q = m(G(q) ? m(q, "h") - v : q);
            H = p;
            D = q;
            l.fitToView && (p = Math.min(a.w - B, p), q = Math.min(a.h - v, q));
            B = a.w - A;
            t = a.h - t;
            l.aspectRatio ? (d > p && (d = p, h = m(d / F)), h > q && (h = q, d = m(h * F)), d < n && (d = n, h = m(d /
                F)), h < w && (h = w, d = m(h * F))) : (d = Math.max(n, Math.min(d, p)), l.autoHeight && "iframe" !== l.type && (g.width(d), h = g.height()), h = Math.max(w, Math.min(h, q)));
            if (l.fitToView) if (g.width(d).height(h), e.width(d + z), a = e.width(), A = e.height(), l.aspectRatio) for (; (a > B || A > t) && d > n && h > w && !(19 < c++);) h = Math.max(w, Math.min(q, h - 10)), d = m(h * F), d < n && (d = n, h = m(d / F)), d > p && (d = p, h = m(d / F)), g.width(d).height(h), e.width(d + z), a = e.width(), A = e.height(); else d = Math.max(n, Math.min(d, d - (a - B))), h = Math.max(w, Math.min(h, h - (A - t)));
            r && "auto" === u && h < C &&
            d + z + r < B && (d += r);
            g.width(d).height(h);
            e.width(d + z);
            a = e.width();
            A = e.height();
            c = (a > B || A > t) && d > n && h > w;
            d = l.aspectRatio ? d < H && h < D && d < E && h < C : (d < H || h < D) && (d < E || h < C);
            f.extend(l, {
                dim: {width: y(a), height: y(A)},
                origWidth: E,
                origHeight: C,
                canShrink: c,
                canExpand: d,
                wPadding: z,
                hPadding: x,
                wrapSpace: A - k.outerHeight(!0),
                skinSpace: k.height() - h
            });
            !I && l.autoHeight && h > w && h < q && !d && g.height("auto")
        },
        _getPosition: function (a) {
            var c = b.current, d = b.getViewport(), e = c.margin, f = b.wrap.width() + e[1] + e[3],
                g = b.wrap.height() + e[0] + e[2], e = {
                    position: "absolute",
                    top: e[0], left: e[3]
                };
            c.autoCenter && c.fixed && !a && g <= d.h && f <= d.w ? e.position = "fixed" : c.locked || (e.top += d.y, e.left += d.x);
            e.top = y(Math.max(e.top, e.top + (d.h - g) * c.topRatio));
            e.left = y(Math.max(e.left, e.left + (d.w - f) * c.leftRatio));
            return e
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (c) {
                f(c.target).is("a") ||
                f(c.target).parent().is("a") || (c.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay =
                !1, b.play(!0)) : b.play(!1))
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, c = a.element, d = a.orig, e = {}, f = 50, g = 50, l = a.hPadding, h = a.wPadding,
                n = b.getViewport();
            !d && a.isDom && c.is(":visible") && (d = c.find("img:first"), d.length || (d = c));
            v(d) ?
                (e = d.offset(), d.is("img") && (f = d.outerWidth(), g = d.outerHeight())) : (e.top = n.y + (n.h - g) * a.topRatio, e.left = n.x + (n.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) e.top -= n.y, e.left -= n.x;
            return e = {
                top: y(e.top - l * a.topRatio),
                left: y(e.left - h * a.leftRatio),
                width: y(f + h),
                height: y(g + l)
            }
        }, step: function (a, c) {
            var d, e, f = c.prop;
            e = b.current;
            var g = e.wrapSpace, l = e.skinSpace;
            if ("width" === f || "height" === f) d = c.end === c.start ? 1 : (a - c.start) / (c.end - c.start), b.isClosing && (d = 1 - d), e = "width" === f ? e.wPadding : e.hPadding,
                e = a - e, b.skin[f](m("width" === f ? e : e - g * d)), b.inner[f](m("width" === f ? e : e - g * d - l * d))
        }, zoomIn: function () {
            var a = b.current, c = a.pos, d = a.openEffect, e = "elastic" === d, k = f.extend({opacity: 1}, c);
            delete k.position;
            e ? (c = this.getOrigPosition(), a.openOpacity && (c.opacity = .1)) : "fade" === d && (c.opacity = .1);
            b.wrap.css(c).animate(k, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: b._afterZoomIn
            })
        }, zoomOut: function () {
            var a = b.current, c = a.closeEffect, d = "elastic" === c, e = {opacity: .1};
            d && (e = this.getOrigPosition(),
            a.closeOpacity && (e.opacity = .1));
            b.wrap.animate(e, {
                duration: "none" === c ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: d ? this.step : null,
                complete: b._afterZoomOut
            })
        }, changeIn: function () {
            var a = b.current, c = a.nextEffect, d = a.pos, e = {opacity: 1}, f = b.direction, g;
            d.opacity = .1;
            "elastic" === c && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (d[g] = y(m(d[g]) - 200), e[g] = "+=200px") : (d[g] = y(m(d[g]) + 200), e[g] = "-=200px"));
            "none" === c ? b._afterZoomIn() : b.wrap.css(d).animate(e, {
                duration: a.nextSpeed, easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        }, changeOut: function () {
            var a = b.previous, c = a.prevEffect, d = {opacity: .1}, e = b.direction;
            "elastic" === c && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px");
            a.wrap.animate(d, {
                duration: "none" === c ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0},
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            var c;
            a = f.extend({},
                this.defaults, a);
            this.overlay && this.close();
            c = b.coming ? b.coming.parent : a.parent;
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(c && c.length ? c : "body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var c = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick &&
            this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : c.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            q.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            K ? (b = Math.max(J.documentElement.offsetWidth, J.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function (a, b) {
            var d = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            d || this.create(a);
            a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*:not(object)").filter(function () {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        }, beforeShow: function (a) {
            var c = b.current, d = c.title, e = a.type;
            f.isFunction(d) && (d = d.call(c.element, c));
            if (r(d) && "" !== f.trim(d)) {
                c = f('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>");
                switch (e) {
                    case "inside":
                        e = b.skin;
                        break;
                    case "outside":
                        e = b.wrap;
                        break;
                    case "over":
                        e = b.inner;
                        break;
                    default:
                        e = b.skin, c.appendTo("body"), K && c.width(c.width()), c.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(c.css("margin-bottom")))
                }
                c["top" === a.position ? "prependTo" :
                    "appendTo"](e)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var c, d = f(this), e = this.selector || "", k = function (g) {
            var l = f(this).blur(), h = c, k, m;
            g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || l.is(".fancybox-wrap") || (k = a.groupAttr || "data-fancybox-group", m = l.attr(k), m || (k = "rel", m = l.get(0)[k]), m && "" !== m && "nofollow" !== m && (l = e.length ? f(e) : d, l = l.filter("[" + k + '="' + m + '"]'), h = l.index(this)), a.index = h, !1 !== b.open(l, a) && g.preventDefault())
        };
        a = a || {};
        c = a.index || 0;
        e && !1 !== a.live ? p.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')",
            "click.fb-start", k) : d.unbind("click.fb-start").bind("click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function () {
        var a, c;
        f.scrollbarWidth === x && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        f.support.fixedPosition === x && (f.support.fixedPosition = function () {
            var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove();
            return b
        }());
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
        a = f(t).width();
        L.addClass("fancybox-lock-test");
        c = f(t).width();
        L.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (c - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);


/*========= Isotope PACKAGED v2.2.0 =========*/
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var i = e.prototype, r = this, o = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function (e, n, i) {
        e[n + i] = i.handleEvent ? function () {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function () {
            var n = t(e);
            i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function () {
    };
    n.removeEventListener ? r = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var o = {bind: i, unbind: r};
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e) {
        return "[object Array]" === d.call(e)
    }

    function o(e) {
        var t = [];
        if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]); else t.push(e);
        return t
    }

    function s(e, t, n) {
        if (!(this instanceof s)) return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function () {
            r.check()
        })
    }

    function f(e) {
        this.img = e
    }

    function c(e) {
        this.src = e, v[e] = this
    }

    var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                var f = r[o];
                this.addImage(f)
            }
        }
    }, s.prototype.addImage = function (e) {
        var t = new f(e);
        this.images.push(t)
    }, s.prototype.check = function () {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
        }

        var t = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e), o.check()
        }
    }, s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, a && (a.fn.imagesLoaded = function (e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(a(this))
    }), f.prototype = new t, f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var t = this;
        e.on("confirm", function (e, n) {
            return t.confirm(e.isLoaded, n), !0
        }), e.check()
    }, f.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return c.prototype = new t, c.prototype.check = function () {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
        }
    }, c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function (e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
});


/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a], h = t.data(p, e);
                        if (h) if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                            var f = h[n].apply(h, s);
                            if (void 0 !== f) return f
                        } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }

    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, o = function () {
    };
    i.addEventListener ? o = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function (t, i, o) {
        t[i + o] = o.handleEvent ? function () {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function () {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function () {
    };
    i.removeEventListener ? n = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {bind: o, unbind: n};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var o = t.prototype, n = this, r = n.EventEmitter;
    o.getListeners = function (t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function (t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
        return this
    }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
        return this.getListeners(t), this
    }, o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function (t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function (t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--;) r.call(this, e, i[o]); else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function (t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i) delete o[t]; else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s) if (s.hasOwnProperty(n)) for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++) if (e = i[n] + t, "string" == typeof o[e]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {
    }

    function o() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }

    function n(i) {
        function n() {
            if (!d) {
                d = !0;
                var o = t.getComputedStyle;
                if (p = function () {
                    var t = o ? function (t) {
                        return o(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var i = t(e);
                        return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
                    }
                }(), h = i("boxSizing")) {
                    var n = document.createElement("div");
                    n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(n);
                    var a = p(n);
                    f = 200 === e(a.width), s.removeChild(n)
                }
            }
        }

        function a(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = p(t);
                if ("none" === i.display) return o();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
                    var c = s[d], m = i[c];
                    m = u(t, m);
                    var y = parseFloat(m);
                    r[c] = isNaN(y) ? 0 : y
                }
                var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom,
                    _ = r.marginLeft + r.marginRight, I = r.marginTop + r.marginBottom,
                    z = r.borderLeftWidth + r.borderRightWidth, L = r.borderTopWidth + r.borderBottomWidth, x = a && f,
                    E = e(i.width);
                E !== !1 && (r.width = E + (x ? 0 : g + z));
                var b = e(i.height);
                return b !== !1 && (r.height = b + (x ? 0 : v + L)), r.innerWidth = r.width - (g + z), r.innerHeight = r.height - (v + L), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
            }
        }

        function u(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var o = e.style, n = o.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
        }

        var p, h, f, d = !1;
        return a
    }

    var r = "undefined" == typeof console ? i : function (t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || o()
    }

    function o() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var o = s[t];
            o()
        }
    }

    function n(n) {
        return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
}(window), function (t) {
    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function o(t, e) {
        i(t);
        for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++) if (o[n] === t) return !0;
        return !1
    }

    function n(t, o) {
        return i(t), e(t, o)
    }

    var r, s = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
            var n = e[i], r = n + "MatchesSelector";
            if (t[r]) return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), u = e(a, "div");
        r = u ? e : n
    } else r = o;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, o) {
        return e(t, i, o)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
    var o = {};
    o.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, o.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var n = Object.prototype.toString;
    o.isArray = function (t) {
        return "[object Array]" == n.call(t)
    }, o.makeArray = function (t) {
        var e = [];
        if (o.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, n = t.length; n > i; i++) e.push(t[i]); else e.push(t);
        return e
    }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
        return -1
    }, o.removeFrom = function (t, e) {
        var i = o.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, o.setText = function () {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }

        var e;
        return t
    }(), o.getParent = function (t, e) {
        for (; t != document.body;) if (t = t.parentNode, i(t, e)) return t
    }, o.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, o.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.filterFindElements = function (t, e) {
        t = o.makeArray(t);
        for (var n = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (o.isElement(a)) if (e) {
                i(a, e) && n.push(a);
                for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++) n.push(u[p])
            } else n.push(a)
        }
        return n
    }, o.debounceMethod = function (t, e, i) {
        var o = t.prototype[e], n = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[n] = setTimeout(function () {
                o.apply(r, e), delete r[n]
            }, i || 100)
        }
    }, o.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var r = t.console;
    return o.htmlInit = function (i, n) {
        e(function () {
            for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
                var h, f = s[u], d = f.getAttribute(a);
                try {
                    h = d && JSON.parse(d)
                } catch (l) {
                    r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + l);
                    continue
                }
                var c = new i(f, h), m = t.jQuery;
                m && m.data(f, n, c)
            }
        })
    }, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, o, n, r) {
        return e(t, i, o, n, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, o, n) {
    function r(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function s(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var a = t.getComputedStyle, u = a ? function (t) {
        return a(t, null)
    } : function (t) {
        return t.currentStyle
    }, p = o("transition"), h = o("transform"), f = p && h, d = !!o("perspective"), l = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[p], c = ["transform", "transition", "transitionDuration", "transitionProperty"], m = function () {
        for (var t = {}, e = 0, i = c.length; i > e; e++) {
            var n = c[e], r = o(n);
            r && r !== n && (t[n] = r)
        }
        return t
    }();
    n.extend(s.prototype, e.prototype), s.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.getSize = function () {
        this.size = i(this.element)
    }, s.prototype.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var o = m[i] || i;
            e[o] = t[i]
        }
    }, s.prototype.getPosition = function () {
        var t = u(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop,
            n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
        n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
        var s = this.layout.size;
        n -= i ? s.paddingLeft : s.paddingRight, r -= o ? s.paddingTop : s.paddingBottom, this.position.x = n, this.position.y = r
    }, s.prototype.layoutPosition = function () {
        var t = this.layout.size, e = this.layout.options, i = {}, o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
            n = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", s = this.position.x + t[o];
        s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px", i[n] = s, i[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", u = e.isOriginTop ? "top" : "bottom",
            p = e.isOriginTop ? "bottom" : "top", h = this.position.y + t[a];
        h = e.percentPosition && e.isHorizontal ? 100 * (h / t.height) + "%" : h + "px", i[u] = h, i[p] = "", this.css(i), this.emitEvent("layout", [this])
    };
    var y = d ? function (t, e) {
        return "translate3d(" + t + "px, " + e + "px, 0)"
    } : function (t, e) {
        return "translate(" + t + "px, " + e + "px)"
    };
    s.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10),
            s = n === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
        var a = t - i, u = e - o, p = {}, h = this.layout.options;
        a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
            to: p,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, s.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, s.prototype._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, s.prototype._transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var g = h && n.toDashed(h) + ",opacity";
    s.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: g,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(l, this, !1))
    }, s.prototype.transition = s.prototype[p ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, s.prototype.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    s.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = v[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var o = e.onEnd[i];
                o.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, s.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, s.prototype._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var _ = {transitionProperty: "", transitionDuration: ""};
    return s.prototype.removeTransitionStyles = function () {
        this.css(_)
    }, s.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, s.prototype.remove = function () {
        if (!p || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
        var t = this;
        this.once("transitionEnd", function () {
            t.removeElem()
        }), this.hide()
    }, s.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, s.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, s.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, s.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, s.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, s.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, r, s) {
        return e(t, i, o, n, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n, r) {
    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)), void 0;
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++h;
        this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var a = t.console, u = t.jQuery, p = function () {
    }, h = 0, f = {};
    return s.namespace = "outlayer", s.Item = r, s.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, n.extend(s.prototype, i.prototype), s.prototype.option = function (t) {
        n.extend(this.options, t)
    }, s.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, s.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, s.prototype._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
            var s = e[n], a = new i(s, this);
            o.push(a)
        }
        return o
    }, s.prototype._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, s.prototype.getItemElements = function () {
        for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
        return t
    }, s.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
        this.getSize()
    }, s.prototype.getSize = function () {
        this.size = o(this.element)
    }, s.prototype._getMeasurement = function (t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0
    }, s.prototype.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, s.prototype._getItemsForLayout = function (t) {
        for (var e = [], i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.isIgnored || e.push(n)
        }
        return e
    }, s.prototype._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], o = 0, n = t.length; n > o; o++) {
                var r = t[o], s = this._getItemLayoutPosition(r);
                s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }, s.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, s.prototype._processLayoutQueue = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant)
        }
    }, s.prototype._positionItem = function (t, e, i, o) {
        o ? t.goTo(e, i) : t.moveTo(e, i)
    }, s.prototype._postLayout = function () {
        this.resizeContainer()
    }, s.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, s.prototype._emitCompleteOnItems = function (t, e) {
        function i() {
            n.emitEvent(t + "Complete", [e])
        }

        function o() {
            s++, s === r && i()
        }

        var n = this, r = e.length;
        if (!e || !r) return i(), void 0;
        for (var s = 0, a = 0, u = e.length; u > a; a++) {
            var p = e[a];
            p.once(t, o)
        }
    }, s.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, s.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, s.prototype.stamp = function (t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this.ignore(o)
            }
        }
    }, s.prototype.unstamp = function (t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            n.removeFrom(this.stamps, o), this.unignore(o)
        }
    }, s.prototype._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, s.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, s.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, n = o(t), r = {
            left: e.left - i.left - n.marginLeft,
            top: e.top - i.top - n.marginTop,
            right: i.right - e.right - n.marginRight,
            bottom: i.bottom - e.bottom - n.marginBottom
        };
        return r
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.bindResize = function () {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, s.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, s.prototype.onresize = function () {
        function t() {
            e.resize(), delete e.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, s.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, s.prototype.needsResizeLayout = function () {
        var t = o(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, s.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, s.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, s.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, s.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.reveal()
        }
    }, s.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.hide()
        }
    }, s.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, s.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, s.prototype.getItem = function (t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            if (o.element === t) return o
        }
    }, s.prototype.getItems = function (t) {
        t = n.makeArray(t);
        for (var e = [], i = 0, o = t.length; o > i; i++) {
            var r = t[i], s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }, s.prototype.remove = function (t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, o = e.length; o > i; i++) {
            var r = e[i];
            r.remove(), n.removeFrom(this.items, r)
        }
    }, s.prototype.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            o.destroy()
        }
        this.unbindResize();
        var n = this.element.outlayerGUID;
        delete f[n], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        function i() {
            s.apply(this, arguments)
        }

        return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function () {
            r.apply(this, arguments)
        }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    }, s.Item = r, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    function e() {
        t.Item.apply(this, arguments)
    }

    e.prototype = new t.Item, e.prototype._create = function () {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function () {
        i.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    return function () {
        function t(t) {
            return function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }

        for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
            var s = o[n];
            i.prototype[s] = t(s)
        }
    }(), i.prototype.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function (t, e) {
        var i = t + e, o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function o() {
            i.apply(this, arguments)
        }

        return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var o = t.create("masonry");
    return o.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, o.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, r = n / o, s = o - n % o,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, o.prototype.getContainerWidth = function () {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, o.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil",
            n = Math[o](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = {
            x: this.columnWidth * a,
            y: s
        }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
        return u
    }, o.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n)
        }
        return e
    }, o.prototype._manageStamp = function (t) {
        var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right,
            r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
    }, o.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, o.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout,
        s = o.prototype._getMeasurement;
    i(o.prototype, e.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
    var a = o.prototype.measureColumns;
    o.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var u = o.prototype._manageStamp;
    return o.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
    }, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, e.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    var e = t.create("vertical", {horizontalAlignment: 0});
    return e.prototype._resetLayout = function () {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, e.prototype._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, o, n, r, s, a) {
        return e(t, i, o, n, r, s, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, r, s) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0, r = t.length; r > n; n++) {
                var s = t[n], a = i.sortData[s], u = o.sortData[s];
                if (a > u || u > a) {
                    var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                    return (a > u ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var u = t.jQuery, p = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, h = document.documentElement, f = h.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = r, d.LayoutMode = s, d.prototype._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, d.prototype.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, d.prototype._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, d.prototype._initLayoutMode = function (t) {
        var e = s.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, d.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
    }, d.prototype._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, d.prototype.arrange = function (t) {
        function e() {
            o.reveal(i.needReveal), o.hide(i.needHide)
        }

        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var o = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d.prototype._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems])
        }

        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, d.prototype._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
            var u = t[s];
            if (!u.isIgnored) {
                var p = r(u);
                p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
            }
        }
        return {matches: i, needReveal: o, needHide: n}
    }, d.prototype._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return o(e.element, t)
        }
    }, d.prototype.updateSortData = function (t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, d.prototype._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i)
        }
    }, d.prototype._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var l = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = p(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(s(t))
            } : function (t) {
                return t && s(t)
            }
        }

        function e(t, e) {
            var i;
            return i = t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && f(i)
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, d.prototype._sort = function () {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, d.prototype._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, d.prototype._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d.prototype._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, d.prototype._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, d.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, d.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, d.prototype.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, d.prototype._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, d.prototype.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
            var r = this._filter(e).matches;
            for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var c = d.prototype.remove;
    return d.prototype.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        var i = e && e.length;
        if (i) for (var o = 0; i > o; o++) {
            var r = e[o];
            n.removeFrom(this.filteredItems, r)
        }
    }, d.prototype.shuffle = function () {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d.prototype._noTransition = function (t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, d.prototype.getFilteredItemElements = function () {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
        return t
    }, d
});

/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion = "4.6.4", function (a, b, c, d, e) {
    "use strict";

    function f(a) {
        var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
        if ("function" != typeof d.easing[b]) {
            var c = function (a, b) {
                var c = [null, null], d = [null, null], e = [null, null], f = function (f, g) {
                    return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
                }, g = function (a) {
                    return e[0] + a * (2 * d[0] + 3 * c[0] * a)
                }, h = function (a) {
                    for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));) c -= b / g(c);
                    return c
                };
                return function (a) {
                    return f(h(a), 1)
                }
            };
            d.easing[b] = function (b, d, e, f, g) {
                return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
            }
        }
        return b
    }

    function g() {
    }

    function h(a, b, c) {
        return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
    }

    function i(a) {
        return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
    }

    function j(a) {
        return Ic ? +i(a.css("transform")) : +a.css("left").replace("px", "")
    }

    function k(a) {
        var b = {};
        return Ic ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b
    }

    function l(a) {
        return {"transition-duration": a + "ms"}
    }

    function m(a, b) {
        return isNaN(a) ? b : a
    }

    function n(a, b) {
        return m(+String(a).replace(b || "px", ""))
    }

    function o(a) {
        return /%$/.test(a) ? n(a, "%") : e
    }

    function p(a, b) {
        return m(o(a) / 100 * b, n(a))
    }

    function q(a) {
        return (!isNaN(n(a)) || !isNaN(n(a, "%"))) && a
    }

    function r(a, b, c, d) {
        return (a - (d || 0)) * (b + (c || 0))
    }

    function s(a, b, c, d) {
        return -Math.round(a / (b + (c || 0)) - (d || 0))
    }

    function t(a) {
        var b = a.data();
        if (!b.tEnd) {
            var c = a[0], d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            };
            T(c, d[uc.prefixed("transition")], function (a) {
                b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
            }), b.tEnd = !0
        }
    }

    function u(a, b, c, d) {
        var e, f = a.data();
        f && (f.onEndFn = function () {
            e || (e = !0, clearTimeout(f.tT), c())
        }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function () {
            f.onEndFn()
        }, 1.5 * d), t(a))
    }

    function v(a, b) {
        if (a.length) {
            var c = a.data();
            Ic ? (a.css(l(0)), c.onEndFn = g, clearTimeout(c.tT)) : a.stop();
            var d = w(b, function () {
                return j(a)
            });
            return a.css(k(d)), d
        }
    }

    function w() {
        for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++) ;
        return a
    }

    function x(a, b) {
        return Math.round(a + (b - a) / 1.5)
    }

    function y() {
        return y.p = y.p || ("https:" === c.protocol ? "https://" : "http://"), y.p
    }

    function z(a) {
        var c = b.createElement("a");
        return c.href = a, c
    }

    function A(a, b) {
        if ("string" != typeof a) return a;
        a = z(a);
        var c, d;
        if (a.host.match(/youtube\.com/) && a.search) {
            if (c = a.search.split("v=")[1]) {
                var e = c.indexOf("&");
                -1 !== e && (c = c.substring(0, e)), d = "youtube"
            }
        } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
        return c && d || !b || (c = a.href, d = "custom"), c ? {
            id: c,
            type: d,
            s: a.search.replace(/^\?/, ""),
            p: y()
        } : !1
    }

    function B(a, b, c) {
        var e, f, g = a.video;
        return "youtube" === g.type ? (f = y() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({
            url: y() + "vimeo.com/api/v2/video/" + g.id + ".json",
            dataType: "jsonp",
            success: function (d) {
                a.thumbsReady = !0, C(b, {img: d[0].thumbnail_large, thumb: d[0].thumbnail_small}, a.i, c)
            }
        }) : a.thumbsReady = !0, {img: e, thumb: f}
    }

    function C(a, b, c, e) {
        for (var f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (h.i === c && h.thumbsReady) {
                var i = {videoReady: !0};
                i[Xc] = i[Zc] = i[Yc] = !1, e.splice(f, 1, d.extend({}, h, i, b));
                break
            }
        }
    }

    function D(a) {
        function b(a, b, e) {
            var f = a.children("img").eq(0), g = a.attr("href"), h = a.attr("src"), i = f.attr("src"), j = b.video,
                k = e ? A(g, j === !0) : !1;
            k ? g = !1 : k = j, c(a, f, d.extend(b, {
                video: k,
                img: b.img || g || h || i,
                thumb: b.thumb || i || h || g
            }))
        }

        function c(a, b, c) {
            var e = c.thumb && c.img !== c.thumb, f = n(c.width || a.attr("width")),
                g = n(c.height || a.attr("height"));
            d.extend(c, {
                width: f,
                height: g,
                thumbratio: S(c.thumbratio || n(c.thumbwidth || b && b.attr("width") || e || f) / n(c.thumbheight || b && b.attr("height") || e || g))
            })
        }

        var e = [];
        return a.children().each(function () {
            var a = d(this), f = R(d.extend(a.data(), {id: a.attr("id")}));
            if (a.is("a, img")) b(a, f, !0); else {
                if (a.is(":empty")) return;
                c(a, null, d.extend(f, {html: this, _html: a.html()}))
            }
            e.push(f)
        }), e
    }

    function E(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight
    }

    function F(a) {
        return !d.contains(b.documentElement, a)
    }

    function G(a, b, c, d) {
        return G.i || (G.i = 1, G.ii = [!0]), d = d || G.i, "undefined" == typeof G.ii[d] && (G.ii[d] = !0), a() ? b() : G.ii[d] && setTimeout(function () {
            G.ii[d] && G(a, b, c, d)
        }, c || 100), G.i++
    }

    function H(a) {
        c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
    }

    function I(a, b, c, d) {
        var e = a.data(), f = e.measures;
        if (f && (!e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p !== d)) {
            var g = f.width, i = f.height, j = b.w / b.h, k = f.ratio >= j, l = "scaledown" === c, m = "contain" === c,
                n = "cover" === c, o = $(d);
            k && (l || m) || !k && n ? (g = h(b.w, 0, l ? g : 1 / 0), i = g / f.ratio) : (k && n || !k && (l || m)) && (i = h(b.h, 0, l ? i : 1 / 0), g = i * f.ratio), a.css({
                width: g,
                height: i,
                left: p(o.x, b.w - g),
                top: p(o.y, b.h - i)
            }), e.l = {W: f.width, H: f.height, r: f.ratio, w: b.w, h: b.h, m: c, p: d}
        }
        return !0
    }

    function J(a, b) {
        var c = a[0];
        c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
    }

    function K(a, b, c) {
        return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
    }

    function L(a, b, c, d) {
        if (!c) return !1;
        if (!isNaN(a)) return a - (d ? 0 : 1);
        for (var e, f = 0, g = b.length; g > f; f++) {
            var h = b[f];
            if (h.id === a) {
                e = f;
                break
            }
        }
        return e
    }

    function M(a, b, c) {
        c = c || {}, a.each(function () {
            var a, e = d(this), f = e.data();
            f.clickOn || (f.clickOn = !0, d.extend(cb(e, {
                onStart: function (b) {
                    a = b, (c.onStart || g).call(this, b)
                }, onMove: c.onMove || g, onTouchEnd: c.onTouchEnd || g, onEnd: function (c) {
                    c.moved || b.call(this, a)
                }
            }), {noMove: !0}))
        })
    }

    function N(a, b) {
        return '<div class="' + a + '">' + (b || "") + "</div>"
    }

    function O(a) {
        for (var b = a.length; b;) {
            var c = Math.floor(Math.random() * b--), d = a[b];
            a[b] = a[c], a[c] = d
        }
        return a
    }

    function P(a) {
        return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function (a) {
            return d.extend({}, a)
        })
    }

    function Q(a, b, c) {
        a.scrollLeft(b || 0).scrollTop(c || 0)
    }

    function R(a) {
        if (a) {
            var b = {};
            return d.each(a, function (a, c) {
                b[a.toLowerCase()] = c
            }), b
        }
    }

    function S(a) {
        if (a) {
            var b = +a;
            return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
        }
    }

    function T(a, b, c, d) {
        b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c))
    }

    function U(a) {
        return !!a.getAttribute("disabled")
    }

    function V(a) {
        return {tabindex: -1 * a + "", disabled: a}
    }

    function W(a, b) {
        T(a, "keyup", function (c) {
            U(a) || 13 == c.keyCode && b.call(a, c)
        })
    }

    function X(a, b) {
        T(a, "focus", a.onfocusin = function (c) {
            b.call(a, c)
        }, !0)
    }

    function Y(a, b) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1, b && a.stopPropagation && a.stopPropagation()
    }

    function Z(a) {
        return a ? ">" : "<"
    }

    function $(a) {
        return a = (a + "").split(/\s+/), {x: q(a[0]) || bd, y: q(a[1]) || bd}
    }

    function _(a, b) {
        var c = a.data(), e = Math.round(b.pos), f = function () {
            c.sliding = !1, (b.onEnd || g)()
        };
        "undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function () {
            _(a, d.extend({}, b, {overPos: b.pos, time: Math.max(Qc, b.time / 2)}))
        });
        var h = d.extend(k(e), b.width && {width: b.width});
        c.sliding = !0, Ic ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? u(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, _c, f)
    }

    function ab(a, b, c, e, f, h) {
        var i = "undefined" != typeof h;
        if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
            a = a || d(a), b = b || d(b);
            var j = a[0], k = b[0], l = "crossfade" === e.method, m = function () {
                if (!m.done) {
                    m.done = !0;
                    var a = (i || f.shift()) && f.shift();
                    a && ab.apply(this, a), (e.onEnd || g)(!!a)
                }
            }, n = e.time / (h || 1);
            c.removeClass(Rb + " " + Qb), a.stop().addClass(Rb), b.stop().addClass(Qb), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
        }
    }

    function bb(a) {
        var b = (a.touches || [])[0] || a;
        a._x = b.pageX, a._y = b.clientY, a._now = d.now()
    }

    function cb(a, c) {
        function e(a) {
            return m = d(a.target), u.checked = p = q = s = !1, k || u.flow || a.touches && a.touches.length > 1 || a.which > 1 || ed && ed.type !== a.type && gd || (p = c.select && m.is(c.select, t)) ? p : (o = "touchstart" === a.type, q = m.is("a, a *", t), n = u.control, r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4, bb(a), l = ed = a, fd = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (c.onStart || g).call(t, a, {
                control: n,
                $target: m
            }), k = u.flow = !0, void ((!o || u.go) && Y(a)))
        }

        function f(a) {
            if (a.touches && a.touches.length > 1 || Nc && !a.isPrimary || fd !== a.type || !k) return k && h(), void (c.onTouchEnd || g)();
            bb(a);
            var b = Math.abs(a._x - l._x), d = Math.abs(a._y - l._y), e = b - d,
                f = (u.go || u.x || e >= 0) && !u.noSwipe, i = 0 > e;
            o && !u.checked ? (k = f) && Y(a) : (Y(a), (c.onMove || g).call(t, a, {touch: o})), !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0), u.checked = u.checked || f || i
        }

        function h(a) {
            (c.onTouchEnd || g)();
            var b = k;
            u.control = k = !1, b && (u.flow = !1), !b || q && !u.checked || (a && Y(a), gd = !0, clearTimeout(hd), hd = setTimeout(function () {
                gd = !1
            }, 1e3), (c.onEnd || g).call(t, {
                moved: s,
                $target: m,
                control: n,
                touch: o,
                startEvent: l,
                aborted: !a || "MSPointerCancel" === a.type
            }))
        }

        function i() {
            u.flow || setTimeout(function () {
                u.flow = !0
            }, 10)
        }

        function j() {
            u.flow && setTimeout(function () {
                u.flow = !1
            }, Pc)
        }

        var k, l, m, n, o, p, q, r, s, t = a[0], u = {};
        return Nc ? (T(t, "MSPointerDown", e), T(b, "MSPointerMove", f), T(b, "MSPointerCancel", h), T(b, "MSPointerUp", h)) : (T(t, "touchstart", e), T(t, "touchmove", f), T(t, "touchend", h), T(b, "touchstart", i), T(b, "touchend", j), T(b, "touchcancel", j), Ec.on("scroll", j), a.on("mousedown", e), Fc.on("mousemove", f).on("mouseup", h)), a.on("click", "a", function (a) {
            u.checked && Y(a)
        }), u
    }

    function db(a, b) {
        function c(c, d) {
            A = !0, j = l = c._x, q = c._now, p = [[q, j]], m = n = D.noMove || d ? 0 : v(a, (b.getPos || g)()), (b.onStart || g).call(B, c)
        }

        function e(a, b) {
            s = D.min, t = D.max, u = D.snap, w = a.altKey, A = z = !1, y = b.control, y || C.sliding || c(a)
        }

        function f(d, e) {
            D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = K(n, s, t), s >= n ? n = x(n, s) : n >= t && (n = x(n, t)), D.noMove || (a.css(k(n)), z || (z = !0, e.touch || Nc || a.addClass(ec)), (b.onMove || g).call(B, d, {
                pos: n,
                edge: o
            })))
        }

        function i(e) {
            if (!D.noSwipe || !e.moved) {
                A || c(e.startEvent, !0), e.touch || Nc || a.removeClass(ec), r = d.now();
                for (var f, i, j, k, o, q, v, x, y, z = r - Pc, C = null, E = Qc, F = b.friction, G = p.length - 1; G >= 0; G--) {
                    if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1]; else if (C === z || i > j) break;
                    j = i
                }
                v = h(n, s, t);
                var H = k - l, I = H >= 0, J = r - C, K = J > Pc, L = !K && n !== m && v === n;
                u && (v = h(Math[L ? I ? "floor" : "ceil" : "round"](n / u) * u, s, t), s = t = v), L && (u || v === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), u || (v = o), (!I && o > t || I && s > o) && (q = I ? s : t, x = o - q, u || (v = q), x = h(v + .03 * x, q - 50, q + 50), E = Math.abs((n - x) / (y / F)))), E *= w ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, {
                    moved: e.moved || K && u,
                    pos: n,
                    newPos: v,
                    overPos: x,
                    time: E
                }))
            }
        }

        var j, l, m, n, o, p, q, r, s, t, u, w, y, z, A, B = a[0], C = a.data(), D = {};
        return D = d.extend(cb(b.$wrap, d.extend({}, b, {onStart: e, onMove: f, onEnd: i})), D)
    }

    function eb(a, b) {
        var c, e, f, h = a[0], i = {prevent: {}};
        return T(h, Oc, function (a) {
            var h = a.wheelDeltaY || -1 * a.deltaY || 0, j = a.wheelDeltaX || -1 * a.deltaX || 0,
                k = Math.abs(j) && !Math.abs(h), l = Z(0 > j), m = e === l, n = d.now(), o = Pc > n - f;
            e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (Y(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function () {
                c = !1
            }, Rc)), (b.onEnd || g)(a, b.shift ? l : j)))
        }), i
    }

    function fb() {
        d.each(d.Fotorama.instances, function (a, b) {
            b.index = a
        })
    }

    function gb(a) {
        d.Fotorama.instances.push(a), fb()
    }

    function hb(a) {
        d.Fotorama.instances.splice(a.index, 1), fb()
    }

    var ib = "fotorama", jb = "fullscreen", kb = ib + "__wrap", lb = kb + "--css2", mb = kb + "--css3",
        nb = kb + "--video", ob = kb + "--fade", pb = kb + "--slide", qb = kb + "--no-controls",
        rb = kb + "--no-shadows", sb = kb + "--pan-y", tb = kb + "--rtl", ub = kb + "--only-active",
        vb = kb + "--no-captions", wb = kb + "--toggle-arrows", xb = ib + "__stage", yb = xb + "__frame",
        zb = yb + "--video", Ab = xb + "__shaft", Bb = ib + "__grab", Cb = ib + "__pointer", Db = ib + "__arr",
        Eb = Db + "--disabled", Fb = Db + "--prev", Gb = Db + "--next", Hb = ib + "__nav", Ib = Hb + "-wrap",
        Jb = Hb + "__shaft", Kb = Hb + "--dots", Lb = Hb + "--thumbs", Mb = Hb + "__frame", Nb = Mb + "--dot",
        Ob = Mb + "--thumb", Pb = ib + "__fade", Qb = Pb + "-front", Rb = Pb + "-rear", Sb = ib + "__shadow",
        Tb = Sb + "s", Ub = Tb + "--left", Vb = Tb + "--right", Wb = ib + "__active", Xb = ib + "__select",
        Yb = ib + "--hidden", Zb = ib + "--fullscreen", $b = ib + "__fullscreen-icon", _b = ib + "__error",
        ac = ib + "__loading", bc = ib + "__loaded", cc = bc + "--full", dc = bc + "--img", ec = ib + "__grabbing",
        fc = ib + "__img", gc = fc + "--full", hc = ib + "__dot", ic = ib + "__thumb", jc = ic + "-border",
        kc = ib + "__html", lc = ib + "__video", mc = lc + "-play", nc = lc + "-close", oc = ib + "__caption",
        pc = ib + "__caption__wrap", qc = ib + "__spinner", rc = '" tabindex="0" role="button',
        sc = d && d.fn.jquery.split(".");
    if (!sc || sc[0] < 1 || 1 == sc[0] && sc[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
    var tc = {}, uc = function (a, b, c) {
        function d(a) {
            r.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }

        var j, k, l, m = "2.6.2", n = {}, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style,
            s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), t = "Webkit Moz O ms", u = t.split(" "),
            v = t.toLowerCase().split(" "), w = {}, x = [], y = x.slice, z = function (a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
                if (parseInt(d, 10)) for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
            }, A = {}.hasOwnProperty;
        l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function (a, b) {
            return A.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = y.call(arguments, 1), d = function () {
                if (this instanceof d) {
                    var e = function () {
                    };
                    e.prototype = b.prototype;
                    var f = new e, g = b.apply(f, c.concat(y.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(y.call(arguments)))
            };
            return d
        }), w.csstransforms3d = function () {
            var a = !!i("perspective");
            return a
        };
        for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
        return n.addTest = function (a, b) {
            if ("object" == typeof a) for (var d in a) l(a, d) && n.addTest(d, a[d]); else {
                if (a = a.toLowerCase(), n[a] !== c) return n;
                b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
            }
            return n
        }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
            return g([a])
        }, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) {
            return b ? i(a, b, c) : i(a, "pfx")
        }, n
    }(a, b), vc = {
        ok: !1, is: function () {
            return !1
        }, request: function () {
        }, cancel: function () {
        }, event: "", prefix: ""
    }, wc = "webkit moz o ms khtml".split(" ");
    if ("undefined" != typeof b.cancelFullScreen) vc.ok = !0; else for (var xc = 0, yc = wc.length; yc > xc; xc++) if (vc.prefix = wc[xc], "undefined" != typeof b[vc.prefix + "CancelFullScreen"]) {
        vc.ok = !0;
        break
    }
    vc.ok && (vc.event = vc.prefix + "fullscreenchange", vc.is = function () {
        switch (this.prefix) {
            case"":
                return b.fullScreen;
            case"webkit":
                return b.webkitIsFullScreen;
            default:
                return b[this.prefix + "FullScreen"]
        }
    }, vc.request = function (a) {
        return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
    }, vc.cancel = function () {
        return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
    });
    var zc, Ac = {
        lines: 12,
        length: 5,
        width: 2,
        radius: 7,
        corners: 1,
        rotate: 15,
        color: "rgba(128, 128, 128, .75)",
        hwaccel: !0
    }, Bc = {top: "auto", left: "auto", className: ""};
    !function (a, b) {
        zc = b()
    }(this, function () {
        function a(a, c) {
            var d, e = b.createElement(a || "div");
            for (d in c) e[d] = c[d];
            return e
        }

        function c(a) {
            for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
            return a
        }

        function d(a, b, c, d) {
            var e = ["opacity", b, ~~(100 * a), c, d].join("-"), f = .01 + c / d * 100,
                g = Math.max(1 - (1 - a) / b * (100 - f), a), h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
                i = h && "-" + h + "-" || "";
            return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e
        }

        function f(a, b) {
            var c, d, f = a.style;
            for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++) if (c = n[d] + b, f[c] !== e) return c;
            return f[b] !== e ? b : void 0
        }

        function g(a, b) {
            for (var c in b) a.style[f(a, c) || c] = b[c];
            return a
        }

        function h(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c) a[d] === e && (a[d] = c[d])
            }
            return a
        }

        function i(a) {
            for (var b = {
                x: a.offsetLeft,
                y: a.offsetTop
            }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
            return b
        }

        function j(a, b) {
            return "string" == typeof a ? a : a[b % a.length]
        }

        function k(a) {
            return "undefined" == typeof this ? new k(a) : void (this.opts = h(a || {}, k.defaults, q))
        }

        function l() {
            function b(b, c) {
                return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
            }

            p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function (a, d) {
                function e() {
                    return g(b("group", {coordsize: k + " " + k, coordorigin: -i + " " + -i}), {width: k, height: k})
                }

                function f(a, f, h) {
                    c(m, c(g(e(), {
                        rotation: 360 / d.lines * a + "deg",
                        left: ~~f
                    }), c(g(b("roundrect", {arcsize: d.corners}), {
                        width: i,
                        height: d.width,
                        left: d.radius,
                        top: -d.width >> 1,
                        filter: h
                    }), b("fill", {color: j(d.color, a), opacity: d.opacity}), b("stroke", {opacity: 0}))))
                }

                var h, i = d.length + d.width, k = 2 * i, l = 2 * -(d.width + d.length) + "px",
                    m = g(e(), {position: "absolute", top: l, left: l});
                if (d.shadow) for (h = 1; h <= d.lines; h++) f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (h = 1; h <= d.lines; h++) f(h);
                return c(a, m)
            }, k.prototype.opacity = function (a, b, c, d) {
                var e = a.firstChild;
                d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
            }
        }

        var m, n = ["webkit", "Moz", "ms", "O"], o = {}, p = function () {
            var d = a("style", {type: "text/css"});
            return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet
        }(), q = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
        k.defaults = {}, h(k.prototype, {
            spin: function (b) {
                this.stop();
                var c, d, e = this, f = e.opts,
                    h = e.el = g(a(0, {className: f.className}), {position: f.position, width: 0, zIndex: f.zIndex}),
                    j = f.radius + f.length + f.width;
                if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, {
                    left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px",
                    top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px"
                })), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) {
                    var k, l = 0, n = (f.lines - 1) * (1 - f.direction) / 2, o = f.fps, p = o / f.speed,
                        q = (1 - f.opacity) / (p * f.trail / 100), r = p / f.lines;
                    !function s() {
                        l++;
                        for (var a = 0; a < f.lines; a++) k = Math.max(1 - (l + (f.lines - a) * r) % p * q, f.opacity), e.opacity(h, a * f.direction + n, k, f);
                        e.timeout = e.el && setTimeout(s, ~~(1e3 / o))
                    }()
                }
                return e
            }, stop: function () {
                var a = this.el;
                return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this
            }, lines: function (b, e) {
                function f(b, c) {
                    return g(a(), {
                        position: "absolute",
                        width: e.length + e.width + "px",
                        height: e.width + "px",
                        background: b,
                        boxShadow: c,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)",
                        borderRadius: (e.corners * e.width >> 1) + "px"
                    })
                }

                for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++) h = g(a(), {
                    position: "absolute",
                    top: 1 + ~(e.width / 2) + "px",
                    transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: e.opacity,
                    animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
                }), e.shadow && c(h, g(f("#000", "0 0 4px #000"), {top: "2px"})), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)")));
                return b
            }, opacity: function (a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
            }
        });
        var r = g(a("group"), {behavior: "url(#default#VML)"});
        return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k
    });
    var Cc, Dc, Ec = d(a), Fc = d(b), Gc = "quirks" === c.hash.replace("#", ""), Hc = uc.csstransforms3d,
        Ic = Hc && !Gc, Jc = Hc || "CSS1Compat" === b.compatMode, Kc = vc.ok,
        Lc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i), Mc = !Ic || Lc,
        Nc = navigator.msPointerEnabled,
        Oc = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
        Pc = 250, Qc = 300, Rc = 1400, Sc = 5e3, Tc = 2, Uc = 64, Vc = 500, Wc = 333, Xc = "$stageFrame",
        Yc = "$navDotFrame", Zc = "$navThumbFrame", $c = "auto", _c = f([.1, 0, .25, 1]), ad = 99999, bd = "50%", cd = {
            width: null,
            minwidth: null,
            maxwidth: "100%",
            height: null,
            minheight: null,
            maxheight: null,
            ratio: null,
            margin: Tc,
            glimpse: 0,
            fit: "contain",
            position: bd,
            thumbposition: bd,
            nav: "dots",
            navposition: "bottom",
            navwidth: null,
            thumbwidth: Uc,
            thumbheight: Uc,
            thumbmargin: Tc,
            thumbborderwidth: Tc,
            thumbfit: "cover",
            allowfullscreen: !1,
            transition: "slide",
            clicktransition: null,
            transitionduration: Qc,
            captions: !0,
            hash: !1,
            startindex: 0,
            loop: !1,
            autoplay: !1,
            stopautoplayontouch: !0,
            keyboard: !1,
            arrows: !0,
            click: !0,
            swipe: !0,
            trackpad: !1,
            enableifsingleframe: !1,
            controlsonstart: !0,
            shuffle: !1,
            direction: "ltr",
            shadows: !0,
            spinner: null
        }, dd = {left: !0, right: !0, down: !1, up: !1, space: !1, home: !1, end: !1};
    G.stop = function (a) {
        G.ii[a] = !1
    };
    var ed, fd, gd, hd;
    jQuery.Fotorama = function (a, e) {
        function f() {
            d.each(yd, function (a, b) {
                if (!b.i) {
                    b.i = me++;
                    var c = A(b.video, !0);
                    if (c) {
                        var d = {};
                        b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = B(b, yd, ie), C(yd, {
                            img: d.img,
                            thumb: d.thumb
                        }, b.i, ie)
                    }
                }
            })
        }

        function g(a) {
            return Zd[a] || ie.fullScreen
        }

        function i(a) {
            var b = "keydown." + ib, c = ib + je, d = "keydown." + c, f = "resize." + c + " orientationchange." + c;
            a ? (Fc.on(d, function (a) {
                var b, c;
                Cd && 27 === a.keyCode ? (b = !0, md(Cd, !0, !0)) : (ie.fullScreen || e.keyboard && !ie.index) && (27 === a.keyCode ? (b = !0, ie.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode && g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode && g("end") && (c = ">>")), (b || c) && Y(a), c && ie.show({
                    index: c,
                    slow: a.altKey,
                    user: !0
                })
            }), ie.index || Fc.off(b).on(b, "textarea, input, select", function (a) {
                !Dc.hasClass(jb) && a.stopPropagation()
            }), Ec.on(f, ie.resize)) : (Fc.off(d), Ec.off(f))
        }

        function j(b) {
            b !== j.f && (b ? (a.html("").addClass(ib + " " + ke).append(qe).before(oe).before(pe), gb(ie)) : (qe.detach(), oe.detach(), pe.detach(), a.html(ne.urtext).removeClass(ke), hb(ie)), i(b), j.f = b)
        }

        function m() {
            yd = ie.data = yd || P(e.data) || D(a), zd = ie.size = yd.length, !xd.ok && e.shuffle && O(yd), f(), Je = y(Je), zd && j(!0)
        }

        function o() {
            var a = 2 > zd && !e.enableifsingleframe || Cd;
            Me.noMove = a || Sd, Me.noSwipe = a || !e.swipe, !Wd && se.toggleClass(Bb, !e.click && !Me.noMove && !Me.noSwipe), Nc && qe.toggleClass(sb, !Me.noSwipe)
        }

        function t(a) {
            a === !0 && (a = ""), e.autoplay = Math.max(+a || Sc, 1.5 * Vd)
        }

        function u() {
            function a(a, c) {
                b[a ? "add" : "remove"].push(c)
            }

            ie.options = e = R(e), Sd = "crossfade" === e.transition || "dissolve" === e.transition, Md = e.loop && (zd > 2 || Sd && (!Wd || "slide" !== Wd)), Vd = +e.transitionduration || Qc, Yd = "rtl" === e.direction, Zd = d.extend({}, e.keyboard && dd, e.keyboard);
            var b = {add: [], remove: []};
            zd > 1 || e.enableifsingleframe ? (Nd = e.nav, Pd = "top" === e.navposition, b.remove.push(Xb), we.toggle(!!e.arrows)) : (Nd = !1, we.hide()), Rb(), Bd = new zc(d.extend(Ac, e.spinner, Bc, {direction: Yd ? -1 : 1})), Gc(), Hc(), e.autoplay && t(e.autoplay), Td = n(e.thumbwidth) || Uc, Ud = n(e.thumbheight) || Uc, Ne.ok = Pe.ok = e.trackpad && !Mc, o(), ed(e, [Le]), Od = "thumbs" === Nd, Od ? (lc(zd, "navThumb"), Ad = Be, he = Zc, J(oe, d.Fotorama.jst.style({
                w: Td,
                h: Ud,
                b: e.thumbborderwidth,
                m: e.thumbmargin,
                s: je,
                q: !Jc
            })), ye.addClass(Lb).removeClass(Kb)) : "dots" === Nd ? (lc(zd, "navDot"), Ad = Ae, he = Yc, ye.addClass(Kb).removeClass(Lb)) : (Nd = !1, ye.removeClass(Lb + " " + Kb)), Nd && (Pd ? xe.insertBefore(re) : xe.insertAfter(re), wc.nav = !1, wc(Ad, ze, "nav")), Qd = e.allowfullscreen, Qd ? (De.prependTo(re), Rd = Kc && "native" === Qd) : (De.detach(), Rd = !1), a(Sd, ob), a(!Sd, pb), a(!e.captions, vb), a(Yd, tb), a("always" !== e.arrows, wb), Xd = e.shadows && !Mc, a(!Xd, rb), qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")), Ke = d.extend({}, e)
        }

        function x(a) {
            return 0 > a ? (zd + a % zd) % zd : a >= zd ? a % zd : a
        }

        function y(a) {
            return h(a, 0, zd - 1)
        }

        function z(a) {
            return Md ? x(a) : y(a)
        }

        function E(a) {
            return a > 0 || Md ? a - 1 : !1
        }

        function U(a) {
            return zd - 1 > a || Md ? a + 1 : !1
        }

        function $() {
            Me.min = Md ? -1 / 0 : -r(zd - 1, Le.w, e.margin, Fd), Me.max = Md ? 1 / 0 : -r(0, Le.w, e.margin, Fd), Me.snap = Le.w + e.margin
        }

        function bb() {
            Oe.min = Math.min(0, Le.nw - ze.width()), Oe.max = 0, ze.toggleClass(Bb, !(Oe.noMove = Oe.min === Oe.max))
        }

        function cb(a, b, c) {
            if ("number" == typeof a) {
                a = new Array(a);
                var e = !0
            }
            return d.each(a, function (a, d) {
                if (e && (d = a), "number" == typeof d) {
                    var f = yd[x(d)];
                    if (f) {
                        var g = "$" + b + "Frame", h = f[g];
                        c.call(this, a, d, f, h, g, h && h.data())
                    }
                }
            })
        }

        function fb(a, b, c, d) {
            (!$d || "*" === $d && d === Ld) && (a = q(e.width) || q(a) || Vc, b = q(e.height) || q(b) || Wc, ie.resize({
                width: a,
                ratio: e.ratio || c || a / b
            }, 0, d !== Ld && "*"))
        }

        function Pb(a, b, c, f, g, h) {
            cb(a, b, function (a, i, j, k, l, m) {
                function n(a) {
                    var b = x(i);
                    fd(a, {index: b, src: w, frame: yd[b]})
                }

                function o() {
                    t.remove(), d.Fotorama.cache[w] = "error", j.html && "stage" === b || !y || y === w ? (!w || j.html || r ? "stage" === b && (k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc), n("load"), fb()) : (k.trigger("f:error").removeClass(ac).addClass(_b), n("error")), m.state = "error", !(zd > 1 && yd[i] === j) || j.html || j.deleted || j.video || r || (j.deleted = !0, ie.splice(i, 1))) : (j[v] = w = y, Pb([i], b, c, f, g, !0))
                }

                function p() {
                    d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || {
                        width: s.width,
                        height: s.height,
                        ratio: s.width / s.height
                    }, fb(u.measures.width, u.measures.height, u.measures.ratio, i), t.off("load error").addClass(fc + (r ? " " + gc : "")).prependTo(k), I(t, (d.isFunction(c) ? c() : c) || Le, f || j.fit || e.fit, g || j.position || e.position), d.Fotorama.cache[w] = m.state = "loaded", setTimeout(function () {
                        k.trigger("f:load").removeClass(ac + " " + _b).addClass(bc + " " + (r ? cc : dc)), "stage" === b ? n("load") : (j.thumbratio === $c || !j.thumbratio && e.thumbratio === $c) && (j.thumbratio = u.measures.ratio, vd())
                    }, 0)
                }

                function q() {
                    var a = 10;
                    G(function () {
                        return !fe || !a-- && !Mc
                    }, function () {
                        p()
                    })
                }

                if (k) {
                    var r = ie.fullScreen && j.full && j.full !== j.img && !m.$full && "stage" === b;
                    if (!m.$img || h || r) {
                        var s = new Image, t = d(s), u = t.data();
                        m[r ? "$full" : "$img"] = t;
                        var v = "stage" === b ? r ? "full" : "img" : "thumb", w = j[v],
                            y = r ? null : j["stage" === b ? "thumb" : "img"];
                        if ("navThumb" === b && (k = m.$wrap), !w) return void o();
                        d.Fotorama.cache[w] ? !function z() {
                            "error" === d.Fotorama.cache[w] ? o() : "loaded" === d.Fotorama.cache[w] ? setTimeout(q, 0) : setTimeout(z, 100)
                        }() : (d.Fotorama.cache[w] = "*", t.on("load", q).on("error", o)), m.state = "", s.src = w
                    }
                }
            })
        }

        function Qb(a) {
            Ie.append(Bd.spin().el).appendTo(a)
        }

        function Rb() {
            Ie.detach(), Bd && Bd.stop()
        }

        function Sb() {
            var a = Dd[Xc];
            a && !a.data().state && (Qb(a), a.on("f:load f:error", function () {
                a.off("f:load f:error"), Rb()
            }))
        }

        function ec(a) {
            W(a, sd), X(a, function () {
                setTimeout(function () {
                    Q(ye)
                }, 0), Rc({time: Vd, guessIndex: d(this).data().eq, minMax: Oe})
            })
        }

        function lc(a, b) {
            cb(a, b, function (a, c, e, f, g, h) {
                if (!f) {
                    f = e[g] = qe[g].clone(), h = f.data(), h.data = e;
                    var i = f[0];
                    "stage" === b ? (e.html && d('<div class="' + kc + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f), e.caption && d(N(oc, N(pc, e.caption))).appendTo(f), e.video && f.addClass(zb).append(Fe.clone()), X(i, function () {
                        setTimeout(function () {
                            Q(re)
                        }, 0), pd({index: h.eq, user: !0})
                    }), te = te.add(f)) : "navDot" === b ? (ec(i), Ae = Ae.add(f)) : "navThumb" === b && (ec(i), h.$wrap = f.children(":first"), Be = Be.add(f), e.video && h.$wrap.append(Fe.clone()))
                }
            })
        }

        function sc(a, b, c, d) {
            return a && a.length && I(a, b, c, d)
        }

        function tc(a) {
            cb(a, "stage", function (a, b, c, f, g, h) {
                if (f) {
                    var i = x(b), j = c.fit || e.fit, k = c.position || e.position;
                    h.eq = i, Re[Xc][i] = f.css(d.extend({left: Sd ? 0 : r(b, Le.w, e.margin, Fd)}, Sd && l(0))), F(f[0]) && (f.appendTo(se), md(c.$video)), sc(h.$img, Le, j, k), sc(h.$full, Le, j, k)
                }
            })
        }

        function uc(a, b) {
            if ("thumbs" === Nd && !isNaN(a)) {
                var c = -a, f = -a + Le.nw;
                Be.each(function () {
                    var a = d(this), g = a.data(), h = g.eq, i = function () {
                        return {h: Ud, w: g.w}
                    }, j = i(), k = yd[h] || {}, l = k.thumbfit || e.thumbfit, m = k.thumbposition || e.thumbposition;
                    j.w = g.w, g.l + g.w < c || g.l > f || sc(g.$img, j, l, m) || b && Pb([h], "navThumb", i, l, m)
                })
            }
        }

        function wc(a, b, c) {
            if (!wc[c]) {
                var f = "nav" === c && Od, g = 0;
                b.append(a.filter(function () {
                    for (var a, b = d(this), c = b.data(), e = 0, f = yd.length; f > e; e++) if (c.data === yd[e]) {
                        a = !0, c.eq = e;
                        break
                    }
                    return a || b.remove() && !1
                }).sort(function (a, b) {
                    return d(a).data().eq - d(b).data().eq
                }).each(function () {
                    if (f) {
                        var a = d(this), b = a.data(), c = Math.round(Ud * b.data.thumbratio) || Td;
                        b.l = g, b.w = c, a.css({width: c}), g += c + e.thumbmargin
                    }
                })), wc[c] = !0
            }
        }

        function xc(a) {
            return a - Se > Le.w / 3
        }

        function yc(a) {
            return !(Md || Je + a && Je - zd + a || Cd)
        }

        function Gc() {
            var a = yc(0), b = yc(1);
            ue.toggleClass(Eb, a).attr(V(a)), ve.toggleClass(Eb, b).attr(V(b))
        }

        function Hc() {
            Ne.ok && (Ne.prevent = {"<": yc(0), ">": yc(1)})
        }

        function Lc(a) {
            var b, c, d = a.data();
            return Od ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {
                c: b + c / 2,
                min: -b + 10 * e.thumbmargin,
                max: -b + Le.w - c - 10 * e.thumbmargin
            }
        }

        function Oc(a) {
            var b = Dd[he].data();
            _(Ce, {time: 1.2 * a, pos: b.l, width: b.w - 2 * e.thumbborderwidth})
        }

        function Rc(a) {
            var b = yd[a.guessIndex][he];
            if (b) {
                var c = Oe.min !== Oe.max, d = a.minMax || c && Lc(Dd[he]),
                    e = c && (a.keep && Rc.l ? Rc.l : h((a.coo || Le.nw / 2) - Lc(b).c, d.min, d.max)),
                    f = c && h(e, Oe.min, Oe.max), g = 1.1 * a.time;
                _(ze, {
                    time: g, pos: f || 0, onEnd: function () {
                        uc(f, !0)
                    }
                }), ld(ye, K(f, Oe.min, Oe.max)), Rc.l = e
            }
        }

        function Tc() {
            _c(he), Qe[he].push(Dd[he].addClass(Wb))
        }

        function _c(a) {
            for (var b = Qe[a]; b.length;) b.shift().removeClass(Wb)
        }

        function bd(a) {
            var b = Re[a];
            d.each(Ed, function (a, c) {
                delete b[x(c)]
            }), d.each(b, function (a, c) {
                delete b[a], c.detach()
            })
        }

        function cd(a) {
            Fd = Gd = Je;
            var b = Dd[Xc];
            b && (_c(Xc), Qe[Xc].push(b.addClass(Wb)), a || ie.show.onEnd(!0), v(se, 0, !0), bd(Xc), tc(Ed), $(), bb())
        }

        function ed(a, b) {
            a && d.each(b, function (b, c) {
                c && d.extend(c, {
                    width: a.width || c.width,
                    height: a.height,
                    minwidth: a.minwidth,
                    maxwidth: a.maxwidth,
                    minheight: a.minheight,
                    maxheight: a.maxheight,
                    ratio: S(a.ratio)
                })
            })
        }

        function fd(b, c) {
            a.trigger(ib + ":" + b, [ie, c])
        }

        function gd() {
            clearTimeout(hd.t), fe = 1, e.stopautoplayontouch ? ie.stopAutoplay() : ce = !0
        }

        function hd() {
            fe && (e.stopautoplayontouch || (id(), jd()), hd.t = setTimeout(function () {
                fe = 0
            }, Qc + Pc))
        }

        function id() {
            ce = !(!Cd && !de)
        }

        function jd() {
            if (clearTimeout(jd.t), G.stop(jd.w), !e.autoplay || ce) return void (ie.autoplay && (ie.autoplay = !1, fd("stopautoplay")));
            ie.autoplay || (ie.autoplay = !0, fd("startautoplay"));
            var a = Je, b = Dd[Xc].data();
            jd.w = G(function () {
                return b.state || a !== Je
            }, function () {
                jd.t = setTimeout(function () {
                    if (!ce && a === Je) {
                        var b = Kd, c = yd[b][Xc].data();
                        jd.w = G(function () {
                            return c.state || b !== Kd
                        }, function () {
                            ce || b !== Kd || ie.show(Md ? Z(!Yd) : Kd)
                        })
                    }
                }, e.autoplay)
            })
        }

        function kd() {
            ie.fullScreen && (ie.fullScreen = !1, Kc && vc.cancel(le), Dc.removeClass(jb), Cc.removeClass(jb), a.removeClass(Zb).insertAfter(pe), Le = d.extend({}, ee), md(Cd, !0, !0), rd("x", !1), ie.resize(), Pb(Ed, "stage"), Q(Ec, ae, _d), fd("fullscreenexit"))
        }

        function ld(a, b) {
            Xd && (a.removeClass(Ub + " " + Vb), b && !Cd && a.addClass(b.replace(/^|\s/g, " " + Tb + "--")))
        }

        function md(a, b, c) {
            b && (qe.removeClass(nb), Cd = !1, o()), a && a !== Cd && (a.remove(), fd("unloadvideo")), c && (id(), jd())
        }

        function nd(a) {
            qe.toggleClass(qb, a)
        }

        function od(a) {
            if (!Me.flow) {
                var b = a ? a.pageX : od.x, c = b && !yc(xc(b)) && e.click;
                od.p !== c && re.toggleClass(Cb, c) && (od.p = c, od.x = b)
            }
        }

        function pd(a) {
            clearTimeout(pd.t), e.clicktransition && e.clicktransition !== e.transition ? setTimeout(function () {
                var b = e.transition;
                ie.setOptions({transition: e.clicktransition}), Wd = b, pd.t = setTimeout(function () {
                    ie.show(a)
                }, 10)
            }, 0) : ie.show(a)
        }

        function qd(a, b) {
            var c = a.target, f = d(c);
            f.hasClass(mc) ? ie.playVideo() : c === Ee ? ie.toggleFullScreen() : Cd ? c === He && md(Cd, !0, !0) : b ? nd() : e.click && pd({
                index: a.shiftKey || Z(xc(a._x)),
                slow: a.altKey,
                user: !0
            })
        }

        function rd(a, b) {
            Me[a] = Oe[a] = b
        }

        function sd(a) {
            var b = d(this).data().eq;
            pd({index: b, slow: a.altKey, user: !0, coo: a._x - ye.offset().left})
        }

        function td(a) {
            pd({index: we.index(this) ? ">" : "<", slow: a.altKey, user: !0})
        }

        function ud(a) {
            X(a, function () {
                setTimeout(function () {
                    Q(re)
                }, 0), nd(!1)
            })
        }

        function vd() {
            if (m(), u(), !vd.i) {
                vd.i = !0;
                var a = e.startindex;
                (a || e.hash && c.hash) && (Ld = L(a || c.hash.replace(/^#/, ""), yd, 0 === ie.index || a, a)), Je = Fd = Gd = Hd = Ld = z(Ld) || 0
            }
            if (zd) {
                if (wd()) return;
                Cd && md(Cd, !0), Ed = [], bd(Xc), vd.ok = !0, ie.show({index: Je, time: 0}), ie.resize()
            } else ie.destroy()
        }

        function wd() {
            return !wd.f === Yd ? (wd.f = Yd, Je = zd - 1 - Je, ie.reverse(), !0) : void 0
        }

        function xd() {
            xd.ok || (xd.ok = !0, fd("ready"))
        }

        Cc = d("html"), Dc = d("body");
        var yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd,
            Zd, $d, _d, ae, be, ce, de, ee, fe, ge, he, ie = this, je = d.now(), ke = ib + je, le = a[0], me = 1,
            ne = a.data(), oe = d("<style></style>"), pe = d(N(Yb)), qe = d(N(kb)), re = d(N(xb)).appendTo(qe),
            se = (re[0], d(N(Ab)).appendTo(re)), te = d(), ue = d(N(Db + " " + Fb + rc)), ve = d(N(Db + " " + Gb + rc)),
            we = ue.add(ve).appendTo(re), xe = d(N(Ib)), ye = d(N(Hb)).appendTo(xe), ze = d(N(Jb)).appendTo(ye),
            Ae = d(), Be = d(), Ce = (se.data(), ze.data(), d(N(jc)).appendTo(ze)), De = d(N($b + rc)), Ee = De[0],
            Fe = d(N(mc)), Ge = d(N(nc)).appendTo(re), He = Ge[0], Ie = d(N(qc)), Je = !1, Ke = {}, Le = {}, Me = {},
            Ne = {}, Oe = {}, Pe = {}, Qe = {}, Re = {}, Se = 0, Te = [];
        qe[Xc] = d(N(yb)), qe[Zc] = d(N(Mb + " " + Ob + rc, N(ic))), qe[Yc] = d(N(Mb + " " + Nb + rc, N(hc))), Qe[Xc] = [], Qe[Zc] = [], Qe[Yc] = [], Re[Xc] = {}, qe.addClass(Ic ? mb : lb).toggleClass(qb, !e.controlsonstart), ne.fotorama = this, ie.startAutoplay = function (a) {
            return ie.autoplay ? this : (ce = de = !1, t(a || e.autoplay), jd(), this)
        }, ie.stopAutoplay = function () {
            return ie.autoplay && (ce = de = !0, jd()), this
        }, ie.show = function (a) {
            var b;
            "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? Gd + 1 : "<" === b ? Gd - 1 : "<<" === b ? 0 : ">>" === b ? zd - 1 : b, b = isNaN(b) ? L(b, yd, !0) : b, b = "undefined" == typeof b ? Je || 0 : b, ie.activeIndex = Je = z(b), Id = E(Je), Jd = U(Je), Kd = x(Je + (Yd ? -1 : 1)), Ed = [Je, Id, Jd], Gd = Md ? b : Je;
            var c = Math.abs(Hd - Gd), d = w(a.time, function () {
                return Math.min(Vd * (1 + (c - 1) / 12), 2 * Vd)
            }), f = a.overPos;
            a.slow && (d *= 10);
            var g = Dd;
            ie.activeFrame = Dd = yd[Je];
            var i = g === Dd && !a.user;
            md(Cd, Dd.i !== yd[x(Fd)].i), lc(Ed, "stage"), tc(Mc ? [Gd] : [Gd, E(Gd), U(Gd)]), rd("go", !0), i || fd("show", {
                user: a.user,
                time: d
            }), ce = !0;
            var j = ie.show.onEnd = function (b) {
                if (!j.ok) {
                    if (j.ok = !0, b || cd(!0), i || fd("showend", {user: a.user}), !b && Wd && Wd !== e.transition) return ie.setOptions({transition: Wd}), void (Wd = !1);
                    Sb(), Pb(Ed, "stage"), rd("go", !1), Hc(), od(), id(), jd()
                }
            };
            if (Sd) {
                var k = Dd[Xc], l = Je !== Hd ? yd[Hd][Xc] : null;
                ab(k, l, te, {time: d, method: e.transition, onEnd: j}, Te)
            } else _(se, {pos: -r(Gd, Le.w, e.margin, Fd), overPos: f, time: d, onEnd: j});
            if (Gc(), Nd) {
                Tc();
                var m = y(Je + h(Gd - Hd, -1, 1));
                Rc({
                    time: d,
                    coo: m !== Je && a.coo,
                    guessIndex: "undefined" != typeof a.coo ? m : Je,
                    keep: i
                }), Od && Oc(d)
            }
            return be = "undefined" != typeof Hd && Hd !== Je, Hd = Je, e.hash && be && !ie.eq && H(Dd.id || Je + 1), this
        }, ie.requestFullScreen = function () {
            return Qd && !ie.fullScreen && (_d = Ec.scrollTop(), ae = Ec.scrollLeft(), Q(Ec), rd("x", !0), ee = d.extend({}, Le), a.addClass(Zb).appendTo(Dc.addClass(jb)), Cc.addClass(jb), md(Cd, !0, !0), ie.fullScreen = !0, Rd && vc.request(le), ie.resize(), Pb(Ed, "stage"), Sb(), fd("fullscreenenter")), this
        }, ie.cancelFullScreen = function () {
            return Rd && vc.is() ? vc.cancel(b) : kd(), this
        }, ie.toggleFullScreen = function () {
            return ie[(ie.fullScreen ? "cancel" : "request") + "FullScreen"]()
        }, T(b, vc.event, function () {
            !yd || vc.is() || Cd || kd()
        }), ie.resize = function (a) {
            if (!yd) return this;
            var b = arguments[1] || 0, c = arguments[2];
            ed(ie.fullScreen ? {
                width: "100%",
                maxwidth: null,
                minwidth: null,
                height: "100%",
                maxheight: null,
                minheight: null
            } : R(a), [Le, c || ie.fullScreen || e]);
            var d = Le.width, f = Le.height, g = Le.ratio, i = Ec.height() - (Nd ? ye.height() : 0);
            return q(d) && (qe.addClass(ub).css({
                width: d,
                minWidth: Le.minwidth || 0,
                maxWidth: Le.maxwidth || ad
            }), d = Le.W = Le.w = qe.width(), Le.nw = Nd && p(e.navwidth, d) || d, e.glimpse && (Le.w -= Math.round(2 * (p(e.glimpse, d) || 0))), se.css({
                width: Le.w,
                marginLeft: (Le.W - Le.w) / 2
            }), f = p(f, i), f = f || g && d / g, f && (d = Math.round(d), f = Le.h = Math.round(h(f, p(Le.minheight, i), p(Le.maxheight, i))), re.stop().animate({
                width: d,
                height: f
            }, b, function () {
                qe.removeClass(ub)
            }), cd(), Nd && (ye.stop().animate({width: Le.nw}, b), Rc({
                guessIndex: Je,
                time: b,
                keep: !0
            }), Od && wc.nav && Oc(b)), $d = c || !0, xd())), Se = re.offset().left, this
        }, ie.setOptions = function (a) {
            return d.extend(e, a), vd(), this
        }, ie.shuffle = function () {
            return yd && O(yd) && vd(), this
        }, ie.destroy = function () {
            return ie.cancelFullScreen(), ie.stopAutoplay(), yd = ie.data = null, j(), Ed = [], bd(Xc), vd.ok = !1, this
        }, ie.playVideo = function () {
            var a = Dd, b = a.video, c = Je;
            return "object" == typeof b && a.videoReady && (Rd && ie.fullScreen && ie.cancelFullScreen(), G(function () {
                return !vc.is() || c !== Je
            }, function () {
                c === Je && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Xc]), qe.addClass(nb), Cd = a.$video, o(), we.blur(), De.blur(), fd("loadvideo"))
            })), this
        }, ie.stopVideo = function () {
            return md(Cd, !0, !0), this
        }, re.on("mousemove", od), Me = db(se, {
            onStart: gd, onMove: function (a, b) {
                ld(re, b.edge)
            }, onTouchEnd: hd, onEnd: function (a) {
                ld(re);
                var b = (Nc && !ge || a.touch) && e.arrows && "always" !== e.arrows;
                if (a.moved || b && a.pos !== a.newPos && !a.control) {
                    var c = s(a.newPos, Le.w, e.margin, Fd);
                    ie.show({index: c, time: Sd ? Vd : a.time, overPos: a.overPos, user: !0})
                } else a.aborted || a.control || qd(a.startEvent, b)
            }, timeLow: 1, timeHigh: 1, friction: 2, select: "." + Xb + ", ." + Xb + " *", $wrap: re
        }), Oe = db(ze, {
            onStart: gd, onMove: function (a, b) {
                ld(ye, b.edge)
            }, onTouchEnd: hd, onEnd: function (a) {
                function b() {
                    Rc.l = a.newPos, id(), jd(), uc(a.newPos, !0)
                }

                if (a.moved) a.pos !== a.newPos ? (ce = !0, _(ze, {
                    time: a.time,
                    pos: a.newPos,
                    overPos: a.overPos,
                    onEnd: b
                }), uc(a.newPos), Xd && ld(ye, K(a.newPos, Oe.min, Oe.max))) : b(); else {
                    var c = a.$target.closest("." + Mb, ze)[0];
                    c && sd.call(c, a.startEvent)
                }
            }, timeLow: .5, timeHigh: 2, friction: 5, $wrap: ye
        }), Ne = eb(re, {
            shift: !0, onEnd: function (a, b) {
                gd(), hd(), ie.show({index: b, slow: a.altKey})
            }
        }), Pe = eb(ye, {
            onEnd: function (a, b) {
                gd(), hd();
                var c = v(ze) + .25 * b;
                ze.css(k(h(c, Oe.min, Oe.max))), Xd && ld(ye, K(c, Oe.min, Oe.max)), Pe.prevent = {
                    "<": c >= Oe.max,
                    ">": c <= Oe.min
                }, clearTimeout(Pe.t), Pe.t = setTimeout(function () {
                    Rc.l = c, uc(c, !0)
                }, Pc), uc(c)
            }
        }), qe.hover(function () {
            setTimeout(function () {
                fe || nd(!(ge = !0))
            }, 0)
        }, function () {
            ge && nd(!(ge = !1))
        }), M(we, function (a) {
            Y(a), td.call(this, a)
        }, {
            onStart: function () {
                gd(), Me.control = !0
            }, onTouchEnd: hd
        }), we.each(function () {
            W(this, function (a) {
                td.call(this, a)
            }), ud(this)
        }), W(Ee, ie.toggleFullScreen), ud(Ee), d.each("load push pop shift unshift reverse sort splice".split(" "), function (a, b) {
            ie[b] = function () {
                return yd = yd || [], "load" !== b ? Array.prototype[b].apply(yd, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (yd = P(arguments[0])), vd(), ie
            }
        }), vd()
    }, d.fn.fotorama = function (b) {
        return this.each(function () {
            var c = this, e = d(this), f = e.data(), g = f.fotorama;
            g ? g.setOptions(b, !0) : G(function () {
                return !E(c)
            }, function () {
                f.urtext = e.html(), new d.Fotorama(e, d.extend({}, cd, a.fotoramaDefaults, b, f))
            })
        })
    }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function (a) {
        {
            var b, c = "";
            tc.escape
        }
        return c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
    }, d.Fotorama.jst.video = function (a) {
        function b() {
            c += d.call(arguments, "")
        }

        var c = "", d = (tc.escape, Array.prototype.join);
        return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>\n'
    }, d(function () {
        d("." + ib + ':not([data-auto="false"])').fotorama()
    })
}(window, document, location, "undefined" != typeof jQuery && jQuery);

/*------------------------------------------
  10. jQuery UI - v1.11.4 - 2015-12-02
-------------------------------------------*/
/*! jQuery UI - v1.11.4 - 2015-12-02
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function () {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (i) {
            var s = e.attr(i, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                n = n.parent()
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        }, call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0, n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, n = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {widgetEventPrefix: a ? r.widgetEventPrefix || t : t}, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (a) {
            var o = "string" == typeof a, r = n.call(arguments, 1), h = this;
            return o ? this.each(function () {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            })), h
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                n[t] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                o[t] = i
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }

                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function () {
        a = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!a) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this, s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options, i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i, s, n, a, o, r, h, l, u = this, d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - h.left - a.width() / 2,
                top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function (e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var e = this.options.max, t = this._valueMin(), i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = "" + e, i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshValue: function () {
            var t, i, s, n, a, o = this.options.range, r = this.options, h = this,
                l = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({width: i - t + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({height: i - t + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), t = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({width: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({height: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function (t) {
                var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                }
                switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a)
                }
                this._slide(t, o, n)
            }, keyup: function (t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
});

/*========= Lightbox =========*/
/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

    function Lightbox(options) {
        this.album = [];
        this.currentImageIndex = void 0;
        this.init();

        // options
        this.options = $.extend({}, this.constructor.defaults);
        this.option(options);
    }

    // Descriptions of all options available on the demo site:
    // http://lokeshdhakar.com/projects/lightbox2/index.html#options
    Lightbox.defaults = {
        albumLabel: 'Image %1 of %2',
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 600,
        fitImagesInViewport: true,
        imageFadeDuration: 600,
        // maxWidth: 800,
        // maxHeight: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true,
        wrapAround: false,
        disableScrolling: false,
        /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
        sanitizeTitle: false
    };

    Lightbox.prototype.option = function (options) {
        $.extend(this.options, options);
    };

    Lightbox.prototype.imageCountLabel = function (currentImageNum, totalImages) {
        return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
    };

    Lightbox.prototype.init = function () {
        var self = this;
        // Both enable and build methods require the body tag to be in the DOM.
        $(document).ready(function () {
            self.enable();
            self.build();
        });
    };

    // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
    // that contain 'lightbox'. When these are clicked, start lightbox.
    Lightbox.prototype.enable = function () {
        var self = this;
        $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function (event) {
            self.start($(event.currentTarget));
            return false;
        });
    };

    // Build html for the lightbox and the overlay.
    // Attach event handlers to the new DOM elements. click click click
    Lightbox.prototype.build = function () {
        var self = this;
        $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

        // Cache jQuery objects
        this.$lightbox = $('#lightbox');
        this.$overlay = $('#lightboxOverlay');
        this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
        this.$container = this.$lightbox.find('.lb-container');
        this.$image = this.$lightbox.find('.lb-image');
        this.$nav = this.$lightbox.find('.lb-nav');

        // Store css values for future lookup
        this.containerPadding = {
            top: parseInt(this.$container.css('padding-top'), 10),
            right: parseInt(this.$container.css('padding-right'), 10),
            bottom: parseInt(this.$container.css('padding-bottom'), 10),
            left: parseInt(this.$container.css('padding-left'), 10)
        };

        this.imageBorderWidth = {
            top: parseInt(this.$image.css('border-top-width'), 10),
            right: parseInt(this.$image.css('border-right-width'), 10),
            bottom: parseInt(this.$image.css('border-bottom-width'), 10),
            left: parseInt(this.$image.css('border-left-width'), 10)
        };

        // Attach event handlers to the newly minted DOM elements
        this.$overlay.hide().on('click', function () {
            self.end();
            return false;
        });

        this.$lightbox.hide().on('click', function (event) {
            if ($(event.target).attr('id') === 'lightbox') {
                self.end();
            }
            return false;
        });

        this.$outerContainer.on('click', function (event) {
            if ($(event.target).attr('id') === 'lightbox') {
                self.end();
            }
            return false;
        });

        this.$lightbox.find('.lb-prev').on('click', function () {
            if (self.currentImageIndex === 0) {
                self.changeImage(self.album.length - 1);
            } else {
                self.changeImage(self.currentImageIndex - 1);
            }
            return false;
        });

        this.$lightbox.find('.lb-next').on('click', function () {
            if (self.currentImageIndex === self.album.length - 1) {
                self.changeImage(0);
            } else {
                self.changeImage(self.currentImageIndex + 1);
            }
            return false;
        });

        /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
        this.$nav.on('mousedown', function (event) {
            if (event.which === 3) {
                self.$nav.css('pointer-events', 'none');

                self.$lightbox.one('contextmenu', function () {
                    setTimeout(function () {
                        this.$nav.css('pointer-events', 'auto');
                    }.bind(self), 0);
                });
            }
        });


        this.$lightbox.find('.lb-loader, .lb-close').on('click', function () {
            self.end();
            return false;
        });
    };

    // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
    Lightbox.prototype.start = function ($link) {
        var self = this;
        var $window = $(window);

        $window.on('resize', $.proxy(this.sizeOverlay, this));

        $('select, object, embed').css({
            visibility: 'hidden'
        });

        this.sizeOverlay();

        this.album = [];
        var imageNumber = 0;

        function addToAlbum($link) {
            self.album.push({
                link: $link.attr('href'),
                title: $link.attr('data-title') || $link.attr('title')
            });
        }

        // Support both data-lightbox attribute and rel attribute implementations
        var dataLightboxValue = $link.attr('data-lightbox');
        var $links;

        if (dataLightboxValue) {
            $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
            for (var i = 0; i < $links.length; i = ++i) {
                addToAlbum($($links[i]));
                if ($links[i] === $link[0]) {
                    imageNumber = i;
                }
            }
        } else {
            if ($link.attr('rel') === 'lightbox') {
                // If image is not part of a set
                addToAlbum($link);
            } else {
                // If image is part of a set
                $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
                for (var j = 0; j < $links.length; j = ++j) {
                    addToAlbum($($links[j]));
                    if ($links[j] === $link[0]) {
                        imageNumber = j;
                    }
                }
            }
        }

        // Position Lightbox
        var top = $window.scrollTop() + this.options.positionFromTop;
        var left = $window.scrollLeft();
        this.$lightbox.css({
            top: top + 'px',
            left: left + 'px'
        }).fadeIn(this.options.fadeDuration);

        // Disable scrolling of the page while open
        if (this.options.disableScrolling) {
            $('body').addClass('lb-disable-scrolling');
        }

        this.changeImage(imageNumber);
    };

    // Hide most UI elements in preparation for the animated resizing of the lightbox.
    Lightbox.prototype.changeImage = function (imageNumber) {
        var self = this;

        this.disableKeyboardNav();
        var $image = this.$lightbox.find('.lb-image');

        this.$overlay.fadeIn(this.options.fadeDuration);

        $('.lb-loader').fadeIn('slow');
        this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

        this.$outerContainer.addClass('animating');

        // When image to show is preloaded, we send the width and height to sizeContainer()
        var preloader = new Image();
        preloader.onload = function () {
            var $preloader;
            var imageHeight;
            var imageWidth;
            var maxImageHeight;
            var maxImageWidth;
            var windowHeight;
            var windowWidth;

            $image.attr('src', self.album[imageNumber].link);

            $preloader = $(preloader);

            $image.width(preloader.width);
            $image.height(preloader.height);

            if (self.options.fitImagesInViewport) {
                // Fit image inside the viewport.
                // Take into account the border around the image and an additional 10px gutter on each side.

                windowWidth = $(window).width();
                windowHeight = $(window).height();
                maxImageWidth = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
                maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;

                // Check if image size is larger then maxWidth|maxHeight in settings
                if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
                    maxImageWidth = self.options.maxWidth;
                }
                if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
                    maxImageHeight = self.options.maxHeight;
                }

                // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
                // option than we need to size down while maintaining the aspect ratio.
                if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
                    if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
                        imageWidth = maxImageWidth;
                        imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight);
                    } else {
                        imageHeight = maxImageHeight;
                        imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight);
                    }
                }
            }
            self.sizeContainer($image.width(), $image.height());
        };

        preloader.src = this.album[imageNumber].link;
        this.currentImageIndex = imageNumber;
    };

    // Stretch overlay to fit the viewport
    Lightbox.prototype.sizeOverlay = function () {
        this.$overlay
            .width($(document).width())
            .height($(document).height());
    };

    // Animate the size of the lightbox to fit the image we are showing
    Lightbox.prototype.sizeContainer = function (imageWidth, imageHeight) {
        var self = this;

        var oldWidth = this.$outerContainer.outerWidth();
        var oldHeight = this.$outerContainer.outerHeight();
        var newWidth = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
        var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function postResize() {
            self.$lightbox.find('.lb-dataContainer').width(newWidth);
            self.$lightbox.find('.lb-prevLink').height(newHeight);
            self.$lightbox.find('.lb-nextLink').height(newHeight);
            self.showImage();
        }

        if (oldWidth !== newWidth || oldHeight !== newHeight) {
            this.$outerContainer.animate({
                width: newWidth,
                height: newHeight
            }, this.options.resizeDuration, 'swing', function () {
                postResize();
            });
        } else {
            postResize();
        }
    };

    // Display the image and its details and begin preload neighboring images.
    Lightbox.prototype.showImage = function () {
        this.$lightbox.find('.lb-loader').stop(true).hide();
        this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

        this.updateNav();
        this.updateDetails();
        this.preloadNeighboringImages();
        this.enableKeyboardNav();
    };

    // Display previous and next navigation if appropriate.
    Lightbox.prototype.updateNav = function () {
        // Check to see if the browser supports touch events. If so, we take the conservative approach
        // and assume that mouse hover events are not supported and always show prev/next navigation
        // arrows in image sets.
        var alwaysShowNav = false;
        try {
            document.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
        } catch (e) {
        }

        this.$lightbox.find('.lb-nav').show();

        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (alwaysShowNav) {
                    this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
                }
                this.$lightbox.find('.lb-prev, .lb-next').show();
            } else {
                if (this.currentImageIndex > 0) {
                    this.$lightbox.find('.lb-prev').show();
                    if (alwaysShowNav) {
                        this.$lightbox.find('.lb-prev').css('opacity', '1');
                    }
                }
                if (this.currentImageIndex < this.album.length - 1) {
                    this.$lightbox.find('.lb-next').show();
                    if (alwaysShowNav) {
                        this.$lightbox.find('.lb-next').css('opacity', '1');
                    }
                }
            }
        }
    };

    // Display caption, image number, and closing button.
    Lightbox.prototype.updateDetails = function () {
        var self = this;

        // Enable anchor clicks in the injected caption html.
        // Thanks Nate Wright for the fix. @https://github.com/NateWr
        if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
            this.album[this.currentImageIndex].title !== '') {
            var $caption = this.$lightbox.find('.lb-caption');
            if (this.options.sanitizeTitle) {
                $caption.text(this.album[this.currentImageIndex].title);
            } else {
                $caption.html(this.album[this.currentImageIndex].title);
            }
            $caption.fadeIn('fast')
                .find('a').on('click', function (event) {
                if ($(this).attr('target') !== undefined) {
                    window.open($(this).attr('href'), $(this).attr('target'));
                } else {
                    location.href = $(this).attr('href');
                }
            });
        }

        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
        } else {
            this.$lightbox.find('.lb-number').hide();
        }

        this.$outerContainer.removeClass('animating');

        this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
            return self.sizeOverlay();
        });
    };

    // Preload previous and next images in set.
    Lightbox.prototype.preloadNeighboringImages = function () {
        if (this.album.length > this.currentImageIndex + 1) {
            var preloadNext = new Image();
            preloadNext.src = this.album[this.currentImageIndex + 1].link;
        }
        if (this.currentImageIndex > 0) {
            var preloadPrev = new Image();
            preloadPrev.src = this.album[this.currentImageIndex - 1].link;
        }
    };

    Lightbox.prototype.enableKeyboardNav = function () {
        $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    };

    Lightbox.prototype.disableKeyboardNav = function () {
        $(document).off('.keyboard');
    };

    Lightbox.prototype.keyboardAction = function (event) {
        var KEYCODE_ESC = 27;
        var KEYCODE_LEFTARROW = 37;
        var KEYCODE_RIGHTARROW = 39;

        var keycode = event.keyCode;
        var key = String.fromCharCode(keycode).toLowerCase();
        if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
            this.end();
        } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
            if (this.currentImageIndex !== 0) {
                this.changeImage(this.currentImageIndex - 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
                this.changeImage(this.album.length - 1);
            }
        } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
            if (this.currentImageIndex !== this.album.length - 1) {
                this.changeImage(this.currentImageIndex + 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
                this.changeImage(0);
            }
        }
    };

    // Closing time. :-(
    Lightbox.prototype.end = function () {
        this.disableKeyboardNav();
        $(window).off('resize', this.sizeOverlay);
        this.$lightbox.fadeOut(this.options.fadeDuration);
        this.$overlay.fadeOut(this.options.fadeDuration);
        $('select, object, embed').css({
            visibility: 'visible'
        });
        if (this.options.disableScrolling) {
            $('body').removeClass('lb-disable-scrolling');
        }
    };

    return new Lightbox();
}));


/*================= Contact Form ================*/

$(function () {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

});


/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function (l, o, e) {
    "use strict";
    l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function (r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {id: p.scrollName + "-active"}).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case"fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case"slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
            o.preventDefault(), l("html, body").animate({scrollTop: a}, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function (r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);