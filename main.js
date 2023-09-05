const ITEMS = [
  {
    id: 1,
    name: 'Iphone 14 Pro max',
    Price: 100,
    image: 'images/iphone.jpg',
    qty: 1,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    Price: 150,
    image: 'images/samsung_galaxy.jpg',
    qty: 1,
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    Price: 160,
    image: 'images/google_pixel.jpg',
    qty: 1,
  },
  {
    id: 4,
    name: 'One Plus 11 5G',
    Price: 170,
    image: 'images/one_plus.jpg',
    qty: 1,
  },
]


const openBtn = document.getElementById('open_cart_btn')
const closeBtn = document.getElementById('close_btn')
const cart = document.getElementById('sidecart')
const backdrop = document.querySelector('.backdrop')
const itemsEl = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')

const cart_data = []


openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)


renderItems()
renderCartItems()

// Open Cart
function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
    backdrop.classList.add('show')
    }, 0)
}

// Close Cart
function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
        }, 500)
}

// add items to cart
function addItem(idx, itemId) {
  // find same items
  const foundedItem = cart_data.find(
    (item) => item.id.toString() === itemId.toString()
  )

  if (foundedItem) {
    // increace item qty
  } else {
  cart_data.push(ITEMS[idx])
  }
  updateCart()
  openCart()
}


// render items
function renderItems(){
  ITEMS.forEach((item, idx) => {
    const itemEl = document.createElement('div')
    itemEl.classList.add('item')
    itemEl.onclick = () => addItem(idx, item.id)
    itemEl.innerHTML = `
      <img src="${item.image}" alt=""/>
      <button>Pesan</button>
    `
    itemsEl.appendChild(itemEl)
  })
}

// display / render cart items
function renderCartItems() {
  // remove everything from cart
  cartItems.innerHTML = ''
  // add new data

  cart_data.forEach((item) => {
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart_item')
    cartItem.innerHTML = `
    <div class="remove_item">
    <span>&times;</span>
  </div>
  <div class="item_img">
    <img src="${item.image}" alt="">
  </div>
  <div class="item_details">
    <p>${item.name}</p>
    <strong>Rp. ${item.Price}</strong>
    <div class="qty">
      <span>-</span>
      <strong>${item.qty}</strong>
      <span>+</span>
    </div>
  </div>
    
    `

    cartItems.appendChild(cartItem)
  })
}

function updateCart() {
  // rerender cart items with updated data
  renderCartItems()
}





















