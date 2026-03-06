document.addEventListener('DOMContentLoaded', function () {
    let blushBasketData = [];
    let currentCategory = '';

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const searchResults = document.getElementById('searchResults');
    const searchMessage = document.getElementById('searchMessage');
    const categoryButtons = document.querySelectorAll('.blush-category-button');

    loadProductData();
    attachEvents();

    function attachEvents() {
        if (searchButton) {
            searchButton.addEventListener('click', handleSearch);
        }

        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        if (resetButton) {
            resetButton.addEventListener('click', function () {
                if (searchInput) {
                    searchInput.value = '';
                }

                if (!currentCategory) {
                    if (searchResults) {
                        searchResults.innerHTML = '';
                    }
                    if (searchMessage) {
                        searchMessage.textContent = 'Pick a category to start searching.';
                    }
                    return;
                }

                renderSearchResults(getCurrentCategoryItems());

                if (searchMessage) {
                    searchMessage.textContent = `Showing all ${capitalizeWord(currentCategory)} items.`;
                }
            });
        }

        if (categoryButtons.length > 0) {
            categoryButtons.forEach(button => {
                button.addEventListener('click', function () {
                    currentCategory = button.dataset.category;
                    sessionStorage.setItem('currentCategory', currentCategory);

                    renderSearchResults(getCurrentCategoryItems());

                    if (searchMessage) {
                        searchMessage.textContent = `Showing all ${capitalizeWord(currentCategory)} items. Type to filter results.`;
                    }

                    updateSessionCategoryDisplay();
                });
            });
        }
    }

    function loadProductData() {
        fetch('../assets/data/clothing-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load clothing data');
                }
                return response.json();
            })
            .then(data => {
                blushBasketData = data.products;

                const pageCategory = document.body.dataset.categoryPage;

                if (pageCategory) {
                    currentCategory = pageCategory;
                    sessionStorage.setItem('currentCategory', currentCategory);
                    renderSearchResults(getCurrentCategoryItems());

                    if (searchMessage) {
                        searchMessage.textContent = `Showing all ${capitalizeWord(currentCategory)} items. Type to filter results.`;
                    }

                    updateSessionCategoryDisplay();
                } else {
                    const savedCategory = sessionStorage.getItem('currentCategory');

                    if (savedCategory) {
                        currentCategory = savedCategory;
                        renderSearchResults(getCurrentCategoryItems());

                        if (searchMessage) {
                            searchMessage.textContent = `Showing all ${capitalizeWord(currentCategory)} items. Type to filter results.`;
                        }
                    } else {
                        if (searchResults) {
                            searchResults.innerHTML = '';
                        }
                        if (searchMessage) {
                            searchMessage.textContent = 'Pick a category to start searching.';
                        }
                    }

                    updateSessionCategoryDisplay();
                }
            })
            .catch(error => {
                console.error(error);
                if (searchMessage) {
                    searchMessage.textContent = 'Unable to load clothing data.';
                }
            });
    }

    function getCurrentCategoryItems() {
        return blushBasketData.filter(item => item.category === currentCategory);
    }

    function handleSearch() {
        if (!currentCategory) {
            if (searchResults) {
                searchResults.innerHTML = '';
            }
            if (searchMessage) {
                searchMessage.textContent = 'Pick a category first.';
            }
            return;
        }

        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

        if (!query) {
            renderSearchResults(getCurrentCategoryItems());

            if (searchMessage) {
                searchMessage.textContent = `Showing all ${capitalizeWord(currentCategory)} items.`;
            }
            return;
        }

        const results = getCurrentCategoryItems().filter(item => {
            return Object.values(item).some(value =>
                String(value).toLowerCase().includes(query)
            );
        });

        renderSearchResults(results);

        if (searchMessage) {
            if (results.length > 0) {
                searchMessage.textContent = `Found ${results.length} result(s) for "${query}" in ${capitalizeWord(currentCategory)}.`;
            } else {
                searchMessage.textContent = `No results for "${query}" in ${capitalizeWord(currentCategory)}.`;
            }
        }
    }

    function renderSearchResults(items) {
        if (!searchResults) {
            return;
        }

        searchResults.innerHTML = '';

        if (items.length === 0) {
            searchResults.innerHTML = `
                <div class="col-12">
                    <div class="blush-product-card shadow-sm p-4 text-center">
                        <p class="mb-0">No items found.</p>
                    </div>
                </div>
            `;
            return;
        }

        items.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-lg-6 col-md-6 col-sm-12';

            col.innerHTML = `
                <div class="card blush-product-card shadow-sm h-100">
                    <div class="blush-product-image-wrap">
                        <img 
                            src="${product.image}" 
                            alt="${product.title}" 
                            class="blush-product-image"
                            onerror="this.style.display='none'"
                        >
                    </div>
                    <div class="card-body">
                        <div class="blush-card-tag">${capitalizeWord(product.category)}</div>
                        <h3 class="blush-card-title">${product.title}</h3>
                        <p class="blush-card-text">${product.description}</p>
                        <a href="${product.url}" target="_blank" class="btn blush-primary-action w-100">View Shirt</a>
                    </div>
                </div>
            `;

            searchResults.appendChild(col);
        });
    }

    function capitalizeWord(word) {
        if (!word) {
            return '';
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function updateSessionCategoryDisplay() {
        const categoryElements = document.querySelectorAll('#sessionCategoryValue');
        categoryElements.forEach(element => {
            element.textContent = currentCategory || sessionStorage.getItem('currentCategory') || 'none';
        });

        if (typeof updateSessionValuesOnPage === 'function') {
            updateSessionValuesOnPage();
        }
    }
}); 