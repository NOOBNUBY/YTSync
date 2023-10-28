window.onload = () => {
    let Reward = () => {
        const btn = document.querySelector('.fEpwrH');
        if (document.querySelector('.fEpwrH') !== null) {
            console.log('리워드를 받았습니다.');
            btn.click();
        }
    }

    setInterval(Reward, 1000);
}