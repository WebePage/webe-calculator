var ham = document.querySelector(".line");
var nav = document.querySelector("nav");
var link = document.querySelectorAll('nav li');

ham.addEventListener("click", () => {
    nav.classList.toggle("open");
})


function num(max)
{
    

    if (document.getElementById('texting').value != "0")
    {
        document.getElementById('texting').value = document.getElementById('texting').value += max
    }

    else
    {
        document.getElementById('texting').value = document.getElementById('texting').value = max
    }
}

function Allclr()
{
    document.getElementById('texting').value = ""
}


function ekvl()
{


    if (document.getElementById('texting').value)
    {
        try
        {
            document.getElementById('texting').value = eval(document.getElementById('texting').value)
        }

        catch
        {
            alert('Plese Enter Correct value')
        }

        document.getElementById('texting').value = eval(document.getElementById('texting').value)
    }
}

