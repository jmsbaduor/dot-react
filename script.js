$(document).ready(function() {
    const grid = $("#grid");
    const dotSize = 16; // 8px dot + 8px gap
    const displacement = 32; // 2rem displacement
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const cols = Math.floor(screenWidth / dotSize);
    const rows = Math.floor(screenHeight / dotSize);
    let dotCounter = 0;

    // Generate the grid of dots
    for (let i = 0; i < rows * cols; i++) {
        grid.append('<div class="dot" id="dot' + dotCounter + '"></div>');
        dotCounter++;
    }

    // Mouse move interaction
    $(document).mousemove(function(event) {
        $(".dot").each(function() {
            const dot = $(this);
            const dotX = dot.offset().left + dot.width() / 2;
            const dotY = dot.offset().top + dot.height() / 2;
            const distance = Math.sqrt(Math.pow(event.pageX - dotX, 2) + Math.pow(event.pageY - dotY, 2));

            if (distance < displacement) {
                const angle = Math.atan2(dotY - event.pageY, dotX - event.pageX);
                const deltaX = Math.cos(angle) * displacement;
                const deltaY = Math.sin(angle) * displacement;
                dot.css('transform', `translate(${deltaX}px, ${deltaY}px)`);
            } else {
                dot.css('transform', 'translate(0, 0)');
            }
        });
    });
});
