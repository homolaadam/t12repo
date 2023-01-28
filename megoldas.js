/*<script>
document.write("Homola Ádám<br>")
document.write("Team 12<br>")
document.write("HTML: 90<br>")
document.write("CSS: 70<br>")
document.write("JavaScript: 50")
</script>*/

//2. feladat:

<script>

let szamEgy=Number(prompt("Adj meg egy számot:"));
let szamKetto=Number(prompt("Add meg a hatványozás mértékét:"));

let hatvany=szamEgy**szamKetto;
	document.write(`A(z) ${szamEgy} és a(z) ${szamKetto} hatványa: ${hatvany}`);

</script>

//4. feladat:

<script>

let szamEgy=Number(prompt("Adj meg egy életkort: "));

if(szamEgy<=0){
	document.write("Hiba");
}

else if(szamEgy>=120){
	document.write("Hiba");
}
    
else if(szamEgy<6){
	document.write("Kisgyermekkor");
}

else if(szamEgy<12){
	document.write("Gyermekkor");
}

else if(szamEgy<16){
	document.write("Serdülőkor");
}

else if(szamEgy<20){
	document.write("Ifjúkor");
}

else if(szamEgy<30){
	document.write("Fiatal felnőtt kor");
}

else if(szamEgy<60){
	document.write("Felnőtt kor");
}

else{
	document.write("Aggkor");
}

</script>