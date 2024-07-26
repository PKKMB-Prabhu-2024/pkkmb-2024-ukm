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
    prev.addEventListener("click",moveLeft);
    next.addEventListener("click", moveRight);



    ukm1.addEventListener("mouseover", function() {
        ukm1.style.gridColumn = "span 4 / span 4";
        ukm2.style.gridColumn = "span 2 / span 2";
        p1.style.visibility = "visible";
    });

    ukm1.addEventListener("mouseout", function() {
        ukm1.style.gridColumn = "span 3 / span 3";
        ukm2.style.gridColumn = "span 3 / span 3";
        p1.style.visibility = "hidden";
    });

    ukm2.addEventListener("mouseover", function() {
        ukm2.style.gridColumn = "span 4 / span 4";
        ukm1.style.gridColumn = "span 2 / span 2";
        p2.style.visibility = "visible";
    });

    ukm2.addEventListener("mouseout", function() {
        ukm2.style.gridColumn = "span 3 / span 3";
        ukm1.style.gridColumn = "span 3 / span 3";
        p2.style.visibility = "hidden";
    });

    ukm3.addEventListener("mouseover", function() {
        ukm3.style.gridColumn = "span 4 / span 4";
        ukm4.style.gridColumn = "span 2 / span 2";
        p3.style.visibility = "visible";
    });

    ukm3.addEventListener("mouseout", function() {
        ukm3.style.gridColumn = "span 3 / span 3";
        ukm4.style.gridColumn = "span 3 / span 3";
        p3.style.visibility = "hidden";
    });

    ukm4.addEventListener("mouseover", function() {
        ukm4.style.gridColumn = "span 4 / span 4";
        ukm3.style.gridColumn = "span 2 / span 2";
        p4.style.visibility = "visible";
    });

    ukm4.addEventListener("mouseout", function() {
        ukm4.style.gridColumn = "span 3 / span 3";
        ukm3.style.gridColumn = "span 3 / span 3";
        p4.style.visibility = "hidden";
    });

    ukm5.addEventListener("mouseover", function() {
        ukm5.style.gridColumn = "span 4 / span 4";
        ukm6.style.gridColumn = "span 2 / span 2";
        p5.style.visibility = "visible";
    });

    ukm5.addEventListener("mouseout", function() {
        ukm5.style.gridColumn = "span 3 / span 3";
        ukm6.style.gridColumn = "span 3 / span 3";
        p5.style.visibility = "hidden";
    });

    ukm6.addEventListener("mouseover", function() {
        ukm6.style.gridColumn = "span 4 / span 4";
        ukm5.style.gridColumn = "span 2 / span 2";
        p6.style.visibility = "visible";
    });

    ukm6.addEventListener("mouseout", function() {
        ukm6.style.gridColumn = "span 3 / span 3";
        ukm5.style.gridColumn = "span 3 / span 3";
        p6.style.visibility = "hidden";
    });

    ukm7.addEventListener("mouseover", function() {
        ukm7.style.gridColumn = "span 4 / span 4";
        ukm8.style.gridColumn = "span 2 / span 2";
        p7.style.visibility = "visible";
    });

    ukm7.addEventListener("mouseout", function() {
        ukm7.style.gridColumn = "span 3 / span 3";
        ukm8.style.gridColumn = "span 3 / span 3";
        p7.style.visibility = "hidden";
    });

    ukm8.addEventListener("mouseover", function() {
        ukm8.style.gridColumn = "span 4 / span 4";
        ukm7.style.gridColumn = "span 2 / span 2";
        p8.style.visibility = "visible";
    });

    ukm8.addEventListener("mouseout", function() {
        ukm8.style.gridColumn = "span 3 / span 3";
        ukm7.style.gridColumn = "span 3 / span 3";
        p8.style.visibility = "hidden";
    });

    ukm9.addEventListener("mouseover", function() {
        ukm9.style.gridColumn = "span 4 / span 4";
        ukm10.style.gridColumn = "span 2 / span 2";
        p9.style.visibility = "visible";
    });

    ukm9.addEventListener("mouseout", function() {
        ukm9.style.gridColumn = "span 3 / span 3";
        ukm10.style.gridColumn = "span 3 / span 3";
        p9.style.visibility = "hidden";
    });

    ukm10.addEventListener("mouseover", function() {
        ukm10.style.gridColumn = "span 4 / span 4";
        ukm9.style.gridColumn = "span 2 / span 2";
        p10.style.visibility = "visible";
    });

    ukm10.addEventListener("mouseout", function() {
        ukm10.style.gridColumn = "span 3 / span 3";
        ukm9.style.gridColumn = "span 3 / span 3";
        p10.style.visibility = "hidden";
    });

    ukm11.addEventListener("mouseover", function() {
        ukm11.style.gridColumn = "span 4 / span 4";
        ukm12.style.gridColumn = "span 2 / span 2";
        p11.style.visibility = "visible";
    });

    ukm11.addEventListener("mouseout", function() {
        ukm11.style.gridColumn = "span 3 / span 3";
        ukm12.style.gridColumn = "span 3 / span 3";
        p11.style.visibility = "hidden";
    });

    ukm12.addEventListener("mouseover", function() {
        ukm12.style.gridColumn = "span 4 / span 4";
        ukm11.style.gridColumn = "span 2 / span 2";
        p12.style.visibility = "visible";
    });

    ukm12.addEventListener("mouseout", function() {
        ukm12.style.gridColumn = "span 3 / span 3";
        ukm11.style.gridColumn = "span 3 / span 3";
        p12.style.visibility = "hidden";
    });

    ukm13.addEventListener("mouseover", function() {
        ukm13.style.gridColumn = "span 4 / span 4";
        ukm14.style.gridColumn = "span 2 / span 2";
        p13.style.visibility = "visible";
    });

    ukm13.addEventListener("mouseout", function() {
        ukm13.style.gridColumn = "span 3 / span 3";
        ukm14.style.gridColumn = "span 3 / span 3";
        p13.style.visibility = "hidden";
    });

    ukm14.addEventListener("mouseover", function() {
        ukm14.style.gridColumn = "span 4 / span 4";
        ukm13.style.gridColumn = "span 2 / span 2";
        p14.style.visibility = "visible";
    });

    ukm14.addEventListener("mouseout", function() {
        ukm14.style.gridColumn = "span 3 / span 3";
        ukm13.style.gridColumn = "span 3 / span 3";
        p14.style.visibility = "hidden";
    });

    ukm15.addEventListener("mouseover", function() {
        ukm15.style.gridColumn = "span 4 / span 4";
        ukm16.style.gridColumn = "span 2 / span 2";
        p15.style.visibility = "visible";
    });

    ukm15.addEventListener("mouseout", function() {
        ukm15.style.gridColumn = "span 3 / span 3";
        ukm16.style.gridColumn = "span 3 / span 3";
        p15.style.visibility = "hidden";
    });

    ukm16.addEventListener("mouseover", function() {
        ukm16.style.gridColumn = "span 4 / span 4";
        ukm15.style.gridColumn = "span 2 / span 2";
        p16.style.visibility = "visible";
    });

    ukm16.addEventListener("mouseout", function() {
        ukm16.style.gridColumn = "span 3 / span 3";
        ukm15.style.gridColumn = "span 3 / span 3";
        p16.style.visibility = "hidden";
    });
    ukm17.addEventListener("mouseover", function() {
        ukm17.style.gridColumn = "span 4 / span 4";
        ukm18.style.gridColumn = "span 2 / span 2";
        p17.style.visibility = "visible";
    });

    ukm17.addEventListener("mouseout", function() {
        ukm17.style.gridColumn = "span 3 / span 3";
        ukm18.style.gridColumn = "span 3 / span 3";
        p17.style.visibility = "hidden";
    });

    ukm18.addEventListener("mouseover", function() {
        ukm18.style.gridColumn = "span 4 / span 4";
        ukm17.style.gridColumn = "span 2 / span 2";
        p18.style.visibility = "visible";
    });

    ukm18.addEventListener("mouseout", function() {
        ukm18.style.gridColumn = "span 3 / span 3";
        ukm17.style.gridColumn = "span 3 / span 3";
        p18.style.visibility = "hidden";
    });

    ukm19.addEventListener("mouseover", function() {
        ukm19.style.gridColumn = "span 4 / span 4";
        ukm20.style.gridColumn = "span 2 / span 2";
        p19.style.visibility = "visible";
    });

    ukm19.addEventListener("mouseout", function() {
        ukm19.style.gridColumn = "span 3 / span 3";
        ukm20.style.gridColumn = "span 3 / span 3";
        p19.style.visibility = "hidden";
    });

    ukm20.addEventListener("mouseover", function() {
        ukm20.style.gridColumn = "span 4 / span 4";
        ukm19.style.gridColumn = "span 2 / span 2";
        p20.style.visibility = "visible";
    });

    ukm20.addEventListener("mouseout", function() {
        ukm20.style.gridColumn = "span 3 / span 3";
        ukm19.style.gridColumn = "span 3 / span 3";
        p20.style.visibility = "hidden";
    });

    ukm21.addEventListener("mouseover", function() {
        ukm21.style.gridColumn = "span 4 / span 4";
        ukm22.style.gridColumn = "span 2 / span 2";
        p21.style.visibility = "visible";
    });

    ukm21.addEventListener("mouseout", function() {
        ukm21.style.gridColumn = "span 3 / span 3";
        ukm22.style.gridColumn = "span 3 / span 3";
        p21.style.visibility = "hidden";
    });

    ukm22.addEventListener("mouseover", function() {
        ukm22.style.gridColumn = "span 4 / span 4";
        ukm21.style.gridColumn = "span 2 / span 2";
        p22.style.visibility = "visible";
    });

    ukm22.addEventListener("mouseout", function() {
        ukm22.style.gridColumn = "span 3 / span 3";
        ukm21.style.gridColumn = "span 3 / span 3";
        p22.style.visibility = "hidden";
    });

    ukm23.addEventListener("mouseover", function() {
        ukm23.style.gridColumn = "span 4 / span 4";
        ukm24.style.gridColumn = "span 2 / span 2";
        p23.style.visibility = "visible";
    });

    ukm23.addEventListener("mouseout", function() {
        ukm23.style.gridColumn = "span 3 / span 3";
        ukm24.style.gridColumn = "span 3 / span 3";
        p23.style.visibility = "hidden";
    });

    ukm24.addEventListener("mouseover", function() {
        ukm24.style.gridColumn = "span 4 / span 4";
        ukm23.style.gridColumn = "span 2 / span 2";
        p24.style.visibility = "visible";
    });

    ukm24.addEventListener("mouseout", function() {
        ukm24.style.gridColumn = "span 3 / span 3";
        ukm23.style.gridColumn = "span 3 / span 3";
        p24.style.visibility = "hidden";
    });

    ukm25.addEventListener("mouseover", function() {
        ukm25.style.gridColumn = "span 4 / span 4";
        ukm26.style.gridColumn = "span 2 / span 2";
        p25.style.visibility = "visible";
    });

    ukm25.addEventListener("mouseout", function() {
        ukm25.style.gridColumn = "span 3 / span 3";
        ukm26.style.gridColumn = "span 3 / span 3";
        p25.style.visibility = "hidden";
    });

    ukm26.addEventListener("mouseover", function() {
        ukm26.style.gridColumn = "span 4 / span 4";
        ukm25.style.gridColumn = "span 2 / span 2";
        p26.style.visibility = "visible";
    });

    ukm26.addEventListener("mouseout", function() {
        ukm26.style.gridColumn = "span 3 / span 3";
        ukm25.style.gridColumn = "span 3 / span 3";
        p26.style.visibility = "hidden";
    });

    ukm27.addEventListener("mouseover", function() {
        ukm27.style.gridColumn = "span 4 / span 4";
        p27.style.visibility = "visible";
    });

    ukm27.addEventListener("mouseout", function() {
        ukm27.style.gridColumn = "span 3 / span 3";
        p27.style.visibility = "hidden";
    });
});