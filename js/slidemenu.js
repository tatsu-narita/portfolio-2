/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

//メニューを開く
menuOpen.addEventListener('click', () => {
    //console.log('メニューを開く');
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

    // リンクをひとつずつ順に表示
    menuItems.forEach((menuItem, index) => {
        console.log(`${index}番目のリスト`);
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 2400,
                delay: 300 * index,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    });
});

//メニューを閉じる
menuClose.addEventListener('click', () =>{
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity: [1, 0]}, menuOptions);
    });
});

/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //console.log(entry.target);
            entry.target.animate(
                {
                    opacity: [0, 1],
                    fill: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            //一度表示されたら監視をやめる
            obs.unobserve(entry.target);
        }
    });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

//.fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});