number = document.querySelectorAll('.modal_button').length;

var my_scores = document.querySelector('#scores')


if(localStorage.getItem('score')){
    my_scores.textContent = localStorage.getItem('score')
}





document.querySelector('.restart').addEventListener('click',restart)


function restart(){
    location.reload()
}








var scores = localStorage.setItem('scores',0)


bonus = document.querySelectorAll('.bonus').length


game_changer_button = document.querySelectorAll('.game_changer').length


buttons_number = document.querySelectorAll('.options_button').length


var options = ['scissors','paper','rock','lizard','spock']


for(var i =0; i < number; i++){
    document.querySelectorAll('.modal_button')[i].addEventListener('click',slide)
}




for (var j = 0; j < buttons_number; j++){
    document.querySelectorAll('.options_button')[j].addEventListener('click',answer)
}



for(var m =0; m < game_changer_button; m++){
    
    document.querySelectorAll('.game_changer')[m].addEventListener('click',change_game)

}




function change_game(){

    document.querySelector('.main_game').classList.toggle('visible')
    document.querySelector('.bonus_game').classList.toggle('visible')
    

    for(var i =0; i<bonus; i++){
        document.querySelectorAll('.main')[i].classList.toggle('visible')
        document.querySelectorAll('.bonus')[i].classList.toggle('visible')
    }

    
}



function slide(){
    document.querySelector('.modal').classList.toggle('visible')
}




function answer(){

    if(document.querySelector('.main').classList.contains('visible')){
        computer_answer = Math.floor(Math.random()*5)

    }
    else{
        computer_answer = Math.floor(Math.random() * 3)
    }

  


    your_answer = parseInt(this.value)


    document.querySelector('.your_pick button').classList.add(options[your_answer])
    document.querySelector('.your_image').src = "images/icon-"+options[your_answer]+".svg";
    document.querySelector('.computer_pick button').classList.add(options[computer_answer])
    document.querySelector('.computer_pick button img').src = "images/icon-"+options[computer_answer]+".svg"



    if (your_answer == computer_answer){

        for(var i = 0; i<=1; i++ ){
            
            document.querySelectorAll('.display')[i].textContent = 'DRAW'
    
            }



        
       
    }
    else if(((your_answer + 1) % 5) == computer_answer || ((your_answer + 3) % 5) == computer_answer){



        for(var i = 0; i<=1; i++ ){
            
        document.querySelectorAll('.display')[i].textContent = 'YOU WIN'

        }

        document.querySelector('.mine').classList.remove('visible')



    
        localStorage.setItem('score',parseInt(my_scores.textContent) + 1)
        my_scores.textContent = parseInt(my_scores.textContent) + 1


        

    }
    else{

        for(var i = 0; i<=1; i++ ){
            
            document.querySelectorAll('.display')[i].textContent = 'YOU LOSE'
    
            }
   

        document.querySelector('.comps').classList.remove('visible')


        localStorage.setItem('score',parseInt(my_scores.textContent)-1)
        my_scores.textContent = parseInt(my_scores.textContent)-1

  
        
    }
    
    document.querySelector('.all_games').classList.add('visible')
    document.querySelector('.winners_section').classList.remove('visible')





}



