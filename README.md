# 新サイト（フレームなし・10ページ未満版）

`_site-v2` フォルダの中身が、そのまま GitHub Pages に置ける新サイト一式です（46ファイル・約2MB）。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | 新しいトップページ（フレーム廃止）。旧 `top.shtml` のロゴと、旧 `side.html` のメニューをひとつにまとめた目次 |
| `O-Japan-1,2,3,5,6,7-text.html` | 『大会運営学』本文。**本文の HTML は一切変えていません**。外側に共通メニュー（上）と前後ページへの案内（下）を足しただけです |
| `OCcomp.html` | 地図とデータで見るＯＣ大会の歩み。同上（横長の表はそのまま横スクロール） |
| `sub2.htm` | 日経記事「本場仕込み オリエンテーリング」。第７部の本文からリンクされているため同梱しました。不要なら削除し、第７部のリンクも外してください |
| `site.css` | 共通の見た目。配色はソフトなライムグリーン（メニュー背景）×グリーン（見出し・リンク）、フォントはメイリオ。旧HTMLの赤い見出し（`<FONT color="RED">`）と赤いロゴ画像は、HTMLや画像を変えずに CSS でグリーンに見せています（色を戻したいときは site.css の該当2行を消すだけ）。スマホでも読めるよう本文幅と画像幅を調整 |
| `analytics.js` | アクセス解析の差し込み口（下記） |
| 画像 | 上記ページが実際に使っている画像だけ（ロゴ3点、タイトル3点、図表5点、地図24点） |

各ページには `<title>` に部のタイトルを入れ、スマホ表示用の viewport 指定を加えました。`OCcomp.html` にあった閉じ引用符の欠けた `<link>` タグ（ブラウザによっては後続を壊す）も直しています。

## アクセス解析の入れ方（Google アナリティクス）

1. https://analytics.google.com/ で Google アカウントでログインし、「測定を開始」→ プロパティ名（例: orienteering）→ 「ウェブ」→ サイトの URL（`https://w-score.github.io`）を登録。
2. 「G-」で始まる測定 ID（例 `G-AB12CD34EF`）が表示されるので控える。
3. `analytics.js` の 4 行目 `var GA_ID = "";` を `var GA_ID = "G-AB12CD34EF";` のように書き換えて保存し、GitHub に Push。

これだけで全ページの計測が始まります。数日後から Google アナリティクスの「レポート」で、訪問数・どのページが読まれたか・国や端末などが見られます。表示カウンターはありません。

## 公開手順（GitHub Desktop・コマンド不要）

1. https://github.com/signup でアカウント作成（無料）。ユーザー名が URL になります（例 `ikegaya` → `https://ikegaya.github.io/`）。
2. GitHub にログイン → 右上「+」→「New repository」→ Repository name を **`w-score.github.io`** にして Public のまま「Create repository」。
3. https://desktop.github.com/ から GitHub Desktop を入れてサインイン →「File → Clone repository」で手順 2 のリポジトリを選び、保存先を決めて Clone。
4. `_site-v2` の中身を全部、Clone したフォルダにコピー。
5. GitHub Desktop の左下 Summary に「初回公開」などと書いて「Commit to main」→ 上の「Push origin」。
6. 1〜2 分で `https://w-score.github.io/` に公開されます。各ページの URL は `https://w-score.github.io/O-Japan-1-text.html` のように旧サイトと同じファイル名です。

以後の更新は「ファイルを直す → Commit → Push」の繰り返しで、これが FTP の代わりです。

## 旧サイト（リムネット）側の転送

`public_html\_rim-redirect` に、旧サイトの該当 11 ファイル（index.html, top.shtml, side.html, O-Japan-1,2,3,5,6,7-text.html, OCcomp.html, sub2.htm）と同名の転送用ファイルを置きました。中身は「0 秒で https://w-score.github.io/ の同名ページへ移動する」だけの短い HTML です。

新サイトの公開を確認したあと、これらを FTP で旧サイトの同じ場所に上書きアップロードしてください。検索エンジンや他サイトからの旧 URL へのアクセスがそのまま新サイトに届きます（`noindex` 指定済みなので、検索結果は徐々に新 URL に置き換わります）。旧サイトの残りのページは、旧サイトが続く限りそのまま見られます。
