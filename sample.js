function autoLike() {
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a")[0]

    good_elem.click()
    setTimeout(autoLike, 300)
}

chrome.browserAction.onClicked.addListener(autoLike);

