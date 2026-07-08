const pageLoader = document.getElementById("pageLoader");
const langLoader = document.getElementById("langLoader");
const langLoaderText = document.getElementById("langLoaderText");
const langSelect = document.getElementById("langSelect");

const translations = {
    ar: {
        badge: "SECURE SCRIPTS HUB",
        title: "اسكربتات مجانية بالكامل",
        subtitle: "في VexPlay ستجد جميع أدواتنا المجانية بالكامل التي تتنصت على خوادم منصات المراهنات بشكل احترافي ودقيق مما تساعدك على تحقيق الربح المستمر من هذه المنصات",
        live: "نشط الآن",
        desc1: "اسكربت مجاني بالكامل تم تطويره للتنصت على WebSocket لعبة Crash وسحب توقيت الانفجار قبل بداية الجولة وعرضه في الاسكربت  فوراً",
        desc2: "ماسح بيانات ذكي لعرض حالة المنصات والقراءات.",
        details: "تحميل الاسكربت",
        script_feature: "مميزات الاسكربت",
        soon: "قريبًا",
        footer: "© 2026 VexPlay. جميع الحقوق محفوظة.",
        loading: "جاري تغيير اللغة",

        // Demo
        watchFull: "مشاهدة الشرح كامل وتحميل الاسكربت",
        crashupDesc: "اسكربت مجاني بالكامل تم تطويره للتنصت على WebSocket لعبة Crash وسحب توقيت الانفجار قبل بداية الجولة وعرضه في الاسكربت  فوراً",
        soundBtn: "اضغط لتفعيل الصوت",
        freeBadge: "مجانا بالكامل",
        faqBadge: "FAQ",
        faqTitle: "الأسئلة الشائعة",
        faqSubtitle: "ستجد هنا إجابات واضحة لأكثر الأسئلة شيوعاً لمساعدتك على استخدام اسكربت CRASHUP بكل سهولة.",
        faqQ1: "ما الفرق بين الباقات؟",
        faqDesc1: "في هذا الفيديو ستتعرف على الفرق بين الباقات الحالية المتاحة داخل اسكربت CRASHUP لمعرفة كيف تحدد الباقة التي تناسب احتياجاتك.",
        faqQ2: "حل مشكلة عدم تشغيل الاسكربت؟",
        faqDesc2: "في هذا الفيديو ستتعرف على جميع اسباب عدم تشغيل الاسكربت وكيفية حلها لتتمكن من استخدام اسكربت CRASHUP.",
        faqQ3: "ماهو الحد الادنى لتشغيل الاسكربت؟",
        faqDesc3: "في هذا الفيديو ستتعرف على الحد الادنى الذي من خلاله يمكنك تفعيل اسكربت الطيارة CRASHUP وبدء استخدامه.",
        faqAlert3: "تنبيه هام : اسكربت CRASHUP مجاني بالكامل ولا يتطلب أي رسوم أو دفعات لصالحنا أو لصالح أي طرف آخر. أي مبلغ يتم إضافته يكون داخل حسابك الشخصي في اللعبة فقط، ولا يتم تحويله إلى أي شخص. ويظل هذا الرصيد تحت سيطرتك الكاملة، ويمكنك استخدامه في اللعب أو سحبه وفقاً لشروط ونظام اللعبة المعمول به لدى المنصة التي تستخدمها.",
        faqQ4: "كيفية تحميل الاسكربت؟",
        faqDesc4: "يمكنك تحميل الاسكربت بكل سهولة على هاتفك الأندرويد بشكل مجاني تماماً.",
        faqDownloadLink: "اضغط هنا للتحميل",

        // CRASHUP
        versionLabel: "الإصدار",
        fileTypeLabel: "نوع الملف",
        videoBadge: "شرح كامل",
        videoTitle: "مشاهدة فيديو الشرح كامل",
        videoSubtitle: "شاهد طريقة تشغيل الاسكربت خطوة بخطوة قبل تحميلها.",
        downloadBadge: "تحميل مباشر",
        downloadTitle: "تحميل اسكربت CRASHUP APK",
        downloadDesc: "اضغط على زر التحميل بالأسفل لتحميل ملف الاسكربت مباشرة على جهازك.",
        downloadBtn: "تحميل الاسكربت الآن",
        supportTitle: "هل تواجه مشكلة في التفعيل؟",
        supportDesc: "في حال وجود أي مشكلة في التفعيل، تواصل مع فريق الدعم مباشرة على تليجرام.",
        supportBtn: "تواصل مع الدعم",

    },
    en: {
        badge: "SECURE SCRIPTS HUB",
        title: "100% Free SCRIPS",
        subtitle: "At VexPlay, you'll find a complete collection of free Scripts designed to professionally and accurately monitor betting platform servers, helping you maximize your opportunities for consistent profits.", live: "Active Now",
        desc1: "A completely free Script developed to monitor the Crash game's WebSocket data stream, capture the crash timing before each round begins, and instantly display it within the Script.",
        desc2: "A smart data scanner for platform status and readings.",
        details: "More Details",
        script_feature: "Script Features",
        soon: "Coming Soon",
        footer: "© 2026 VexPlay. All rights reserved.",
        loading: "Changing language",
        // Demo
        watchFull: "Watch Full Tutorial & Download Script",
        crashupDesc: "A completely free Script developed to monitor the Crash game's WebSocket data stream, capture the crash timing before each round begins, and instantly display it within the Script.",
        soundBtn: "Click to Enable Sound",
        freeBadge: "100% Free",
        faqBadge: "FAQ",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Here you'll find clear answers to the most frequently asked questions to help you use CRASHUP with ease.",
        faqQ1: "What is the difference between the plans?",
        faqDesc1: "In this video, you will learn the difference between the current plans available inside the CRASHUP script, so you can choose the plan that fits your needs.",
        faqQ2: "How to fix script launch issues?",
        faqDesc2: "In this video, you will learn all the reasons why the script may not start and how to fix them so you can use CRASHUP.",
        faqQ3: "What are the minimum requirements to run the script?",
        faqDesc3: "In this video, you will learn the minimum requirements needed to activate the CRASHUP crash script and start using it.",
        faqAlert3: "Important Notice: CRASHUP is completely free and does not require any fees or payments to us or to any third party. Any amount deposited remains solely within your personal game account and is never transferred to anyone else. The balance stays entirely under your control, and you may use it for gameplay or withdraw it in accordance with the terms and policies of the platform you are using.",
        faqQ4: "How to download the script?",
        faqDesc4: "You can easily download the script on your Android phone completely for free.",
        faqDownloadLink: "Click here to download",


        // CRASHUP
        versionLabel: "Version",
        fileTypeLabel: "File Type",
        videoBadge: "Full Tutorial",
        videoTitle: "Watch the Full Tutorial Video",
        videoSubtitle: "Watch how to use the Script step by step before downloading it.",
        downloadBadge: "Direct Download",
        downloadTitle: "Download CRASHUP APK",
        downloadDesc: "Click the button below to download the Script APK directly to your device.",
        downloadBtn: "Download Script Now",
        supportTitle: "Having activation issues?",
        supportDesc: "If you face any activation problem, contact the support team directly on Telegram.",
        supportBtn: "Contact Support",
    }
};

let pageFullyLoaded = false;
let videoCanLoad = false;



function applyLanguage(lang, showLoader = false) {
    if (showLoader) {
        langLoaderText.textContent = translations[lang].loading;
        langLoader.classList.add("show");
    }

    setTimeout(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.dataset.key;

            if (!translations[lang][key]) return;

            const icons = [...el.querySelectorAll("i")];

            if (icons.length > 0) {
                el.innerHTML = "";
                icons.forEach(icon => el.appendChild(icon));
                el.append(" " + translations[lang][key]);
            } else {
                el.textContent = translations[lang][key];
            }
        });

        if (videoCanLoad) {
            updateVideoByLanguage(lang);
        }

        langSelect.value = lang;

        const telegramLink = document.getElementById("telegramLink");
        const youtubeLink = document.getElementById("youtubeLink");

        if (telegramLink && youtubeLink) {
            if (lang === "ar") {
                telegramLink.href = "https://t.me/VexPlayNet";
                youtubeLink.href = "https://www.youtube.com/@VexPlayVip";
            } else {
                telegramLink.href = "https://t.me/VexPlayNet";
                youtubeLink.href = "https://www.youtube.com/@VexPlayVip";
            }
        }

        if (showLoader) {
            langLoader.classList.remove("show");
        }
    }, showLoader ? 700 : 0);
}

function updateVideoByLanguage(lang) {
    updateTutorialVideoByLanguage(lang);
}

function updateTutorialVideoByLanguage(lang) {
    const video = document.getElementById("tutorialVideo");
    const progressBar = document.getElementById("tutorialProgressBar");
    const currentTimeEl = document.getElementById("tutorialCurrentTime");
    const durationEl = document.getElementById("tutorialDuration");
    const bigPlay = document.getElementById("tutorialBigPlay");
    const playPause = document.getElementById("tutorialPlayPause");

    if (!video) return;

    const newSrc = lang === "ar" ? video.dataset.videoAr : video.dataset.videoEn;
    const newPoster = lang === "ar" ? video.dataset.posterAr : video.dataset.posterEn;

    if (newPoster) {
        video.poster = newPoster;
    }

    if (!newSrc || video.src === newSrc) return;

    video.pause();
    video.src = newSrc;
    video.load();

    if (progressBar) progressBar.style.width = "0%";
    if (currentTimeEl) currentTimeEl.textContent = "0:00";
    if (durationEl) durationEl.textContent = "0:00";
    if (bigPlay) bigPlay.classList.remove("hide");
    if (playPause) playPause.innerHTML = "<i class='bx bx-play'></i>";
}

window.addEventListener("load", () => {
    setTimeout(() => {
        pageLoader.classList.add("hide");

        document.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("show"), i * 140);
        });

        document.querySelectorAll(".reveal-card").forEach((el, i) => {
            setTimeout(() => el.classList.add("show"), 420 + i * 170);
        });
    }, 550);
});

window.addEventListener("load", () => {
    pageFullyLoaded = true;

    setTimeout(() => {
        videoCanLoad = true;
        updateVideoByLanguage(localStorage.getItem("siteLang") || "ar");
    }, 1200);
});

function changeLanguage(lang) {
    localStorage.setItem("siteLang", lang);
    applyLanguage(lang, true);
}

const savedLang = localStorage.getItem("siteLang") || "ar";
applyLanguage(savedLang, false);

langSelect.addEventListener("change", e => {
    changeLanguage(e.target.value);
});

// Demo
const customPlayer = document.getElementById("customPlayer");
const demoVideo = document.getElementById("demoVideo");
const bigPlay = document.getElementById("bigPlay");
const playPause = document.getElementById("playPause");
const muteBtn = document.getElementById("muteBtn");
const fullScreenBtn = document.getElementById("fullScreenBtn");
const progressBox = document.getElementById("progressBox");
const progressBar = document.getElementById("progressBar");
const progressThumb = document.getElementById("progressThumb");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function formatTime(time) {
    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
}

if (demoVideo) {
    demoVideo.muted = true;
    demoVideo.controls = false;

    demoVideo.addEventListener("contextmenu", e => e.preventDefault());

    window.addEventListener("load", () => {
        demoVideo.play().then(() => {
            bigPlay.classList.add("hide");
        }).catch(() => {
            bigPlay.classList.remove("hide");
        });
    });

    demoVideo.addEventListener("loadedmetadata", () => {
        durationEl.textContent = formatTime(demoVideo.duration);
    });

    demoVideo.addEventListener("timeupdate", () => {
        const percent = (demoVideo.currentTime / demoVideo.duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentTimeEl.textContent = formatTime(demoVideo.currentTime);
    });

    function togglePlay() {
        if (demoVideo.paused) {
            demoVideo.play();
        } else {
            demoVideo.pause();
        }
    }

    bigPlay.addEventListener("click", togglePlay);
    playPause.addEventListener("click", togglePlay);
    demoVideo.addEventListener("click", togglePlay);

    demoVideo.addEventListener("play", () => {
        bigPlay.classList.add("hide");
        playPause.innerHTML = "<i class='bx bx-pause'></i>";
    });

    demoVideo.addEventListener("pause", () => {
        bigPlay.classList.remove("hide");
        playPause.innerHTML = "<i class='bx bx-play'></i>";
    });

    muteBtn.addEventListener("click", () => {
        demoVideo.muted = !demoVideo.muted;
        muteBtn.innerHTML = demoVideo.muted
            ? "<i class='bx bx-volume-mute'></i>"
            : "<i class='bx bx-volume-full'></i>";
    });

    progressBox.addEventListener("click", e => {
        const rect = progressBox.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        demoVideo.currentTime = percent * demoVideo.duration;
    });

    fullScreenBtn.addEventListener("click", () => {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (customPlayer.requestFullscreen) {
                customPlayer.requestFullscreen();
            } else if (customPlayer.webkitRequestFullscreen) {
                customPlayer.webkitRequestFullscreen();
            } else if (customPlayer.msRequestFullscreen) {
                customPlayer.msRequestFullscreen();
            } else if (demoVideo.webkitEnterFullscreen) {
                demoVideo.webkitEnterFullscreen();
            }
        }
    });

    let controlsTimer;

    customPlayer.addEventListener("mousemove", () => {
        customPlayer.classList.add("show-controls");
        clearTimeout(controlsTimer);

        controlsTimer = setTimeout(() => {
            if (!demoVideo.paused) {
                customPlayer.classList.remove("show-controls");
            }
        }, 2200);
    });

    customPlayer.addEventListener("touchstart", () => {
        customPlayer.classList.toggle("show-controls");
    });
}

const soundBtn = document.getElementById("soundBtn");

if (demoVideo && soundBtn) {
    soundBtn.addEventListener("click", () => {
        demoVideo.muted = false;
        demoVideo.volume = 1;
        demoVideo.play();
        soundBtn.classList.add("hide");

        if (muteBtn) {
            muteBtn.innerHTML = "<i class='bx bx-volume-full'></i>";
        }
    });
}


// Tutorial Video - CRASHUP Page
const tutorialPlayer = document.getElementById("tutorialPlayer");
const tutorialVideo = document.getElementById("tutorialVideo");
const tutorialBigPlay = document.getElementById("tutorialBigPlay");
const tutorialPlayPause = document.getElementById("tutorialPlayPause");
const tutorialMuteBtn = document.getElementById("tutorialMuteBtn");
const tutorialFullScreenBtn = document.getElementById("tutorialFullScreenBtn");
const tutorialProgressBox = document.getElementById("tutorialProgressBox");
const tutorialProgressBar = document.getElementById("tutorialProgressBar");
const tutorialProgressThumb = document.getElementById("tutorialProgressThumb");
const tutorialCurrentTimeEl = document.getElementById("tutorialCurrentTime");
const tutorialDurationEl = document.getElementById("tutorialDuration");

if (tutorialVideo) {
    tutorialVideo.muted = false;
    tutorialVideo.volume = 1;
    tutorialVideo.controls = false;

    tutorialVideo.addEventListener("contextmenu", e => e.preventDefault());

    tutorialVideo.addEventListener("loadedmetadata", () => {
        tutorialDurationEl.textContent = formatTime(tutorialVideo.duration);
    });

    tutorialVideo.addEventListener("timeupdate", () => {
        const percent = (tutorialVideo.currentTime / tutorialVideo.duration) * 100;
        tutorialProgressBar.style.width = `${percent}%`;

        if (tutorialProgressThumb) {
            tutorialProgressThumb.style.left = `${percent}%`;
        }
        tutorialCurrentTimeEl.textContent = formatTime(tutorialVideo.currentTime);
    });

    function toggleTutorialPlay() {
        tutorialVideo.paused ? tutorialVideo.play() : tutorialVideo.pause();
    }

    tutorialBigPlay.addEventListener("click", toggleTutorialPlay);
    tutorialPlayPause.addEventListener("click", toggleTutorialPlay);
    tutorialVideo.addEventListener("click", toggleTutorialPlay);

    tutorialVideo.addEventListener("play", () => {
        tutorialBigPlay.classList.add("hide");
        tutorialPlayPause.innerHTML = "<i class='bx bx-pause'></i>";
    });

    tutorialVideo.addEventListener("pause", () => {
        tutorialBigPlay.classList.remove("hide");
        tutorialPlayPause.innerHTML = "<i class='bx bx-play'></i>";
    });

    tutorialMuteBtn.addEventListener("click", () => {
        tutorialVideo.muted = !tutorialVideo.muted;
        tutorialMuteBtn.innerHTML = tutorialVideo.muted
            ? "<i class='bx bx-volume-mute'></i>"
            : "<i class='bx bx-volume-full'></i>";
    });

    tutorialProgressBox.addEventListener("click", e => {
        const rect = tutorialProgressBox.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        tutorialVideo.currentTime = percent * tutorialVideo.duration;
    });

    tutorialFullScreenBtn.addEventListener("click", () => {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
        } else {
            if (tutorialPlayer.requestFullscreen) tutorialPlayer.requestFullscreen();
            else if (tutorialPlayer.webkitRequestFullscreen) tutorialPlayer.webkitRequestFullscreen();
            else if (tutorialPlayer.msRequestFullscreen) tutorialPlayer.msRequestFullscreen();
            else if (tutorialVideo.webkitEnterFullscreen) tutorialVideo.webkitEnterFullscreen();
        }
    });

    let tutorialControlsTimer;

    tutorialPlayer.addEventListener("mousemove", () => {
        tutorialPlayer.classList.add("show-controls");
        clearTimeout(tutorialControlsTimer);

        tutorialControlsTimer = setTimeout(() => {
            if (!tutorialVideo.paused) {
                tutorialPlayer.classList.remove("show-controls");
            }
        }, 2200);
    });

    tutorialPlayer.addEventListener("touchstart", () => {
        tutorialPlayer.classList.toggle("show-controls");
    });

    let isDraggingProgress = false;

    function updateTutorialSeek(clientX) {
        const rect = tutorialProgressBox.getBoundingClientRect();

        let percent = (clientX - rect.left) / rect.width;

        percent = Math.max(0, Math.min(1, percent));

        tutorialVideo.currentTime = percent * tutorialVideo.duration;

        tutorialProgressBar.style.width = `${percent * 100}%`;

        if (tutorialProgressThumb) {
            tutorialProgressThumb.style.left = `${percent * 100}%`;
        }
    }
    tutorialProgressThumb.addEventListener("mousedown", e => {
        isDraggingProgress = true;
        e.preventDefault();
    });

    document.addEventListener("mousemove", e => {
        if (!isDraggingProgress) return;

        updateTutorialSeek(e.clientX);
    });

    document.addEventListener("mouseup", () => {
        isDraggingProgress = false;
    });

    tutorialProgressThumb.addEventListener("touchstart", () => {
        isDraggingProgress = true;
    }, { passive: true });

    document.addEventListener("touchmove", e => {
        if (!isDraggingProgress) return;

        updateTutorialSeek(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener("touchend", () => {
        isDraggingProgress = false;
    });


}

// ScrollUp
const scrollTopBtn = document.getElementById("scrollTopBtn");

function toggleScrollTopBtn() {
    if (!scrollTopBtn) return;

    if (window.scrollY > 80) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

if (scrollTopBtn) {
    window.addEventListener("scroll", toggleScrollTopBtn);
    window.addEventListener("load", toggleScrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// FAQ Videos - CRASHUP Page
(function setupCrashupFaqVideos() {
    const faqItems = document.querySelectorAll(".faq-item");
    if (!faqItems.length) return;

    const mainTutorialVideo = document.getElementById("tutorialVideo");

    function closeFaqItem(item) {
        const answer = item.querySelector(".faq-answer");
        const video = item.querySelector(".faq-video");
        const bigPlay = item.querySelector(".faq-big-play");
        const playToggle = item.querySelector(".faq-play-toggle");

        item.classList.remove("active");

        if (answer) answer.style.maxHeight = "0px";
        if (video) video.pause();
        if (bigPlay) bigPlay.classList.remove("hide");
        if (playToggle) playToggle.innerHTML = "<i class='bx bx-play'></i>";
    }

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const video = item.querySelector(".faq-video");
        const bigPlay = item.querySelector(".faq-big-play");
        const playToggle = item.querySelector(".faq-play-toggle");
        const progressBox = item.querySelector(".faq-progress-box");
        const progressBar = item.querySelector(".faq-progress-bar");
        const progressThumb = item.querySelector(".faq-progress-thumb");
        const currentTime = item.querySelector(".faq-current");
        const duration = item.querySelector(".faq-duration");

        if (!question || !answer) return;

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach(otherItem => {
                if (otherItem !== item) closeFaqItem(otherItem);
            });

            if (isActive) {
                closeFaqItem(item);
                return;
            }

            item.classList.add("active");
            answer.style.maxHeight = (answer.scrollHeight + 80) + "px";

            setTimeout(() => {
                answer.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 200);
        });

        if (!video) return;

        video.controls = false;
        video.addEventListener("contextmenu", e => e.preventDefault());

        video.addEventListener("loadedmetadata", () => {
            if (duration) duration.textContent = formatTime(video.duration);

            if (item.classList.contains("active")) {
                answer.style.maxHeight = (answer.scrollHeight + 80) + "px";
            }
        });

        video.addEventListener("timeupdate", () => {
            if (!video.duration) return;

            const percent = (video.currentTime / video.duration) * 100;

            if (progressBar) progressBar.style.width = `${percent}%`;
            if (progressThumb) progressThumb.style.left = `${percent}%`;
            if (currentTime) currentTime.textContent = formatTime(video.currentTime);
        });

        function toggleFaqVideo(e) {
            if (e) e.stopPropagation();
            video.paused ? video.play() : video.pause();
        }

        if (bigPlay) bigPlay.addEventListener("click", toggleFaqVideo);
        if (playToggle) playToggle.addEventListener("click", toggleFaqVideo);
        video.addEventListener("click", toggleFaqVideo);

        video.addEventListener("play", () => {
            if (mainTutorialVideo && !mainTutorialVideo.paused) {
                mainTutorialVideo.pause();
            }

            faqItems.forEach(otherItem => {
                const otherVideo = otherItem.querySelector(".faq-video");

                if (otherVideo && otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });

            if (bigPlay) bigPlay.classList.add("hide");
            if (playToggle) playToggle.innerHTML = "<i class='bx bx-pause'></i>";
        });

        video.addEventListener("pause", () => {
            if (bigPlay) bigPlay.classList.remove("hide");
            if (playToggle) playToggle.innerHTML = "<i class='bx bx-play'></i>";
        });

        if (progressBox) {
            progressBox.addEventListener("click", e => {
                e.stopPropagation();
                if (!video.duration) return;

                const rect = progressBox.getBoundingClientRect();
                const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

                video.currentTime = percent * video.duration;
            });
        }

        let isDraggingFaqProgress = false;

        function seek(clientX) {
            if (!video.duration || !progressBox) return;

            const rect = progressBox.getBoundingClientRect();
            const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

            video.currentTime = percent * video.duration;

            if (progressBar) progressBar.style.width = `${percent * 100}%`;
            if (progressThumb) progressThumb.style.left = `${percent * 100}%`;
        }

        if (progressThumb) {
            progressThumb.addEventListener("mousedown", e => {
                isDraggingFaqProgress = true;
                e.preventDefault();
                e.stopPropagation();
            });

            progressThumb.addEventListener("touchstart", e => {
                isDraggingFaqProgress = true;
                e.stopPropagation();
            }, { passive: true });
        }

        document.addEventListener("mousemove", e => {
            if (!isDraggingFaqProgress) return;
            seek(e.clientX);
        });

        document.addEventListener("mouseup", () => {
            isDraggingFaqProgress = false;
        });

        document.addEventListener("touchmove", e => {
            if (!isDraggingFaqProgress) return;
            seek(e.touches[0].clientX);
        }, { passive: true });

        document.addEventListener("touchend", () => {
            isDraggingFaqProgress = false;
        });
    });
})();