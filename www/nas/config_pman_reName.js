/**************************************************************************
 *    ////// UATアプリケーション個別設定ファイル //////
 *   各設定は、共用の設定データを上書きする
 *
 *  設定内容の一部はcookieで保存され、バックアップ情報としてlocalStorageに同内容が保持される
 */
'use strict';
//  設定トレーラーが存在しない場合は再設定
if(typeof config == 'undefined')     var config = {};
if(typeof config.app == 'undefined') config.app = {};
	config.appIdf = 'pman_reName'     ;//アプリケーション識別キーワードを設定する(既存データがあっても上書き)
	config.app[config.appIdf] = {} ;

/** @desc
 *    開始メッセージ
 *    お好きなメッセージに入れ替えできます。
 *    開始メッセージが抑制されている場合は表示されません。
 *      ＊＊＊アプリ別設定＊＊＊?
 * @type {string}
 */
    config.welcomeMsg  = "pman_reName animation item browser 20250726";
    config.windowTitle = "1.0.0";//window.titleとしての役割は終了 統合バージョン定数
/**************************************************************************
/** @desc
 *    開始メッセージ
 *    お好きなメッセージに入れ替えできます。
 *    開始メッセージが抑制されている場合は表示されません。
 *      ＊＊＊アプリ別設定＊＊＊?
 * @type {string}
 */
    config.welcomeMsg  = "UAToolbox animation item browser 20250726";
    config.windowTitle = "1.0.0";//window.titleとしての役割は終了 統合バージョン定数
/**************************************************************************
 *  タイムシート等ドキュメントのヘッダに表示するロゴタイプ 共用設定
 *      ページロゴを設定して各会社のサインや作品タイトルとして使用することが可能
 *      ヘッダロゴを使用しない場合は、useHeaderLogo をfalseに
 *      HTMLタグ記述も可　画像使用の場合はタグ記述が必須
 *      ロゴにリンク先をもたせない場合は空白を使用する
 *      ＊＊＊アプリ別設定＊＊＊
 *      例：
 *    config.headerLogo = "<b>りまぴん</b>";
 *    config.headerLogo = "<img src='images/logo/black.gif' alt='Nekomataya' width=150 height=30 border=0 />";
 *    config.headerLogo = "<img src='//www.nekomataya.info/cgi-bin/garden.cgi?SET=test-logo' alt='Nekomataya' width=150 height=24 border=0 />";
 *      ロゴに与えるリンク先
 *    config.headerLogo_url = "./help/index.html";試験中
 *    config.headerLogo_url = "http://www.nekomataya.info/remaping/";
 *      ロゴのコメント(title)
 *    config.headerLogo_urlComment    ="UATimesheet簡易マニュアル";
 */
    config.useHeaderLogo         = false;
    config.headerLogo            = "";
    config.headerLogo_url        = "";
    config.headerLogo_urlComment = "";

config.app[config.appIdf].DocumentColor = "#f2f2f2";

/**************************************************************************
 * サービスエージェントが保持するクライアント識別情報 common
 * 同一ホスト同一ブラウザのアプリケーション間で共有
 */
config.ApplicationIdf  = "";
//============= 以下cookie関連 ================//
/**************************************************************************
 *  ドキュメントプロパティ    *cookie[0]
 *  各アプリケーションごとのドキュメントプロパティ
 *  内容はアプリケーションごとに異なる この情報を持たないアプリケーションも存在する
 */
config.DocumentColor  = "#efffef"    ;//ドキュメントのの地色 (状況により上書きあり)SheetBaseColor
/**************************************************************************
 * 作業オプション    *cookie[1]
 */
/*
    データハンドリングがサーバアクセス主体に変更になるので
    以下の初期プロパティは修正 common 旧コード互換
    クッキーの保存も終了
*/
config.myTitle           = ""    ;
    //タイトル 現行の作品名を入れておくとラクです
config.mySubTitle        = ""    ;
    //サブタイトル 同上
config.myOpus            = ""    ;
    //制作話数等
//nas.Pm.productに統合する

config.myFrameRate       = "24fps";
    //初期フレームレートを置いてください。フレーム毎秒
//nas.FRATEに統合

config.Sheet             = "6+0"    ;
    //カット尺初期値初期タイムシートの長さをタイムコードで(ページ長ではない)
config.DialogColumns     = 1;
    //セリフ欄の数 初期値を整数で(必要に従って増やせる。最低で1つはルック維持のため予約)
config.SoundColumns      = 0;
    //音響欄の数 初期値を整数で(必要に従って増やせる)
config.SheetLayers       = 8;
    //セル重ねの数 初期値を整数で A~D　ならば　4　
config.CameraworkColumns = 0;
    //カメラワーク欄の数 初期値を整数で
config.StageworkColumns  = 0;
    //ステージワーク欄の数 初期値を整数で
config.SfxColumns        = 0;
    //コンポジット欄の数 初期値を整数で
//---

config.myScene = "" ;
    //A.Bパート等  空白でも良い
config.myCut   = "";
    //カット番号

config.myFileName= "$TITLE#$OPUS[$SUBTITLE]__s$SCENE-c$CUT($TC)";
/*    デフォルトのファイル名 以下のワードはそれぞれのカットの値と置換されます
    $TITLE $OPUS $SUBTITLE $SCENE $CUT $TIME $TC
例  "$TITLE-$OPUS_$SCENE-$CUT($TC)" >"タイトル-10_APART-000(6 + 00 .)"
長すぎるファイル名は一部のシステムで不具合の原因となりますのでご注意ください。

*/
/**************************************************************************
 *---ユーザ情報    *cookie[2]
 * NameCheckを有効にすると起動時に名前を入力するプロンプトがでます。
 * 名前はクッキーで保存可能
 * データ形式は (ハンドル):(メールアドレス)
 * 例　ねこまたや:nekomataya@nekomataya.info
 *myNameプロパティをmyNames配列に変更、
 *この設定ファイルのパラメーターはデバッグ後に変更
 *
 */

config.myName        = ""             ;//作業ユーザ名    ヌルストリングで初期化
config.myNames       = [config.myName];//作業ユーザリスト ユーザ名配列 
config.NameCheck     = false;

/**************************************************************************
 *---AEキー変換オプション    *cookie[3]
 */
config.BlankMethod    ="file";
    //カラセル方式デフォルト値
    //    "file",    カラセルファイル
    //    "opacity",    不透明度で処理
    //    "wipe",    ワイプで処理
    //    "expression1"    エクスプレッションで処理
    //    "expression2"    エクスプレッションで処理
    //    "expression3"    エクスプレッションで処理
    //
config.BlankPosition    ="end";
    //カラセル位置デフォルト値
    //    "build",    自動生成(現在無効)
    //    "first",    最初
    //    "end",    最後
    //    "none"    カラセルなし
config.AEVersion    ="8.0";
    //AEバージョン 4.0 5.0 6.5 7.0 8.0
    // 2022時点ですでにバージョン変化はなくなっているので8.0に固定で良い
config.KEYMethod    ="min";
    //AEキータイプ
    //    "min"    キーの数が最少
    //    (自分で停止にする必要がある)
    //    "opt"    最適化
    //    (変化点の前後にキーをつける)
    //    "max"    最大
    //    (すべてのフレームにキーをつける)
config.TimeShift    =true    ;
    //AEキー取り込みの際0.5フレームのオフセットを自動でつける
    //     true    つける(標準)
    //    false    つけない
config.FootageFramerate    ="auto";
    //フッテージのフレームレート
    //    "auto"    コンポのフレームレートに合わせる
    //    数値    指定の数値にする
config.defaultSIZE    ="1280,720,1";
    //コンポサイズが指定されていない場合の標準値
    //"横,縦,アスペクト"
//---

/**************************************************************************
 *---xpsedit UI操作系オプション    xpseditor *cookie[4]
 */
config.SpinValue    =3;
    //スピン量初期値
config.SpinSelect    =false;
    //選択範囲指定でスピン量の指定を行うか

config.SheetLength   = 6 ;
    //タイムシート1枚の秒数
    //    日本の標準量は６秒  可変だが、用紙との混在がなければデフォルトで
    //    2列シートを使う時は偶数の秒数がおすすめ。
config.SheetPageCols = 2 ;
    //シートの列数。
    //    シート秒数を割り切れる数を置いて下さい。
    //    実際問題としては１または２以外は
    //    使いづらくてダメだと思うよ。
config.FootMark    =true;
    //差分機能
    // 使う=true / 使わない=false
config.TabSpin    =true
    //TABキーで確定
    // する=true / しない=false
config.NoSync    =false
    //キー入力の同期をとらない。
    //trueにするとキー入力のリアルタイム書き換えを抑制します。
    //ほんの少し動作が早くなります。(クッキーに記録してません。)
//---

/**************************************************************************
 *---カウンタタイプ    *cookie[5] アプリ間共用 
 */
config.Counter0    =[3,0];//主カウンタ
config.Counter1    =[5,1];//副カウンタ
/*
    //カウンタのタイプ
    //[表示形式,開始番号]
    //
    //カウンタのタイプは、5種類。いずれかを数字で
    //    type 1    00000    フレーム数
    //    type 2    0:00:00    TC簡易型
    //    type 3    000 + 00    sec + fr
    //    type 4    p 0 / 0 + 00    page/ sec + fr
    //    type 5    p 0 / + 000     page/ + fr
    //    type 6    00:00:00:00     TC SMPTE(DF 30)
    //    type 7    00:00:00:00     TC SMPTE(DF 60)
    //開始番号は、0 または 1    
*/
//--

//---ユーザインターフェースオプション  xpseditor  xps*cookie[6]
config.SLoop    = false;
config.CLoop    = true;
/*スピンループ・カーソルループ for xpst
    する  = true
    しない = false
 */
config.AutoScroll    =true;
/*自動スクロール
    する  = true
    しない = false
 */
 //---    
config.TSXEx    =true;
    //TSX互換機能を使うか
//config.TMSEx    =false;
    //TMS互換機能を使うか?この機能はまだありません
    //TMS については、//www.nekora.main.jp/ あたりを参照

//---ウインドウモード    Ver1.5以降
config.ViewMode="WordProp"    ;
/*UIモード for xpst
      コンパクト    Compat
      シートワープロ WordProp
//config.ViewMode="Compact"    ;
 */

//---(工程)入力モード
config.InputMode = 1;
/*編集モード変数 for xpst
    0:未加工
    1:動画補完
    2:原画補完
 */

/**************************************************************************
    Cookie[7]
    UIpanel/ツール類の表示状態を保存 HTML-UI-common
    ツール類の表示状態を記録する　ドキュメントファイルに記録するのでなく環境として記録
    ブール値を連結した文字列
    キーとなる文字列のリスト
	xUI.panelTableに依存
	プロパティがない場合は、デフォルトの値で表示される
*/
config.ToolView = 'default';
config.ToolViewIbCs = '0';//アイコンバー選択状態
/*****************************************************************************
 *
 *    ファイルハンドリングCGIアドレス 暫定版
 *    同梱のrmpEcho.cgiをローカルマシンのWeb共有や
 *    LAN内のサーバに置くとレスポンスが向上します。
 *    このCGIはBlobを使うものに書き換えるので不要になる予定
 */

//config.ServiceUrl="//192.168.188.2/cgi-bin/rmpEcho.cgi?";
config.ServiceUrl="http://www.nekomataya.info/cgi-bin/remaping/rmpEcho.cgi?";
config.HttpsServiceUrl="//nekomataya.sakura.ne.jp/cgi-bin/remaping/rmpEcho.cgi?";
// config.ServiceUrl="//localhost/~<your address>/rmpEcho.cgi?";//参考1
// config.ServiceUrl="//localhost/cgi-bin/rmpEcho.cgi?";//参考2

////////////


config.SheetSubSeparator    =6;
    //サブセパレータの間隔 xpseditor

config.FavoriteWords =["X","-","・","","カラ","△","▽","▲","▼","▫","▪","▴","▵","▾","▿","◈","◉","◦","◦","·","→","←","移動","↑","|","↓","⇑","‖","⇓","?","___","----","[#]","(#)","<#>","[*]","(*)","<*>"];
    //ツールボックスの「よく使う文字」のエントリ
    // xpseditor NoteText(MEMO)
    // * は、現在の内容
    // # は、現在の数値 と置き換えられます。
    //  このエントリは予約語とは無関係
/*    以下のエントリは予約語として処理    
config.EllipsisSigns   =["|",":",";","｜","：","；","‖","↓","↑","⇓","⇑"];
config.BlankSigns    =["×","0","X","x","✕","〆","✖","☓","✗","✘"];
//config.InterpolationSigns =["-","=","<*>","·","・","*","▫","▪","▴","▵","▾","▿","◈","◉","◦","◦"];
config.InterpolationSigns    =["-","=","*","・","○","●"];
    //中間値生成予約（中割・動画）記号
    //前後に他の文字列データを含まない場合のみ機能を果たす
    //この他に<.+>も補間記号として働く
        //    詳細別紙
*/
/*
    区間開始・終了ノードの予約語
    これはコーディングしちゃったほうが良さそう
    開始ノードを定義して終了ノードは対で使用ただし省略は可能
    データ構造は、[開始シンボル,終了シンボル]の配列
    終了シンボルは開始シンボル再利用固定、対応シンボル固定、またはフリー
    常に終了シンボルは省略可能
    フォーマットで規定してしまったほうが良さそうなのであった
    
config.CamNodeSigns    =[["▽","△"],["▼","▲"],["┳","┻"],["┬","┴"],["↑","↓"],["⇑","⇓"]];//["◎"],["＊"],["○"],["●"],["□"],["■"],["◇"],["◆"],["☆"],["★"]
//カメラノードサインは、配列で登録する  要素数１の配列は開始と終了を同じサインで行う
config.TrnNodeSigns    =["].+[","]><[","]X[","]⋈["];
//トランジションノードサインは、開始サインと終了サインを一致させる。継続長２フレーム以下の場合は開始サインのみでOK
config.FxNodeSigns    =[").+(","△","▽","▲","▼","┳","┻","┬","┴","↑","↓","⇑","⇓","◎","＊","○","●","□","■","◇","◆","☆","★"];
//効果ノードサインは、開始サインと終了サインを一致させる。トランジションタイプの効果はトランジションサインを使用する
config.NodeSigns =[").+(","]X[","]⋈[","[.+]","△","▽","▲","▼","┳","┻","┬","┴","↑","↓","⇑","⇓","◎","＊","○","●","□","■","◇","◆","☆","★"];
    //範囲ノード予約記述  インターポレーションサインの機能も併せ持つ  詳細別紙
config.DialogSigns=["(*)","____","----","⁀⁀⁀⁀","‿‿‿‿"];
    //ダイアログ（サウンド）タイムライン専用のセパレーター  詳細別紙
*/
/*
    ４連スコアは、ダイアログのみ予約なので注意
    4連で無く単独使用でもセパレータとして扱うほうが良いか否か検討
    セパレーターは基本的に一組で機能する。
    開始セパレータは開始ノードに文字を書き込む必要があるため所属フレームではなくその後のフレームを開始ノードにする。
    終了セパレータが現れるか、他のノードが開始されるまでの間をセクション（オブジェクト）にする。
    終了セパレータは、その前のフレームを終了ノードにする。
    ラベルを伴ったセパレータは開始セパレータになる。
    開始セパレータの次に現れたセパレータは、開始セパレータに連続して現れるか、又はセクションラベルを伴わない限り
    終了セパレータとなり、セパレータの前フレームでセクションを閉じる。
    セパレータが連続した場合セクションの長さ(duration)が例外的に0になるので注意
    この場合開始セパレータごと無効にしてオブジェクトを生成しない
    （＝無効記述として扱う。そのまま記述を放置すると整形時に捨てられることにしておく。）

    第一フレームは先行するフレームが無い
    これを開始ノードにするために先行フレームに開始セパレータを記述することは出来ない
    第二フレームを開始ノードとするか、または終了セパレータのみでセクションを作ること
*/
/*
    アプリケーションメニュー類を設定
*/
config.menuset = {
    "app_template":{
        applicationMenu:'template/menu/app_template_applicationMenu.text',
        contextMenu    :'template/menu/app_template_contextMenu.text',
        iconBarMenu    :'template/menu/app_template_iconBarMenu.text'
    },
    "pman_reName":{
        applicationMenu:'template/menu/pman_reName_applicationMenu.text',
        contextMenu    :'template/menu/pman_contextMenu.text',
        iconBarMenu    :'template/menu/pman_iconBarMenu.text'
    }
};
/**
    外部ツールDB extApps
{
	name:"pahotoshop",
	type:["psd","psb","tga","tiff","png"],
	platform:["mac","win"],
	applicationpath:{
        "mac":"",
        "win":""
    }
},
 */
config.extApps = {
    members :{
        "sys":{
            name:"system",
            type:["*"],
            platform:["Mac","Win"],
            descrption:"アイテムをシステム標準のアプリで開く"
        },

        "ae":{
            name:"AfterEffects",
            type:["aep"],
            platform:["Mac","Win"],
            applicationpath:{
                "Mac":"/Applications/Adobe\ After\ Effects\ 2022/Adobe\ After\ Effects\ 2022.app",
                "Win":"C:\\Program Files\\Adobe\\Adobe After Effects 2022\\Support Files\\AfterFX.exe"
            }
        },
        "ot":{
            name:"OpenToonz",
            type:["aep"],
            platform:["Mac","Win","Unix"],
            applicationpath:{
                "Mac":"/Applications/Adobe\ After\ Effects\ 2022/Adobe\ After\ Effects\ 2022.app",
                "Win":"C:\\Program Files\\Adobe\\Adobe After Effects 2022\\Support Files\\AfterFX.exe"
            }
        },
        "photoshop":{
            name:"photoshop",
            type:["psd","psb","tga","tiff","png"],
            platform:["Mac","Win"],
            applicationpath:{
                "Mac":"/Applications/Adobe Photoshop\ 2022/Adobe\ Photoshop\ 2022.app",
                "Win":"C:\\Program Files\\Adobe\\Adobe Photoshop 2022\\Photoshop.exe"
            }
        },
        "clip":{
            name:"クリップスタジオ",
            type:["clip","psd","psb","tga","tiff","png"],
            platform:["Mac","Win"],
            applicationpath:{
                "Mac":"/Applications/CLIP\ STUDIO\ 1.5/App/CLIP\ STUDIO\ PAINT.app",
                "Win":"C:\\Program Files\\CELSYS\\CLIP STUDIO 1.5\\CLIP STUDIO PAINT\\CLIPStudioPaint.exe"
            }
        },
        "tvp":{
            name:"tvPaint",
            type:["tvpp","psd","psb","tga","tiff","png"],
            platform:["Mac","Win"],
            applicationpath:{
                "Mac":"/Applications/TVPaint\ Animation\ 11\ Pro.app",
                "Win":"C:\\Program Files\\TVPaint Developpement\\TVPaint Animation 11 Pro (64bits)\\TVPaint Animation 11 Pro (64bits).exe"
            }
        }
    },
};
/*
    クッキーで保存する情報
    true の情報を保存
    保存したくない情報は、false に
    情報の種類にしたがってクッキーで保存する情報と保存したくない情報を選択
    記録しなかった情報はconfigファイルの設定に従う
    どの情報も使用中に切り替え可能です。
    アプリごとの設定で上書き可能
*/
/*
    config.useCookie    {Array of Boolean}

*/
    config.useCookie    = [true];//クッキーを使う場合は"true"にしてください。
//if(navigator.userAgent.match(/AdobeAIR/)){alert("AdobeAIR");config.useCookie    =[false];}
//クッキーの期限 
//    0    ゼロ > そのセッション限り
//    日数    数値を与えると、最後に使った日からその日数の間有効
    config.useCookie.expiers       = 31    ;
//[0]    ドキュメントプロパティ
    config.useCookie.DocumentProp     = true    ;
//[1]    最後に編集したシートの尺数。レイヤ数などを記録するかどうか?
     config.useCookie.XPSAttrib    = true    ;
//[2]    最後に作業したユーザ名
     config.useCookie.UserName     = true    ;
//[3]    AEキー変換オプション
     config.useCookie.KeyOptions   = true    ;
//[4]    xpsedit UI操作系オプション
     config.useCookie.SheetOptions = true    ;
//[5]    カウンタ種別
     config.useCookie.CounterType  = true    ;
//[6]    ユーザインターフェース
     config.useCookie.UIOptions    = true    ;
//[7]  UIPanel表示状態
        config.useCookie.UIView    = true;

/*
    application UI sync table for remaping|xpsedit
    xUI.syncTable

    xUI.sync UI表示同期プロシジャ要素テーブル
    オンメモリの編集バッファとHTML上の表示を同期させる
    共通(標準)キーワードは以下の通り

    about_
    undo
    redo
    windowTitle

    renameDigits
    prefix
    suffix
    preview
    ThumbnailSize
    PreviewSize
    Search

    各アプリケーションごとのキーは個別にこのテーブルに追加または上書きする
    テーブルの値は、同期情報オブジェクト、関数、文字列
    同期情報オブジェクトは{type:<同期タイプ>,value:<表示を切り替える判定条件式|設定する値を得る式>,items:[要素名の配列]}
    タイプ menu-enable|menu-check|radio-check|menu-value|show-hide
    関数|文字列式の場合は、定形外の処理を行うために単純に実行
*/
//*********  syncTable  ********//
config.app[config.appIdf].syncTable = {
    "currentUser":function(){
console.log('sync-unerInfo');
    document.getElementById("loginuser").innerText = xUI.currentUser.toString(true);//ユーザ名表示
        if (xUI.currentUser.icon){
            document.getElementById("loginstatus_button").innerHTML = '<img width=40 src="'+xUI.currentUser.icon+'">';//アバターアイコン周り
        }else if (xUI.currentUser.handle){
            document.getElementById("loginstatus_button").innerText = xUI.currentUser.handle.slice(0,1);//アバター代用頭文字
        };
    },
    "history":{
        type:'menu-enable',
        value:"return (pman.reName.history.members.length > 0)",
        items:['pMhistoryBwd','pMhistoryFwd','ibChistoryBwd','ibChistoryFwd','cMhistoryBwd','cMhistoryFwd']
    },
    "renameHistory":function (){
        pman.reName.history.syncUI();
//        type:'menu-enable',
//        value:"return ((pman.reName.history.members.length > 0))",
//        items:['pman_history_bwd','pman_history_fwd','pMhistoryBwd','pMhistoryFwd','ibChistoryBwd','ibChistoryFwd','cMhistoryBwd','cMhistoryFwd']
    },

    "rename_setting":{
        type  :'menu-check',
        value :'return $("#rename_setting").isVisible();',
        items :['pMrename_setting','ibCrename_setting','cMrename_setting']
    },

    "renameDigits":{
        type  :'radio-check',
        value :'return nas.RZf("_0",pman.reName.renameDigits);',
        items :['pMrenameDigits','cMrenameDigits','numDigit']
    },

    "nameExt":{
        type  :'menu-check',
        value :'return (pman.reName.nameExt);',
        items :['pMnameExt','ibCnameExt','cMnameExt','nameExt']
    },

    "sortAuto":{
        type  :'menu-check',
        value :'return (pman.reName.sortAuto);',
        items :['pMsortAuto','ibCsortAuto','cMsortAuto','sortAuto']
    },

    "showThumbnail":{
        type  :'menu-check',
        value :'return (pman.reName.thumbnailStat != "none");',
        items :['pMshowThumbnail','ibCshowThumbnail','cMshowThumbnail','showTM']
//        items :[]
    },

    "thumbnailSize":function(){
        if(
            (document.getElementById('thumbnailSizeSlider'))&&
            (document.getElementById('thumbnailSizeSlider').value != pman.reName.thumbnailSize)
        ) document.getElementById('thumbnailSizeSlider').value = pman.reName.thumbnailSize;
    },

    "prefix":{
        type  :'menu-check',
        value :'return $("#prefixStrip").isVisible();',
        items :['pMprefix','ibCprefix','cMprefix']
    },
    "suffix":{
        type  :'menu-check',
        value :'return $("#suffixStrip").isVisible();',
        items :['pMsuffix','ibCsuffix','cMsuffix']
    },
    "search":{
        type  :'menu-check',
        value :'return $("#optionPanelSearch").isVisible();',
        items :['pMsearch','ibCsearch','cMsearch']
    },
    "thumbnail":{
        type  :'menu-check',
        value :'return $("#optionPanelThumbnailSize").isVisible();',
        items :['pMthumbnail','ibCthumbnail','cMthumbnail']
    },
    "preview":{
        type  :'menu-check',
        value :'return $("#optionPanelPreviewSize").isVisible();',
        items :['pMpreview','ibCpreview','cMpreview']
    },
    "previewScale":function(){
        document.getElementById('previewSizeSlider').value = pman.reName.preview;
    },
    "flipControl":{
        type  :'menu-check',
        value :'return $("#flip_control").isVisible();',
        items :['pMflipControl','ibCflipControl','cMflipControl']
    },
    "flipSeekbar":{
        type  :'menu-check',
        value :'return $("#flip_seekbar").isVisible();',
        items :['pMflipSeekbar','ibCflipSeekbar','cMflipSeekbar']
    },
    "numOrder":{
        type  :'menu-check',
        value : 'return (pman.numOrderUp)',
        items :['pMnumOrder','ibCnumOrder','cMnumOrder','descendingOrder']
    },
    "flip":function(){
        if(pman.reName.selection.length <= 1){
            pman.reName.flip.member.length = 0;
        }else{
            if (pman.reName.lightBox.overlay){
                pman.reName.flip.member = pman.reName.selection.filter(e => !(e.isOvl()));
            }else{
                pman.reName.flip.member = Array.from(pman.reName.selection);
            };
        };
        if(pman.reName.flip.member.length == 0){
            document.getElementById('flipSw').disabled = true;
            document.getElementById('flipHeadPrev').disabled = true;
            document.getElementById('flipHeadNext').disabled = true;
            document.getElementById('flipSeekbar').disabled = true;
            document.getElementById('flipSeekbarLabel').innerHTML = " ";
        }else{
            document.getElementById('flipSw').disabled = false;
            document.getElementById('flipHeadPrev').disabled = false;
            document.getElementById('flipHeadNext').disabled = false;
            document.getElementById('flipSeekbar').disabled = false;

            document.getElementById('flipSeekbar').max = pman.reName.flip.member.length - 1;
            let sbIdx = pman.reName.flip.member.indexOf(pman.reName.items[pman.reName.focus]);
            if(pman.numOrderUp) sbIdx = pman.reName.flip.member.length - sbIdx - 1;
            document.getElementById('flipSeekbar').value = (pman.reName.flip.play != 0)? pman.reName.flip.head:sbIdx;
            document.getElementById('flipSeekbarLabel').innerHTML = [sbIdx,pman.reName.flip.member.length].join('/');
        };
    },
    "flipSwitch":function(){
        if(pman.reName.flip.play == 0){
            if(document.getElementById("flipSwitch")) document.getElementById("flipSwitch").src = './css/images/sbd-ui/play.png'
        }else{
            if(document.getElementById("flipSwitch")) document.getElementById("flipSwitch").src = './css/images/sbd-ui/pause.png'
        };
        if(document.getElementById("flipLoop")) document.getElementById("flipLoop").value = pman.reName.flip.loop;
        if(document.getElementById("flipRate")) document.getElementById("flipRate").value = pman.reName.flip.rate;
    },
    "flipMode":function(){
        document.getElementById("flipMode").value     = pman.reName.flip.mode;
        $("#flipMode").css('background-color',["#aaa","#888","#666"][pman.reName.flip.mode]);
        document.getElementById('flipSlider').innerText = ['→','←','⇄'][pman.reName.flip.mode];
        $('#flipSlider').css('left',["1px","22px","44px"][pman.reName.flip.mode]);
    },
    "lightBoxControl":{
        type  :'menu-check',
        value :'return $("#lightBoxControl").isVisible();',
        items :['pMlightBoxControl','ibClightBoxControl','cMlightBoxControl']
    },
    "lightBoxProp":{
        type  :'menu-check',
        value :'return $("#lightBoxProperty").isVisible();',
        items :['pMlightBoxProp','ibClightBoxProp','cMlightBoxProp']
    },
    "lightBox":function(){
        document.getElementById("switchOvl").checked = (pman.reName.lightBox.overlay)? true:false;
        document.getElementById("switchLB").checked  = (pman.reName.lightBox.disabeld)?false:true;
        document.getElementById("LBCount").value     = pman.reName.lightBox.underlay;
        document.getElementById("LBMode").value      = pman.reName.lightBox.blendingMode;
        document.getElementById("LBOpacity").value   = parseInt(pman.reName.lightBox.opacity * 100);
/*
pman.reName.lightBox:{
    blendingMode: "normal",
    disabled: false,
    opacity: 0.65,
    overlay: true,
    underlay: 0
}:// */
    },
    "UBFilter":{
        type  :'menu-check',
        value :'return $("#uafBundleFilter").isVisible();',
        items :['pMubfilter','ibCubfilter','cMubfilter']
    },
    "FNFilter":{
        type  :'menu-check',
        value :'return $("#optionPanelFilter").isVisible();',
        items :['pMfnfilter','ibCfnfilter','cMfnfilter']
    },
    "xmap_idf":function(){
        document.getElementById('xmapstring').value=decodeURI(pman.reName.xmap.getIdentifier('simple').replace(/\.xmap$/,''));
    },
    "paintColor"   :function(){pman.reName.canvasPaint.syncColors()},
    "paintTool"    :function(){pman.reName.canvasPaint.syncTools()},
    "paintCommand" :function(){pman.reName.canvasPaint.syncCommand()}
/*    "":{
        type  :'menu-check',
        value :'return $("#").isVisible();',
        items :['pM','cM']
    }// */
};
//pman_reName panelTable
config.app[config.appIdf].panelTable = {
//======== MODAL
    'Pref'     :{elementId:"optionPanelPref"     ,type:'modal',note:"環境設定(汎)",func:function(){}},
// uatb modal
    'Item'     :{elementId:"optionPanelInsertItem" ,type:'modal',note:"新規アイテム挿入"},
//======== Floating Panel モバイル環境ではfloatしない　半画面固定ドロワ
    'Paint'    :{elementId:"optionPanelPaint" ,uiOrder: -1,type:'float',note:"手書きメモ(汎)",func(elm,status){
// uatb remaping用は同エントリが微妙に異なるが呼び出し手順は揃える
        var currentStatus = $("#optionPanelPaint").isVisible();
        var opt = (status == 'switch')? (!(currentStatus)) : ((status == 'show')? true:false);
        if(opt != currentStatus){
            if(opt){
//show
                $("#optionPanelPaint").show();
                xUI.canvasPaint.active = true;
                if((xUI.viewMode == 'PageImage')&&(xUI.XPS.timesheetImages.imageAppearance == 0)){
                    xUI.setAppearance(1,true);
                };
                xUI.canvasPaint.syncTools();
            }else{
//hide
                if(xUI.canvas) xUI.canvasPaint.unset();
                xUI.canvasPaint.active = false;
                $("#optionPanelPaint").hide();
            };
            if(appHost.touchDevice){
                document.getElementById('fixedPanels').style.display = (opt)? 'none':'';
                xUI.adjustSpacer();
            };
        };
    }},
//予備 uaf xpsedit
    'Draw'     :{elementId:"optionPanelDraw"  ,uiOrder:-1,type:'float',note:"手書きメモv(汎)"},
    'Stamp'    :{elementId:"optionPanelStamp" ,uiOrder:-1,type:'float',note:"スタンプ選択"},
    'Text'     :{elementId:"optionPanelText"  ,uiOrder:-1,type:'float',note:"テキストパネル(汎用)"},
    'Sign'     :{elementId:"optionPanelSign"  ,uiOrder:-1,type:'float',note:"署名パネル(汎)"},
    'Snd'      :{elementId:"optionPanelSnd"   ,uiOrder:-1,type:'float',note:"remaping Dialog|Snd"},
    'Ref'      :{elementId:"optionPanelRef"   ,uiOrder:-1,type:'float',note:"remaping 参考画像パネル"},
//Stopwatch
    'Timer'    :{elementId:"optionPanelTimer" ,uiOrder:-1,type:'fix'  ,note:"ストップウォッチ(汎)アプリごとに差異あり"},
//inplace-UI-panel common
    'account_box'   :{elementId:'account_box'             ,uiOrder: 3,type:'fix', note:"remaping アカウント表示"},
    'pmui'          :{elementId:'pmui'                    ,uiOrder:-1,type:'fix', note:"remaping 作業管理バー(旧)"},
    'pmcui'         :{elementId:'pmcui'                   ,uiOrder: 1,type:'fix', note:"remaping 作業管理バーアイコン(新)"},
    'extSign'       :{elementId:"extSig"                  ,uiOrder: 3,type:'fix', note:"拡張署名欄(汎)"},

//inplace-UI-panel pman|reName|xmap browser  <app>
    'Search'         :{elementId:"optionPanelSearch"       ,sync:"search"         ,uiOrder: 4,type:'fix', note:"reName検索(汎)"},
    'PreviewSize'    :{elementId:"optionPanelPreviewSize"  ,sync:"preview"        ,uiOrder: 4,type:'fix', note:"reNameプレビュー指定UI"},
    'ThumbnailSize'  :{elementId:"optionPanelThumbnailSize",sync:"thumbnail"      ,uiOrder: 4,type:'fix', note:"reNameサムネイルサイズ｜表示UI"},
    'prefix'         :{elementId:"prefixStrip"             ,sync:"prefix"         ,uiOrder: 4,type:'fix', note:"reNameプレフィクスUI"},
    'suffix'         :{elementId:"suffixStrip"             ,sync:"suffix"         ,uiOrder: 4,type:'fix', note:"reNameサフィックスUI"},
    'rename_setting' :{elementId:'rename_setting'          ,sync:"rename_setting" ,uiOrder: 4,type:'fix', note:"reName 操作設定"},
    'flip_control'   :{elementId:'flip_control'            ,sync:"flipControl"    ,uiOrder: 4,type:'fix', note:"reName フリップコントローラ"},
    'flip_seekbar'   :{elementId:'flip_seekbar'            ,sync:"flipSeekbar"    ,uiOrder: 4,type:'fix', note:"reName フリップ再生シークバー"},
    'lightBoxControl':{elementId:'lightBoxControl'         ,sync:"lightBoxControl",uiOrder: 4,type:'fix', note:"reName ライトボックススイッチ"},
    'lightBoxProp'   :{elementId:'lightBoxProperty'        ,sync:"lightBoxProp"   ,uiOrder: 4,type:'fix', note:"reName ライトボックス設定"},
    'UBFilter'       :{elementId:'uafBundleFilter'         ,sync:"UBFilter"       ,uiOrder: 4,type:'fix', note:"reName バンドルフィルタ設定-1"},
    'FNFilter'       :{elementId:'optionPanelFilter'       ,sync:"FNFilter"       ,uiOrder: 4,type:'fix', note:"reName 関数フィルタ設定"},
    'Zoom'           :{elementId:'screenZoom'                                     ,uiOrder: 4,type:'fix', note:"ズーム設定"},
    'Appearance'     :{elementId:'docImgAppearance'                               ,uiOrder: 4,type:'fix', note:"アピアランス設定"},
//===============
    '_exclusive_items_':{
        type:'exclusive_item_group',
        'pman_reName':[]
    }
};

