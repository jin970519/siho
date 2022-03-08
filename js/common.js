
$(function()
{
    $('#toggle').click(function(){
        if($(this).hasClass('on')){
            $('.head').animate({
                height:0
            },500)
            $(this).removeClass('on');
        }else{
            $('.head').animate({
                height:1000
            },500);
            $(this).addClass('on');
        }
        
    });


	//클릭시 해당영여그로 스크롤

    $('.nav-link').each(function(){
		$(this).click(function(event){
			$('.nav-link').css({'color':'#fff'});
			event.preventDefault();
			
			$('html,body').animate({scrollTop:$(this.hash).offset().top},500);
            if(this.hash=='#about'){
                $('#about img').addClass('on');
            }
			$(this).css({'color':'#e0cdb1'});
		});
	});
    $(window).scroll(function(){
        let nowST = $(window).scrollTop();
        if(nowST>$('#in').height()){
            $('#about img').addClass('on');
        }
        $('.nav-link').css({'color':'#fff'});
				if(nowST<$('#about').offset().top){
					$('.nav-link').eq(0).css({'color':'#e0cdb1'});
				}else if(nowST<$('#deginer').offset().top){
					$('.nav-link').eq(1).css({'color':'#e0cdb1'});
				}else if(nowST<$('#service').offset().top){
					$('.nav-link').eq(2).css({'color':'#e0cdb1'});
				}else if(nowST<$('#gallery').offset().top){
					$('.nav-link').eq(3).css({'color':'#e0cdb1'});
				}else if(nowST<$('#contect').offset().top){
					$('.nav-link').eq(4).css({'color':'#e0cdb1'});
				}else{
					$('.nav-link').eq(5).css({'color':'#e0cdb1'});
				}
    });

    $('#gallery li img').click(function(){
        $('#gallery_modal img').attr({
            'src':$(this).attr('src')
        })
        $('#gallery_modal').show();
    });

    $('#gallery_modal').click(function(){
        $('#gallery_modal').hide();
    });

    $('#gallery_modal img').click(function(e){
        return false;
    });


})







   



