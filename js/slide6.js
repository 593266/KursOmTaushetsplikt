let q1correct = false;
let q2correct = false;
//nextBtn is used to disable the "next" button on each page 
//until the multiple choice questions are answered correctly
const nextBtn = document.getElementById("next");

/* the first multipechoice box */
(function () {
  // your page initialization code here
  // the DOM will be available here
  var checkbutton1 = document.getElementById('sjekksvar1');
  var checkbutton2 = document.getElementById('sjekksvar2');


  /* checks if button 1 is clicked and runs fnCheckAnswer() */
  checkbutton1.addEventListener('click', function (event) {
    fnCheckAnswer1()

  });
  
    /* checks if button 1 is clicked and runs fnCheckAnswer() */
    checkbutton2.addEventListener('click', function (event) {
      fnCheckAnswer2()
  
    });

})();


/* FIRST multiplechoice box */
function fnCheckAnswer1() {

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
  if (!checkbox1 && checkbox2 && checkbox3 && !checkbox4) {
    ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-partially');
    ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-danger');
    document.getElementById("responsMessage1").innerHTML = respons1;
    ri_addClass(document.getElementById("responsMessage1"), "ri-alert-success");
    ri_removeClass(document.getElementById('responsMessage1'), 'riHide');

    q1correct = true;

    /* Partially correct */
  } else if ((checkbox1 || checkbox4) && (checkbox2 || checkbox3)){
    ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-danger');
    document.getElementById("responsMessage1").innerHTML = respons3;
    ri_addClass(document.getElementById("responsMessage1"), "ri-alert-partially");
    ri_removeClass(document.getElementById('responsMessage1'), 'riHide');
    
    /* wrong message */
  } else if ((checkbox1 || checkbox4) && !checkbox2 && !checkbox3) {
    ri_removeClass(document.getElementById('responsMessage1'), 'ri-alert-partially');
    document.getElementById("responsMessage1").innerHTML = respons2;
    ri_addClass(document.getElementById("responsMessage1"), "ri-alert-danger");
    ri_removeClass(document.getElementById('responsMessage1'), 'riHide');
    /* hide message if nothing is checked */
  } else {
    ri_addClass(document.getElementById("responsMessage1"), "riHide");
  }
  enableNextButton();

}

function fnCheckAnswer2() {
  var respons1 = "Riktig svar!";
  var respons2 = "Feil svar!";

  /* gets the values form the checkboxes, if they are check or not */
  let checkradio1 = document.getElementById("item5").checked;
  let checkradio2 = document.getElementById("item6").checked;


  /* the requirement for when to show the correct-answer msg and the wrong-answer msg */
  /* the correct answer */
  if (!checkradio1 && checkradio2) {
    ri_removeClass(document.getElementById('responsMessage2'), 'ri-alert-danger');
    document.getElementById("responsMessage2").innerHTML = respons1;
    ri_addClass(document.getElementById("responsMessage2"), "ri-alert-success");
    ri_removeClass(document.getElementById('responsMessage2'), 'riHide');

    q2correct = true;

  } else if (checkradio1 && !checkradio2) {
    document.getElementById("responsMessage2").innerHTML = respons2;
    ri_addClass(document.getElementById("responsMessage2"), "ri-alert-danger");
    ri_removeClass(document.getElementById('responsMessage2'), 'riHide');
  } else {
    ri_addClass(document.getElementById("responsMessage2"), "riHide");
  }
  enableNextButton();

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

function enableNextButton() {
  if (q1correct && q2correct ) {
    //enable next button
    nextBtn.removeAttribute("disabled");
  }
} 