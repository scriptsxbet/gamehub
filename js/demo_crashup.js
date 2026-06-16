(() => {
    function formatTime(time) {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    function setupVideoPlayer(config) {
        const player = document.getElementById(config.playerId);
        const video = document.getElementById(config.videoId);
        const bigPlay = document.getElementById(config.bigPlayId);
        const playPause = document.getElementById(config.playPauseId);
        const muteBtn = document.getElementById(config.muteBtnId);
        const fullScreenBtn = document.getElementById(config.fullScreenBtnId);
        const progressBox = document.getElementById(config.progressBoxId);
        const progressBar = document.getElementById(config.progressBarId);
        const progressThumb = document.getElementById(config.progressThumbId);
        const currentTimeEl = document.getElementById(config.currentTimeId);
        const durationEl = document.getElementById(config.durationId);
        const soundBtn = document.getElementById(config.soundBtnId);

        if (!player || !video) return;

        video.muted = true;
        video.controls = false;

        video.addEventListener("contextmenu", e => e.preventDefault());

        if (config.autoplay) {
            window.addEventListener("load", () => {
                video.play().then(() => {
                    if (bigPlay) bigPlay.classList.add("hide");
                }).catch(() => {
                    if (bigPlay) bigPlay.classList.remove("hide");
                });
            });
        }

        video.addEventListener("loadedmetadata", () => {
            if (durationEl) durationEl.textContent = formatTime(video.duration);
        });

        video.addEventListener("timeupdate", () => {
            if (!video.duration) return;

            const percent = (video.currentTime / video.duration) * 100;

            if (progressBar) progressBar.style.width = `${percent}%`;
            if (progressThumb) progressThumb.style.left = `${percent}%`;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(video.currentTime);
        });

        function togglePlay(e) {
            if (e) e.stopPropagation();
            video.paused ? video.play() : video.pause();
        }

        if (bigPlay) bigPlay.addEventListener("click", togglePlay);
        if (playPause) playPause.addEventListener("click", togglePlay);
        video.addEventListener("click", togglePlay);

        video.addEventListener("play", () => {
            if (bigPlay) bigPlay.classList.add("hide");
            if (playPause) playPause.innerHTML = "<i class='bx bx-pause'></i>";
        });

        video.addEventListener("pause", () => {
            if (bigPlay) bigPlay.classList.remove("hide");
            if (playPause) playPause.innerHTML = "<i class='bx bx-play'></i>";
        });

        if (muteBtn) {
            muteBtn.addEventListener("click", e => {
                e.stopPropagation();
                video.muted = !video.muted;

                muteBtn.innerHTML = video.muted
                    ? "<i class='bx bx-volume-mute'></i>"
                    : "<i class='bx bx-volume-full'></i>";

                if (!video.muted && soundBtn) {
                    soundBtn.classList.add("hide");
                }
            });
        }

        if (soundBtn) {
            soundBtn.addEventListener("click", e => {
                e.stopPropagation();

                video.muted = false;
                video.volume = 1;
                video.play();

                soundBtn.classList.add("hide");

                if (muteBtn) {
                    muteBtn.innerHTML = "<i class='bx bx-volume-full'></i>";
                }
            });
        }

        if (progressBox) {
            progressBox.addEventListener("click", e => {
                e.stopPropagation();
                if (!video.duration) return;

                const rect = progressBox.getBoundingClientRect();
                const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

                video.currentTime = percent * video.duration;
            });
        }

        let isDragging = false;

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
                isDragging = true;
                e.preventDefault();
                e.stopPropagation();
            });

            progressThumb.addEventListener("touchstart", e => {
                isDragging = true;
                e.stopPropagation();
            }, { passive: true });
        }

        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            seek(e.clientX);
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });

        document.addEventListener("touchmove", e => {
            if (!isDragging) return;
            seek(e.touches[0].clientX);
        }, { passive: true });

        document.addEventListener("touchend", () => {
            isDragging = false;
        });

        if (fullScreenBtn) {
            fullScreenBtn.addEventListener("click", e => {
                e.stopPropagation();

                if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                    if (document.exitFullscreen) document.exitFullscreen();
                    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                    else if (document.msExitFullscreen) document.msExitFullscreen();
                } else {
                    if (player.requestFullscreen) player.requestFullscreen();
                    else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
                    else if (player.msRequestFullscreen) player.msRequestFullscreen();
                    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
                }
            });
        }

        let controlsTimer;

        player.addEventListener("mousemove", () => {
            player.classList.add("show-controls");
            clearTimeout(controlsTimer);

            controlsTimer = setTimeout(() => {
                if (!video.paused) {
                    player.classList.remove("show-controls");
                }
            }, 2200);
        });

        player.addEventListener("touchstart", () => {
            player.classList.toggle("show-controls");
        });
    }

    setupVideoPlayer({
        playerId: "demoPromoPlayer",
        videoId: "demoPromoVideo",
        bigPlayId: "demoPromoBigPlay",
        playPauseId: "demoPromoPlayPause",
        muteBtnId: "demoPromoMuteBtn",
        fullScreenBtnId: "demoPromoFullScreenBtn",
        progressBoxId: "demoPromoProgressBox",
        progressBarId: "demoPromoProgressBar",
        progressThumbId: "demoPromoProgressThumb",
        currentTimeId: "demoPromoCurrentTime",
        durationId: "demoPromoDuration",
        soundBtnId: "demoPromoSoundBtn",
        autoplay: true
    });

    const faqItems = document.querySelectorAll(".faq-item");

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

        video.addEventListener("loadedmetadata", () => {
            if (duration) duration.textContent = formatTime(video.duration);
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

        let isDragging = false;

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
                isDragging = true;
                e.preventDefault();
                e.stopPropagation();
            });

            progressThumb.addEventListener("touchstart", e => {
                isDragging = true;
                e.stopPropagation();
            }, { passive: true });
        }

        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            seek(e.clientX);
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });

        document.addEventListener("touchmove", e => {
            if (!isDragging) return;
            seek(e.touches[0].clientX);
        }, { passive: true });

        document.addEventListener("touchend", () => {
            isDragging = false;
        });
    });
})();