 $(function(){
      var q=0;
//---------------------轮播图-----------------------
     $(".dots li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".lunbotu ul li").eq( $(this).index() ).show().siblings().hide();
        q=$(this).index();
      });
 
      
     //自动轮播实现

      setInterval(function(){
            if(q==8) { q=0; }   
             $(".lunbotu ul li").eq(q).fadeIn(1500).siblings().fadeOut(1500);
             $(".dots li").eq(q).addClass("active").siblings().removeClass("active");
             q++
           },5000);
 
        
//---------------------选项卡-----------------------        
     //更改上面的文字   
       $(".thisis_info .it_ul li").click(function(){
           $(this).addClass("xuanxiang").siblings().removeClass("xuanxiang");
           
           $(".choose_self").eq( $(this).index()).show().siblings().hide();
       
       });
     //更改显示文字
       $(".hotel_span span").click(function(){
           $(this).addClass("neiwai").siblings().removeClass("neiwai");
           $(".add_search").toggle();
           $(this).html();
           if(  $(this).html()=="国内酒店"  ){
            $(".country_hotel input").eq(0).val("北京");
            $(".country_hotel input").eq(2).val("2017-08-31");
            $(".country_hotel input").eq(3).val("如位置\酒店名\品牌");       
           }else if( $(this).html()=="国际酒店" ){
            $(".country_hotel input").eq(0).val("首尔");
            $(".country_hotel input").eq(2).val("2017-09-03");
            $(".country_hotel input").eq(3).val("商圈/地标/景点/酒店名"); 
           }else if( $(this).html()=="国内机票" ){
            $(".ticket_back input").eq(3).val("上海");
            $(".ticket_back input").eq(4).val("2017-08-31");  
           }else if( $(this).html()=="国际机票" ){
            $(".ticket_back input").eq(3).val("香港");
            $(".ticket_back input").eq(4).val("2017-09-03");
           }
       });
       
       $("input[name='oneorback']").click(function(){
           if( $(this).index()==0 ){
            $(".ticket_back input").eq(5).val("yyy-mm-dd");
           }else{
            $(".ticket_back input").eq(5).val("2017-09-05             周二");
           }
       
       });


//----------------------详情切图--------------------------------- 
	     $(".xiangqing ul li").hover(function(){
	        $(this).css("width","400px").siblings().css("width","133px");
	        $(this).children("[class='H_text']").hide().siblings().show();
	    },function(){
	        $(".xiangqing ul li").css("width","170px");
	        $(".xiangqing ul li").children("[class='H_text']").show();
	    });	    	 
	 
//-----------------------目的指数的jquery方法--------------------
       $(".pp_title span").click(function(){
            $(this).addClass("on1").siblings().removeClass();
       });
       $(".pp_title span(:not([class='on1']))").hover(function(){
            $(this).addClass("hoveron1").siblings().removeClass("hoveron1");
       },function(){
            $(".pp_title span(:not([class='on1']))").removeClass("hoveron1");
       
       });
   
//-----------------------特价票的jquery方法-------------------------  
    //更改选项卡hover
       $(".bg_title span").click(function(){
            $(this).addClass("on2").siblings().removeClass();
       });
       $(".bg_title span(:not([class='on2']))").hover(function(){
            $(this).addClass("hoveron2").siblings().removeClass("hoveron2");
       },function(){
            $(".bg_title span(:not([class='on2']))").removeClass("hoveron2");
       
       });
    //更改飞机火车地址
       $(".bg_title span").click(function(){
           var dizhi = $(this).html().replace(/出发/,"");
           $(this).parent().next().find("b[class='a_city']").html(dizhi);
       });
    
//-----------------------旅游指南切换图片--------------------------
          $(".one_0 a").mousemove(function(){
               $(".one_0 a").removeClass("changethis");
               $(".one_0 span").hide();
               $(this).addClass("changethis");
               $(this).next().show();
               $(".one_right img").attr("src","img/z"+$(this).attr("index")+".jpg");
          });

    
    });