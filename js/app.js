"use strict";
(function () {
    // 1. Data Width
    let getDivs = document.querySelectorAll(".skill-bar");

    getDivs.forEach(function (skillbar) {
        let data = skillbar.getAttribute("data-width");
        skillbar.style.width = data;
    });

    // 2. Data Background Image
    $("[data-bg-image]").each(function () {
        const img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: `url(${img})`,
        });
    });

    // 3. Mobile Burger Menu Bar
    $(".sidebarBtn").on("click", function (e) {
        e.preventDefault();
        $(".cc--slideNav").toggleClass("show");
    });

    // 4. Mobile Menu Dropdown
    const rtMobileMenu = $(".offscreen-navigation .menu");
    if (rtMobileMenu.length) {
        rtMobileMenu.children("li").addClass("menu-item-parent");
        rtMobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("opened");
            const rtMobileSubMenu = $(this).next(".sub-menu"),
                s = $(this).closest(".menu-item-parent").find(".sub-menu");
            rtMobileMenu
                .find(".sub-menu")
                .not(s)
                .slideUp(250)
                .prev("a")
                .removeClass("opened"),
                rtMobileSubMenu.slideToggle(250);
        });
        rtMobileMenu
            .find(".menu-item:not(.menu-item-has-children) > a")
            .on("click", function (e) {
                $(".cc--slideNav").slideUp();
                $("body").removeClass("slidemenuon");
            });
    }

    // 5. On Scroll Sticky
    $(window).on("scroll", function () {
        if ($(".header").hasClass("sticky-on")) {
            var stickyPlaceHolder = $("#sticky-placeholder"),
                menu = $("#navbar-wrap"),
                menuH = menu.outerHeight(),
                topbarH = $("#topbar-wrap").outerHeight() || 0,
                targrtScroll = topbarH,
                header = $(".header");
            if ($(window).scrollTop() > targrtScroll) {
                header.addClass("sticky");
                stickyPlaceHolder.height(menuH);
            } else {
                header.removeClass("sticky");
                stickyPlaceHolder.height(0);
            }
        }
    });

    //search-box

    flatpickr("#checkIn", {
        locale: "ar",
        altInput: true,
        altFormat: "l , j F Y",
        dateFormat: "Y-m-d",
        defaultDate: "today"
    });
    flatpickr("#checkOut", {
        locale: "ar",
        altInput: true,
        altFormat: "l , j F Y",
        dateFormat: "Y-m-d",
        defaultDate: "today"
    });
    flatpickr("#changeTime", {
        locale: "ar",
        altInput: false,
        altFormat: "l , j F Y",
        dateFormat: "Y-m-d",
        defaultDate: "today"
    });

    // Property Card Template
    // const propertyImages = [ "image/gallery/g-1.png"];

    function createPropertyCard(imgIndex) {
        // const img = propertyImages[imgIndex % propertyImages.length];
        return `
        <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="property-card">
            <div class="card-box">
            <img src="image/gallery/g-1.png" alt="شقة">
            <button class="heart-btn">
                <svg fill="none" stroke="#27283D" stroke-width="2" viewBox="0 0 24 22"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            </div>
            <div class="card-box-text">
            <h3>شقة بصالة خيالية</h3>
            <p>هذا النص يمكن استبدالة بنص بديل يعبر عن</p>
            <div class="rate">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span >4.8</span>
            </div>
            <div class="card-box-detail ">
                <span>
                <svg width="12" height="13" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_35814" fill="white">
                    <path d="M9 11.1767C9.55229 11.1767 10.013 10.72 9.85459 10.1909C9.79447 9.99014 9.71594 9.79291 9.6194 9.60097C9.36812 9.1014 8.99983 8.64747 8.53553 8.26511C8.07124 7.88275 7.52004 7.57945 6.91342 7.37252C6.30679 7.16559 5.65661 7.05908 5 7.05908C4.34339 7.05908 3.69321 7.16559 3.08658 7.37252C2.47995 7.57945 1.92876 7.88275 1.46447 8.26511C1.00017 8.64747 0.631876 9.1014 0.380602 9.60097C0.284064 9.79291 0.205526 9.99014 0.145406 10.1909C-0.0130089 10.72 0.447715 11.1767 1 11.1767L5 11.1767H9Z"/>
                    </mask>
                    <path d="M9 11.1767C9.55229 11.1767 10.013 10.72 9.85459 10.1909C9.79447 9.99014 9.71594 9.79291 9.6194 9.60097C9.36812 9.1014 8.99983 8.64747 8.53553 8.26511C8.07124 7.88275 7.52004 7.57945 6.91342 7.37252C6.30679 7.16559 5.65661 7.05908 5 7.05908C4.34339 7.05908 3.69321 7.16559 3.08658 7.37252C2.47995 7.57945 1.92876 7.88275 1.46447 8.26511C1.00017 8.64747 0.631876 9.1014 0.380602 9.60097C0.284064 9.79291 0.205526 9.99014 0.145406 10.1909C-0.0130089 10.72 0.447715 11.1767 1 11.1767L5 11.1767H9Z" stroke="#A1A1A1" mask="url(#path-1-inside-1_1_35814)"/>
                    <path d="M4.99939 0.25C6.32306 0.250217 7.39587 1.32374 7.39587 2.64746C7.39566 3.971 6.32293 5.04373 4.99939 5.04395C3.67566 5.04395 2.60215 3.97114 2.60193 2.64746C2.60193 1.3236 3.67553 0.25 4.99939 0.25Z" stroke="#A1A1A1" stroke-width="0.5"/>
                    </svg>
                5 ضيوف
                </span>
                <span>
                <svg width="16" height="12" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 0.25C1.02677 0.25 1.25 0.473227 1.25 0.75V7H7V3C7 2.72323 7.22323 2.5 7.5 2.5H12.75C13.8541 2.5 14.75 3.39588 14.75 4.5V9.75C14.75 10.0268 14.5268 10.25 14.25 10.25C13.9732 10.25 13.75 10.0268 13.75 9.75V8.75H1.25V9.75C1.25 10.0268 1.02677 10.25 0.75 10.25C0.473227 10.25 0.25 10.0268 0.25 9.75V0.75C0.25 0.473227 0.473227 0.25 0.75 0.25ZM4.125 2.5C5.0224 2.5 5.75 3.2276 5.75 4.125C5.75 5.0224 5.0224 5.75 4.125 5.75C3.2276 5.75 2.5 5.0224 2.5 4.125C2.5 3.2276 3.2276 2.5 4.125 2.5Z" stroke="#A1A1A1" stroke-width="0.5"/>
                    </svg>
                10 أسرة
                </span>
                <span>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2 6.61338H1.6V2.12454C1.59954 1.95549 1.63269 1.78803 1.69754 1.63185C1.7624 1.47567 1.85766 1.33388 1.97783 1.21467L1.98783 1.2047C2.17614 1.01713 2.41792 0.892122 2.68013 0.846764C2.94234 0.801406 3.21219 0.837907 3.45283 0.951279C3.22557 1.32819 3.13111 1.77005 3.18446 2.20665C3.23781 2.64325 3.43591 3.04955 3.74728 3.36097L4.02105 3.63406L3.51712 4.13676L4.08278 4.70101L4.5867 4.19834L7.37893 1.41308L7.88285 0.910405L7.31718 0.346132L6.81322 0.848808L6.53945 0.575712C6.21167 0.249655 5.77958 0.0486612 5.3185 0.00775649C4.85741 -0.0331482 4.39655 0.0886293 4.01623 0.351868C3.61518 0.0992244 3.13992 -0.00984383 2.66851 0.0425809C2.19711 0.0950056 1.75759 0.305806 1.42218 0.640351L1.41218 0.650327C1.21749 0.843471 1.06313 1.07322 0.958054 1.32627C0.852974 1.57931 0.799253 1.85064 0.8 2.12454V6.61338H0V7.4114H0.8V8.177C0.799983 8.24133 0.810383 8.30523 0.8308 8.36625L1.575 10.5932C1.61471 10.7124 1.69108 10.8162 1.79325 10.8896C1.89542 10.9631 2.0182 11.0026 2.14415 11.0025H2.46665L2.175 12H3.00832L3.3 11.0025H8.5025L8.8025 12H9.6375L9.3375 11.0025H9.85575C9.98172 11.0026 10.1045 10.9631 10.2067 10.8897C10.3089 10.8162 10.3853 10.7125 10.425 10.5932L11.1692 8.36625C11.1896 8.30523 11.2 8.24133 11.2 8.177V7.4114H12V6.61338H11.2ZM4.313 1.13998C4.5334 0.920611 4.83204 0.797407 5.14339 0.797407C5.45474 0.797407 5.75338 0.920611 5.97378 1.13998L6.2475 1.41308L4.58677 3.06969L4.313 2.79664C4.09309 2.57678 3.96959 2.27889 3.96959 1.96831C3.96959 1.65774 4.09309 1.35984 4.313 1.13998ZM10.4 8.14458L9.7117 10.2045H2.2883L1.6 8.14458V7.4114H10.4V8.14458Z" fill="#A1A1A1"/>
                    </svg>
                2 حمام ماستر
                </span>
            </div>
            <div class="card-box-price">
                <div class="flex items-baseline gap-1">
                <span class="old-price text-[8px] text-brand-dark/30 line-through">800</span>
                <span class=" new-price">500 ريال</span>
                <span class="slach">/</span>
                <span class="time">الليلة</span>
                </div>
            </div>
        </div>
        </div>
    </div>
            `;
    }
    document.addEventListener('DOMContentLoaded', () => {
        const grid = document.getElementById('properties-grid');
        if (grid) {
            for (let i = 0; i < 20; i++) {
                grid.innerHTML += createPropertyCard(i);
            }
        }
    });
    // Models of Home ///////////////////////////////////////////////////////////////
    const openBtn = document.getElementById("openModal");
    const SignupBtn = document.getElementById("signup");
    const closeBtn = document.getElementById("closeModal");
    const Loginmodal = document.getElementById("loginModal");
    const forgotModal = document.getElementById("forgotModal");
    const forgotBtn = document.getElementById("forgotBtn");
    const closeForgot = document.getElementById("closeForgot");
    const options = document.querySelectorAll(".reset-option");
    const backToLogin = document.getElementById("backToLogin");
    const sendCodeBtn = document.getElementById("sendCodeBtn");
    const verifyModal = document.getElementById("verifyModal");
    const closeverify = document.getElementById("closeVerify");
    const otpModal = document.getElementById("otpModal");
    const closeotp = document.getElementById("closeOtp");
    const phoneOption = document.getElementById("phoneOption");
    const emailOption = document.getElementById("emailOption");
    const signupModal = document.getElementById("signupModal");
    const switchbtn = document.getElementById("switch-btn");
    const newaccount = document.getElementById("NewAccount");
    const newaccountbtn = document.getElementById("NewAccount-btn");
    const closesign = document.getElementById("closeSign");
    const confirmation = document.getElementById("Confirmation");
    const donemodal = document.getElementById("DoneModal");
    const closedone = document.getElementById("closeDone");
    const gologin = document.getElementById("GoLogin");
    const Searchcitybtn = document.getElementById("searchcitybtn");
    const Searchcity = document.getElementById("Search-city");
    const closesearchcity = document.getElementById("close-citysearch");
    const holidayOptions = document.querySelectorAll(".holiday-option");
    const resetBtn = document.getElementById("resetHolidayTypes");
    const applyBtn = document.getElementById("applyHolidayTypes");
    const holidayHomesModal = document.getElementById("holidayHomesModal");
    const holidayTypeFilter = document.getElementById("holidayTypeFilter");
    const districtTypeFilter = document.getElementById("districtTypeFilter");
    const priceTypeFilter = document.getElementById("priceTypeFilter");
    const bedroomsTypeFilter = document.getElementById("bedroomsTypeFilter");
    const ratingTypeFilter = document.getElementById("ratingTypeFilter");
    const distanceTypeFilter = document.getElementById("distanceTypeFilter");
    const arrangeTypeFilter = document.getElementById("arrangeTypeFilter");   
    const filteringTypeFilter = document.getElementById("filteringTypeFilter");
    const filterModelBtn = document.getElementById("filterModelBtn");
    const closeHolidayHomesModal = document.getElementById("closeHolidayHomesModal");
    const districtSearch = document.getElementById("districtSearch");
    const districts = document.querySelectorAll(".district-item");
    const districtModal = document.getElementById('districtModal');
    const priceModal = document.getElementById('priceModal');
    const bedroomsModal = document.getElementById('bedroomsModal');
    const ratingModal = document.getElementById('ratingModal');
    const distanceModal = document.getElementById('distanceModal');
    const arrangeModal = document.getElementById('arrangeModal');
    const filterModal = document.getElementById('filterModal');
    const filterRatingModal = document.getElementById('filterRatingModal');
    const closeDistrictModal = document.getElementById('closeDistrictModal');
    const closePriceModal = document.getElementById('closePriceModal');
    const closeBedroomsModal = document.getElementById('closeBedroomsModal');
    const closeRatingModal = document.getElementById('closeRatingModal');
    const closeDistanceModal = document.getElementById('closeDistanceModal');
    const closeArrangeModal = document.getElementById('closeArrangeModal');
    const closeFilterModal = document.getElementById('closeFilterModal');
    const closeFilterRatingModal = document.getElementById('closeFilterRatingModal');
    const ProfileBtn = document.getElementById('ProfileBtn');
    const ProfileModal = document.getElementById('ProfileModal');
    const closeProfileModal = document.getElementById('closeProfileModal');

    openBtn.onclick = () => {
        Loginmodal.classList.add("active");
    };
    if (Searchcitybtn) {

        Searchcitybtn.addEventListener("click", () => {

            Searchcity.classList.add("active");
            document.body.classList.add("modal-open");
        });
    }
    SignupBtn.onclick = () => {
        signupModal.classList.add("active");
    };
    closeBtn.onclick = () => {
        Loginmodal.classList.remove("active");
    };
    forgotBtn.onclick = (e) => {

        e.preventDefault();
        Loginmodal.classList.remove("active");

        forgotModal.classList.add("active");
    };
    closeForgot.onclick = () => {
        forgotModal.classList.remove("active");
    };
    newaccountbtn.onclick = () => {
        signupModal.classList.remove("active");
        otpModal.classList.add("active");
    }
    options.forEach(option => {

        option.addEventListener("click", () => {
            options.forEach(item => {
                item.classList.remove("active-option");
            });
            option.classList.add("active-option");

        });

    });
    holidayOptions.forEach(option => {

        option.addEventListener("click", () => {

            option.classList.toggle("active");

        });

    });
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            document
                .querySelectorAll(".holiday-option")
                .forEach(option => {
                    option.classList.remove("active");
                });

        });
    }
    if (applyBtn) {
        applyBtn.addEventListener("click", () => {

            document
                .getElementById("holidayHomesModal")
                .classList.remove("active");
        });
    }
    if (holidayTypeFilter) {

        holidayTypeFilter.addEventListener("click", () => {

            holidayHomesModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }

    if (districtTypeFilter) {

        districtTypeFilter.addEventListener("click", () => {

            districtModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (priceTypeFilter) {

        priceTypeFilter.addEventListener("click", () => {

            priceModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (bedroomsTypeFilter) {

        bedroomsTypeFilter.addEventListener("click", () => {

            bedroomsModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (ratingTypeFilter) {

        ratingTypeFilter.addEventListener("click", () => {

            ratingModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (distanceTypeFilter) {

        distanceTypeFilter.addEventListener("click", () => {

            distanceModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (arrangeTypeFilter) {

        arrangeTypeFilter.addEventListener("click", () => {

            arrangeModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (filteringTypeFilter) {

        filteringTypeFilter.addEventListener("click", () => {

            filterModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    if (filterModelBtn) {

        filterModelBtn.addEventListener("click", () => {

            filterRatingModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    }
    backToLogin.onclick = (e) => {
        e.preventDefault();
        forgotModal.classList.remove("active");
        Loginmodal.classList.add("active");
    };
    switchbtn.onclick = (e) => {
        e.preventDefault();
        signupModal.classList.remove("active");
        Loginmodal.classList.add("active");
    };
    newaccount.onclick = (e) => {
        e.preventDefault();
        Loginmodal.classList.remove("active");
        signupModal.classList.add("active");
    };
    confirmation.onclick = (e) => {
        e.preventDefault();
        otpModal.classList.remove("active");
        donemodal.classList.add("active");
    }
    gologin.onclick = (e) => {
        e.preventDefault();
        donemodal.classList.remove("active");
        Loginmodal.classList.add("active");
    }
    closeverify.onclick = () => {
        verifyModal.classList.remove("active");
    };
    closeotp.onclick = () => {
        otpModal.classList.remove("active");
    };
    closesign.onclick = () => {
        signupModal.classList.remove("active");
    };
    closedone.onclick = () => {
        donemodal.classList.remove("active");
    };

    if (closesearchcity) {
        closesearchcity.addEventListener("click", () => {
            Searchcity.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    if(closeHolidayHomesModal){
        closeHolidayHomesModal.addEventListener("click", () => {
            holidayHomesModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    if(closeDistrictModal){
        closeDistrictModal.addEventListener("click", () => {
            districtModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    if(closePriceModal){
        closePriceModal.addEventListener("click", () => {
            priceModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    if(closeBedroomsModal){
        closeBedroomsModal.addEventListener("click", () => {
            bedroomsModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    if(closeRatingModal){
        closeRatingModal.addEventListener("click", () => {
            ratingModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    if(closeDistanceModal){
        closeDistanceModal.addEventListener("click", () => {
            distanceModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    if(closeArrangeModal){
        closeArrangeModal.addEventListener("click", () => {
            arrangeModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    if(closeFilterModal){
        closeFilterModal.addEventListener("click", () => {
            filterModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    if(closeFilterRatingModal){
        closeFilterRatingModal.addEventListener("click", () => {
            filterRatingModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }
    window.onclick = (e) => {
        if (e.target === Loginmodal) {
            Loginmodal.classList.remove("active");
        }
        if (e.target === forgotModal) {
            forgotModal.classList.remove("active");
        }
        if (e.target === verifyModal) {
            verifyModal.classList.remove("active");
        }
        if (e.target === otpModal) {
            otpModal.classList.remove("active");
        }
        if (e.target === signupModal) {
            signupModal.classList.remove("active");
        }
        if (e.target === donemodal) {
            donemodal.classList.remove("active");
        }
        if (e.target === Searchcity) {
            Searchcity.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === holidayHomesModal) {
            holidayHomesModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === districtModal) {
            districtModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === priceModal) {
            priceModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === bedroomsModal) {
            bedroomsModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === ratingModal) {
            ratingModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === distanceModal) {
            distanceModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === arrangeModal) {
            arrangeModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === filterModal) {
            filterModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
        if (e.target === filterRatingModal) {
            filterRatingModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    };

    let selectedMethod = null;

    phoneOption.addEventListener("click", () => {
        selectedMethod = "phone";
        phoneOption.classList.add("active-option");
        emailOption.classList.remove("active-option");
    });

    emailOption.addEventListener("click", () => {
        selectedMethod = "email";
        emailOption.classList.add("active-option");
        phoneOption.classList.remove("active-option");
    });

    sendCodeBtn.addEventListener("click", () => {
        if (!selectedMethod) {
            alert("من فضلك اختر طريقة الاستعادة");
            return;
        }

        forgotModal.classList.remove("active");

        if (selectedMethod === "phone") {
            otpModal.classList.add("active");
        } else if (selectedMethod === "email") {
            verifyModal.classList.add("active");
        }
    });

    // district modal search
    if (districtSearch) {

        districtSearch.addEventListener("input", () => {

            const value =
                districtSearch.value.toLowerCase();

            districts.forEach(item => {

                const text =
                    item.textContent.toLowerCase();

                item.style.display =
                    text.includes(value) ?
                    "flex" :
                    "none";

            });

        });

    }

    // price modal
    const minSlider = document.getElementById("minPrice");

    const maxSlider = document.getElementById("maxPrice");

    const minLabel = document.getElementById("minPriceLabel");

    const maxLabel = document.getElementById("maxPriceLabel");

    const minInput = document.getElementById("minInput");

    const maxInput = document.getElementById("maxInput");
    const sliderRange = document.getElementById("sliderRange");
    function updatePrice(){

        let min = parseInt(minSlider.value);
        let max = parseInt(maxSlider.value);
      
        if(min > max){
          [min, max] = [max, min];
        }
      
        minLabel.textContent = `${min} ريال`;
        maxLabel.textContent = `${max} ريال`;
      
        minInput.value = min;
        maxInput.value = max;
      
        const minPercent =
          ((min - 3000) / (9000 - 3000)) * 100;
      
        const maxPercent =
          ((max - 3000) / (9000 - 3000)) * 100;
          sliderRange.style.left = `${minPercent}%`;
          sliderRange.style.width =`${maxPercent - minPercent}%`;
      }

      if (minSlider) {
        minSlider.addEventListener(
            "input",
            updatePrice
        );
    }

    if (maxSlider) {
        maxSlider.addEventListener(
            "input",
            updatePrice
        );
    }
    const resetPriceBtn = document.getElementById("resetPrice");

    if (resetPriceBtn && minSlider && maxSlider) {
    
        resetPriceBtn.addEventListener("click", () => {
    
            minSlider.value = 3000;
            maxSlider.value = 9000;
    
            updatePrice();
    
        });
    
    }

// bedrooms filter
const bedroomOptions =document.querySelectorAll(".bedroom-option");

bedroomOptions.forEach(option => {

  option.addEventListener("click", () => {

    bedroomOptions.forEach(btn => {
      btn.classList.remove("active");
    });

    option.classList.add("active");

  });

});
const resetBedrooms =document.getElementById("resetBedrooms");

if(resetBedrooms){

  resetBedrooms.addEventListener("click", () => {

    bedroomOptions.forEach(btn => {
      btn.classList.remove("active");
    });

    bedroomOptions[0].classList.add("active");

  });

}

// Rating Modal 

const ratingOptions =document.querySelectorAll(".rating-option");

ratingOptions.forEach(option => {

  option.addEventListener("click", () => {

    ratingOptions.forEach(btn =>
      btn.classList.remove("active")
    );

    option.classList.add("active");

  });

});

const commentOptions =document.querySelectorAll(".comment-option");

commentOptions.forEach(option => {

  option.addEventListener("click", () => {

    commentOptions.forEach(btn =>
      btn.classList.remove("active")
    );

    option.classList.add("active");

  });

});
const resetRating =document.getElementById("resetRating");

if(resetRating){

  resetRating.addEventListener("click", () => {

    ratingOptions.forEach(btn =>
      btn.classList.remove("active")
    );

    commentOptions.forEach(btn =>
      btn.classList.remove("active")
    );

  });

}

  // Distance modal
  const minDistance = document.getElementById("minDistance");

  const maxDistance = document.getElementById("maxDistance");

  const minDistanceLabel = document.getElementById("minDistanceLabel");

  const maxDistanceLabel = document.getElementById("maxDistanceLabel");

  const minDistanceInput = document.getElementById("minDistanceInput");

  const maxDistanceInput = document.getElementById("maxDistanceInput");
  const sliderRangeDistance = document.getElementById("sliderRangeDistance");
  function updateDistance(){

      let min = parseInt(minDistance.value);
      let max = parseInt(maxDistance.value);
    
      if(min > max){
        [min, max] = [max, min];
      }
    
      minDistanceLabel.textContent = `${min} متر`;
      maxDistanceLabel.textContent = `${max} متر`;
    
      minDistanceInput.value = min;
      maxDistanceInput.value = max;
    
      const minPercent =
        ((min - 3000) / (9000 - 3000)) * 100;
    
      const maxPercent =
        ((max - 3000) / (9000 - 3000)) * 100;
        sliderRangeDistance.style.left = `${minPercent}%`;
        sliderRangeDistance.style.width =`${maxPercent - minPercent}%`;
    }

  if (minDistance) {
    minDistance.addEventListener(
        "input",
        updateDistance
        );
    }

  if (maxDistance) {
    maxDistance.addEventListener(
        "input",
        updateDistance
        );
    }
      const resetPriceButton = document.getElementById("resetPrice");

      if (resetPriceButton && minDistance && maxDistance) {
      
        resetPriceButton.addEventListener("click", () => {
      
            minDistance.value = 3000;
            maxDistance.value = 9000;
  
            updateDistance();
      
          });
      
      }



     //filtering modal 
     const typeBtns =document.querySelectorAll(".type-btn");

        typeBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            btn.classList.toggle("active");

        });

        });



        // Notification Modal 
const notificationBtn = document.getElementById("notificationBtn");
const NotificationModal = document.getElementById("Notification-Modal");
const closeNotificationBtn = document.getElementById("closeNotificationBtn");
const EmptyNotificationModal = document.getElementById("EmptyNotification-Modal");
const closeEmptyNotificationBtn = document.getElementById("closeEmptyNotificationBtn");

if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
        EmptyNotificationModal.style.display = "flex";
    });
}


// notificationBtn.addEventListener("click", () => {
//     NotificationModal.style.display = "flex";
// }); 

if (closeNotificationBtn) {
    closeNotificationBtn.addEventListener("click", () => {
        NotificationModal.style.display = "none";
    });
}
if (closeEmptyNotificationBtn) {
    closeEmptyNotificationBtn.addEventListener("click", () => {
        EmptyNotificationModal.style.display = "none";
    });
}

if (EmptyNotificationModal) {
    EmptyNotificationModal.addEventListener("click", () => {
        if (e.target === overlay) {
            EmptyNotificationModal.style.display = "none";
        }
    });
}
    ///////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////



    const isRTL = document.documentElement.dir === "ltr";
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const slider = document.getElementById("citiesSlider");
    const dailyslider = document.getElementById("dailySlider");
    const bayoutslider = document.getElementById("bayoutSlider");
    const availableslider = document.getElementById("availableSlider");
    const jeddahslider = document.getElementById("jeddahSlider");
    const unitsslider = document.getElementById("UnitsSlider");
    const dailynextBtn = document.getElementById("dailynextBtn");
    const dailyprevBtn = document.getElementById("dailyprevBtn");
    const bayoutnextBtn = document.getElementById("bayoutnextBtn");
    const bayoutprevBtn = document.getElementById("bayoutprevBtn");
    const availnextBtn = document.getElementById("availnextBtn");
    const availprevBtn = document.getElementById("availprevBtn");
    const jeddahnextBtn = document.getElementById("jeddahnextBtn");
    const jeddahprevBtn = document.getElementById("jeddahprevBtn");
    const unitnextBtn = document.getElementById("unit-next-btn");
    const unitprevbtn = document.getElementById("unit-prev-btn");
    // citiesSlider
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            slider.scrollLeft += isRTL ? 300 : -300;
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            slider.scrollLeft += isRTL ? -300 : 300;
        });
       
    }
    // dailySlider
    if (dailynextBtn) {
        dailynextBtn.addEventListener("click", () => {
            dailyslider.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });
    }
    if (dailyprevBtn) {
        dailyprevBtn.addEventListener("click", () => {
            dailyslider.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    }
    // BayoutSlider
    if (bayoutnextBtn) {
        bayoutnextBtn.addEventListener("click", () => {
            bayoutslider.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });
    }
    if (bayoutprevBtn) {
        bayoutprevBtn.addEventListener("click", () => {
            bayoutslider.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    }
    // availablebayoutSlider
    if (availnextBtn) {
        availnextBtn.addEventListener("click", () => {
            availableslider.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });
    }
    if (availprevBtn) {
        availprevBtn.addEventListener("click", () => {
            availableslider.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    }
    // jeddahSlider
    if (jeddahnextBtn) {
        jeddahnextBtn.addEventListener("click", () => {
            jeddahslider.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });
    }
    if (jeddahprevBtn) {
        jeddahprevBtn.addEventListener("click", () => {
            jeddahslider.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    }
    // UnitsSlider
    if (unitnextBtn) {
        unitnextBtn.addEventListener("click", () => {
            unitsslider.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });
    }
    if (unitprevbtn) {
        unitprevbtn.addEventListener("click", () => {
            unitsslider.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    }
    // =================================


    // 9. Custom Options
    $("select").niceSelect();

    // 10. Bootstrap Custom Tooltip
    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip({
            offset: [0, 5],
        });
    });

    // 11. Mouse Custom Cursor
    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();

    // 12. Preloader
    $(window).on("load", function () {
        "use strict";
        // Page Preloader
        let preloader = $("#preloader");
        preloader &&
            $("#preloader").fadeOut("slow", function () {
                $(this).remove();
            });
    });

    // 13. Bottom To Top
    if ($(".progress-wrap").length) {
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });
        jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });
    }




    // wow.init();

    // End Activation
})();