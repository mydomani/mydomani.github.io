var img=$("#img");
var point1=$("#point1");
var point2=$("#point2");
var point3=$("#point3");
var menuLeft=(window.innerWidth-1200)/2;
var t=0;
var left=0;
imgEvent();
menuEvent();
exitEvent();
for(var j=1;j<11;j++)
{
mouseEvent(j);
}
setInterval(function(){
	var num=t%360;
	scroll(num);
	t++;
	if(t==360)
	{
	  t=0;
	}
},50);
function scroll(num)
{
	if(num==0)
	{
	 left=0;
     point1.css("background","white");
	}
	if(num==100)
	{
	 point1.css("background","");
	 point2.css("background","white");
	}
	if(num>100&&num<=120)
	left+=60;
	if(num==220)
	{
	 point2.css("background","");
	 point3.css("background","white");
	}
	if(num>220&&num<=240)
	left+=60;
	if(num==340)
	{
	 point3.css("background","");
	 point1.css("background","white");
	}
	if(num>=340&&num<360)
	left+=60;
	img.css("left","-"+left+"px");
}
function imgEvent()
{
    $("#point1").click(function()
	{   
	    point1.css("background","white");
		point2.css("background","");
		point3.css("background","");
		t=0;
	});
	$("#point2").click(function()
	{   
	    left=1200;
	    point2.css("background","white");
		point1.css("background","");
		point3.css("background","");
		t=121;
	});
	$("#point3").click(function()
	{   
	    left=2400;
	    point3.css("background","white");
		point2.css("background","");
		point1.css("background","");
		t=241;
	});
}
function menuEvent()
{
   $("#menu").click(function(){
	   setTimeout("$('#main').hide();",900);
	   $("#menu_list").css("left",""+menuLeft+"px");
       menuLeft="-1500";
      });
}
function exitEvent()
{
    $("#exit").click(function(){
       $("#main").show();
        $("#menu_list").css("left",""+menuLeft+"px");
        menuLeft=(window.innerWidth-1200)/2;
    });
}
function mouseEvent(i)
{
    var topValue1=parseInt($("#inner"+i+"").css("top"))+parseInt($("#inner"+i+"").css("height"));
    var topValue2=topValue1-60;

    $("#inner"+i+"").on("mouseover",function(){
       $("#inner"+i+"_bottom").css("top",""+topValue2+"px");
       $("#inner"+i+"_bottom").css("height","60px");
        $("#addx"+i+"").hide();
       $("#addy"+i+"").css("transform","rotate(90deg)");
     });
    $("#inner"+i+"").on("mouseout",function(){
      $("#inner"+i+"_bottom").css("top",""+topValue1+"px");
       $("#inner"+i+"_bottom").css("height","0px");
        $('#addx'+i+'').show();
        $("#addy"+i+"").css("transform","rotate(0deg)");
    });
}