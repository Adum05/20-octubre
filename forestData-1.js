let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
// Your code here
for(let parks of parks){
    if(park.name=== "Riverside Park"){
        park.name= "Riverside Greenspace";
        break;
    }      
}
// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
// Your code here
for(let park of parks({
    if(park.name=== "Central Park"){
        for(let tree of park.trees){
            if(tree.species==="Maple"){
                tree.species="Sugar Maple"
                break;
            }
        }
        break;
    }
}

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
// Your code here
for(let park of parks){
    if(park.name==="Central Park"){
        park.trees.push({
            species: "Birch",
            age: 7,
            health: "Good",
            height: 18
        });
        break;
    }
  

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
// Your code here
    let centralParkTrees= [];
    
    for(let park of parks){
        if(park.name==="Central Park"){
            for(let tree of park.trees){
                centralParkTrees.push(tree.species)
            }
            break;
        }
    }

// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
// Your code here
    let totalAge=0;
    let treeCount=0;

    for(let park of parks){
        for(let tree of park.trees){
            totalAge += tree.age;
            treeCount++;
        }   
    }

    let averageTreeAge= treeCount > 0 ? totalAge / treeCount : 0;

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
// Your code here
    let tallestTree= null;

    for(let park of parks){
        for(let tree of park.trees){
            if(tallestTree === null || tree.height > tallestTree.height){
                tallestTree = tree;
            }
        }
    }

// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
// Your code here
let centralPark = parks[0]

let playgroundIndex = centralPark.facilities.indexOf("playground");
if(playgroundIndex !== -1){
    centralPark.facilities.splice(playground, 1);
}

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
// Your code here
    let parkJSON = JSON.stringify(parks);

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
// Your code here
    let firstPark = parks[0];

    console.log("First Name:", firstPark.name);
    console.log("Facilities:", firstPark.facilities);

// Task 10: Using console.log, display the species of the third item in the parks array.
// Your code here
    let thirdPark = parks[2]

    console.log("Species of the third park:", thirdPark.trees.species)
