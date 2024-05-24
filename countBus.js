// task 2


const readline = require('readline');

const readLines = (cb) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Input the number of families: ', (nfamily) => {
        rl.question('Input the number of members in the family (separated by a space): ', (nmembers) => {
            cb(nfamily, nmembers, () => {
                rl.close();
                readLines(cb);
            });
        });
    });
}

function countBus(nfamily, nmembers, cb) {
    nmembers = nmembers.split(' ');
    nmembers = nmembers.map(Number);
    nmembers.sort((a, b) => b - a);

    if (nfamily != nmembers.length) {
        console.log('\nInput must be equal with count of family\n');
        cb();
        return;
    }
    const busCapacity = 4;
    let i = 0;
    let j = nmembers.length - 1;
    let minimumBus = 0;
    while (i <= j) {
        if (nmembers[i] + nmembers[j] <= busCapacity) {
            j--;
        }
        i++;
        minimumBus++;
    };
    console.log(`\nMinimum bus required is: ${minimumBus}\n`);
    cb();
    return;
}

readLines(countBus);