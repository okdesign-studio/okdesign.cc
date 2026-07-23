/**
 * OK DESIGN — project search, filters, URL state and year sorting.
 * Supports current homepage links such as ?filter=motion and ?client=somplo.
 */
(function ($) {
    'use strict';

    $(function () {
        const $grid = $('#projectsGridContainer');
        const $items = $grid.find('.article-blog');
        const $search = $('#projectSearchInput');
        const $pills = $('#activePillsContainer');
        const $resultCount = $('#projectsResultCount');
        const $emptyState = $('#projectsEmptyState');

        if (!$grid.length || !$items.length) return;

        const state = {
            category: '*',
            service: '*',
            client: '*',
            query: '',
            sort: 'newest'
        };

        const groupLabels = {
            category: 'Category',
            service: 'Service',
            client: 'Client'
        };

        $items.each(function (index) {
            $(this).data('original-index', index);
        });

        function tokens(value) {
            return String(value || '')
                .toLocaleLowerCase()
                .trim()
                .split(/\s+/)
                .filter(Boolean);
        }

        function optionFor(group, value) {
            return $(`.envato-dropdown-menu[data-group="${group}"] .dropdown-item-check`).filter(function () {
                return String($(this).data('val')) === String(value);
            });
        }

        function hasOption(group, value) {
            return optionFor(group, value).length > 0;
        }

        function selectedText(group) {
            const $option = optionFor(group, state[group]);
            return $.trim($option.find('span').last().text());
        }

        function sortItems() {
            const sorted = $items.get().sort(function (a, b) {
                const $a = $(a);
                const $b = $(b);
                const yearA = Number.parseInt($a.attr('data-year'), 10) || 0;
                const yearB = Number.parseInt($b.attr('data-year'), 10) || 0;
                const byYear = state.sort === 'oldest' ? yearA - yearB : yearB - yearA;

                return byYear || $a.data('original-index') - $b.data('original-index');
            });

            $grid.append(sorted);
        }

        function itemMatches($item) {
            const categories = tokens($item.attr('data-category'));
            const services = tokens($item.attr('data-tags'));
            const clients = tokens($item.attr('data-client'));
            const title = String($item.attr('data-title') || '').toLocaleLowerCase();
            const matchesCategory = state.category === '*' || categories.includes(state.category);
            const matchesService = state.service === '*' || services.includes(state.service);
            const matchesClient = state.client === '*' || clients.includes(state.client);
            const searchText = [title, categories.join(' '), services.join(' '), clients.join(' ')].join(' ');
            const matchesSearch = !state.query || searchText.includes(state.query);

            return matchesCategory && matchesService && matchesClient && matchesSearch;
        }

        function updateControls() {
            ['category', 'service', 'client'].forEach(function (group) {
                const $menu = $(`.envato-dropdown-menu[data-group="${group}"]`);
                const $selected = optionFor(group, state[group]);
                const $button = $menu.prev('button');

                $menu.find('.dropdown-item-check').removeClass('selected').attr('aria-pressed', 'false');
                $selected.addClass('selected').attr('aria-pressed', 'true');

                if (group === 'category') {
                    $('#categoryLabel').text(state.category === '*' ? 'CATEGORIES' : selectedText(group));
                    $button.toggleClass('is-active', state.category !== '*');
                    return;
                }

                const $label = $button.find('.filter-button-label');
                const $badge = $button.find('.badge-count');
                const isActive = state[group] !== '*';

                $button.toggleClass('is-active', isActive);
                $label.text(isActive ? selectedText(group) : $label.data('default-label'));
                $badge.prop('hidden', !isActive);
            });

            $('#sortDropdownMenu .dropdown-item-check')
                .removeClass('selected')
                .attr('aria-pressed', 'false')
                .filter(`[data-sort="${state.sort}"]`)
                .addClass('selected')
                .attr('aria-pressed', 'true');

            $('#sortLabel').text(state.sort === 'oldest' ? 'OLDEST' : 'NEWEST');
        }

        function createPill(group, label, value) {
            const $pill = $('<span>', { class: 'pill-tag', 'data-group': group });
            $('<span>').text(`${label}: ${value}`).appendTo($pill);
            $('<button>', {
                type: 'button',
                class: 'btn-remove-tag',
                'aria-label': `Remove ${label.toLowerCase()} filter`,
                text: '×'
            }).appendTo($pill);
            return $pill;
        }

        function renderPills() {
            $pills.empty();

            ['category', 'service', 'client'].forEach(function (group) {
                if (state[group] !== '*') {
                    $pills.append(createPill(group, groupLabels[group], selectedText(group)));
                }
            });

            if (state.query) {
                $pills.append(createPill('query', 'Search', state.query));
            }

            if ($pills.children().length) {
                $pills.append($('<button>', {
                    type: 'button',
                    class: 'btn-clear-all',
                    id: 'btnClearPills',
                    text: 'Clear all'
                }));
            }
        }

        function syncUrl() {
            if (!window.history || !window.history.replaceState) return;

            const url = new URL(window.location.href);
            ['filter', 'category', 'service', 'client', 'q', 'sort'].forEach(function (key) {
                url.searchParams.delete(key);
            });

            if (state.category !== '*') url.searchParams.set('category', state.category);
            if (state.service !== '*') url.searchParams.set('service', state.service);
            if (state.client !== '*') url.searchParams.set('client', state.client);
            if (state.query) url.searchParams.set('q', state.query);
            if (state.sort !== 'newest') url.searchParams.set('sort', state.sort);

            window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
        }

        function applyFilters(updateUrl) {
            sortItems();
            let visibleCount = 0;

            $items.each(function () {
                const $item = $(this);
                const visible = itemMatches($item);
                $item.prop('hidden', !visible);
                if (visible) visibleCount += 1;
            });

            updateControls();
            renderPills();
            $resultCount.text(`${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}`);
            $emptyState.prop('hidden', visibleCount !== 0);

            if (updateUrl) syncUrl();
            if (typeof ScrollTrigger !== 'undefined') {
                window.requestAnimationFrame(function () { ScrollTrigger.refresh(); });
            }
        }

        function resetFilters() {
            state.category = '*';
            state.service = '*';
            state.client = '*';
            state.query = '';
            state.sort = 'newest';
            $search.val('');
            applyFilters(true);
        }

        $('.envato-dropdown-menu[data-group] .dropdown-item-check').on('click', function (event) {
            event.preventDefault();
            const $option = $(this);
            const group = $option.closest('.envato-dropdown-menu').data('group');
            const value = String($option.data('val'));

            state[group] = state[group] === value && value !== '*' ? '*' : value;
            applyFilters(true);
        });

        let searchTimer;
        $search.on('input', function () {
            window.clearTimeout(searchTimer);
            const value = $(this).val();
            searchTimer = window.setTimeout(function () {
                state.query = String(value || '').toLocaleLowerCase().trim();
                applyFilters(true);
            }, 120);
        });

        $('#sortDropdownMenu .dropdown-item-check').on('click', function (event) {
            event.preventDefault();
            state.sort = $(this).data('sort') === 'oldest' ? 'oldest' : 'newest';
            applyFilters(true);
        });

        $pills.on('click', '.btn-remove-tag', function () {
            const group = $(this).closest('.pill-tag').data('group');
            if (group === 'query') {
                state.query = '';
                $search.val('');
            } else if (Object.prototype.hasOwnProperty.call(state, group)) {
                state[group] = '*';
            }
            applyFilters(true);
        });

        $pills.on('click', '#btnClearPills', resetFilters);
        $('#resetProjectsFilters').on('click', resetFilters);

        function readInitialState() {
            const params = new URLSearchParams(window.location.search);
            const category = params.get('category');
            const service = params.get('service');
            const client = params.get('client');
            const legacyFilter = params.get('filter');
            const query = params.get('q');

            if (category && hasOption('category', category)) state.category = category;
            if (service && hasOption('service', service)) state.service = service;
            if (client && hasOption('client', client)) state.client = client;

            if (legacyFilter && !category && !service) {
                if (hasOption('category', legacyFilter)) state.category = legacyFilter;
                else if (hasOption('service', legacyFilter)) state.service = legacyFilter;
            }

            if (query) {
                state.query = query.toLocaleLowerCase().trim();
                $search.val(query);
            }

            if (params.get('sort') === 'oldest') state.sort = 'oldest';
        }

        readInitialState();
        applyFilters(false);

        if (window.location.search) {
            window.setTimeout(function () {
                const $section = $('#projects-grid-section');
                if ($section.length) {
                    $('html, body').animate({ scrollTop: $section.offset().top - 125 }, 550);
                }
            }, 250);
        }
    });
})(jQuery);
