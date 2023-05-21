//nextBtn is used to disable the "next" button on each page 
//until the multiple choice questions are answered correctly
const nextBtn = document.getElementById("next");

/* the first multipechoice box */
(function() {
    // your page initialization code here
    // the DOM will be available here
    var checkbutton1 = document.getElementById('sjekksvar1');


    /* checks if button 1 is clicked and runs fnCheckAnswer() */
    checkbutton1.addEventListener('click', function(event) {
      fnCheckAnswer()

    });

  })();


  /* FIRST multiplechoice box */
  function fnCheckAnswer() {

   
    var respons1 = "Riktig svar!";
    var respons2 = "Feil svar!";
    var respons3 = "Delvis riktig svar!";


    /* gets the values form the checkboxes, if they are check or not */
    let checkbox1 = document.getElementById("item1").checked;
    let checkbox2 = document.getElementById("item2").checked;
    let checkbox3 = document.getElementById("item3").checked;
    let checkbox4 = document.getElementById("item4").checked;
  
    /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
    /* the correct answer */
    if (!checkbox1 && !checkbox2 && (checkbox3 || checkbox4)){
      ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-partially');
      ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-danger');
      document.getElementById("responsMessage1").innerHTML = respons1;
      ri_addClass(document.getElementById("responsMessage1"), "ri-alert-success");
      ri_removeClass(document.getElementById('responsMessage1'), 'riHide');

      //enable next button
      nextBtn.removeAttribute("disabled");
      
      /* Partially correct */
    } else if ((checkbox1 || checkbox2) && (checkbox3 || checkbox4)){
      ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-danger');
      document.getElementById("responsMessage1").innerHTML = respons3;
      ri_addClass(document.getElementById("responsMessage1"), "ri-alert-partially");
      ri_removeClass(document.getElementById('responsMessage1'), 'riHide');
      
      /* wrong message */
    } else if ((checkbox1 || checkbox2) && !checkbox3 && !checkbox4){
      ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-partially');
      document.getElementById("responsMessage1").innerHTML = respons2;
      ri_addClass(document.getElementById("responsMessage1"), "ri-alert-danger");
      ri_removeClass(document.getElementById('responsMessage1'), 'riHide');
      
      /* hide message if nothing is checked */
    } else {
      ri_addClass(document.getElementById("responsMessage1"), "riHide");
    }
  }
  
  function ri_hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }

  function ri_addClass(ele, cls) {
    if (!ri_hasClass(ele, cls)) ele.className += " " + cls;
  }

  function ri_removeClass(ele, cls) {
    if (ri_hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }