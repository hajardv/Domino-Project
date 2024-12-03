   
        const images = [
            {src:"./domino1.jpeg",point:1 } ,
            {src:"./domino2.jpeg",point:6 }, 
            {src:"./domino3.jpeg",point:4 },
            ];
      
              function mathe() {
                  const randomIndex = Math.floor((Math.random() * images.length)); //2
                  return images[randomIndex]; //images[2] => {src:"./domino3.jpeg",point:4 }
              }
              function affichee() {
                  let img1 = mathe(); //{src:"./domino3.jpeg",point:4 }
                  let img2 = mathe(); //{src:"./domino3.jpeg",point:4 }
      
        /*          
                 while (img1.src === img2.src) {
                    //img2 = {src:"./domino3.jpeg",point:4 }
                    //img2.scr = "./domino3.jpeg"
                      img2 = mathe(); // {src:"./domino3.jpeg",point:4 }
                    //img2.scr = ./domino3.jpeg
                    //img2 = {src:"./domino3.jpeg",point:4 }
                   
                  }
                  
      */
                
                  document.getElementById("image1").src = img1.src;
                  document.getElementById("image2").src = img2.src;
                 const point =document.getElementById("message")
                 if(img1.point>img2.point){
                  point.innerText="🎇 the player 1 is win"
                 }
                 else if(img1.point<img2.point){
                   point.innerText="the player 2 is win 🎇"
                 }
                 else{
                  point.innerHTML="equil"
                 }
                 
                 
      
              }
             
                
      
              
      
              
              affichee();