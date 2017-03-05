'use strict';

/**
 * General pagination for the specified active page and count.
 * @param {number} number current page number
 * @param {number} count page count
 * @param {object} options hash contains a property named fn to invoke a normal Handlebars template
 * @return {string}
 */
function paginate(number, count, options) {
    var current = Number(number);
    var pages = Number(count);
    var context = {};

    paginateFirst(context, current, pages);
    paginatePrev(context, current, pages);
    paginateActive(context, current, pages);
    paginateNext(context, current, pages);
    paginateLast(context, current, pages);

    return options.fn(context);
}

/**
 * General details for first page in pagination.
 * @param {object} context current context to be templated
 * @param {number} current current page number
 * @param {number} pages page count
 */
function paginateFirst(context, current, pages) {
    var firstPage = 1;

    if(current != firstPage) {
        context.first = {
            page: firstPage
        };
    }
}

/**
 * General details for prev to the active pages in pagination.
 * @param {object} context current context to be templated
 * @param {number} current current page number
 * @param {number} pages page count
 */
function paginatePrev(context, current, pages) {
    var prevCount = current - 2;
    if(prevCount > 0) {
        context.prev = {
            page: current - 1,
            more: prevCount - 1 > 0,
            prev_count: prevCount - 1,
            prev_page: current - 2
        };
    }
}

/**
 * General details for active page in pagination.
 * @param {object} context current context to be templated
 * @param {number} current current page number
 * @param {number} pages page count
 */
function paginateActive(context, current, pages) {
    context.active = {
        page: current
    };
}

/**
 * General details for next to the active pages in pagination.
 * @param {object} context current context to be templated
 * @param {number} current current page number
 * @param {number} pages page count
 */
function paginateNext(context, current, pages) {
    var nextCount = pages - current - 1;
    if(nextCount > 0) {
        context.next = {
            page: current + 1,
            more: nextCount - 1 > 0,
            next_count: nextCount - 1,
            next_page: current + 2
        };
    }
}

/**
 * General details for last page in pagination.
 * @param {object} context current context to be templated
 * @param {number} current current page number
 * @param {number} pages page count
 */
function paginateLast(context, current, pages) {
    var lastPage = pages;

    if(current != lastPage) {
        context.last = {
            page: lastPage
        };
    }
}

module.exports = paginate;
