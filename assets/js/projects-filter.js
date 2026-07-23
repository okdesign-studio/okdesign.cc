/**
 * OK DESIGN — Envato-Style Filter Bar with Live Search & Active Pills
 * Uses GSAP for hardware-accelerated transitions.
 */
(function ($) {
    'use strict';

    $(document).ready(function () {
        const $gridContainer = $('#projectsGridContainer');
        let $gridItems = $('.article-blog');
        const $pillsContainer = $('#activePillsContainer');
        const $searchInput = $('#projectSearchInput');

        if ($gridItems.length === 0) return;

        let activeFilters = {
            sphere: '*',
            service: '*',
            client: '*'
        };
        let searchQuery = '';
        let currentSort = 'newest';

        const labelMap = {
            sphere: 'Sphere',
            service: 'Service',
            client: 'Client'
        };

        function sortGridItems() {
            const itemsArray = $gridItems.get();

            itemsArray.sort(function (a, b) {
                const $a = $(a), $b = $(b);
                if (currentSort === 'newest') return parseInt($b.attr('data-year') || '0', 10) - parseInt($a.attr('data-year') || '0', 10);
                if (currentSort === 'oldest') return parseInt($a.attr('data-year') || '0', 10) - parseInt($b.attr('data-year') || '0', 10);
                if (currentSort === 'title-asc') return ($a.attr('data-title') || '').localeCompare($b.attr('data-title') || '');
                if (currentSort === 'client-asc') return ($a.attr('data-client') || '').localeCompare($b.attr('data-client') || '');
                return 0;
            });

            $.each(itemsArray, function (idx, item) { $gridContainer.append(item); });
            $gridItems = $('.article-blog');
        }

        function applyAllFilters() {
            sortGridItems();

            // Обновляем счетчики на кнопках меню
            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                const $menu = $(`.envato-dropdown-menu[data-group="${group}"]`);
                const $btn = $menu.prev('.btn-envato-dropdown');
                const $badge = $btn.find('.badge-count');

                $menu.find('.dropdown-item-check').removeClass('selected');
                $menu.find(`.dropdown-item-check[data-val="${val}"]`).addClass('selected');

                if (val !== '*') {
                    $btn.addClass('is-active');
                    $badge.text('1').show();
                } else {
                    $btn.removeClass('is-active');
                    $badge.hide();
                }
            });

            renderActivePills();

            // Фильтрация элементов в DOM
            $gridItems.each(function () {
                const $item = $(this);
                const itemSphere = ($item.attr('data-category') || '').toLowerCase();
                const itemService = ($item.attr('data-tags') || '').toLowerCase();
                const itemClient = ($item.attr('data-client') || '').toLowerCase();
                const itemTitle = ($item.attr('data-title') || '').toLowerCase();

                const matchSphere = (activeFilters.sphere === '*') || itemSphere.includes(activeFilters.sphere);
                const matchService = (activeFilters.service === '*') || itemService.includes(activeFilters.service);
                const matchClient = (activeFilters.client === '*') || (itemClient === activeFilters.client);
                
                // Проверка поискового запроса по названию, тегам и бренду
                const matchSearch = (searchQuery === '') || 
                                    itemTitle.includes(searchQuery) || 
                                    itemClient.includes(searchQuery) || 
                                    itemService.includes(searchQuery);

                if (matchSphere && matchService && matchClient && matchSearch) {
                    gsap.to($item, { duration: 0.35, opacity: 1, scale: 1, display: 'block', overwrite: true, ease: 'power2.out' });
                } else {
                    gsap.to($item, { duration: 0.25, opacity: 0, scale: 0.95, display: 'none', overwrite: true, ease: 'power2.in' });
                }
            });

            setTimeout(() => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 400);
        }

        function renderActivePills() {
            $pillsContainer.empty();
            let hasPills = false;

            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                if (val !== '*') {
                    hasPills = true;
                    const text = $(`.envato-dropdown-menu[data-group="${group}"] .dropdown-item-check[data-val="${val}"] span:last-child`).text();
                    $pillsContainer.append(`
                        <div class="pill-tag" data-group="${group}">
                            <span>${labelMap[group]}: ${text}</span>
                            <span class="btn-remove-tag" title="Remove">×</span>
                        </div>
                    `);
                }
            });

            if (searchQuery !== '') {
                hasPills = true;
                $pillsContainer.append(`
                    <div class="pill-tag" data-group="search">
                        <span>Search: "${searchQuery}"</span>
                        <span class="btn-remove-tag" title="Clear search">×</span>
                    </div>
                `);
            }

            if (hasPills) {
                $pillsContainer.append('<button class="btn-clear-all" id="btnClearPills">Clear All ×</button>');
            }
        }

        // События: Выбор чекбокса в меню
        $('.envato-dropdown-menu[data-group] .dropdown-item-check').on('click', function (e) {
            e.stopPropagation();
            const $this = $(this);
            const group = $this.closest('.envato-dropdown-menu').attr('data-group');
            const val = $this.attr('data-val');

            // Клик по уже выбранному пункту сбрасывает его в All (*)
            if (activeFilters[group] === val && val !== '*') {
                activeFilters[group] = '*';
            } else {
                activeFilters[group] = val;
            }
            applyAllFilters();
        });

        // Событие: Ввод текста в поиск
        $searchInput.on('input', function () {
            searchQuery = $(this).val().toLowerCase().trim();
            applyAllFilters();
        });

        // События: Сортировка
        $('#sortDropdownMenu .dropdown-item-check').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            currentSort = $this.attr('data-sort');
            $('#sortDropdownMenu .dropdown-item-check').removeClass('selected');
            $this.addClass('selected');
            $('#sortLabel').text($this.find('span:last-child').text().split(' (')[0].toUpperCase());
            applyAllFilters();
        });

        // События: Удаление тега через ×
        $pillsContainer.on('click', '.btn-remove-tag', function () {
            const group = $(this).closest('.pill-tag').attr('data-group');
            if (group === 'search') {
                searchQuery = '';
                $searchInput.val('');
            } else {
                activeFilters[group] = '*';
            }
            applyAllFilters();
        });

        function resetAll() {
            activeFilters = { sphere: '*', service: '*', client: '*' };
            searchQuery = '';
            $searchInput.val('');
            applyAllFilters();
        }

        $pillsContainer.on('click', '#btnClearPills', resetAll);

        // Парсинг URL при переходе с index.html
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        const clientParam = urlParams.get('client');

        if (filterParam) {
            if ($(`.envato-dropdown-menu[data-group="sphere"] [data-val="${filterParam}"]`).length > 0) {
                activeFilters.sphere = filterParam;
            } else {
                activeFilters.service = filterParam;
            }
            applyAllFilters();
            scrollToGrid();
        } else if (clientParam) {
            activeFilters.client = clientParam;
            applyAllFilters();
            scrollToGrid();
        } else {
            applyAllFilters();
        }

        function scrollToGrid() {
            setTimeout(() => {
                const $grid = $('#projects-grid-section');
                if ($grid.length > 0) $('html, body').animate({ scrollTop: $grid.offset().top - 140 }, 700);
            }, 300);
        }
    });
})(jQuery);