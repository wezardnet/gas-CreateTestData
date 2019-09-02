/**
 * 指定したフォルダ内にファイルコピーで複数のテストファイルを自動生成するスタンドアロン型スクリプト
 * 
 * @vesion 1.1
 * @author Kenji.Nakahara
 * @date: 2019/08/22
 * @update: 2019/09/02
 * @include libraries: 
 */

MAX_FILES = 1000;
TARGET_FILE_ID = '1EZ-HS5__AZ08pgNppKVT6CNGuH07-1qJ';

/**
 * 処理を実行する
 */
function run(e){
	var firstFile = DriveApp.getFileById(TARGET_FILE_ID);

	for ( var i = 1; i <= MAX_FILES; i++ ) {
		firstFile.makeCopy(Utilities.formatString('%0' + String(MAX_FILES).length + 'd_%s', i, firstFile.getName()));
	}
}
