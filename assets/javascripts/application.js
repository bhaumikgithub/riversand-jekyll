$(document).ready(function(){
	////////////////////
	/*$('#desktopnemu').meanmenu({
		meanScreenWidth     : "800",
		meanMenuContainer   : '#hand-over'
	});*/
	/*$('#developers-users ul li').matchHeight({
        target: $(this).find('.link-box')
    });*/
	//same-height
	$('.same-height').jQueryEqualHeight('.full-box .loop-box .body-text');
	$('.same-height').jQueryEqualHeight('.full-box .loop-box .title');
	$('.same-height').jQueryEqualHeight('.full-box');
	//$('.nav-content-holder > div > ul > li').jQueryEqualHeight('.link-box');
	var pushLeft = new Menu({
        wrapper: '#o-wrapper',
        type: 'push-left',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
    });

    // var pushLeftBtn = document.querySelector('#c-button--push-left');
      
    // pushLeftBtn.addEventListener('click', function(e) {
    //     e.preventDefault;
    //     pushLeft.open();
    // });
	function makeSameHeight(getele){
		var spDivH = 0;
		$(getele).each(function( index ) {
			console.log( index + ": " + $( this ).text() );
			var th = $( this ).height();
			if(th > spDivH){
				spDivH = th;
			}
		});
		
		return spDivH;
	}
	var getHH = makeSameHeight('#developers-users ul li');
	$('#developers-users ul li .link-box').css({'min-height':getHH});
	///
	$('#cookie-notice .button.bootstrap').click(function(event){
		event.preventDefault()
		$('#cookie-notice').fadeOut('fast');
	})
	//
	$('select').selectric();
	//
	//$('#paragraphs').cascadingDivs();
	var sph = 0;
	$('.nav-content-holder > div').each(function( index ) {
		console.log( index + ": " + $( this ).text() );
		var th = $( this ).outerHeight();
		if(th > sph){
			sph = th;
		}
	});
	$('.nav-content-holder > div').css({'position':'absolute'});
	//$('.nav-content-holder').css({'min-height':sph});
	///////
	var navH = 0;
	$('.nav-items > div').each(function(index) {
		var getleft = index*33.3333;
		var getH = $(this).height();
		//alert(getH);
		if(navH < getH){
			navH = getH;
		}
		$(this).css({'left':getleft+'%'});
	});
	$('.nav-items').css({'min-height':navH});
	//$('.nav-items > div:nth-child(1)').css({'position':'absolute','left':0});
	///////
	$('.nav-content-holder > div > ul > li').jQueryEqualHeight('.link-box');
	var currentbox = null;
	$('.nav-items > div').click(function() {
		var getid = $(this).attr('data-id');
		var getindex = $(this).index();
		var getindexnew = $(this).index()+1;
		if(currentbox == getindex){
			return;
		}
		currentbox = getindex;
		//alert(getid);
		$('.nav-items > div').removeClass('cascade-div-selected');
		$('.nav-items > div').removeClass('cascade-div-unselected');
		$('.nav-items > div').removeClass('cascade-show');
		////
		//alert(getindex);
		if(getindex == 0){
			$('.nav-items > div:nth-child(1)').addClass('cascade-div-selected').css({'position':'absolute','left':0});
			$('.nav-items > div:nth-child(2)').addClass('cascade-div-unselected').css({'position':'absolute','left':'60%'});
			$('.nav-items > div:nth-child(3)').addClass('cascade-div-unselected').css({'position':'absolute','left':'80%'});
		}else if(getindex == 1){
			$('.nav-items > div:nth-child(1)').addClass('cascade-div-unselected').css({'position':'absolute','left':0});
			$('.nav-items > div:nth-child(2)').addClass('cascade-div-selected').css({'position':'absolute','left':'20%'});
			$('.nav-items > div:nth-child(3)').addClass('cascade-div-unselected').css({'position':'absolute','left':'80%'});
		}else if(getindex == 2){
			$('.nav-items > div:nth-child(1)').addClass('cascade-div-unselected').css({'position':'absolute','left':0});
			$('.nav-items > div:nth-child(2)').addClass('cascade-div-unselected').css({'position':'absolute','left':'20%'});
			$('.nav-items > div:nth-child(3)').addClass('cascade-div-selected').css({'position':'absolute','left':'40%'});
		}
		setTimeout(function(){ 
			$('.nav-items > div:nth-child('+getindexnew+')').addClass('cascade-show');
		}, 300);
		//$('.nav-content-holder > div:not(#'+getid+')').fadeOut('fast');
		//$('.nav-content-holder > div#'+getid).fadeIn('fast');
		//$('.nav-content-holder > div > ul > li').jQueryEqualHeight('.link-box');
		
	})
	$('.nav-items > div:nth-child(1)').click();
	/////
});
$(window).load(function() {
	var getdocH = $(document).height();
	var getwinH = $(window).height();
	var getwinW = $(window).width();
	//alert(getdocH+', '+getwinH);
	var getHeaderH = $('header').outerHeight();
	var getLinkH = $('.link-block').outerHeight();
	var getPaddingH = (getdocH-getLinkH);
	var maxh = getwinH-getHeaderH;
	getPaddingH = (getPaddingH-getHeaderH)/2;
	//if(getwinW > 768){
		//$('.right-panel').css({'padding-top':getHeaderH+20, 'min-height':getdocH});
		//$('.links-massage').css({'padding-top':getPaddingH});
		$('.links-massage').css({'padding-top':'30px'});
		$('.right-panel .link-block').css({'max-height':maxh-150});
		$('.right-panel .link-block').mCustomScrollbar();
	//}
	///
});