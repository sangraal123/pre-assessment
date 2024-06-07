# Variant 1 攻略

## 動作確認方法

NodeJSがインストールされている事

- node 1.js

## ビルド手順

1. Typescriptのファイルを作成する
1. npm install typescript @types/node
1. ./node_modules/typescript/bin/tsc 1.ts --lib es2017 --lib dom --downlevelIteration

## 参考（NodeJSインストール手順）

1. sudo apt install curl
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
1. nvm install --lts --latest-npm

## 備考
- 通常はnpm initやtsc --initなどで設定ファイルを作成するが、今回は簡単の為行っていない。
- 通常は.gitignoreでnode_modulesはアップデートしないが、今回は簡単の為行っていない。