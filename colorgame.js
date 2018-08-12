var easy=document.getElementById("easy");
var hard= document.getElementById("hard");
var squares=document.querySelectorAll(".squares");
var top = document.getElementById("top");
var colors= []
var result=document.getElementById("res");
var ans=document.getElementById("color");
var again=document.getElementById("playagain");
var box = []
var easyv=true
var answer
for(var i=0;i<6;i++)
{
	squares[i].style.background="black";
}
if(easyv===true)
{
	newColors(3);
	answer=picColor(3);
	for(var i=3;i<6;i++)
	{
		squares[i].style.background="black";
	}
}
ans.textContent= answer;
for(var i=0;i<colors.length;i++){
	squares[i].style.background=colors[i];
}
for(var i=0;i<6;i++)
{
	squares[i].addEventListener("click",function(){
		if(this.style.background===answer)
		{
			var size
			if(easyv===true)
				size=3;
			else
				size=6;
			for(var j=0;j<size;j++)
			{
				squares[j].style.background=answer;
			}
			result.textContent="Correct!!";
		}
		else
			this.style.background="black";
	})
}
again.addEventListener("click",function(){
	result.textContent=" ";
	var length
	if(easyv===true)
		length=3;
	else
		length=6;
	newColors(length);
	answer=picColor(length);
	ans.textContent=answer;
	for(var i=0;i<6;i++){
		squares[i].style.background="black";
	}
	for(var i=0;i<length;i++){
		squares[i].style.background=colors[i];
	}
	if(easyv===true)
	{
		easy.classList.remove("unselected");
		easy.classList.add("selected");
		hard.classList.remove("selected");
		hard.classList.add("unselected");
	}
	else
	{
		hard.classList.remove("unselected");
		hard.classList.add("selected");
		easy.classList.remove("selected");
		easy.classList.add("unselected");
	}
});
easy.addEventListener("click",function(){
	easy.classList.remove("unselected");
	easy.classList.add("selected");
	hard.classList.remove("selected");
	hard.classList.add("unselected");
	easyv=true;
	newColors(3);
	answer=picColor(3);
	ans.textContent=answer;
	for(var i=0;i<3;i++)
	{
		squares[i].style.background=colors[i];
	}
	for(var i=3;i<6;i++)
	{
		squares[i].style.background="black";
	}
	result.textContent=" ";
});
hard.addEventListener("click",function(){
	hard.classList.remove("unselected");
	hard.classList.add("selected");
	easy.classList.remove("selected");
	easy.classList.add("unselected");
	easyv=false;
	newColors(6);
	answer=picColor(6);
	ans.textContent=answer;
	for(var i=0;i<6;i++)
	{
		squares[i].style.background=colors[i];
	}
	result.textContent=" ";
});

function picColor(i){
	var index=Math.floor(Math.random()*i);
	return colors[index];
}
function newColors(num){
	for(var i=0;i<num;i++)
	{
		var a=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		var c=Math.floor(Math.random()*255);
		var x="rgb(" + a + ", " + b +", " + c + ")"
		colors[i]=x;
	}
}