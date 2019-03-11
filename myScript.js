function msg() {
  var x = "User-agent header sent: " + navigator.userAgent;
  var a = x.search(/windows/i);
  var b = x.search(/android/i);
  var c = x.search(/macintosh/i);
  var d = x.search(/iphone/i);
  var e = x.search(/ipad/i);
  if(a>-1)
  alert("This page isn't completely ready yet!! But have fun on your Windows Device.");

  if(b>-1)
  alert("This page isn't ready for your Android device. But do check it out on PC.");

  if(c>-1)
  alert("This page isn't completely ready yet!! But have fun on your Apple Device.");

  if(d>-1)
  alert("This page isn't ready for your iPhone device. But do check it out on PC/MAC.");

  if(e>-1)
  alert("I don't know if this page will work on your iPad but have fun on PC/MAC.");
}

function msgTweet()
{
  alert("This is fun. Actually, I don't have tweeter account but it looks beautiful on my site! Forgive me?");
}

function msgGplus()
{
  alert("This is fun. Actually, I don't have Google Plus account but it looks beautiful on my site! Forgive me?");
}
