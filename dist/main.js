document.addEventListener("DOMContentLoaded", function() {
    const ukm1 = document.getElementById("ukm1");
    const ukm2 = document.getElementById("ukm2");
    const ukm3 = document.getElementById("ukm3");
    const ukm4 = document.getElementById("ukm4");
    const ukm5 = document.getElementById("ukm5");
    const ukm6 = document.getElementById("ukm6");
    const ukm7 = document.getElementById("ukm7");
    const ukm8 = document.getElementById("ukm8");
    const ukm9 = document.getElementById("ukm9");
    const ukm10 = document.getElementById("ukm10");
    const ukm11 = document.getElementById("ukm11");
    const ukm12 = document.getElementById("ukm12");
    const ukm13 = document.getElementById("ukm13");
    const ukm14 = document.getElementById("ukm14");
    const ukm15 = document.getElementById("ukm15");
    const ukm16 = document.getElementById("ukm16");
    const ukm17 = document.getElementById("ukm17");
    const ukm18 = document.getElementById("ukm18");
    const ukm19 = document.getElementById("ukm19");
    const ukm20 = document.getElementById("ukm20");
    const ukm21 = document.getElementById("ukm21");
    const ukm22 = document.getElementById("ukm22");
    const ukm23 = document.getElementById("ukm23");
    const ukm24 = document.getElementById("ukm24");
    const ukm25 = document.getElementById("ukm25");
    const ukm26 = document.getElementById("ukm26");
    const ukm27 = document.getElementById("ukm27");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
    const p5 = document.getElementById("p5");
    const p6 = document.getElementById("p6");
    const p7 = document.getElementById("p7");
    const p8 = document.getElementById("p8");
    const p9 = document.getElementById("p9");
    const p10 = document.getElementById("p10");
    const p11 = document.getElementById("p11");
    const p12 = document.getElementById("p12");
    const p13 = document.getElementById("p13");
    const p14 = document.getElementById("p14");
    const p15 = document.getElementById("p15");
    const p16 = document.getElementById("p16");
    const p17 = document.getElementById("p17");
    const p18 = document.getElementById("p18");
    const p19 = document.getElementById("p19");
    const p20 = document.getElementById("p20");
    const p21 = document.getElementById("p21");
    const p22 = document.getElementById("p22");
    const p23 = document.getElementById("p23");
    const p24 = document.getElementById("p24");
    const p25 = document.getElementById("p25");
    const p26 = document.getElementById("p26");
    const p27 = document.getElementById("p27");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const contentContainer = document.getElementById("contentContainer");
    let currentPosition = 0;
    function moveRight() {
        if(currentPosition <= 450){
            currentPosition += 90; // Adjust the step size
            contentContainer.style.right = `${currentPosition}vw`;
        }
    }
    function moveLeft() {
        if(currentPosition > 0){
            currentPosition -= 90; // Adjust the step size
            contentContainer.style.right = `${currentPosition}vw`;
        }
    }

    function cursorIn(ukm1, ukm2, p, wa){
        ukm1.style.width = "70%";
        ukm2.style.width = "26%";
        p.style.opacity = "1";
        p.style.transitionDelay = "400ms";
        p.style.transitionDuration = "500ms";
        wa.style.opacity = "1";
        wa.style.transitionDelay = "400ms";
        wa.style.transitionDuration = "500ms";
    }

    function cursorOut(ukm1, ukm2, p, wa){
        ukm1.style.width = "48%";
        ukm2.style.width = "48%";
        p.style.opacity = "0";
        p.style.transitionDuration = "0ms";
        p.style.transitionDelay = "0ms";
        wa.style.opacity = "0";
        wa.style.transitionDelay = "0ms";
        wa.style.transitionDuration = "0ms";
    }

    prev.addEventListener("click",moveLeft);
    next.addEventListener("click", moveRight);

    ukm1.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm1");
        cursorIn(ukm1,ukm2, p1, wa);
    });

    ukm1.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm1");
        cursorOut(ukm1,ukm2, p1, wa);
    });

    ukm2.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm2");
        cursorIn(ukm2, ukm1, p2, wa);
    });

    ukm2.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm2");
        cursorOut(ukm2, ukm1, p2, wa);
    });

    ukm3.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm3");
       cursorIn(ukm3, ukm4, p3, wa);
    });

    ukm3.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm3");
        cursorOut(ukm3, ukm4, p3, wa);
    });

    ukm4.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm4");
        cursorIn(ukm4, ukm3, p4, wa);
    });

    ukm4.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm4");
        cursorOut(ukm4, ukm3, p4, wa);
    });

    ukm5.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm5");
        cursorIn(ukm5, ukm6, p5, wa);
    });

    ukm5.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm5");
        cursorOut(ukm5, ukm6, p5, wa);
    });

    ukm6.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm6");
        cursorIn(ukm6, ukm5, p6, wa);
    });

    ukm6.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm6");
        cursorOut(ukm6, ukm5, p6, wa);
    });

    ukm7.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm7");
        cursorIn(ukm7, ukm8, p7, wa);
    });

    ukm7.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm7");
        cursorOut(ukm7, ukm8, p7, wa);
    });

    ukm8.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm8");
        cursorIn(ukm8, ukm7 ,p8, wa);
    });

    ukm8.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm8");
        cursorOut(ukm8, ukm7, p8, wa);
    });

    ukm9.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm9");
        cursorIn(ukm9, ukm10, p9, wa);
    });

    ukm9.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm9");
        cursorOut(ukm9, ukm10, p9, wa);
    });

    ukm10.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm10");
        cursorIn(ukm10, ukm9, p10, wa);
    });

    ukm10.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm10");
        cursorOut(ukm10, ukm9, p10, wa);
    });

    ukm11.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm11");
        cursorIn(ukm11, ukm12, p11, wa);
    });

    ukm11.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm11");
        cursorOut(ukm11, ukm12, p11, wa);
    });

    ukm12.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm12");
        cursorIn(ukm12, ukm11, p12, wa);
    });

    ukm12.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm12");
        cursorOut(ukm12, ukm11, p12, wa);
    });

    ukm13.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm13");
        cursorIn(ukm13,ukm14, p13, wa);
    });

    ukm13.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm13");
        cursorOut(ukm13,ukm14, p13, wa);
    });

    ukm14.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm14");
        cursorIn(ukm14, ukm13, p14, wa);
    });

    ukm14.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm14");
        cursorOut(ukm14, ukm13, p14, wa);
    });

    ukm15.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm15");
       cursorIn(ukm15, ukm16, p15, wa);
    });

    ukm15.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm15");
        cursorOut(ukm15, ukm16, p15, wa);
    });

    ukm16.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm16");
        cursorIn(ukm16, ukm15, p16, wa);
    });

    ukm16.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm16");
        cursorOut(ukm16, ukm15, p16, wa);
    });

    ukm17.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm17");
        cursorIn(ukm17, ukm18, p17, wa);
    });

    ukm17.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm17");
        cursorOut(ukm17, ukm18, p17, wa);
    });

    ukm18.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm18");
        cursorIn(ukm18, ukm17, p18, wa);
    });

    ukm18.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm18");
        cursorOut(ukm18, ukm17, p18, wa);
    });

    ukm19.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm19");
        cursorIn(ukm19, ukm20, p19, wa);
    });

    ukm19.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm19");
        cursorOut(ukm19, ukm20, p19, wa);
    });

    ukm20.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm20");
        cursorIn(ukm20, ukm19 ,p20, wa);
    });

    ukm20.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm20");
        cursorOut(ukm20, ukm19, p20, wa);
    });

    ukm21.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm21");
        cursorIn(ukm21, ukm22, p21, wa);
    });

    ukm21.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm21");
        cursorOut(ukm21, ukm22, p21, wa);
    });

    ukm22.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm22");
        cursorIn(ukm22, ukm21, p22, wa);
    });

    ukm22.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm22");
        cursorOut(ukm22, ukm21, p22, wa);
    });

    ukm23.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm23");
        cursorIn(ukm23, ukm24, p23, wa);
    });

    ukm23.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm23");
        cursorOut(ukm23, ukm24, p23, wa);
    });

    ukm24.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm24");
        cursorIn(ukm24, ukm23, p24, wa);
    });

    ukm24.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm24");
        cursorOut(ukm24, ukm23, p24, wa);
    });

    ukm25.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm25");
        cursorIn(ukm25, ukm26, p25, wa);
    });

    ukm25.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm25");
        cursorOut(ukm25, ukm26, p25, wa);
    });

    ukm26.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm26");
        cursorIn(ukm26, ukm25, p26, wa);
    });

    ukm26.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm26");
        cursorOut(ukm26, ukm25, p26, wa);
    });

    ukm27.addEventListener("mouseover", function() {
        const wa = document.getElementById("waUkm27");
        ukm27.style.width = "70%";
        p27.style.opacity = "1";
        p27.style.transitionDelay = "400ms";
        p27.style.transitionDuration = "500ms";
        wa.style.opacity = "1";
        wa.style.transitionDelay = "400ms";
        wa.style.transitionDuration = "500ms";
    });

    ukm27.addEventListener("mouseout", function() {
        const wa = document.getElementById("waUkm27");
        ukm27.style.width = "48%";
        p27.style.opacity = "0";
        p27.style.transitionDuration = "0ms";
        p27.style.transitionDelay = "0ms";
        wa.style.opacity = "0";
        wa.style.transitionDelay = "0ms";
        wa.style.transitionDuration = "0ms";
    });
});