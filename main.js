//User time value

let hours = new Date(parseInt(prompt("Enter the Time:")));

if(hours <= 3){
    console.log("Midnight");
}else if (hours < 12){
    console.log("Morning");
}else if (hours < 15){
    console.log("Afternoon");
}else if (hours < 18){
    console.log("Evening");
}else if (hours <= 23){
    console.log("Night");
}else if (hours > 23){
    console.log("Error");
}