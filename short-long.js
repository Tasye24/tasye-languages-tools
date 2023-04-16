// Problematic:
// it's embarassing (in french, maybe other languages)
// when you see for example : "Le tailleur de André"
//                                          ^^^
// in french you could write like this: "Le tailleur d'André"
//                                                   ---

/*
 * @author Tasye24
 * @param prefix{} prefix.long = long version; prefix.short = shor version
 * */
function take_long_or_short(prefix, item) {
  let space = " "; // can be alt+255 if troubles
  let voyels = "aeiouy";
  voyels = voyels.split("");

  let first_letter = item[0].toLowerCase();

  if (voyels.includes(first_letter)) {
    return prefix.short + item;
  } else {
    return prefix.long + space + item;
  }
}

// tests
let items = ["Aaron", "Martin", "Jacques", "Georges"];
let pre = "Le vélo ";
let pref = {
  long: pre + "de",
  short: pre + "d'",
};

items.forEach((element) => {
  a = take_long_or_short(pref, element);
  console.log(a);
});
