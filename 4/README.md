# Variant 4 攻略

## 動作確認方法

NodeJSとhttp-serverモジュールがインストールされている事

1. npx http-serverでフロントエンドHTTPサーバーを起動
1. node 4.jsでAPIバックエンドHTTPサーバーを起動
1. ブラウザにhttp://localhost:8080 と入力してWebサイトをオープン
1. ファイルのリストが表示されるのでpublic/4.htmlをクリック

## ビルド手順

1. Typescriptのファイルを作成する
1. npm install typescript @types/node @types/express
1. npx tsc 4.ts --lib es2017 --lib dom --esModuleInterop

## 参考（NodeJSインストール手順）

1. sudo apt install curl
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
1. nvm install --lts --latest-npm
1. npm install http-server

## 備考
- 通常はnpm initやtsc --initなどで設定ファイルを作成するが、今回は簡単の為行っていない。
- 通常は.gitignoreでnode_modulesはアップデートしないが、今回は簡単の為行っていない。