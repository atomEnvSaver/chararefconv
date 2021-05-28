var should = require('should'),
    npmsample = require('../src/index'),
    escape = npmsample.escape,
    unescape = npmsample.unescape;
describe('#escape', function () {
    it('converts1 & into &amp;', function () {
        escape('&').should.equal('&amp;');
    });
    it('converts2 " into &quot;', function () {
        escape('"').should.equal('&quot;');
    });
    it('converts3 \' into &#39;', function () {
        escape('\'').should.equal('&#39;');
    });
    it('converts4 < into &lt;', function () {
        escape('<').should.equal('&lt;');
    });
    it('converts6 > into &gt;', function () {
        escape('>').should.equal('&gt;');
    });
    it('converts5 \' \' into &nbsp;', function () {
        escape(' ').should.equal('&nbsp;');
    });
});
describe('#unescape', function () {
    it('converts &amp; into &', function () {
        unescape('&amp;').should.equal('&');
    });
    it('converts &quot; into "', function () {
        unescape('&quot;').should.equal('"');
    });
    it('converts &#39; into \'', function () {
        unescape('&#39;').should.equal('\'');
    });
    it('converts &lt; into <', function () {
        unescape('&lt;').should.equal('<');
    });
    it('converts &gt; into >', function () {
        unescape('&gt;').should.equal('>');
    });
});

