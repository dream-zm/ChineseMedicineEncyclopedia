
$(function(){
	var search_con =` <div>
            <div class="search_select">
                <div class="select_radius clear">
                    <img class="search_png_png" src="img/common/search_png.png">
                   <input placeholder="搜索词条" class="search_title" type="text" name=""> 
                    <span class="search_close">取消</span> 
                </div>   
            </div>

            <ul>
                <li class="padding search_list">
                    天地玄黄  天下第一 
                    <img class="delete_search_img" src="img/common/close.png">
                </li>
                <li class="padding search_list">
                    天地玄黄  天下第一 
                    <img class="delete_search_img" src="img/common/close.png">
                </li>
                <li class="padding search_list">
                    天地玄黄  天下第一 
                    <img class="delete_search_img" src="img/common/close.png">
                </li>
                <li class="padding clear_record">
                    清空历史纪录
                </li>
            </ul>
        </div> `;

        var nav = ` <div class="common_top">
            <img class="search" src="img/common/search.png">
            <img class="logo" src="img/common/logo.png">
            <img class="share" src="img/common/share.png">
            <img class="xiala" src="img/common/xiala.png">
        </div>`;

        var nav_cateloge = ` <div class="common_top">
            <img class="search" src="img/common/search.png">
            目录分类
            <img class="share" src="img/common/share.png">
            <img class="xiala" src="img/common/xiala.png">
        </div>`;

        var top_list = ` <div class="common_top">
            <img class="search" src="img/common/search.png">
            药材百科
            <img class="share" src="img/common/share.png">
            <img class="xiala" src="img/common/xiala.png">
        </div>`;

		var top_list_catalogue = ` <div class="common_top">
            <img class="search" src="img/common/search.png">
            金线吊葫芦
            <img class="share" src="img/common/share.png">
            <img class="xiala" src="img/common/xiala.png">
        </div>`;
        
        var top_list_detail = ` <div class="common_top">
            <img class="search" src="img/common/search.png">
            竹沥
            <img class="share" src="img/common/share.png">
            <img class="xiala" src="img/common/xiala.png">
        </div>`;

        var cateloge = `
        	<ul class="clear">
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>
            <li class="cate_list">
                <a href="catalogue_list.html">
                    <img class="catalogue_img" src="img/common/cate.png">
                </a>
                <p>金线吊葫芦</p>
            </li>    
        </ul>
        `
	$(".search_con").append(search_con);
	$(".top").append(nav);
	$(".top_nav").append(nav_cateloge);
	$(".catalogue").append(cateloge);
	$(".top_list").append(top_list);
	$(".top_list_catalogue").append(top_list_catalogue);
	$(".top_list_detail").append(top_list_detail);


	$(".search").on("click", function() {
	    $(".search_con").css("display", "block");
	     $(".catalogue").css("display","none");
	    $(".content").css("display", "none");
	})

	$(".search_close").on("click", function() {
	    $(".search_con").css("display", "none");
	    $(".content").css("display", "block");
	})

	$(".share").on("click", function() {
	    alert("去分享")
	})

	$(".xiala").on("click", function() {
		$(".catalogue").css("display")=="block"?$(".catalogue").css("display","none"):$(".catalogue").css("display","block");
	    $(".content").css("display")=="block"? $(".content").css("display","none"): $(".content").css("display","block");
	})

    $(".search_title").on("input propertychange", function() {
        alert('监听中');
    })


})


$(".praise_list").on('click', 'li', function () {
    $(this).addClass("green").siblings().removeClass("green");
})



	

