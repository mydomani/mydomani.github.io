
$(document).ready(function(){
    /*标题动态效果*/
      title3Menu();
      titleHover("#title_1","#title1_hover");
      titleHover("#title_2","#title2_hover");
      toWorkHover();
    /*左侧菜单动态效果*/
   var isOpen=0;
  $("#oLeftMenu").on("click",function(){
    if(isOpen==0)
    {
    $("#leftMenu").css("left","0px");
     setTimeout("$('#main').hide()",800);
        isOpen=1;
    }
    });
  $("#exit").on("click",function(){
      if(isOpen==1)
      {
    $("#leftMenu").css("left","-1600px");
    $("#main").show();
          isOpen=0;
      }
   });
    /*图片的切换*/
    changeImage();
    /*CK2下面的图片的切换*/
    if(document.title=="CK2 - DOMANI")
    {
       changeCK2Image();
    }
    /*底部图片的动态效果*/
    bottomImg("#bottomImg1","#bottomPic2_2","#bottomPic2_3");
    bottomImg("#bottomImg2","#bottomPic3_2","#bottomPic3_3");
    bottomImg("#bottomImg3","#bottomPic4_2","#bottomPic4_3");
});

/*顶部固定栏鼠标上移效果*/
function titleHover(obj1,obj2){
    $(obj1).mouseover(function(){
        $(obj2).css("display","block");
    });
    $(obj1).mouseout(function(){
        $(obj2).css("display","none");
    });
}
/*INDUSTRIES菜单*/
function title3Menu()
{
var isClick=0;
$("#INDUSTRIES").mouseover(function(){
    $("#industries_menu").css("transform","rotate(135deg)");
    $("#title_3Menu").slideDown();
});
$("#INDUSTRIES").mouseout(function()
{   if(isClick==0)
{
    $("#industries_menu").css("transform","rotate(-45deg)");
    $("#title_3Menu").slideUp();
}
});
$("#INDUSTRIES").on("click",function(){
    if(isClick==0)
    {
    $("#industries_menu").css("transform","rotate(135deg)");
    $("#title_3Menu").slideDown();
    isClick=1;
    }
    else
    {
        $("#industries_menu").css("transform","rotate(-45deg)");
        $("#title_3Menu").slideUp();
        isClick=0;
    }
});
}
/*顶部固定栏back to work鼠标上移效果*/
function toWorkHover()
{
$("#return").mouseover(function(){
   $("#return_icon").css("left","-1px");
});
    $("#return").mouseout(function(){
        $("#return_icon").css("left","9px");
    });
}

/*底部图片动态效果*/
function bottomImg(obj1,obj2,obj3)
{
    $(obj1).mouseover(function(){
        $(obj2).css("transform","rotate(90deg)");
        $(obj3).css("height","52px");
        $(obj3).css("top","220px");
    });
    $(obj1).mouseout(function(){
        $(obj2).css("transform","rotate(0deg)");
        $(obj3).css("height","0px");
        $(obj3).css("top","270px");
    });
}
function changeImage()
{
    var imgNum=1;
    $("#btn_1").on("click",function(){
        --imgNum;
        $("#carousel").css("left","-"+imgNum*1200+"px");
        $("#btn_1").css("left",""+imgNum*1200+"px");
        $("#btn_2").css("left",""+(imgNum*1200+1100)+"px");
        if(imgNum==-1)
            {
            if(document.title=="CK2 - DOMANI")
            imgNum=2;
            else
            imgNum=3;
            $("#carousel").css("transition","none");
            $("#carousel").css("left","-"+imgNum*1200+"px");
            $("#btn_1").css("left",""+imgNum*1200+"px");
            $("#btn_2").css("left",""+(imgNum*1200+1100)+"px");
            $("#carousel").css("transition","0.5s");
            }
    });
    $("#btn_2").on("click",function(){
       ++imgNum;
        $("#carousel").css("left","-"+imgNum*1200+"px");
         $("#btn_1").css("left",""+imgNum*1200+"px");
         $("#btn_2").css("left",""+(imgNum*1200+1100)+"px");
           if((document.title=="CK2 - DOMANI"&&imgNum==4)||imgNum==5)
           {
               imgNum=1;
              $("#carousel").css("transition","0.1s");
              $("#carousel").css("left","-"+imgNum*1200+"px");
              $("#btn_1").css("left",""+imgNum*1200+"px");
              $("#btn_2").css("left",""+(imgNum*1200+1100)+"px");
              $("#carousel").css("transition","0.5s");
            }
    });
}
function  changeCK2Image()
{
    var imgNum=2;
   $("#btn_3").on("click",function(){
          if(imgNum==2)
          {
         $("#carousel2Pic").css("left","0px");
              imgNum=1;
          }
  });
    $("#btn_4").on("click",function(){
        if(imgNum==1)
        {
            $("#carousel2Pic").css("left","-750px");
            imgNum=2;
        }
 });
}