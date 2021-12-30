//クイズの問題や選択肢、正解を入れる配列
let quizdata = [
    [
        ['世界で一番多い血液型は？', ['A.A型','B.B型','C.O型','D.AB型'], 3,[[40,0],[50,0],[90,0],[100,0]], '📞ヒント'],
        ['哺乳類に分類される海の生き物はどれでしょう？', ['A.サメ','B.クジラ','C.ナマコ','D.イカ'], 2,[[30,0],[70,0],[85,0],[100,0]], '📞ヒント'],
        ['三大栄養素とは「炭水化物」「タンパク質」とあともう一つはなんでしょう？', ['A.脂質','B.ビタミン','C.ミネラル','D.糖質'], 1, [[40,0],[60,0],[80,0],[100,0]], '📞ヒント'],
        ['赤色と青色の絵具を混ぜると何色になるでしょう？', ['A.オレンジ色','B.紫色','C.灰色','D.桃色'], 2, [[10,0],[80,0],[90,0],[100,0]], '📞ヒント'],
        ['最高気温30℃に達した日を何というでしょう？', ['A.夏日','B.真夏日','C.猛暑日','D.酷暑日'], 2, [[20,0],[55,0],[75,0],[100,0]], '📞ヒント'],
        ['世界一栄養価のない野菜としてギネス登録されているのはどれでしょう？', ['A.きゅうり','B.ワケギ','C.春菊','D.ネギ'], 1, [[35,0],[55,0],[75,0],[100,0]], '📞ヒント'],
        ['畑の肉と呼ばれるものはなんでしょう？', ['A.かぼちゃ','B.じゃがいも','C.大豆','D.りんご'], 3, [[20,0],[50,0],[90,0],[100,0]], '📞ヒント'],
        ['森のバターと呼ばれるものはなんでしょう？', ['A.アボカド','B.バナナ','C.ドリアン','D.じゃがいも'], 1, [[35,0],[65,0],[85,0],[100,0]], '📞ヒント'],
        ['サハラ砂漠の「サハラ」の意味はなんでしょう？', ['A.不滅','B.古代','C.永遠','D.砂漠'], 4, [[24,0],[49,0],[74,0],[100,0]], '📞ヒント'],
        ['せんべいやスナック菓子の「サラダ味」とは、何の味のこと？', ['A.グリーンサラダ味','B.サラッとした味','C.サラダ油味','D.野菜味'], 3, [[40,0],[50,0],[90,0],[100,0]], '📞ヒント'],
        ['次のうち腐らないものはどれでしょう？', ['A.ハチミツ','B.トマト','C.ネギ','D.コンソメスープ'], 1, [[30,0],[55,0],[80,0],[100,0]], '📞ヒント'],
        ['シュークリームの「シュー」の意味は？', ['A.バリバリ','B.山','C.キャベツ','D.生'], 3, [[20,0],[45,0],[75,0],[100,0]], '📞ヒント'],
        ['次のうち車のナンバープレートに使われない平仮名は？', ['A.わ','B.あ','C.お','D.え'], 3, [[25,0],[50,0],[80,0],[100,0]], '📞ヒント'],
        ['フグの膨らんでいる部分は、どの部位？', ['A.肺','B.頬','C.胃','D.手'], 3, [[30,0],[60,0],[95,0],[100,0]], '📞ヒント'],
        ['電話をかける時に非通知にするための番号は？', ['A.111','B.184','C.186','D.232'], 2, [[20,0],[50,0],[75,0],[100,0]], '📞ヒント']
    ],
    [
        [0, 'result.html'],
        [1, 'result.html'],
        [2, 'result.html'],
        [3, 'result.html'],
        [4, 'result.html'],
        [5, 'result.html'],
        [6, 'result.html'],
        [7, 'result.html'],
        [8, 'result.html'],
        [9, 'result.html'],
        [10, 'result.html'],
        [11, 'result.html'],
        [12, 'result.html'],
        [13, 'result.html'],
        [14, 'result.html'],
        [15, 'result.html']
    ]
];

let currentquizNo;      //(quizdata配列の)問題番号
let quizcount = 0;
let correctcount = 0;   //正解数
let experiencequiz = [];    //すでに出題した問題を入れるための配列
let excount = 0;        //experiencequiz配列の添え字に使う用
let fiftyfiftyused = false;     //50-50を使ったかどうか
let audienceused = false;       //オーディエンスを使ったかどうか
let audienceused2 = false;      //プログラムの仕様上必要
let telephoneused = false;
let remnum_array = [];          //消す選択肢を入れる配列

//問題を表示
print_quiz();

//50-50で選択肢を消す関数
document.getElementById('fiftyfifty').addEventListener('click', function(e){
    if(!fiftyfiftyused){
        var i = 0;
        while(i < 2){
            var num = Math.floor(Math.random()*4)+1;
            if(!remnum_array.includes(num) && num != quizdata[0][currentquizNo][2]){
                remnum_array.push(num);
                i++;
            }
        }
        let parent = document.querySelector('.Choices');
        let j = 0;
        for(var i = 0; i < 4; i++){
            if(i == remnum_array[0]-1 || i == remnum_array[1]-1){
                if(j == 0){
                    parent.removeChild(parent.children[i]);
                    j++;
                }
                else{
                    parent.removeChild(parent.children[i-1]);
                }
            }
        }
        fiftyfiftyused = true;
    }
    else{
        alert('50-50は使用済み');
    }
})

//オーディエンスのグラフを作る関数
document.getElementById('audience').addEventListener('click', function(e){
    if(!audienceused){
        let count = 0;
        while(count < 100){
            let rand = Math.floor(Math.random()*100)+1;
            for(var i = 0; i < 4; i++){
                if(quizdata[0][currentquizNo][3][i][0] >= rand){
                    quizdata[0][currentquizNo][3][i][1]++;
                    break;
                }
            }
            count++;
        }

        var ctx = document.getElementById("myBarChart");
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['A','B','C','D'],
            datasets: [
                {
                    label: 'オーディエンス',
                    data: [quizdata[0][currentquizNo][3][0][1], quizdata[0][currentquizNo][3][1][1], quizdata[0][currentquizNo][3][2][1], quizdata[0][currentquizNo][3][3][1]],
                    backgroundColor: "silver",
                    fontColor: "white"
                }
            ]
            },
            options: {
            title: {
                display: true,
                // text: '結果',
                fontColor: "white"
            },
            scales: {
                xAxes :[{
                    scaleLabel: {                 // 軸ラベル
                        display: true,                // 表示設定
                        labelString: '結果',    // ラベル
                        fontColor: "white",             // 文字の色
                        fontSize: 16                  // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "rgba(255, 0, 0, 0.2)", // 補助線の色
                    },
                    ticks: {                      // 目盛り
                        fontColor: "white",             // 目盛りの色
                        fontSize: 14                  // フォントサイズ
                    }
                }],
                yAxes: [{
                ticks: {
                    suggestedMax: 100,
                    suggestedMin: 0,
                    stepSize: 10,
                    fontColor: "white",
                    callback: function(value, index, values){
                    return  value +  '%'
                    }
                }
                }]
            },
            }
        });
        audienceused = true;
    }
    else{
        alert('オーディエンスは使用済み');
    }
})

//テレフォンを表示する関数
document.getElementById('telephone').addEventListener('click', function(e){
    if(!telephoneused){
        alert(quizdata[0][currentquizNo][4]);
        telephoneused = true;
    }
    else{
        alert("テレフォンは使用済み");
    }
})


//解答した後のイベント
after_answer_quiz_event();

//問題を表示するための関数
function print_quiz(){
    //重複しない乱数を生成
    while(true){
        var num = Math.floor(Math.random()*quizdata[0].length);

        //まだ出題していない問題の場合
        if(!experiencequiz.includes(num)){
            experiencequiz.push(num);       //experiencequiz配列の一番後ろに今の問題データを入れる
            break;
        }
    }
    currentquizNo = experiencequiz[excount];
    excount++;

    //問題文
    var question = '<p>' + quizdata[0][currentquizNo][0] + '</p>';
    var box = document.getElementsByClassName('box');
    box[0].innerHTML = question;

    //解答ボタン
    var Choices = document.getElementsByClassName('Choices');
    var answer;
    for(var i = 0; i < quizdata[0][currentquizNo][1].length; i++){
        if(i == 0){
            answer = '<input type="button" class="btn btn--yellow btn--cubic" answer-choice="' + (i+1) +'" value="' + quizdata[0][currentquizNo][1][i] + '">';
        }
        else{
            answer += '<input type="button" class="btn btn--yellow btn--cubic" answer-choice="' + (i+1) +'" value="' + quizdata[0][currentquizNo][1][i] + '">';
        }
    }
    Choices[0].innerHTML = answer;
}

//解答した後のイベントを起こすための関数
function after_answer_quiz_event(){
    for(var i = 0; i < 4; i++){
        document.getElementsByClassName('btn')[i].addEventListener('click', function(e){
            if(audienceused && !audienceused2){
                document.getElementById('graph').remove();
                audienceused2 = true;
            }
            //正解発表
            answer_result_event(parseFloat(this.getAttribute('answer-choice')));
            // if(quizcount+1 < 15){
            //     //次の問題を用意する
            //     register_nextquiz_event();
            // }
        });
    }
}

//次の問題に移るための関数
function register_nextquiz_event(){
    quizcount++;
    //問題を表示
    print_quiz();
    //解答した後のイベント
    after_answer_quiz_event();
}

//正解発表などをする関数(仮実装)
function answer_result_event(choice){
    //正解の場合
    if(quizdata[0][currentquizNo][2] == choice){
        alert('正解');
        correctcount++;
    }
    //不正解の場合
    else{
        alert('不正解');
    }
    if(quizcount+1 < 15){
        register_nextquiz_event();
    }
    else{
        alert('正解数は'+ correctcount);
    }
}


