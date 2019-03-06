// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a man at night",
            choices: [
                {
                    text: "Fight with the man",
                    nextLevel: "cave",
                },

                {
                    text: "Dip on him and run!",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "-man-in-hood-dark-figure-in-a-hooded-sweatshirt-incognito-boy.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "He pulls a gun!!!",
            choices: [
                {
                    text: "Think about your options",
                    nextLevel: "Fight",
                },
            ]
        },

        field: {
            message: "Good Job You didn't get dropped",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                    
                    
                },
            ]
        },
        Fight: {
                   background_image: "-man-in-hood-dark-figure-in-a-hooded-sweatshirt-incognito-boy.jpg",
                   music: "Final-Fantasy-7-Boss-Battle.mp3",
                   message:" He holds the gun",
                   choices: [
                      {
                          text:" Hit him and run",
                          nextLevel:"field",
                      
                             
                          }
                          
                          
                        
                      , ]
               }

    }
};

               
 