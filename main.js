<script type="text/javascript'>
function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="http://www.codingforums.com"
    var link2="http://www.cssdrive.com"
    var link3="http://www.dynamicdrive.com"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}
</script>
<form>
<input type="button" value="random link!" onClick="random_3()">
</form>
