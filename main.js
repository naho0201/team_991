window.onload = function() {

    // [作成] フォームタグを作成
    let FormTag = document.createElement("form");
    // [設定] フォームタグにid名を追加
    FormTag.id = "searchForm";
    // [作成] フォームタグの中身を作成
    FormTag.innerHTML = `
    <input type="text" id="searchWord" size="10">
    <input type="button" id="searchBtn" value="検索">
    `;
    // [表示] フォームタグの表示場所を指定(<form>タグを<script>タグの直前に表示)
    document.getElementById("GoogleSearchScript").parentNode.insertBefore(FormTag, document.getElementById("GoogleSearchScript"));
    // [実行] エンターキー押した時に実行
    document.getElementById("searchForm").addEventListener("submit", GoogleSearch);
    // [実行] ボタンクリックした時に実行
    document.getElementById("searchBtn").addEventListener("click", GoogleSearch);
    // [実行] 実行内容
    function GoogleSearch(event) {
    event.preventDefault();
    // [取得] スクリプトが設置されているサイトのドメインを取得
    let SearchSite = window.location.hostname;
    // [取得] フォームタグに入力された文字を取得
    let SearchWord = encodeURIComponent(document.getElementById("searchWord").value);
    // [転送] Google検索結果ページに移動
    window.location.assign(`https://www.google.com/search?q=${SearchWord}+site:${SearchSite}`);
    }
    
    };