const productPrice = 1500;

function updateTotalPrice() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = productPrice * quantity;
    document.querySelector('.total-price').textContent =` Total Price: Rs. ${totalPrice}`;
}

document.getElementById('quantity').addEventListener('input', updateTotalPrice);

document.getElementById('buyNowButton').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = productPrice * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${totalPrice}`);
});