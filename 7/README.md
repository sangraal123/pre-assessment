# Variant 7 攻略

## 動作確認方法

Expoモジュールがインストールされている事

1. `npx expo start --web`

## ビルド手順

1. `npm install create-expo-app`
1. `npx create-expo-app ./`
1. `npm run reset-project`


## 参考（NodeJSとExpoモジュールのインストール手順）

1. `sudo apt install curl`
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
1. `source ~/.bashrc`
1. `nvm install --lts --latest-npm`
1. `npm install expo`

## 備考

- ExpoはReactのフレームワーク版であるクロスプラットフォーム用のReact Nativeを環境ごとに専用のソフトウェア(Android StudioやXcodeなど)を使わずに開発できるような新しいフレームワーク