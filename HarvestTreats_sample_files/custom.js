/*file upload start*/

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});

/*file upload end*/



/*counter animation start*/

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

/*counter animation end*/





/*university tab content start*/

function openTab(event, tabId) {
    // Get all elements with class="tab-content-item" and hide them
    var tabContent = document.getElementsByClassName("tab-content-item");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    // Get all elements with class="tab-button" and remove the class "active"
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}

/*university tab content end*/







/*billing address show hide start*/

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the checkbox and the div
    const checkbox = document.getElementById('toggleCheckbox');
    const contentDiv = document.getElementById('contentDiv');
    
    if (checkbox > 0 && contentDiv > 0) {
        // Add an event listener to toggle visibility when the checkbox is clicked
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            contentDiv.style.display = 'block'; // Show the div
          } else {
            contentDiv.style.display = 'none'; // Hide the div
          }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the checkbox and the div
    const checkbox1 = document.getElementById('toggleCheckbox1');
    const contentDiv1 = document.getElementById('contentDiv1');
    
    if (checkbox1 > 0 && contentDiv1 > 0) {
        // Add an event listener to toggle visibility when the checkbox is clicked
        checkbox1.addEventListener('change', function() {
          if (this.checked) {
            contentDiv1.style.display = 'block'; // Show the div
          } else {
            contentDiv1.style.display = 'none'; // Hide the div
          }
        });
    }
});



/*custom tab content start*/

function openTab(event, tabId) {
    event.preventDefault();
    
  // Hide all tab contents
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all buttons
  const allButtons = document.querySelectorAll('.tab-btn');
  allButtons.forEach(button => {
    button.classList.remove('active');
    
    button.addEventListener("click", (event) => {
        event.preventDefault();
    });
  });

  // Show the selected tab content
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');

  // Add active class to clicked button
  event.currentTarget.classList.add('active');
}

/*custom tab content end*/

/*billing address show hide end*/







/*price range start*/

document.addEventListener("DOMContentLoaded", () => {
    const minSlider = document.querySelector(".slider-min");
    const maxSlider = document.querySelector(".slider-max");
    const sliderRange = document.querySelector(".slider-range");
    //   const minPriceInput = document.getElementById("min-price");
    //   const maxPriceInput = document.getElementById("max-price");  
    const minPriceInput = document.getElementById("minimum_price");
    const maxPriceInput = document.getElementById("maximum_price");
    const rangeMinDistance = 50;

    const updateSlider = () => {
    const minVal = parseInt(minSlider.value);
    const maxVal = parseInt(maxSlider.value);
    
    if (maxVal - minVal < rangeMinDistance) {
      if (event.target === minSlider) {
        minSlider.value = maxVal - rangeMinDistance;
      } else {
        maxSlider.value = minVal + rangeMinDistance;
      }
    }

    sliderRange.style.left = `${(minSlider.value / minSlider.max) * 100}%`;
    sliderRange.style.right = `${100 - (maxSlider.value / maxSlider.max) * 100}%`;

    minPriceInput.value = minSlider.value;
    maxPriceInput.value = maxSlider.value;
  };

  const updatePriceInputs = () => {
    const minVal = parseInt(minPriceInput.value);
    const maxVal = parseInt(maxPriceInput.value);

    if (maxVal - minVal >= rangeMinDistance && maxVal <= maxSlider.max) {
      minSlider.value = minVal;
      maxSlider.value = maxVal;

      sliderRange.style.left = `${(minSlider.value / minSlider.max) * 100}%`;
      sliderRange.style.right = `${100 - (maxSlider.value / maxSlider.max) * 100}%`;
    }
  };

  if (minSlider) {
      minSlider.addEventListener("input", updateSlider);
  }
  
  if (maxSlider) {
      maxSlider.addEventListener("input", updateSlider);
  }
  
  if (minPriceInput) {
      minPriceInput.addEventListener("input", updatePriceInputs);
  }
  
  if (maxPriceInput) {
      maxPriceInput.addEventListener("input", updatePriceInputs);
  }
});
  
 /*price range hide show start*/
 
 document.addEventListener("DOMContentLoaded", () => {
    const priceHideShowBtn = document.getElementById("dnewrewrer_toggle_btn"); 
    const priceHideShowRange = document.getElementById("price-range-wrapper"); 
    const pricePlusMinusIcon = document.getElementById("price-plus-minus"); 
    
    const priceRangeHideShowTrigger = () => {
        if (pricePlusMinusIcon.classList.contains("bi-plus")) {
            pricePlusMinusIcon.classList.remove("bi-plus");
            pricePlusMinusIcon.classList.add("bi-dash-lg");
        } else {
            pricePlusMinusIcon.classList.remove("bi-dash-lg");
            pricePlusMinusIcon.classList.add("bi-plus");
        }
        
        priceHideShowRange.classList.toggle("d-none");
    };
    
    if (priceHideShowBtn && priceHideShowRange && pricePlusMinusIcon) {
        priceHideShowBtn.addEventListener("click", priceRangeHideShowTrigger);
    }
 });

 /*price range hide show end*/

/*price range end*/





/*filter responsive menu start*/

document.addEventListener("DOMContentLoaded", () => {
    const filterResBtn = document.getElementById("filter-res-menu-btn");
    const filterResMenu = document.getElementById("filter-responsive-menu");
    const filterResMenuBackdrop = document.querySelector(".filter-res-backdrop-wrapper");
    const body = document.querySelector("html");

    // Function to toggle visibility of the menu
    const filterResMenuTrigger = () => {
        if (filterResMenu.classList.contains("filter_res_menu_hide_show")) {
            filterResMenu.classList.remove("filter_res_menu_hide_show");
            filterResMenuBackdrop.classList.remove("filter-res-backdrop-wrapper-hide");
            body.classList.add("overflow-hidden");
        }
    };

    // Function to hide the menu when clicking outside
    const handleOutsideClick = (event) => {
        if (!filterResMenu.contains(event.target) && // Check if the click is outside the menu
            !filterResBtn.contains(event.target)) {
            filterResMenu.classList.add("filter_res_menu_hide_show");
            filterResMenuBackdrop.classList.add("filter-res-backdrop-wrapper-hide");
            body.classList.remove("overflow-hidden");
        }
    };
    
    if (filterResBtn) {
        // Event listener for the button
        filterResBtn.addEventListener("click", filterResMenuTrigger);
    }

    // Event listener for clicking outside the menu
    document.addEventListener("click", handleOutsideClick);
});

/*filter responsive menu end*/








/*my account responsive start*/

document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
        const myAccountProfileBtn = document.querySelector(".dikjewiruewrrrr");
        const myAccountOptions = document.querySelector(".dhbheuwnbruew_my_profile");
        const myAccountResBackdrop = document.querySelector(".res-my-account-backdrop");
        const body = document.querySelector("html");

        myAccountProfileBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click from propagating to document
            if (myAccountOptions.classList.contains("duhewrewr_left_slide")) {
                myAccountOptions.classList.remove("duhewrewr_left_slide");
                myAccountResBackdrop.classList.remove("res-my-account-backdrop-hide");
                body.classList.add("overflow-hidden");
            }
        });

        document.addEventListener("click", (event) => {
            if (!myAccountOptions.contains(event.target) && !myAccountProfileBtn.contains(event.target)) {
                // Hide the menu and backdrop if click happens outside
                myAccountOptions.classList.add("duhewrewr_left_slide");
                myAccountResBackdrop.classList.add("res-my-account-backdrop-hide");
                body.classList.remove("overflow-hidden");
            }
        });
    }
});

/*my account responsive end*/









/*product description multiple images start*/

document.addEventListener("DOMContentLoaded", () => {
    const mainImages = document.querySelectorAll(".image-main-show");
    const multiNavImages = document.querySelectorAll(".multi-nav-image");
    const multiImageContainer = document.querySelector(".multi-image-container");
    const multiImageContainerInner = document.querySelector(".uihewrewr_wrapper");
    const leftArrow = document.querySelector(".thumbnail-left-arrow");
    const rightArrow = document.querySelector(".thumbnail-right-arrow");
    const arrowContainer = document.querySelector(".multi-image-thumbnail-arrows"); // Arrows container
    const thumbnailWidth = 110; // Approx width of each thumbnail (including margin/padding)
    const maxVisibleThumbnails = 4;
    let currentIndex = 0;
    let scrollPosition = 0;
    const screenWidth = window.innerWidth;

    if (mainImages.length && multiNavImages.length && multiImageContainer && arrowContainer) {
        // Show or hide arrows based on the number of thumbnails
        const toggleArrows = () => {
            const totalThumbnails = multiNavImages.length;

            if (totalThumbnails > maxVisibleThumbnails) {
                arrowContainer.style.display = "block";

                if (multiImageContainer.classList.contains("justify-content-center")) {
                    multiImageContainer.classList.remove("justify-content-center");
                }
            } else {
                arrowContainer.style.display = "none";

                if (!multiImageContainer.classList.contains("justify-content-center")) {
                    multiImageContainer.classList.add("justify-content-center");
                }
            }
        };

        toggleArrows();

        if (screenWidth <= 480 && multiNavImages.length === 4) {
            if (multiImageContainerInner) {
                multiImageContainerInner.setAttribute("style", "overflow-x: auto !important");
            }

            if (multiImageContainer.classList.contains("justify-content-center")) {
                multiImageContainer.classList.remove("justify-content-center");
            } else {
                multiImageContainer.classList.add("justify-content-center");
            }
        }

        // Function to update the main image when a thumbnail is hovered
        const showImageMain = (index) => {
            mainImages[currentIndex].classList.remove("active", "position-relative");
            multiNavImages[currentIndex].classList.remove("active");

            currentIndex = index;

            mainImages[currentIndex].classList.add("active");
            multiNavImages[currentIndex].classList.add("active");
        };

        // Add event listener to thumbnails
        multiNavImages.forEach((multiNavImage, index) => {
            multiNavImage.addEventListener("mouseenter", () => {
                showImageMain(index);
            });
        });

        // Left arrow click functionality
        if (leftArrow) {
            leftArrow.addEventListener("click", () => {
                if (scrollPosition > 0) {
                    scrollPosition -= thumbnailWidth;
                    multiImageContainer.style.transform = `translateX(-${scrollPosition}px)`;
                }
            });
        }

        // Right arrow click functionality
        if (rightArrow) {
            rightArrow.addEventListener("click", () => {
                const maxScroll = (multiNavImages.length - maxVisibleThumbnails) * thumbnailWidth;
                if (scrollPosition < maxScroll) {
                    scrollPosition += thumbnailWidth;
                    multiImageContainer.style.transform = `translateX(-${scrollPosition}px)`;
                }
            });
        }
    }
});

/*product description multiple images end*/













/*product deletion confirmation modal start*/

document.addEventListener("DOMContentLoaded", () => {
   const deleteConfirmationBtn = document.getElementById("bulk-delete-selection");
   const deleteConfirmationCloseBtns = document.querySelectorAll(".bulk-delete-confirmation-modal-close");
   const deleteConfirmationModal = document.getElementById("bulk-delete-confirmation-wrapper-modal");
   const body = document.querySelector("html");
   
   const deleteConfirmationModalTrigger = () => {
     if (deleteConfirmationModal.classList.contains("bulk-delete-confirmation-modal-hide")) {
         deleteConfirmationModal.classList.remove("bulk-delete-confirmation-modal-hide");
         body.classList.add("overflow-hidden");
     }
   };
   
   if (deleteConfirmationBtn && deleteConfirmationCloseBtns && deleteConfirmationModal) {
       deleteConfirmationBtn.addEventListener("click", deleteConfirmationModalTrigger);
   }
   
   const deleteConfirmationModalCloseTrigger = () => {
     if (!deleteConfirmationModal.classList.contains("bulk-delete-confirmation-modal-hide")) {
         deleteConfirmationModal.classList.add("bulk-delete-confirmation-modal-hide");
         body.classList.remove("overflow-hidden");
     }
   };
   
   deleteConfirmationCloseBtns.forEach((deleteConfirmationCloseBtn) => {
       deleteConfirmationCloseBtn.addEventListener("click", deleteConfirmationModalCloseTrigger);
   });
});

/*product deletion confirmation modal end*/






/*product description tab content start*/

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
    
        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
      });
    });
});

/*product description tab content end*/






/*quantity counter start*/
    
document.addEventListener("DOMContentLoaded", () => {
   const minusCount = document.querySelector(".djer_minus");
   const plusCount = document.querySelector(".djer_plus");
   const showCountQuantity = document.getElementById("show-count-number");
   
   minusCount.addEventListener("click", () => {
       let quantityCountInput = Number(showCountQuantity.value);
       if (quantityCountInput > 1 ) {
           quantityCountInput -= 1;
           showCountQuantity.value = quantityCountInput;
       }
   });
   
   plusCount.addEventListener("click", () => {
       let quantityCountInput = Number(showCountQuantity.value);
       quantityCountInput += 1;
       showCountQuantity.value = quantityCountInput;
   });
});

/*quantity counter end*/







/*rating start*/

document.addEventListener("DOMContentLoaded", () => {
   const ratingWrapper = document.querySelector('.rating-wrapper');
   
   if (!ratingWrapper) return;
   
    const labels = ratingWrapper.querySelectorAll('label');
    
    let selectedRating = 0;
    
    labels.forEach(label => {
        label.addEventListener('mouseover', () => {
            const starValue = parseInt(label.getAttribute('data-star'));
    
            labels.forEach(l => {
                const currentStar = parseInt(l.getAttribute('data-star'));
                if (currentStar <= starValue) {
                    l.classList.add('highlighted');
                } else {
                    l.classList.remove('highlighted');
                }
            });
        });
    
        label.addEventListener('mouseleave', () => {
            labels.forEach(l => l.classList.remove('highlighted'));
            if (selectedRating > 0) {
                labels.forEach(l => {
                    const currentStar = parseInt(l.getAttribute('data-star'));
                    if (currentStar <= selectedRating) {
                        l.classList.add('highlighted');
                    }
                });
            }
        });
    
        label.addEventListener('click', () => {
            selectedRating = parseInt(label.getAttribute('data-star'));
            labels.forEach(l => {
                const currentStar = parseInt(l.getAttribute('data-star'));
                if (currentStar <= selectedRating) {
                    l.classList.add('highlighted');
                } else {
                    l.classList.remove('highlighted');
                }
            });
        });
    }); 
});

/*rating end*/








/*select btn modal start*/

document.addEventListener("DOMContentLoaded", () => {
   const selectOptionBtns = document.querySelectorAll(".select-option-modal-btn"); 
   const selectOptionModal = document.getElementById("select-option-modal-wrapper");
   const selectOptionModalCloseBtn = document.getElementById("s-o-modal-close-icon-btn");
   const body = document.querySelector("html");
   
   const selectOptionModalTrigger = () => {
       selectOptionModal.classList.toggle("s-o-modal-hide");
       body.classList.add("overflow-hidden");
   };
   
   selectOptionBtns.forEach((selectOptionBtn) => {
       selectOptionBtn.addEventListener("click", selectOptionModalTrigger);
   });
   
   
   const selectOptionModalCloseTrigger = () => {
       selectOptionModal.classList.toggle("s-o-modal-hide");
       body.classList.remove("overflow-hidden");
   };
   
   selectOptionModalCloseBtn.addEventListener("click", selectOptionModalCloseTrigger);
});

/*select btn modal end*/






/*date picker calendar start*/

document.addEventListener("DOMContentLoaded", function() {
  const calendar = document.querySelector("#calendar_main"),
    input = document.querySelector("#date"),
    calHeader = document.querySelector("#calendar_header"),
    calHeaderTitle = document.querySelector("#calendar_header span"),
    calDays = document.querySelector("#cal_days"),
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    
    if (!calendar || !input || !calHeader || !calHeaderTitle || !calDays) return;

  let oneDay = 60 * 60 * 24 * 1000;
  let todayTimestamp = Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60;
  let tomorrowTimestamp = todayTimestamp + oneDay; // Timestamp for tomorrow
  
  let tomorrowafterOneDayTimestamp = tomorrowTimestamp + oneDay;
  
  let afterTwoDaystomorrowTimestamp = tomorrowafterOneDayTimestamp + oneDay;
  
  let afterThreeDaystomorrowTimestamp = afterTwoDaystomorrowTimestamp + oneDay;
  
  
  
  let selectedDay = todayTimestamp; // Default to today
  let globallySelectedTimestamp = null; // Store globally selected timestamp
  
  const getNumberOfDays = (year, month) => 40 - new Date(year, month, 40).getDate();
  
  const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;

    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;

    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();

    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: days[day],
    };
  };

  const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 5;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  };

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let monthDetails = getMonthDetails(year, month);

  const isCurrentDay = (day, cell) => {
    if (day.timestamp === todayTimestamp) {
      cell.classList.add("active");
      cell.classList.add("isCurrent");
      cell.classList.add("disabled"); // Disable current day
    }
  };

  const isSelectedDay = (day, cell) => {
    if (day.timestamp === globallySelectedTimestamp) {
      cell.classList.add("active");
      cell.classList.add("isSelected");
    }
  };

  const getMonthStr = (month) => months[Math.max(Math.min(11, month), 0)] || "Month";
  
  const setHeaderNav = (offset) => {
    let currentTimestamp = new Date(year, month).getTime();
    let minTimestamp = new Date(date.getFullYear(), date.getMonth()).getTime();

    if (offset === -1 && currentTimestamp <= minTimestamp) {
      return { year, month, monthDetails }; // Prevent navigating to past months
    }

    month = month + offset;

    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    monthDetails = getMonthDetails(year, month);
    return { year, month, monthDetails };
  };

  const setHeader = (year, month) => {
    calHeaderTitle.innerHTML = getMonthStr(month) + " " + year;
  };

  setHeader(year, month);

  const getDateStringFromTimestamp = (timestamp) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth();
    let date = dateObject.getDate();
    return `${getMonthStr(month)} ${date}, ${dateObject.getFullYear()}`;
  };

  const setDateToInput = (timestamp) => {
    let dateString = timestamp === null ? "Choose Date" : getDateStringFromTimestamp(timestamp);
    input.value = dateString;
  };

  setDateToInput(null);

  for (let i = 0; i < days.length; i++) {
    let div = document.createElement("div"),
      span = document.createElement("span");

    div.classList.add("cell_wrapper");
    span.classList.add("cell_item");
    span.innerText = days[i].slice(0, 2);
    div.appendChild(span);
    calDays.appendChild(div);
  }

  const setCalBody = (monthDetails) => {
    for (let i = 0; i < monthDetails.length; i++) {
      let div = document.createElement("div"),
        span = document.createElement("span");

      div.classList.add("cell_wrapper");
      div.classList.add("cal_date");

      monthDetails[i].month === 0 && div.classList.add("current");
      monthDetails[i].month === 0 && isCurrentDay(monthDetails[i], div);
      monthDetails[i].month === 0 && isSelectedDay(monthDetails[i], div);

      span.classList.add("cell_item");
      span.innerText = monthDetails[i].date;

      div.appendChild(span);

      // Disable today and earlier dates
      if (monthDetails[i].timestamp < afterThreeDaystomorrowTimestamp) {
        div.classList.add("disabled");
      }

      calendar.appendChild(div);
    }
  };

  setCalBody(monthDetails);

  const updateCalendar = (btn) => {
    let newCal, offset;
    if (btn.classList.contains("back")) {
      offset = -1;
    } else if (btn.classList.contains("front")) {
      offset = 1;
    }
    newCal = setHeaderNav(offset);
    setHeader(newCal.year, newCal.month);
    calendar.innerHTML = "";
    setCalBody(newCal.monthDetails);
  };

  const updateInput = () => {
    document.querySelectorAll(".cell_wrapper").forEach((cell) => {
      if (!cell.classList.contains("disabled") && cell.classList.contains("current")) {
        cell.addEventListener("click", (e) => {
          document.querySelectorAll(".cell_wrapper").forEach((c) => {
            c.classList.remove("isSelected");
          });

          let cell_date = e.target.textContent;
          for (let i = 0; i < monthDetails.length; i++) {
            if (monthDetails[i].month === 0 && monthDetails[i].date.toString() === cell_date) {
              selectedDay = monthDetails[i].timestamp;
              globallySelectedTimestamp = selectedDay;
              setDateToInput(selectedDay);

              cell.classList.add("isSelected");
            }
          }
        });
      }
    });
  };

  updateInput();

  document.querySelectorAll(".cal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateCalendar(btn);
      updateInput();
    });
  });

  input.addEventListener("click", () => {
    document.querySelector("#date_picker_calendar").classList.toggle("hidden");
    document.querySelector("#date_picker_input").classList.toggle("showCal");
    document.querySelector("#date").classList.toggle("onFocus");
  });
});

/*date picker calendar end*/






/*pagination start*/

window.onload = function(){
  var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  $('.cdp_i').on('click', function(){
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    $('.cdp').attr('actpage', paginationPage);
  });
};

/*pagination end*/



