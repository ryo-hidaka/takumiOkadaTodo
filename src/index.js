import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//　未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストを追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTerget = completeButton.parentNode;
    // TODO内容テキスト取得
    const text = addTerget.firstElementChild.innerText;
    // div以下を初期化
    addTerget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deletetarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deletetarget);

      // テキストの取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグ生成
    addTerget.appendChild(li);
    addTerget.appendChild(backbutton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTerget);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // // button(戻す)生成
  // const backbutton = document.getElementById("back-button");
  // backbutton.addEventListener("click", () => {
  //   // 押された削除ボタンの親タグ(div)を未完了から削除
  //   deleteFromIncompleteList(backbutton.parentNode);
  //   document.getElementById("complete-list").removeChild(backbutton.parentNode);

  //   // 未完了リストに追加する要素
  //   const backTerget = backbutton.parentNode;
  //   // TODO内容テキスト取得
  //   const text = backTerget.firstElementChild.innerText;
  //   // div以下を初期化
  //   backTerget.textContent = null;
  //   // liタグ生成
  //   const li = document.createElement("li");
  //   li.innerText = text;
  //   // buttonタグ生成
  //   const backbutton = document.createElement("button");
  //   backbutton.innerText = "戻す";
  //   // divタグ生成
  //   backTerget.appendChild(li);
  //   backTerget.appendChild(completeButton);
  //   backTerget.appendChild(deleteButton);

  //   // 完了リストに追加
  //   document.getElementById("incomplete-list").appendChild(backTerget);
  // });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
