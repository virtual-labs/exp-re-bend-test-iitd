
// var l1 =0;
// var b1 =0;
// var d1 =0;

// var a1 =0;
// var i1 =0;

// var el1 =0;
// var den1 =0;
// var vn =0;
// var freq1 =0;

function navNext1()
{
        document.getElementById("canvas1").style.visibility="hidden";
        document.getElementById("canvas2").style.visibility="visible";//canvas2
}

function navNext2()
{
        document.getElementById("canvas2").style.visibility="hidden";
        document.getElementById("canvas3").style.visibility="visible";//canvas2
}

function navNext3()
{
        document.getElementById("canvas3").style.visibility="hidden";
        document.getElementById("canvas4").style.visibility="visible";//canvas4

        
}

function navNext4()
{
        document.getElementById("canvas4").style.visibility="hidden";
        document.getElementById("canvas5").style.visibility="visible";//canvas2
        
}

var tb1 = 0;
var tb2 = 0;

function navNext5()
{
        document.getElementById("canvas5").style.visibility="hidden";
        document.getElementById("canvas6").style.visibility="visible";//canvas2


        if (g1 == "101")
        {
            tb1 = "Fe415";
        }

        if (g1 == "102")
        {
            tb1 = "Fe415D";
        }

        if (g1 == "103")
        {
            tb1 = "Fe415S";
        }

        if (g1 == "104")
        {
            tb1 = "Fe500";
        }

        if (g1 == "105")
        {
            tb1 = "Fe500D";
        }

        if (g1 == "106")
        {
            tb1 = "Fe500S";
        }

        if (g1 == "107")
        {
            tb1 = "Fe550";
        }

        if (g1 == "108")
        {
            tb1 = "Fe550D";
        }

        if (g1 == "109")
        {
            tb1 = "Fe600";
        }

        if (g1 == "110")
        {
            tb1 = "Fe650";
        }

        if (g1 == "111")
        {
            tb1 = "Fe700";
        }

        if (d1 == "20")
        {
            tb2 = "Up to and including 20 mm";
        }         

        if (d1 == "25")
        {
            tb2 = "Over 20 mm";
        }          


        document.getElementById("val1").innerHTML = tb1;
        // document.getElementById("val2").innerHTML = l1;
        document.getElementById("val3").innerHTML = d1;
        document.getElementById("val4").innerHTML = m1;
        document.getElementById("val5").innerHTML = "No";
}

function navNext6()
{
        document.getElementById("canvas5").style.visibility="hidden";
        document.getElementById("canvas7").style.visibility="visible";//canvas2


        if (g1 == "101")
        {
            tb1 = "Fe415";
        }

        if (g1 == "102")
        {
            tb1 = "Fe415D";
        }

        if (g1 == "103")
        {
            tb1 = "Fe415S";
        }

        if (g1 == "104")
        {
            tb1 = "Fe500";
        }

        if (g1 == "105")
        {
            tb1 = "Fe500D";
        }

        if (g1 == "106")
        {
            tb1 = "Fe500S";
        }

        if (g1 == "107")
        {
            tb1 = "Fe550";
        }

        if (g1 == "108")
        {
            tb1 = "Fe550D";
        }

        if (g1 == "109")
        {
            tb1 = "Fe600";
        }

        if (g1 == "110")
        {
            tb1 = "Fe650";
        }

        if (g1 == "111")
        {
            tb1 = "Fe700";
        }

        if (d1 == "20")
        {
            tb2 = "Up to and including 20 mm";
        }         

        if (d1 == "25")
        {
            tb2 = "Over 20 mm";
        }          

        document.getElementById("val11").innerHTML = tb1;
        // document.getElementById("val21").innerHTML = l1;
        document.getElementById("val31").innerHTML = d2;
        document.getElementById("val41").innerHTML = m1;
        document.getElementById("val51").innerHTML = "Yes";
 
}

 
function navNext7()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

}

function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

}

var c1=0; 
var z1=0;

function zoomband1()

{
            document.getElementById("arrowzoomin").style.visibility="hidden";
            document.getElementById("zoomband_tb").style.visibility="hidden";
            document.getElementById("zoomimg1").style.visibility="visible";
            document.getElementById("zoomimg2").style.visibility="visible";
            document.getElementById("seletext1").style.visibility="visible";
            document.getElementById("seletext2").style.visibility="visible";

        /* if (m1%2 == 0)
        {
            
            c1 =5;
            // alert(c1);
            document.getElementById("seletext1").style.visibility="visible";
            document.getElementById("selectbar").style.visibility="visible";
            document.getElementById("subbtn1").style.visibility="visible";
            document.getElementById("step5_a").style.visibility="hidden";
            document.getElementById("step5_b").style.visibility="visible";
        } 

        if (m1%2 == 1)
        {
            document.getElementById("arrowzoomin").style.visibility="hidden";
            document.getElementById("zoomband_tb").style.visibility="hidden";
            document.getElementById("zoomimg2").style.visibility="visible";
            c1 =6;
            // alert(c1);
            document.getElementById("seletext1").style.visibility="visible";
            document.getElementById("selectbar").style.visibility="visible";
            document.getElementById("subbtn1").style.visibility="visible";
            document.getElementById("step5_a").style.visibility="hidden";
            document.getElementById("step5_b").style.visibility="visible";
        }*/

}

function selectimage1()
{
    z1 = document.getElementById("selectbar").value;

    z1 = parseInt(z1);

    if (c1 == 6 && z1 == 1) 
    {
        // alert(c1);
    document.getElementById("selecttext1").innerHTML="&nbsp;";

    document.getElementById("nextButton5b").style.visibility="visible";
    document.getElementById("arrowcubox5").style.visibility="visible";
    document.getElementById("nextButton5").style.visibility="hidden";
    }

    else if (c1 == 5 && z1 == 2) 
    {
        // alert(c1);
    document.getElementById("selecttext1").innerHTML="&nbsp;";

    document.getElementById("nextButton5").style.visibility="visible";
    document.getElementById("arrowcubox5").style.visibility="visible";
    document.getElementById("nextButton5b").style.visibility="hidden";
    }

    else
    {
        document.getElementById("selecttext1").innerHTML="Wrong";
    }

}



var c2=0; 
var z2=0;

function zoomband2()

{
            document.getElementById("arrowzoomin2").style.visibility="hidden";
            document.getElementById("zoomband_tb2").style.visibility="hidden";
            document.getElementById("zoomimg3").style.visibility="visible";
            document.getElementById("zoomimg4").style.visibility="visible";
            document.getElementById("seletext3").style.visibility="visible";
            document.getElementById("seletext4").style.visibility="visible";

        /* if (m2%2 == 0)
        {
            document.getElementById("arrowzoomin2").style.visibility="hidden";
            document.getElementById("zoomband_tb2").style.visibility="hidden";
            document.getElementById("zoomimg3").style.visibility="visible";
            c2 =5;
            // alert(c1);
            document.getElementById("seletext2").style.visibility="visible";
            document.getElementById("selectbar2").style.visibility="visible";
            document.getElementById("subbtn2").style.visibility="visible";
            document.getElementById("step15_a").style.visibility="hidden";
            document.getElementById("step15_b").style.visibility="visible";
        } 

        if (m2%2 == 1)
        {
            document.getElementById("arrowzoomin2").style.visibility="hidden";
            document.getElementById("zoomband_tb2").style.visibility="hidden";
            document.getElementById("zoomimg4").style.visibility="visible";
            c2 =6;
            // alert(c1);
            document.getElementById("seletext2").style.visibility="visible";
            document.getElementById("selectbar2").style.visibility="visible";
            document.getElementById("subbtn2").style.visibility="visible";
            document.getElementById("step15_a").style.visibility="hidden";
            document.getElementById("step15_b").style.visibility="visible";
        }*/

}

function selectimage2()
{
    z2 = document.getElementById("selectbar2").value;

    z2 = parseInt(z2);

    if (c2 == 6 && z2 == 1) 
    {
        // alert(c1);
    document.getElementById("selecttext2").innerHTML="&nbsp;";

    document.getElementById("nextButton15b").style.visibility="visible";
    document.getElementById("arrowcubox15").style.visibility="visible";
    document.getElementById("nextButton15").style.visibility="hidden";
    }

    else if (c2 == 5 && z2 == 2) 
    {
        // alert(c1);
    document.getElementById("selecttext2").innerHTML="&nbsp;";

    document.getElementById("nextButton15").style.visibility="visible";
    document.getElementById("arrowcubox15").style.visibility="visible";
    document.getElementById("nextButton15b").style.visibility="hidden";
    }

    else
    {
        document.getElementById("selecttext2").innerHTML="Wrong";
    }

}
// function navNext5()

// {

//         document.getElementById("canvas5").style.visibility="hidden";

//         document.getElementById("canvas6").style.visibility="visible";

        // document.getElementById("arrow6").style.visibility="visible";

        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

// }


// function navNext6()

// {

//         document.getElementById("canvas6").style.visibility="hidden";

//         document.getElementById("canvas7").style.visibility="visible";

// }



        

    // if (size == 500)//numbox == 2.33 && size == 10)
    // {
    //     document.getElementById("abox").innerHTML = 120; 
    // }
    // else if (size == 700)//numbox == 5.25 && size == 15)
    // {
    //     document.getElementById("abox").innerHTML = 190;
    // }
    // else
    // {
    //     alert("Wrong");
    // }



function navfsdNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

        // document.getElementById("rarrow6").style.visibility="visible";
setTimeout(function()

    {

    document.getElementById("arrowrestart").style.visibility="visible";

    document.getElementById("resetbutton").style.visibility="visible";

    document.getElementById("thanku").style.visibility="visible";
    
    },1000);
}

function navNext9a()
{

        document.getElementById("canvas9a").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

        document.getElementById("rarrow6").style.visibility="visible";

}

function navNext10()
{

        document.getElementById("canvas10").style.visibility="hidden";

        document.getElementById("canvas11").style.visibility="visible";

        

        // if (size == 500)//numbox == 2.33 && size == 10)
        // {
        //     document.getElementById("bbox").innerHTML = 99; 
        // }
        // else if (size == 700)//numbox == 5.25 && size == 15)
        // {
        //     document.getElementById("bbox").innerHTML = 148;
        // }
        // else
        // {
        //     alert("Wrong");
        // }

}

function navNext11()
{

        document.getElementById("canvas11").style.visibility="hidden";

        document.getElementById("canvas12").style.visibility="visible";

        // document.getElementById("get1").innerHTML = l1;
        // document.getElementById("get2").innerHTML = l2;
        // document.getElementById("get3").innerHTML = l3;
        // document.getElementById("get4").innerHTML = freq1;
        // document.getElementById("get5").innerHTML = freq2;
        // document.getElementById("get6").innerHTML = freq3;


        // document.getElementById("sarrow6").style.visibility="visible";

}

function navNext12()
{

        document.getElementById("canvas12").style.visibility="hidden";

        document.getElementById("canvas13").style.visibility="visible";

        // document.getElementById("get11").innerHTML = el1;
        // document.getElementById("get22").innerHTML = el2;
        // document.getElementById("get33").innerHTML = el3;
        // document.getElementById("get44").innerHTML = freq1;
        // document.getElementById("get55").innerHTML = freq2;
        // document.getElementById("get66").innerHTML = freq3;
        

}


function navNext13()
{

        document.getElementById("canvas13").style.visibility="hidden";

        document.getElementById("canvas14").style.visibility="visible";
}

function navNext14()
{
        document.getElementById("canvas14").style.visibility="hidden";

        document.getElementById("canvas15").style.visibility="visible";
}


var tb1 = 0;
var tb2 = 0;

function navNext15()
{
        document.getElementById("canvas15").style.visibility="hidden";
        document.getElementById("canvas16").style.visibility="visible";//canvas2
  
        if (g2 == "191")
        {
            tb1 = "Fe415 & Fe500";
        }

        if (g2 == "192")
        {
            tb1 = "Fe415D & Fe500D";
        }

        if (g2 == "193")
        {
            tb1 = "Fe415S & Fe500S";
        }

        if (g2 == "194")
        {
            tb1 = "Fe550 & Fe600";
        }

        if (g2 == "195")
        {
            tb1 = "Fe550D";
        }

        if (g2 == "196")
        {
            tb1 = "Fe650 & Fe700";
        }


        // if (d2 == "10")
        // {
        //     tb2 = "Up to and including 10 mm";
        // }         

        // if (d2 == "15")
        // {
        //     tb2 = "Over 10 mm";
        // }          


        document.getElementById("valv1").innerHTML = tb1;
        // document.getElementById("valv2").innerHTML = l2;
        document.getElementById("valv3").innerHTML = d2;
        document.getElementById("valv4").innerHTML = m2;
        document.getElementById("valv5").innerHTML = "No";
}

function navNext16()
{
        document.getElementById("canvas15").style.visibility="hidden";
        document.getElementById("canvas17").style.visibility="visible";//canvas2


        if (g2 == "191")
        {
            tb1 = "Fe415 & Fe500";
        }

        if (g2 == "192")
        {
            tb1 = "Fe415D & Fe500D";
        }

        if (g2 == "193")
        {
            tb1 = "Fe415S & Fe500S";
        }

        if (g2 == "194")
        {
            tb1 = "Fe550 & Fe600";
        }

        if (g2 == "195")
        {
            tb1 = "Fe550D";
        }

        if (g2 == "196")
        {
            tb1 = "Fe650 & Fe700";
        }


        // if (d2 == "10")
        // {
        //     tb2 = "Up to and including 10 mm";
        // }         

        // if (d2 == "15")
        // {
        //     tb2 = "Over 10 mm";
        // }  

        document.getElementById("valv11").innerHTML = tb1;
        // document.getElementById("valv21").innerHTML = l2;
        document.getElementById("valv31").innerHTML = d2;
        document.getElementById("valv41").innerHTML = m2;
        document.getElementById("valv51").innerHTML = "Yes";
 
}


function reset()
{
    location.reload();
}






////////////===========   Specimen 1  =================//////////



var l1 =0;
var d1 =0;
var g1 =0;
var m1 =0;
var mx1 =0;

var l2 =0;
var d2 =0;
var g2 =0;
var m2 =0;

var el1 =0;


var vn =0;
var freq1 =0;
var g11 =0;
var g22 =0;
var g33 =0;
var g44 =0;
var g55 =0;
var g66 =0;
var g77 =0;
var g88 =0;
var g99 =0;
var g1010 =0;
var g1111 =0;

var gt11 =0;
var gt22 =0;
var gt33 =0;
var gt44 =0;
var gt55 =0;
var gt66 =0;
var gt77 =0;
var gt88 =0;
var gt99 =0;
var gt1010 =0;
var gt1111 =0;

function agesizeIn()

{
    l1 = document.getElementById("length1").value;
    d1 = document.getElementById("diameter1").value;
    g1 = document.getElementById("grade1").value;
    m1 = document.getElementById("mandri1").value;

l1 = parseInt(l1);

d1 = parseInt(d1);

    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

	// a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l1 !== "" && d1 !== "" && g1 !== "" && m1 !== "")
    {
        // alert("naveen");
       

if (d1<= "20") {

    g11 = "3";
    g22 = "2";
    g33 = "2";
    g44 = "4";
    g55 = "3";
    g66 = "3";
    g77 = "5";
    g88 = "4";
    g99 = "5";
    g1010 = "6";
    g1111 = "7";
}

if (d1>"20") {
    g11 = "4";
    g22 = "3";
    g33 = "3";
    g44 = "5";
    g55 = "4";
    g66 = "4";
    g77 = "6";
    g88 = "5";
    g99 = "6";
    g1010 = "7";
    g1111 = "8";
}

// for 20-

    if (l1 >= "500" && d1 <= "20" && g1 == "101" && m1 == g11 * d1) 
        {
          document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";

            // mx1 = m1 * d1;

            // alert(mx1);
            // alert("101");  
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "102" && m1 == g22 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "103" && m1 == g33 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "104" && m1 == g44 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "105" && m1 == g55 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "106" && m1 == g66 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "107" && m1 == g77 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "108" && m1 == g88 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "109" && m1 == g99 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "110" && m1 == g1010 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 <= "20" && g1 == "111" && m1 == g1111 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

// for 20+

    else if (l1 >= "500" && d1 > "20" && g1 == "101" && m1 == g11 * d1) 
        {
          document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("101");
            // alert("20+");  
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "102" && m1 == g22 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("20+"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "103" && m1 == g33 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "104" && m1 == g44 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "105" && m1 == g55 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "106" && m1 == g66 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "107" && m1 == g77 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "108" && m1 == g88 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "109" && m1 == g99 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "110" && m1 == g1010 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l1 >= "500" && d1 > "20" && g1 == "111" && m1 == g1111 * d1)
        {
            document.getElementById("arrownext3").style.visibility="visible";
            document.getElementById("nextButton3").style.visibility="visible";
            document.getElementById("fillBox").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else
        {
            document.getElementById("fillBox").innerHTML = "Check correct answer according to table";
            document.getElementById("arrownext3").style.visibility="hidden";
            document.getElementById("nextButton3").style.visibility="hidden";
        }

// alert(g1);    	
    }

else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
        document.getElementById("arrownext3").style.visibility="hidden";
        document.getElementById("nextButton3").style.visibility="hidden";
    }

}


function agesizeIn2()

{
    l2 = document.getElementById("length2").value;
    d2 = document.getElementById("diameter2").value;
    g2 = document.getElementById("grade2").value;
    m2 = document.getElementById("mandri2").value;

l2 = parseInt(l2);


// alert("out");
    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

    // a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l2 !== "" && d2 !== "" && g2 !== "" && m2 !== "")
    {
        // alert("naveen");

if (d2<= "10") {

    gt11 = "5";
    gt22 = "4";
    gt33 = "4";
    gt44 = "7";
    gt55 = "6";
    gt66 = "7";
}

if (d2>"10") {
    gt11 = "7";
    gt22 = "6";
    gt33 = "6";
    gt44 = "9";
    gt55 = "7";
    gt66 = "9";
}
       
// for 20-

    if (l2 >= "500" && d2 <= "10" && g2 == "191" && m2 == gt11 * d2) 
        {
          document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            document.getElementById("mandri2").placeholder = d2 * m2;
            // alert("101");  
        }

    else if (l2 >= "500" && d2 <= "10" && g2 == "192" && m2 == gt22 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 <= "10" && g2 == "193" && m2 == gt33 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 <= "10" && g2 == "194" && m2 == gt44 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 <= "10" && g2 == "195" && m2 == gt55 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 <= "10" && g2 == "196" && m2 == gt66 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

// for 10+

    else if (l2 >= "500" && d2 > "10" && g2 == "191" && m2 == gt11 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 > "10" && g2 == "192" && m2 == gt22 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 > "10" && g2 == "193" && m2 == gt33 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 > "10" && g2 == "194" && m2 == gt44 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }

    else if (l2 >= "500" && d2 > "10" && g2 == "195" && m2 == gt55 * d2)
        {
            document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("102"); 
        }



    else if (l2 >= "500" && d2 > "10" && g2 == "196" && m2 == gt66 * d2) 
        {
          document.getElementById("arrownext9").style.visibility="visible";
            document.getElementById("nextButton9").style.visibility="visible";
            document.getElementById("fillBox2").innerHTML = "&nbsp;";
            // alert("101");  
        }

    else
        {
            document.getElementById("fillBox2").innerHTML = "Check correct answer according to table";
            document.getElementById("arrownext9").style.visibility="hidden";
            document.getElementById("nextButton9").style.visibility="hidden";
        }

// alert(g1);       
    }

else
    {
        document.getElementById("fillBox2").innerHTML = "Please Enter all Values";
        document.getElementById("arrownext9").style.visibility="hidden";
        document.getElementById("nextButton9").style.visibility="hidden";
    }

}


function movetomachine()
{
    document.getElementById("aperatus_tb").style.visibility="hidden";
    document.getElementById("arrowreberin").style.visibility="hidden";
    document.getElementById("aperatus1").style.animation="insertmachine 4s forwards linear";

    setTimeout(function()
    {
        document.getElementById("pressure_tb").style.visibility="visible";
        document.getElementById("arrowpressurein").style.visibility="visible";

        document.getElementById("step1a_a").style.visibility="hidden";
        document.getElementById("stp1").innerHTML="&nbsp;2&nbsp;";
        document.getElementById("step1a_b").style.visibility="visible";
    },4500);
}

function movetomachine2()
{
    document.getElementById("aperatus_tb2").style.visibility="hidden";
    document.getElementById("arrowreberin2").style.visibility="hidden";
    document.getElementById("aperatus11").style.animation="insertmachine 4s forwards linear";

    setTimeout(function()
    {
        document.getElementById("pressure_tb2").style.visibility="visible";
        document.getElementById("arrowpressurein2").style.visibility="visible";

        document.getElementById("step10a_a").style.visibility="hidden";
        document.getElementById("stp10").innerHTML="&nbsp;2&nbsp;";
        document.getElementById("step10a_b").style.visibility="visible";
    },4500);
}


function movetomachine3()
{
    document.getElementById("aperatus_tb3").style.visibility="hidden";
    document.getElementById("arrowreberin3").style.visibility="hidden";
    document.getElementById("aperatus22").style.animation="insertmachinebandtype 4s forwards linear";

    setTimeout(function()
    {
        document.getElementById("pressure_tb3").style.visibility="visible";
        document.getElementById("arrowpressurein3").style.visibility="visible";

        document.getElementById("step13_a").style.visibility="hidden";
        document.getElementById("stp13").innerHTML="&nbsp;6&nbsp;";
        document.getElementById("step13_b").style.visibility="visible";
    },4500);
}

function startpressure1()
{
    document.getElementById("pressure_tb").style.visibility="hidden";
    document.getElementById("arrowpressurein").style.visibility="hidden";

document.getElementById("jackhandle1").style.animation="movejackhandle1 2s 4 linear";

    document.getElementById("movehammer").style.animation="hammeranim 7s forwards linear";
    setTimeout(function()
    {
       document.getElementById("aperatus1").style.visibility="hidden";
       document.getElementById("aperatus2").style.visibility="visible";
       document.getElementById("aperatus2").style.animation="hammeranim2 2s forwards linear";

       setTimeout(function()
        {
           document.getElementById("aperatus2").style.visibility="hidden";
           document.getElementById("aperatus3").style.visibility="visible";
           document.getElementById("aperatus3").style.animation="hammeranim3 3s forwards linear";
        },2000);

       setTimeout(function()
        {
            document.getElementById("movehammer").style.animation="hammeranimreturn 4s forwards linear";

            setTimeout(function()
            {
                document.getElementById("arrownext4").style.visibility="visible";
                document.getElementById("nextButton4").style.visibility="visible";
            //     document.getElementById("aperatus3").style.animation="removetomachine 4s forwards linear";
            },4500);

        },7000);

    },2000);

}

function move1protector()
{
    document.getElementById("arrowmoveangle").style.visibility="hidden";
    document.getElementById("moveangle_tb").style.visibility="hidden";
    document.getElementById("moveangle1").style.animation="moveangle11 2s forwards linear";
    
    setTimeout(function()
    {
        document.getElementById("arrownext11").style.visibility="visible";
        document.getElementById("nextButton11").style.visibility="visible";  
    },2500);
    // setTimeout(function()
    // {
    //     document.getElementById("protectorfullpart").style.visibility="hidden";
    //     document.getElementById("protectorpart").style.visibility="visible";
    //     document.getElementById("protectbackpart").style.visibility="visible";
    //     document.getElementById("arrowuseprotect").style.visibility="visible";
    //     document.getElementById("useprotect_tb").style.visibility="visible";

    // },2000);

}


function move2protector()
{
    document.getElementById("arrowmoveangle2").style.visibility="hidden";
    document.getElementById("moveangle_tb2").style.visibility="hidden";
    document.getElementById("moveangle2").style.animation="moveangle22 2s forwards linear";
    
    // setTimeout(function()
    // {
    //     document.getElementById("protectorfullpart2").style.visibility="hidden";
    //     document.getElementById("protectorpart2").style.visibility="visible";
    //     document.getElementById("protectbackpart2").style.visibility="visible";
    //     document.getElementById("arrowuseprotect2").style.visibility="visible";
    //     document.getElementById("useprotect_tb2").style.visibility="visible";
    //     document.getElementById("step14_a").style.visibility="hidden";
    //     document.getElementById("step14_b").style.visibility="visible";

    // },2000);
    setTimeout(function()
    {
        document.getElementById("arrownext14").style.visibility="visible";
        document.getElementById("nextButton14").style.visibility="visible";  
    },2500);

}

function useprotector()
{
    document.getElementById("arrowuseprotect").style.visibility="hidden";
    document.getElementById("useprotect_tb").style.visibility="hidden";

    document.getElementById("protectorpart").style.animation="move_protector2 3s forwards linear";

    setTimeout(function()
    {
        document.getElementById("arrownext11").style.visibility="visible";
        document.getElementById("nextButton11").style.visibility="visible";  
    },4000);

}


function useprotector2()
{
    document.getElementById("arrowuseprotect2").style.visibility="hidden";
    document.getElementById("useprotect_tb2").style.visibility="hidden";

    document.getElementById("protectorpart2").style.animation="move_protector22 3s forwards linear";

    setTimeout(function()
    {
        document.getElementById("arrownext14").style.visibility="visible";
        document.getElementById("nextButton14").style.visibility="visible";  
    },4000);

}


function movewbcap()
{
    document.getElementById("movewbcap_tb").style.visibility="hidden";
    document.getElementById("arrowmovewbcap").style.visibility="hidden";
    document.getElementById("wb_cap").style.animation="wb_capanimation 2s forwards linear";

    setTimeout(function()
    {
        document.getElementById("movebendreber_tb").style.visibility="visible";
        document.getElementById("arrowbendreber").style.visibility="visible";
        document.getElementById("step12_a").style.visibility="hidden";
        document.getElementById("step12_b").style.visibility="visible";
        // movebendreber1()
    },2000);
}


function movewbcap3()
{
    document.getElementById("movewbcap_tb3").style.visibility="hidden";
    document.getElementById("arrowmovewbcap3").style.visibility="hidden";
    document.getElementById("wb_cap").style.animation="wb_capanimation 2s forwards linear";

    setTimeout(function()
    {
        document.getElementById("bandreber1").style.animation="band_raberoutwb 3s forwards linear";
        setTimeout(function()
            {
                document.getElementById("arrownext12").style.visibility="visible";
                document.getElementById("nextButton12").style.visibility="visible";
        
        // document.getElementById("step12_f").style.visibility="hidden";
        // document.getElementById("step12_g").style.visibility="visible";

            },3500);  

    },2500);
}


function movebendreber1()
{
    document.getElementById("movebendreber_tb").style.visibility="hidden";
    document.getElementById("arrowbendreber").style.visibility="hidden";
    document.getElementById("bandreber1").style.animation="band_raberinwb 3s forwards linear";


    setTimeout(function()
    {
        // document.getElementById("movecapclose_tb").style.visibility="visible";
        // document.getElementById("arrowmovewbcap2").style.visibility="visible";
        // document.getElementById("step12_b").style.visibility="hidden";
        // document.getElementById("step12_c").style.visibility="visible";
        movewbcapclose()
    },3000);
}

function movewbcapclose()
{
    document.getElementById("movecapclose_tb").style.visibility="hidden";
    document.getElementById("arrowmovewbcap2").style.visibility="hidden";
    document.getElementById("wb_cap").style.animation="wb_capanimationback 3s forwards linear";

    setTimeout(function()
    {
        // document.getElementById("arrowpowon1").style.visibility="visible";
        // document.getElementById("poweron_tb").style.visibility="visible";
        // document.getElementById("step12_c").style.visibility="hidden";
        // document.getElementById("step12_d").style.visibility="visible";
        turnonwb()
    },3000);
}


function turnonwb()
{
        document.getElementById("arrowpowon1").style.visibility="hidden";
        document.getElementById("poweron_tb").style.visibility="hidden";

        document.getElementById("stpwtch1").style.visibility="visible";
        document.getElementById("stpwtch_numberstable").style.visibility="visible";
        document.getElementById("stpwtch_number").style.visibility="visible";
        document.getElementById("stpwtch_text").style.visibility="visible";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("stpwtch_number", 30, 0, 15000);
        /*Countdown Timer Animation Code End*/

        setTimeout(function()
        {
            document.getElementById("stpwtch1").style.visibility="hidden";
            document.getElementById("stpwtch_numberstable").style.visibility="hidden";
            document.getElementById("stpwtch_number").style.visibility="hidden";
            document.getElementById("stpwtch_text").style.visibility="hidden";

            // document.getElementById("arrowpowoff1").style.visibility="visible";
            // document.getElementById("poweroff_tb").style.visibility="visible";
            // document.getElementById("step12_d").style.visibility="hidden";
            // document.getElementById("step12_e").style.visibility="visible";

            turnoffwb()

        },15500);
} 

function turnoffwb()
{
        // document.getElementById("arrowpowoff1").style.visibility="hidden";
        // document.getElementById("poweroff_tb").style.visibility="hidden";

        // document.getElementById("arrowmovewbcap3").style.visibility="visible";
        // document.getElementById("movewbcap_tb3").style.visibility="visible";
        // document.getElementById("step12_e").style.visibility="hidden";
        // document.getElementById("step12_f").style.visibility="visible";
        movewbcap3()
}

function startpressure2()
{
    document.getElementById("pressure_tb2").style.visibility="hidden";
    document.getElementById("arrowpressurein2").style.visibility="hidden";

document.getElementById("jackhandle2").style.animation="movejackhandle1 2s 2 linear";

    document.getElementById("movehammer2").style.animation="hammeranim21 4s forwards linear";
    setTimeout(function()
    {
       document.getElementById("aperatus11").style.visibility="hidden";
       document.getElementById("aperatus21").style.visibility="visible";
       document.getElementById("aperatus21").style.animation="hammeranim22 2s forwards linear";

       // setTimeout(function()
       //  {
       //     document.getElementById("aperatus2").style.visibility="hidden";
       //     document.getElementById("aperatus3").style.visibility="visible";
       //     document.getElementById("aperatus3").style.animation="hammeranim3 3s forwards linear";
       //  },2000);

       setTimeout(function()
        {
            document.getElementById("movehammer2").style.animation="hammeranimreturn21 4s forwards linear";

            setTimeout(function()
            {
                document.getElementById("arrownext10").style.visibility="visible";
                document.getElementById("nextButton10").style.visibility="visible";
            //     document.getElementById("aperatus3").style.animation="removetomachine 4s forwards linear";
            },4500);

        },7000);

    },2000);

}

function startpressure3()
{
    document.getElementById("pressure_tb3").style.visibility="hidden";
    document.getElementById("arrowpressurein3").style.visibility="hidden";


    document.getElementById("jackhandle3").style.animation="movejackhandle1 2s 2 linear";
    document.getElementById("movehammer3").style.animation="hammeranim157 4s forwards linear";
    setTimeout(function()
    {
       document.getElementById("aperatus22").style.visibility="hidden";
       document.getElementById("aperatus23").style.visibility="visible";
       document.getElementById("aperatus23").style.animation="hammeranim157changesize 2s forwards linear";

       setTimeout(function()
        {
           document.getElementById("arrownext13").style.visibility="visible";
           document.getElementById("nextButton13").style.visibility="visible";
       //     document.getElementById("aperatus3").style.animation="hammeranim3 3s forwards linear";
        },2200);

       setTimeout(function()
        {
            // document.getElementById("movehammer2").style.animation="hammeranimreturn21 4s forwards linear";

            setTimeout(function()
            {
                document.getElementById("arrownext10").style.visibility="visible";
                document.getElementById("nextButton10").style.visibility="visible";
            //     document.getElementById("aperatus3").style.animation="removetomachine 4s forwards linear";
            },4500);

        },7000);

    },2000);

}


var nq1=0;
var nq2=0;
var nq3=0;

function calc1()
{
    nq1 = document.getElementById("csIn1").value;

    if (nq1 == 110.4)
    {
        document.getElementById("csa1").style.visibility="visible";
        document.getElementById("arw2b").style.visibility="visible";
        document.getElementById("nb2b").style.visibility="visible";
        document.getElementById("fillBox2").innerHTML = "&nbsp;";
    }
    else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter Correct Value = 110.4";
        //alert("Wrong");
    } 
}

function calc2()
{
    nq2 = document.getElementById("csIn2").value;

    if (nq2 == 59.4)
    {
        document.getElementById("csa2").style.visibility="visible";
        document.getElementById("arw2c").style.visibility="visible";
        document.getElementById("nb2c").style.visibility="visible";
        document.getElementById("fillBox2").innerHTML = "&nbsp;";
    }
    else
    {
        document.getElementById("fillBox2").innerHTML = "Please Enter Correct Value = 59.4";
        //alert("Wrong");
    } 
}

function calc3()
{
    nq3 = document.getElementById("csIn3").value;

    if (nq3 == 60)
    {
        document.getElementById("csa3").style.visibility="visible";
        document.getElementById("arw3c").style.visibility="visible";
        document.getElementById("nb3c").style.visibility="visible";
        document.getElementById("fillBox3").innerHTML = "&nbsp;";
    }
    else
    {
        document.getElementById("fillBox3").innerHTML = "Please Enter Correct Value = 60";
        //alert("Wrong");
    } 
}

function ageIn()

{


    el1 = document.getElementById("ele1").value;
    d1 = document.getElementById("den1").value;
    // el1 = document.getElementById("ele1").value;
	// den1 = document.getElementById("den1").value;
    vn = document.getElementById("nv").value;


if (el1 !== "" && d1 !== "" && vn !== "")
{

    document.getElementById("submit12").style.visibility="hidden";

    document.getElementById("arrgerowcubox4").style.visibility="visible";

    document.getElementById("nextButton4").style.visibility="visible";

    document.getElementById("Box1").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box1").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el1*t1*t1*t1;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p1*p1);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d1/t1);

    if (vn == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif1.gif";
    }
    else if (vn == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif2.gif";
    }
    else if (vn == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif3.gif";
    }
    else if (vn == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l1/l1;
    x2= A*sq;
    freq1 = x2.toFixed(2);
    document.getElementById("freqprint").innerHTML = freq1;

    document.getElementById("arrowcubox5").style.visibility="visible";

    document.getElementById("nextButton5").style.visibility="visible";

    document.getElementById("repeat1").style.visibility="visible";

}


////////////===========   Specimen 2  =================//////////



// // var l2 =0;
// // var t2 =0;
// // var d2 =0;
// // var p2 =0;

// var el2 =0;


// var vn2 =0;
// var freq2 =0;


// function agesizeXIn2()

// {

//     // document.getElementById("submit11").style.visibility="hidden";


//     l2 = document.getElementById("length2").value;

//     t2 = document.getElementById("thck2").value;
//     p2 = document.getElementById("poi2").value;

//     // d1 = document.getElementById("dep1").value; 
//     // el1 = document.getElementById("el1").value;

//     // a1 = document.getElementById("area1").value;
//     // i1 = document.getElementById("moment1").value;

// if (l2 !== "" && t2 !== "" && p2 !== "")
//     {
//         document.getElementById("arrowcubox6a").style.visibility="visible";
//         document.getElementById("nextButton6a").style.visibility="visible";
//         document.getElementById("fillBox2").innerHTML = "&nbsp;";
//     }

// else
//     {
//         document.getElementById("fillBox2").innerHTML = "Please Enter all Values";
//     }

// }


function ageIn2()

{


    el2 = document.getElementById("ele2").value;
    d2 = document.getElementById("den2").value;
    // el1 = document.getElementById("ele1").value;
    // den1 = document.getElementById("den1").value;
    vn2 = document.getElementById("nv2").value;


if (el2 !== "" && d2 !== "" && vn2 !== "")
{

    document.getElementById("submit13").style.visibility="hidden";

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    document.getElementById("Box2").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box2").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency2()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el2*t2*t2*t2;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p2*p2);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d2/t2);

    if (vn2 == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif1.gif";
    }
    else if (vn2 == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif2.gif";
    }
    else if (vn2 == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif3.gif";
    }
    else if (vn2 == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l2/l2;
    x2= A*sq;
    freq2 = x2.toFixed(2);
    document.getElementById("freqprint2").innerHTML = freq2;

    document.getElementById("arrowcubox8").style.visibility="visible";

    document.getElementById("nextButton8").style.visibility="visible";

    document.getElementById("repeat2").style.visibility="visible";

}


////////////===========   Specimen 3  =================//////////



var l3 =0;
var t3 =0;
var d3 =0;
var p3 =0;

var el3 =0;


var vn3 =0;
var freq3 =0;


function agesizeIn3()

{

    // document.getElementById("submit11").style.visibility="hidden";


    l3 = document.getElementById("length3").value;

    t3 = document.getElementById("thck3").value;
    p3 = document.getElementById("poi3").value;

    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

    // a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l3 !== "" && t3 !== "" && p3 !== "")
    {
        document.getElementById("arrowcubox9a").style.visibility="visible";
        document.getElementById("nextButton9a").style.visibility="visible";
        document.getElementById("fillBox3").innerHTML = "&nbsp;";
    }

else
    {
        document.getElementById("fillBox3").innerHTML = "Please Enter all Values";
    }

}


function ageIn3()

{


    el3 = document.getElementById("ele3").value;
    d3 = document.getElementById("den3").value;
    // el1 = document.getElementById("ele1").value;
    // den1 = document.getElementById("den1").value;
    vn3 = document.getElementById("nv3").value;


if (el3 !== "" && d3 !== "" && vn3 !== "")
{

    document.getElementById("submit13").style.visibility="hidden";

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    document.getElementById("Box3").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box3").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency3()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el3*t3*t3*t3;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p3*p3);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d3/t3);

    if (vn3 == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif1.gif";
    }
    else if (vn3 == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif2.gif";
    }
    else if (vn3 == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif3.gif";
    }
    else if (vn3 == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l3/l3;
    x2= A*sq;
    freq3 = x2.toFixed(2);
    document.getElementById("freqprint3").innerHTML = freq3;

    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

    // document.getElementById("repeat3").style.visibility="visible";

}
/*
function frequency1()
    {
    
    if(b1 !== "" && d1 !== "")  
    {
    // alert("naveen");
    a1 = b1 * d1;
    i1 = a1*d1*d1/12;

        var j1 = den1*a1;

        var sq1 = Math.sqrt(el1*i1/j1);

        var AA1 = Math.PI*vn*vn/2/l1/l1;

        var x1 = sq1*AA1;
freq1 = x1.toFixed(2);
        document.getElementById("freqprint").innerHTML = freq1;
// alert(vn);
        // switch(vn)
        if (vn == 1) 
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif1.gif";
            } 
        else if (vn == 2)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif2.gif";
            }
        else if (vn == 3)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif3.gif";
            }
        else if (vn == 4)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif4.gif";
            }
        else if (vn == 5)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            document.getElementById("arrowcubox5").style.visibility="visible";

            document.getElementById("nextButton5").style.visibility="visible";

            document.getElementById("repeat1").style.visibility="visible";
        
    }

    else if(a1 !== "" && i1 !== "")  
    {

        var j1 = den1*a1;

        var sq1 = Math.sqrt(el1*i1/j1);

        var AA1 = Math.PI*vn*vn/2/l1/l1;

        var x1 = sq1*AA1;
freq1 = x1.toFixed(2);
        document.getElementById("freqprint").innerHTML = freq1;

        if (vn == 1) 
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif1.gif";
            } 
        else if (vn == 2)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif2.gif";
            }
        else if (vn == 3)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif3.gif";
            }
        else if (vn == 4)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif4.gif";
            }
        else if (vn == 5)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            document.getElementById("arrowcubox5").style.visibility="visible";

            document.getElementById("nextButton5").style.visibility="visible";

            document.getElementById("repeat1").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }


}

////////////===========   Specimen 2  =================//////////



var l2 =0;
var b2 =0;
var d2 =0;

var a2 =0;
var i2 =0;

var el2 =0;
var den2 =0;
var vn2 =0;
var freq2 =0;



function agesizeIn2()

{
    l2 = document.getElementById("length2").value;

    b2 = document.getElementById("bred2").value;
    d2 = document.getElementById("dep2").value;//  
    
    a2 = document.getElementById("area2").value;
    i2 = document.getElementById("moment2").value;

if (l2 !== "" && b2 !== "" && d2 !== "")
    {

        document.getElementById("sizec11").innerHTML= l2 + "m";
        document.getElementById("sizec22").innerHTML= b2 + "m";
        document.getElementById("sizec33").innerHTML= d2 + "m";

        document.getElementById("bm2").style.visibility="visible";
        document.getElementById("notepad2").style.visibility="hidden";

        
        document.getElementById("arrowcubox6").style.visibility="visible";
        document.getElementById("nextButton6").style.visibility="visible";

        document.getElementById("fillBox2").innerHTML = "&nbsp;";


    }
else if  (l2 !== "" && a2 !== "" && i2 !== "") 
{
        document.getElementById("sizec11").innerHTML= l2 + "m";
        

        document.getElementById("bm2").style.visibility="visible";
        document.getElementById("notepad2").style.visibility="hidden";
     
        document.getElementById("arrowcubox6").style.visibility="visible";
        document.getElementById("nextButton6").style.visibility="visible";
 
        document.getElementById("fillBox2").innerHTML = "&nbsp;";

        // document.getElementById("fillBox2").innerHTML = "&nbsp;";
}

    else
    {
        document.getElementById("fillBox2").innerHTML = "Please Enter all Values";
        
        
    }

    

}


function ageIn2()

{

    el2 = document.getElementById("ele2").value;
    den2 = document.getElementById("den2").value;
    vn2 = document.getElementById("nv2").value;  
 
    

if (el2 !== "" && den2 !== "" && vn2 !== "")
    {

    document.getElementById("submit22").style.visibility="hidden";
    
    document.getElementById("notepads2").style.visibility="hidden";

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    document.getElementById("Box2").innerHTML = "&nbsp;";
  
    }
    else
    {
        document.getElementById("Box2").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}




function frequency2()
{
    
    if(b2 !== "" && d2 !== "")  
    {
    // alert("naveen");
    a2 = b2 * d2;
    i2 = a2*d2*d2/12;

        var j2 = den2*a2;

        var sq2 = Math.sqrt(el2*i2/j2);

        var AA2 = Math.PI*vn2*vn2/2/l2/l2;

        var x2 = sq2*AA2;
freq2 = x2.toFixed(2);
        document.getElementById("freqprint2").innerHTML = freq2;
// alert(vn2);
        if (vn2 == 1) 
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif1.gif";
            } 
        else if (vn2 == 2)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif2.gif";
            }
        else if (vn2 == 3)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif3.gif";
            }
        else if (vn2 == 4)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif4.gif";
            }
        else if (vn2 == 5)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            document.getElementById("arrowcubox8").style.visibility="visible";

            document.getElementById("nextButton8").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
        
    }

    else if(a2 !== "" && i2 !== "")  
    {

        var j2 = den2*a2;

        var sq2 = Math.sqrt(el2*i2/j2);

        var AA2 = Math.PI*vn2*vn2/2/l2/l2;

        var x2 = sq2*AA2;
freq2 = x2.toFixed(2);
        document.getElementById("freqprint2").innerHTML = freq2;
// alert(vn2);
        if (vn2 == 1) 
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif1.gif";
            } 
        else if (vn2 == 2)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif2.gif";
            }
        else if (vn2 == 3)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif3.gif";
            }
        else if (vn2 == 4)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif4.gif";
            }
        else if (vn2 == 5)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            
            document.getElementById("arrowcubox8").style.visibility="visible";

            document.getElementById("nextButton8").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }

}



////////////===========   Specimen 3  =================//////////




var l3 =0;
var b3 =0;
var d3 =0;

var a3 =0;
var i3 =0;

var el3 =0;
var den3 =0;
var vn3 =0;
var freq3 =0;



function agesizeIn3()

{
    l3 = document.getElementById("length3").value;

    b3 = document.getElementById("bred3").value;
    d3 = document.getElementById("dep3").value;//  
    
    a3 = document.getElementById("area3").value;
    i3 = document.getElementById("moment3").value;

if (l3 !== "" && b3 !== "" && d3 !== "")
    {

        document.getElementById("sizec111").innerHTML= l3 + "m";
        document.getElementById("sizec222").innerHTML= b3 + "m";
        document.getElementById("sizec333").innerHTML= d3 + "m";

        document.getElementById("bm3").style.visibility="visible";
        document.getElementById("notepad3").style.visibility="hidden";

        
        document.getElementById("arrowcubox9").style.visibility="visible";
        document.getElementById("nextButton9").style.visibility="visible";

        document.getElementById("fillBox3").innerHTML = "&nbsp;";


    }
else if  (l3 !== "" && a3 !== "" && i3 !== "") 
{
        document.getElementById("sizec111").innerHTML= l3 + "m";
        

        document.getElementById("bm3").style.visibility="visible";
        document.getElementById("notepad3").style.visibility="hidden";
     
        document.getElementById("arrowcubox9").style.visibility="visible";
        document.getElementById("nextButton9").style.visibility="visible";
 
        document.getElementById("fillBox3").innerHTML = "&nbsp;";

        // document.getElementById("fillBox2").innerHTML = "&nbsp;";
}

    else
    {
        document.getElementById("fillBox3").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}


function ageIn3()

{

    el3 = document.getElementById("ele3").value;
    den3 = document.getElementById("den3").value;
    vn3 = document.getElementById("nv3").value;  
 
    

if (el3 !== "" && den3 !== "" && vn3 !== "")
    {

    document.getElementById("submit32").style.visibility="hidden";
    
    document.getElementById("notepads3").style.visibility="hidden";

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    document.getElementById("Box3").innerHTML = "&nbsp;";
  
    }
    else
    {
        document.getElementById("Box3").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}


*

function frequency3()
{
    
    if(b3 !== "" && d3 !== "")  
    {
    // alert("naveen");
    a3 = b3 * d3;
    i3 = a3*d3*d3/12;

        var j3 = den3*a3;

        var sq3 = Math.sqrt(el3*i3/j3);

        var AA3 = Math.PI*vn3*vn3/2/l3/l3;

        var x3 = sq3*AA3;
 freq3 = x3.toFixed(2);
        document.getElementById("freqprint3").innerHTML = freq3;
// alert(vn3);
        if (vn3 == 1) 
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif1.gif";
            } 
        else if (vn3 == 2)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif2.gif";
            }
        else if (vn3 == 3)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif3.gif";
            }
        else if (vn3 == 4)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif4.gif";
            }
        else if (vn3 == 5)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            
    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
        
    }

    else if(a3 !== "" && i3 !== "")  
    {

        var j3 = den3*a3;

        var sq3 = Math.sqrt(el3*i3/j3);

        var AA3 = Math.PI*vn3*vn3/2/l3/l3;

         var x3 = sq3*AA3;
 
 freq3 = x3.toFixed(2);
 
        document.getElementById("freqprint3").innerHTML = freq3;
// alert(vn3);
        if (vn3 == 1) 
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif1.gif";
            } 
        else if (vn3 == 2)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif2.gif";
            }
        else if (vn3 == 3)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif3.gif";
            }
        else if (vn3 == 4)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif4.gif";
            }
        else if (vn3 == 5)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            
            
    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }

}

*/





//////////////////////////////////////////////////////////////////////////////





function tunnu()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 4.00 && size == 500)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    
    else if (numbox == 1.80 && size == 700)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>4.00 for<br>100X100X500mm<br>speciman<br><br>1.80 for<br>150X150X700mm<br>speciman";
        
    }
}










function submit11()
{

    
  

}

 // for mesurement bars

function addbar1(){

   
document.getElementById("bar1").style.visibility="visible";

document.getElementById("addbar1").style.visibility="hidden";
document.getElementById("aradd_1").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("step1a_a").style.visibility="hidden";
    document.getElementById("step1a_b").style.visibility="visible";

document.getElementById("addmeasuretape1").style.visibility="visible";
document.getElementById("aradd_1").style.visibility="visible";
    },1000);   
    

} 


function addmeasuretape(){

document.getElementById("addmeasuretape1").style.visibility="hidden";
document.getElementById("aradd_1").style.visibility="hidden";

document.getElementById("measure_tape1").style.visibility="visible";   
document.getElementById("measure_tapeup2").style.visibility="visible";
document.getElementById("measure_tape3").style.visibility="visible";



document.getElementById("addbar1").style.visibility="hidden";
    
    document.getElementById("step1a_b").style.visibility="hidden";
    document.getElementById("step1a_c").style.visibility="visible";
    
document.getElementById("measure_tb1").style.visibility="visible";

document.getElementById("armea_2").style.visibility="visible";


} 


function measurelength()
{

    document.getElementById("measure_tb1").style.visibility="hidden";
    document.getElementById("armea_2").style.visibility="hidden";

    document.getElementById("measure_arrow1").style.visibility="visible";

document.getElementById("measure_tapeup2").style.animation="mesure12 5s linear forwards";
document.getElementById("measure_tape3").style.animation="mesure11 5s linear forwards";

setTimeout(function()
    {
        document.getElementById("measure_arrow2").style.visibility="visible";

        document.getElementById("bar_size1").style.visibility="visible";

        setTimeout(function()
            {
                document.getElementById("arrowcubox1a").style.visibility="visible";
                document.getElementById("nextButton1a").style.visibility="visible";
            },1000);
    },5000);
} 


function addmarker1()
{
    document.getElementById("addmarker1").style.visibility="hidden"; 
    document.getElementById("arrowmarker1").style.visibility="hidden";
    document.getElementById("usemarker").style.visibility="visible";
    document.getElementById("armrkr_1").style.visibility="visible";
    document.getElementById("usemarker_tb").style.visibility="visible";
    
    document.getElementById("step2d_a").style.visibility="hidden";
    document.getElementById("step2d_b").style.visibility="visible";
}

function tickmarker1()
{
    document.getElementById("usemarker_tb").style.visibility="hidden";
    document.getElementById("armrkr_1").style.visibility="hidden"; 
   document.getElementById("usemarker").src="images/handmarker.png";
    document.getElementById("usemarker").style.animation="movemarker1 linear 15s forwards";

setTimeout(function()

    {

    document.getElementById("dash_1").style.visibility="visible";
    
    setTimeout(function()
    {
       document.getElementById("dash_2").style.visibility="visible";
       document.getElementById("mark_1").style.visibility="visible";
       document.getElementById("lmark_1").style.visibility="visible";       
       document.getElementById("lmark_t1").style.visibility="visible"; 
    },800);
    
    setTimeout(function()
    {
       document.getElementById("dash_3").style.visibility="visible";
       document.getElementById("mark_2").style.visibility="visible";
    },1600);
    
    setTimeout(function()
    {
       document.getElementById("dash_4").style.visibility="visible";
       document.getElementById("mark_3").style.visibility="visible"; 
    },2300);
    
    setTimeout(function()
    {
       document.getElementById("dash_5").style.visibility="visible";
       document.getElementById("mark_4").style.visibility="visible"; 
    },3000);
    
    setTimeout(function()
    {
       document.getElementById("dash_6").style.visibility="visible"; 
       document.getElementById("mark_5").style.visibility="visible";
    },3800);
    
    setTimeout(function()
    {
       document.getElementById("dash_7").style.visibility="visible"; 
       document.getElementById("mark_6").style.visibility="visible";
    },4600);
    
    setTimeout(function()
    {
       document.getElementById("dash_8").style.visibility="visible"; 
       document.getElementById("mark_7").style.visibility="visible";
    },5200);
    
    setTimeout(function()
    {
       document.getElementById("dash_9").style.visibility="visible";
       document.getElementById("mark_8").style.visibility="visible"; 
    },6000);
    
    setTimeout(function()
    {
       document.getElementById("dash_10").style.visibility="visible"; 
       document.getElementById("mark_9").style.visibility="visible";
    },6800);
    
    setTimeout(function()
    {
       document.getElementById("dash_11").style.visibility="visible";
       document.getElementById("mark_10").style.visibility="visible"; 
    },7600);
    
    setTimeout(function()
    {
       document.getElementById("dash_12").style.visibility="visible";
       document.getElementById("mark_11").style.visibility="visible"; 
    },8400);
    
    setTimeout(function()
    {
       document.getElementById("dash_13").style.visibility="visible";
       document.getElementById("mark_12").style.visibility="visible"; 
    },9100);
    
    setTimeout(function()
    {
       document.getElementById("dash_14").style.visibility="visible";
       document.getElementById("mark_13").style.visibility="visible"; 
    },9900);
    
    setTimeout(function()
    {
       document.getElementById("dash_15").style.visibility="visible";
       document.getElementById("mark_14").style.visibility="visible"; 
    },10700);
    
    setTimeout(function()
    {
       document.getElementById("dash_16").style.visibility="visible";
       document.getElementById("mark_15").style.visibility="visible"; 
    },11500);
    
    setTimeout(function()
    {
       document.getElementById("dash_17").style.visibility="visible";
       document.getElementById("mark_16").style.visibility="visible";
setTimeout(function()
    {
      document.getElementById("markbig_1").style.visibility="visible";  
    },500);
setTimeout(function()
    {
      document.getElementById("markbig_2").style.visibility="visible";  
    },1000);
setTimeout(function()
    {
      document.getElementById("markbig_3").style.visibility="visible";  
    },1500);
setTimeout(function()
    {
      document.getElementById("markbig_4").style.visibility="visible";  
    },2000);
setTimeout(function()
    {
      document.getElementById("markbig_5").style.visibility="visible";
      document.getElementById("lmark_2").style.visibility="visible";
      document.getElementById("lmark_t2").style.visibility="visible";

    document.getElementById("arrowcubox2c").style.visibility="visible"; 
    document.getElementById("nextButton2c").style.visibility="visible"; 
    },2500);
        
        
        
        
        
               
    },12300);
 
 setTimeout(function()
    {
       document.getElementById("usemarker").src="images/marker.png";
    },15100);












    },1700);
    
    
}


// =====================Specimen 1===================

function addpiler1(){

   
document.getElementById("reber1").style.visibility="visible";
// document.getElementById("sizetext1").style.visibility="visible";
// document.getElementById("size1").style.visibility="visible";
// document.getElementById("sizetext11").style.visibility="visible";
document.getElementById("weight2").style.visibility="visible";
document.getElementById("weighttext1").style.visibility="visible";
document.getElementById("rebertb1").style.visibility="visible";
// document.getElementById("sizetext2").style.visibility="visible";
// document.getElementById("size2").style.visibility="visible";
// document.getElementById("sizetext22").style.visibility="visible";
// document.getElementById("reber3").style.visibility="visible";
// document.getElementById("sizetext3").style.visibility="visible";
// document.getElementById("size3").style.visibility="visible";
// document.getElementById("sizetext33").style.visibility="visible";
    // document.getElementById("piler2").style.animation="addpiler21 2s forwards";
    // document.getElementById("piler2").style.visibility="visible";
    document.getElementById("arrowpiler1").style.visibility="hidden";
    document.getElementById("addpiler1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="visible";
    // document.getElementById("arrowpiler1").style.visibility="hidden";

    setTimeout(function()

    {

    document.getElementById("step2a").style.visibility="hidden";
    document.getElementById("step2b").style.visibility="visible";    
    // document.getElementById("addbeam1").style.visibility="visible";
    
    
    },1000);


}


function movereber()
{
    document.getElementById("rebertb1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";
    document.getElementById("reber1").style.animation="move_rebar1 3s forwards";
    document.getElementById("reber1").style.visibility="visible";

    setTimeout(function()

    {
        document.getElementById("weighttext1").style.visibility="hidden";
        document.getElementById("weighttext2").style.visibility="visible";

        document.getElementById("table1").style.visibility="visible";
        document.getElementById("table2").style.visibility="visible";
        // document.getElementById("table3").style.visibility="visible";
        // document.getElementById("table4").style.visibility="visible";
        // document.getElementById("table5").style.visibility="visible";
        // document.getElementById("table6").style.visibility="visible";
        // document.getElementById("table7").style.visibility="visible";

        document.getElementById("arrowcubox2").style.visibility="visible";
        document.getElementById("nextButton2").style.visibility="visible";
    // document.getElementById("step2b").style.visibility="hidden";
    // document.getElementById("step2c").style.visibility="visible";    
    // document.getElementById("transpiler2").style.visibility="visible";
    // document.getElementById("arrowtrans2").style.visibility="visible";
    
    },3000);

}

function addvarniar1(){

    document.getElementById("vc11").style.animation="move_vc1 2s forwards";
    document.getElementById("vc11").style.visibility="visible";
    

    document.getElementById("addvc_arrow1").style.visibility="hidden";
    document.getElementById("addvc1").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("vc33").style.visibility="visible";
    document.getElementById("vc44").style.visibility="visible";
    document.getElementById("vc11").style.visibility="hidden";
    document.getElementById("arvcmea_1").style.visibility="visible";

document.getElementById("usevc_tb").style.visibility="visible";
document.getElementById("step3d_a").style.visibility="hidden";
document.getElementById("step3d_b").style.visibility="visible";

    },2000);


}

function usevc1()
{
    document.getElementById("usevc_tb").style.visibility="hidden";
    document.getElementById("arvcmea_1").style.visibility="hidden";
    document.getElementById("vc44").style.animation="move_vc2 2s forwards";
    setTimeout(function()
    {
        document.getElementById("vc44").src="images/varniar3.png";
    },2000);

    setTimeout(function()

    {
                document.getElementById("step3d_b").style.visibility="hidden";
                document.getElementById("step3d_c").style.visibility="visible";
                document.getElementById("usevc_tb2").style.visibility="visible";
                document.getElementById("arvcmea_2").style.visibility="visible";
            setTimeout(function()
            {
                // document.getElementById("varniar2").style.visibility="hidden";

                

                // document.getElementById("vc33").style.visibility="hidden";
                // document.getElementById("vc44").style.visibility="hidden";

                // document.getElementById("vc55").style.visibility="visible";
                // document.getElementById("varniar5").style.animation="move_vc4 2s forwards";

            },2000);

    },2000);

}



function usevc2()
{
    document.getElementById("usevc_tb2").style.visibility="hidden";
    document.getElementById("arvcmea_2").style.visibility="hidden";
    document.getElementById("vc33").style.visibility="hidden";
    document.getElementById("vc44").style.visibility="hidden";

    document.getElementById("vc66").style.visibility="visible";
    document.getElementById("vc77").style.visibility="visible";
    document.getElementById("vc77").style.animation="move_vernc3 2s forwards";
    
    setTimeout(function()
        {
        document.getElementById("vc77").src="images/varniar37.png";


                document.getElementById("arrowcubox3d").style.visibility="visible";
                document.getElementById("nextButton3d").style.visibility="visible";
        },2000);


}

function addgrip1()
{
    document.getElementById("grip_mac").style.visibility="visible";
    document.getElementById("grip_mac").style.animation="move_grip2 2s forwards";
    document.getElementById("addgrip1").style.visibility="hidden";
    document.getElementById("addvc_arrow2").style.visibility="hidden";
    // document.getElementById("addrebergrip1").style.visibility="visible";

    setTimeout(function()
    {
        document.getElementById("gaugesize").style.visibility="visible";
        document.getElementById("gaugesize2").style.visibility="visible";

                document.getElementById("step3_c").style.visibility="hidden";
                document.getElementById("step3_d").style.visibility="visible";
                document.getElementById("grip_tb").style.visibility="visible";
    },2000);
}

function fitgrip(){

                document.getElementById("grip_tb").style.visibility="hidden";

                document.getElementById("gaugesize").style.visibility="hidden";
                document.getElementById("gaugesize2").style.visibility="hidden";

                document.getElementById("grip_mac").style.visibility="visible";
                document.getElementById("grip_mac").style.animation="move_gripwithrod1 4s forwards";

                setTimeout(function()
                {
                    document.getElementById("arrowcubox4").style.visibility="visible";
                    document.getElementById("nextButton4").style.visibility="visible";
                },2000);
}

function showgp1(){
                
                document.getElementById("turnon_machine").style.visibility="hidden";
                document.getElementById("off_scr1").style.visibility="hidden";
                document.getElementById("gp1").style.visibility="visible";
                
                document.getElementById("onmachine_arrow1").style.visibility="hidden";

                document.getElementById("step3b_a").style.visibility="hidden";
                document.getElementById("c7").style.visibility="hidden";
                document.getElementById("st1").style.visibility="hidden";
                document.getElementById("st2").style.visibility="visible";

                document.getElementById("grph_arrow").style.visibility="visible";
        
        setTimeout(function()
                {
                    document.getElementById("step3b_b").style.visibility="visible";
                    document.getElementById("removemeter_tb").style.visibility="visible";
                    document.getElementById("removeextnso_arrow1").style.visibility="visible";
                    document.getElementById("st2").style.visibility="hidden";
                    document.getElementById("st3").style.visibility="visible";

                    document.getElementById("gp1").style.visibility="hidden";
                    document.getElementById("gp2").style.visibility="visible";

                },6000);
        }


function showgp2(){

                document.getElementById("stop_btn").style.visibility="hidden";
                

                document.getElementById("gp3").style.visibility="hidden";

                document.getElementById("offmachine_arrow1").style.visibility="hidden";
                
                document.getElementById("gp4").style.visibility="visible";
                document.getElementById("step3b_c").style.visibility="hidden";
                // document.getElementById("reberbraked").src="images/br2up.png";
                // document.getElementById("reberbraked2").style.visibility="visible";
                // document.getElementById("st1").style.visibility="hidden";
                // document.getElementById("st2").style.visibility="visible";
        
        setTimeout(function()
                {
                    document.getElementById("canvas3b").style.visibility="hidden";
                    document.getElementById("canvas3c").style.visibility="visible";
                },4000);
        }

function removeext1(){
                document.getElementById("removemeter_tb").style.visibility="hidden";
                // document.getElementById("gp1").style.visibility="hidden";
                document.getElementById("removeextnso_arrow1").style.visibility="hidden";

                document.getElementById("grip_mac2").style.animation="remove_grip3 4s linear forwards";
                document.getElementById("step3b_b").style.visibility="hidden";
                document.getElementById("c8").style.visibility="hidden";
                // document.getElementById("st2").style.visibility="hidden";
                // document.getElementById("st3").style.visibility="visible";
            setTimeout(function()
                {
                    document.getElementById("gp2").style.visibility="hidden";
                    document.getElementById("gp3").style.visibility="visible";
                    
                    setTimeout(function()
                    {   
                        document.getElementById("c9").style.visibility="hidden";
                        document.getElementById("c10").style.visibility="visible";
                        document.getElementById("st3").style.visibility="hidden";
                        document.getElementById("st4").style.visibility="visible";
                        // document.getElementById("zoom_brake").style.visibility="visible";

                        document.getElementById("offmachine_arrow1").style.visibility="visible";

                        document.getElementById("reberbraked").src="images/br2up.png";
                        document.getElementById("reberbraked2").style.visibility="visible";

                        document.getElementById("stop_btn").style.visibility="visible";
                        document.getElementById("step3b_c").style.visibility="visible";
                    },2000);

                },4500);
                // document.getElementById("gp1").style.visibility="hidden";

        }

function addreber()
{
    document.getElementById("grip_reber").style.visibility="visible";
    document.getElementById("grip_reber").style.animation="move_gripreber2 2s forwards";
    
    setTimeout(function()
            {
                document.getElementById("grip_reber_tb").style.visibility="visible";
                document.getElementById("fitmachine_arrow2").style.visibility="visible";

                
                
                document.getElementById("step3_a").style.visibility="hidden";
                document.getElementById("step3_b").style.visibility="visible";

                
            },2000);

    document.getElementById("addvc_arrow2").style.visibility="hidden";
    document.getElementById("addrebergrip1").style.visibility="hidden";
}

function fitmachine()
{
    document.getElementById("fitmachine_arrow2").style.visibility="hidden";
    document.getElementById("grip_reber_tb").style.visibility="hidden";

    document.getElementById("grip_reber").style.visibility="visible";
    document.getElementById("grip_reber").style.animation="move_gripwithrod2 4s forwards";
    
    setTimeout(function()
    {

        document.getElementById("step3_b").style.visibility="hidden";
        document.getElementById("step3_c").style.visibility="visible";
        document.getElementById("c5").style.visibility="hidden";
        document.getElementById("c6").style.visibility="visible";
        document.getElementById("upstp1").style.visibility="hidden";
                document.getElementById("upstp2").style.visibility="visible";

        document.getElementById("addgrip1").style.visibility="visible";
        document.getElementById("addvc_arrow2").style.visibility="visible";

        
    },3000);
}


function movepiler1(){

    document.getElementById("piler1").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1").style.visibility="hidden";
    document.getElementById("arrowtrans1").style.visibility="hidden";
    setTimeout(function()

    {   
    document.getElementById("step2c").style.visibility="hidden";
    document.getElementById("step2d").style.visibility="visible";
     document.getElementById("transbeam1").style.visibility="visible";
    document.getElementById("arrowtrans3").style.visibility="visible";
    },2000);


}


function movepiler2(){

    document.getElementById("piler2").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2").style.visibility="hidden";
    document.getElementById("arrowtrans2").style.visibility="hidden";
    setTimeout(function()

    {   
        
   document.getElementById("transpiler1").style.visibility="visible";
    document.getElementById("arrowtrans1").style.visibility="visible";
    },2000);


}

function movebeam1(){

    document.getElementById("beam1").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1").style.visibility="hidden";
    document.getElementById("arrowtrans3").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox3").style.visibility="visible";
    document.getElementById("nextButton3").style.visibility="visible";
    },2000);


}

// =====================Specimen 2===================

function addpiler2(){

    document.getElementById("piler1s2").style.animation="addpiler11 2s forwards";
    document.getElementById("piler1s2").style.visibility="visible";
    document.getElementById("piler2s2").style.animation="addpiler21 2s forwards";
    document.getElementById("piler2s2").style.visibility="visible";
    document.getElementById("addpiler1s2").style.visibility="hidden";
    document.getElementById("arrowpiler1s2").style.visibility="hidden";

    setTimeout(function()

    {

    document.getElementById("step6a").style.visibility="hidden";
    document.getElementById("step6b").style.visibility="visible";    
    document.getElementById("addbeam1s2").style.visibility="visible";
    document.getElementById("arrowbeam1s2").style.visibility="visible";
    
    },2000);


}

function addbeam2(){

    document.getElementById("beam1s2").style.animation="addbeam11 2s forwards";
    document.getElementById("beam1s2").style.visibility="visible";
    document.getElementById("addbeam1s2").style.visibility="hidden";
    document.getElementById("arrowbeam1s2").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("transpiler2s2").style.visibility="visible";
    document.getElementById("arrowtrans2s2").style.visibility="visible";
    },2000);


}


function movepiler1s2(){

    document.getElementById("piler1s2").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1s2").style.visibility="hidden";
    document.getElementById("arrowtrans1s2").style.visibility="hidden";
    setTimeout(function()

    {   
    
    document.getElementById("step6c").style.visibility="hidden";
    document.getElementById("step6d").style.visibility="visible";    
    document.getElementById("transbeam1s2").style.visibility="visible";
    document.getElementById("arrowtrans3s2").style.visibility="visible";
    
    },2000);


}


function movepiler2s2(){

    document.getElementById("piler2s2").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2s2").style.visibility="hidden";
    document.getElementById("arrowtrans2s2").style.visibility="hidden";
    setTimeout(function()

    {   
    
    
    document.getElementById("step6b").style.visibility="hidden";
    document.getElementById("step6c").style.visibility="visible";    
    document.getElementById("transpiler1s2").style.visibility="visible";
    document.getElementById("arrowtrans1s2").style.visibility="visible";
    },2000);


}

function movebeam2(){

    document.getElementById("beam1s2").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1s2").style.visibility="hidden";
    document.getElementById("arrowtrans3s2").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox6a").style.visibility="visible";
    document.getElementById("nextButton6a").style.visibility="visible";
    },2000);


}


// =====================Specimen 3===================

function addpiler3(){

    document.getElementById("piler1s3").style.animation="addpiler11 2s forwards";
    document.getElementById("piler1s3").style.visibility="visible";
    document.getElementById("piler2s3").style.animation="addpiler21 2s forwards";
    document.getElementById("piler2s3").style.visibility="visible";
    document.getElementById("addpiler1s3").style.visibility="hidden";
    document.getElementById("arrowpiler1s3").style.visibility="hidden";

    setTimeout(function()

    {

    document.getElementById("step9a").style.visibility="hidden";
    document.getElementById("step9b").style.visibility="visible";    
    document.getElementById("addbeam1s3").style.visibility="visible";
    document.getElementById("arrowbeam1s3").style.visibility="visible";
    
    },2000);


}

function addbeam3(){

    document.getElementById("beam1s3").style.animation="addbeam11 2s forwards";
    document.getElementById("beam1s3").style.visibility="visible";
    document.getElementById("addbeam1s3").style.visibility="hidden";
    document.getElementById("arrowbeam1s3").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("step9b").style.visibility="hidden";
    document.getElementById("step9c").style.visibility="visible";    
    document.getElementById("transpiler2s3").style.visibility="visible";
    document.getElementById("arrowtrans2s3").style.visibility="visible";
    },2000);


}


function movepiler1s3(){

    document.getElementById("piler1s3").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1s3").style.visibility="hidden";
    document.getElementById("arrowtrans1s3").style.visibility="hidden";
    setTimeout(function()

    {   
    document.getElementById("step9c").style.visibility="hidden";
    document.getElementById("step9d").style.visibility="visible";    
    document.getElementById("transbeam1s3").style.visibility="visible";
    document.getElementById("arrowtrans3s3").style.visibility="visible";
    
    
    },2000);


}


function movepiler2s3(){

    document.getElementById("piler2s3").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2s3").style.visibility="hidden";
    document.getElementById("arrowtrans2s3").style.visibility="hidden";
    setTimeout(function()

    {   
    
    document.getElementById("transpiler1s3").style.visibility="visible";
    document.getElementById("arrowtrans1s3").style.visibility="visible";
    },2000);


}

function movebeam3(){

    document.getElementById("beam1s3").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1s3").style.visibility="hidden";
    document.getElementById("arrowtrans3s3").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox9a").style.visibility="visible";
    document.getElementById("nextButton9a").style.visibility="visible";
    },2000);


}


//======================================================

function submit12(){

    
    setTimeout(function()

    {


    
    },1000);

}


function showgif(){

    document.getElementById("calculate1").style.visibility="hidden";
    
    document.getElementById("gif11").style.visibility="visible";
    setTimeout(function()

    {

    
    },1000);

}





function submit21(){

    document.getElementById("submit21").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox6").style.visibility="visible";

    document.getElementById("nextButton6").style.visibility="visible";

    
    },1000);

}


function submit22(){

    document.getElementById("submit22").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    
    },1000);

}




function showif2(){

    document.getElementById("calculate2").style.visibility="hidden";
    
    document.getElementById("gif121").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox8").style.visibility="visible";

    document.getElementById("nextButton8").style.visibility="visible";

    document.getElementById("repeat2").style.visibility="visible";
    },1000);

}



function submit31(){

    document.getElementById("submit31").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox9").style.visibility="visible";

    document.getElementById("nextButton9").style.visibility="visible";

    
    },1000);

}


function submit32(){

    document.getElementById("submit32").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    
    },1000);

}











function showgif3(){

    document.getElementById("calculate3").style.visibility="hidden";
    
    document.getElementById("gif131").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

    
    },1000);

}



function showgraph1(){

    document.getElementById("submit121").style.visibility="hidden";


    new Chartist.Line('.ct-chart', {
  labels: [l1, l2, l3],
  series: [
    [freq1, freq2, freq3]
    // [0, 2.5, 9.88, 2, 3],
    // [1, 2, 2.5, 3.5, 4]
  ]
}, {
  width: 500,
  height: 300
});

 /*   
    
 google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      //data.addColumn('number', 'Day');
      data.addColumn('number', 'Frequency');
      data.addColumn('number', 'Length');
      // data.addColumn('number', 'Y');

      data.addRows([
        [   
            l1,
            freq1
        ],
        [   
            l2,
            freq2
        ],
        [   
            l3,
            freq3
        ]
      ]);

      var options = {
        chart: {
          // title: 'Box Office Earnings in First Two Weeks of Opening',
          // subtitle: 'in millions of dollars (USD)'
        },
        width: 500,
        height: 350,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }*/
/*
var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Simple Line Chart"
    },
    axisY:{
        includeZero: false
    },
    data: [{        
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
            {
                x: l1,
                y: freq1 
            },
            {
                x: l2,
                y: freq2
            },
            {
                x: l3,
                y: freq3
            },
            
            // {
            //  x:190,
            //  y: 450
            // },
            // { y: 500 },
            // { y: 480 },
            // { y: 480 },
            // { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
            // { y: 500 },
            // { y: 480 },
            // { y: 510 }
        ]
    }]
});
chart.render();


*/











    // document.getElementById("gif131").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox12").style.visibility="visible";

    document.getElementById("nextButton12").style.visibility="visible";

    
    },1000);

}

function showgraph2(){

    document.getElementById("submit131").style.visibility="hidden";
    
    new Chartist.Line('.ct-chart2', {
  labels: [el1, el2, el3],
  series: [
    [freq1, freq2, freq3]
    // [0, 2.5, 9.88, 2, 3],
    // [1, 2, 2.5, 3.5, 4]
  ]
}, {
  width: 500,
  height: 300
});
/*
    google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      //data.addColumn('number', 'Day');
      data.addColumn('number', 'Frequency');
      data.addColumn('number', 'Elasticity');
      // data.addColumn('number', 'Y');

      data.addRows([
        [   
            el1,
            freq1
        ],
        [   
            el2,
            freq2
        ],
        [   
            el3,
            freq3
        ]
      ]);

      var options = {
        chart: {
          // title: 'Box Office Earnings in First Two Weeks of Opening',
          // subtitle: 'in millions of dollars (USD)'
        },
        width: 500,
        height: 350,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('xline_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }*/



    setTimeout(function()

    {

    document.getElementById("arrowrestart").style.visibility="visible";

    document.getElementById("resetbutton").style.visibility="visible";

    // document.getElementById("thanku").style.visibility="visible";
    
    },1500);

}































// function isInputNumber(evt)

// {

//     var ch = String.fromCharCode(evt.which);



//     if(!(/[0-9]/.test(ch))){

//         evt.preventDefault();

//     }

// }

// function showmoveclk()
// {
//     document.getElementById("strtbtn").style.visibility="hidden";
//     document.getElementById("arrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("pin1").style.animation="clockpin10 4.20s forwards";
//         document.getElementById("pin2").style.animation="clockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("value", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("press1").style.visibility="visible";
//         document.getElementById("press2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("stopstep").style.visibility="visible";
//             document.getElementById("arrow8").style.visibility="visible";
//             document.getElementById("stopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("pin1").style.animation="clockpin15 4.20s forwards";
//         document.getElementById("pin2").style.animation="clockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("value", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("press1").style.visibility="visible";
//         document.getElementById("press2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("stopstep").style.visibility="visible";
//             document.getElementById("arrow8").style.visibility="visible";
//             document.getElementById("stopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("okcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("crekl").style.animation="crek1 1.20s forwards";
//             document.getElementById("crekr").style.animation="crek2 1.20s forwards";
//             document.getElementById("press1").style.visibility="hidden";
//             document.getElementById("press2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function stopmoveclk()
// {
//     document.getElementById("arrow8").style.visibility="hidden";
//     document.getElementById("stopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("loadfail").innerHTML = "242";
//     document.getElementById("lfstep").style.visibility="visible";
//     document.getElementById("arrow9").style.visibility="visible";
//     document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("lfstep").style.visibility="visible";
//     document.getElementById("arrow9").style.visibility="visible";
//     document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 6 code end*/


// /*scene 8 code start*/
// function lshowbigclk()
// {

//     document.getElementById("larrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("lbigclock").style.visibility="visible";
//     document.getElementById("lpin1").style.visibility="visible";
//     document.getElementById("lpin2").style.visibility="visible";
//     document.getElementById("lclkdot").style.visibility="visible";

//     document.getElementById("larrow7").style.visibility="visible";
//     document.getElementById("lstrtbtn").style.visibility="visible";
//     document.getElementById("lstartstep").style.visibility="visible";
//     document.getElementById("lclktable").style.visibility="visible";
// }
    
// function lshowmoveclk()
// {
//     document.getElementById("lstrtbtn").style.visibility="hidden";
//     document.getElementById("larrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("lpin1").style.animation="lclockpin10 4.20s forwards";
//         document.getElementById("lpin2").style.animation="lclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("lvalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("lpress1").style.visibility="visible";
//         document.getElementById("lpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("lstopstep").style.visibility="visible";
//             document.getElementById("larrow8").style.visibility="visible";
//             document.getElementById("lstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("lpin1").style.animation="lclockpin15 4.20s forwards";
//         document.getElementById("lpin2").style.animation="lclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("lvalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("lpress1").style.visibility="visible";
//         document.getElementById("lpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("lstopstep").style.visibility="visible";
//             document.getElementById("larrow8").style.visibility="visible";
//             document.getElementById("lstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("lokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("lcrekl").style.animation="lcrek1 1.20s forwards";
//             document.getElementById("lcrekr").style.animation="lcrek2 1.20s forwards";
//             document.getElementById("lpress1").style.visibility="hidden";
//             document.getElementById("lpress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function lstopmoveclk()
// {
//     document.getElementById("larrow8").style.visibility="hidden";
//     document.getElementById("lstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("lloadfail").innerHTML = "242";
//     document.getElementById("llfstep").style.visibility="visible";
//     document.getElementById("larrow9").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("lloadfail").innerHTML = "727";
//     document.getElementById("llfstep").style.visibility="visible";
//     document.getElementById("larrow9").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 8 code end*/


// /*scene 10 code start*/
// function rshowbigclk()
// {

//     document.getElementById("rarrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("rbigclock").style.visibility="visible";
//     document.getElementById("rpin1").style.visibility="visible";
//     document.getElementById("rpin2").style.visibility="visible";
//     document.getElementById("rclkdot").style.visibility="visible";

//     document.getElementById("rarrow7").style.visibility="visible";
//     document.getElementById("rstrtbtn").style.visibility="visible";
//     document.getElementById("rstartstep").style.visibility="visible";
//     document.getElementById("rclktable").style.visibility="visible";
// }
    
// function rshowmoveclk()
// {
//     document.getElementById("rstrtbtn").style.visibility="hidden";
//     document.getElementById("rarrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("rpin1").style.animation="rclockpin10 4.20s forwards";
//         document.getElementById("rpin2").style.animation="rclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("rvalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("rpress1").style.visibility="visible";
//         document.getElementById("rpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("rstopstep").style.visibility="visible";
//             document.getElementById("rarrow8").style.visibility="visible";
//             document.getElementById("rstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("rpin1").style.animation="rclockpin15 4.20s forwards";
//         document.getElementById("rpin2").style.animation="rclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("rvalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("rpress1").style.visibility="visible";
//         document.getElementById("rpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("rstopstep").style.visibility="visible";
//             document.getElementById("rarrow8").style.visibility="visible";
//             document.getElementById("rstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("rokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("rcrekl").style.animation="rcrek1 1.20s forwards";
//             document.getElementById("rcrekr").style.animation="rcrek2 1.20s forwards";
//             document.getElementById("rpress1").style.visibility="hidden";
//             document.getElementById("rpress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function rstopmoveclk()
// {
//     document.getElementById("rarrow8").style.visibility="hidden";
//     document.getElementById("rstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("rloadfail").innerHTML = "242";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("rarrow9").style.visibility="visible";
//     document.getElementById("nextButton10").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("rloadfail").innerHTML = "727";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("rarrow9").style.visibility="visible";
//     document.getElementById("nextButton10").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 10 code end*/


// /*scene 12 code start*/
// function sshowbigclk()
// {

//     document.getElementById("sarrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("sbigclock").style.visibility="visible";
//     document.getElementById("spin1").style.visibility="visible";
//     document.getElementById("spin2").style.visibility="visible";
//     document.getElementById("sclkdot").style.visibility="visible";

//     document.getElementById("sarrow7").style.visibility="visible";
//     document.getElementById("sstrtbtn").style.visibility="visible";
//     document.getElementById("sstartstep").style.visibility="visible";
//     document.getElementById("sclktable").style.visibility="visible";
// }
    
// function sshowmoveclk()
// {
//     document.getElementById("sstrtbtn").style.visibility="hidden";
//     document.getElementById("sarrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("spin1").style.animation="sclockpin10 4.20s forwards";
//         document.getElementById("spin2").style.animation="sclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("svalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("spress1").style.visibility="visible";
//         document.getElementById("spress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("sstopstep").style.visibility="visible";
//             document.getElementById("sarrow8").style.visibility="visible";
//             document.getElementById("sstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("spin1").style.animation="sclockpin15 4.20s forwards";
//         document.getElementById("spin2").style.animation="sclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("svalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("spress1").style.visibility="visible";
//         document.getElementById("spress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("sstopstep").style.visibility="visible";
//             document.getElementById("sarrow8").style.visibility="visible";
//             document.getElementById("sstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("sokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("screkl").style.animation="screk1 1.20s forwards";
//             document.getElementById("screkr").style.animation="screk2 1.20s forwards";
//             document.getElementById("spress1").style.visibility="hidden";
//             document.getElementById("spress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function sstopmoveclk()
// {
//     document.getElementById("sarrow8").style.visibility="hidden";
//     document.getElementById("sstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("sloadfail").innerHTML = "242";
//     document.getElementById("slfstep").style.visibility="visible";
//     document.getElementById("sarrow9").style.visibility="visible";
//     document.getElementById("nextButton12").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("sloadfail").innerHTML = "727";
//     document.getElementById("slfstep").style.visibility="visible";
//     document.getElementById("sarrow9").style.visibility="visible";
//     document.getElementById("nextButton12").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 12 code end*/


// function soneIn()

// {

//     sone = document.getElementById("oneIn").value;

// if (sone == "A") 
//     {
//         //alert("Correct");
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi1arrow10").style.visibility="visible";
//         document.getElementById("fibox1").innerHTML = "&nbsp;";
//         document.getElementById("su1").style.visibility="hidden";
//     } 
// else if(sone == "B")
//     {
// document.getElementById("fibox1").innerHTML = "Select Correct Type";
//     }
// else if(sone == "C")
//     {
// document.getElementById("fibox1").innerHTML = "Select Correct Type";
//     }
// else 
//     {
// document.getElementById("fibox1").innerHTML = "Select Type";
//     }
//     //size = document.getElementById("sizeIn").value;
// /*
// if (sone !== "")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi1arrow10").style.visibility="visible";
//         document.getElementById("fibox1").innerHTML = "&nbsp;";
//     }
    
//     else
//     {
//         document.getElementById("fibox1").innerHTML = "Select Type"; 
//     }
// */
// }


// function stwoIn()

// {

//     stwo = document.getElementById("twoIn").value;

//     //size = document.getElementById("sizeIn").value;


// /**/
// if (stwo == "B")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi2arrow10").style.visibility="visible";
//         document.getElementById("fibox2").innerHTML = "&nbsp;";
//         document.getElementById("nextButton9").style.visibility="visible";
//         document.getElementById("su2").style.visibility="hidden";
//     }
// else if(stwo == "A")
//     {
//         document.getElementById("fibox2").innerHTML = "Select Correct Type";
//     }
// else if(stwo == "C")
//     {
//         document.getElementById("fibox2").innerHTML = "Select Correct Type";
//     }   
//     else
//     {
//         document.getElementById("fibox2").innerHTML = "Select Type"; 
//     }

// }


// function sthreeIn()

// {

//     sthree = document.getElementById("threeIn").value;

//     //size = document.getElementById("sizeIn").value;

// if (sthree == "C")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         //document.getElementById("fi3arrow10").style.visibility="visible";
//         document.getElementById("fibox3").innerHTML = "&nbsp;";
//         document.getElementById("nextButton11").style.visibility="visible";
//         document.getElementById("su3").style.visibility="hidden";
//     }
// else if(sthree == "A")
//     {
//         document.getElementById("fibox3").innerHTML = "Select Correct Type";
//     }
// else if(sthree == "B")
//     {
//         document.getElementById("fibox3").innerHTML = "Select Correct Type";
//     }     
// else
//     {
//         document.getElementById("fibox3").innerHTML = "Select Type"; 
//     }

// }


// function sfourIn()

// {

//     sfour = document.getElementById("fourIn").value;

//     //size = document.getElementById("sizeIn").value;

// if (sfour == "A")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi4arrow10").style.visibility="visible";
//         document.getElementById("fibox4").innerHTML = "&nbsp;";
//         document.getElementById("nextButton13").style.visibility="visible";
//     }
// else if(sthree == "B")
//     {
//         document.getElementById("fibox4").innerHTML = "Select Correct Type";
//     }
// else if(sthree == "C")
//     {
//         document.getElementById("fibox4").innerHTML = "Select Correct Type";
//     }     
   
//     else
//     {
//         document.getElementById("fibox4").innerHTML = "Select Type"; 
//     }

// }

// function ShowLF()
// {
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("ty1").innerHTML = sone;
//     document.getElementById("ty2").innerHTML = stwo;
//     document.getElementById("ty3").innerHTML = sthree;


//     document.getElementById("lf1").innerHTML = "242";
//     document.getElementById("lf2").innerHTML = "323";
//     document.getElementById("lf3").innerHTML = "295";

//     document.getElementById("csf1").innerHTML = "N/A";
//     document.getElementById("csf2").innerHTML = "N/A";
//     document.getElementById("csf3").innerHTML = "N/A";
    
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton14").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("ty1").innerHTML = sone;
//     document.getElementById("ty2").innerHTML = stwo;
//     document.getElementById("ty3").innerHTML = sthree;

//     document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "N/A";
//     document.getElementById("csf2").innerHTML = "N/A";
//     document.getElementById("csf3").innerHTML = "N/A";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton14").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }

// function Showres()
// {
//     document.getElementById("res1").innerHTML = "N/A";
//     document.getElementById("res2").innerHTML = "N/A";
//     document.getElementById("res3").innerHTML = "N/A";
//     document.getElementById("resall").innerHTML = "N/A";
//     document.getElementById("arrow12").style.visibility="visible";
//     document.getElementById("nextButton15").style.visibility="visible";
// }

// function Showrep()
// {

//     //Global Variable Print Date in Cube

// //logo = new Date(date1);

// var xx = new Date();
//  logo = xx.getDate()+'-'+(xx.getMonth()+1)+'-'+xx.getFullYear();

// //Month Print
// //document.getElementById("demo").innerHTML = logo.getMonth() + 1;
// //Date Print
// //document.getElementById("demo2").innerHTML = logo.getDate();
// //Year Print
// //document.getElementById("demo3").innerHTML = logo.getFullYear();

//     //var genrep = new Date();
// //alert(logo);
// if (size == 500)
// {
// document.getElementById("sos1").innerHTML= 100+"x"+100+"x"+size+" mm";
// } else 
// {
// document.getElementById("sos1").innerHTML= 100+"x"+100+"x"+size+" mm";    
// }

// document.getElementById("cc1").innerHTML= "N/A";
// document.getElementById("cg1").innerHTML= "N/A";

// document.getElementById("im1").innerHTML= "N/A";
// document.getElementById("ad1").innerHTML= z;
// document.getElementById("td1").innerHTML = logo;
// document.getElementById("ml1").innerHTML= "N/A";
// document.getElementById("ft1").innerHTML= sone;
// document.getElementById("v1").innerHTML= "N/A";
// document.getElementById("fs1").innerHTML= "N/A";
// document.getElementById("av1").innerHTML= "N/A";

// document.getElementById("im2").innerHTML= "N/A";
// document.getElementById("ad2").innerHTML= z;
// document.getElementById("td2").innerHTML = logo;
// document.getElementById("ml2").innerHTML= "N/A";
// document.getElementById("ft2").innerHTML= stwo;
// document.getElementById("v2").innerHTML= "N/A";
// document.getElementById("fs2").innerHTML= "N/A";
// document.getElementById("av2").innerHTML= "N/A";

// document.getElementById("im3").innerHTML= "N/A";
// document.getElementById("ad3").innerHTML= z;
// document.getElementById("td3").innerHTML = logo;
// document.getElementById("ml3").innerHTML= "N/A";
// document.getElementById("ft3").innerHTML= sthree;
// document.getElementById("v3").innerHTML= "N/A";
// document.getElementById("fs3").innerHTML= "N/A";
// document.getElementById("av3").innerHTML= "N/A";
// //document.getElementById("cubedatehidden").style.visibility="visible";
//     /*document.getElementById("res1").innerHTML = "N/A";
//     document.getElementById("res2").innerHTML = "N/A";
//     document.getElementById("res3").innerHTML = "N/A";
//     document.getElementById("resall").innerHTML = "N/A";
//     document.getElementById("arrow12").style.visibility="visible";*/
//     document.getElementById("nextButton15").style.visibility="visible";
// }
// /*
// function reset()
// {
//     location.reload();
// }
// */
// function ShowLoadRes()
// {
//     if (size == 10)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("csft1").innerHTML = "24.2";
//     document.getElementById("csft2").innerHTML = "32.3";
//     document.getElementById("csft3").innerHTML = "29.5";
//     document.getElementById("avg1").innerHTML = "28.66";
//     document.getElementById("csft4").innerHTML = "24.36/32.96";
//     document.getElementById("csft5").innerHTML = "Not Ok";
//     document.getElementById("csft6").innerHTML = "Ok";
//     document.getElementById("csft7").innerHTML = "Ok";
//     document.getElementById("csfres1").innerHTML = "Invalid Test";
//     document.getElementById("rlfstep").style.visibility="visible"; 
//     document.getElementById("nextButton8").style.visibility="visible";   
//     /*document.getElementById("csf1").innerHTML = "24.2";
//     document.getElementById("csf2").innerHTML = "32.3";
//     document.getElementById("csf3").innerHTML = "29.5";
//     csft7
// avg1

//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";*/
//     }
//     else if (size == 15)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("csft1").innerHTML = "32.3";
//     document.getElementById("csft2").innerHTML = "29.5";
//     document.getElementById("csft3").innerHTML = "24.0";
//     document.getElementById("avg1").innerHTML = "28.6";
//     document.getElementById("csft4").innerHTML = "24.31/32.89";    
//     document.getElementById("csft5").innerHTML = "Ok";
//     document.getElementById("csft6").innerHTML = "Ok";
//     document.getElementById("csft7").innerHTML = "Not Ok";
//     document.getElementById("csfres1").innerHTML = "Invalid Test";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     /*document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "32.3";
//     document.getElementById("csf2").innerHTML = "29.5";
//     document.getElementById("csf3").innerHTML = "24.0";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";*/
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }


// function ShowLFinalRes()
// {
//     if (size == 10)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("fcsft1").innerHTML = "28.4";
//     document.getElementById("fcsft2").innerHTML = "29.9";
//     document.getElementById("fcsft3").innerHTML = "31.2";
//     document.getElementById("avg2").innerHTML = "29.83";
//     document.getElementById("fcsft4").innerHTML = "25.35/34.31";
//     document.getElementById("fcsft5").innerHTML = "Ok";
//     document.getElementById("fcsft6").innerHTML = "Ok";
//     document.getElementById("fcsft7").innerHTML = "Ok";
//     document.getElementById("csfres2").innerHTML = "Valid Test";
//     document.getElementById("flfstep").style.visibility="visible";
//     //document.getElementById("nextButton9").style.visibility="visible";
//     /*document.getElementById("csf1").innerHTML = "24.2";
//     document.getElementById("csf2").innerHTML = "32.3";
//     document.getElementById("csf3").innerHTML = "29.5";
//     csft7
// avg1

//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";*/
//     }
//     else if (size == 15)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("fcsft1").innerHTML = "28.4";
//     document.getElementById("fcsft2").innerHTML = "29.9";
//     document.getElementById("fcsft3").innerHTML = "31.2";
//     document.getElementById("avg2").innerHTML = "29.83";
//     document.getElementById("fcsft4").innerHTML = "25.35/34.31";
//     document.getElementById("fcsft5").innerHTML = "Ok";
//     document.getElementById("fcsft6").innerHTML = "Ok";
//     document.getElementById("fcsft7").innerHTML = "Ok";
//     document.getElementById("csfres2").innerHTML = "Valid Test";
//     document.getElementById("flfstep").style.visibility="visible";
//     //document.getElementById("nextButton9").style.visibility="visible";
//     /*document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "32.3";
//     document.getElementById("csf2").innerHTML = "29.5";
//     document.getElementById("csf3").innerHTML = "24.0";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";*/
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }
/*
function movecube2(){

    //document.getElementById("arrow1").style.visibility="hidden";

setTimeout(function()

    {

    document.getElementById("cubefromctm").src="fitmachine.png";

    },1750);

document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";

}*/
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;/



/*
/* 
    
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        viewttext = "24.2";
        //showtext2 = "323";
        viewttext2 = "32.3";
        //showtext3 = "295";
        viewttext3 = "29.5";
        viewttext4 = "28.66";
        viewttext5 = "24.36/32.96";
        viewttext6 = "Not Ok";
        viewttext7 = "Ok";
        viewttext8 = "Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        viewttext = "32.3";
        //showtext2 = "865";
        viewttext2 = "29.5";
        //showtext3 = "540";
        viewttext3 = "24.0";
        viewttext4 = "28.6";
        viewttext5 = "24.31/32.89";
        viewttext6 = "Ok";
        viewttext7 = "Ok";
        viewttext8 = "Not Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
    }
    
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
---------------------------------------------------------
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;*/

//var showtext : String;
/*var showtext2 : String;
var showtext3 : String;
/
var reviewttext : String;
var reviewttext2 : String;
var reviewttext3 : String;
//var axat:Number = 28.66;
//var nav11:Number = 28.6;
var reviewttext4 : String;
var reviewttext5 : String;
var reviewttext6 : String;
var reviewttext7 : String;
var reviewttext8 : String;
var reviewttext9 : String;
var reviewttext10 : String;
//var valtext : String;


//var itext : String;
//var nstext:Number;
//stop();button_obs
reviewbtn.addEventListener(MouseEvent.CLICK, revr_MouseClickHandler);

function revr_MouseClickHandler(event:MouseEvent):void
{
    //nstext = display.text;
    // Start your custom code
    // This example code displays the words "Mouse clicked" in the Output panel.
    //trace("Mouse clicked");
    //trace(nstext);
    //if(nstext == 2.333)
    //{
    // End your custom code
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        reviewttext = "30.4";
        //showtext2 = "323";
        reviewttext2 = "29.6";
        //showtext3 = "295";
        reviewttext3 = "32.2";
        reviewttext4 = "30.73";
        reviewttext5 = "26.12/35.34";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        reviewttext = "28.4";
        //showtext2 = "865";
        reviewttext2 = "29.9";
        //showtext3 = "540";
        reviewttext3 = "31.2";
        reviewttext4 = "29.83";
        reviewttext5 = "25.35/34.31";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
    }
    //gotoAndPlay(333);
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
*/