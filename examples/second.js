import "../short-long.js"

// example #1
let items = ["Aaron", "Martin", "Jacques", "Georges"];
let pre = "Le vélo ";
// pref for example : 
/* pref= {
  long: "de" OR "le" OR "la"
  short: "d'" OR "l'" OR "l'"
}
*/
let pref = {
  long: pre + "de",
  short: pre + "d'",
};

items.forEach((element) => {
  a = take_long_or_short(pref, element);
  console.log(a);
});

// output:
/*

>  Le vélo d'Aaron
>  Le vélo de Martin
>  Le vélo de Jacques
>  Le vélo de Georges

*/