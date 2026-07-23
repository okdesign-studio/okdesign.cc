/**
 * OK DESIGN — Elite Multi-Dropdown Filtering & Routing Module
 * Hardware-accelerated GSAP animations + Dynamic Active Pills Bar
 */
(function ($) {
    'use strict';

    $(document).ready(function () {
        const $gridItems = $('.article-blog');
        const $resetBtn = $('#resetAllFilters');
        const $activeBar = $('#activeFiltersBar');

        if ($gridItems.length === 0) return;

        // Состояние фильтров по трем осям
        let activeFilters = {
            sphere: '*',
            service: '*',
            client: '*'
        };

        // Словарь названий для плашек
        const labelMap = {
            sphere: 'Sphere',
            service: 'Service',
            client: 'Client'
        };

        /**
         * Главная функция фильтрации и обновления интерфейса
         */
        function applyFilters() {
            let activeCount = 0;

            // 1. Обновляем выпадающие списки (кнопки и галочки)
            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                const $menu = $(`.dark-dropdown-menu[data-group="${group}"]`);
                const $btn = $menu.prev('.btn-filter-dropdown');
                
                $menu.find('.dropdown-item').removeClass('active');
                const $selectedItem = $menu.find(`.dropdown-item[data-val="${val}"]`).addClass('active');
                
                if (val !== '*') {
                    $btn.addClass('has-active').find('.label-val').text($selectedItem.text());
                    activeCount++;
                } else {
                    $btn.removeClass('has-active').find('.label-val').text('ALL');
                }
            });

            // 2. Обновляем кнопку сброса
            if (activeCount > 0) {
                $resetBtn.removeClass('active');
            } else {
                $resetBtn.addClass('active');
            }

            // 3. Перестраиваем панель активных плашек (Pills)
            renderActivePills();

            // 4. Фильтруем сетку через GSAP
            $gridItems.each(function () {
                const $item = $(this);
                const itemSphere = ($item.attr('data-category') || '').toLowerCase();
                const itemService = ($item.attr('data-tags') || '').toLowerCase();
                const itemClient = ($item.attr('data-client') || '').toLowerCase();

                const matchSphere = (activeFilters.sphere === '*') || itemSphere.includes(activeFilters.sphere);
                const matchService = (activeFilters.service === '*') || itemService.includes(activeFilters.service);
                const matchClient = (activeFilters.client === '*') || (itemClient === activeFilters.client);

                // Товар показывается только если совпадает по всем активным осям (AND логика)
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

            // 5. Пересчитываем ScrollTrigger
            setTimeout(function () {
                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            }, 450);
        }

        /**
         * Отрисовка плашек выбранных фильтров с крестиком
         */
        function renderActivePills() {
            $activeBar.empty();
            let hasPills = false;

            Object.keys(activeFilters).forEach(group => {
                const val = activeFilters[group];
                if (val !== '*') {
                    hasPills = true;
                    const text = $(`.dark-dropdown-menu[data-group="${group}"] .dropdown-item[data-val="${val}"]`).text();
                    
                    const pillHtml = `
                        <div class="active-pill" data-group="${group}">
                            <span>${labelMap[group]}: ${text}</span>
                            <span class="remove-pill" title="Remove filter">×</span>
                        </div>
                    `;
                    $activeBar.append(pillHtml);
                }
            });

            if (hasPills) {
                $activeBar.append('<button class="clear-all-pills" id="clearAllPills">Clear All ×</button>');
            }
        }

        // Событие: Выбор пункта в Dropdown
        $('.dark-dropdown-menu .dropdown-item').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const group = $this.closest('.dark-dropdown-menu').attr('data-group');
            const val = $this.attr('data-val');

            activeFilters[group] = val;
            applyFilters();
        });

        // Событие: Клик по крестику на плашке (Удалить конкретный фильтр)
        $activeBar.on('click', '.remove-pill', function () {
            const group = $(this).closest('.active-pill').attr('data-group');
            activeFilters[group] = '*';
            applyFilters();
        });

        // Событие: Клик по "Clear All" или "All Projects (11)"
        function resetAll() {
            activeFilters = { sphere: '*', service: '*', client: '*' };
            applyFilters();
        }

        $resetBtn.on('click', resetAll);
        $activeBar.on('click', '#clearAllPills', resetAll);

        // Парсинг параметров из адресной строки при переходе с index.html
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        const clientParam = urlParams.get('client');

        if (filterParam) {
            // Ищем, к какой группе относится пришедший тег
            if ($(`.dark-dropdown-menu[data-group="sphere"] [data-val="${filterParam}"]`).length > 0) {
                activeFilters.sphere = filterParam;
            } else {
                activeFilters.service = filterParam;
            }
            applyFilters();
            scrollToGrid();
        } else if (clientParam) {
            activeFilters.client = clientParam;
            applyFilters();
            scrollToGrid();
        }

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