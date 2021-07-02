const scrollBar = document.querySelector("#scroll-bar");
      const scrollEvent = () => {
        const totalHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const contentHeight = totalHeight - clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        let percent = (scrollTop / contentHeight) * 100;
        console.log(percent);
        scrollBar.style.width = percent + "%";
      };
      const init = () => {
        window.addEventListener("scroll", scrollEvent);
      };
      init();