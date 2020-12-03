# PUT

ハンズオンの題材として「ごみ拾い」アプリを作りました。
拾ったゴミの写真を送るとポイントが付与されるアプリです。

## オンボーディング

次の記事を見てExpoを使ってブラウザorスマホでアプリを動かす方法を確認してください。

- [React Native Expo CLI で始めるクロスプラットフォーム開発 はじめの一歩編](https://www.cresco.co.jp/blog/entry/12928/)

スマホで動かす場合はPCとスマホを同じネットワークに繋いだ状態で実施してください。

## 動かす方法

Expoをスタートします。

```
$ npm install
$ npm run start
```

npm installは初回のみ。

PCのIPアドレスを確認し、次のファイルのlocalhostを書き換えます。

/put2/backend/generated-rest-client/runtime.ts

Docker ComposeでREST APIのモックサーバを立ち上げます。

```
$ cd openapi
$ docker-compose -f api-mock.yml up
```

ブラウザorスマホでアクセスするとアプリを使用できます。
