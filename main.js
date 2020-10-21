// $(window).on("load", function (e) {
//     $(".selectCodePen").hide();
//     $("body").append('<div class="selectBox"><div class="selectedOpt">Select Here...</div><div class="optList"></div></div>');
//     var getSelectHtml = $(".selectCodePen").html();
//     getSelectHtml = getSelectHtml.replace(/<option>/g, "<div class='option'>");
//     getSelectHtml = getSelectHtml.replace(/<\/option>/g, "</div>");
//     var optionLength = $(".selectCodePen").find("option").length;

//     console.log(getSelectHtml, optionLength);
//     $(".optList").append(getSelectHtml);
//     $(".optList").hide();
//     $(".optList").on("click", ".option", function () {
//         $(".option").removeClass("selected");
//         $(this).addClass("selected");
//         $(".selectedOpt").html("");
//         var getHtmlOpt = $(this).html();
//         $(".selectedOpt").append(getHtmlOpt);
//     });
//     $(".selectBox").on("click", function () {
//         $(this).toggleClass("openSelect");
//         $(".optList").slideToggle();
//     });

//     $(document).mouseup(function (e) {
//         var container = $(".selectBox");

//         if (!container.is(e.target) && container.has(e.target).length === 0) {
//             container.toggleClass("openSelect");
//             $(".optList").slideToggle();
//         }
//     }); 
// });

// Used jquery v3.5.1 and font-awesome v4.7.0
// $(document).ready(function() {
//     $('.nav .dropdown-menu').prev('a').on('click', function(e) {
//       e.preventDefault();
//       $(this).parent().find('.dropdown-menu').slideToggle();
//     });
// });



// 1 - Criar um campo input pra coletar o nome do novo item
// 2 - Criar um campo input pra coletarr o link do novo item
// 3 - Um <select> pra listar todos os itens de menu capturados


(function() {
    'use strict';

    var nomeItem = document.querySelector('.nome-item');
    var linkItem = document.querySelector('.link-item');
    var itemMenu = document.querySelectorAll('.nav-links .nav-item a');
    var btnGetValues = document.querySelector('.btn-click');
    var select = document.querySelector('.selectCodePen');

     

    btnGetValues.addEventListener('click', getInputs);
    function getInputs() {
        nomeItem.value;
        linkItem.value;
        console.log(nomeItem.value);
        console.log(linkItem.value);
    }
    
   

    function listItensMenu() {  
        for(var i = 0; i < itemMenu.length; i++) { 
            var result = itemMenu[i];   
            listOption(result);
        }  
    }
    listItensMenu();


    function listOption(resultItens) {
        var createOption = document.createElement('option');
        var optionText = document.createTextNode(resultItens.textContent);
        createOption.appendChild(optionText);
        createOption.setAttribute('value', resultItens.textContent);
        select.appendChild(createOption);
    }

})();