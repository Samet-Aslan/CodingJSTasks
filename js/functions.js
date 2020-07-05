//Warmup-1 -- sleepIn
function sleepIn(weekday, vacation){
  if(!weekday || vacation ){
    return true;
  }
  return false;
}

//Warmup-1 -- monkeyTrouble
function monkeyTrouble(aSmile, bSmile){
  if(aSmile == bSmile){
    return true;
  }
  return false;
}

//Warmup-1 -- sumDouble
function sumDouble(a, b){
  if(a == b){
    return (a+b)*2
  }
  return a+b
}

//Warmup-1 -- diff21
function diff21(n){
  if(n > 21){
    return (n-21)*2
  }
  return 21-n
}

//Warmup-1 -- parrotTrouble
function parrotTrouble(talking, hour){
  if(talking && (hour < 7 || hour > 20){
       return true
  }
  return false
}

//Warmup-1 -- makes10
function makes10(a, b){
  if(a == 10 || b == 10){
      return true;
  }
  else if(a + b == 10){
    return true;
  }
  return false;
}

//Warmup-1 -- nearHundred
function nearHundred(n){
  if(Math.abs(n-100) <= 10 || Math.abs(n-200) <= 10){
    return true;
  }
  return false;
}

//Warmup-1 -- posNeg
function posNeg(a, b, negative){
  if(!negative && a < 0 && b > 0){
    return true;
  }
  else if(!negative && a > 0 && b < 0){
    return true;
  }
  else if(negative && a < 0 && b < 0 ){
     return true;
  }
  else{
    return false;
  }
}

//Warmup-1 -- notString
function notString(str){
  if(str.substring(0,3) == "not"){
    return str;
  }
  else{
    return "not " + str;
  }
}

//Warmup-1 -- frontBack
function frontBack(str){
  if(str.length > 1){
    return str.substring(str.length-1, str.length) + str.substring(1, str.length-1) + str.substring(0,1);
  }
  return str;
}

//Warmup-1 -- front3
function front3(str){
  if(str.length < 3){
    return str+str+str;
  }
  return str.substring(0,3) + str.substring(0,3) + str.substring(0,3);
}

//Warmup-1 -- backAround
function backAround(str){
  if(str.length < 2){
    return str + str + str;
  }
  return str.substring(str.length-1, str.length) + str + str.substring(str.length-1, str.length);
}

//Warmup-1 -- or35
function or35(n){
  if(n % 3 == 0 || n % 5 == 0){
    return true;
  }
  return false;
}

//Warmup--1 front22
function front22(str){
  if(str.length < 3){
    return str + str + str;
  }
  
  return str.substring(0, 2) + str + str.substring(0,2);
}

//Warmup-1 -- startHi
function startHi(str){
  if(str.length < 2){
    return false;
  }
  else if(str.substring(0,2) == "hi"){
    return true;
  }
  return false;
}

//Warmup-1 -- icyHot
function icyHot(temp1, temp2){
  if((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)){
    return true;
  }
  return false;
}

//Warmup-1 -- in1020
function in1020(a, b){
  if((a >= 10 && a <= 20) || (b >= 10 && b <= 20)){
    return true;
  }
  return false;
}

//Warmup-1 -- hasTeen
function hasTeen(a, b, c){
  if((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)){
    return true;
  }
  return false;
}

//Warmup-1 -- loneTeen
function loneTeen(a, b){
  if(((a >= 13 && a <= 19) && (b >= 13 && b <= 19))){
    return false;
  }
  else if(((a >= 13 && a <= 19) || (b >= 13 && b <= 19))){
    return true;
  }
  return false;
}





