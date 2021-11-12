# prototype_research_db

Prototyping a research database with Typescript and React

## 手順

## backend

・仮想環境作成  
python3 -m venv .venv

・django プロジェクト作成
django-admin startproject config .  
python3 manage.py startapp "app 名前"  
python manage.py migrate

・django に必要なものをインストール  
$ pipenv install django  
$ pipenv install djangorestframework  
$ pipenv install django-markdownx

### frontend

・React のディレクトリ作成  
npx create-react-app frontend

## 参考

## フロントとバックエンドを連携するやり方

・CORS(オリジン間リソース共有)の設定を下記コマンドで実行
pipenv install django-cors-headers

・React と Djnago のアプリ構築の例  
https://zenn.dev/piyopanman/articles/6ccf6404a82727

・ディレクトリ構造の例
https://zenn.dev/yoshiko/articles/99f8047555f700

## 流れ

React と Typescript で作成
↓
React と Next.js に改修
↓
フロントのデザインを変更
