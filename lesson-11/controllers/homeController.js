// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.getHome = (req, res) => {
    res.render('index', {
        nmae: "Sarah",
        people: {
            usa: {
                einstein: "Albert Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김민수",
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
         }
    }); 
} // "/" index
// exports.getContact = (req, res) => {} // "/contect" GET method
// exports.postContact = (req, res) => {} // "/contect" POST method

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName; // 라우트의 매개변수 /name/:myname
    res.render('index', {
         name: paramsName,
         people: {
            usa: {
                einstein: "Albert Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김민수",
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
         } 
    });
};