 http# Volleyball Song Remixer
___

## Project Synopsis

Song remixer game using music by the band Volleyball. The user can choose from several songs and mute or hear a variety of instruments to create unique arrangements of the tracks.


[See the live site here!](https://timmorrisdev.github.io/MS2-song-remixer/)

___
## User Experience (UX)

### User Stories

- I want to easily understand the game and how to play.
- I want to remix different songs by bringing elements of the track in and out.
- The site should be visually appealing and well laid out, with different colour themes for each song.
- I should be able to customise my experience by turning music on or off.
- I want to be able to connect with the band featured on their social media and own website.

### Business Goals

- To allow fans the opportunity to create their own versions of the bands songs.
- To drive traffic to the band's social media and website to increase fan engagement.

### Design

- Colour Scheme

    So that thie site would fit with the band image, I used one of the band's social media posts of artwork for one of the songs featured to generate a palette using [Coolors](https://coolors.co/). I then used the 'generate' palette function to search for palettes that I felt fitted with the bands image, which is fairly colourful and phsycadelic.

    I also chose to find two contrasting palettes for each song to offer the user a 'light' or 'dark' theme option for each song.

    The palettes I chose were: [Landing / Contact](), [Aloosh 'Light'](), [Aloosh 'Dark'](), [Escape 'Light'](), [Escape 'Dark']().

- Fonts
    - Tourney / Montserrat.

        I used Tourney for any headers across the site as I felt the style fitted with the band image. I then used Montserrat for more detailed text across the site as it has good readability and a clean style. 

- Wireframes
    - [Landing Page]()

    - [How to play]()
    - [Contact Us]()
   

### Design Decisions Made During Development


### Future Development Opportunities
- Recording of arrangements

    In the furture I would like to develop a 'back-end' aspect to the site that might allow users to capture and subsequently share their unique mixes of the song via social media. This would have the goal of increasing game enjoyment for the user and also increase the effectiveness of the game as a promotional tool for the band.
___
## Features
- Responsive across all devices and screen sizes.
- Adaptive to modify content shown to be appropriate for user device or screen size.

___
## Technologies Used
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.javascript.com/)

### Frameworks, Libraries & Programs Used
- [HowlerJS](https://howlerjs.com/)
    - HowlerJS was used to intergrate audio on the site. It utilises mostly the web audio API with fall back to HMTL5 audio where compatibility is an issue. I chose to use audiosprites for each song as I kept my file management neater and helped assure simultainious playback for each element of the song arrangements.

- [Audioprite Generator](https://github.com/tonistiigi/audiosprite)

    - I installed audiosprite using the npm package in my mac terminal. I then used the terminal to generate a stereo audiosprite for each songn in both mp3 and webm formats so HowlerJS can select the best for any particular device / browser. I chose to use audiosprites for the composit parts of the songs rather than individuual files to help ensure the intended playback when certain browsers or devices force falling back to HTML5 audio for playback.

- [jQuery](https://jquery.com/)
    - I used jQuery in my Javascript code for the song remixer game. I mostly made use of event handlers to intergrate user interaction with the site with my Javascript functions controlling the features ofered to the user.
    - jQuery was also used as part of Bootstrap and is used for Javascript plugins such as the responsive nav bar and modals.

- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - Bootstrap was used for the responsive 'grid'. Code snippets from the Bootstrap documentation were used in various places and modified to suit the purpose and design of the site.
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the 'Montserrat', 'Lato' and 'Quicksand' fonts, which were used throughout the site.
- [Font Awesome](https://fontawesome.com/)
    - Used to source images for the transport section of the remixer.
- [Hover.css](https://ianlunn.github.io/Hover/)
    - 
- [Git](https://git-scm.com/)
    - Git was used for version control using the terminal in Gitpod to 'add' and 'commit' to Git and to push changes to the GitHub repository using 'git push'.

- [Gitpod](https://gitpod.io/)
    - Gitpod.io was used as the primary development environment when coding for the site. It's terminal was used to preview the site via temporary server, and for version control using Git commands.
- [Github](https://github.com/)
    - GitHub was used to store the code pushed from Gitpod and as deployment for the [published site.](https://timmorrisdev.github.io/south-coast-sup/)
- [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes for the site while in the 'skeleton' stage of my UX process.
- [Autoprefixer](http://autoprefixer.github.io/)
    - Autoprefixer was used in the final stage of development to parse CSS code and add vendor prefixes.

___
## Testing
### Responsiveness Testing
I used google dev tools throughout the development process to check responsiveness across different screen sizes. 

I was also sure to deploy the site to GitHub pages early in development to allow for review of the live site on various devicesthroughout the process.

### W3C Markup and CSS Validation
I used the W3C Markup and CSS Validator Services to check and validate each page throughout the site to check for errors. 
#### [Markup Validation Service](https://validator.w3.org/)

#### [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

### Lighthouse Testing

### Testing UX user stories

### Peer Code Review

### Cross-Browser/Device Testing
I tested the site across multiple devices using different browsers.
- Browsers tested
    - Chrome
    - Safari
    - Firefox

- Devices tested
    - Mac Pro w/ Dell 24 inch monitor
    - Macbook Pro 15 inch
    - iPhone 12
    - iPad air 2
___
## Deployment
### GitHub Pages
The project was deployed to GitHub pages using the following method. 
1. Log in to [GitHub.com](https://github.com/) and locate the south-coast-sup repository in my account.
2. Select the repo 'settings' menu and navigate to the 'pages' tab on the left hand side.
3. In the 'source' section, select the master branch as the source for the site deployment. 
4. Hit 'save' and wait a few mins for GitHub to process. The 'pages' settings tab will now show a message to confirm the repository is being published to the address https://timmorrisdev.github.io/south-coast-sup/.

### Forking the repository in GitHub
Forking the repository creates a copy of the original repository in your own account to allow changes to be made without affecting the original repository.
1. Log in to GitHub and navigate to the GitHub repository page.
2. In the top-right of the page, below the user avatar, locate the "fork" button.
3. Click the "fork" button and you should now have a copy of the repository in your own account. 

### Making a Local Clone
Details of how to make a local copy of the GutHub repository can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). To clone using HTTPS follow these steps.
1. Navigate to the GitHub repository.
2. Click the "Code" drop-down menu above the list of files.
3. Copy the HTTPS address to the clipboard using the button provided.
4. Open Terminal.
5. Change the current directory to the location you wish to copy the directory.
6. Type 'git clone' and then paste the HTTPS url you copied earlier. 
7. Press enter and your local clone will be created. 

___
## Credits
### Code


### Content
- All content written by the developer.

### Media


