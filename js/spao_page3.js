var swiper = new Swiper(".mySwiper", {
    slidesPerView :`auto`, // 한 슬라이드에 보여줄 갯수
    spaceBetween : 20, // 슬라이드 사이 여백
    slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
    loop:true,
    pagination :false, // pager 여부
    autoplay: {
        delay: 3000 // setInterval 같은거
    }, 
    speed: 1000,  // 들어올때까지 걸리는 시간
    navigation:false  // 버튼 사용자 지정
});


$(document).ready(function(){ 
    
    
    




let box_count = $('.add_img_box').length;
let box_w = $('.add_img_box').outerWidth() + 20;
for(let i=0; i<box_count; i++) {
    $('.add_img_box').eq(i).css({left: box_w * i})
}


    let bang = 0;
    $('.right').click(function(){

        $('.add_img_box').animate({
            left: `-=${box_w}`
        }, 500, 'linear') 

        $('.add_img_box').eq(bang % box_count).animate({
            left: box_w * (box_count - 1)
        }, 0, 'linear')

        bang+=1;

    })
    $('.left').click(function(){

        $('.add_img_box').eq((bang - 1) % box_count).animate({
            left: -box_w
        }, 0, 'linear')

        
        $('.add_img_box').animate({
            left: `+=${box_w}`
        }, 500, 'linear') 

        bang-=1;

    })

})


$(document).on('click','.choose_color_box', function(){
    let clicked_color = $(this).children('.chs_color_box').data('color');
    // black, white, gray
    if(!$('.ttt').hasClass(clicked_color)) {
        
        // 없으면
        $('.selected_item_box').append(`
            <div class="selected_item">
                <div class="si_1">
                    <div>마켓디자인</div>
                    <div class="ttt ${clicked_color}">-${clicked_color}</div>
                </div>
                <div class="si_2">
                    <input type="button" value="-" class="btn_qty_minus">
                    <input type="text" class="txt_qty" value="1">
                    <input type="button" value="+" class="btn_qty_plus">
                    <div class="btn_remove_item">X</div>
                </div>
                <div class="si_3">
                    <div class="each_price">${(ITEM_LIST[cateNo][itemNo].price)}원</div>
                    <div>(적립 10,000원)</div>
                </div> 
            </div>
            `)
            
            total_price()
    }
    else {
        // 있으면
        alert("이미 선택한 옵션입니다.")
    }
});

$(document).on('click', '.btn_remove_item', function(){
    $(this).parents('.selected_item').remove();
    total_price()
});


$(document).on('click', '.btn_qty_minus', function(){

    let tmp = $(this).next('.txt_qty')

    if(+tmp.val() > 1) {
        tmp.val(   +tmp.val()-1    )
        
        $(this).parent().next().children('.each_price').text((tmp.val()*ITEM_LIST[cateNo][itemNo].price) + "원")


        total_price()
    }
    else {
        alert("최소 주문수량은 1개 입니다.")
    }

});
$(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    tmp.val(   +tmp.val()+1    )
 

    $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cateNo][itemNo].s_price) + "원")



    total_price()
});
 
function total_price() {
    let total_price=0;
    let total_qty = 0;

    for(let i=0; i<$('.txt_qty').length; i++) {
        total_price += $('.txt_qty').eq(i).val() * ITEM_LIST[cateNo][itemNo].price;

        total_qty += +$('.txt_qty').eq(i).val();
    }
 
    $('.final_price').text(comma(total_price) + "원")

    $('.final_qty').text(total_qty)
}