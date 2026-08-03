const products = [
  {
    id: "premium-makhana",
    name: "Premium Makhana / Fox Nut",
    image: "Images/Premium_Makhana.jpeg",
    quantity: "200g",
    price: 350,
    discount: 20,
    discountedPrice: 280,
    category: "Makhana",
    filters: ["makhana", "healthy-snacks", "grocery"],
    description: "Light, crunchy premium makhana, also known as fox nut, for healthy snacking and grocery pantry stocking.",
    keywords: ["makhana", "fox nut", "fox nuts", "phool makhana", "healthy snacks", "grocery", "roasted snack"],
    alt: "Harvest Treats Premium Makhana fox nut healthy snack 200g pack"
  },
  {
    id: "americano-almond",
    name: "Americano Almond",
    image: "Images/Americano_Almonds.jpeg",
    quantity: "200g",
    price: 300,
    discount: 20,
    discountedPrice: 240,
    category: "Dry Fruits & Nuts",
    filters: ["dry-fruits-nuts", "healthy-snacks", "grocery"],
    description: "Americano almonds for dry fruit mixes, breakfast bowls, desserts and everyday nut snacking.",
    keywords: ["almond", "almonds", "americano almond", "dry fruit", "dry fruits", "nuts", "healthy snacks", "grocery"],
    alt: "Harvest Treats Americano Almond dry fruit nuts 200g pack"
  },
  {
    id: "cashew-nuts",
    name: "Cashew Nuts",
    image: "Images/Cashew_Nuts.jpeg",
    quantity: "200g",
    price: 300,
    discount: 20,
    discountedPrice: 240,
    category: "Dry Fruits & Nuts",
    filters: ["dry-fruits-nuts", "healthy-snacks", "grocery"],
    description: "Cashew nuts for sweets, dry fruit trays, cooking, gifting and daily healthy snack routines.",
    keywords: ["cashew", "cashews", "cashew nuts", "dry fruit", "dry fruits", "nuts", "grocery"],
    alt: "Harvest Treats Cashew Nuts dry fruit grocery 200g pack"
  },
  {
    id: "dry-dates",
    name: "Dry Dates",
    image: "Images/Dry_Dates.jpeg",
    quantity: "200g",
    price: 80,
    discount: 15,
    discountedPrice: 68,
    category: "Dry Fruits & Nuts",
    filters: ["dry-fruits-nuts", "healthy-snacks", "grocery"],
    description: "Dry dates for traditional recipes, dry fruit mixes, natural sweetness and pantry essentials.",
    keywords: ["dry dates", "dates", "dry fruit", "dry fruits", "khajur", "grocery", "healthy snacks"],
    alt: "Harvest Treats Dry Dates dry fruit 200g pack"
  },
  {
    id: "roasted-mix-seed",
    name: "Roasted Mix Seeds",
    image: "Images/Mix_Seeds_Roasted.jpeg",
    quantity: "200g",
    price: 200,
    discount: 20,
    discountedPrice: 160,
    category: "Seeds",
    filters: ["seeds", "healthy-snacks", "grocery"],
    description: "Roasted mixed seeds for a crunchy snack, salad topping or high-value grocery pantry addition.",
    keywords: ["mix seeds", "mixed seeds", "roasted seeds", "seeds", "healthy snacks", "grocery"],
    alt: "Harvest Treats Roasted Mix Seeds healthy seeds 200g pack"
  },
  {
    id: "pumpkin-seed",
    name: "Pumpkin Seeds",
    image: "Images/Pumpkin_Seeds.jpeg",
    quantity: "200g",
    price: 200,
    discount: 20,
    discountedPrice: 160,
    category: "Seeds",
    filters: ["seeds", "healthy-snacks", "grocery"],
    description: "Pumpkin seeds for breakfast bowls, baking, trail mixes, toppings and everyday healthy snacking.",
    keywords: ["pumpkin seed", "pumpkin seeds", "seeds", "healthy snacks", "grocery"],
    alt: "Harvest Treats Pumpkin Seeds healthy grocery 200g pack"
  },
  {
    id: "sunflower-seed",
    name: "Sunflower Seeds",
    image: "Images/Sunflower_Seeds.jpeg",
    quantity: "200g",
    price: 150,
    discount: 20,
    discountedPrice: 120,
    category: "Seeds",
    filters: ["seeds", "healthy-snacks", "grocery"],
    description: "Sunflower seeds for light snacking, smoothies, salads, toppings and grocery pantry use.",
    keywords: ["sunflower seed", "sunflower seeds", "seeds", "healthy snacks", "grocery"],
    alt: "Harvest Treats Sunflower Seeds healthy seeds 200g pack"
  },
  {
    id: "trail-mix",
    name: "Trail Mix",
    image: "Images/Trail_Mix.jpeg",
    quantity: "500g",
    price: 800,
    discount: 20,
    discountedPrice: 640,
    category: "Trail Mix",
    filters: ["trail-mix", "dry-fruits-nuts", "healthy-snacks", "grocery"],
    description: "Trail mix with dry fruits, nuts and seeds for travel, office snacking and active days.",
    keywords: ["trail mix", "dry fruit", "dry fruits", "nuts", "seeds", "healthy snacks", "grocery"],
    alt: "Harvest Treats Trail Mix dry fruits nuts seeds 500g pack"
  },
  {
    id: "pure-cow-ghee",
    name: "Pure Cow Ghee",
    image: "Images/Pure_Cow_Ghee.jpeg",
    quantity: "250g",
    price: 300,
    discount: 10,
    discountedPrice: 270,
    category: "Ghee",
    filters: ["ghee", "grocery"],
    description: "Pure cow ghee for cooking, sweets, traditional meals and everyday grocery pantry essentials.",
    keywords: ["pure cow ghee", "cow ghee", "ghee", "grocery", "cooking essentials", "pantry"],
    alt: "Harvest Treats Pure Cow Ghee grocery essential 250g pack"
  }
];

const state = {
  query: "",
  filter: "all",
  cart: []
};

const MAX_ITEM_QUANTITY = 10;
const CART_STORAGE_KEY = "harvest-treats-bag";

const productGrid = document.querySelector("#productGrid");
const resultSummary = document.querySelector("#resultSummary");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const filterButtons = Array.from(document.querySelectorAll(".filter"));
const clearFilters = document.querySelector("#clearFilters");
const noResults = document.querySelector("#noResults");
const resetFromEmpty = document.querySelector("#resetFromEmpty");
const cartPanel = document.querySelector("#cartPanel");
const cartButton = document.querySelector("#cartButton");
const closeCart = document.querySelector("#closeCart");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const copyOrder = document.querySelector("#copyOrder");

function restoreCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(savedCart)) return [];
    return savedCart.reduce((cart, item) => {
      if (!products.some((product) => product.id === item.id)) return cart;
      const quantity = Math.min(MAX_ITEM_QUANTITY, Math.max(1, Number(item.qty) || 1));
      cart.push({ id: item.id, qty: quantity });
      return cart;
    }, []);
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function productSearchText(product) {
  return normalize([
    product.name,
    product.category,
    product.quantity,
    product.description,
    ...product.filters,
    ...product.keywords
  ].join(" "));
}

function matchesProduct(product) {
  const query = normalize(state.query);
  const matchesQuery = !query || productSearchText(product).includes(query);
  const matchesFilter = state.filter === "all" || product.filters.includes(state.filter);
  return matchesQuery && matchesFilter;
}

function formatPrice(price) {
  return `Rs. ${price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function renderProduct(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;
  const bagQuantity = state.cart.find((item) => item.id === product.id)?.qty || 0;

  card.innerHTML = `
    <div class="product-media">
      <span class="discount-badge">${product.discount}% Off</span>
      <img src="${product.image}" alt="${product.alt}" loading="lazy" width="448" height="598">
    </div>
    <div class="product-body">
      <div>
        <p class="eyebrow">${product.category}</p>
        <h3>${product.name}</h3>
      </div>
      <p>${product.description}</p>
      <div class="product-meta">
        <span>${product.quantity}</span>
        <span>${product.category}</span>
        <span>Harvest Treats</span>
      </div>
      <div class="price-row">
        <div>
          <strong>${formatPrice(product.discountedPrice)}</strong>
          <span class="list-price">${formatPrice(product.price)}</span>
        </div>
        <span>${product.discount}% Off</span>
      </div>
      <div class="product-actions">
        ${bagQuantity ? `
          <div class="quantity-control product-quantity-control" aria-label="Quantity for ${product.name}">
            <button type="button" data-product-decrease="${product.id}" aria-label="Decrease quantity of ${product.name}">−</button>
            <span aria-live="polite">${bagQuantity}</span>
            <button type="button" data-product-increase="${product.id}" aria-label="Increase quantity of ${product.name}" ${bagQuantity >= MAX_ITEM_QUANTITY ? "disabled" : ""}>+</button>
          </div>
        ` : `<button type="button" data-add="${product.id}">Add to bag</button>`}
        <button class="go-to-bag" type="button" data-go-bag>Go to bag</button>
      </div>
    </div>
  `;

  return card;
}

function renderProducts() {
  const matches = products.filter(matchesProduct);
  productGrid.replaceChildren(...matches.map(renderProduct));

  noResults.hidden = matches.length > 0;
  const filterLabel = state.filter === "all"
    ? "All Categories"
    : filterButtons.find((button) => button.dataset.filter === state.filter)?.textContent || state.filter;
  const queryText = state.query ? ` for "${state.query}"` : "";
  resultSummary.textContent = matches.length
    ? `Showing ${matches.length} of ${products.length} Harvest Treats Products in ${filterLabel}${queryText}.`
    : `No Harvest Treats Products found in ${filterLabel}${queryText}.`;
}

function setFilter(filter) {
  state.filter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderProducts();
}

function resetSearch() {
  state.query = "";
  searchInput.value = "";
  setFilter("all");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const line = state.cart.find((item) => item.id === productId);
  if (line) {
    if (line.qty >= MAX_ITEM_QUANTITY) {
      setCartMessage(`A maximum of ${MAX_ITEM_QUANTITY} ${product.name} can be added to your bag.`);
      openCart();
      return;
    }
    line.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  setCartMessage("");
  saveCart();
  renderProducts();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  renderProducts();
  renderCart();
}

function updateCartQuantity(productId, change) {
  const line = state.cart.find((item) => item.id === productId);
  if (!line) return;

  if (change > 0 && line.qty >= MAX_ITEM_QUANTITY) {
    const product = products.find((item) => item.id === productId);
    setCartMessage(`A maximum of ${MAX_ITEM_QUANTITY} ${product.name} can be added to your bag.`);
    return;
  }

  line.qty += change;
  if (line.qty <= 0) removeFromCart(productId);
  else {
    setCartMessage("");
    saveCart();
    renderProducts();
    renderCart();
  }
}

function setCartMessage(message) {
  let notice = document.querySelector("#cartMessage");
  if (!notice) {
    notice = document.createElement("p");
    notice.id = "cartMessage";
    notice.className = "cart-message";
    notice.setAttribute("aria-live", "polite");
    cartItems.before(notice);
  }
  notice.textContent = message;
  notice.hidden = !message;
}

function renderCart() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const total = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.discountedPrice * item.qty : 0);
  }, 0);

  cartCount.textContent = String(totalQty);
  cartTotal.textContent = formatPrice(total);

  if (!state.cart.length) {
    cartItems.innerHTML = "<p>Your bag is waiting for something good.</p>";
    return;
  }

  cartItems.replaceChildren(...state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    const line = document.createElement("div");
    line.className = "cart-line";
    line.innerHTML = `
      <div>
        <p><strong>${product.name}</strong></p>
        <small>${product.quantity} x ${item.qty} - ${formatPrice(product.discountedPrice)} each after ${product.discount}% Off</small>
      </div>
      <div class="cart-line-actions">
        <div class="quantity-control" aria-label="Quantity for ${product.name}">
          <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity of ${product.name}">−</button>
          <span aria-live="polite">${item.qty}</span>
          <button type="button" data-increase="${product.id}" aria-label="Increase quantity of ${product.name}" ${item.qty >= MAX_ITEM_QUANTITY ? "disabled" : ""}>+</button>
        </div>
        <button type="button" data-remove="${product.id}">Remove</button>
      </div>
    `;
    return line;
  }));
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function orderText() {
  if (!state.cart.length) return "Harvest Treats Order List is empty.";
  const lines = state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `${item.qty} x ${product.name} (${product.quantity}) - ${formatPrice(product.discountedPrice)} each after ${product.discount}% Off; original price ${formatPrice(product.price)}`;
  });
  const total = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.discountedPrice * item.qty;
  }, 0);
  return `Harvest Treats Order List:\n${lines.join("\n")}\nEstimated Listed Total: ${formatPrice(total)}`;
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  renderProducts();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  renderProducts();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

clearFilters.addEventListener("click", resetSearch);
resetFromEmpty.addEventListener("click", resetSearch);

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
  const goToBagButton = event.target.closest("[data-go-bag]");
  if (goToBagButton) openCart();
  const increaseButton = event.target.closest("[data-product-increase]");
  if (increaseButton) updateCartQuantity(increaseButton.dataset.productIncrease, 1);
  const decreaseButton = event.target.closest("[data-product-decrease]");
  if (decreaseButton) updateCartQuantity(decreaseButton.dataset.productDecrease, -1);
});

cartItems.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");

  if (increaseButton) updateCartQuantity(increaseButton.dataset.increase, 1);
  if (decreaseButton) updateCartQuantity(decreaseButton.dataset.decrease, -1);
  if (removeButton) removeFromCart(removeButton.dataset.remove);
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);

copyOrder.addEventListener("click", async () => {
  if (!state.cart.length) {
    setCartMessage("Add something to your bag before placing an order.");
    return;
  }
  const message = `${orderText()}\n\nPlease confirm availability and delivery details.`;
  window.open(`https://wa.me/919123068708?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const initialSearch = new URLSearchParams(window.location.search).get("search");
if (initialSearch) {
  state.query = initialSearch;
  searchInput.value = initialSearch;
}

state.cart = restoreCart();
renderProducts();
renderCart();
