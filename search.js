//back end
var search=function(tofind){
	var out=[];
//	var p=new RegExp(tofind,'g');
	for(var i=0;i<idioms.length;i++){
		if(idioms[i].key.indexOf(tofind)>-1){
			idioms[i].key=idioms[i].key.replace(tofind,wordcolor(tofind));
			out.push(idioms[i]);
		}
	}
	return out;
}

var wordcolor=function(w){
	return "<font color=red>"+w+"</font>";
}

var search2=function(tofind){
	var out=[];
	var p=new RegExp(tofind,'g');
	for(var i=0;i<idioms.length;i++){
		var match=idioms[i].key.match(p);
		if(match){
			idioms[i].key=idioms[i].key.replace(p,wordcolor);
			out.push(idioms[i]);
		}
	}
	return out;
}