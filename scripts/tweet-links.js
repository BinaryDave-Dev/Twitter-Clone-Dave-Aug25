// Make tweet containers clickable while preserving nested links
document.addEventListener('DOMContentLoaded', function() {
    const clickableTweets = document.querySelectorAll('.tweet-clickable');
    
    clickableTweets.forEach(tweet => {
        tweet.addEventListener('click', function(e) {
            // Don't navigate if clicking on nested links or interactive elements
            if (e.target.tagName === 'A' || 
                e.target.closest('a') ||
                e.target.closest('.tweet-menu-wrapper') ||
                e.target.closest('.tweet-actions') ||
                e.target.closest('.tweet-bookmark-icon') ||
                e.target.closest('.tweet-share-icon') ||
                e.target.closest('.quoted-tweet-link')) {
                return;
            }
            
            // Navigate to the tweet URL
            const href = tweet.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
});

