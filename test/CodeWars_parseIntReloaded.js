
var assert = require('assert');
var startTime = 0;

// before(() => {
//     startTime = performance.now();
//     console.log(`startTime: ${startTime}`);
// });

// after(() => {
//     console.log(`TIME IS: ${performance.now() - startTime}`);
// });



describe('parseIntReloadedTests', function () {

    beforeEach(function () {
        console.time("tests");
    });

    afterEach(function () {
        console.timeEnd("tests");
    });

    describe('test correctness', function () {
        it('1', function () {
            assert.equal(parseInt('one'), 1);
        });
        it('9', function () {
            assert.equal(parseInt('nine'), 9);
        });
        it('11', function () {
            assert.equal(parseInt('eleven'), 11);
        });
        it('15', function () {
            assert.equal(parseInt('fifteen'), 15);
        });
        it('20', function () {
            assert.equal(parseInt('twenty'), 20);
        });
        it('45', function () {
            assert.equal(parseInt('forty five'), 45);
        });
        it('53', function () {
            assert.equal(parseInt('fifty three'), 53);
        });
        it('246', function () {
            assert.equal(parseInt('two hundred forty six'), 246);
        });
        it('8246', function () {
            assert.equal(parseInt('eight thousand two hundred forty six'), 8246);
        });
        it('58458', function () {
            assert.equal(parseInt('fifty eight thousand four hundred fifty eight'), 58458);
        });
        it('845625', function () {
            assert.equal(parseInt('eight hundred forty five thousand six hundred twenty five'), 845625);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
        it('567853', function () {
            assert.equal(parseInt('five hundred sixty seven thousand eight hundred fifty three'), 567853);
        });
    });

    describe('test speed', function () {
        it('1', function () {
            for (var k = 0; k < 10000; k++) {
                parseInt('one');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('five hundred sixty seven thousand eight hundred fifty three');
                parseInt('forty five');
                parseInt('fifty three');
                parseInt('two hundred forty six');
                parseInt('eight thousand two hundred forty six');
                parseInt('fifty eight thousand four hundred fifty eight');
            }
        });
        // RESULT:
        // the above test, run on my laptop takes about
        // 220ms for the decomposed version of this function
        // 330ms for the recursive version
        // the resusive version is shorter, but
        // the decomposed one is faster, and also I would argue more readable/maintainable
    });
});



// many functions, kinda messy?
function parseInt(string) {
    // console.log(`----- parseInt: ${string}`);
    if (string.indexOf("million") > -1) {
        return 1000000;
    }

    return parseThousands(string);
}

function parseThousands(string) {
    var indexOf = string.indexOf("thousand");
    if (indexOf > -1) {
        var thousands = string.substring(0, indexOf);
        var after = string.substring(indexOf + "thousand ".length);
        return parseHundreds(thousands) * 1000 + parseHundreds(after);
    }
    return parseHundreds(string);
}

function parseHundreds(string) {
    var indexOf = string.indexOf("hundred");
    if (indexOf > -1) {
        var hundreds = string.substring(0, indexOf);
        var after = string.substring(indexOf + "hundred ".length);
        return parseUnderHundred(hundreds) * 100 + parseUnderHundred(after);
    }
    return parseUnderHundred(string);
}

function parseUnderHundred(string) {
    // Check numbers 21-99
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    for (var iii = 0; iii < tens.length; iii++) {
        var curr = tens[iii];
        if (tens[iii] && string.indexOf(curr) > -1) {
            return (iii * 10) + parseOnes(string.substring(curr.length))
        }
    }

    // Check teens
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    for (var jj = 0; jj < teens.length; jj++) {
        var curr = teens[jj];
        if (teens[jj] && string.indexOf(curr) > -1) {
            return jj + 10;
        }
    }

    return parseOnes(string);
}

function parseOnes(string) {
    if (string.indexOf("one") > -1) {
        return 1;
    } else if (string.indexOf("two") > -1) {
        return 2;
    } else if (string.indexOf("three") > -1) {
        return 3;
    } else if (string.indexOf("four") > -1) {
        return 4;
    } else if (string.indexOf("five") > -1) {
        return 5;
    } else if (string.indexOf("six") > -1) {
        return 6;
    } else if (string.indexOf("seven") > -1) {
        return 7;
    } else if (string.indexOf("eight") > -1) {
        return 8;
    } else if (string.indexOf("nine") > -1) {
        return 9;
    }
    return 0;
}



// -------------------------------------------------




// function parseInt(string) {
//     // console.log(`----- parseInt: ${string}`);

        // if (string.indexOf("million") > -1) {
        //     return 1000000;
        // }

//     // parse thousands
//     var indexOfThousand = string.indexOf("thousand");
//     if (indexOfThousand > -1) {
//         var thousands = string.substring(0, indexOfThousand);
//         var after = string.substring(indexOfThousand + "thousand ".length);
//         return parseInt(thousands) * 1000 + parseInt(after);
//     }

//     // parse hundreds
//     var indexOfHundred = string.indexOf("hundred");
//     if (indexOfHundred > -1) {
//         var hundreds = string.substring(0, indexOfHundred);
//         var after = string.substring(indexOfHundred + "hundred ".length);
//         return parseInt(hundreds) * 100 + parseInt(after);
//     }

//     // Check numbers 21-99
//     var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
//     for (var iii = 0; iii < tens.length; iii++) {
//         var curr = tens[iii];
//         if (tens[iii] && string.indexOf(curr) > -1) {
//             return (iii * 10) + parseInt(string.substring(curr.length))
//         }
//     }

//     // Check teens
//     var teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     for (var jj = 0; jj < teens.length; jj++) {
//         var curr = teens[jj];
//         if (teens[jj] && string.indexOf(curr) > -1) {
//             return jj + 10;
//         }
//     }

//     if (string.indexOf("one") > -1) {
//         return 1;
//     } else if (string.indexOf("two") > -1) {
//         return 2;
//     } else if (string.indexOf("three") > -1) {
//         return 3;
//     } else if (string.indexOf("four") > -1) {
//         return 4;
//     } else if (string.indexOf("five") > -1) {
//         return 5;
//     } else if (string.indexOf("six") > -1) {
//         return 6;
//     } else if (string.indexOf("seven") > -1) {
//         return 7;
//     } else if (string.indexOf("eight") > -1) {
//         return 8;
//     } else if (string.indexOf("nine") > -1) {
//         return 9;
//     }
//     return 0;
// }
