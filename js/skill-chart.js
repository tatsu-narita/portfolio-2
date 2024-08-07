//skillChart

var ctx = document.getElementById("skillChart").getContext('2d');
var skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["HTML", "CSS", "JavaScript", "Java", "PHP"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [4,4,3,2,3],
                //グラフラベル
                label: "使用可能言語",
                //背景色
                backgroundColor: "rgba(67, 133, 215, 0.5)",
                //線の終端設定
                borderCapStyle: "butt",
                //線の色
                borderColor: "rgba(67, 133, 215, 1)",
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            r: {
                //グラフの値
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1 //目盛間隔
                }
            }
        }
    }
});

//skillChart-2

var ctx2 = document.getElementById("skillChart-2").getContext('2d');
var skillChart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["Next.js", "JQuery", "WordPress", "TailwindCSS", "React"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [3,3,3,3,3],
                //グラフラベル
                label: "フレームワーク/ライブラリ",
                //背景色
                backgroundColor: "rgba(255, 133, 215, 0.5)",
                //線の終端設定
                borderCapStyle: "butt",
                //線の色
                borderColor: "rgba(255, 0, 0, 1)",
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            r: {
                //グラフの値
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1 //目盛間隔
                }
            }
        }
    }
});

//skillChart-3

var ctx2 = document.getElementById("skillChart-3").getContext('2d');
var skillChart3 = new Chart(ctx2, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["Git/GitHub", "Docker", "Notion", "Figma", "Canva"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [3,3,3,3,3],
                //グラフラベル
                label: "DevOps",
                //背景色
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                //線の終端設定
                borderCapStyle: "butt",
                //線の色
                borderColor: "rgba(75, 192, 192, 1)",
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            r: {
                //グラフの値
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1 //目盛間隔
                }
            }
        }
    }
});