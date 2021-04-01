$(document).ready(function(){

    const imgOne = './public/images/bckgrndimg-1.webp';
    const imgTwo = './public/images/bckgrndimg-2.webp';
    const imgThree = './public/images/bckgrndimg-3.jpg';
  
    const imgArray = [imgOne, imgTwo, imgThree];
    
    $("div.homePageFirstDiv").css('background-image', 'url(' + imgArray[0] + ')');
    
    let interval = 0;
    
    setInterval(function(){
      
      if (interval < (imgArray.length - 1)) {
          interval++;
      } else {
          interval = 0;
      }
      
      $("div.homePageFirstDiv").css('background-image', 'url(' + imgArray[interval] + ')');
    
    }, 4000);
    
  })