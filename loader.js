document.addEventListener("DOMContentLoaded", function() {
    var loaderWrapper = document.querySelector(".loader-wrapper");

    // Fade in the loader
    function fadeIn(element, duration, callback) {
        element.style.opacity = 0;
        element.style.display = "flex";

        var startTime = performance.now();

        function animate(currentTime) {
            var elapsedTime = currentTime - startTime;
            element.style.opacity = Math.min(1, elapsedTime / duration);

            if (elapsedTime < duration) {
                requestAnimationFrame(animate);
            } else {
                if (callback) {
                    callback();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    // Fade out the loader
    function fadeOut(element, duration) {
        var startTime = performance.now();

        function animate(currentTime) {
            var elapsedTime = currentTime - startTime;
            element.style.opacity = Math.max(0, 1 - elapsedTime / duration);

            if (elapsedTime < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = "none";
            }
        }

        requestAnimationFrame(animate);
    }

    // Function to handle redirection with animations
    function handleRedirect(event) {
        event.preventDefault();

        var targetUrl = this.getAttribute("href");

        fadeIn(loaderWrapper, 500, function() {
            setTimeout(function() {
                window.location.href = targetUrl; // Redirect after a delay
            }, 1500); // Delay in milliseconds (1.5 seconds)
        });
    }

    // Attach click event listeners to all .redirect-link elements
    var redirectLinks = document.querySelectorAll(".redirect-link");
    redirectLinks.forEach(function(link) {
        link.addEventListener("click", handleRedirect);
    });

    // After the page and resources are loaded, fade out the loader
    window.addEventListener("load", function() {
        fadeOut(loaderWrapper, 500);
    });
});