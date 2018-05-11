const main = require('../main/main');

describe('taxi fee', function() {
    // write your tests here...
    it('里程两公里以内', function() {
        var miles = 2;
        var result = main(miles, 0);
        expect(result).toEqual(6);
    })
    it('里程超过两公里不到八公里', function() {
        var miles = 6;
        var result = main(miles, 0);
        expect(result).toEqual(9);
    })
    it('里程超过八公里', function() {
        var miles = 10;
        var result = main(miles, 0);
        expect(result).toEqual(13);
    })
    it('有等待时间', function() {
        var miles = 10;
        var waitingMinute = 10;
        var result = main(miles, waitingMinute);
        expect(result).toEqual(15);
    })
});