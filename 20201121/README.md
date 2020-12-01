# APIハンズオン

## 事前準備

### 開発環境のインストール

#### JDK

バックエンドの開発ではJavaを使用するため、JDKをインストールします。Javaのバージョンには11を使用します。
JDKはいくつかありますが、ここでは、OpenJDKの1つであるAdoptOpenJDKをインストールします。

[公式サイト](https://adoptopenjdk.net/)の案内に沿って、インストールしてください。

使用する環境が既に整っている場合は、この手順をスキップしてください。

#### Maven

バックエンドの開発では構成管理にMavenを利用するため、Mavenをインストールします。
バージョンは制限していませんが、現時点で最新である3.6.3でよいです。

[公式サイト](https://maven.apache.org/download.cgi)の案内に沿って、ダウンロードおよび配置してください。

使用する環境が既に整っている場合は、この手順をスキップしてください。

#### IntelliJ IDEA

開発時に使用するエディタをインストールします。
エディタは使い慣れたものなら何でもよいですが、何もインストールしていなければ、
今回のハンズオンで使用するコードに対応できるIntelliJ IDEAをインストールします。

[公式サイト](https://www.jetbrains.com/ja-jp/idea/download/)の案内に沿って、コミュニティ版をインストールしてください。

エディタが既に整っている場合は、この手順をスキップしてください。

#### Docker(Docker Compose)のインストール

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

### 開発環境の動作確認

#### JDK & Maven

任意のディレクトリで以下のコマンドを実行し、helloディレクトリが作成されればJDK及びMavenの環境構築に成功しています。

```sh
$ mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false -DgroupId=com.sample -DartifactId=hello
```
#### JDK & IntelliJ IDEA

以下のサイトの「プロジェクトを作る」～「ソースを作成する」の手順を実行できれば、JDK & IntelliJ IDEAのインストールに成功しています。

- [IntelliJ IDEA 入門](https://qiita.com/opengl-8080/items/108102d692b49f804dbd)

#### Docker(Docker Compose) & マウントの確認

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
