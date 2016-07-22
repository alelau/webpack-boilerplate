'use strict';

import Index from './index.js';

describe('index', ()=> {
    it('exists', ()=> {
        expect(Index).to.exist;
    });
    it('works again', ()=> {
        expect('hi').to.equal('hi');
    });
});