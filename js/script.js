$(document).ready(function(){
  $("nav a").on('click',function(){
      //current class
    $('nav li.current').removeClass("current");
    $(this).parent().addClass('current');
      
      //heading text
      $("h1#heading").text($(this).text());
      
      //get link text
      var category = $(this).text().toLocaleLowerCase().replace(' ','-');
     
      //hidden class
      if(category =='all-projects'){
          $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
      } else{
          $('ul#gallery li').each(function(){
              if(!$(this).hasClass(category)){
                  $(this).hide().addClass('hidden');
              }else{
                  $(this).fadeIn('slow').removeClass('hidden');
              }
          })
      }
      //stop
      return false;
  });
    
    //mouse enter leave
    $('ul#gallery li').on('mouseenter',function(){
       var title = $(this).children().data('title');
       var desc  =$(this).children().data('desc') ;
        
        if(desc==null){
            desc="click to enlarge";
        }
        if(title ==null){
            title='';
        }
        
        $(this).append('<div class="overlay"></div>');
        var overlay =$(this).children('.overlay');
        
        overlay.html("<h3>"+title+'</h3><p>'+desc+"</p>");
        
        overlay.fadeIn(800);
    });
    
    $('ul#gallery li').on('mouseleave',function(){
        $(this).append('<div class="overlay"></div>');
        var overlay =$(this).children('.overlay');
        
        
        overlay.fadeOut(500);
    });
});
    
    
