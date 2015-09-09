/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Slider CSS starts
function selectStep(slide){
             if(slide == 1)
             {
                 
                $(".progress-selected").animate({ marginLeft: '2px'},500);
                 $(".content-switcher").animate({marginLeft: '300px'},0);
                 $(".content-switcher").animate({marginLeft: '0px'},500);
                
             }
             else if(slide == 2)
             {

                 $(".progress-selected").animate({ marginLeft: '130px'},500);
                 $(".content-switcher").animate({marginLeft: '300px'},0);
                 $(".content-switcher").animate({marginLeft: '0px'},500);
             }
            else if(slide == 3)
             {


                 $(".progress-selected").animate({marginLeft: '280px'},500);
                  $(".content-switcher").animate({marginLeft: '300px'},0);
                 $(".content-switcher").animate({marginLeft: '0px'},500);
                
             }
             
            $(".content-switcher").hide();
            
            $("#Content"+slide).show();
            
   }// Slider CSS Ends
   
//DROP-DOWN MENU CSS starts


          $(document).ready(function() {
          $("select[name='dropdown']").change(function() {

            drop=$(this).val();
            $(".content-switcher").hide();
            
            $("#Content"+drop).show();
            slide=drop; //for changing the animation position to the selected tab when going full screen
            selectStep(slide);
      });
   });
  
   //DROP-DOWN MENU CSS ends
         
         