$( document ).ready(function() {
$( window ).load(function() {
	$('#loadingsplash').remove();
	clearInterval(dots);
});
	$( ".pull_menu" ).click(function(event) {
		event.stopPropagation(); event.preventDefault();
		$('header').toggleClass('pull_menu_in_out');
		$('.pull_menu').toggleClass('pull_menu_icon');
		$('.content').toggleClass('push_wrap');
		$('.line-1').toggleClass('rotate-line-one');
		$('.line-2').toggleClass('rotate-line-two');
		$('.line-3').toggleClass('rotate-line-three');
		$(".overlay").toggleClass("wrapblur");
	});

	$( "#wrapper" ).click(function(event) {
		event.stopPropagation(); event.preventDefault();
		$('header').removeClass('pull_menu_in_out');
		$('.pull_menu').removeClass('pull_menu_icon');
		$('.line-1').removeClass('rotate-line-one');
		$('.line-2').removeClass('rotate-line-two');
		$('.line-3').removeClass('rotate-line-three');
		$('.content').removeClass('push_wrap');
		$(".overlay").removeClass("wrapblur");
	});


/*==================================
=            Typewriter            =
==================================*/
		//define text
        var text = $('.writetext').text();
        //text is split up to letters
        $.each(text.split(''), function(i, letter){

            //we add 100*i ms delay to each letter 
            setTimeout(function(){
                //we add the letter to the container
                $('.writetextstyle').html($('.writetextstyle').html() + letter);
            
            }, 100*i);
        });
/*-----  End of Typewriter  ------*/

/*==============================================
=            dotdotdot loading dots            =
==============================================*/

var dots = window.setInterval( function Whatup() {
    var wait = document.getElementById("wait");
    if ( wait.innerHTML.length > 3 )
        wait.innerHTML = "";
    else
        wait.innerHTML += ".";
    }, 200);

/*-----  End of dotdotdot loading dots  ------*/


/*================================================
=            Bind keys for navigation            =
================================================*/
$(document).keyup(function(e) {
  var tag = e.target.tagName.toLowerCase();
  if (e.keyCode == 77 && tag != 'input' && tag != 'textarea') $('.pull_menu').click();     // m
  if (e.keyCode == 27) $('#wrapper').click();   // esc
});


/*-----  End of Bind keys for navigation  ------*/



});
//Jquery end


//300ms delete on phone click events..

function NoClickDelay(el) {
	this.element = el;
	if( window.Touch ) this.element.addEventListener('touchstart', this, false);
}

function NoClickDelay(el) {
	this.element = typeof el == 'object' ? el : document.getElementById(el);
	if( window.Touch ) this.element.addEventListener('touchstart', this, false);
}
NoClickDelay.prototype = {
	handleEvent: function(e) {
		switch(e.type) {
			case 'touchstart': this.onTouchStart(e); break;
			case 'touchmove': this.onTouchMove(e); break;
			case 'touchend': this.onTouchEnd(e); break;
		}
	},

	onTouchStart: function(e) {
		e.preventDefault();
		this.moved = false;

		this.theTarget = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
		if(this.theTarget.nodeType == 3) this.theTarget = theTarget.parentNode;
		this.theTarget.className+= ' pressed';

		this.element.addEventListener('touchmove', this, false);
		this.element.addEventListener('touchend', this, false);
	},

	onTouchMove: function(e) {
		this.moved = true;
		this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
	},

	onTouchEnd: function(e) {
		this.element.removeEventListener('touchmove', this, false);
		this.element.removeEventListener('touchend', this, false);

		if( !this.moved && this.theTarget ) {
			this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
			var theEvent = document.createEvent('MouseEvents');
			theEvent.initEvent('click', true, true);
			this.theTarget.dispatchEvent(theEvent);
		}

		this.theTarget = undefined;
	}
};


