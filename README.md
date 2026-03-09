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
* Other Inspiration included: Bootstrap, Bootstrap Icons, and Google Fonts.

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
Browse popular men's and women's clothing styles across brands without visiting numerous of different websites to find your style.

# User Story:
As someone constantly looking for new clothing styles, 
I want to browse and search items by category, 
so that I can easily compare options and discover items I like without visiting numerous websites.  

# Links:
[Click here for the link to repo](https://github.com/poppydalton/project-blush-basket-shop)

[Click here for the link to deployed app](https://poppydalton.github.io/project-blush-basket-shop/)

# Design:

<img width="2880" height="1468" alt="image" src="https://github.com/user-attachments/assets/855bafd6-4752-40a7-9b19-dc79b01f559a" />

The homepage navigation was inspired by the Hoka website, which separates browsing into Men's and Women's shopping categories to make it easier for users to navigate products. I adapted this idea by creating separate Men's and Women's pages in my application so users can browse clothing styles and search items without having to scroll through unrelated products.

# Model/Inspiration:
[Design inspiration picture (Hoka reference)](https://github.com/poppydalton/project-blush-basket-shop/issues/2)

I copied the simplicity of "Shop Women's" and "Shop Men's" while keeping the website name visible in the navigation bar.
I fixed the browsing experience by organizing clothing items into separate category pages, allowing users to focus on either men's or women's clothing without viewing items outside of their selected category.
I improved the user interface by adding a clear login and logout button to the top right and placing the session page inside the hamburger menu, allowing users to access and manage their session data if they choose to log in.

# Code Block:
This code shows how the website displays clothing items on the page.
This allows the page to update when the user searches or changes categories, without reloading the page. 
JavaScript reads the clothing data, creates product cards for each item, and inserts them into the page so the results update when a user searches or selects a category.

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
}
```

# Architecture/Infrastructure:
This application is a front-end web application built using:
* HTML
* CSS
* JavaScript
* JSON
* Bootstrap
* Bootstrap Icons
* Google Fonts

Product data is stored in a local JSON file and used by JavaScript to generate clothing cards displayed on the page.

Session data includes:
* Login Status
* Username
* Selected Category

# Verification:
The application was tested in:
* Google Chrome
* Safari
* Desktop Screen Sizes
* Mobile Screen Widths

No major issues were found during testing.





