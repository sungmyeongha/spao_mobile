$('.ham_btn').click(function(){

    $('.header_pan').animate({
        
        left:'0',
        Zindex:`99999999999999999999`
    }, 1000)

    $('.header').css({
        position:'static'
    })

    $('body').css({
        overflow:`hidden`
    })

    $('.main').css({
        marginTop:0
    })
})


$('.x_btn').click(function(){

    $('.header_pan').animate({
        position:'fixed',
        left:'-200%'
    }, 300)

    $('.header').css({
        position:'fixed'
    })

    $('body').css({
        overflow:`auto`
    })
    
    $('.main').css({
        marginTop: `110px`
    })
})


$('.header_top_msg').click(function(){
     
    $('.header_top_msg').css({
        borderBottom: 0
    })

    $('.header_top_msg').eq($(this).index()).css({
        borderBottom: '2px solid',
        boxSizing:'border-box'
    })

    $('.header_msg_box').css({
        display:'none'
    })

    $('.header_msg_box').eq($(this).index()).css({
        display:'block'
    })


})


$(window).scroll(function(){
    if($(window).scrollTop() == 0 ) {
        $('.header').css({
            backgroundColor:`inherit`
        })
        $('.under_header_box ').css({
            display: 'none'
        })
        $('.scroll_msg_box').css({
            display:'none'
        })

    }else {
        $('.header').css({
            backgroundColor:`white`
        })
        $('.under_header_box ').css({
            display: 'flex'
        })
        $('.scroll_msg_box').css({
            display:'flex'
        })
    }
})




