# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I decided to challenge myself with this project after gaining sufficient JavaScript knowledge in tandem with my prior experience with HTML and CSS. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Light Mode version](./assets/images/Light%20Mode.png)
![Desktop Dark Mode version](./assets/images/Dark%20Mode.png)


### Links

- Solution URL: [Browser Extensions Manager GitHub](https://github.com/ibidiuntold/browser-extensions-manager-ui-main)
- Live Site URL: [Static Page Website for Browser Extensions](https://ibidiuntold.github.io/browser-extensions-manager-ui-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- ChatGPT
- Copilot helped a lot in generating some lines of code and suggesting optimal settings to write my code. 


### What I learned

- I learned how to call back functions in Javascript. 
- I also learned how to toggle between light theme mode and dark theme using pure CSS
- I learned how to properly nest ``` <div></div> ``` elements in my line of code so that the proper styling can be done

I am particularly proud of how this code right here below turned out:

```html
  <div class="button-toggle-style">
          <button class="remove-btn">Remove</button>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
```
```css
/* Toggle Switch Styles */
.button-toggle-style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
```

### Continued development

I still don't know how to properly write JavaScript code so I will have to work on getting down the functionality of writing syntax in JS down. 


### Useful resources

- [W3 Schools](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me for my switch and toggle design. I really like how they break down concepts and I will be referring to their website pretty often. 
- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/) - This is another amazing site that provided a much needed documentation on various HTML, CSS and JavaScript concept. I figure it will be an helpful site for you. 

## Author

- Frontend Mentor - [@ibidiuntold](https://www.frontendmentor.io/profile/ibidiuntold)
- Twitter/X - [@Ibidi_Untold](https://x.com/Ibidi_Untold)
- LinkedIn - [@Iyango Williams](https://www.linkedin.com/in/iyango-williams-657504249/)

## Acknowledgments

A big shoutout to [Fortune Precious](https://githum.com/dpthenicest) who helped me figure out how to style the Switch Toggle. I was inspired by his explanation and was able to come up with a design philosophy. 
