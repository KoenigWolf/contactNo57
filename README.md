# コンタクトフォームの使用方法について解説します。

## 概要
このプロジェクトは、お問い合わせフォームを提供するWebアプリケーションです。ユーザーは会社名、氏名、電話番号、メールアドレス、およびお問い合わせ内容を入力してフォームを送信できます。フォーム送信後、確認画面が表示され、ユーザーが送信内容を確認することができます。

## ディレクトリ構成

```
ContactForm/
├── node_modules/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
├── server.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## 必要条件
- Node.js (推奨バージョン: 14.x)
- npm (Node.jsに含まれます)

## インストール手順
1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/your-username/ContactForm.git
   ```
2. プロジェクトディレクトリに移動します。
   ```bash
   cd ContactForm
   ```
3. 依存関係をインストールします。
   ```bash
   npm install
   ```

## 使用方法
1. 開発サーバーを起動します。
   ```bash
   node server.js
   ```
2. ブラウザで以下のURLにアクセスします。
   ```plaintext
   http://localhost:3000
   ```

## ファイルの詳細
### public/index.html
HTMLフォームと確認画面、送信完了画面を含むファイルです。

### public/styles.css
フォームのスタイルを定義するCSSファイルです。

### public/scripts.js
フォームのバリデーション、確認画面の表示、フォームデータの送信を行うJavaScriptファイルです。

### server.js
Expressサーバーを設定し、フォームデータの処理を行うファイルです。

### vercel.json
Vercelにデプロイするための設定ファイルです。

## セキュリティ
- ユーザー入力のエスケープ処理を行い、XSS攻撃を防ぎます。
- サーバー側でバリデーションを実施し、入力データの整合性を確認します。
- HTTPSを使用して通信を暗号化し、データの安全性を確保します。
