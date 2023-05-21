/* the first multipechoice box */
(function() {
    // your page initialization code here
    // the DOM will be available here
    var checkbutton1 = document.getElementById('sjekksvar');
    var checkbutton2 = document.getElementById('sjekksvar2');
    var checkbutton3 = document.getElementById('sjekksvar3');
    var checkbutton4 = document.getElementById('sjekksvar4');
    var checkbutton5 = document.getElementById('sjekksvar5');
    var checkbutton6 = document.getElementById('sjekksvar6');

    /* checks if button 1 is clicked and runs fnCheckAnswer() */
    checkbutton1.addEventListener('click', function(event) {
      fnCheckAnswer()
      fnCheckAnswer2()
      fnCheckAnswer3()
      fnCheckAnswer4()
      fnCheckAnswer5()
      fnCheckAnswer6()

    });

    /* checks if button 2 is clicked fnCheckAnswer2() */
    checkbutton2.addEventListener('click', function(event) {
      fnCheckAnswer2()

    });

    /* checks if button 3 is clicked fnCheckAnswer3() */
    checkbutton3.addEventListener('click', function(event) {
      fnCheckAnswer3()

    });

    /* checks if button 4 is clicked fnCheckAnswer4()*/
    checkbutton4.addEventListener('click', function(event) {
      fnCheckAnswer4()

    });

    /* checks if button 5 is clicked fnCheckAnswer5()*/
    checkbutton5.addEventListener('click', function(event) {
      fnCheckAnswer5()

    });

    /* checks if button 6 is clicked fnCheckAnswer6()*/
    checkbutton6.addEventListener('click', function(event) {
      fnCheckAnswer6()

    });
  
  })();


  /* FIRST multiplechoice box */
  function fnCheckAnswer() {

   
    var respons1 = "Riktig svar! Fordi at: alternativ tekst";
    var respons2 = "Feil svar! Fordi at: alternativ tekst";

    /* gets the values form the checkboxes, if they are check or not */
    let checkbox1 = document.getElementById("item1").checked;
    let checkbox2 = document.getElementById("item2").checked;
    let checkbox3 = document.getElementById("item3").checked;
    let checkbox4 = document.getElementById("item4").checked;
  
    /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
    /* the correct answer */
    if (checkbox1 && checkbox2 && !checkbox3 && checkbox4){
      ri_removeClass(document.getElementById('responsMessage'), 'ri-alert-danger');
      document.getElementById("responsMessage").innerHTML = respons1;
      ri_addClass(document.getElementById("responsMessage"), "ri-alert-success");
      ri_removeClass(document.getElementById('responsMessage'), 'riHide');
      /* wrong message */
    } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
      document.getElementById("responsMessage").innerHTML = respons2;
      ri_addClass(document.getElementById("responsMessage"), "ri-alert-danger");
      ri_removeClass(document.getElementById('responsMessage'), 'riHide');
      /* hide message if nothing is checked */
    } else {
      ri_addClass(document.getElementById("responsMessage"), "riHide");
    }
  }

  /* SECOND multiplechoice box in exampage */

  function fnCheckAnswer2() {

   
    var respons1 = "Riktig svar! Fordi at: alternativ tekst";
    var respons2 = "Feil svar! Fordi at: alternativ tekst";

    /* gets the values form the checkboxes, if they are check or not */
    let checkbox1 = document.getElementById("item5").checked;
    let checkbox2 = document.getElementById("item6").checked;
    let checkbox3 = document.getElementById("item7").checked;
    let checkbox4 = document.getElementById("item8").checked;
  
    /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
    /* the correct answer */
    if (checkbox1 && !checkbox2 && !checkbox3 && checkbox4){
      ri_removeClass(document.getElementById('responsMessage2'), 'ri-alert-danger');
      document.getElementById("responsMessage2").innerHTML = respons1;
      ri_addClass(document.getElementById("responsMessage2"), "ri-alert-success");
      ri_removeClass(document.getElementById('responsMessage2'), 'riHide');
      /* wrong message */
    } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
      document.getElementById("responsMessage2").innerHTML = respons2;
      ri_addClass(document.getElementById("responsMessage2"), "ri-alert-danger");
      ri_removeClass(document.getElementById('responsMessage2'), 'riHide');
      /* hide message if nothing is checked */
    } else {
      ri_addClass(document.getElementById("responsMessage2"), "riHide");
    }
  }

    /* THIRD multiplechoice box in exampage */

    function fnCheckAnswer3() {

   
      var respons1 = "Riktig svar! Fordi at: alternativ tekst";
      var respons2 = "Feil svar! Fordi at: alternativ tekst";
  
      /* gets the values form the checkboxes, if they are check or not */
      let checkbox1 = document.getElementById("item9").checked;
      let checkbox2 = document.getElementById("item10").checked;
      let checkbox3 = document.getElementById("item11").checked;
      let checkbox4 = document.getElementById("item12").checked;
    
      /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
      /* the correct answer */
      if (!checkbox1 && checkbox2 && checkbox3 && !checkbox4){
        ri_removeClass(document.getElementById('responsMessage3'), 'ri-alert-danger');
        document.getElementById("responsMessage3").innerHTML = respons1;
        ri_addClass(document.getElementById("responsMessage3"), "ri-alert-success");
        ri_removeClass(document.getElementById('responsMessage3'), 'riHide');
        /* wrong message */
      } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
        document.getElementById("responsMessage3").innerHTML = respons2;
        ri_addClass(document.getElementById("responsMessage3"), "ri-alert-danger");
        ri_removeClass(document.getElementById('responsMessage3'), 'riHide');
        /* hide message if nothing is checked */
      } else {
        ri_addClass(document.getElementById("responsMessage3"), "riHide");
      }
    }


      /* FOURTH multiplechoice box in exampage */

  function fnCheckAnswer4() {

   
    var respons1 = "Riktig svar! Fordi at: alternativ tekst";
    var respons2 = "Feil svar! Fordi at: alternativ tekst";

    /* gets the values form the checkboxes, if they are check or not */
    let checkbox1 = document.getElementById("item13").checked;
    let checkbox2 = document.getElementById("item14").checked;
    let checkbox3 = document.getElementById("item15").checked;
    let checkbox4 = document.getElementById("item16").checked;
  
    
    /* the requirement for when to show the correct-answer msg and the wrong-answer msg */

    /* the correct answer */
    if (checkbox1 && checkbox2 && !checkbox3 && !checkbox4){
      ri_removeClass(document.getElementById('responsMessage4'), 'ri-alert-danger');
      document.getElementById("responsMessage4").innerHTML = respons1;
      ri_addClass(document.getElementById("responsMessage4"), "ri-alert-success");
      ri_removeClass(document.getElementById('responsMessage4'), 'riHide');
      /* wrong message */
    } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
      document.getElementById("responsMessage4").innerHTML = respons2;
      ri_addClass(document.getElementById("responsMessage4"), "ri-alert-danger");
      ri_removeClass(document.getElementById('responsMessage4'), 'riHide');
      /* hide message if nothing is checked */
    } else {
      ri_addClass(document.getElementById("responsMessage4"), "riHide");
    }
  }


    /* FIFTH multiplechoice box in exampage */

    function fnCheckAnswer5() {

   
      var respons1 = "Riktig svar! Fordi at: alternativ tekst";
      var respons2 = "Feil svar! Fordi at: alternativ tekst";
  
      /* gets the values form the checkboxes, if they are check or not */
      let checkbox1 = document.getElementById("item17").checked;
      let checkbox2 = document.getElementById("item18").checked;
      let checkbox3 = document.getElementById("item19").checked;
      let checkbox4 = document.getElementById("item20").checked;
    
      /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
      /* the correct answer */
      if (!checkbox1 && !checkbox2 && checkbox3 && checkbox4){
        ri_removeClass(document.getElementById('responsMessage5'), 'ri-alert-danger');
        document.getElementById("responsMessage5").innerHTML = respons1;
        ri_addClass(document.getElementById("responsMessage5"), "ri-alert-success");
        ri_removeClass(document.getElementById('responsMessage5'), 'riHide');
        /* wrong message */
      } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
        document.getElementById("responsMessage5").innerHTML = respons2;
        ri_addClass(document.getElementById("responsMessage5"), "ri-alert-danger");
        ri_removeClass(document.getElementById('responsMessage5'), 'riHide');
        /* hide message if nothing is checked */
      } else {
        ri_addClass(document.getElementById("responsMessage5"), "riHide");
      }
    }


      /* SIXT Hmultiplechoice box in exampage */

  function fnCheckAnswer6() {

   
    var respons1 = "Riktig svar! Fordi at: alternativ tekst";
    var respons2 = "Feil svar! Fordi at: alternativ tekst";

    /* gets the values form the checkboxes, if they are check or not */
    let checkbox1 = document.getElementById("item21").checked;
    let checkbox2 = document.getElementById("item22").checked;
    let checkbox3 = document.getElementById("item23").checked;
    let checkbox4 = document.getElementById("item24").checked;
  
    /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
    /* the correct answer */
    if (!checkbox1 && checkbox2 && !checkbox3 && checkbox4){
      ri_removeClass(document.getElementById('responsMessage6'), 'ri-alert-danger');
      document.getElementById("responsMessage6").innerHTML = respons1;
      ri_addClass(document.getElementById("responsMessage6"), "ri-alert-success");
      ri_removeClass(document.getElementById('responsMessage6'), 'riHide');
      /* wrong message */
    } else if (checkbox1 || checkbox2 || checkbox3 || checkbox4){
      document.getElementById("responsMessage6").innerHTML = respons2;
      ri_addClass(document.getElementById("responsMessage6"), "ri-alert-danger");
      ri_removeClass(document.getElementById('responsMessage6'), 'riHide');
      /* hide message if nothing is checked */
    } else {
      ri_addClass(document.getElementById("responsMessage6"), "riHide");
    }
  }












  /* functions that checks, add and remove css form an element */

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