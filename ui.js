//front end
var showidiom=function(idiom){
	return "<b>"+idiom.key+"</b> : "+idiom.def;
}
var dosearch=function(tofind){
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}

var dosearch2=function(tofind){
	var arr=search2(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}