! function(t, $) {
    "use strict";
    var n = t.document,
        e = function() {
            function e() {
                i(), o()
            }

            function i() {
                v.$window = $(t), v.$document = $(n), v.isiPod = g(), v.isSafari = u(), v.$navToggle = $("#site-navigation-toggle"), v.$body = $("body"), v.$isHomepage = v.$body.hasClass("home"), v.$isSingle = v.$body.hasClass("single"), v.$isWidgetized = v.$body.hasClass("page-template-widgetized-php"), v.$entryContent = v.$body.find(".entry-content"), v.$fullImages = v.$entryContent.find(".alignnone"), v.$windowWidth = v.$window.width(), v.$others = [], v.$page = 1, v.windowHeight = !0 === v.isiPod && !0 === v.isSafari ? t.screen.availHeight : v.$window.height()
            }

            function o() {
                v.$document.on("ready", function() {
                    f(), a(), l(), s(), r(), c()
                }), v.$window.on("resize", function() {
                    c()
                });
                var t = p(s, 200, !1);
                v.$window.resize(t), $("#scroll-comment-form").on("click", function(t) {
                    t.preventDefault(), $("html,body").animate({
                        scrollTop: $("#respond").offset().top
                    }, 200)
                }), $("#load-more-posts").on("click", function(t) {
                    t.preventDefault();
                    var n = $(this);
                    d(n)
                }), $("#scroll-to-content").on("click", function(t) {
                    t.preventDefault(), $("html,body").animate({
                        scrollTop: $("#main").offset().top - 80
                    }, 600)
                })
            }

            function a(t) {
                v.$navToggle.on("click", function(t) {
                    t.preventDefault();
                    var n = "site-nav-transition site-nav-drawer-open";
                    v.$body.toggleClass(n)
                }), $(".site-nav-overlay, .site-nav .close-nav").on("click", function(t) {
                    t.preventDefault();
                    var n = "site-nav-transition site-nav-drawer-open";
                    v.$body.toggleClass(n)
                })
            }

            function f() {
                -1 === n.cookie.indexOf("retina") && "devicePixelRatio" in t && 2 === t.devicePixelRatio && (n.cookie = "retina=" + t.devicePixelRatio + ";")
            }

            function g() {
                return /(iPhone|iPod)/g.test(navigator.userAgent)
            }

            function u() {
                return -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome")
            }

            function h(n, e) {
                for (var i = !0 === v.isiPod && !0 === v.isSafari ? t.screen.availHeight : v.$window.height(), o = 0, a = 0; a < e.length; a++) o += $(e[a]).outerHeight();
                var s = i - o - parseInt($("html").css("margin-top"));
                s > 0 && $(n).outerHeight(s)
            }

            function p(t, n, e) {
                var i, o, a, s, r;
                return function() {
                    a = this, o = arguments, s = new Date;
                    var c = function() {
                            var d = new Date - s;
                            n > d ? i = setTimeout(c, n - d) : (i = null, e || (r = t.apply(a, o)))
                        },
                        d = e && !i;
                    return i || (i = setTimeout(c, n)), d && (r = t.apply(a, o)), r
                }
            }
            var v = {};
            e()
        };
    t.Stag = new e
}(window, jQuery);