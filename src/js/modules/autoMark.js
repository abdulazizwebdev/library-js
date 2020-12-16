const autoMark = function(auto = false) {

    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 9);
        if (random === 10) {
            continue;
        }

        console.log(random);
    }

};

autoMark(true);