// var vall = "var変数";
// console.log(vall);

// vall = "var変数上書き";
// console.log(vall);

// var vall = "var変数再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// let val2 = "let変数再宣言";
// console.log(val2);

// const val3 = "const変数宣言";
// console.log(val3);

// val3 = "const変数宣言";
// console.log(val3);

// const val3 = "const変数宣言";
// console.log(val3);

// const val4 = {
//   name: "hidaka",
//   age: 25
// };
// val4.name = "aaa";
// val4.age = 30;
// console.log(val4);

// const val5 = ["dog", "vat"];
// console.log(val5);

// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "aaa";
// const age = 25;

// const massage1 = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// console.log(massage1);

// const massage2 = `私の名前は${name}です。年齢は${age}です。。。`;
// console.log(massage2);

//アロー関数
// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("aaa"));

// const func3 = (str) => str;

// console.log(func3("func3です。"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

//分割代入
// const myProfile = {
//   name: "abc",
//   age: 25
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["abc", 25];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("abs");

//スプレット構文 ...
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//入れるのコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [arr4, arr5];
// console.log(arr4);
// console.log(arr5);
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

//map fillterの配列処理
// const nameArr = ["tanaka", "yamada", "邪ゃけい"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index, num) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const nuwNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(nuwNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "邪ゃけい") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//参考演算子
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を越えています。" : "許容範囲内です。";
// };

// console.log(checkSum(50, 81));

//論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

// ||の左側がfalseとなるとき右を返す
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// ||の左側がtrueとなるとき右を返す
// const num2 = null;
// const fee2 = num2 && "何かが設定されました。";
// console.log(fee2);
