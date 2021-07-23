function sendContact(contactForm) {
    emailjs.send("timMorrisDev", "SongRemixerContact", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "comment_content": contactForm.commentContent.value
        })

        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
};