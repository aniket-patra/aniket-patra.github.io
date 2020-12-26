var nameVar=localStorage.getItem('userName');
if (nameVar==null)
{
    nameVar=""
}
document.getElementById('headEdit').innerHTML="Thank You "+nameVar;
localStorage.clear();