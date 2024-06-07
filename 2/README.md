# Variant 2 攻略

## 動作確認方法

NodeJSとhttp-serverモジュールがインストールされている事

1. node ./node_modules/http-server/bin/http-serverでHTTPサーバーを起動
1. ブラウザにhttp://localhost:8080と入力してWebサイトをオープン
1. ファイルのリストが表示されるのでprint_times_table.htmlをクリック

## 参考（NodeJSとhttp-serverモジュールのインストール手順）

1. sudo apt install curl
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
1. nvm install --lts --latest-npm
1. npm install http-server

## 備考
- 通常はnpm initやtsc --initなどで設定ファイルを作成するが、今回は簡単の為行っていない。
- 通常は.gitignoreでnode_modulesはアップデートしないが、今回は簡単の為行っていない。