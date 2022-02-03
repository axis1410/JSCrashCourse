var average_dolphin;
var average_koala;

var score_dolphin_1 = 96+ 108+ 89;
var score_dolphin_2 = 97 + 112 + 101;
var score_koala_1 = 88 + 91 + 110;
var score_koala_2 = 109 + 95 + 123;



function isElligible(score)
{
    if(score >= 100)
    return true;
}

average_dolphin = (score_dolphin_1 + score_dolphin_2)/2;
average_koala = (score_koala_1 + score_koala_2)/2;

console.log("Score of Team Dolphin : " + average_dolphin);
console.log("Score of Team Koala : " + average_koala);


if(average_dolphin > average_koala)
{
    console.log("Dolphin won with a score of " + average_dolphin);
}
else
{
    console.log("Koala won with a score of " + average_koala);
}

console.log("======================================================================");
console.log("BONUS 1 : ");

var average_dolphin_bonus_1;
var average_koala_bonus_1;
var b1_score_dolphin = 97 + 112+ 101;
var b1_score_koala = 109 + 95 + 123;

var average_dolphin_bonus_1 = (b1_score_dolphin/3).toFixed(2);
var average_koala_bonus_1 = (b1_score_koala/3).toFixed(2);


if(isElligible(average_dolphin_bonus_1))
{
    console.log("Dolphin Team : " + average_dolphin_bonus_1);
}
else
{
    console.log("Dolphin Team scored less than 100");
}

if(isElligible(average_koala_bonus_1))
{
    console.log("Koala Team : " + average_koala_bonus_1);
}
else
{
    console.log("Koala Team scored less than 100");
}

if(average_dolphin_bonus_1 > average_koala_bonus_1)
{
    console.log("Team Dolphin won Bonus 1 with a score of : " + average_dolphin_bonus_1);
}
else
{
    console.log("Team Koala won Bonus 2 with a score of : " + average_koala_bonus_1);
}

console.log("======================================================================");
console.log("BONUS 2 : ");

var average_dolphin_bonus_2;
var average_koala_bonus_2;
var b2_score_dolphin = 97 + 112 + 101;
var b2_score_koala = 109 + 95 + 106;

var average_dolphin_bonus_2 = (b2_score_dolphin/3).toFixed(2);
var average_koala_bonus_2 = (b2_score_koala/3).toFixed(2);

if(isElligible(average_dolphin_bonus_2) == true){
    console.log("Team Dolphin scored more than 100.");
}
else{
    console.log("Team Dolphin scored less than 100")
}
if(isElligible(average_koala_bonus_2) == true){
    console.log("Team Koala scored more than 100.");
}
else{
    console.log("Team Koala scored less than 100")
}

if(average_dolphin_bonus_2 > average_koala_bonus_2)
{
    console.log("Team Dolphin won Bonus 1 with a score of : " + average_dolphin_bonus_2);
}
else
{
    console.log("Team Koala won Bonus 2 with a score of : " + average_koala_bonus_2);
}
