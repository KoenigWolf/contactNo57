アプリURL：
https://koenigwolf.github.io/contactNo57/

このアプリケーションは、ユーザーが入力した連絡情報を簡単に送信できるシンプルで直感的なコンタクトフォームです。

主な機能は以下の通りです：

主な機能

フォームバリデーション:
ユーザーが「送信する」ボタンをクリックする前に、すべての必須フィールドが正しく入力されているかをチェックします。未入力のフィールドがある場合、エラーメッセージを表示し、ユーザーに修正を促します。

確認画面:
ユーザーが入力した情報を確認画面で表示します。ユーザーは入力内容を再確認し、間違いがなければ送信できます。また、入力内容に修正が必要な場合は、フォームに戻って再編集することができます。

データ送信:
確認画面でユーザーが「送信する」をクリックすると、フォームに入力されたデータがサーバーに送信されます。送信が成功すると、完了画面が表示され、ユーザーに送信が成功したことを知らせます。

送信完了後のリダイレクト:
送信が完了した後、ユーザーは「ホームに戻る」ボタンをクリックすることで、ホームページにリダイレクトされます。

XSS対策:
入力されたデータはすべてエスケープ処理され、セキュリティリスクを最小限に抑えるよう設計されています。

技術スタック
HTML/CSS: フロントエンドのマークアップとスタイリングに使用しています。
JavaScript: フォームバリデーション、確認画面の表示、データ送信の処理を担当しています。
Fetch API: サーバーへのデータ送信を非同期で行うために使用しています。

使い方
フォームに必要な情報（会社名、名前、電話番号、メールアドレス、メッセージ）を入力します。
「確認画面へ」ボタンをクリックすると、確認画面に入力内容が表示されます。
入力内容に間違いがなければ「送信する」ボタンをクリックします。
