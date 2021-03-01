module.exports = function toReadable (number) {
    debugger;
    const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number == 0) {
        return 'zero';
    }

    return convert(number);

    function convert(number) {
        if (number > 99) {
            if(number % 100 != 0){
                return ones[(Math.floor(number / 100)) - 1] + ' hundred ' + convertDozens(number % 100);
            } else {
                return ones[(Math.floor(number / 100)) - 1] + ' hundred';
            }
        } else {
            return convertDozens(number);
        }
    };
    function convertDozens(number) {
        if (number < 10) {
            return ones[number - 1];
        }
        else if (number >= 10 && number < 20) {
            return teens[number - 10];
        } 
        else {
            if(number % 10 != 0){
                return dozens[(Math.floor(number / 10)) - 2] + ' ' + ones[(number % 10) - 1];
            } else {
                return dozens[(Math.floor(number / 10)) - 2];
            }
        }
    }
}
