Create Test Data
======================

# 概要
これは指定したフォルダ内に配置されるファイルをコピーして複数ファイルを自動生成するスタンドアロン型スクリプトです。テストデータを作る目的で作成してます。尚、一時的な使用だったので、中身はめっちゃ雑に作ってあります。


# 制限
Google Apps Script(GAS) のスクリプト実行時間は通常 6 分までです。これを超えるとタイムアウトで強制終了します。

生成するファイル数が多いと、この制限に抵触する可能性があるため、できれば G Suite Business 以上で利用することをお勧めします。
ちなみに Business 以上のエディションであれば 30 分までに緩和されます。

* [Quotas for Google Services](https://developers.google.com/apps-script/guides/services/quotas)


# 使い方
* `main.gs` のパラメータで以下を目的に合わせて設定する
  * MAX_FILES → 生成するファイルの数
  * TARGET_FILE_ID → 複製する初期ファイルの ID
* `TARGET_FILE_ID` で指定したファイルと同じフォルダ内にコピーが作られるため、あらかじめフォルダを用意して初期ファイルを入れておくと良いでしょう
* 初期ファイルを `sample.pdf` とし、生成するファイル数を `1000` とした場合コピーファイルは次のように作られます。
  * sample_1.pdf, sample_2.pdf, sample_3.pdf, ... sample_1000.pdf
