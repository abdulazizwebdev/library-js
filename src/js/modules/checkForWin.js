const checkForWin = function() {
    let progress = 0;
    let arr = [];
    const btns = document.querySelectorAll('.btn.btn-dark');
    function add(i) {
        btns[i].classList.add('clicked');
        progress = 1;
        return progress;
    }
    btns.forEach((btn, i) => {
        let attr = btn.getAttribute('data-click');
        arr.push(attr);
    });
    console.log(arr);
    if (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) {
        add(0);
        add(1);
        add(2);
    } else if (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) {
        add(3);
        add(4);
        add(5);
    } else if (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) {
        add(6);
        add(7);
        add(8);
    } else if (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) {
        add(0);
        add(3);
        add(6);
    } else if (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) {
        add(1);
        add(4);
        add(7);
    } else if (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) {
        add(2);
        add(5);
        add(8);
    } else if (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) {
        add(0);
        add(4);
        add(8);
    } else if (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) {
        add(2);
        add(4);
        add(6);
    } else {
        progress = -1;
        return progress;
    }

    if (progress == 1) {
        btns.forEach(btn => {
            btn.setAttribute('disabled', 'true');
            btn.classList.add('active');
        });
    }
};

export default checkForWin;