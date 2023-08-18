document.addEventListener("DOMContentLoaded", function() {
    var loaderWrapper = document.querySelector(".loader-wrapper");
    var redirectLinks = document.querySelectorAll(".redirect-link");

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
    function handleRedirect(targetUrl) {
        fadeIn(loaderWrapper, 500, function() {
            window.location.href = targetUrl; // Redirect after the loader fades in
        });
    }

    // Attach click event listeners to specific URL .redirect-link elements
    redirectLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetUrl = this.getAttribute("href");
            if (!targetUrl.includes("#")) {
                handleRedirect(targetUrl);
            } else {
                // Handle internal anchor links without animations
                window.location.href = targetUrl;
            }
        });
    });

    // Handle the popstate event (back and forward navigation)
    window.addEventListener("popstate", function(event) {
        var targetUrl = window.location.href;
        if (!targetUrl.includes("#")) {
            handleRedirect(targetUrl);
        } else if (targetUrl.includes('/index.html')) {
            fadeOut(loaderWrapper, 500, function() {
                window.location.href = targetUrl;
            });
        }
    });

    // After the page and resources are loaded, fade out the loader
    window.addEventListener("load", function() {
        fadeOut(loaderWrapper, 500);
    });
});