
! function (i) {
    "use strict";
    i(window).on("load", function () {
        i(".preloader-icon").delay(100).fadeOut(), setTimeout(function () {
            i(".preloader").addClass("loaded"), setTimeout(function () {
                i(".preloader").hide()
            }, 1500)
        }, 800)
    }), i("#navBtn").on("click", function () {
        i("#navBtn").toggleClass("is-active"), i("#sidebar").toggleClass("toggle")
    }), i("#sidebarBtn").on("click", function () {
        i("#navBtn").trigger("click")
    }), i(document).on("mouseup", function (e) {
        if (i("#sidebar").hasClass("toggle")) {
            var t = i("#sidebar");
            t.is(e.target) || 0 !== t.has(e.target).length || i("#navBtn").trigger("click")
        }
        if (i("#navbarSupportedContent").hasClass("show")) {
            var a = i(".navbar-toggler");
            a.is(e.target) || 0 !== a.has(e.target).length || a.trigger("click")
        }
    }), i(window).on("scroll", function () {
        var e = "#navbar";
        75 < i(e).offset().top ? i(e).addClass("scrolled") : i(e).removeClass("scrolled")
    }), i(document).on("click", 'a[data-scroll][href^="#"]', function (e) {
        var t = i("#navbar").height(),
            a = i(this).attr("href"),
            s = i(a);
        0 !== s.length && (e.preventDefault(), i("body, html").animate({
            scrollTop: s.offset().top - t
        }, 750))
    }), i("#navbar").onePageNav({
        currentClass: "active",
        navItems: ".nav-item > .nav-link",
        scrollSpeed: 500,
        scrollThreshold: .5,
        easing: "swing"
    });
    var e, s, t = 2500,
        n = 600,
        r = 1500;

    function o(a) {
        var e, s = (e = a).is(":last-child") ? e.parent().children().eq(0) : e.next();
        a.parents(".cd-headline").hasClass("clip") && a.parents(".cd-words-wrapper").animate({
            width: "2px"
        }, n, function () {
            var e, t;
            e = s, a.removeClass("is-visible").addClass("is-hidden"), e.removeClass("is-hidden").addClass("is-visible"), (t = s).parents(".cd-headline").hasClass("clip") && t.parents(".cd-words-wrapper").animate({
                width: t.width() + 10
            }, n, function () {
                setTimeout(function () {
                    o(t)
                }, r)
            })
        })
    }
    e = i(".cd-headline"), s = t, e.each(function () {
        var e = i(this);
        if (e.hasClass("clip")) {
            var t = e.find(".cd-words-wrapper"),
                a = t.width() + 10;
            t.css("width", a)
        }
        setTimeout(function () {
            o(e.find(".is-visible").eq(0))
        }, s)
    }), i(".about-area .btn.details").on("click", function () {
        i("#navBtn").toggleClass("is-active"), i("#sidebar").toggleClass("toggle")
    });
    var a = window.Shuffle,
        l = function (e) {
            this.element = e, this.shuffle = new a(e, {
                itemSelector: ".js-item",
                sizer: e.querySelector(".sizer-element")
            }), this._activeFilters = [], this.addFilterButtons()
        };
    l.prototype.addFilterButtons = function () {
        var e = document.querySelector(".filter-control");
        e && Array.from(e.children).forEach(function (e) {
            e.addEventListener("click", this._handleFilterClick.bind(this), !1)
        }, this)
    }, l.prototype._handleFilterClick = function (e) {
        var t = e.currentTarget.getAttribute("data-group");
        this.shuffle.filter(t)
    }, window.shufflejs = new l(document.getElementById("shufflejs")), i(".portfolio-area .filter-control li").on("click", function () {
        i(this).addClass("tab-active").siblings().removeClass("tab-active")
    }), i(".testimonials-area .owl-carousel").owlCarousel({
        items: 1,
        loop: !0,
        margin: 0,
        nav: !1,
        smartSpeed: 400
    }), i("#contact-form").on("submit", function (e) {
        var t = i(this),
            a = t.find("#contact-submit"),
            s = t.find(".feedback-error");
        e.preventDefault(), a.html("Wait...").addClass("wait").prop("disabled", !0), setTimeout(function () {
            i.ajax({
                url: t.attr("action"),
                type: "POST",
                data: t.serialize()
            }).done(function (e) {
                "success" == e ? (a.removeClass("wait").html("Success").addClass("success"), setTimeout(function () {
                    a.html("Submit").removeClass("success").prop("disabled", !1)
                }, 6e3)) : (a.removeClass("wait").html("Error").addClass("error"), s.fadeIn(200), setTimeout(function () {
                    a.html("Submit").removeClass("error").prop("disabled", !1), s.fadeOut(200)
                }, 6e3)), t[0].reset()
            })
        }, 1e3)
    })
}(jQuery);
