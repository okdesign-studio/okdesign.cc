/**
 * OK DESIGN — Elite Multi-Dropdown Filtering, Active Pills & Sorting Module
 * Uses GSAP for hardware-accelerated grid sorting & animations.
 */
(function ($) {
    'use strict';

    $(document).ready(function () {
        const $gridContainer = $('#projectsGridContainer');
        let $gridItems = $('.article-blog');
        const $resetBtn = $('#btnResetAll');
        const $pillsContainer = $('#activePillsContainer');

        if ($gridItems.length === 0) return;

        // Текущее состояние фильтров и сортировки
        let activeFilters = {
            sphere: '*',
            service: '*',
            client: '*'
        };
        let currentSort = 'newest';

        const labelMap = {
            sphere: 'Sphere',
            service: 'Service',
            client: 'Client'
        };

        /**
         * Сортировка элементов DOM
         */
        function sortGridItems() {
            const itemsArray = $gridItems.get();

            itemsArray.sort(function (a, b) {
                const $a = $(a);
                const $b = $(b);

                if (currentSort === 'newest') {
                    return parseInt($b.attr('data-year') || '0', 10) - parseInt($a.attr('data-year') || '0', 10);
                } else if (currentSort === 'oldest') {
                    return parseInt($a.attr('data-year') || '0', 10) - parseInt($b.attr('data-year') || '0', 10);
                } else if (currentSort === 'title-asc') {
                    return ($a.attr('data-title') || '').localeCompare($b.attr('data-title') || '');
                } else if (currentSort === 'client-asc') {
                    return ($a.attr('data-client') || '').localeCompare($b.attr('data-client') || '');
                }
                return 0;
            });

            // Перестановка в DOM
            $.each(itemsArray, function (idx, item) {
                $gridContainer.append(item);
            });

            // Обновление коллекции
            $gridItems = $('.article-blog');
        }

        /**
         * Главная функция фильтрации и обновления интерфейса
         */
        function applyFiltersAndSort() {
            let activeCount = 0;

            // 1. Сортировка элементов перед показом
            sortGridItems();

            // 2. Обновление UI кнопок дропдаунов
            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                const $menu = $(`.elite-dropdown-menu[data-group="${group}"]`);
                const $btn = $menu.prev('.btn-elite-dropdown');
                const $badge = $btn.find('.badge-count');

                $menu.find('.dropdown-item').removeClass('selected');
                const $selectedItem = $menu.find(`.dropdown-item[data-val="${val}"]`).addClass('selected');

                if (val !== '*') {
                    $btn.addClass('is-active');
                    $badge.text('1').show();
                    activeCount++;
                } else {
                    $btn.removeClass('is-active');
                    $badge.hide();
                }
            });

            // 3. Обновление кнопки "ALL PROJECTS"
            if (activeCount > 0) {
                $resetBtn.removeClass('is-active');
            } else {
                $resetBtn.addClass('is-active');
            }

            // 4. Отрисовка строки плашек (Active Pills)
            renderActivePills();

            // 5. Анимация фильтрации через GSAP
            $gridItems.each(function () {
                const $item = $(this);
                const itemSphere = ($item.attr('data-category') || '').toLowerCase();
                const itemService = ($item.attr('data-tags') || '').toLowerCase();
                const itemClient = ($item.attr('data-client') || '').toLowerCase();

                const matchSphere = (activeFilters.sphere === '*') || itemSphere.includes(activeFilters.sphere);
                const matchService = (activeFilters.service === '*') || itemService.includes(activeFilters.service);
                const matchClient = (activeFilters.client === '*') || (itemClient === activeFilters.client);

                if (matchSphere && matchService && matchClient) {
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

            // 6. Пересчет скролла
            setTimeout(function () {
                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            }, 450);
        }

        /**
         * Отрисовка плашек выбранных фильтров с кнопкой удаления
         */
        function renderActivePills() {
            $pillsContainer.empty();
            let hasPills = false;

            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                if (val !== '*') {
                    hasPills = true;
                    const text = $(`.elite-dropdown-menu[data-group="${group}"] .dropdown-item[data-val="${val}"]`).text();
                    
                    const pillHtml = `
                        <div class="pill-item" data-group="${group}">
                            <span>${labelMap[group]}: ${text}</span>
                            <span class="btn-remove" title="Remove filter">×</span>
                        </div>
                    `;
                    $pillsContainer.append(pillHtml);
                }
            });

            if (hasPills) {
                $pillsContainer.append('<button class="btn-clear-all" id="btnClearPills">Clear All ×</button>');
            }
        }

        // Событие: Клик по пункту фильтра
        $('.elite-dropdown-menu[data-group] .dropdown-item').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const group = $this.closest('.elite-dropdown-menu').attr('data-group');
            const val = $this.attr('data-val');

            activeFilters[group] = val;
            applyFiltersAndSort();
        });

        // Событие: Клик по пункту сортировки
        $('#sortDropdownMenu .dropdown-item').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            currentSort = $this.attr('data-sort');

            $('#sortDropdownMenu .dropdown-item').removeClass('selected');
            $this.addClass('selected');
            $('#sortLabel').text($this.text().split(' (')[0].toUpperCase());

            applyFiltersAndSort();
        });

        // Событие: Удаление точечного фильтра через крестик ×
        $pillsContainer.on('click', '.btn-remove', function () {
            const group = $(this).closest('.pill-item').attr('data-group');
            activeFilters[group] = '*';
            applyFiltersAndSort();
        });

        // Событие: Сброс всех фильтров
        function resetAllFilters(e) {
            if (e) e.preventDefault();
            activeFilters = { sphere: '*', service: '*', client: '*' };
            applyFiltersAndSort();
        }

        $resetBtn.on('click', resetAllFilters);
        $pillsContainer.on('click', '#btnClearPills', resetAllFilters);

        // Парсинг URL (при переходе с index.html?filter=... или ?client=...)
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        const clientParam = urlParams.get('client');

        if (filterParam) {
            if ($(`.elite-dropdown-menu[data-group="sphere"] [data-val="${filterParam}"]`).length > 0) {
                activeFilters.sphere = filterParam;
            } else {
                activeFilters.service = filterParam;
            }
            applyFiltersAndSort();
            scrollToGrid();
        } else if (clientParam) {
            activeFilters.client = clientParam;
            applyFiltersAndSort();
            scrollToGrid();
        } else {
            // Инициализация при обычной загрузке страницы
            applyFiltersAndSort();
        }

        function scrollToGrid() {
            setTimeout(function () {
                const $gridSection = $('#projects-grid-section');
                if ($gridSection.length > 0) {
                    const gridTop = $gridSection.offset().top - 140;
                    $('html, body').animate({ scrollTop: gridTop }, 700);
                }
            }, 300);
        }
    });
})(jQuery);