module.exports = function main(miles, waitingMinute) {
    var price = 0;
    if (waitingMinute != 0)
        price += waitingMinute * 0.25;
    if (miles <= 2)
        price += 6;
    if (miles > 2 && miles <= 8)
        price += 6 + (miles - 2) * 0.8;
    if (miles > 8)
        price += 10.8 + (miles - 8) * 1.2;
    price = Math.floor(price);
    return price;
};