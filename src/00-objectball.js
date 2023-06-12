debugger;
function gameObject(){
    const object = {
    "home": {
        "teamName": "Brooklyn Nets",
        "colors": ["Black","White"],
        "players": {
            "Alan Anderson":{
                "Number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1
            },
            "Reggie Evans":{
                "Number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7
            },
            "Brook Lopez":{
                "Number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15
            },
            "Mason Plumlee":{
                "Number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5
            },
            "Jason Terry":{
                "Number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1
            },
        }
    },
    "away": {
        "teamName": "Charlotte Hornets",
        "colors": ["Turqoise","Purple"],
        "players": {
            "Jeff Adrien":{
                "Number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            "Bismak Biyombo":{
                "Number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop":{
                "Number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon":{
                "Number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            "Brendan Haywood":{
                "Number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12
            },
        }
    }
}
return object
}

function numPointsScored(player){
    let obj = gameObject();
    for (let gameKey in obj){
        //gameKeys are home and away
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]["points"]
            }
            
            }
        }
    }
}

function shoeSize(player){
    let obj = gameObject();
    for (let gameKey in obj){
        //gameKeys are home and away
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]["shoe"]
            }
            
            }
        }
    }
}

function teamColors(team){
    let obj = gameObject();
    for (let gameKey in obj){
        //gameKeys are home and away
        debugger;
        if (gameKey === team){
            return obj[gameKey]["colors"]
        }
    }
}

function teamNames(){
    let obj = gameObject();
    return Object.keys(obj)
}

function playerNumbers(team){
    let obj = gameObject();
    numbers = []
    for (let gameKey in obj){
        //gameKeys are home and away
        debugger;
        if (gameKey === team){
        let teamObj = obj[gameKey]
        debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            debugger;
            if (teamKey === "players"){
            let names = teamObj[teamKey]
            debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                debugger;
                numbers.push(teamObj[teamKey][playerName]["Number"])
            }
        }
            }
        }
    } return numbers
}

function playerStats(player){
    let obj = gameObject();
    for (let gameKey in obj){
        //gameKeys are home and away
        debugger;
        let teamObj = obj[gameKey]
        debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            debugger;
            let names = teamObj[teamKey]
            debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                debugger;
                if (playerName === player){
                    debugger;
                    return teamObj[teamKey][player]
                }
            }
        }
    }
}


function bigShoeRebounds(){
    let obj = gameObject();
    let bigShoe = 0
    let bigShoePlayerRebounds = ""
    for (let gameKey in obj){
        //gameKeys are home and away
        //debugger;
        let teamObj = obj[gameKey]
        //debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            //debugger;
            let names = teamObj[teamKey]
            //debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                //debugger;
                let theName = names[playerName]
                for (let stat in theName){
                    //debugger;
                    if (stat === "shoe"){
                        debugger;
                        let newShoe = teamObj[teamKey][playerName][stat]
                        if (newShoe > bigShoe){
                            debugger;
                            bigShoe = teamObj[teamKey][playerName][stat]
                            bigShoePlayerRebounds = teamObj[teamKey][playerName]["rebounds"]
                            debugger;
                }
            }
            }
        }
    }
    return bigShoePlayerRebounds
}
}


function bigShoeRebounds(){
    let obj = gameObject();
    let bigShoe = 0
    let bigShoePlayerRebounds = ""
    for (let gameKey in obj){
        //gameKeys are home and away
        //debugger;
        let teamObj = obj[gameKey]
        //debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            //debugger;
            let names = teamObj[teamKey]
            //debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                //debugger;
                let theName = names[playerName]
                for (let stat in theName){
                    //debugger;
                    if (stat === "shoe"){
                        debugger;
                        let newShoe = teamObj[teamKey][playerName][stat]
                        if (newShoe > bigShoe){
                            debugger;
                            bigShoe = teamObj[teamKey][playerName][stat]
                            bigShoePlayerRebounds = teamObj[teamKey][playerName]["rebounds"]
                            debugger;
                }
            }
            }
        }
    }
    return bigShoePlayerRebounds
}
}


function mostPointsScored(){
    let obj = gameObject();
    let bigShoe = 0
    let bigShoePlayerRebounds = ""
    for (let gameKey in obj){
        //gameKeys are home and away
        //debugger;
        let teamObj = obj[gameKey]
        //debugger;
        //teamObj are home and away but with the keys available
        for (let teamKey in teamObj){
            //debugger;
            let names = teamObj[teamKey]
            //debugger;
            //names are the names but only as one full object
            for (let playerName in names){
                //debugger;
                let theName = names[playerName]
                for (let stat in theName){
                    //debugger;
                    if (stat === "points"){
                        debugger;
                        let newShoe = teamObj[teamKey][playerName][stat]
                        if (newShoe > bigShoe){
                            debugger;
                            bigShoe = teamObj[teamKey][playerName][stat]
                            bigShoePlayerRebounds = playerName
                            debugger;
                }
            }
            }
        }
    }
    return bigShoePlayerRebounds
}
}
