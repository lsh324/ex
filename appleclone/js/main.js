let yOffset = 0;
let currentScene = 0;
let preScrollHeight = 0;

const sceneInfo = [
    // section-0
    {
        //애니메이션 처리 하는 영역
        type: "sticky",
        //영역의 높이 조정
        heightNum: 5,
        //영역의 높이 값 저장
        scrollHeight: 0,
        //영역 및 보여져야 할 메세지들
        objs: {
            container: document.querySelector("#scroll-section-0"),
            messageA: document.querySelector("#scroll-section-0 .main-message.a"),
            messageB: document.querySelector("#scroll-section-0 .main-message.b"),
            messageC: document.querySelector("#scroll-section-0 .main-message.c"),
            messageD: document.querySelector("#scroll-section-0 .main-message.d"),
            canvas: document.querySelector("#video-canvas-0"),
            context: document.querySelector("#video-canvas-0").getContext("2d"),
            videoImages: [],
        },
        values: {
            videoImagesCount: 117,
            imageSequence: [0, 116],
            canvas_opacity: [1, 0, { start: 0.9, end: 1 }],  //부드럽게 다음 섹션으로 이동하기 위해서
            messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
            messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
            messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
            messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
            messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
            messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
            messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
            messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
            messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
            messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
            messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
            messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
            messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
            messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
            messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
            messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }]
        }
    },
    // section-1
    {
        type: "normal",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
            container: document.querySelector("#scroll-section-1"),
        },
    },
    // section-2
    {
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section-2'),
            messageA: document.querySelector('#scroll-section-2 .main-message.a'),
            messageB: document.querySelector('#scroll-section-2 .desc-message.b'),
            messageC: document.querySelector('#scroll-section-2 .desc-message.c'),
            pinB: document.querySelector('#scroll-section-2 .b .pin'),
            pinC: document.querySelector('#scroll-section-2 .c .pin'),
            canvas: document.querySelector('#video-canvas-1'),
            context: document.querySelector('#video-canvas-1').getContext('2d'),
            videoImages: []
        },
        values: {
            videoImageCount: 117,
            imageSequence: [0, 116],
            canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
            canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
            messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
            messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
            messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
            messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
            messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
            messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
            messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
            messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
            messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
            messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
            messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
            messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
            pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
            pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
            pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
            pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
            pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
            pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }]
        }
    },
    // section-3
    {
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
            container: document.querySelector("#scroll-section-3"),
        },

    },
];

//영역 비율 세팅
const calcValues = (values, currentYOffset) => {
    //보여지고있는 영역의 높이
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    //보여지고있는 영역의 높이 비율( 0 ~ 1)
    const scrollRatio = currentYOffset / scrollHeight;
    // console.log(scrollRatio);
    let rv;
    if (values.length === 3) {
        // 영역 내 실제 시작과 끝의 비율
        const partScrollStart = values[2].start * scrollHeight;
        const partScrollEnd = values[2].end * scrollHeight;
        //실제 처리되는 스크롤의 비율
        const partScrollHeight = partScrollEnd - partScrollStart;
        //영역 내
        if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
            const temp = (currentYOffset - partScrollStart) / partScrollHeight;
            rv = temp * (values[1] - values[0]) + values[0];
            // console.log(rv);
        }
        //영역 전
        else if (currentYOffset < partScrollStart) {
            rv = values[0];
        }
        //영역 후
        else if (currentYOffset > partScrollEnd) {
            rv = values[1];
        }
    } else {
        rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
};

//영역 구간마다 호출
const playAnimation = () => {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - preScrollHeight;

    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch (currentScene) {
        case 0:
            //이미지 애니메이션
            let seq = Math.round(calcValues(values.imageSequence, currentYOffset));
            objs.context.drawImage(objs.videoImages[seq], 0, 0);
            objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYOffset);

            if (scrollRatio <= 0.22) {
                // in
                objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
            } else {
                // out
                objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
            }

            if (scrollRatio <= 0.42) {
                // in
                objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
            } else {
                // out
                objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
            }

            if (scrollRatio <= 0.62) {
                // in
                objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
            } else {
                // out
                objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
            }

            if (scrollRatio <= 0.82) {
                // in
                objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
                objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
            } else {
                // out
                objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
                objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
            }
            break;
        case 1:
            // console.log("scene play - 1");
            break;
        case 2:
				let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
				objs.context.drawImage(objs.videoImages[sequence2], 0, 0);

				if (scrollRatio <= 0.5) {
					// in
					objs.canvas.style.opacity = calcValues(values.canvas_opacity_in, currentYOffset);
				} else {
					// out
					objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);
				}

				if (scrollRatio <= 0.25) {
					// in
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
				}

				if (scrollRatio <= 0.57) {
					// in
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				} else {
					// out
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				}

				if (scrollRatio <= 0.83) {
					// in
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
					objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
				} else {
					// out
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
					objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
				}
            break;
        case 3:
            console.log("scene play - 3");
            break;
    }
};

const scrollLoop = () => {
    preScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
        preScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > preScrollHeight + sceneInfo[currentScene].scrollHeight) {
        currentScene++;
        document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (yOffset < preScrollHeight) {
        currentScene--;
        document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    playAnimation();
};

//load될 때 영역의 높이 설정하기
function setLayout() {
    for (let i = 0; i < sceneInfo.length; i++) {
        if (sceneInfo[i].type === 'sticky') {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        } else if (sceneInfo[i].type === 'normal') {
            sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight + (window.innerHeight * 0.5);
        }
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    //새로고침 했을 때 생기는 문제
    yOffset = window.pageYOffset;
    let totalHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
        totalHeight += sceneInfo[i].scrollHeight;
        if (totalHeight >= yOffset) {
            currentScene = i;
            break;
        }
    }
    // console.log( currentScene );
    document.body.setAttribute('id', `show-scene-${currentScene}`);

    //canvas setting
    let heightRatio = window.innerHeight / 1080;
    sceneInfo[0].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
    sceneInfo[2].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
}

//canvas 세팅
const setCanvasImages = () => {
    let imgElem;

    for (let i = 0; i < sceneInfo[0].values.videoImagesCount; i++) {
        imgElem = new Image();
        imgElem.src = `./images/seq/${i}.jpg`;
        sceneInfo[0].objs.videoImages.push(imgElem);
    }
    // console.log(sceneInfo[0].objs.videoImages);
    let imgElem2;
    for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
        imgElem2 = new Image();
        imgElem2.src = `./images/seq/${i}.jpg`;
        sceneInfo[2].objs.videoImages.push(imgElem2);
    }
};
setCanvasImages();

window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
});

window.addEventListener("load", () => {
    setLayout();
    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
});

window.addEventListener("resize", () => {
    window.location.reload();
});


