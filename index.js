'use strict';

/**
 * Adds commas to a number
 * @param {number} number current page number
 * @param {number} count page count
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

function paginateFirst(context, current, pages) {
    var firstPage = 1;

    if(current != firstPage) {
        context.first = {
            page: firstPage
        };
    }
}

function paginatePrev(context, current, pages) {
    var prevCount = current - 2;
    if(prevCount > 0) {
        context.prev = {
            page: current - 1,
            more: prevCount - 1 > 0
        };
    }
}

function paginateActive(context, current, pages) {
    context.active = {
        page: current
    };
}

function paginateNext(context, current, pages) {
    var nextCount = pages - current - 1;
    if(nextCount > 0) {
        context.next = {
            page: current + 1,
            more: nextCount - 1 > 0
        };
    }
}

function paginateLast(context, current, pages) {
    var lastPage = pages;

    if(current != lastPage) {
        context.last = {
            page: lastPage
        };
    }
}

module.exports = paginate;