/**
	UAT言語リソースデータからロケール別のリソースを抽出する
*/
convertRmpng2i18n = function (loc){
	if(! loc) loc = 'en';
	var result = {};
	var tmp = [];
//nas.uiMsg キーの重複はない
	for (var prp in nas.uiMsg)
		tmp.add([String(prp).replace(/^pM/,'').toLowerCase(),nas.uiMsg[prp][loc]],function(tgt,dst){return (String(tgt[1]).trim().toLowerCase()==String(dst[1]).trim().toLowerCase());});
	
//	result[prp]=String(nas.uiMsg[prp][loc]).replace(/\n/g,"<br>").replace(/\%\d*/,"\{\{$&\}\}");

//nas.LangPack キーと値の重複無いように調整
	for (var ix = 0 ; ix < nas.LangPack[loc].length ;ix ++){
		var ky = nas.LangPack[loc][ix][0].replace(/^pM/,'').toLowerCase();
		if(nas.LangPack[loc][ix][1]=='title') ky = ky+'_description';
//console.log([ky,nas.LangPack[loc][ix][2]]);
		tmp.add([ky,nas.LangPack[loc][ix][2]],function(tgt,dst){return (String(dst[1]).trim().toLowerCase()==String(tgt[1]).trim().toLowerCase());});
	}
//		tmp.sort(function(a,b){return (a[0]<b[0])?-1:1});
//	console.log(tmp);
	for (var iz = 0 ; iz <tmp.length; iz ++){
		var prp = tmp[iz][0];
		result[tmp[iz][0]]=String(tmp[iz][1]).replace(/\n/g,"<br>").replace(/\%\d+/,"\{\{$&\}\}");
	}
	return result;
};

var resJA = convertRmpng2i18n('ja');
var resEN = convertRmpng2i18n('en');

	var keys = [];
for (var prp in resJA) keys.add(prp);
for (var prp in resEN) keys.add(prp);

	var tmp = [];
for (var ix = 0 ; ix < keys.length ; ix ++){
	tmp.push([
		keys[ix],
		(resEN[keys[ix]])?resEN[keys[ix]]:resJA[keys[ix]],
		(resJA[keys[ix]])?resJA[keys[ix]]:resEN[keys[ix]]
	]);
}
	var resultJA  = {};
	var resultEN  = {};
	for (var iz = 0 ; iz <tmp.length; iz ++){
		var prp = tmp[iz][0];
		resultJA[tmp[iz][0]]=String(tmp[iz][2]);
		resultEN[tmp[iz][0]]=String(tmp[iz][1]);
	}

console.log(JSON.stringify(resultJA,false,2));
console.log(JSON.stringify(resultEN,false,2));
console.log(JSON.stringify(resultCN,false,2));
console.log(JSON.stringify(resultKR,false,2));

console.log(JSON.stringify(tmp,false));

