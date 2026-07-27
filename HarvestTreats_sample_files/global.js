/*header start*/

/*res search start*/

document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("responsive-search-ux-ui-btn");
    const toggleBtn = document.getElementById("responsive-toggle-icon");
    const searchBox = document.getElementById("responsive-search-ux-ui");
    const responsiveNavMenu = document.getElementById("responsive-nav-menu");
    
    const responsiveSearchTrigger = () => {
        searchBox.classList.toggle("res-ui-ux-wrapper");
    }
    
    searchBtn.addEventListener("click", responsiveSearchTrigger);
});

/*res search end*/



/*res nav menu start*/

document.addEventListener("DOMContentLoaded", function() {
    const resToggleBtn = document.getElementById("responsive-toggle-icon");
    const resNavMenu = document.getElementById("responsive-nav-menu");
    const resNavFade = document.getElementById("res-nav-fade-wrapper");
    const body = document.querySelector("html");

    const responsiveMenuTrigger = () => {
        if (resNavMenu.classList.contains("hide-res-nav")) {
            resNavMenu.classList.remove("hide-res-nav");
            resNavFade.classList.remove("hide-res-nav-backdrop");
            body.style.overflow = "hidden";
        }
    };

    const closeResponsiveMenu = (event) => {
        if (
            !resNavMenu.classList.contains("hide-res-nav") &&
            event.target === resNavFade
        ) {
            resNavMenu.classList.add("hide-res-nav");
            resNavFade.classList.add("hide-res-nav-backdrop");
            body.style.overflow = "";
        }
    };

    resToggleBtn.addEventListener("click", responsiveMenuTrigger);
   
    resNavFade.addEventListener("click", closeResponsiveMenu);
});

/*res nav menu end*/

/*header end*/







/*custom dropdown start*/

document.addEventListener("DOMContentLoaded", () => {
    const customDropdown = document.querySelector(".custom-drop-down");
    const customDropdownList = document.querySelector(".custom-drop-down-list");
    
    const customDropdownTrigger = () => {
        if (customDropdownList.classList.contains("drop-down-fade-hide")) {
            customDropdownList.style.zIndex = "9999";
            customDropdownList.classList.remove("drop-down-fade-hide");
            
            setTimeOut(() => {
                customDropdownList.style.zIndex = "9999 !important";
            }, 300);
        } else {
            customDropdownList.classList.add("drop-down-fade-hide");
            
            setTimeout(() => {
                customDropdownList.style.zIndex = "-9";
            }, 300);
        }
    }
    
    customDropdown.addEventListener("click", customDropdownTrigger);
});

/*custom dropdown end*/






/*cart offset menu start*/

document.addEventListener("DOMContentLoaded", () => {
    const cartBasketBtn = document.getElementById("cart-basket");
    const cartBasketOffsetMenu = document.querySelector(".cart-offset-menu");
    const cartOffsetMenuBackdrop = document.getElementById("res-cart-fade-wrapper");
    const cartOffsetMenuCloseBtn = document.getElementById("cart-offset-menu-close");
    const body = document.querySelector("html");
    
    const offsetCartTrigger = () => {
        if(cartBasketOffsetMenu.classList.contains("cart-offset-menu-hide")) {
            cartBasketOffsetMenu.classList.remove("cart-offset-menu-hide");
            cartOffsetMenuBackdrop.classList.remove("hide-res-cart-backdrop");
            body.classList.add("overflow-hidden");
        }
    }
    
    cartBasketBtn.addEventListener("click", offsetCartTrigger);
    
    
    const offsetCartCloseTrigger = () => {
        if(!cartBasketOffsetMenu.classList.contains("cart-offset-menu-hide")) {
            cartBasketOffsetMenu.classList.add("cart-offset-menu-hide");
            cartOffsetMenuBackdrop.classList.add("hide-res-cart-backdrop");
            body.classList.remove("overflow-hidden");
        }
    }
    
    cartOffsetMenuCloseBtn.addEventListener("click", offsetCartCloseTrigger);
});

/*cart offset menu end*/








/*check zip modal start*/

document.addEventListener("DOMContentLoaded", () => {
    const zipBtn = document.getElementById("zip-modal-btn");
    const zipModal = document.getElementById("zip-modal-wrapper");
    const zipModalBackdrop = document.getElementById("res-cart-fade-wrapper");
    const zipModalClosebtn = document.getElementById("zip-modal-close-btn");
    const body = document.querySelector("html")
    
    const zipModalTrigger = () => {
        zipModalBackdrop.classList.remove("hide-res-cart-backdrop");
        zipModal.style.zIndex = "9999";
        zipModal.style.opacity = "1";
        zipModal.style.transition = "0.3s ease-in-out";
        body.classList.add("overflow-hidden");
    };
    
    zipBtn.addEventListener("click", zipModalTrigger);
    
    
    const zipModalCloseTrigger = () => {
        zipModalBackdrop.classList.add("hide-res-cart-backdrop");
        zipModal.style.zIndex = "-9";
        zipModal.style.opacity = "0";
        zipModal.style.transition = "0.3s ease-in-out";
        body.classList.remove("overflow-hidden");
    };
    
    zipModalClosebtn.addEventListener("click", zipModalCloseTrigger);
});

/*check zip modal end*/







/*scroll to top button start*/

document.addEventListener("DOMContentLoaded", () => {
    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    }); 
});

/*scroll to top button end*/


