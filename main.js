$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

        var myArr = [{name:'a'},{name:'b'},{name:'c'},{name:'d'},{name:'e'}]

        $('#myInput').on('keyup',function(){
            var value =$(this).val().toLowerCase();
            console.log(value);
            $('#videos div').filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            })

            // var data = searchData(value , myArr);
            // console.log(data);
        })

        // function searchData(value,data){
        //     var filterdata=[];
        //     for(var i=0;i<data.length;i++){
        //         value =value.toLowerCase()
        //         var name = data[i].name.toLowerCase()
        //         if(name.includes(value)){
        //             filterdata.push(data[i])
        //         }
        //     }
        //     return filterdata;
        // }

    });



})