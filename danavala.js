var nummarks = Number(prompt("How much Numbers You Have to addict ? (you can only choose  2 - 10  numbers only)"))

if (nummarks == 10)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Third Value"));
    var four = Number(prompt("Enter You're fouth Value"));
    var five = Number(prompt("Enter You're Fifth Value"));
    var six = Number(prompt("Enter You're six Value"));
    var seven = Number(prompt("Enter You're Seven Value"));
    var Eaight = Number(prompt("Enter You're Eaight Value"));
    var nine = Number(prompt("Enter You're Nine Value"));
    var ten = Number(prompt("Enter You're Ten Value"));

    var f5 = aka+deka+tuna+four+five;
    var s5 = six+seven+Eaight+nine+ten;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML= f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}




else if (nummarks == 9)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));
    var six = Number(prompt("Enter You're six Value"));
    var seven = Number(prompt("Enter You're Seven Value"));
    var Eaight = Number(prompt("Enter You're Eaight Value"));
    var nine = Number(prompt("Enter You're Nine Value"));

    var f5 = aka+deka+tuna+four+five;
    var s5 = six+seven+Eaight+nine;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}


else if (nummarks == 8)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));
    var six = Number(prompt("Enter You're six Value"));
    var seven = Number(prompt("Enter You're Seven Value"));
    var Eaight = Number(prompt("Enter You're Eaight Value"));

    var f5 = aka+deka+tuna+four+five;
    var s5 = six+seven+Eaight;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 7)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));
    var six = Number(prompt("Enter You're six Value"));
    var seven = Number(prompt("Enter You're Seven Value"));

    var f5 = aka+deka+tuna+four;
    var s5 = five+six+seven;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 6)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));
    var six = Number(prompt("Enter You're six Value"));

    var f5 = aka+deka+tuna;
    var s5 = four+five+six;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 5)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));

    var f5 = aka+deka+tuna;
    var s5 = four+five;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 4)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));

    var f5 = aka+deka;
    var s5 = tuna+four;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 3)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));

    var f5 = aka+deka;
    var s5 = tuna;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 2)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));

    var f5 = aka;
    var s5 = deka;
    var vau = f5+s5;

    document.getElementById('fristnum').innerHTML=f5;
    document.getElementById('secondnum').innerHTML=s5;
    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 1)
{
    alert("we can't addict number '1'")
}

else if (nummarks > 10)
{
    alert("Number is more than 10")
}

else
{
    alert("Number is Uncorrect")
}