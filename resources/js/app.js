import axios from 'axios'
import Noty from 'noty'


let cartCounter = document.querySelector('#cartCounter')


function updateCart(ItemAdd) {
    // using production library axios
    axios.post('/update-cart', ItemAdd).then(res => {
        console.log(res);
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            progressBar: false,
            text: "Item Added to cart"
        }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            progressBar: false,
            text: "Something went wrong"
        }).show();

    })
}



document.addEventListener('DOMContentLoaded', () => {
    const addtoCart = document.querySelectorAll('.dish-add-btn');
    addtoCart.forEach((button) => {
        button.addEventListener('click', () => {
            const itemData = button.dataset.item;
            // console.log("itemData:", itemData); // Check if 'itemData' is being set correctly
            try {
                const ItemAdd = JSON.parse(itemData);
                updateCart(ItemAdd);
                // console.log("ItemAdd:", ItemAdd); // Check if 'ItemAdd' contains the parsed object
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        });
    });
});

