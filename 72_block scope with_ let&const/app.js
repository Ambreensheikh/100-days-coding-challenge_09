"use strict";
//block scope of let works inside the block{}it does not works outside{}
{
    let blocklet = "work inside the block";
    console.log(blocklet);
    const blockConst = "work inside the block";
    console.log(blockConst);
}
{
    console.log(blocklet);
} //console give error, is not accessible outside
{
    console.log(blockConst);
} //console  gives error
