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

//Warmup-1 -- sumDouble
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
