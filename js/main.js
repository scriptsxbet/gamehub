const pageLoader = document.getElementById("pageLoader");
const langLoader = document.getElementById("langLoader");
const langLoaderText = document.getElementById("langLoaderText");
const langSelect = document.getElementById("langSelect");

const translations = {
    ar: {
        badge: "SECURE TOOLS HUB",
        title: "ادوات مجانية بالكامل",
        subtitle: "في GameHub ستجد جميع أدواتنا المجانية بالكامل التي تتنصت على خوادم منصات المراهنات بشكل احترافي ودقيق مما تساعدك على تحقيق الربح المستمر من هذه المنصات",
        live: "نشط الآن",
        desc1: "أداة مجانية بالكامل تم تطويرها للتنصت على WebSocket لعبة Crash وسحب توقيت الانفجار قبل بداية الجولة وعرضه في الاداة فوراً",
        desc2: "ماسح بيانات ذكي لعرض حالة المنصات والقراءات.",
        details: "المزيد من التفاصيل",
        soon: "قريبًا",
        footer: "© 2026 GameHub. جميع الحقوق محفوظة.",
        loading: "جاري تغيير اللغة",
        // Demo
        watchFull: "مشاهدة الشرح كامل وتحميل الأداة",
        crashupDesc: "أداة مجانية بالكامل تم تطويرها للتنصت على WebSocket لعبة Crash وسحب توقيت الانفجار قبل بداية الجولة وعرضه في الاداة فوراً",
        soundBtn: "اضغط لتفعيل الصوت",
    },
    en: {
        badge: "SECURE TOOLS HUB",
        title: "100% Free Tools",
        subtitle: "At GameHub, you'll find a complete collection of free tools designed to professionally and accurately monitor betting platform servers, helping you maximize your opportunities for consistent profits.", live: "Active Now",
        desc1: "A completely free tool developed to monitor the Crash game's WebSocket data stream, capture the crash timing before each round begins, and instantly display it within the tool.",
        desc2: "A smart data scanner for platform status and readings.",
        details: "More Details",
        soon: "Coming Soon",
        footer: "© 2026 GameHub. All rights reserved.",
        loading: "Changing language",
        // Demo
        watchFull: "Watch Full Tutorial & Download Tool",
        crashupDesc: "A completely free tool developed to monitor the Crash game's WebSocket data stream, capture the crash timing before each round begins, and instantly display it within the tool.",
        soundBtn: "Click to Enable Sound",
    }
};

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
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        langSelect.value = lang;

        if (showLoader) {
            langLoader.classList.remove("show");
        }
    }, showLoader ? 700 : 0);
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