$(document).ready(function() {
    $('img').each(function() {
        if (Math.random() < 0.05) {
            $(this).attr('src', 'https://pbs.twimg.com/profile_images/475692665540182016/BAmdIaM8.jpeg');
        }
    });
});