'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var paginator = require('../index');

describe('Custom handlebars helper to improve ghost pagination', function() {
    var sandbox, options;

    beforeEach(function() {
        options = {
            fn: function() {}
        };

        sinon
            .stub(options, "fn")
            .returnsArg(0);
    });

    describe('When only 1 page exists and it is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(1, 1, options);
        });

        it('should NOT return section {first}', function() {
            expect(context).to.not.have.property('first');
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 1} in section {active}', function() {
            expect(context.active.page).to.be.equal(1);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should NOT return section {last}', function() {
            expect(context).to.not.have.property('last');
        });
    });

    describe('When 2 pages exist and 1th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(1, 2, options);
        });

        it('should NOT return section {first}', function() {
            expect(context).to.not.have.property('first');
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 1} in section {active}', function() {
            expect(context.active.page).to.be.equal(1);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 2} in section {last}', function() {
            expect(context.last.page).to.be.equal(2);
        });
    });

    describe('When 2 pages exist and 2th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(2, 2, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 2} in section {active}', function() {
            expect(context.active.page).to.be.equal(2);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should NOT return section {last}', function() {
            expect(context).to.not.have.property('last');
        });
    });

    describe('When 3 pages exist and 1th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(1, 3, options);
        });

        it('should NOT return section {first}', function() {
            expect(context).to.not.have.property('first');
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 1} in section {active}', function() {
            expect(context.active.page).to.be.equal(1);
        });

        it('should return section {next}', function() {
            expect(context).to.have.property('next');
        });

        it('should have property {page} in section {next}', function() {
            expect(context.next).to.have.property('page');
        });

        it('should have {page: 2} in section {next}', function() {
            expect(context.next.page).to.be.equal(2);
        });

        it('should have property {more} in section {next}', function() {
            expect(context.next).to.have.property('more');
        });

        it('should have {more: false} in section {next}', function() {
            expect(context.next.more).to.be.equal(false);
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 3} in section {last}', function() {
            expect(context.last.page).to.be.equal(3);
        });
    });

    describe('When 3 pages exist and 2th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(2, 3, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 2} in section {active}', function() {
            expect(context.active.page).to.be.equal(2);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 3} in section {last}', function() {
            expect(context.last.page).to.be.equal(3);
        });
    });

    describe('When 3 pages exist and 3th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(3, 3, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should return section {prev}', function() {
            expect(context).to.have.property('prev');
        });

        it('should have property {page} in section {prev}', function() {
            expect(context.prev).to.have.property('page');
        });

        it('should have {page: 2} in section {prev}', function() {
            expect(context.prev.page).to.be.equal(2);
        });

        it('should have property {more} in section {prev}', function() {
            expect(context.prev).to.have.property('more');
        });

        it('should have {more: false} in section {next}', function() {
            expect(context.prev.more).to.be.equal(false);
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 3} in section {active}', function() {
            expect(context.active.page).to.be.equal(3);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should NOT return section {last}', function() {
            expect(context).to.not.have.property('last');
        });
    });

    describe('When 5 pages exist and 1th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(1, 5, options);
        });

        it('should NOT return section {first}', function() {
            expect(context).to.not.have.property('first');
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 1} in section {active}', function() {
            expect(context.active.page).to.be.equal(1);
        });

        it('should return section {next}', function() {
            expect(context).to.have.property('next');
        });

        it('should have property {page} in section {next}', function() {
            expect(context.next).to.have.property('page');
        });

        it('should have {page: 2} in section {next}', function() {
            expect(context.next.page).to.be.equal(2);
        });

        it('should have property {more} in section {next}', function() {
            expect(context.next).to.have.property('more');
        });

        it('should have {more: true} in section {next}', function() {
            expect(context.next.more).to.be.equal(true);
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 5} in section {last}', function() {
            expect(context.last.page).to.be.equal(5);
        });
    });

    describe('When 5 pages exist and 2th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(2, 5, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should NOT return section {prev}', function() {
            expect(context).to.not.have.property('prev');
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 2} in section {active}', function() {
            expect(context.active.page).to.be.equal(2);
        });

        it('should return section {next}', function() {
            expect(context).to.have.property('next');
        });

        it('should have property {page} in section {next}', function() {
            expect(context.next).to.have.property('page');
        });

        it('should have {page: 3} in section {next}', function() {
            expect(context.next.page).to.be.equal(3);
        });

        it('should have property {more} in section {next}', function() {
            expect(context.next).to.have.property('more');
        });

        it('should have {more: true} in section {next}', function() {
            expect(context.next.more).to.be.equal(true);
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 5} in section {last}', function() {
            expect(context.last.page).to.be.equal(5);
        });
    });

    describe('When 5 pages exist and 3th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(3, 5, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should return section {prev}', function() {
            expect(context).to.have.property('prev');
        });

        it('should have property {page} in section {prev}', function() {
            expect(context.prev).to.have.property('page');
        });

        it('should have {page: 2} in section {prev}', function() {
            expect(context.prev.page).to.be.equal(2);
        });

        it('should have property {more} in section {prev}', function() {
            expect(context.prev).to.have.property('more');
        });

        it('should have {more: false} in section {prev}', function() {
            expect(context.prev.more).to.be.equal(false);
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 3} in section {active}', function() {
            expect(context.active.page).to.be.equal(3);
        });

        it('should return section {next}', function() {
            expect(context).to.have.property('next');
        });

        it('should have property {page} in section {next}', function() {
            expect(context.next).to.have.property('page');
        });

        it('should have {page: 4} in section {next}', function() {
            expect(context.next.page).to.be.equal(4);
        });

        it('should have property {more} in section {next}', function() {
            expect(context.next).to.have.property('more');
        });

        it('should have {more: false} in section {next}', function() {
            expect(context.next.more).to.be.equal(false);
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 5} in section {last}', function() {
            expect(context.last.page).to.be.equal(5);
        });
    });

    describe('When 5 pages exist and 4th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(4, 5, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should return section {prev}', function() {
            expect(context).to.have.property('prev');
        });

        it('should have property {page} in section {prev}', function() {
            expect(context.prev).to.have.property('page');
        });

        it('should have {page: 3} in section {prev}', function() {
            expect(context.prev.page).to.be.equal(3);
        });

        it('should have property {more} in section {prev}', function() {
            expect(context.prev).to.have.property('more');
        });

        it('should have {more: true} in section {prev}', function() {
            expect(context.prev.more).to.be.equal(true);
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 4} in section {active}', function() {
            expect(context.active.page).to.be.equal(4);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should return section {last}', function() {
            expect(context).to.have.property('last');
        });

        it('should have property {page} in section {last}', function() {
            expect(context.last).to.have.property('page');
        });

        it('should have {page: 5} in section {last}', function() {
            expect(context.last.page).to.be.equal(5);
        });
    });
    
    describe('When 5 pages exist and 5th is active', function() {
        var context;

        beforeEach(function() {
            context = paginator(5, 5, options);
        });

        it('should return section {first}', function() {
            expect(context).to.have.property('first');
        });

        it('should have property {page} in section {first}', function() {
            expect(context.first).to.have.property('page');
        });

        it('should have {page: 1} in section {first}', function() {
            expect(context.first.page).to.be.equal(1);
        });

        it('should return section {prev}', function() {
            expect(context).to.have.property('prev');
        });

        it('should have property {page} in section {prev}', function() {
            expect(context.prev).to.have.property('page');
        });

        it('should have {page: 4} in section {prev}', function() {
            expect(context.prev.page).to.be.equal(4);
        });

        it('should have property {more} in section {prev}', function() {
            expect(context.prev).to.have.property('more');
        });

        it('should have {more: true} in section {next}', function() {
            expect(context.prev.more).to.be.equal(true);
        });

        it('should return section {active}', function() {
            expect(context).to.have.property('active');
        });

        it('should have property {page} in section {active}', function() {
            expect(context.active).to.have.property('page');
        });

        it('should have {page: 5} in section {active}', function() {
            expect(context.active.page).to.be.equal(5);
        });

        it('should NOT return section {next}', function() {
            expect(context).to.not.have.property('next');
        });

        it('should NOT return section {last}', function() {
            expect(context).to.not.have.property('last');
        });
    });
});