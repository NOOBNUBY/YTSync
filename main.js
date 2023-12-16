function setPlaybackSpeed() {
    if (window.location.pathname.startsWith("/watch")) {
        const settingBtn = document.querySelector(".ytp-settings-button");
        settingBtn.click();

        setTimeout(function () {
            const speedBtn = Array.from(
                document.querySelectorAll(".ytp-menuitem")
            ).find((el) => el.textContent.includes("재생 속도"));
            speedBtn.click();

            setTimeout(function () {
                const speed2xBtn = Array.from(
                    document.querySelectorAll(".ytp-menuitem")
                ).find((el) => el.textContent.trim() === "2");
                speed2xBtn.click();

                setTimeout(function () {
                    settingBtn.click();
                }, 1);
            }, 1);
        }, 1);
    }
}

window.onload = setPlaybackSpeed;
