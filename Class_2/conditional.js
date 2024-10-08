

// Problem--3: Grade Evaluation

let score = 85;

if(score >= 90){
    console.log("Assing grade: A");
}else if(score >= 80 && score < 90){
    console.log("Assing grade: B");
}else if(score >= 70 && score < 80){
    console.log("Assing grade: C");
}else if(score >= 60 && score < 70){
    console.log("Assing grade: D");
}else{
    console.log("Assing grade: F");
}


//Proble-4: Weather Check
let temperature = 15;
let isRaining = true;
isSunny = false;

if(temperature < 0){
    console.log("Wear a Heavy Jacket.");
}else if((temperature >= 0 || temperature <= 20) && isRaining === true){
    console.log("Wear Raincoat and Sweater");
}else if(temperature > 20 && isSunny === true){
    console.log("Wear T-Shirt and Sunglasses");
}else{
    console.log("Wear Regular cloths.");
    
}
