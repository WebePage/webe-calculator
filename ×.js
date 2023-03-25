var nummarks = Number(prompt("How Much Numbers You Have to Multiplication (you can only choose  2 to 10  numbers only)"))

if (nummarks == 10)
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
    var ten = Number(prompt("Enter You're Ten Value"));

    var vau = aka*deka*tuna*four*five*six*seven*Eaight*nine*ten;

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

    var vau = aka*deka*tuna*four*five*six*seven*Eaight*nine;

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

    var vau = aka*deka*tuna*four*five*six*seven*Eaight;

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

    var vau = aka*deka*tuna*four*five*six*seven;

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

    var vau = aka*deka*tuna*four*five;

    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 5)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));
    var five = Number(prompt("Enter You're Five Value"));

    var vau = aka*deka*tuna*four*five;

    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 4)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));
    var four = Number(prompt("Enter You're four Value"));

    var vau = aka*deka*tuna*four;

    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 3)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));
    var tuna = Number(prompt("Enter You're Three Value"));

    var vau = aka*deka*tuna;

    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 2)
{
    var aka = Number(prompt("Enter You're Frist Value"));
    var deka = Number(prompt("Enter You're Second Value"));

    var vau = aka*deka;

    document.getElementById('tridnum').innerHTML= vau;
}

else if (nummarks == 1)
{
    alert("You're Number is Uncorrect")
}

else if (nummarks > 10)
{
    alert("You're Number is Uncorrect")
}

else
{
    alert("You're Number is Uncorrect")
}