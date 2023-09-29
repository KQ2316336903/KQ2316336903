window.onload = function(){
	var btn01 = document.getElementById("dayNightBtn");
	var tips = "day";
	var linkList = document.getElementsByTagName("link");
	btn01.onclick = function(){
		if(tips == "day"){
			tips = "night";
			linkList[0].href = "./css/新拟态" + tips + ".css";
		}else{
			tips = "day";
			linkList[0].href = "./css/新拟态" + tips + ".css";
		}
	}
}
