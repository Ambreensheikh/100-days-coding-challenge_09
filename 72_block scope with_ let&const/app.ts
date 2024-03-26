//block scope of let works inside the block{}it does not works outside{}
  {let blocklet = "work inside the block";
  console.log(blocklet);
    const blockConst = "work inside the block";
    console.log(blockConst);
}
   try {
    console.log(blocklet); //console give error, is not accessible outside
} 
   try {   
    console.log(blockConst);  //console  gives error
   }