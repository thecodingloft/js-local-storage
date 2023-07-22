console.log('-- local storage --');

// --------- WORKING WITH STRINGS ---------
const theme = 'lightTheme';
localStorage.setItem('themeSelection', theme);

const lsTheme = localStorage.getItem('themeSelection');
console.log(lsTheme);

// --------- WORKING WITH OBJECTS ---------
const myItems = {
    event: 'add_to_wishlist',
    ecommerce: {
        currency: 'USD',
        value: 100,
        coupon: 'SOMMERSALE',
        items: [
            {item_name: 'fancy t-shirt',
            item_price: 50,
            },
            {item_name: 'really cool jacket',
            item_price: 50,
            }
        ]
    }
}
localStorage.setItem('myItems', JSON.stringify(myItems));

const myWishlistItems = JSON.parse(localStorage.getItem('myItems'));
console.log(myWishlistItems);

// --------- REMOVING ITEM ---------
localStorage.removeItem('myItems');

// --------- CLEARING LOCALSTORAGE ---------
localStorage.clear();

// --------- REAL-WORLD EXAMPLE ---------
const items = {
    event: 'add_to_wishlist',
    ecommerce: {
        currency: 'USD',
        value: 100,
        coupon: 'SOMMERSALE',
        items: [
            {item_name: 'fancy t-shirt',
            item_price: 50,
            },
            {item_name: 'really cool jacket',
            item_price: 50,
            }
        ]
    }
}

localStorage.setItem('wishlistItems', JSON.stringify(items));

if (document.location.pathname.indexOf('/wishlist') >= 0) {
    console.log('wishlist page');
    var clearBtn = document.querySelector('.clear-btn');
    addItems();
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('wishlistItems');
        addItems();
    })
}

function addItems() {
    var output = document.querySelector('.show-products');
    var lsItems = JSON.parse(localStorage.getItem('wishlistItems'));
    if (lsItems) {
        var items = lsItems.ecommerce.items;
        for (var i = 0; i < items.length; i++) {
            output.innerHTML += `
                <div class="item">
                    <h3>${items[i].item_name}</h3>
                    <p>${items[i].item_price} ${lsItems.ecommerce.currency}</p>
                </div>
            `
        }
    } else {
        output.innerHTML = 'no items here';
    }

}