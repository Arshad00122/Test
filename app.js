document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        setTimeout(function() {
            // Blur and fade out the preloader
            document.getElementById('preloader').classList.add('hidden');
            
            // Show the main content after the preloader fades out
            setTimeout(function() {
                document.getElementById('main-content').style.display = 'block';
                // Remove preloader element from the DOM (optional)
                document.getElementById('preloader').remove();
            }, 500); // Match the duration of the CSS transition (1 second)
        }, 1000); // Stay for 2 seconds (2000 milliseconds)
    }
});