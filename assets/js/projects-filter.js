/**
 * OK DESIGN — Projects Filtering & Routing Module
 * Uses GSAP for hardware-accelerated animations & ScrollTrigger recalculation.
 */
(function ($) {
    'use strict';

    $(document).ready(function () {
        const $gridItems = $('.article-blog');
        const $filterBtns = $('.filter-btn');

        if ($gridItems.length === 0) return;

        /**
         * Основная функция анимации и фильтрации сетки
         */
        function filterProjects(selector, isClientSearch = false) {
            const query = selector ? selector.toLowerCase() : '*';

            // Обновление активного класса кнопок
            if (!isClientSearch) {
                $filterBtns.removeClass('active');
                const $matchedBtn = $filterBtns.filter(`[data-filter="${query}"]`);
                if ($matchedBtn.length > 0) {
                    $matchedBtn.addClass('active');
                } else {
                    $filterBtns.filter('[data-filter="*"]').addClass('active');
                }
            } else {
                $filterBtns.removeClass('active');
            }

            // Анимация карточек через GSAP
            $gridItems.each(function () {
                const $item = $(this);
                const tags = ($item.attr('data-tags') || '').toLowerCase();
                const categories = ($item.attr('data-category') || '').toLowerCase();
                const client = ($item.attr('data-client') || '').toLowerCase();

                const match = (query === '*') || 
                              (isClientSearch ? client === query : (categories.includes(query) || tags.includes(query)));

                if (match) {
                    gsap.to($item, {
                        duration: 0.4,
                        opacity: 1,
                        scale: 1,
                        display: 'block',
                        overwrite: true,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to($item, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.95,
                        display: 'none',
                        overwrite: true,
                        ease: 'power2.in'
                    });
                }
            });

            // Критически важно: пересчет позиций скролла после анимации
            setTimeout(function () {
                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            }, 450);
        }

        // 1. Событие клика по кнопкам категорий
        $filterBtns.on('click', function (e) {
            e.preventDefault();
            const filterValue = $(this).attr('data-filter');
            filterProjects(filterValue);
        });

        // 2. Парсинг параметров из адресной строки (переходы с index.html)
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        const clientParam = urlParams.get('client');

        if (filterParam) {
            filterProjects(filterParam, false);
            scrollToGrid();
        } else if (clientParam) {
            filterProjects(clientParam, true);
            scrollToGrid();
        }

        /**
         * Плавный скролл к сетке проектов при переходе по ссылке с параметром
         */
        function scrollToGrid() {
            setTimeout(function () {
                const $gridSection = $('#projects-grid-section');
                if ($gridSection.length > 0) {
                    const gridTop = $gridSection.offset().top - 120;
                    $('html, body').animate({ scrollTop: gridTop }, 800);
                }
            }, 300);
        }
    });
})(jQuery);