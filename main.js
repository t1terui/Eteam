//クイズの問題や選択肢、正解を入れる配列
let quizdata = [
    [
        ['世界で一番多い血液型は？', ['A.A型','B.B型','C.O型','D.AB型'], 3, ''],
        ['哺乳類に分類される海の生き物はどれでしょう？', ['A.サメ','B.クジラ','C.ナマコ','D.イカ'], 2, '間違えやすいサメは魚類です。魚類か哺乳類かを判断する一番簡単な見分け方は尾ビレの付き方です。魚類は、尾びれが垂直についていて、哺乳類は水平に付いています'],
        ['三大栄養素とは「炭水化物」「タンパク質」とあともう一つはなんでしょう？', ['A.脂質','B.ビタミン','C.ミネラル','D.糖質'], 1, 'この三つの栄養素は、生命維持や身体活動に欠かせないエネルギー源です。'],
        ['赤色と青色の絵具を混ぜると何色になるでしょう？', ['A.オレンジ色','B.紫色','C.灰色','D.桃色'], 2, ''],
        ['最高気温30℃に達した日を何というでしょう？', ['A.夏日','B.真夏日','C.猛暑日','D.酷暑日'], 2, '「夏日」は25℃以上に達した日、「猛暑日」は35℃以上に達した日、気象庁に「酷暑日」という区分はありません。'],
        ['世界一栄養価のない野菜としてギネス登録されているのはどれでしょう？', ['A.きゅうり','B.ワケギ','C.春菊','D.ネギ'], 1, 'きゅうりは大半が水分なので、栄養素の含有量が少ない。'],
        ['畑の肉と呼ばれるものはなんでしょう？', ['A.かぼちゃ','B.じゃがいも','C.大豆','D.りんご'], 3, ''],
        ['森のバターと呼ばれるものはなんでしょう？', ['A.アボカド','B.バナナ','C.ドリアン','D.じゃがいも'], 1, ''],
        ['サハラ砂漠の「サハラ」の意味はなんでしょう？', ['A.不滅','B.古代','C.永遠','D.砂漠'], 4, 'すべて日本語に訳すと「砂漠砂漠」になってしまいます。'],
        ['せんべいやスナック菓子の「サラダ味」とは、何の味のこと？', ['A.グリーンサラダ味','B.サラッとした味','C.サラダ油味','D.野菜味'], 3, 'サラダの味ではなく、サラダ油を使って作った菓子をサラダ味としています。'],
        ['次のうち腐らないものはどれでしょう？', ['A.ハチミツ','B.トマト','C.ネギ','D.コンソメスープ'], 1, 'ハチミツは糖度が高く水分が少ないことから、細菌やバクテリアが繁殖しづらいため。ちなみに、スープもネギも最近によって腐る。'],
        ['シュークリームの「シュー」の意味は？', ['A.バリバリ','B.山','C.キャベツ','D.生'], 3, '生地をキャベツに見立てた。'],
        ['次のうち車のナンバープレートに使われない平仮名は？', ['A.わ','B.あ','C.お','D.え'], 3, '「お」「し」「へ」「ん」は使われない。「お」は「あ」と間違いやすいため、「し」は死を「へ」は屁を連想させるため。「ん」は発音しづらいため。'],
        ['フグの膨らんでいる部分は、どの部位？', ['A.肺','B.頬','C.胃','D.手'], 3, '頬ではない。威嚇する際に空気や水を吸い込み胃に入れることで膨らむ。'],
        ['電話をかける時に非通知にするための番号は？', ['A.111','B.184','C.186','D.232'], 2, '相手先の電話番号の前に「184」をつけることで電話番号を通知せずに発信することができます。184「いやよ」という語呂合わせで覚えるとよい。'],
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
let remnum_array = [];          //消す選択肢を入れる配列

//問題を表示
print_quiz();

//50-50で選択肢を消す関数
document.getElementById('fiftyfifty').addEventListener('click', function(e){
    if(!fiftyfiftyused){
        var i = 0;
        while(i < 2){
            var num = Math.floor(Math.random()*4)+1;
            // console.log("正解"+quizdata[0][currentquizNo][2]);
            if(!remnum_array.includes(num) && num != quizdata[0][currentquizNo][2]){
                remnum_array.push(num);
                // console.log(remnum_array[i]);
                i++;
            }
        }
        let parent = document.querySelector('.Choices');
        let j = 0;
        for(var i = 0; i < 4; i++){
            if(i == remnum_array[0]-1 || i == remnum_array[1]-1){
                if(j == 0){
                    parent.removeChild(parent.children[i]);
                    // console.log(parent.children[i]);
                    j++;
                }
                else{
                    parent.removeChild(parent.children[i-1]);
                    // console.log(parent.children[i-1]);
                }
            }
        }
        fiftyfiftyused = true;
    }
    else{
        alert('50-50は使用済み');
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

//ライフライン
document.getElementById('fiftyfifty').addEventListener('click', function(e){
    
})
