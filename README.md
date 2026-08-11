# pedantic レシートPWA

株式会社pedantic の経費レシートをスマホで撮って Discord に送るための静的ページ。
撮影 → 圧縮 → Discord Webhook へ送信、までしかやらない（ロジック・秘密情報なし）。

送信後の処理（AI読取 → 支払手段の分類 → freee ファイルボックス登録）は
奴隷bot（`kenhori2/pedantic-knowledge-bot` の `receipt/`）が担当する。

## これは配信用のコピー

**正本は奴隷botリポの `receipt/pwa/`**。仕様変更はそちらで行い、ここへコピーして配信する。
仕様の説明は同リポの `receipt/HANDOFF.md` を参照。

## 使い方

`https://<Pages URL>/#<Discord Webhook URL>` を開くと Webhook が自動設定される。
設定は各端末の localStorage にのみ保存され、このリポジトリにもサーバーにも送られない。
ホーム画面に追加するとアプリとして起動する。

## 将来の移管

pedantic 側（kenhori2）へ移す場合は GitHub の Transfer ownership で丸ごと移せる。
