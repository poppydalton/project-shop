# BlushBasket
A web application for browsing and searching clothing styles across multiple brands in one place. 

# Authorship & Attribution:
Created by Poppy Dalton - Front-End Web Development

This project was built using HTML, CSS, JavaScript, and Bootstrap.
Development was guided by course examples and documentation resources.

# Inspiration:
* Parts of the JavaScript structure and session storage logic were inspired by the BearBot example project used in CIS 376 course.
* https://github.com/barrycumbie/bearbot
* ChatGPT was used as a development assistant for minor debugging and implementation questions.

# Bootstrap Components:
* https://getbootstrap.com/docs/5.2/components/card/#content-types
* https://getbootstrap.com/docs/5.2/utilities/shadows/ 
* https://getbootstrap.com/docs/5.2/components/toasts/ 
* https://getbootstrap.com/docs/5.2/components/buttons/ 
* https://getbootstrap.com/docs/5.2/layout/grid/

# Icons:
* https://icons.getbootstrap.com/icons/list/
* https://icons.getbootstrap.com/icons/github/
* https://icons.getbootstrap.com/icons/flower3/ 

# Font:
* https://fonts.google.com/selection/embed

# Tagline:
Browse popular men and women clothing styles across brands without visiting dozen of different websites.

# User Story:
As someone constantly looking for new clothing styles, 
I want to browse and search items by category, 
so that I can easily compare options and discover items I like without visitng numerous websites.  

# Links:

Design Inspiration:
ADD IN INSPIRATION PAGE and create issue for it

# Model/Inspiration:
https://github.com/poppydalton/project-shop/issues/1 

# Code Block:
This code shows how the website displays clothing items on the page.
This allows the page to update when the user searches or changes categories, without reloading the page. 

```
function renderSearchResults(items) {
    searchResults.innerHTML = '';

    items.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-6 col-md-6 col-sm-12';

        col.innerHTML = `
            <div class="card blush-product-card shadow-sm h-100">
                <h3 class="blush-card-title">${product.title}</h3>
                <p class="blush-card-text">${product.description}</p>
            </div>
        `;

        searchResults.appendChild(col);
    });
```

# Architecture/Infrastructure:
This application is a front-end web application built using:
* HTML
* CSS
* JavaScript
* Bootstrap
* Bootstrap Icons
* Google Fonts

Session data includes:
* Login Status
* Username
* Selected Category

# Verification:
The application was tested in:
* Google Chrome
* Desktop Screen Sizes
* Mobile Screen Widths

No major issues were found during testing.





