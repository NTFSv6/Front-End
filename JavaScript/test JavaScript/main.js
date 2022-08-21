
// todo: Extension Better Comments هذه العمليه تتم داخل الكومنت
//B~ لعمل هذه الاشكال تكتب الاختصر قبل الكومنت لكي يضع لون مميز عن الكود وتعرف انه كومنت مميز
//? للتعديل ندخل علي settings.json
// ! Comment عند استخدام رمز ! يغير لون الكومنت
// ~ Comment عند استخدام رمز ~ يغير لون الكومنت
// todo Comment عند استخدام رمز todo يغير لون الكومنت
// > Comment عند استخدام رمز < يغير لون الكومنت
// @@ Comment عند استخدام رمز @@ يغير لون الكومنت
// ? Comment عند استخدام رمز ? يغير لون الكومنت
// ^^ Comment عند استخدام رمز _ يغير لون الكومنت
// C% Comment عند استخدام رمز _ يغير لون الكومنت
// T^ Comment عند استخدام رمز _ يغير لون الكومنت
// P# Comment عند استخدام رمز _ يغير لون الكومنت
// J$ Comment عند استخدام رمز _ يغير لون الكومنت
// B~ Comment عند استخدام رمز _ يغير لون الكومنت

//! 3/6/2022                                                                    ELZERO Web Scholl


// document.querySelector('h1').style.color='blue';
// console.log("%cElzero %cWeb %cSchool","color:red;font-size:30px","color:blue;font-size:45px","color:green;font-size:15px")
// انواع الكومنت
/*
1
2
*/
// window.alert("Welcome in test Js"); //تستخدم alert لعرض رساله معينه عند فتح المتصفح
// document.write('<h2>WELCOME in Learn Prog</h2>') لكتابه شي داخل المتصفح ب write
// console.log('test Console');
// console.error('Error');
// console.table(['omar','eldeep']) لعمل جدول بداخل الكونسول
// Directive %c
// console.log("Hello in %cJS %cFile","color:blue; font-size: 30px","color:red; font-size: 50px"); //نضيف علامه  %c قبل الكلام الذي سوف تعمل له تنسيق

// ECMAScript>> معاير لتقريب لغات البرمجه لبعض مثل الاتي
// let myname ='eldeep';
// console.log("Hello "+myname);
// console.log(`Hello ${myname}`);

/*
    Data Types Intro
    1-String
    2-Number
    3-Array => Object
    4-Object
    5-Boolean
    6-undefined

console.log(typeof('omar eldeep'));
console.log(typeof(500));
console.log(typeof(500.41));
console.log(typeof[10,15,08]);
console.log(typeof["omar","Ashraf","ELDEEP"]);
console.log(typeof{name:'omar',age:21,country:"Egypt"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
*/

/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  -
*/
// var user = 'oMaR', age = 21;
// console.log(user, age + ' Age');

// -----------------------------------------------------------------------------

/*
  Var
  - Redeclare (Yes) عند عمل نفس المتغير مره اخره سوف يشتغل عادي وهذا خطاء
  - Access Before Declare (Undefined) لا تسمح بمعرفه ماذا يحدث عن عمل المتغير بشكل خطاء
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error) عند عمل نفس المتغير مره اخره سوف يعمل خطاء
  - Access Before Declare (Error) تسمح بمعرفه ماذا يحدث عند عمل المتغير بشكل خطاء
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error) عند عمل نفس المتغير مره اخره سوف يعمل خطاء
  - Access Before Declare (Error) تسمح بمعرفه ماذا يحدث عند عمل المتغير بشكل خطاء
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
// var a = 5;
// let f = 7;
// const s = 9;
// console.log(a, f, s);

// -----------------------------------------------------------------------------
/*
 String Syntax +Character Escape Sequences
\ Escape + Line Continue
\n
*/

// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
// \'	Single quote
// \"	Double quote
// \\	Backslash

// console.log('ELDEEP learn "JavaScript"'); لعمل علامه ال2كوت بداخل السنجل كوت
// console.log('ELDEEP learn \'JavaScript\''); لعمل السنجل كوت بداخل السنجل كوت نستخدم \ قيل الكوت
// console.log("ELDEEP learn 'JavaScript'"); لعمل علامه السنجل بداخل الدابل كوت
// console.log('ELDEEP learn \"JavaScript\"'); لعمل الدابل كوت بداخل السنجل كوت اوالدابل ايضا نستخدم \ قيل الكوت
// console.log('ELDEEP \
// learn \
// JavaScript'); لجعل الاسطر ترتبط ببعض نستخدم \ حتي لو لم يكن ع سطر واحد
// console.log("ELDeeP\nLearn\nJavaScript"); لجلع كل كلمه في سطر لوحده نستنخدم \n قبل الكلمه

// ---------------------------------------------------------------------------------------
// Template Literals (Template Strings)

// let a = "im Love";
// let s = "JavaScript";
// let d = "and";
// let f = "Programing";
// let template = `
// <div>
// <h2>Im ElDeeP<span> Welcome</span></h2>
// </div>        `
// document.write(template)
// console.log(a + " " + s + "\n" + d + " " + f); هذا شكل معقد ويجود به لافبطه كثيره
// console.log(`${a} ${s}${d} ${f}`); هذا النوع يختلف عن الاخر ويمكنن التحكم به بشكل افضل لانك استخدمت `` ثم بداخله ${}

// ---------------------------------------------------------------------------------------

// const chorus = 'Because I\'m happy. ';
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`); لتكرار الكود اكتر من مره بدل اعاده كتابته نستخدم repeat(عدد المرات)

// let here = [title2 = 'DiP', des = "ELDeep love JavaScript", date = 21 + ' Year'];
// let oo =(`
// <div class='contains'>
// <h3>${title2}</h3>
// <p>${des}</p>
// <span>${date}</span>
// `);
// document.write(oo.repeat(4));

// ---------------------------------------------------------------------------------------

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Pre / Increment ]
  Increment ++ [ Post / Increment  ]
  -- Decrement [ Pre / Decrement ]
  Decrement -- [ Post / Decrement ]
*/

// console.log(10 + 20);
// console.log(10 + "Osama");

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN);

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1

// let num = 6;
// console.log(num++);
// console.log(num);
// console.log(++num);
// console.log(num--);
// console.log(num);
// console.log(--num);

// ---------------------------------------------------------------------------------------

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));

// ---------------------------------------------------------------------------------------

/*
Type Coercion (Type Casting)
- +
- -
- "" - 2
- false - true
*/

// let a = "100";
// let b = 90;
// let c = true;

// console.log(a + b); هنا يتم عمل دمج
// console.log(+a + b); هنا يتعم عمل جمع لان تم استخدام قبل الاسترنج+
// console.log(-a + b); هنا تم عمل طرح لان قبل الاسترنج -
// console.log(Number(a) + b);
// console.log(a - b) هنا يعم عمليه حسابيه عكس الجمع لانه بيتحول لدمج
// console.log("" + 2)
// console.log("" - 2)
// console.log(+a + b + c)
// console.log(a + b + c)

// ---------------------------------------------------------------------------------------

// Assignment Operators

// let a = 10;
// a = a + 20;
// a = a + 70;
// a += 100; //a = a + 100
// a -= 100; //a = a - 100
// a /= 50; // a = a / 50
// console.log(a)

// ---------------------------------------------------------------------------------------

// let a = 10;
// let b ="20"
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * e); //2000
// console.log(e ** g + f ** g++ + ++f ** g++ + e * g + f * e + -d + -d + -d + -d - ++f - g++ * g - g - f - g-- - g++ - g); //2000
// console.log(++e * ++g + -d + ++f); //173
// console.log(g ** g - f - f - g - g - g - g-- - g); //173

// ---------------------------------------- 23 ---------------------------------------------- ##

/*
Number
Double Precision
Syntactic Sugar "_"
e
**
With Decimal
Number + BigInt
Number Min Value
Number Max Value
*/
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.1);
// console.log(Number.MAX_SAFE_INTEGER); // اعلي رقم امان تستخدمه اللغه
// console.log(Number.MAX_VALUE); // اخر رقم تقدر توصله اللغه

// ---------------------------------------- 24 -----------------------------------------------

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/
// console.log((100).toString()); // لتحويل الرقم الي استرنج
// console.log(100.10.toString()); // نفس الفكره ولكن نستخدم .. لتحويل الرقم الي استرنج
// console.log(100..toString()); // نفس الفكره ولكن نستخدم .. لتحويل الرقم الي استرنج
// console.log(100.554.toFixed(2)); // نستخدم toFixed لكي نحدد كم رقم عشري سوف يظهر واذا كان الرقم الذي قبل الرقم المختار 5اواكبر سوف يتم زياده واحد علي اخر رقم
// console.log(100.555.toFixed(2)); // نستخدم toFixed لكي نحدد كم رقم عشري سوف يظهر واذا كان الرقم الذي قبل الرقم المختار 5اواكبر سوف يتم زياده واحد علي اخر رقم

// console.log(Number("100 Omar"));
// console.log(parseInt("100 Omar")); // تستخدم لاستخراج الرقم الموجود وتحويله من استرنج لرقم
// console.log(parseFloat("100.40")); // تستخرج الرقم واذا كان به كسور سوف تظهر بشكل عادي

// console.log(Number.isInteger("100")); // نستخدم isInteger لمعرفه هذا شي معين ويعتمد عالمطلوب الي قبله
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("dd"/78)); // نستخدم isNaN لكي تعرف هل البينات الذي ترجع لك رقم ام لا

// ---------------------------------------- 25 -----------------------------------------------

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

// console.log(Math.round(99.2)); // نستخدم ال round لاسترجاع اقرب قيمه من النصف اذا كانت اقل من ال5 سوف يرجع ب0 اذا كانت 5 او اكبر سوف يعمل واحد صحيح ويزيده
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.1)); // اتقريب الرقم العشري لفوق
// console.log(Math.floor(99.9)); // اتقريب الرقم العشري لتحت

// console.log(Math.min(10, 20, 100, -100, 90)); // نستخدم ال min لنجيب اقل رقم
// console.log(Math.max(10, 20, 100, -100, 90)); // ال max ترجع لك باكبر رقم موجود

// console.log(Math.pow(2, 4)); // نستخدم ال pow لعمل اوس من خلال ال ,
// console.log(Math.random()); // نستخدم random ليطبع لك رقم عشوائي
// console.log(Math.trunc(99.5)); // يحذف الكسور بال trunc

// ------------------------------------- 26 --------------------------------------------------

/*
  Number Challenge
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(d));

// Use Variables a + d One Time To Get The Needed Output
// console.log(Math.round(a ** Math.floor(d))); // 10000
// console.log(Math.trunc(a ** Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(parseInt(d));

// // Use Variables b + d To Get This Valus
// console.log((Math.floor(b).toFixed(2) / Math.ceil(d)).toString()); // 66.67 => String
// console.log(parseInt((Math.ceil(b).toFixed(2) / Math.ceil(d)))); // 67 => Number

// ------------------------------------- 27 --------------------------------------------------

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]); // تستخدم لطباعه index معين علي حسب رقمه فالترتيب
// console.log(theName.charAt(1)); // نفس الشي ولكن نستخدم نوع charAt تم رقم ال index

// console.log(theName.length); // تستخدم لعد العناصر وتبداء من رقم 1

// console.log(theName.trim()); // يحذف المسفات الذي قبل العنصر وبعدها

// console.log(theName.toUpperCase()); // يجعل الحروف كلها كبيره
// console.log(theName.toLowerCase()); // يجعل الكروف كلها صغيره

// console.log(theName.trim().charAt(2).toUpperCase()); //

// ------------------------------------- 28 --------------------------------------------------

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "ELDeoP Learn Anyone Programing";

// console.log(a.indexOf("Learn"));
// console.log(a.indexOf("Learn", 8));
// console.log(a.indexOf("o")); // 4 يبحث عن القيمه من البدايه من اول index

// console.log(a.lastIndexOf("e"));
// console.log(a.lastIndexOf("o")); //22 يبحث عن القيمه من النهايه بدايه من اخر index

// console.log(a.slice(7, 30)); // استخدام لقطع كلمه او انديكس معين من خلال رقم الانديكس
// console.log(a.slice(0, 6)); // وعند القطع لايقطع من اخر انديكس قطع من اللي قبله
// console.log(a.slice(-10));
// console.log(a.slice(-10, -7));

// console.log(a.repeat(2)); //                                      لتكرار المتغير اكثر من مره ع حسب العدد الذي سوف تضعه

// console.log(a.split("")); // نستخدم هذا النوع لقص شي معين
// console.log(a.split(" "));
// console.log(a.split(" ", 2)); // ويمكننا وضع حد ادني للقص

// ------------------------------------- 29 --------------------------------------------------

/*
  String Methods
  Mand => اجباري
  Opt => اختياري
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School";

// console.log(a.substring(2, 6));
// console.log(a.substring(0, 6));
// console.log(a.substring(-10, 6)); // => 0 - 6 عند استخدام السالب يبداء من عند الصفر
// console.log(a.substring(6, 2));
// console.log(a.substring(a.length - 6)); // طبعا لان الlength اكبر من الانديكس بواحد يتم طرح منه رقم اكبر منه ب1
// console.log(a.substring(a.length - 6, a.length - 3));

// console.log(a.substr(0, 6)); // هنا تم بداء العد من الصفر الي ال6
// console.log(a.substr(17)); // هنا عدد الانديكس اكبر من الموجود عندي فسوف يطبعها فاضيه
// console.log(a.substr(-10));
// console.log(a.substr(-6, 5)); // هنا نستخد الطريقه العكسيه ثم عدد الحروف الذي تحتاج طبعها

// // اجابتهم تكون true _ false

// console.log(a.includes("Web")); // تستخد لبحث عن كلمه او حرف معين ويبداء من الانديكس صفر
// console.log(a.includes("zero", 3));

// console.log(a.startsWith("E")); // تستخدم لكي تبحث عن اول حرف او من بعد تحديدك لانديكس معين
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("z", 2));

// console.log(a.endsWith("l")); // يبحث عن اخر حرف او اخر لاينس
// console.log(a.endsWith("r", 6)); // هنا يحسب اخر لاينس اخر حرف بمعني ان هذا ينتهي بحرف الي رقمه 6
// console.log(a.endsWith("o", 6));

// ------------------------------------- 30 --------------------------------------------------

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
// console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
// console.log(`${a.charAt(0).toLocaleLowerCase(0)}${a.substring(1,16).toUpperCase()}${a.charAt(16).toLowerCase()}`); // eLZERO WEB SCHOOl
// console.log(a.charAt(0).toLowerCase()+a.substr(1,a.length - 2).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl

// ------------------------------------- 31 -------------------------------------------------- ##

/*
  Comparison Operators
  - == Equal تساوي ملهاش علاقه بنوع البينات  compare Value only
  - != Not Equal لا تساوي compare Value only

  - === Identical هذه تقارن بين نوع البينات والقيمه compare Value + Type
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// console.log(10 == "10"); // طبعا الاجابه صحيحه لان لايوجد علاقه بنوع البينات
// console.log(10 == "100");

// console.log(10 != "10"); // طبعا عند استخدام ال != تسال هل العنصر يساوي العنصر طبعا العناصر تساوي بعض فسوف يطبغ خطاء
// console.log(10 != "100");

// console.log(10 === "100"); // تقارن بين نوع البينات و القيمه

// console.log(10 !== "10"); // تستخدم ان لا يساوي القيمتين والنوع طبعا صحيح
// console.log(10 !== 10); // طبعا هنا خطاء لان القيم تتساوي

// console.log(10 > 20); // اكبر من
// console.log(10 > 10);
// console.log(10 >= 10); // اكبر من او يساوي

// console.log(10 < 20); // اصغير من
// console.log(10 < 10);
// console.log(10 <= 10); // اصغير من او يساوي

// console.log("Omar" === "Ashraf"); // false
// console.log(typeof "Omar" === typeof "Ashraf"); // true

// ------------------------------------- 32 --------------------------------------------------

/*
  Logical Operators
  - ! Not تستخدم لعكس القيمه من صحيحه الي خطاء او العكس
  - && And لتحقيق كل الشروط اي شرط لم يتحقق سوف يرجع بخطاء اجباري
  - || Or تحقيق شرط من جميع الشروط الذي تتواجد شرط واحد اذا تحقق سوف يكون صحيح
*/

// console.log(true);
// console.log(!true);
// console.log(10 == "10");
// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8 && 10 >= 10);
// console.log(10 == "10" && 10 > 8 && 10 > 10);

// console.log(10 == "100" || 5 > 5);
// console.log(10 == "10" || 5 > 5);

// ------------------------------------- 33 --------------------------------------------------

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }
  كل شرط يعتمد علي الي قبله اذا تحقق اول واحد سوف ينفذ اول شرط اذا لم يتحقق سوف يحقق الي بعده لحد اخر شرط ثم اذا لم يتحقق جميعا سوف يعمل esle الاخير
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KS";

// if (discount === true) {
//   price -= discountAmount;
//   // price = price - 30;
// } else if (country === "KSA") {
//   price -= 40;
// } else if (country === "KSAO") {
//   price -= 50;
// }else{
//   price-= 10
// }
// console.log(price);

// ------------------------------------- 34 --------------------------------------------------

/*
  Nested If نضع شرط بداخل شرط اخر
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {

//   price -= discountAmount;

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;

//   } else {

//     price -= discountAmount + 10;

//   }

// } else {

//   price -= 10;

// }

// console.log(price);

// ------------------------------------- 35 --------------------------------------------------

/*
  Conditional (Ternary) Operator
*/

// let theName = "OmaR";
// let theGender = "Male";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False                                          هذا نوع مختصر للشرط if

// ? == if
// : == else if

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "OmaR" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");

// ------------------------------------- 36 --------------------------------------------------

/*
  Logical Or ||
  -- Null + Undefined + Any False Value   اي قيمه خطاء او فارغه او غير موجوده سوف يرجع بقيمه الذي تم وضعها بعد ال ||
  Nullish Coalescing Operator ??
  -- Null + Undefined اي قيمه فارغه او غير موجوده سوف يرجع لك بقيمه الذي تم وضعها بجانب ال ??
*/

// console.log(Boolean(100)); // true
// console.log(Boolean(-100)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false

// let price;
// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 150}`);

// ------------------------------------- 37 --------------------------------------------------

/*
  If Condition Challenge
*/

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// a < 10 ? console.log(10) : a > 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("a > 40") : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

// let st = "Elzero Web School";

// if (typeof "????" === typeof "34") {
//   console.log("typeof");
// }

// // if ((st.length * 2).toString() === "34") {
// // console.log("Good");
// // }

// // W Position May Change
// if (
//   st
//     .slice(st.indexOf("W") - 1, st.indexOf("W") + 1)
//     .toLowerCase()
//     .trim() === "w"
// ) {
//   console.log("Good Job");
// }

// if (typeof Boolean(st) !== "string") {
//   console.log("Good");
// }

// if (typeof Number(st) === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// ------------------------------------- 38 --------------------------------------------------

/*
  Switch Statement  تعتبر شبيها للنوع if ولكن يوجد بعض الاختلافات
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/
// let day = 2;
// switch (day) {  // == if
//   case 0:
//     console.log("Saturday");
//     break; // لايقاف العنصر
//   case 1: // == else if
//     console.log("Sunday");
//     break; // لايقاف العنصر
//   case 2: // == else if
//     console.log("Monday");
//     break; // لايقاف العنصر
//   default: // == else
//     console("Unknown Day");
// }

// let Role = prompt('Whats is Your Role?')
// switch (Role) {
//   case 'admin': document.write('Are You Admin')
//     break;
//   case 'root': document.write('Are You Root')
//     break;
//   default: document.write('You Are Not User Here')
// }

// ------------------------------------- 39 -------------------------------------------------- EXampleee

/*
  Switch Challenge
*/

// let job = "IT";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//   case "Manager":salary = 8000
//     console.log(`Salary is ${salary}`)
//     break;
//   case "IT":salary = 6000
//     console.log(`Salary is ${salary}`)
//     break;
//   case "Support": salary = 6000
//     console.log(`Salary is ${salary}`)
//     break;
//   case "Developer":
//     salary = 7000
//     console.log(`Salary is ${salary}`)
//     break;
//   case "Designer":
//     salary = 7000
//     console.log(`Salary is ${salary}`)
//     break;
//   default:salary = 4000
//     console.log(`Salary is ${salary}`)
// }

/*
  If Challenge
*/

// let holidays = "S";
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`)
// } else if (holidays == 1 || holidays === 2) {
//   money = 3000
//   console.log(`My Money is ${money}`)
// } else if (holidays === 3) {
//   money = 2000
//   console.log(`My Money is ${money}`)
// } else if (holidays === 4) {
//   money = 1000
//   console.log(`My Money is ${money}`)
// } else {
//   money = 0
//   console.log(`My Money is ${money}`)
// };

// ------------------------------------- 40 --------------------------------------------------

/* هذا نوع لحفظ البيانات الاري
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`); // للدخول الي انديكس معين
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`); // للدخول الي انديكس ثم حرف معين من داخل هذا الانديكس
// console.log(`Hello ${myFriends[3][1]}`); // للدخول الي انديكس وبداخل الانديكس انديكس اخر
// console.log(`${myFriends[3][1][2]}`); // للدخول الي انديكس وبداخل الانديكس ندخل لانديكس اخر من ثم نختار انديكس حرف معين

// console.log(myFriends);
// myFriends[1] = "Gamal"; // لتغير انديكس معين الي شي اخر نكتب برقم الانديكس ثم التغير
// console.log(myFriends);
// // myFriends[3] = "ELDEEP"; // لتغير array كامل الي الديب
// // console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"]; // لتغير ما بداخل ال array بالكامل الي array اخر
// console.log(myFriends);

// console.log(Array.isArray(myFriends)); // لمعرفه هل المتغير نوع array ام لا

// ------------------------------------- 41 --------------------------------------------------

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "POOS"];

// // myFriends.length = 2; // هنا تم تغير عدد المتغير الي 2 بدل العدد بتاعه
// myFriends[myFriends.length - 1] = "ELDEEP"; // لتغير العنصر الاخير نطرح من ال lenght واحد
// myFriends[myFriends.length] = "ELDEEP"; // لاضافه كلمه او شي في اخر length

// console.log(myFriends);

// ------------------------------------- 42 --------------------------------------------------

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil"); // لااضافه عناصر قبل العناصر الموجوده

// console.log(myFriends);

// myFriends.push("Samah", "Eman"); // لااضافه عناصر بعد العناصر الموجوده

// console.log(myFriends);

// let first = myFriends.shift(); // نحذف اول عنصر من العناصر الموجوده ويمكننا وضعه في متغير لكي نستخجمه في اي وقت اخر

// console.log(myFriends);

// console.log(`First Name Is ${first}`); // بعد عمل المتغير يمككنا عليه لمعرفه ما بداخله

// let last = myFriends.pop(); // لحذف اخر عنصر من العناصر الموجوده ويكننا وضعه في متغير لكي نستخدمه في اي وقت اخر لمعرففه ما هو المتغير الذي تم حذفه

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

// ------------------------------------- 43 --------------------------------------------------

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed")); // تستخدم للبحث عن كلمه او عنصر معين من الشمال
// console.log(myFriends.indexOf("Ahmed", 1)); // نفس الشيي ولكن تم تدتد من اي يبداء

// console.log(myFriends.lastIndexOf("Ahmed")); // تستخدم للبحث عن كلمه او عنصر معين من اليمين
// console.log(myFriends.lastIndexOf("Ahmed", -2)); // نفس الشيي ولكن تم تدتد من اي يبداء

// // ترجع لك ب True _ false

// console.log(myFriends.includes("Ahmed")); // يبحث عن العنصر الذي تم كتابته
// console.log(myFriends.includes("Ahmed", 2)); // تبحث عن العنصر من بعد تحديد رقم الانديكس

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

// ------------------------------------- 44 --------------------------------------------------

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort()); // يرتب الارقام من الصفر الي 9 ثم الحروف من ال a الي z
// console.log(myFriends.reverse()); // يرتب بعكس ال sort
// console.log(myFriends.reverse().sort()); // ويمكننا دمج الاثنين معا
// console.log(myFriends.sort().reverse()); // ويمكننا دمج الاثنين معا

// ------------------------------------- 45 --------------------------------------------------

/*
 Mand => اجباري
 Opt => اختياري

  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1)); // سوف تقص من بعد الانديكس واحد
// console.log(myFriends.slice(1, 3)); // سوف تصق من الانديكس واحد الي الانديكس الثالث
// console.log(myFriends.slice(-3)); // سوف يقص من السالب ثلثه
// console.log(myFriends.slice(1, -2)); //
// console.log(myFriends.slice(-4, -1));
// console.log(myFriends.slice(2, 5));
// console.log(myFriends);

// myFriends.splice(0, 0, "EldeeP", "Ashraf"); // لاضافه عنصر قبل الانديكس صفر وبتحدد عدد العناصر الذي سوف تحذفها
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara"); // لحذف عنصر واضافه مكانه عنصر اخر
// console.log(myFriends);

// ------------------------------------- 46 --------------------------------------------------

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
// */
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]); // تستخدم هذا النوع لاضافه كذا شي مع بعض

// // console.log(myFriends.concat(myNewFriends, schoolFriends)); // نفس الفكره عند استخدام نوع ال concat(بداخله الاشباء الذي سوف تتضيفها)

// console.log(allFriends.join()); // لاضافه علامه معينه او اي شي نستخد join(ثم بداخله العلامه او الشي الذي سوف يتم اضافته)
// console.log(allFriends.join(" "));
// console.log(allFriends.join(" OR."));
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

// ------------------------------------- 47 -------------------------------------------------- EX

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

// console.log(my.reverse().splice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

// my.splice(zero, my.length, '"Elzero"'); // "Elzero"
// console.log(my.join());

// console.log(my[++zero][++counter] + my[zero][++counter].toUpperCase()); // "rO"

// ------------------------------------- 48 -------------------------------------------------- ### LOOP

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

// for (let i = 0; i < 10; i++) { // تستخدم لعمل تكرار لشي معين علي حسب العدد الذي سوف يتم اضافته
//   console.log(i);
// }

// ------------------------------------- 49 --------------------------------------------------

/*
  Loop
  - Loop On Sequences
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) { // هنا عملنا لوب بعدد عناصر المتغير
//   console.log(myFriends[i]);
// };

// for (let i = 0; i < 9; i++) { // هنا عملنا لوب بعدد عناصر المتغير بشكل مانول
//   console.log(myFriends[i]);
// };

// for (let i = 0; i < myFriends.length; i++) { // عملنا عمليه لو المتغير نوعه استرنج سوف يضيف المتغير بداخله عدد ال i الي هو المتغير الثاني
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);

// for (let i = 0; i < myFriends.length; i++) { // اذا كان نوع العناصر ارقام سوف يعمل لك المعادله بشكل صحيح
//   if (typeof myFriends[i] === "number") {
//     onlyNames.push(myFriends[i])
//   }
// }
// console.log(onlyNames);

// ------------------------------------- 50 --------------------------------------------------

/*
  Loop
  - Nested Loops عمل لوب داخل اللوب الاصلي
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) { // هذا الاب بداخله لوب فرعي فسوف يطبع بعد كل لوب باقي التفاصيل بشكل طبيعي
//   console.log("_".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("_".repeat(15));
//   console.log("Colors : ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`)
//   }
//   console.log("Models : ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`)
//   }
// }

// ------------------------------------- 51 --------------------------------------------------

/*
  Loop Control
  - Break
  - Continue
  - Label => mianLoop الاب __ nestedLoop الفرعي
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]); // تختلفي بشكل كامل عن وضعها بالاسفل
//   if (products[i] === "Pen") {
//     break; // لايقاف ال لوب في مكان معاين نستخدم .break.
//   }
// }

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue; // اخفاء او حذف عنصر معين نستخدم نوع ال .continue.
//   } console.log(products[i]); // تختلف بشكل كامل عند وضعها بالاعلي
// }

// mainLoop: for (let i = 0; i < products.length; i++) { // تستخدم mianLoop لتميز ان هذا لوب الاب
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) { // تستخدم nestedLoop لتميز ان هذا لوب فرعي
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break nestedLoop; // هنا لايقاف ال لوب الفرعي
//       // break mainLoop; // هنا لايقاف ال لوب الاب
//     }
//   }
// }

// ------------------------------------- 52 --------------------------------------------------

/*
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (; ;) { // يمكننا استخدام الشروط بتاعت ال لوب بداخل ال لوب ذات نفسه
//   console.log(products[i]);
//   i++; // i+=1; __ i+=2; طبعا يمكننا ذياده اكتر من واحد من خلال اللعب في المتغير
//   if (i === products.length) break;
// }

// ------------------------------------- 53 --------------------------------------------------

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1> Show ${showCount} Products</h1>`)
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < 1; j++) {
//     document.write(`<p>${colors.join(" | ")}</p>`);
//   }
//   document.write(`</div`);
// }

// document.write(`<h1> Show ${showCount} Products</h1>`)
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`)
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div`);
// }

// ------------------------------------- 54 --------------------------------------------------

/*
  Loop
  - While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) { // تستخدم ايضا لعمل loop للعنصر ويمكننا ايقافه ايضا بنفس الشكل
//   console.log(products[index]);
//   index++;
// }
// while (index < products.length) {
//   console.log(products[index]);
//   index++;
//   if (index === products.length) {
//     break;
//   }
// }

// ------------------------------------- 55 --------------------------------------------------

/*
  Loop
  - Do / While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do { // تستخدم لعمل الكود اولا ثم يشوف الشرط
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// ------------------------------------- 56 -------------------------------------------------- EX

/*
  Loop Challenge
*/

// let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
// let myEmpoyes = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia","OSSAM"];

// document.write(`<div> We Hava ${myAdmin.length - 2} Admins</div>`);
// document.write(`<hr>`);
// for (let i = 0; i < myAdmin.length; i++) {

//   if (myAdmin[i] === "Stop") break;
//   else {
//     document.write(`<div>`);
//     document.write(`<p> The Admin For Team ${i + 1} Is ${myAdmin[i]}</p>`);
//     document.write(`<h3>Team Members:</h3>`);
//     let t = 1;
//     for (let j = 0; j < myEmpoyes.length; j++) {

//       if (myAdmin[i][0] === myEmpoyes[j][0]) {

//         document.write(`<p>- ${t} ${myEmpoyes[j]} </p>`);
//         t++
//       }
//     }
//     document.write(`</div>`);

//   }
//   document.write(`<hr>`);

// }

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Aandy", "Samah", "Ammo", "Omar", "Othman", "Ano", "Samia", "Anwar"];
// let numberAdmin = 0;

// document.write(`<div> We Have ${myAdmins.length - 2 } Admin</div> <hr>`);

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   }
//   document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.write(`<h3> Team Members: </h3> `);
//   let k = 1;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       document.write(`<p>- ${k} ${myEmployees[j]}</p> `);
//       k++
//     }
//   } document.write(`</div>`);
//   document.write(`<hr>`);
// }

// ------------------------------------- 57 -------------------------------------------------- ## function

/*
  Function هذا النوع ماشي بقاعده لا تكرر نفسك
  - What Is Function ?
  - User-Defined vs Built In يوجد منها انواع جاهزه وانواع انت بتعملها بايدك
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) { // نعمل النوع ثم اسمه لكي تنادي عليه ف اي مكان  ..الاسم (اسم اي شي سوف تنادي عليه بداخل الكود)
//   console.log(`Hi ${userName}`);
// };
// توضيح اكثر .. userName == Osama هكذا تم عمل اسم مستخدم بشكل داينامك وهكذا
// sayHello("Osama"); // هنا المناده علي الفانكشن ثم اسم الشي الذي سوف يحتاجه
// sayHello("Sayed");
// sayHello("Ali");

// ------------------------------------- 58 --------------------------------------------------


/*
  Function Advanced Examples
*/

// function sayHello(userName, age) { // يمكننا وضع  اكثر من البراميتر وثم نضع لهم قيمه عند المناده عليها وايضا نضعها بداخل كود الفانكشن
//   if (age < 20) {
//     console.log(`App is Not Suitable For You`);
//   } else {
//     console.log(`Hello ${userName} Your Age is ${age}`);
//   }
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generateYears(start, end, exclude) { // تم وضع ثلث قيم وسوف نستدعيهم
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1982, 2021, 2020);

// ------------------------------------- 59 --------------------------------------------------

/*
  Function
  - Return تستخدم لارجاع قيمه معينه او عنصر معين وايضا عند وضع اي كود بعدها يتم حذفه تلقائي اكنه مش موجود
  - Automatic Semicolon Insertion [No Line Terminator Allowed] يحذف ما بعد ال return بشكل تبقائي
  - Interrupting
*/

// function calc(num1, num2) {
//   return num1 * num2;
// }
// console.log(calc(5, 5));

// يوجد طرق عديده لاسترجاع نفس القيمه ع حسب استخدامك لها حينها
// function calc(num1, num2) {
//   return num1 * num2;
// }

// let result = calc(5, 5);
// console.log(result + 15);

// function test(ss) {
//   return ss;
// }
// console.log(test("im Not Here Sorry"));

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 15) {
//       return `Interrupting`; // عملنا هنا ان عندما تصل الي رقم معين وقف المعدله التي تحدث
//     }
//     // console.log(i);
//   }
// }

// generate(10, 20);

// ------------------------------------- 60 --------------------------------------------------

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(username = "Unknown", age = "Unknown") { // يمكننا وضع قيمه بشكل اوتوماتك عند عدم وضع قيمه من خلال المستخدم
// if (age === undefined) {
//   age = "Unknown";
// }
// age = age || "Unknown";
//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello("ss", 41));

// ------------------------------------- 61 --------------------------------------------------

/*
  Function
  - Rest Parameters
  - Only One Allowed نستخدم براميتر واحد فقط وعذا الافضل لانه يكون شامل كل شي مثل الاري
  - Must Be Last Element
*/

// function calc(...numbers) { // نضع قبل البراميتر ... ويتم استخدمها اذا كنت لا اعلم عدد المتغيرات الذي سوف يتم استخدمها
// console.log(Array.isArray(numbers)); // نوعها بيكون ارري
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }
// };
// console.log(calc(15, 150, 4785, 6541, 125));


// function calc(...numbers) {
//  console.log(Array.isArray(numbers));
//   let result = 0; // يمكننا عمل متغير واستخدامه
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

// ------------------------------------- 62 --------------------------------------------------

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);

//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: Hidden My Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }
// showInfo("Osama", 38, 20, "Yes", "HTML", "CSS", "NetWork");

// ------------------------------------- 63 -------------------------------------------------- EX

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/


// let nam, age, statu
// function showDetails(a, b, c) {
//   let info = [a, b, c]
//   for (let i = 0; i < 3; i++) {
//     if (typeof info[i] === "string") {
//       nam = info[i]
//     } else if (typeof info[i] === "number") {
//       age = info[i];
//     } else if (typeof info[i] === "boolean") {
//       if (info[i] === true) {
//         statu = "Available"
//       } else {
//         statu = "Not Available"
//       }
//     }
//   }
// };
// showDetails("ElDeeP", 21, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(`Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);
// showDetails(21, "ElDeeP", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(`Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);
// showDetails(true, 21, "ElDeeP"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(`Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);
// showDetails(false, "ElDeeP", 21); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// console.log(`Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);

// ------------------------------------- 64 --------------------------------------------------

/*
  Function
  - Anonymous Function فانكشن مجهول الهاويه
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// let calculator = function (num1, num2) { // تم عمل الفانكشن باسم متغير سوف تكون مجهوله حتي يتم النداء علي المتغير
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// document.getElementById("show").onclick = function () { تم عمل فانكشن مخفي يفعل شي معين وفقط
//   console.log("SHOW ITEM")
// }

// function sayHello() {
//   console.log("Hello Osama");
// }

// document.getElementById("show").onclick = sayHello;

// setTimeout(function () { // نستخدم setTimeout لعمل شي معين بعد الوقت الذي سوف يتعم وضعه بالاسفل
//   console.log("Good")
// }, 2000); // 1000=1sec نضع الوقت هنا وكل ثانيه تساوي

// ------------------------------------- 65 --------------------------------------------------

/*
  Function
  - Function Inside  عمل فانكشن بداخل فانكشن واختصار بعض الاشياء
  - Return Function
*/


// Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));


// // Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// ------------------------------------- 66 --------------------------------------------------

/*
  Function
  - Arrow Function اختصار للفانكشن
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/
// الثلاث انواع نفس الفكره ونفس الاخراج في كل مره
// let print = function () {
//   return 17;
// };

// let prints = () => {
//   return 15;
// };

// let printss = () => 10; // يمكننا اختصارها اذا كان بداخلها عنصر واحد

// let printsss = _ => 150;

// let print = function (num) {
//   return num;
// };

// let print = num => num; اذا كان لدينا براميتر واحد يمكننا حذف الكوس

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));
// console.log(print());
// console.log(prints());
// console.log(printss());
// console.log(printsss());

// ------------------------------------- 67 --------------------------------------------------

/*
  Scope
  - Global And Local Scope
*/
// متغير للجميع
// var a = 1; // Global Scope يمكنك استخدامه في اي مكان
// let b = 2; // Global Scope

// function showText() { // متغير محلي
//   var a = 10; // Local Scope يمكنك استخدامه بداخل الفانكشن فقط او في المكان الذي هو به فقط
//   let b = 20; // Local Scope
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// ------------------------------------- 68 --------------------------------------------------

/*
  Scope
  - Block Scope [If, Switch, For]
*/

// var x = 10;
// let xx = 500;

// if (10 === 10) {
//   var n = 900; // يتم تحولها الي global لانها نوع var
//   let x = 50; // بتفضل زي ما هي local لان نوعها let
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global + Local ${n}`);
// console.log(`From Global ${xx}`);

// ------------------------------------- 69 --------------------------------------------------

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// ------------------------------------- 70 -------------------------------------------------- EX

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...done) {
//   return `String [${done.join("],[")}] => Done !`;
// };
// let names = (...done) => `String [${done.join("], [")}] => Done !`;
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;

// console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// let calc = function (one, tow, ...nums) {
//   return one + tow + +nums;
// }
// console.log(calc(10, myNumbers[0], myNumbers[1]));

// let calc = (one, two, ...nums) => one + two + nums.shift();

// console.log(calc(10, myNumbers.shift(), myNumbers.shift())) // 80

// ------------------------------------- 71 -------------------------------------------------- ## Higher Order Functions - Map#

/*
 Higher Order Functions
 ---> is a function that accepts functions as parameters and/or returns a function.

 - Map                                                                         لعمل array جديده
 --- method creates a new array
 --- populated with the results of calling a provided function on every element
 --- in the calling array.

 Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
 - Element => The current element being processed in the array.
 - Index => The index of the current element being processed in the array.
 - Array => The Current Array

 Notes
 - Map Return A New Array

 Examples
 - Anonymous Function
 - Named Function

*/

// let myNums = [1, 2, 3, 4, 5, 6];

// Same Idea With Map

// element=length => عنصر عنصر من هناصر ال array
// index=index => يبداء من الانديكس صفر حتي الاخر وانديكس انديكس ايضا من ال array
// arr=array => كل عناصر array بالترتيب اكنه دخل علي عنصر عنصر وكاتبه بشكل اوتوماتك

// let addSelf = myNums.map(function (element, index, arr) { // element=length,, index=index,, arr=array
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`); // ترجع الي ال function ذات نفسها
//   return element + element;
// }, 15);
// console.log(addSelf)

// ---------------------------------------------------------------

// let addSelf = myNums.map(function (element) { // الالمنت الي بعد الفانكشن هذا هو الذي يستخدم ف الداخل
//   element + element
//   return element + element;
// }); console.log(addSelf);

// نفس الفكره بالظبط ولكن باختصار

// let addSelfs = myNums.map((element) => element + element);
// console.log(addSelfs);

// نفس الفكره بالظبط ولكن باختصار

// function addition(element) {
//   return element + element;
// }
// let add = myNums.map(addition);
// console.log(add)

// ------------------------------------- 72 -------------------------------------------------- #MaP#

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(sw)
// ---
// let sw = swappingCases.split("").map((ele) =>
//   ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
// console.log(sw);

// ?????????????????????????????????????????????????????????????????????????????????????????????
// let inv = invertedNumbers.map(function (ele) {
//   return -ele
// })
// console.log(inv);
// --
// let inv = invertedNumbers.map((ele) => -ele)
// console.log(inv);

// ?????????????????????????????????????????????????????????????????????????????????????????????

// let ign = ignoreNumbers.split("").map(function (elem) {
//   return isNaN(parseInt(elem)) ? elem : "";
// }).join("")
// console.log(ign);

// let ign = ignoreNumbers.split("").map((elem) => isNaN(parseInt(elem)) ? elem : "").join("")
// console.log(ign);

// ------------------------------------- 73 -------------------------------------------------- #Filter#

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") //? true : false;
// });
// console.log(filterdFriends);

// Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0 //? true : false;
// });

// console.log(evenNumbers);

// let evenNumbers = numbers.filter((el) => el % 2 === 0)
// console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) { // يمسك العناصر يطبق عليها اكشن معينه والاكشن دي عباره عن اختبار لو رجع ب true العناصر هترجع بشكل عادي
//   return el + el;
// });

// console.log(addFilter);

// ------------------------------------- 74 -------------------------------------------------- #Filter#

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

// Ignore Numbers

// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
// .split("")
// map == ينفذ function معينه علي العناصر ويرجع لهما بصح ام خطاء
// filter == يبحث عن الصح و الخطاء ويرجع بنتائج اذا كانت صح لو كانت خطاء لم برجع بشي
// .filter(function (ele) {
//   return isNaN(parseInt(ele)) //? ele : "";
// })
// .join("");
// ---------------
// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) { return isNaN (parseInt(ele)) ? ele : "" }).join("")
// console.log(ign);

// Filter Strings + Multiply

// let mix = "A13BS2ZX";

// let mixedContent = mix.split("").filter(function (ele) {
//   return !isNaN(parseInt(ele)); //isFinite
// })
//   .map(function (ele) {
//     return ele * ele
//   })
//   .join("")
// console.log(mixedContent);

// ------------------------------------- 75 -------------------------------------------------- #Reduce#

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// acc => (يتم استخدام الانديكس الاول اذا لم يتم عمل بعد ال function )(اي قيمه اخري سوف ياخذ اول قيمه ف المتغير المستخدم)
// current => ياخد ثاني قيمه من بعد اول قيمه اخذها ال acc (بمعني  عندما ياخذ ال acc قيمه اول انديكس ياخذ ال current ثاني انديكس من بعده عطول )
// index => تعتمد علي الانديكس الذي بداء منه ال current اذا بداء من الاول سوف ياخذ 0 وهكذا لحين انتهاء المعدله
// arr => بعرض لك جميع العناصر الذي بداخل ال array
// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc * current
// }, 5)// ال5 هي ال acc الان
// console.log(add)

// ------------------------------------- 76 -------------------------------------------------- #Reduce#

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current.toLowerCase()}`;
//   });

// console.log(finalString);

// ------------------------------------- 77 -------------------------------------------------- #ForEach#

// map => تستخدم لعمل بيتم عمل array جديده
// reduce =>  تستخدم لعمل بيتم عمل array جديده
// filter => تستخدم لعمل بيتم عمل array جديده
// ForEach => تطبق علي عناصر ال array المستخدمه

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
// Remove Active Class From All Elements
// allLis.forEach(function (ele) {
// ele.classList.remove("active");
// });
// Add Active Class To This Element
// this.classList.add("active");
// Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// ------------------------------------- 78 --------------------------------------------------

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",")
//   .filter((ele) => isNaN(Number.parseInt(ele)))
//   .map((ele, ind, arr) => {
//     arr.length = arr.length--;
//     return ele.replace("_", " ");
//   })
//   .reduce((acc, ele, index, arr) => acc + ele)
//   .slice(true);
// ------------------------------------------------------------------
// let solution = myString.split(",").filter(function (ele) {
//   return (isNaN(Number.parseInt(ele)))
// }).map(function (ele, ind, arr) {
//   arr.length = arr.length--;
//   return ele.replace("_", " ")
// })
//   .reduce(function (acc, current) {
//     return acc + current;
//   }).slice(true);
// console.log(solution); // Elzero Web School

// ------------------------------------- 79 --------------------------------------------------

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

// let user = {
// Properties بينات عن الشي
// theName: "Osama",
// theAge: 38,
// Methods افعال بمعني يفعل شي معين
//   sayHello: function () {
//     return `Easy`;
//   },
// };

// console.log(user.theName); // للمناده علي الاسم ندخل علي المتغير الاساسي ثم متغير الاسم
// console.log(user.theAge); // //
// console.log(user.sayHello()); // للمناده علي ال function

// ------------------------------------- 80 --------------------------------------------------

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/
// let myVar = "country"
// let user = {
//   theName: "Osama",
//   "Country of": "KSA",
//   country: "Egypt"
// }
// console.log(user["Country of"]); // للمناده علي استرنج او رقم نضعه بداخل ال []
// console.log(user.country);
// console.log(user[myVar]); // للمناده علي المدينه باستخدام متغير خارجي نستعمل نفس ال []

// ------------------------------------- 81 -------------------------------------------------- Nested Object

/*
  Object
  - Nested Object And Trainings
*/

// let nested = {
//   name: "EldeeP",
//   age: 21,
//   Skills: ["HTML", "CSS", "JavaScript"],
//   available: false,
//   addresses: {
//     ksa: "Rido",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (nested.available === true) {
//       return `WelCome In Hell`
//     } else {
//       return `WelCome In Word`
//     }
//   }
// }
// console.log(nested.name, nested.age)
// console.log(`My Name ${nested.name}`, `My Age ${nested.age}`);
// console.log(nested.Skills.join(" ! "));
// console.log(nested.Skills[2]);
// console.log(nested.addresses.ksa);
// console.log(nested.addresses.egypt.one);
// console.log(nested["addresses"]["egypt"]["one"]); // ===  console.log(nested.addresses.egypt.one);
// console.log(nested.checkAv());

// ------------------------------------- 82 --------------------------------------------------

/*
 Object
  Create With New Keyword new Object();
*/
// let user = new Object({ age: 20 }); // لعمل اوبجيكت بشكل احترافي والتعديل عليه من خلال عمل القيم مثل ما انت تريد
// let user = {
//   age: 21,
// }
// console.log(user);
// user.age = 38; // لتغير قيمه شي معين بداخل ال اوبجيكت
// user["country"] = "Egypt"
// user.sayHello = function () {
//   return `Helli`;
// };
// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

// ------------------------------------- 83 --------------------------------------------------

/*
  Function this Keyword
  - this Introduction تعود استخدمها علي الشي الذي هي بداخله
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode ???????????????????????????????????????????????????????????????????????????????????????????????? "use strict"

"use strict" يتسخدم هذا الكود لتصايح الاخطاء
let interface = "omaa";
console.log(interface)

*/

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this)
// }

// let user = {
//   age: 22,
//   ageInDays: function () {
//     console.log(this); // user
//     return this.age * 365; // this = user لان تم استخدمها بداخل الاوبجيكت
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

// ------------------------------------- 84 --------------------------------------------------

/*
  Object
  - Create Object With Create Method
*/

// let user = {
//   age: 20,
//   doubleAge: function () {
//     return this.age * 2; // نستخدم this لكي عند استنسخها في اوبجيكت تاني المعادله تكون بشكل صحيح
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// --------------------------------------------

// let obj = Object.create({
//   a: 150 // يمكنك اضافه بروبارتذ هنا او بالخارج
// });

// obj.a = 100; // او يمكن اضافتها هنا بالشكل الطبيعي

// console.log(obj);
// console.log(obj.a);

// let copyObj = Object.create(user); // تستخدم لاستنساخ اوبجيكت من اوبيجيكت اخر

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// ------------------------------------- 85 --------------------------------------------------

/*
  Object
  - Create Object With Assign Method
*/

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100, // عند تكرار نفس الاسم والقيمه يستخدم اول قيمه
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1);

// finalObject.prop1 = 1500 // يمكننا تغير قمته الي اي شي
// finalObject.prop4 = 15 // يمكننا عمل شي اخر ونضع له قيمه

// console.log(finalObject)

// let newObject = Object.assign({}, obj1, { prop5: 500 }) // يمكننا اضافه اوبجيكت فاضي واوبجيكت موجود واضافه قيمه اخري غير موجوده من قبل

// console.log(newObject)

// ------------------------------------- 86 --------------------------------------------------

/*
  DOM
  - What Is DOM = Document Object Modle
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div"); // للمناده علي id معين وهذا لم يتكرر
// let myTagElement = document.getElementsByTagName("p"); // للمناد علي تاج معين
// let myClassElement = document.getElementsByClassName("my-span"); // للمناده علي class
// let myQueryElement = document.querySelector(".my-span"); // تستخدم للمناده علي اي عنصر زي ال css بالظبط وتستخدم ايضا لاستخدام اول عنصر من الشي الذي تم المناده عليه
// let myQueryAllElement = document.querySelectorAll(".my-span"); // للحصول علي جميع العناصر الذي بنفس الشي

// console.log(myIdElement)
// console.log(myTagElement[0]); // للدخول علي عنصر واحد من عناصر ال برجراف
// console.log(myClassElement);
// console.log(myQueryElement)
// console.log(myQueryAllElement[1])

// document.title = "WELCOME"; // لتعديل محتوي ال title
// console.log(document.title);
// console.log(document.forms[0].one); // للمناده علي شي والدخول بشي ما بداخله
// console.log(document.links[0]); // للدخول الي العناوين
// console.log(document.links[1].href); // للدخول الي العناوين

// ------------------------------------- 87 --------------------------------------------------

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute لمعرفه ما هو هذا الشي , او لمعرفه هل هذا الشي موجود ام لا
  --- setAttribute لاضافه نص او لينك او شي معين بداخل الشي

  Search
  - innerText يطبع الشي الذي يكتب بداخله بشكله الطبيعي بدون اي تغير
*/

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML); // يطبع لك كود ال html الداخلي
// console.log(myElement.textContent); // يطبع لك المحتوي النصي

// myElement.innerHTML = "Text From <span>Main.js</span> File"; // لتغير كود ال html
// myElement.textContent = "Text From <span>Main.js</span> File"; // لتغير النصوص الذي بداخل الكود اذا تم اضافه الي شي سوف يظهر بشكله الذب كتب به بدون اي تغير

// document.links[0].href = "https://google.com"; // تعديل علي اي شي
// document.links[0].target = "_blank";
// // document.images[0].src = "//Teco-photo/images (12).jpg";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture"; // لاضافه شي جديد لانه لم يكن موجود من قبل
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class")); // لعرض ال class
// console.log(myLink.getAttribute("href")); // لعرض ال href

// myLink.setAttribute("href", "https://twitter.com"); // لتغير محتوي شي معين تكتب الشي الذي تريد تغير في ثم النص الذي تريد كتابته بداخله
// myLink.setAttribute("title", "Twitter");

// ------------------------------------- 88 --------------------------------------------------

/*
  DOM [Check Attributes]
  attributes = class,id,src,href,title,alt,target جميع انواع البينات
  - Element.attributes للحصول علي الاتربيوت
  - Element.hasAttribute لتحقق من اتتربيوت معين
  - Element.hasAttributes لتحقق من وجود اي اتتربيوت جميع الاتتربيوت الموجوده
  - Element.removeAttribute لازاله الاتربيوت من العنصر
*/

// console.log(document.getElementsByTagName("p")[0].attributes);
// console.log(document.getElementsByTagName("p")[0].getAttribute('class'));
// console.log(document.getElementsByTagName("p")[0].removeAttribute("id")); // لحذف اتتربيوت معين نستخدم removeAttribute
// console.log(document.getElementsByTagName("p")[0].hasAttribute("data-src")); // لتحقق من موجود هذا المحتوي ام لا تسنخدم hasAttribute
// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) { // لو في اتتربيوت بالاسم ده وبداخله بيانات اعمل الاتي
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }
// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }

// ------------------------------------- 89 --------------------------------------------------

/*
  DOM [Create Elements]
  - createElement لعمل عنصر
  - createComment لعمل كومنت
  - createTextNode لعمل نص
  - createAttribute لعمل اتتربيوت لاستخدامه في المستقبل
  - appendChild لاضافه شي في اخر العنصر
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One"); // لعمل نص ويمكننا استخدمه من خلال المتغير في اي مكان
// let myComment = document.createComment("This Is Div")

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing"); // لعمل التتربيوت ووضع له قيمه

// Append Comment To Element
// myElement.appendChild(myComment);

// Append Text To Element
// myElement.appendChild(myText); // لوضع شي معين في الاخر نستخدم appendChild

// Append Element To Body
// document.body.appendChild(myElement); // لوضع العنصر المستخدم في ال body

// console.log(myElement);

// ------------------------------------- 90 --------------------------------------------------

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// for (let i = 1; i <= 100; i++) {
//   let myD = document.createElement("div");
//   let myH = document.createElement("h3");
//   let myP = document.createElement("p");
//   let myText = document.createTextNode(`Product Title  ${i}`);
//   let myT = document.createTextNode(`Paragraph discreption ${i}`);
//   myD.className = "product";
//   myH.appendChild(myText);
//   myP.appendChild(myT);
//   myD.appendChild(myH);
//   myD.appendChild(myP);
//   document.body.appendChild(myD);
// }

// ------------------------------------- 91 --------------------------------------------------

/*
  DOM [Deal With Childrens]
  - children تستخدم لاسترجاع العناصر الابناء
  - childNodes تضهر لك العناصر والكونت والنصوص وكل ما بداخل الكونتينر
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children); // ترجع لك بعناصر الابناء الذي يداخل الكونتينر
// console.log(myElement.children[0]);
// console.log(myElement.childNodes); // تظهر لك العناصر والكومنت والنصوص
// console.log(myElement.childNodes[1]);
// console.log(myElement.firstChild); // يعرض لك اول شي سوف يراه اذا كان كومنت عنصر نص
// console.log(myElement.lastChild); // يعرض لك اخر عنصر سوف يراه
// console.log(myElement.firstElementChild); // يعرض اول الامينت
// console.log(myElement.lastElementChild); // يعرض اخر الامينت

// ------------------------------------- 92 --------------------------------------------------

/*
  DOM [Events] ------------------------------------------------  الاحداث
  - Use Events On HTML
  - Use Events On JS
  --- onclick عند الضغط بالماوس
  --- oncontextmenu عند الضغط علي الكلك لمين
  --- onmouseenter عندما ياتي الماوس علي العنصر
  --- onmouseleave عندما يغادر الماوس العنصر

  --- onload لاعاده تحميل الصفحه
  --- onscroll عند الستخدام الاسكرول
  --- onresize عند تكبير حجم الصفحه

  --- onfocus عند التركيز علي العنصر
  --- onblur عند الخروج خارج العنصر
  --- onsubmit لارسال البينات
*/

// let inp = document.querySelectorAll("input")
// let myBtn = document.getElementById("btn");
// myBtn.onclick = function () {
//   console.log('Clicked MouseLeave')
// }
// myBtn.oncontextmenu = function () {
//   console.log('Clicked MouseLeave')
// }
// myBtn.onmouseenter = function () {
//   console.log('Clicked MouseLeave')
// }
// myBtn.onmousemove = function () {
//   console.log('Clicked MouseLeave')
// }
// myBtn.onmouseleave = function () {
//   console.log('Clicked MouseLeave')
// }

// window.onscroll = function () {
//   console.log("Scrolling")
// }

// ------------------------------------- 93 --------------------------------------------------

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }
//   if (ageInput.value !== "" && ageInput.value <= 100) {
//     ageValid = true;
//   }
//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// }

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault(); // منع الافتراضي للايفنت المستخدم
// سوف تمنع حدث الشي الطبيعي
// }

// ------------------------------------- 94 --------------------------------------------------

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () { // عند تحميل الصفحه سوف يعمل تركيز علي الالعنصر الثاني
//   two.focus();
// }
// one.onblur = function () {
//   document.links[0].click();
// }

// ------------------------------------- 95 --------------------------------------------------

/*
  DOM [Class List]
  - classList   لاضافه كلاس جديد او عرض الكلاسات الموجوده
  --- length   لمعرفه عدد الحروف او العنصار او ماشبه
  --- contains   لمعرفه هل يوجد شي معين مثل الكلاس
  --- item(index)   يطلب منك رقم الانديكس بتاع الشي الذي تبحث عنه او كلاس معين
  --- add   لاضافه كلاس او شيم عين
  --- remove   لحذف كلاس او شي معين
  --- toggle   هذا يستخدم لاضافه او حذف الشي الموجود
*/

// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("eldeep"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item(0));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   this.classList.add("class1", "Class2") // هنا تم  اضافه كلاس مع الكلاسات القديمه عند الضغط علي الدف
// }

// element.onclick = function () {
//   this.classList.remove("test", "one") // لحذف اي كلاس موجود
// }

// element.onclick = function () {
//   this.classList.toggle("toggle"); // اذا كان الكلاس موجود سوف يحذفه اذا لم يكن موجود سوف يضيفه وتستخدم لعدد لانهائي
// }

// ------------------------------------- 96 --------------------------------------------------

/*
 DOM [CSS]
 - cssText لاضافه اكتر من كود بجانب بعض بشكل عادي زي ال css
 - removeProperty(propertyName)[Inline, Stylesheet]  لحذف كود معين
 - setProperty(propertyName, vlaue, priority) لاضافه كود معين نضع نوعه ثم قمته ثو بعد الاضياء الاخري
*/

// let element = document.getElementById("my-div");

// element.style.color = "blue";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight:bold; color:green; cursor: pointer;";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("background");
// document.styleSheets[0].rules[0].style.setProperty("background", "green");
/*

من اجل الحمايه نستخدم ال live server لان استخدام ال rules يجعل المحتوي غير محمي
styleSheets = المحتوي الي عند وعلي حسب رقمه ف الانديكس
rules = يكون بداخله كل شي بمعني ان به التنسيقات وتختار التنسيق من رقم الانديكس
style = ندخل علي الاستيل
removeProperty = حذف محتوي معين
*/

// ------------------------------------- 97 --------------------------------------------------

/*
  DOM [Deal With Elements]
  - before [Element || String] لاضافه شي معين قبل العناصر الموجوده
  - after [Element || String] لاضافه شي معين بعد العناصر الموجوده
  - append [Element || String] لاضافه شي معين او نص بداخل المحتوي ولكن في الاخر
  - prepend [Element || String] لاضافه شي معين او نص بداخل المحتوي ولكن في الاول
  - remove حذف المحتوي نهائي
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.before("Before Element");
// element.before(createdP);
// element.after("After Element");
// element.after(createdP);

// element.append(" in Last Child");
// element.append(createdP);
// element.prepend(" in First Child ");
// element.prepend(createdP);

// element.remove();

// ------------------------------------- 98 --------------------------------------------------

/*
  DOM [Traversing]
  - nextSibling العنصر التالي الشقيق التالي بشكل دايركت
  - previousSibling العنصر الذي قبله اي ان كان ما هو
  - nextElementSibling الالمنت الذي خلفه يتجاهل الكومنت والنصوص ويبحث عن عناصر الاب
  - previousElementSibling الالمنت الذي قبله يتجاهل الكومنت والنصوص
  - parentElement للعثور علي الامنت الاب الذي بداخله كل شي
*/

// let span = document.querySelector(".two")

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);

// console.log(span.previousSibling);
// console.log(span.previousElementSibling);

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.style.background = "blue"
// }

// ------------------------------------- 99 --------------------------------------------------

/*
  DOM [Cloning]
  - cloneNode($Deep$ true or False )
*/
// عندما تكون قيمه ال cloneNode = (true) يعمل نسخ للعنصر وما بداخله كله بشكل عادي اكنك عملت عنصر كامل تاني ولكن هنا نعمل نسخه من عنصر معين
// عندما تكون قيمه ال cloneNode = (false) يعمل نسخ للعنصر فقط ويتجاهل ما بداخله

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-Clone`; // عند تغير الايدي او اي شي سوف يتم التغير ف النسخه الذي تم عملها ليس العنصر الاساسي
// myDiv.appendChild(myP);

// ------------------------------------- 100 --------------------------------------------------

/*
  DOM [Add Event Listener]
  - addEventListener تستخدم لعمل مهمه معينه باكثر من طريقه في نفس الحاجب
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;

// function one() {
//   console.log('Message From One');
// }
// function two() {
//   console.log('Message From Two');
// }

// myP.addEventListener("click", function () {
//   console.log('Message From Event');
// });

// myP.addEventListener("click", one); // نفس فكره الانيموس فانكشن ولكن باختصار
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // = Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   newP.style.color = "red"
//   document.body.appendChild(newP)
// }

// let cloned = document.querySelector(".clone");
// cloned.onclick = function () {
//   console.log("Clone Mode")
// }

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Clone Mode")
//   }
// })

// ------------------------------------- 101 --------------------------------------------------

// body styling
// document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family:Tahoma,Arial;";

// /* header */

// // create header

// let head = document.createElement("header");
// head.style.cssText = "display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";
// head.classList.add("website-head");
// document.body.appendChild(head);

// // create logo

// let logo = document.createElement("div");
// logo.classList.add("logo");
// logo.title = "website logo";
// logo.style.cssText = "font-weight: bold; color:rgb(35, 169, 110); font- size: 26px;";
// logo.innerHTML = "ElDeeP";
// head.appendChild(logo);

// // ul elements

// let ul = document.createElement("ul");
// let headEle = ["Home", "About", "Service", "Contact"];
// for (i = 0; i < headEle.length; i++) {
//   let li = document.createElement("li");
//   li.style.margin = "5px";
//   li.style.color = "rgb(185, 168, 134,1)";
//   li.innerHTML = headEle[i];
//   ul.appendChild(li);
// }
// ul.classList.add("content");
// ul.style.cssText = "paddig: 0px; margin: 0px; display: flex; list-style: none;";
// head.appendChild(ul);

// /* body */

// // create content

// let content = document.createElement("div");
// document.body.appendChild(content);
// content.classList.add("content");
// content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";


// // create product

// for (i = 0; i < 15; i++) {
//   let product = document.createElement("div");
//   product.classList.add("product");
//   product.style.cssText = "padding: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(12 111 129 / 60%); border-radius: 6px";
//   let span = document.createElement("span");
//   span.style.cssText = "font-size: 20px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
//   span.textContent = i + 1;
//   product.appendChild(span);
//   product.append("Product");
//   content.appendChild(product);
// }

// /* footer */

// // create footer
// let foot = document.createElement('footer');
// foot.classList.add("footer");
// foot.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
// foot.append("Copyright 2021");
// document.body.appendChild(foot);

// ------------------------------------- 102 --------------------------------------------------

/*
  BOM [Browser Object Model] من اهم الاشباء في عالم الجافا
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

// window.document.title = "Hello JS";

// ------------------------------------- 103 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean لتاكد من اكشن معين تجيب بنعم ام لا
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Check Box"); // تضع رساله معينه عند دخول المستخدم المتصفح ولكن استخدمها يجعل كل شي يتوقف

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Type Ur Age?", "12-55")
// console.log(promptMsg)

// ------------------------------------- 104 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params) وضع وقت لعمل شي معين
  - clearTimeout(Identifier)
*/

// setTimeout(() => {
//   console.log("TimeOut Msg")
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Test Message`);
// };

// setTimeout(sayMsg, 3000, "Eldeep", `${30} Mint`);
// function sayMsg(user, logout) {
//   console.log(`${user} Is Admin For Site Plase LogouT after: ${logout}`)
// }


// let counter = setTimeout(sayMsg, 3000);
// function sayMsg(user, logout) {
//   console.log(`Test ClearTimeout`)
// }

// let btn = document.querySelector("button");
// btn.onclick = function () {
//   clearTimeout(counter);
// }

// let consoles = "time5s"

// function setTime() {
//   if (consoles === "time5s") {
//     setTimeout(() => {
//       console.log("Nice Code")
//     }, 3000);
//   } else {
//     setTimeout(function () {
//       console.log("Bad Code")
//     }, 2000)
//   }
// }
// setTime();

// ------------------------------------- 105 --------------------------------------------------


/*   BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params) تنفيذ شي معين بعد وقت معين
  - clearInterval(Identifier) لايقاف الوقت الذي تم وضعه
 */

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter)
//   }
// }

// let counter = setInterval(countdown, 1000);

// ------------------------------------- 106 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host && hostname
  --- hash
  --- protocol (http: && https:) نوع البرتكول
  --- reload ()
  --- replace ("URL") تمسح لك البينات القديمه
  --- assign("URL") يحفظ البيانات بشكل طبيعي
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com" // لتغير العنوان الي عنوان اخر وعند استخدام ال href لايحذف البينات القديمه
// location.href = "/#sec01" //  للدخول علي ملفات الكمبيوتر علي المتصفح او محتويم عين بداخل ال html
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials" // للذهب للهاش في اي موقع

// console.log(location.host); // لعرض لك اللينك بالبورت الذي تستخدمه
// console.log(location.hostname); // لعرض لك اسم الموقع الي هو الللينك فقط
// location.hostname = "google.com" // يمكننا تغير الهوست فقط

// console.log(location.protocol);
// location.protocol = "https:"

// console.log(location.hash); // يظهر لك نوع الهاش الذي انت به

// console.log(location.reload()); // لعمل اعاده تحميل للصفحه

// console.log(location.replace("URL")) // عند استخدام ال replace سوف يمسح لك الهيستوري القديم
// console.log(location.replace("https://google.com"));

// ------------------------------------- 107 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt]) لفتح شي معين من خلال الللينك وبعض الاشياء
  - close() لقفل شي معين تم فتحه من خلال ال javascript
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
// window.open("URL", "target", "Features");
// window.open("https://google.com", "_blank", "width=400,height=400,left=100,top=100");
// }, 2000);

// ------------------------------------- 108 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back() للرجوع للخلف
  ------ forward() للذهب الي الامام
  ------ go(Delta) => Position In History للذهب لشي معين من خلال رقمه علي حسب الترتيبه

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// history.length لمعرفه عدد الهستوري
// console.log(history.back())
// console.log(history.forward())

// console.log(history.go(-1))
// console.log(history.go(1))

// ------------------------------------- 109 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - stop() لايقاف التحميل
  - print() لعمل طباعه
  - focus() للتركيز علي شي معين
  - scrollTo(x, y || Options) تستخدم للذهب الي
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=400")

// window.scrollTo(500,500) عند استخدام نوع ال scrollTo سوف لا يتحرك من بعدها
// window.scrollBy(500,500) عند استخدام By سوف يزيد علي كل مره الرقم الذي تم اضافته

// window.scrollTo({ لاضافه اكثر من عنصر يكون بداخل هذا الكوس});>>>

// window.scrollTo({
//   left:500,
//   top:700,
//   behavior:"smooth" نوع حركه ال scroll
// })

// window.scrollBy({
//   left:500,
//   top:700,
//   behavior:"smooth" نوع حركه الاسركول
// })

// ------------------------------------- 110 --------------------------------------------------

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset] تعرضها لك بشكل عمودي
  - scrollY [Alias => PageYOffset] تعرضها لك بشكل افقي
  Alias = بديل
*/

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block"
//   } else {
//     btn.style.display = "none"
//   }
// }
// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   })
// }

// ------------------------------------- 111 --------------------------------------------------

/*
  BOM [Browser Object Model]
  Local Storage تستخدم لحفظ البيانات للمدي الطويل لحين انت تمسحها بيدك
  - setItem لعمل اضافع بداخل الاستوريج
  - getItem لجلب بينات معينه
  - removeItem لمسح بينات معينه
  - clear لمسح الكل
  - key لعرض الشي من خلال ال key تم نكتب رقم الانديكس بتاعه

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set الاضافات

// window.localStorage.setItem("color", "#F00"); // يمكننا الاضافه بهذا الشكل
// window.localStorage.fontWeight = "bold"; // يمكننا الاضافه بهذا الشكل
// window.localStorage["fontSize"] = "20px"; // يمكننا الاضافه بهذا الشكل

// Get لطبع ال key نستخدم هذه الانواع او getItem
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// Remove One لحذف key واحد فقط
// window.localStorage.removeItem("color");

// Remove All يحذف كل عناصر ال Storage
// window.localStorage.clear();

// Get Key
// console.log(window.localStorage.key(1));


// Set Color In Page لوضع اللون علي الخلفيه او ماتريد
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(localStorage)
// console.log(typeof window.localStorage);

// ------------------------------------- 112 --------------------------------------------------

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
// };

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color)
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   })
// })

// ------------------------------------- 113 --------------------------------------------------

/*
  BOM [Browser Object Model]
  Session Storage تستخدم لتخذين البيانات لحين قفل الصفحه او اغلاق النافذه
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
// console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };

// ------------------------------------- 114 --------------------------------------------------

// let Container = document.querySelector(".container");
// let form = document.querySelector(".form");
// let input = document.querySelector(".input");
// let btn = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");
// let arr = []

// Container.style.cssText = "padding: 15px;margin: 25px;background: rgb(215, 211, 211);border-radius: 4px;";
// input.style.cssText = "padding: 10px;margin-right: 10px;border: 1px solid transparent;border-radius: 4px;width: 100vh;";
// btn.style.cssText = "padding: 10px;margin-left: auto;border: 1px solid transparent;border-radius: 4px;font-weight: 500;font-size: 14px;background: rgb(227, 81, 81);color: white;cursor: pointer;";
// form.style.cssText = "padding: 15px;display: flex;justify-content: space-around;align-items: center;";
// tasks.style.cssText = "padding: 15px;margin:30px;position: absolute;width:100vh;border: 1px solid transparent;background: rgb(215 211 211);color: white; border-radius:4px;margin-left: -15px;";


// input.onblur = function () {
//   btn.onclick = function () {
//     // if (input.value === "") {
//     //   return console.log(localStorage.length)
//     // }
//     let mybtn = document.createElement("button");
//     mybtn.style.cssText = "height:25px;border:none;color:white;background-color:red;border-radius:5px; display: flex;align-items: center;justify-content: space-between; cursor:pointer;";
//     tasks.appendChild(mybtn)
//     let divIn = document.createElement("div")
//     let divOut = document.createTextNode(`${input.value}`)
//     divIn.appendChild(divOut)
//     divIn.style.cssText = "padding:15px; margin:15px;background:white;color:black;border-radius:4px;display: flex;align-items: center;justify-content: space-between;";
//     tasks.appendChild(divIn);
//     mybtn.innerHTML = "Delete";
//     divIn.appendChild(mybtn);
//     if (input.value === "") {
//       divIn.remove(divOut)
//     }
//     input.value = ""
//     mybtn.onclick = function () {
//       divIn.remove(divOut) && localStorage.removeItem("task")
//     }

//   }
//   tasks.innerHTML = window.localStorage.getItem("task",);
//   window.localStorage.setItem("task", JSON.stringify(input.value));
// }

////////////////////////

// let inpt = document.querySelector(".input");
// let add = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");

// inpt.style.cssText = " margin-bottom: 10px; margin-right: 5px;";

// let arr = []

// if (arr != "") {
//   for (let i = 0; i < arr.length; i++) {
//     let arr = window.localStorage.getItem("arr").split(",");
//     let txt = document.createTextNode(arr[i]);
//     let div = document.createElement("div");
//     div.appendChild(txt);
//     div.style.cssText = "display: inline; padding-right: 20px";

//     let del = document.createElement("button");
//     let delTxt = document.createTextNode("Delete");
//     del.appendChild(delTxt);

//     let rslt = document.createElement("div");
//     rslt.classList.add("rslt");
//     rslt.appendChild(div);
//     rslt.appendChild(del);
//     rslt.style.cssText = "margin: 7px"
//     tasks.appendChild(rslt);
//     del.onclick = () => {
//       arr.splice(arr.indexOf(arr[i]), 1);
//       window.localStorage.setItem(arr, arr);
//       del.parentElement.remove();
//       window.localStorage.setItem("arr", arr);
//     }
//   }
// }

// add.addEventListener("click", () => {
//   if (inpt.value != "") {
//     arr.push(inpt.value);
//     window.localStorage.setItem("arr", arr);

//     let txt = document.createTextNode(`${inpt.value}`);
//     let div = document.createElement("div");
//     div.appendChild(txt);
//     div.style.cssText = "display: inline; padding-right: 20px";

//     let del = document.createElement("button");
//     let delTxt = document.createTextNode("Delete");
//     del.appendChild(delTxt);

//     let rslt = document.createElement("div");
//     rslt.classList.add("rslt");
//     rslt.appendChild(div);
//     rslt.appendChild(del);
//     tasks.appendChild(rslt);
//     console.log(arr);
//     del.onclick = () => {
//       arr.splice(arr.indexOf(inpt.value), 1);
//       window.localStorage.setItem(arr, arr);
//       del.parentElement.remove();
//       window.localStorage.setItem("arr", arr);
//       console.log(arr);
//     }
//     inpt.value = ""
//   }
// })

// ------------------------------------- 115 --------------------------------------------------

/*
  Destructuring  _______________________________________________________________  اختصرات للاراي لجعل الموضوع بشكل ابسط
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayd", "ELdeep", "oMar"];

// [a, b, c, d, e = "Osama"] = myFriends;  // عند عمل هذا الشكل سوف تجعل كل حرف ياخذا الاسم المقابل له علي حسب الانديكس
// // a=ahmed   b=sayd   c=eldeep  d=omar  وحرف ال e تم وضع له قيمه
// // عند حذف قيمه انديكس سوف يبحث عنها في ال global scope
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [, y, , z] = myFriends;
// // عند وضع مكان الانديكس فارغ سوف يذهب للي بعده بشكل طبيعي

// // console.log(x);
// console.log(y);
// console.log(z);

// ------------------------------------- 116 --------------------------------------------------

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][0]);

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); //  shady
// console.log(b); // gamal

// ------------------------------------- 117 --------------------------------------------------

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

// [book, video] = [video, book] // تغير قيم المتغيرات بشكل طبيعي بدل استخدام الشكل الذي ف الاعلي

// console.log(book);
// console.log(video);

// ------------------------------------- 118 --------------------------------------------------

/*
  Destructuring
  - Destructuring Object

{} هذا النوع يكون افضل من النوع الاخر لانه يعتمد علي اسم المتغير
[] هذا النوع يكون استخدامه عادي ولكن ليس الافضل لان يععتمد علي رقم الانديكس

*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName; ______________________________________  هذا الشكل قديم ويمكننا استخدام النوع الحديث لتسهيل الامر بشكل اكبر
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);


// ({ theName, theAge, theTitle, theCountry } = user); // نستخدمها بداخل ال ( ) لان تم تغيرها لنوع ال {}

// const { theName, theAge, theTitle, theCountry } = user; // وهذا نفس الشي ولكن نستخدم متغير

// [theName, theAge, theTitle, theCountry] = user; // لا يسمح باستخدام هذا النوع من ال [] لان نوع الاقواس بداخل المتغير {} ويوجد اكثر من قيمه

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ------------------------------------- 119 --------------------------------------------------

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables ??>>>>>> theAge:a
  --- Add New Property ??>>>>> theColor:co = "Red"
  --- Nested Object ??>>>>>> skills:{html:h,css}
  --- Destructuring The Nested Object Only ??>>>>>>> const { html: skillOne, css: skillTwo } = user.skills;
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const { // لتغير من كلمه او مسمي لحرف او رقم او اي شي للمناده عليه نعمله بشكل الطبيعي
//   theName: n, //  اسم الشي ثم:الحرق المسمي الجديد
//   theAge: a,
//   theCountry,
//   theColor: co = "Red", // لاضافه بروبرتي جديده بعنصر جديد
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills; // للمناده علي عنصر داخلي وتغير محتوياته

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

// ------------------------------------- 120 --------------------------------------------------

/*
  Destructuring
  - Destructuring Function Parameters ??>>>>>> ({ theName, theAge: a, skills: { html: h, css: c } } = user)
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your Css Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName, theAge: a, skills: { html: h, css: c } } = user) {
//   console.log(`Your Name Is ${theName}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your HTML Skill Progress Is ${h}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }

// ------------------------------------- 121 --------------------------------------------------
/*
  Destructuring
  - Destructuring Mixed Content
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// // const { theName: na, theAge: a, skills: [, , v], addresses: { egypt: e, ksa: k } } = user;
// const { theName: na, theAge: a, skills: [s, b, v], addresses: { egypt: e, ksa: k } } = user;

// console.log(`You Name Is ${na}`);
// console.log(`Your Age Is ${a}`);
// console.log(`My First Skill ${s}`);
// console.log(`My Scond Skill ${b}`);
// console.log(`My Th Skill ${v}`);
// console.log(`My All Skills ${s}, ${v}`);
// console.log(`Your First Addresses ${e}`);
// console.log(`Your Scond Addresses ${k}`);

// ------------------------------------- 122 --------------------------------------------------

/*
  Destructuring
  - Challenge
*/

// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// showDetails(chosen);

// function showDetails(chosen) {
//   let frind = myFriends[chosen - 1];
//   let { title: name, age, available, skills: [, skill2] } = frind;
//   console.log(`${name}`);
//   console.log(`${age}`);
//   console.log(`${available === true ? "Available" : "Not available"}`);
//   console.log(`${skill2}`);
// };

// ------------------------------------- 123 --------------------------------------------------

/*
! new Set تستخدم لتنظيف العناصر المتكرره
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index // ? لا يدخل علي العناصر من خلال الانديكس

  Properties:
  - size // !: size تستخدم لمعرفه عدد او مساحه الشي

  Methods:
  - add      لاضافه عنصر معين
  - delete   لحذف عنصر محدد
  - clear  لحذف جميع البينات
  - has
  let Hsp = ["omar", "eldeep", 1, 2, 3];
  let Hsp1 = new Set(["omar", "eldeep", 1, 2, 3]);
  console.log(Hsp1.has(1))  للبحث عن العنصر
*/

// let myData = [1, 1, 1, 2, 3, "A"];

// //                                                    ======== لوضع المحتوي بتاع المتغير بجميع انواعه
// let myUniqueData = new Set([1, 1, 1, 2, 3, "A"]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// // let myUniqueData = new Set();
// // myUniqueData.add(1).add(1).add(1);
// // myUniqueData.add(2).add(3).add("A");

// //

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

//_ ------------------------------------- 124 --------------------------------------------------

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  ? WeakSet >> يحذف البيانات عند عدم استخدمها او عند عدم وجدها
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// //  Values + Keys [Alias For Values]

// // let iterator = mySet.values(); // todo: او نستخدم النوع الثاني
// let iterator = mySet.keys();

// console.log(iterator)
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);

// todo: Search About:>> WeakSet Use Cases

// ? Example for  $ of $

// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }

// const gen = (function *(){
//   yield 1;
//   yield 2;
//   yield 3;
// })();
// for (const o of gen) {
//   console.log(o);
//   break;  // Closes iterator
// }

//_ ------------------------------------- 125 --------------------------------------------------

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  _ استخدام ال new Map يكون افضل من استخدام الاوبجيكت لان يتم تحديد العناصر بكل دقه
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  _ ال Map يمكنك اضافه اي نوع بينات بها
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  _ ال Map ترتب لك المحتوي بنفس الشكل الذي تم كتابته به
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  _ يمكننا استخدام ال size لمعرفه عدد العناصر وبعض الاشياء
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  _ يمكننا عمل loop علي ال map بشكل طبيعي وعادي جدا
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
 _ يكون الافضل في التعامل مع البيانات من حيث حذفها او اضافتها
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() { }, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));
// console.log(myNewMap.get(true));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);

//_ ------------------------------------- 126 --------------------------------------------------

/*
  - Map Data Type
  Methods
  --- set
  --- get تستخدم للمناده علي الشي من خلال اسم ال Key لعرض المحتوي بتاعه
  --- delete لحذف محتويم عين من خلال ال Key
  --- clear حذف كل محتوياتها
  --- has للبحث عن Key معين موجود ولا لا

  Properties
  --- size لمعرفه عدد العناصر
*/

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// // myMap.set(10, "Number");
// // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("####");

// console.log(myMap.has("Name"));

// console.log("####");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

//_ ------------------------------------- 127 --------------------------------------------------

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only يحذف البيانات عند عدم استخدمها او عند عدم وجدها
  --
*/

// let mapUser = { theName: "ElDeep" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "ElDeep" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap);

//_ ------------------------------------- 128 --------------------------------------------------

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)  // ! Array.from = تفصل عناصر ال Array عن بعض وبالذات اذا كانت نوع String
  ? Iterable = "String"
  ? MapFunction = "Number"+Function
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Osama"));
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );
// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]); // Future

// function af() {
//   return Array.from(arguments); // todo:: arguments = العناصر الذي بداخل ال Array
// }

// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3, 4545));

// z = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(z);

// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(arguments.length);
//   return sum;
// }

// console.log(x);

//_ ------------------------------------- 129 --------------------------------------------------

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional) // _ لعمل نسخ عنصر معين من الاري بداخل الاري بشكل طبيعي
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]  // todo تستخدم لتبديل العناصر بعنصر اخري بداخل الاراي بدون تغير عدد عناصر الاراي

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(1, -2); // [10, 'A', 'B', 40, 50, 'A', 'B']

// myArray.copyWithin(2,-1); // [10, 20, 'B', 40, 50, 'A', 'B']

// myArray.copyWithin(1, -2, -1); // [10, 'A', 30, 40, 50, 'A', 'B']

// console.log(myArray.length);
// console.log(myArray);

//_ ------------------------------------- 130 --------------------------------------------------

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument) //! ال some تعتبر شبه ال filter ولكن يمكننا هنا عمل اكثر من فانكشن علي عناصر الاري
  --- CallbackFunc => Function To Run On Every Element On The Given Array //! لو عنصر واحد انطبق عليه عناصر الشرط
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 9;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// })

// let check = nums.some(function (e) {
//   return e > this; // ? this هنا تعود علي المتغير myNumber
// }, myNumber);

// console.log(check)

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 11));
// console.log(checkValues(nums, 7));

// let range = {
//   min: 10,
//   max: 11,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);

//_ ------------------------------------- 131 --------------------------------------------------

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument) // ? لازم ينطبق علي جميع عناصر الاري الشرط الذي سوف تضعه
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(check);

//_ ------------------------------------- 132 --------------------------------------------------

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

// console.log("Eldeep");
// console.log(..."Eldeep");
// console.log([..."Eldeep"]);
// console.log({ ..."Eldeep" });

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);
// console.log([...myArray1]);
// console.log(...myArray1);

// // Push Inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums)); // console.log(Math.max([10, 20, -100, 100, 1000, 500]));

// let obj1 = {
//   a: 1,
//   b: 2
// };

// let obj2 = {
//   c: 3,
//   d: 4,
// };
// console.log({ ...obj1, ...obj2, s: 5 });

//_ ------------------------------------- 133 --------------------------------------------------

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False // ! ممنوع استخدام الارقم والصح والخطاء
  - Don't Use Array Indexes // ! ممنوع استخدام رقم الانديكس
  - You Cant Use Loop // ! ممنوع استخدام ال Loop
  - You Cant Use Any Higher Order Function // ! ممنوع استخدام اي func
  - Only One Line Solution Inside Console // ! عمل سطر واحد فقطط
  - If You Use Length => Then Only Time Only // ! عند استخدام ال length تستخدمها مره واحده فقط
  Hints
  - You Can Use * Operator Only In Calculation // ! استخدام علامه الضرب فقط
  - Set
  - Spread Operator
  - Math Object Methods
*/

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(n1.unshift(...n2) * n2.shift()); // 210

// todo حل اخر

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1) * [...n1, ...n2].length) // 210

//_ ------------------------------------- 134 --------------------------------------------------

/*
  Regular Expression // ! تستخدم لاختصار شي معين في استخدمات الاشياء التاليه Link _ IP _ Phone _ Email
  - Email
  - IP
  - Phone
  - URL
*/

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';

//_ ------------------------------------- 135 --------------------------------------------------

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive // _ توحي ان ابحث عن الشي اذا كان حروفه كبيره او صغيره
  g => global // _ يبحث عن الشي لوحده لا يطبع اي شي معه
  m => Multilines // _ عند وجود اكثر من سطر سوف يبحث بهم جميعا

  Search Methods
  - match(Pattern)

  Match // @@ تستخدم لكتابه كلمه او رمز معين يوحي الي link او ما شبه
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found. //? عند عدم وجود القيمه الذي تبحث عنها سوف يرجع لك ب null
// */

// let myString = "Hello Elzero Web School I Love elzero";

// let regex = /Elzero/ig;

// console.log(myString.match(regex));

//_ ------------------------------------- 136 --------------------------------------------------

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9 // ! اي رقم من 0 ل 9
  [^0-9] => Any Character Not 0 To 9 // ! ^ == ماعدا
  // ? هنا نقول له جيب اي شي غير ال 0 الي 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig; // ? نبحث عن عناوين معينه اذا كانت حروف كبيره او صغيره
// console.log(tld.match(tldRe)); // ! ['Org', 'Info', 'Io']

// let nums = "12345678910";
// let numsRe = /[0-2]/g; // ? نبحث من لو رقم 0 الي 2 ويمكننا تغيره
// console.log(nums.match(numsRe)); // ! ['1', '2', '1', '0']

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g; // ? هنا نبحث عن اي شي معدا ال 0 الي 2
// console.log(notNums.match(notNsRe)); // ! ['3', '4', '5', '6', '7', '8', '9']

// let specialNums = "1*2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g; // ? هنا نبحث عن اي شي معدا ال 0 الي 9
// console.log(specialNums.match(specialNumsRe)); // ! ['*', '@', '#', '$', '%']


// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));

//_ ------------------------------------- 137 --------------------------------------------------

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9 // ! اي رقم من 0 ل 9
  [^0-9] => Any Character Not 0 To 9 // ! ^ == ماعدا
  // ? هنا نقول له جيب اي شي غير ال 0 الي 9
  Practice

  - Part 2
  [a-z] //! الحروف من a الي z
  [^a-z] //! جميع الاشياء ماعدا a الي z
  [A-Z] //! الحروف من A الي Z
  [^A-Z] //! جميع الاشياء ماعدا A الي Z
  [abc]
  [^abc]

*/

// let myString = "AaBbcdefG123!234%^&*";

// let atozSmall = /[a-z]/g;
// let NotatozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotatozCaptial = /[^A-Z]/g;
// let aAndbAndc = /[abc]/g;
// let NotaAndbAndc = /[^abc]/g;
// let atoz = /[a-z]/ig;
// let CapSmall = /[a-zA-Z]/g; //? لعمل الحروف الكبيره والصغيره مع بعض
// let NotCapSmall = /[^a-zA-Z]/g; //? جميع الاشياء ماعدا جميع الحروف الكبيره والصغيره
// let specials = /[^a-zA-Z1-9]/g; //? لاظهار ال specials فقط

// console.log(myString.match(atozSmall));
// console.log(myString.match(NotatozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotatozCaptial));
// console.log(myString.match(aAndbAndc));
// console.log(myString.match(NotaAndbAndc));
// console.log(myString.match(atoz));
// console.log(myString.match(CapSmall));
// console.log(myString.match(NotCapSmall));
// console.log(myString.match(specials));

//_ ------------------------------------- 138 --------------------------------------------------

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

// let email = 'O@@0@G9...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g; //? يستخدم لطبع جميع المحتويات الموجوده ماعدا السطر الجديد و السلاش
// let wordw = /\w/g; //? يعرض لك جميع الارقام والحروف الكبيره والصغيره
// let wordW = /\W/g; //? يعرض لك جميع العلامات والمسافات
// let wordd = /\d/g; //? لعرض الارقام من 0 الي 9
// let wordD = /\D/g; //? لعرض الحروف الكبيره والصغيره والعلامات والمسافات
// let words = /\s/g; //? يعرض لك كل المسافات الموجوده
// let wordS = /\S/g; //? يعرض لك كل شي ماعدا المسطره او المسافات
// let valid = /\w@\w.(com|net)/g; //? نبحث عن اي حرف او رقم بعده علامه الميل ثم بعده اي رقم او حرف ثم نوع التصفح اذا كان نت او كوم

// console.log(email.match(dot));
// console.log(email.match(wordw));
// console.log(email.match(wordW));
// console.log(email.match(wordd));
// console.log(email.match(wordD));
// console.log(email.match(words));
// console.log(email.match(wordS));
// console.log(email.match(valid));

//_ ------------------------------------- 139 --------------------------------------------------

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input) //todo:  تستخدم لعمل تجربه علي كلمه او عنصر معين تم صنعه في متغير قديم وسوف يرجع لك ب true _ false
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

// let re = /(\wspam|spam\w)/ig; //? لعرض اي كلمه قبل الكلمه وبعد الكلمه
// let reb = /(\bspam|spam\b)/ig; //? لعرض الكلمه اذا كانت في البدايهاو النهايه
// let reB = /(\Bspam|spam\B)/ig;//? لعرض الكلمه اذا كانت في البدايهاو النهايه او في منتصف الكلمه

// console.log(names.match(re));
// console.log(names.match(reb));
// console.log(names.match(reB));

// console.log(re.test(names));
// console.log(reb.test(names));
// console.log(reB.test("Spam"));
// console.log(reB.test("Sayed"));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));

//_ ------------------------------------- 140 --------------------------------------------------

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailRe = /\w+@\w+.(com|net)/ig;
// let mailRe = /\w+@\w+.\w+/ig; //? لتصل لجميع الحروف او الارقام الموجموده من خلال ال + بمعني ان يوجد 3حروف عند استخدام ال + سوف يرجع لك بجميع الحروف او الشي محدد

// console.log(mails.match(mailRe));

// let nums = "0110 10 150 05120 0560 350 000210000"; // 0 Numbers Or No 0
// // let numsRe = /0+\w+/ig;
// let numsRe = /0\d*0/ig; //? نستخدمها لعرض شي معين اذا كان موجود او اذا كان يوجد منه الكثير

// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/ig; //? نستخدمها لعرض شي معين اذا كان موجود او يوجد منه واحد فقط

// console.log(urls.match(urlRe));

//_ ------------------------------------- 141 --------------------------------------------------

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";
// //  let thNum = /s\w.{2}s/ig; //? تستخدم {} لوضع رقم معين من الحروف او الارقام الذب تريد طباعتها
// let thNum = /s\d{3}s/ig; // ? نفس الشي ولكن بالطريقه الاساسيه
// let fourNum = /s\d{4,5}s/ig; //? لطباعه 4 او 5 ارقام في المنتصف
// let moreNum = /s\d{3,}s/ig; //? تستخدم لطباعه رقم معين الي لا نهايه نضع بعد الفصله فارغ

// console.log(serials.match(thNum)); //! ['S100S']
// console.log(serials.match(fourNum)); //! ['S3000S', 'S50000S']
// console.log(serials.match(moreNum)); //! ['S100S', 'S3000S', 'S50000S', 'S950000S']

//_ ------------------------------------- 142 --------------------------------------------------

/*=
  Regular Expression

  Quantifiers
  $  => End With Something //? تطبع هل ينتهي هذا العنصر بشي معين
  ^  => Start With Something //? يطبع هل يبادء هذا العنصر بشي معين
  ?= => Followed By Something //? هل هذا ينتهي بشي معين
  ?! => Not Followed By Something //? هل الشي الذي تم استخدامه لا ينتهي بشي معين
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=z)/ig));
// console.log(names.match(/\d\w{7}(?!a)/ig));

//_ ------------------------------------- 143 --------------------------------------------------

/*
  Regular Expression

  - replace //? تستخدم لتبديل كلمه او علامه او شيي معين بكلمه او شي معين اخر وتغير اول قيمه تقابلها
  - replaceAll //? تستخدم لتبديل كلمه او علامه معينه بشي اخر وعند تكرار نفس الشي سوف يتم تغيره جميعا
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";

// console.log(txt.replace("@", "JS"));
// console.log(txt.replaceAll("@", "JS"));
// let re = /programming/ig;
// console.log(txt.replaceAll(re, "JS"));
// console.log(txt.replaceAll(/@/ig, "JS"));

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/ig, "Red");
// console.log(result);

//_ ------------------------------------- 144 --------------------------------------------------

/*
  Regular Expression
  - Input Form Validation Practice
*/
// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false
//   }
//   return true;
// }

//_ ------------------------------------- 145 --------------------------------------------------

/*
?------------------------------------------------ Example --------------------------------------------------

https://regexr.com/
https://www.regextester.com/
https://regex101.com/

*/
//_ ------------------------------------- 146 --------------------------------------------------

/*
  Regular Expression
  - Challenge
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org https://ELdeeP.net';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let url6 = 'http://localhost:8080/JavaScript/test%20JavaScript/index.html?the-phone=%281234%29+567-8910';
// let url7 = 'https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=146';
// let url8 = 'http://www.youtube.com/watch?v=uv5OULDiCXg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=147';

// let re = /\w+.(\w*)/g;
// let re2 = /https?\:\/\/\w+.(\w+)/g;
// let re3 = /https?\:\/\/\w+.(\w+)/g;
// let re4 = /https?\:\/\/(\w+)?.\w+.\w+/g;
// let re5 = /https?\:\/\/(\w+)?.\w+.\w+\:\d+\/\w+.\w+\?\w+\=\w+\&\w+\=\w+/g;
// let re6 = /https?\D+\w+\:\w+\/\w+\/\w+\D\w+\/\w+\.\w+\?\w+\-\w+\D+\d+\D\d+\D\w+\-\w+/g;
// let re7 = /https?\D+\w+\D+\d+/g;
// let re8 = /https?\D+\w+\D+\w+\D+\d+/g;

// console.log(url1.match(re));
// console.log(url2.match(re2));
// console.log(url3.match(re3));
// console.log(url4.match(re4));
// console.log(url5.match(re5));
// console.log(url6.match(re6));
// console.log(url7.match(re7));
// console.log(url8.match(re8));

//_ ------------------------------------- 147 --------------------------------------------------

/*
What Is OOP ?
---
OOP Stand For => Object Oriented Programming
OOP Is A Paradigm or Style Of Code //! شكل معين لكتابه الكود
OOP Use The Concept Of Object To Design A Computer Program
Its Not New => Simula Is The First OOP Programming Language At 1960
Some Languages Support OOP and Some Not
Object Is A Package Contains Properties and Functions That Work Together To Produce Something in Your Application. Functions Here Called Methods
? تحتوي علي خواص و function ويتم استخدمهم لكي يعمل شي معين علي الابلكيشن بتاعك
? ويطلق علي ال function = Methods

todo --------------------------------- المثال علي عربيه -------------------------------------------------------------------

! function = بعض الاكشن الذي يفعله الشي المستخدم مثل حركه العربيه وقوفها الكلاكس
! Properties = خواص الشي المستخدم مثل لونه شكله سعره متي تم صنعه

> ------------------------------------------------------------------------------------------------------------------------------------------------------

Why We Use OOP ?
--
You Will be Able to Create a Large and Complex Software Architecture in Organized Ways. //? يمكنك عمل بنيه كبيره معقده ويتم استخدامه لتنظيم الموضوع ويبقي اسهل
You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent Mess With The Code. //? ويمكنك اخفاء اجزاء معينه من الكود
You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance. //? يمكنك انشاء Reusable Objects لكي تستخدمها في اكثر من مكان اخر
*/

//_ ------------------------------------- 148 --------------------------------------------------

/*
  Constructor Function
! تستخدم مثل الفانكشن العاديه ولكن نعطي بعض المتغيرات
*/

// function User(id, username, salary) { //? this تعود علي الاوبكجيت الذي سوف يتم عمله
//   this.i = id; //? i تعود علي القيم الذي سوف يتم وضعها في كل استخدام الي هي = 100 او 101 او 102
//   this.u = username; //? نفس الشي بتاع ال id
//   this.s = salary + 1000; //? نفس الشي
// }

// let userOne = new User(100, "ElDeeP", 5000); //? نستخدم new ثم اسم ال Constructor الذي تم عملها فوق
// let userTwo = new User(101, "NTFS", 6000);
// let userThree = new User(102, "Sano", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// }

//_ ------------------------------------- 149 --------------------------------------------------

/*
  Constructor Function
  - New Syntax
*/
// class User {
//   constructor(id, username, salary) { //? نفس الشي الذي عملنا في ال function ولكن هذا الشكل الصحيح الذب يتم استخدامه في اخر تحديث
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   };
// };

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

//? ------------------------------------- 150 --------------------------------------------------

/*
  Constructor Function
  - Deal With Properties & Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id * id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User(100, "ElDeeP", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code

//? ------------------------------------- 151 --------------------------------------------------

/*
  Constructor Function
  - Update Properties //! للتعديل علي قيمه معينه
  - Built In Constructors
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// };

// let userOne = new User(100, "ElDeeP", 7000);

// console.log(userOne.u);
// userOne.updateName("SharK"); //? نستخدم المتغير ثم ال method الذي سوف نغير بها الشي
// console.log(userOne.u);

// let strOne = "ElDeeP";
// let strTwo = new String("1000");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

// let strTh = 1500;
// let strFr = new Number(1000);

// console.log(typeof strTh);
// console.log(typeof strFr);

// console.log(strTh instanceof Number);
// console.log(strFr instanceof Number);

// console.log(strTh.constructor === Number);
// console.log(strFr.constructor === Number);

//? ------------------------------------- 152 --------------------------------------------------

/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Property
//   static count = 0; //! نستخدم كلمه static لكي نجل المتغير او ال method تبع ال class
//   //~ عند استخدام ال method من خلال ال constructor سوف يعمل error
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//   // Static Methods
//   static sayHello() { // ال sayHello هنا راجعه ل class الذي يتم استخدمها
//     return `Hello From Class`;
//   }
//   static countMembers() { // ال countMembers هنا راجعه ل class الذي يتم استخدمها
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());

//? ------------------------------------- 153 --------------------------------------------------

/*
  Class
  - Inheritance التوربث
*/

// Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User { //! نستخدم كلمه extends لكي نورث او ننسخ شي معين من class اخر
//   constructor(id, username, permissions) {
//     super(id, username); // ! نستخدم كلمه super للمناده علي الشي الذي تريد ان تنسخه بكل بساطه
//     this.p = permissions; // ! ويمكننا اضافه شي اخر عليهم
//   }
// }

// class Superman extends Admin { //! وهنا تم نسخ من خلال class Admin الاشياء الذي تم استنسخها من الاعلي
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions); //! نفس الشي سوف تعمل بشكل طبيعي جدا من خلال استنسخها من شي مستنسخ
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);
// let superMan = new Superman(120, "DanDo Perm", 5, 710);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());
// console.log("####");
// console.log(superMan.i);
// console.log(superMan.u);
// console.log(superMan.p);
// console.log(superMan.a);
// console.log(superMan.sayHello());

//? ------------------------------------- 154 --------------------------------------------------

/*
  Encapsulation //! عميله تغليف البيانات
  - Class Fields Are Public By Default //! يمكنني استخدام ال class في النطاق الواسع
  - Guards The Data Against Illegal Access. //! لحمايه البينات من الدخول الغير مشروع يمكننا عمل ال class to Private
  - Helps To Achieve The Target Without Revealing Its Complex Details. //! كل العناصر الذي بداخل ال class هي الذي يمكنها ان ترا هذه القيمه والتعديل عليها ايضا
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e; //! نستخدم # لكي نحول الشي الذي لدينا الي private
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary; //! وننادي عليه بشكل طبيعي
//   }
//   getSalary() {
//     return parseInt(this.#e)
//   }
// };

// class test extends User {
//   constructor(id, username, eSalary, field) {
//     super(id, username, eSalary);
//     this.f = field
//   }
// }
// let userOne = new User(100, "EDS", "5000 Point"); //! نستخدم ال private بسبب ان ممكن المستخدم يضع قيمه غير المتوقعه مثال ان بدل ان يضع الرقم فقط ضع الرقم وجانبه كلام
// let testPrivate = new test(850, "OmAR", "500 Point", "MIssion Field");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

// console.log(testPrivate.u);
// console.log(testPrivate.i);
// console.log(testPrivate.getSalary() * 1.5);

//? ------------------------------------- 155 --------------------------------------------------

/*
  Prototype //? عباره عن Object
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects //! لترث الخواص من بعضها في الجافاسكربت
    inherit features from one another.
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "ElDeeP");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "ElDeeP";

// console.log(String.prototype);

//? ------------------------------------- 156 --------------------------------------------------

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne)

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// Number.prototype.addDotBeforeAndAfterN = function (val) { //! عند استخدامها سوف يرجع لك بنتيجه المتغير الرقم الذي تم عمله
//   return `.${this}.`;
// };

// let myNumber = 15;

// String.prototype.addDotBeforeAndAfterS = function (val) {
//   return `.${this}.`;
// };

// let myString = "ElDeeP";

// console.log(userOne.sayWelcome());
// console.log(myNumber.addDotBeforeAndAfterN());
// console.log(myString.addDotBeforeAndAfterS());


/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false, //! عند عملها خطا لا يمكن التعديل علي البروبرتي
//   enumerable: true, //! لاخراج ال بروبرتي من عمله التكرار Loop
//   configurable: false, //! لايمكنك حذف البروبرتي او تغير محتوها عند تكررها
//   value: 4,
// });

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);

//? ------------------------------------- 158 --------------------------------------------------

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d")); // ! تستخدم لعرض محتوي الاوبجيكت
// console.log(Object.getOwnPropertyDescriptors(myObject)); //! تستخدم لعرض جميع المحتويات الذي بداخل الاوبجيكت

//? ------------------------------------- EX --------------------------------------------------

// function eldeepStringLength(str) {
//   let index = 0;
//   while (str) {
//     if (str[index] === undefined) {
//       break;
//     }
//     index++;
//   }
//   return index;
// }
// console.log(eldeepStringLength("ELDEEP")); = console.log("ELDEEP".length)

//? ------------------------------------- 159 --------------------------------------------------

/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

// let dateNow = new Date(); //! تستخدم لمعرفه التريخ الحالي

// console.log(dateNow); //~ Thu Jun 30 2022 16:41:11 GMT+0200 (Eastern European Standard Time)

// console.log(Date.now()); // 1000 Mill = 1 Second تستخدم لمعرفه الوقت الذي تم انشاء في علوم الحاسوب

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);

//? ------------------------------------- 160 --------------------------------------------------

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("jun 30 , 2000");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime()); //! الوقت بالثواني
// console.log(dateNow.getDate()); //! يوم كام ف الشهر
// console.log(dateNow.getFullYear()); //! لمعرفه السنه
// console.log(dateNow.getMonth()); //! يرجع لك الشهر ولكن بالانديكس يعني يبداء من 0 ليس من واحد
// console.log(dateNow.getDay());//! sun=0 ,monday=1, tuesday=2, wednesday=3,thursday=4,friday=5,saturday=6 ايام الاسبوع
// console.log(dateNow.getHours());//! لمعرفه الساعه الحاليه
// console.log(dateNow.getMinutes());//! لمعرفه الدقيقه الحاليه
// console.log(dateNow.getSeconds());//! لمعرفه الثواني الحاليه
// console.log(dateNow.getMilliseconds()); //! الملي ثانيه الحاليه

//? ------------------------------------- 161 --------------------------------------------------

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(0); //! وضع وقت بعد ةقت اليونيكس
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(31); //! للتديل في ايام الشهر وعند الزباده  عن ايام الشهر يبداء في الشهر الجديد واذا تم استخدام السالب يرجع للشهر الي قبله وينطبق كل هذا علي الباقي
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setFullYear(2000,11); //! لوضع سنه وممكن كتايه الشهر بجانيها
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setMonth(5,15); //! لوضعشهر ويمكن اضافه يوم
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setHours(21); //! لوضع ساعع
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setMinutes(48,45); //! لوضع دقيقه ويمكن ثواني
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setSeconds(20); //! لوضع ثواني ويمكن ملي ثانيه
// console.log(dateNow);

// console.log("#".repeat(66));

//? ------------------------------------- 162 --------------------------------------------------

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format //? كل الطرق دي تستخدم بنفس الشكل وتسواي نفس النتايج
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String نستخدم parse لحساب تاريخ معين بالمالي ثانيه
*/

// console.log(Date.parse("Oct 25 1982"));//! لحساب تاريخ معين بالملي ثانيه

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404344800000);
// console.log(date2);

// let date3 = new Date("10-25-1982");
// console.log(date3);

// let date4 = new Date("1982-10-25");
// console.log(date4);

// let date5 = new Date("1982-10");
// console.log(date5);

// let date6 = new Date("82");
// console.log(date6);

// let date7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date7);

// let date8 = new Date(1982, 9, 25);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9);

//? ------------------------------------- 163 --------------------------------------------------

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);


// ? _________________________________ performance.mark() __________________________________

// Create a bunch of marks.
// performance.mark("squirrel");
// performance.mark("squirrel");
// performance.mark("monkey");
// performance.mark("monkey");
// performance.mark("nano");
// performance.mark("nano");
// performance.mark("nano");
// performance.mark("dog");
// performance.mark("dog");

// // Get all of the PerformanceMark entries.
// const allEntries = performance.getEntriesByType("mark");
// console.log(allEntries.length);
// // 9

// // Get all of the "monkey" PerformanceMark entries.
// const monkeyEntries = performance.getEntriesByName("nano");
// console.log(monkeyEntries.length);
// // 3

// // Clear out all of the marks.
// performance.clearMarks();

// ? _________________________________ performance.now() __________________________________

// const t0 = performance.now(); // ? لمعرفه الوقت بالملي ثانيه
// const t1 = performance.now();
// console.log(`Call to doSomething took ${performance.now()} milliseconds.`);
// console.log(`Call to doSomething took ${t1 + t0} milliseconds.`);

//? ------------------------------------- 164 --------------------------------------------------

/*
  Generators
  - Generator Function Run Its Code When Required. //! يتعم عمل فانكشن وتستخدم عندما تحتاجها فقط
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() { //! function* تستخدم لهذا الامر يمكننا استخدمها في اي وقت
//   yield 1; //? yield تستخدم لطباعه الشي الذي يعده
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next()); //? عند استخدام هذا سوف يرجع لك بجزاء جزاء من البينات الذب تم وضعها
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) { //? عند استخدام اسم ال function سوف يرجع لل function  بشكل طبيعي مره اخري
//   console.log(value);
// }

// for (let value of generator) { //? عند استخدم اسم المتغير ذات نفسه سوف يرجع لك بالقيم المتبقيه او الموجوده بعد العمليات الذب تمت
//   console.log(value);
// }

//? ------------------------------------- 165 --------------------------------------------------

/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();
// for (let value of generateAll()) {
//   console.log(value)
// }

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Stop")); //? return تسخدم لانهاء عمليه ال function* ويمكن وضع قيمه معيه والقف عليها ("Stop")
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generator) {
//   console.log(value)
// }

//? ------------------------------------- 166 --------------------------------------------------

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers() {
// yield 1;
// yield 2;
// return "A";
// yield 3;
// yield 4;
//   let index = 1;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//? ------------------------------------- 167 --------------------------------------------------
//? ------------------------------------- 168 --------------------------------------------------

/*
  Modules // todo ________________________________ كيفيه عمل اصدار وتصدير من ملف خارجي ________________________________________
  ? export  للاصدار _ import للتصدير
  - Import And Export
*/

// todo  ____________________________________________________________ export ____________________________________________________________
// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// };

// export { a as myNumber, arr, saySomething }; //? يمكننا تغير اسم اي عنصر من الاكسبورت ابضا باستخدام ال as

// export default function () { //? تستخدم لعمل function ونعمل لها استدعاء في الملف الاخر
//   return `Hello Export Default :`;
// };

// todo  ____________________________________________________________ import ____________________________________________________________
//@@ يتم عمل هذا في الملف الثاني الذب سوف نستدعي به الشي المستخدم

// import eldeep, { myNumber, arr, saySomething as s } from "./main.js";
//? للمناده علي ال export default يمكننا عمل لها اي اسم بعد كلمه import
//? نستخدم هنا نوع ال import للاستدعاء ثم بداخله الاشباء الذي سوف تستدعيها من المكان الاخر
//! as = اسم مستعار للشي او تغير اسم الشي الذي تم استدعاءه
//? ولتغير اسم الشي الذب سوف تستدعي نستخدم as ثم اسم الشي الجديد
//? نستخدم from "اسم الملف الذي سوف تستعدي منه الاشياء"

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(eldeep()); //? هذه هي ال function الذي تم استدعاها من الملف الاخر من خلال ال export defaultص ةثث

// import * as all from "./main.js" //? نستخدم * لتصدير الكل تم نعمل اسم مستعار بكلمه as ثم الاسم المستعار بعدها

// console.log(all.default())

//? ------------------------------------- 169 --------------------------------------------------

/*
  What Is JSON ?
  - JavaScript Object Notation  //? معني كلمه json
  - Format For Sharing Data Between Server And Client //? تستخدم لعمل مشاركه الداته بين السيرفير و المستخدم
  - JSON Derived From JavaScript //? مستخرجه من لغه الجافا سكربت
  - Alternative To XML //? بديله للغله ال XML
  - File Extension Is .json //? امتداد الملف .json

  Why JSON ?
  - Easy To Use And Read //? سهوله الاستخدام وسهوله القراء
  - Used By Most Programming Languages And Its Frameworks //? جميع او اغلبيه لغات البرمجه تتعالمل مع ال json
  - You Can Convert JSON Object To JS Object And Vice Versa //? يمكنك تحول ال json الي javascript او العكس

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  //? الافضليه لل JSON
  ===================================================
*/

//? ------------------------------------- 170 --------------------------------------------------

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  } //! يتم وضع البيانات بداخل ال { }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes  //! نضع الشي المستخدم بداخل ال ""
  - Data Separated By Comma //! نفصل بين البيانات وبعضها بعلامه ,
  - Square Brackets [] For Arrays //! لعمل ال array نستخدم []
  - Curly Braces {} For Objects //! لعمل ال object نستخدم {}

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

//? ------------------------------------- 171 --------------------------------------------------

/*
  JSON
  - API Overview Applciton Porgraming Interface
  - Tools To Test API
  - Preview Github API
  //! للحصول علي معلومات بال json عن شخص معين نكتبه بنفس المنطق
  //? https://api.github.com/users/NTFSv6/repos
  //? https://api.github.com/users/NTFSv6
*/

//? ------------------------------------- 172 --------------------------------------------------

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object //? JSON.parse => تستخدم لتحويل البيانات من json الي javascript
  - JSON.stringify => Convert JS Object To JSON //? JSON.stringify => تستخدم لتحويل البيانات من javascript الي json
*/


// // Get From Server
// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// // Convert To JS Object
// const myJsObject = JSON.parse(myJsonObjectFromServer); //! JSON.parse => تستخدم لتحويل البيانات من json الي javascript
// console.log(typeof myJsObject);
// console.log(myJsObject);

// // Update Data
// myJsObject["Username"] = "Elzero";
// myJsObject["Age"] = 40;

// // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject); //! JSON.stringify => تستخدم لتحويل البيانات من javascript الي json
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);

//? ------------------------------------- 173 --------------------------------------------------

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous //? تزامن كل عمليه بتم لازم العمليه الي قبلها تتم علشان العمليه الجديده تبداء تتم
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous //? غير متزامن مش شرط يكون العمليه الي قبلها تمت يمكن عمل اكثر من عمليه مع بعض
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation"); //? سوف يوقف العمليه الذي بعده
// console.log("3");

// Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000); //? سوف يعم باقي العمليات بشكل عادي
// console.log("3");

//? ------------------------------------- 174 --------------------------------------------------

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

// setTimeout(() => { //? Asynchronous
//   console.log("Web API");
// }, 0);

// function one() { //? Synchronous
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

// console.log("#####");
// console.log("One");
// console.log("Two");
// console.log("Three");

//? ------------------------------------- 175 --------------------------------------------------

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

// console.log("One"); // 1

// setTimeout(() => { // ! يتم ايقاف هذه العمليه لانها من نوع Asynchronous يتم تاخيرها لحين مرجعتها لل API ويم تنفيذ اي عمليه غيرها وحين مرجعتها ستكون اخر عمليه سوف يتم حدوثها
//   console.log(myVar);
// }, 0);
// setTimeout(() => { // 4
//   console.log("Three");
// }, 0);
// setTimeout(() => { // 5
//   console.log("Four");
// }, 0);
// console.log("Two"); // 2

// let myVar = 100;
// myVar += 100;

//? ------------------------------------- 176 --------------------------------------------------

/*
  AJAX
  - Asynchronous JavaScript And XML //! تكون عباره عن كذا شي يحدث مع بعضهم ولا يعطل شي منهم
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server //? تستخدم لارسال البيانات للسيرفر
  - You Can Fetch Data Or Send Data Without Page Refresh

  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

// let req = new XMLHttpRequest(); //? تستخدم لارسال البيانات للسيرفر
// console.log(req);

//? ------------------------------------- 177 --------------------------------------------------

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready //! ان انتهي الارسال وان البينات تم الانتهاء منها لمعرفه هل البينات لم يوجد بها اي خطاء سوف نري ال status اذا كانت 200 فان كل شي سليم
  - Status
  [200] Response Is Successful //! يعني ان البيانات سليمه لايوجد فيها مشكله 
  [404] Not Found //? == ERROR  
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/NTFSv6/repos"); //? نستخد نوع GET نوع الموقع ويوجد نوع اخر POST هذا النوع امان عن الاول ثم اللينك
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () { //! نوع من انواع البيانات 
// console.log(myRequest.readyState);
// console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

//? ------------------------------------- 178 --------------------------------------------------

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/NTFSv6/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };

//? ------------------------------------- 179 --------------------------------------------------

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("Iam A Callback Function");
// }

// setTimeout(iamACallback, 2000);

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//? ------------------------------------- 180 --------------------------------------------------

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life //? يعتبر الجافا سكربت تضع وعد سوف يحدث
  - Promise Is Something That Will Happen In The Future //? شي سوف يحدث في المستقبل 
  - Promise Avoid Callback Hell //? لتجنب مشكله ال Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status //? حالات ال Promise 
  --- Pending: Initial State //? البداء قبل تحقيق اي شي 
  --- Fulfilled: Completed Successfully //? العمليه تمت بنجاح
  --- Rejected: Failed //? فشل العمليه  

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => { //? نستخدم نوع ال Promise
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// });

// console.log(myPromise);

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

// myPromise.then(resolver, rejecter); //? نستخدم .then لكي تفعل شي معين بعد تطبيق الوعد او الشرط الاول

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

//? ------------------------------------- 181 --------------------------------------------------

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data //? تستخدم عند تحقيق الوعد بشكل صحيح
  Catch   => Promise Is Failed, Catch The Error //? تستخدم عند وجود مشكله في الوعد وعدم تنفيذه 
  Finally => Promise Successfull Or Failed Finally Do Something //? تسخدم عند تنفيذ الوعد او عدم تنفيذه ف جميع الحالات سوف يحدث 
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = [];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number Of Employees Is Not 4"));
//   }
// });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The Choosen Emplyee Is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => console.log(rejectedReason))
//   .finally(console.log("The Operation Is Done"));

//? ------------------------------------- 182 --------------------------------------------------

/*
  Promise And XHR
*/

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 15;
//     return result;
//   })
//   .then((result) => console.log(result[14].name))
//   .catch((rej) => console.log(rej));

//? ------------------------------------- 183 --------------------------------------------------

/*
  Fetch API //?  سهله في الاستخدام عن باقي الادوات الذي تم استخدمها في الاعلي
  - Return A Representation Of the Entire HTTP Response
*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].full_name);
//   });

//? ------------------------------------- 184 --------------------------------------------------

/*
  Promise
  - All //? تسختدم لعرض كل المحتي لو كان كله res
  - All Settled //? تستخدم لعرض الكل حتي لو كان rej او res 
  - Race //? تستخدم لعرض اول شي تم مقابلته 
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promise");
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Second Promise");
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Third Promise");
//   }, 200);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

//? ------------------------------------- 185 --------------------------------------------------

/*
  Async //? تستخدم لاسترجاع promise العادي ولكن بشكل مختصر 
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// async function getData() {
//   let users = ["SDKLO",'DOIKA'];
//   if (users.length > 0) {
//     return `All User U Have ${users}`;
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

//? ------------------------------------- 186 --------------------------------------------------

/*
  Await //? تستخدم لكي تدعل جميع الاكواد تنتظر كود معين الذي تم كتابتها في
  - Await Works Only Inside Asnyc Functions //? تستخدم في النوع asnyc function فقط
  - Await Make JavaScript Wait For The Promise Result //? تستخدم لانتظار promise result 
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//    // reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log(await myPromise.catch((err) => err));
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise);
//   console.log("After Promise");
// }

// readData();

//? ------------------------------------- 187 --------------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// async function fetchData() {
//   console.log("Before Fetch");
//   try {
//     let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
//     console.log(await myData.json());
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// fetchData();

//? ------------------------------------- 188 --------------------------------------------------

// todo نهايه كورس الجافا سكربت مع #ELZERO# 20\7\2022

/*
  The End
  - Other Information => Practice + Tutorials
  - Problem Solving
  - Search In Lessons
  - Advanced Books
*/

