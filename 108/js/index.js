$(function(){
  // 教案tab切換
  $(".lessonPlan .tab").eq(0).addClass("active").siblings().removeClass("active");
  $(".lessonPlan .tabContent").eq(0).show().siblings().hide();
  $(".lessonPlan .tab").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".lessonPlan .tabContent").eq($(this).index()).show().siblings().hide();
  })
  // buger
  $(".m-mobile").click(function(){
    var windowSize = $(window).width()
    // console.log(windowSize);    
    if(windowSize < 1200){
      $(".layer").css("display","block")
      $(".menu-wrap").css("display","block")
    }
  })
  $(".fa-times-circle").click(function(){
    $(".layer").css("display","none")
    $(".menu-wrap").css("display","none")
  })
  $(".show-advanced").click(function(){
    $(".advanced").css("display","block")
    $(".cross").hide()
  })
  $(".close-advanced").click(function(){
    $(".advanced").css("display","none")
    $(".cross").show()
  })
})