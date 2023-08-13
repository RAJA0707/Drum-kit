// document.querySelector("button").addEventListener("click",handleClick)

// //we can also write it by document.querySelector("button").addEventListener("click",function(){
//     // alert("clicked")
// // })  // this is called calling anonomasly


// var kaka = Array.from(document.getElementsByClassName("btn")) 
// kaka.forEach(box=>{
//     box.addEventListener("click",handleClick)
// })

// function handleClick(key){   
    // var audio = new Audio("sounds/tom-1.mp3")
    // audio.play();
    // this.innerHTML ="L" // WE CAN CHANGE THE INNER HTML USING THIS(wasdjkl -buttons)


    // if(this.innerHTML==="w"){
    //     var audio = new Audio("sounds/tom-1.mp3")
    //     audio.play(); //FOR PLAYING AUDIO
    // }
    // else if(this.innerHTML==="a"){
    //     var audio = new Audio("sounds/tom-2.mp3")
    //     audio.play();
    // }
    // else if(this.innerHTML==="s"){
    //     var audio = new Audio("sounds/tom-3.mp3")
    //     audio.play();
    // }
    // else if(this.innerHTML==="d"){
    //     var audio = new Audio("sounds/tom-4.mp3")
    //     audio.play();
    // }
    // else if(this.innerHTML==="j"){
    //     var audio = new Audio("sounds/snare.mp3")
    //     audio.play();
    // }
    // else if(this.innerHTML==="k"){
    //     var audio = new Audio("sounds/crash.mp3")
    //     audio.play();
    // }
    // else if(this.innerHTML==="l"){
    //     var audio = new Audio("sounds/kick-bass.mp3")
    //     audio.play();
    // } 

    ////////instead of using if else statement we can use switch statement////////////
     
    function handleClick(key){    // takes key pressed and key clicked as parameter
        switch (key) {    //check with every thing
            case "w"    :
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play(); //FOR PLAYING AUDIO
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play(); //FOR PLAYING AUDIO
                break
            case "s":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play(); //FOR PLAYING AUDIO
                break
            case "d":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play(); //FOR PLAYING AUDIO
                    break
            case "j":
                    var audio = new Audio("sounds/snare.mp3")
                    audio.play(); //FOR PLAYING AUDIO
                    break 
            case "k" :
                    var audio = new Audio("sounds/crash.mp3")
                    audio.play(); //FOR PLAYING AUDIO
                    break  
            case "l":
                    var audio = new Audio("sounds/kick-bass.mp3")
                    audio.play(); //FOR PLAYING AUDIO
                    break                                             
            default:
                    break;
            }
        }

    //add eventlistener to click
    for(var i=0;i<document.querySelectorAll(".btn").length;i++){
    document.getElementsByClassName("btn")[i].addEventListener("click",function(){
        var buttonHTML = this.innerHTML; // gettig the elements in the particuklar class
        handleClick(buttonHTML); //calling the function by pass key like "wasdjkl" as argument
        
        buttonAnimation(buttonHTML);
    })
    }

    //adding event listner to keyboard button
    document.addEventListener("keydown",function(event){  //event contains all the details in it like which key is pressed etc
        handleClick(event.key);  //this give which keyboard button pressed
9
        buttonAnimation(event.key);
    })


    //to add animation when clicked

    function buttonAnimation(keyanime){
        var anime = document.querySelector("."+ keyanime +"-btn"); //adding dot because we need the class of it 
        anime.classList.add("pressed");

        setTimeout(() => {
            anime.classList.remove("pressed")
        }, 100);
    }