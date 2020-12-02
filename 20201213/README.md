# モバイルハンズオン

## 事前準備

### React Native

#### インストールと動作確認

React Nativeの開発環境を準備します。

次の記事を見てExpoを使ってブラウザorスマホでアプリを動かす方法を確認してください。

- [React Native Expo CLI で始めるクロスプラットフォーム開発 はじめの一歩編](https://www.cresco.co.jp/blog/entry/12928/)

### Visual Studio Code

#### インストール

開発時に使用するエディタをインストールします。

エディタは使い慣れたものなら何でもよいですが、何もインストールしていなければ、
今回のハンズオンで使用するコードに対応できるVisual Studio Codeをインストールします。
[公式サイト](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)の案内に沿って、インストールしてください。

エディタが既に整っている場合は、この手順をスキップしてください。

#### 動作確認

Visual Studio Codeが起動することを確認してください。

### Docker(Docker Compose)

#### インストール

開発時にコンテナを使用するため、DockerとDocker Composeをインストールします。

公式サイトの案内に沿って、使用しているOSに対応するDockerとDocker Composeをインストールしてください。
Docker Engineは18.06.0以上をインストールしてください。

WindowsとMacでのDocker利用方法はいくつかありますが、本ハンズオンではDocker Desktopをインストールしてください。
（参考：[Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)、[Install Docker Desktop on Mac](https://docs.docker.com/docker-for-mac/install/)）

使用する環境が既に整っている場合は、この手順をスキップしてください。

本ハンズオンでは、Dockerコンテナ起動時にローカルディレクトリをマウントします。
Docker Desktop for WindowsやDocker Desktop for Macでローカルディレクトリをマウントするためには
事前にファイル共有を許可しておく必要があります。
Docker DesktopのSettings→Resources→FILE SHARINGから、本ハンズオンのプロジェクトを配置するドライブやディレクトリを共有可能に設定しておいてください。
（参考：[Docker Desktop for Windows user manual](https://docs.docker.com/docker-for-windows/)、[Docker Desktop for Mac user manual](https://docs.docker.com/docker-for-mac/)）

#### Docker(Docker Compose) & マウントの動作確認

以下の手順で確認します。  
Windowsを前提として手順を記載しておりますので、他のOSの方は適宜読み替えてください。

- 勉強会当日に使用する作業用フォルダを作成します。 ここでは `c:\work` を作成したとします。
- 以下の内容で、 `c:\work\docker-compose.yml` ファイルを作成します。  
  (書式の都合上versionの前に空白文字が存在するようにみえますが無視してください。)
```yaml
version: '3.7'

services:
  mounttest:
    image: ubuntu:18.04
    volumes:
      - ../work/testdir:/testdir
    command: cat /testdir/testfile.txt
```
- 以下の内容で、 `c:\work\testdir\testfile.txt` ファイルを作成します。  
```text
Mount is successful.
```
- 以下のコマンドを実行します。
```bash
$ cd C:\work\
$ docker-compose up 
```
実行結果に以下のように `Mount is successful.` という文字列が含まれていることを確認してください。
```text
Creating network "mounttest_default" with the default driver
Pulling mounttest (ubuntu:18.04)...
18.04: Pulling from library/ubuntu
171857c49d0f: Pull complete
419640447d26: Pull complete
61e52f862619: Pull complete
Digest: sha256:646942475da61b4ce9cc5b3fadb42642ea90e5d0de46111458e100ff2c7031e6
Status: Downloaded newer image for ubuntu:18.04
Creating mounttest_mounttest_1 ... done
Attaching to mounttest_mounttest_1
mounttest_1  | Mount is successful. ※このように「Mount is successful.」が含まれるログが出力されたら成功
mounttest_mounttest_1 exited with code 0
```
- 以下のコマンドを実行し、動作確認に使用したコンテナを削除してください。
```bash
$ docker-compose down 
```
