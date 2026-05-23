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

    openBtn.onclick = () => {
        Loginmodal.classList.add("active");
    };
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
    newaccountbtn.onclick = ()=> {
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
    confirmation.onclick = (e)=> {
        e.preventDefault();
        otpModal.classList.remove("active");
        donemodal.classList.add("active");
    }
    gologin.onclick = (e)=> {
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
    ///////////////////////////////////////////////////////////////////////////////////////////

    const slider = document.getElementById("citiesSlider");
    const dailyslider = document.getElementById("dailySlider");
    const bayoutslider = document.getElementById("bayoutSlider");
    const availableslider = document.getElementById("availableSlider");
    const jeddahslider = document.getElementById("jeddahSlider");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dailynextBtn = document.getElementById("dailynextBtn");
    const dailyprevBtn = document.getElementById("dailyprevBtn");
    const bayoutnextBtn = document.getElementById("bayoutnextBtn");
    const bayoutprevBtn = document.getElementById("bayoutprevBtn");
    const availnextBtn = document.getElementById("availnextBtn");
    const availprevBtn = document.getElementById("availprevBtn");
    const jeddahnextBtn = document.getElementById("jeddahnextBtn");
    const jeddahprevBtn = document.getElementById("jeddahprevBtn");
    // citiesSlider
    nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left:300,
        behavior:"smooth"
    });
    });
    prevBtn.addEventListener("click", () => {

    slider.scrollBy({
        left:-300,
        behavior:"smooth"
    });
    });
      // dailySlider
      dailynextBtn.addEventListener("click", () => {
        dailyslider.scrollBy({
            left:300,
            behavior:"smooth"
        });
        });
      dailyprevBtn.addEventListener("click", () => {
        dailyslider.scrollBy({
            left:-300,
            behavior:"smooth"
        });
        });
         // BayoutSlider
      bayoutnextBtn.addEventListener("click", () => {
        bayoutslider.scrollBy({
            left:300,
            behavior:"smooth"
        });
        });
      bayoutprevBtn.addEventListener("click", () => {
        bayoutslider.scrollBy({
            left:-300,
            behavior:"smooth"
        });
        });
           // availablebayoutSlider
      availnextBtn.addEventListener("click", () => {
        availableslider.scrollBy({
            left:300,
            behavior:"smooth"
        });
        });
      availprevBtn.addEventListener("click", () => {
        availableslider.scrollBy({
            left:-300,
            behavior:"smooth"
        });
        });
     // jeddahSlider
     jeddahnextBtn.addEventListener("click", () => {
        jeddahslider.scrollBy({
            left:300,
            behavior:"smooth"
        });
        });
      jeddahprevBtn.addEventListener("click", () => {
        jeddahslider.scrollBy({
            left:-300,
            behavior:"smooth"
        });
        });
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
 
    wow.init();
    // 20. Gallery Fancybox
    // const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    //      preload: 1
    //      });
    Fancybox.assign('[data-fancybox="carousel-gallery"]', {
        closeButton: "top",
        Thumbs: false,
        Carousel: {
            Dots: true,
            on: {
                change: (that) => {
                    myCarousel.slideTo(myCarousel.getPageforSlide(that.page), {
                        friction: 0
                    });
                }
            }
        }
    });

    // End Activation
})();