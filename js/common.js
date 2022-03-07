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

   



