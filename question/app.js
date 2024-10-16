//基礎編
//Q1 変数
let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' +nickname+ 'です。年齢は' +age+ 'です。');

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。')

//Q3 オブジェクト
let user = {
  name: 'john',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'john',
    age: 26,
    favorites:['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name:'Bob',
    age: 33,
    favorites:['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites:['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5 四則演算
let sum =0;
for (let i =0; i < playerList.length; i++) {
  sum+= playerList[i].age;
}

console.log(sum/ playerList.length);

//Q6 関数
function sayHello() {
  // let hello = 'Hello';
  console.log('hello');
}
sayHello();

const world = function() {
  // let sayWorld = 'world';
  console.log('world');
}
world();

//Q7 メソッド
user.birthday = '2000-09-27';

user.method = function sayHello() {
  let hello = 'Hello!'
  console.log(hello);
}
user.method();

//Q8 引数
let calc = {
  add : function add(){
    let x = 4;
    let y = 3;
    console.log(x + y);
  },
  
  subtract : function subtract (){
    let x = 15;
    let y = 5;
    console.log(x-y);
  },

  multiply  : function multiply (){
    let x =7;
    let y =7;
    console.log(x * y);
  },

  divide : function divide (){
    let x = 10;
    let y = 2;
    console.log(x / 2);
  }
};

calc.add();
calc.subtract();
calc.multiply();
calc.divide();

//Q9 戻り値
function surplus(x, y) {
  let subtract = x % y;
  return subtract;
}
console.log('5を3で割った余りは' + surplus(5, 3) + 'です。');

//Q10 スコープ
//A.JavaScriptでは、関数の中で定義した変数はその関数内でしか使用できないローカル変数という概念があり、Q10コードの変数xはfoo関数内で宣言されているためローカル変数という扱いになる。だが、Q10コードではfoo関数外つまり、変数xのスコープ(有効範囲)外で参照しようとしているが、xはローカル変数のため参照することができずエラーが出力される。

//Q10コード
// function foo() {
//   let x = 1;
// }
// console.log(x);




//応用編
//Q1 標準組み込みオブジェクト
let random = Math.floor( Math.random() * 11); //floorメソッドは小数点以下を切り捨てる
console.log(random);

//Q2 コールバック関数
setTimeout(function(){
  console.log('Hello World!')
},5000);

//Q3 if
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i) //pushメソッドで配列の末尾に追加されていく
}

console.log(numbers);

//Q5 for
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (mixed[i] % 2 == 0 && typeof mixed[i] === 'number') {
    console.log('even');
  } else if (mixed[i] % 2 == 1 && typeof mixed[i] === 'number') {
    console.log('odd');
  } else {
    console.log('not number');
  }
}
