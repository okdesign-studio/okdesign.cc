/**
 * Go Top
 * Infinite Slide
 * Update Clock
 * Cursor Trail
 * Counter
 * Scroll Link
 * Setting Color
 * Open Menu
 * Click Active
 */

(function ($) {
    "use strict";

    /* Go Top
    -------------------------------------------------------------------------*/
    var goTop = function () {
        var $goTop = $("#goTop");
        var $borderProgress = $(".border-progress");

        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height() - $(window).height();
            var scrollPercent = (scrollTop / docHeight) * 100;
            var progressAngle = (scrollPercent / 100) * 360;

            $borderProgress.css("--progress-angle", progressAngle + "deg");

            // Идеально чистое условие: показываем кнопку всегда, если проскроллили больше 100px
            if (scrollTop > 100) {
                $goTop.addClass("show");
            } else {
                $goTop.removeClass("show");
            }
        });

        $goTop.on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 100);
        });
    };
    /* Infinite Slide 
    -------------------------------------------------------------------------*/
    var infiniteSlide = function () {
        if ($(".infiniteSlide").length > 0) {
            $(".infiniteSlide").each(function () {
                var $this = $(this);
                var style = $this.data("style") || "left";
                var clone = $this.data("clone") || 2;
                var speed = $this.data("speed") || 50;
                $this.infiniteslide({
                    speed: speed,
                    direction: style,
                    clone: clone,
                    pauseonhover: false,
                });
            });
        }
    };
    /* Update Clock
    -------------------------------------------------------------------------*/
    var updateClock = () => {
        function startClocks(selector = ".clock") {
            function updateClock() {
                const now = new Date();
                const timeString = now.toLocaleTimeString("en-GB");
                document.querySelectorAll(selector).forEach((el) => {
                    el.textContent = timeString;
                });
            }
            updateClock();
            setInterval(updateClock, 1000);
        }

        startClocks(".clock");
    };
    /* Cursor Trail
    -------------------------------------------------------------------------*/
    var cursorTrail = () => {
        const canvas = document.getElementById("trail");
        if (!canvas) return; // canvas #trail больше не используется (курсор заменён на .mil-ball из Ashley)
        const ctx = canvas.getContext("2d");
        let w = window.innerWidth,
            h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        let points = [];
        let ripples = [];

        window.addEventListener("resize", () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        });

        window.addEventListener("mousemove", (e) => {
            points.push({ x: e.clientX, y: e.clientY });
            if (points.length > 10) points.shift();
        });

        window.addEventListener("click", (e) => {
            ripples.push({
                x: e.clientX,
                y: e.clientY,
                radius: 0,
                alpha: 1,
            });
        });

        function draw() {
            ctx.clearRect(0, 0, w, h);

            if (points.length > 1) {
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }
                let last = points[points.length - 1];
                let grad = ctx.createLinearGradient(points[0].x, points[0].y, last.x, last.y);
                grad.addColorStop(0, "black");
                grad.addColorStop(1, "white");
                ctx.strokeStyle = grad;
                ctx.lineWidth = 3;
                ctx.lineCap = "round";
                ctx.stroke();
            }

            ripples.forEach((r, i) => {
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();
                r.radius += 1;
                r.alpha -= 0.02;
            });
            ripples = ripples.filter((r) => r.alpha > 0);

            requestAnimationFrame(draw);
        }
        draw();
    };
    /* Counter Odo
    -------------------------------------------------------------------------*/
    var counterOdo = () => {
        function isElementInViewport($el) {
            var top = $el.offset().top;
            var bottom = top + $el.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return bottom > viewportTop && top < viewportBottom;
        }
        if ($(".counter-scroll").length > 0) {
            $(window).on("scroll", function () {
                $(".wg-counter").each(function () {
                    var $counter = $(this);
                    if (isElementInViewport($counter) && !$counter.hasClass("counted")) {
                        $counter.addClass("counted");
                        var targetNumber = $counter.find(".odometer").data("number");
                        setTimeout(function () {
                            $counter.find(".odometer").text(targetNumber);
                        }, 0);
                    }
                });
            });
        }
    };
    /* Setting Color
    -------------------------------------------------------------------------*/
    const settingColor = () => {
        if (!$(".settings-color").length) return;

        const COLOR_KEY = "selectedColorIndex";

        const savedIndex = localStorage.getItem(COLOR_KEY);

        if (savedIndex !== null) {
            setColor(savedIndex);
            setActiveItem(savedIndex - 1);
        }

        $(".choose-item").on("click", function () {
            const index = $(this).index();
            setColor(index + 1);
            setActiveItem(index);
            localStorage.setItem(COLOR_KEY, index + 1);
        });

        function setColor(index) {
            $("body").attr("data-color-primary", "color-primary-" + index);
        }

        function setActiveItem(index) {
            $(".choose-item").removeClass("active").eq(index).addClass("active");
        }
    };
    /* Open Menu
    -------------------------------------------------------------------------*/
    var openMbMenu = () => {
        $(".open-mb-menu").on("click", function () {
            $(".offcanvas-menu").addClass("show");
            $("body").toggleClass("overflow-hidden");
        });

        $(".close-mb-menu").on("click", function () {
            $(".offcanvas-menu").removeClass("show");
            $("body").toggleClass("overflow-hidden");
        });
    };
    /* Click Active
    -------------------------------------------------------------------------*/
    var clickActive = () => {
        $(".btn-active").on("mouseenter", function () {
            var $btn = $(this);
            if ($btn.hasClass("active")) {
            } else {
                $(".main-action-active .btn-active").removeClass("active");
                $btn.addClass("active");
            }
        });
    };

    // Dom Ready
    $(function () {
        infiniteSlide();
        updateClock();
        cursorTrail();
        goTop();
        // settingColor();
        counterOdo();
        openMbMenu();
        clickActive();
    });
})(jQuery);
/* ==========================================
   GSAP ЛОГИКА ИЗ ASHLEY (Курсор и Скролл-анимации)
========================================== */
$(document).ready(function() {
    // Проверяем наличие GSAP
    if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // --- 1. ЛОГИКА КУРСОРА ---
        const cursor = document.querySelector('.mil-ball');
        if (cursor) {
            gsap.set(cursor, { xPercent: -50, yPercent: -50 });

            document.addEventListener('pointermove', function(e) {
                gsap.to(cursor, { duration: 0.6, ease: 'sine', x: e.clientX, y: e.clientY });
            });

            // Эффект увеличения при наведении на слайды и ссылки
            $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
                gsap.to($(cursor), 0.2, { width: 90, height: 90, opacity: 0.9, ease: 'sine' });
            });
            $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
                gsap.to($(cursor), 0.2, { width: 20, height: 20, opacity: 0.15, ease: 'sine' });
            });

            $('.mil-drag').mouseover(function () { gsap.to($('.mil-ball .mil-icon-1'), 0.2, { scale: 1, ease: 'sine' }); });
            $('.mil-drag').mouseleave(function () { gsap.to($('.mil-ball .mil-icon-1'), 0.2, { scale: 0, ease: 'sine' }); });

            $('a, button, input, textarea').not('.mil-choose, .mil-more, .mil-drag').mouseover(function () {
                gsap.to($(cursor), 0.2, { scale: 0, ease: 'sine' });
            });
            $('a, button, input, textarea').not('.mil-choose, .mil-more, .mil-drag').mouseleave(function () {
                gsap.to($(cursor), 0.2, { scale: 1, ease: 'sine' });
            });
        }

        // --- 2. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ (.mil-up) ---
        const appearance = document.querySelectorAll(".mil-up");
        appearance.forEach((section) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 40, scale: 0.98, ease: 'sine' }, 
                {
                    y: 0, opacity: 1, scale: 1, duration: 0.6,
                    scrollTrigger: {
                        trigger: section,
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }
});
