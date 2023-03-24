function findSec(){
			 let a=new Date();
			 var months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
			 var b=a.getMonth();
			 if(b>=5 && b<=7){
				 document.getElementById("season").innerHTML=months[b]+" "+"is Summer"
			 }
			 else if(b>=8 && b<=10){
				document.getElementById("season").innerHTML=months[b]+" "+"is Fall"
			 }
			 else if(b>=2 && b<=4){
				 document.getElementById("season").innerHTML=months[b]+" "+"is Spring"
			 }
			 else{
				 document.getElementById("season").innerHTML=months[b]+" "+"is Winter"
			 }
		}
	findSec();
		

var a=new Date();
		b=a.toLocaleDateString();
		if(b[0]>=6 && b[0]<=8){
			 console.log(b[0]+" "+"is Summer");
		}
		else if(b[0]<=2 || (b[0]+b[1]==12)){
			if(b[0]<=2){
			 console.log(b[0]+" "+"is Winter");
			 }
			 console.log(b[0]+b[1]+" " +"is Winter");
		}
		else if(b[0]>=3 && b[0]<=5){
			 console.log(b[0]+" "+"is Spring");
		}
		else{
			console.log("fall");
	
		}