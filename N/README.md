# Variant N 攻略

## 動作確認方法

Expo モジュールがインストールされている事

1. `npx expo start --web`

## ビルド手順

1. `npm install create-expo-app`
1. `npx create-expo-app ./`
1. `npm run reset-project`

## 参考（NodeJS と Expo モジュールのインストール手順）

1. `sudo apt install curl`
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
1. `source ~/.bashrc`
1. `nvm install --lts --latest-npm`
1. `npm install expo`

## 備考

- Expo は React のフレームワーク版であるクロスプラットフォーム用の React Native を環境ごとに専用のソフトウェア(Android Studio や Xcode など)を使わずに開発できるような新しいフレームワーク
