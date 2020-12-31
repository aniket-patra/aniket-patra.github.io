var nameVar=localStorage.getItem('userName');
if (nameVar==null)
{
    nameVar=""
}
document.getElementById('headEdit').innerHTML="Thank You "+nameVar;
localStorage.clear();

var i = 8;
      setInterval(function () {
        document.getElementById("counter").innerHTML = i;
        i = i - 1;

        if (i == -1) {
          window.location.href = "https://aniket-patra.github.io/";
        }
      }, 1000);