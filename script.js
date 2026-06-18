const restaurants = [
  {
    id: 1,
    name: "Kacchi Bhai Dhanmondi",
    cuisine: "Biryani",
    city: "Dhaka",
    area: "Dhanmondi",
    rating: 4.8,
    reviews: 1240,
    distance: 0.6,
    price: 2,
    open: true,
    time: "25-35 min",
    tags: ["Kacchi", "Borhani", "Bangladeshi"],
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=700&q=82",
    pin: [26, 31]
  },
  {
    id: 2,
    name: "The Green Lounge",
    cuisine: "Asian",
    city: "Dhaka",
    area: "Dhanmondi",
    rating: 4.6,
    reviews: 862,
    distance: 1.1,
    price: 3,
    open: true,
    time: "20-30 min",
    tags: ["Thai", "Chinese", "Rooftop"],
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=82",
    pin: [67, 27]
  },
  {
    id: 3,
    name: "Madchef",
    cuisine: "Burgers",
    city: "Dhaka",
    area: "Dhanmondi",
    rating: 4.5,
    reviews: 2048,
    distance: 1.4,
    price: 2,
    open: true,
    time: "15-25 min",
    tags: ["Burgers", "Fries", "Fast food"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=82",
    pin: [76, 54]
  },
  {
    id: 4,
    name: "North End Coffee Roasters",
    cuisine: "Cafe",
    city: "Dhaka",
    area: "Banani",
    rating: 4.7,
    reviews: 1135,
    distance: 3.8,
    price: 2,
    open: true,
    time: "10-20 min",
    tags: ["Coffee", "Breakfast", "Dessert"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=82",
    pin: [40, 72]
  },
  {
    id: 5,
    name: "Sultan's Dine",
    cuisine: "Bangladeshi",
    city: "Dhaka",
    area: "Gulshan",
    rating: 4.4,
    reviews: 3210,
    distance: 4.6,
    price: 2,
    open: false,
    time: "30-40 min",
    tags: ["Kacchi", "Polao", "Family dining"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=82",
    pin: [23, 65]
  },
  {
    id: 6,
    name: "Bella Italia",
    cuisine: "Pizza",
    city: "Dhaka",
    area: "Gulshan",
    rating: 4.6,
    reviews: 689,
    distance: 4.2,
    price: 3,
    open: true,
    time: "25-35 min",
    tags: ["Pizza", "Pasta", "Italian"],
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=82",
    pin: [70, 77]
  },
  {
    id: 7,
    name: "Beauty Lacchi & Faluda",
    cuisine: "Dessert",
    city: "Dhaka",
    area: "Old Dhaka",
    rating: 4.5,
    reviews: 1544,
    distance: 5.4,
    price: 1,
    open: true,
    time: "15-20 min",
    tags: ["Faluda", "Lacchi", "Local favorite"],
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=82",
    pin: [48, 20]
  },
  {
    id: 8,
    name: "Handi Restaurant",
    cuisine: "Bangladeshi",
    city: "Chittagong",
    area: "GEC Circle",
    rating: 4.6,
    reviews: 2180,
    distance: 0.7,
    price: 2,
    open: true,
    time: "20-30 min",
    tags: ["Mezban", "Kacchi", "Family dining"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=82",
    pin: [58, 34]
  },
  {
    id: 9,
    name: "The Peninsula Restaurant",
    cuisine: "Asian",
    city: "Chittagong",
    area: "GEC Circle",
    rating: 4.7,
    reviews: 1460,
    distance: 0.9,
    price: 3,
    open: true,
    time: "25-35 min",
    tags: ["Buffet", "Asian", "Premium dining"],
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=82",
    pin: [71, 47]
  },
  {
    id: 10,
    name: "Barcode Cafe",
    cuisine: "Cafe",
    city: "Chittagong",
    area: "Khulshi",
    rating: 4.5,
    reviews: 1835,
    distance: 1.8,
    price: 2,
    open: true,
    time: "15-25 min",
    tags: ["Coffee", "Burgers", "Dessert"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=82",
    pin: [35, 27]
  },
  {
    id: 11,
    name: "Mezzan Haile Aiyun",
    cuisine: "Bangladeshi",
    city: "Chittagong",
    area: "Agrabad",
    rating: 4.8,
    reviews: 2670,
    distance: 2.6,
    price: 2,
    open: true,
    time: "20-30 min",
    tags: ["Mezban", "Kala Bhuna", "Chittagonian"],
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=700&q=82",
    pin: [24, 64]
  },
  {
    id: 12,
    name: "Ambrosia Restaurant",
    cuisine: "Asian",
    city: "Chittagong",
    area: "Nasirabad",
    rating: 4.6,
    reviews: 1210,
    distance: 3.1,
    price: 3,
    open: true,
    time: "25-35 min",
    tags: ["Thai", "Chinese", "Continental"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=82",
    pin: [76, 68]
  },
  {
    id: 13,
    name: "Patenga Sea View Kitchen",
    cuisine: "Bangladeshi",
    city: "Chittagong",
    area: "Patenga",
    rating: 4.4,
    reviews: 980,
    distance: 4.8,
    price: 2,
    open: true,
    time: "25-40 min",
    tags: ["Seafood", "Bangladeshi", "Sea view"],
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=700&q=82",
    pin: [45, 80]
  }
];

restaurants.push(
  {
    id: 14, name: "Silver Spoon", cuisine: "Asian", city: "Chittagong", area: "Agrabad",
    rating: 4.4, reviews: 1320, distance: 2.2, price: 2, open: true, time: "20-30 min",
    tags: ["Chinese", "Thai", "Family dining"], address: "Agrabad Commercial Area, Chattogram",
    description: "A familiar Agrabad restaurant for Chinese, Thai and family-style meals.",
    hours: "12:00 PM - 11:00 PM", service: "Dine-in, takeaway, family seating",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=82", pin: [16, 56]
  },
  {
    id: 15, name: "Shangri-La", cuisine: "Asian", city: "Chittagong", area: "Agrabad",
    rating: 4.3, reviews: 940, distance: 2.5, price: 2, open: true, time: "25-35 min",
    tags: ["Chinese", "Soup", "Noodles"], address: "39 Agrabad Commercial Area, Chattogram",
    description: "A classic Agrabad choice offering Chinese dishes, soups, noodles and sharing platters.",
    hours: "12:00 PM - 10:30 PM", service: "Dine-in and takeaway",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=82", pin: [29, 72]
  },
  {
    id: 16, name: "Karahi Restaurant", cuisine: "Bangladeshi", city: "Chittagong", area: "Agrabad",
    rating: 4.3, reviews: 860, distance: 2.8, price: 2, open: true, time: "25-35 min",
    tags: ["Indian", "Kebab", "Curry"], address: "69 Agrabad, Chattogram",
    description: "A casual restaurant serving curries, kebabs, naan and subcontinental favorites.",
    hours: "11:30 AM - 11:00 PM", service: "Dine-in and takeaway",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=82", pin: [20, 42]
  },
  {
    id: 17, name: "Hotel Agrabad Dining", cuisine: "Asian", city: "Chittagong", area: "Agrabad",
    rating: 4.5, reviews: 1180, distance: 2.4, price: 3, open: true, time: "25-40 min",
    tags: ["Buffet", "Continental", "Hotel dining"], address: "Sabder Ali Road, Agrabad C/A, Chattogram",
    description: "Hotel dining with buffet and international selections in the heart of Agrabad.",
    hours: "7:00 AM - 11:00 PM", service: "Dine-in, buffet, reservation",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=82", pin: [36, 61]
  },
  {
    id: 18, name: "Red Chilli", cuisine: "Bangladeshi", city: "Chittagong", area: "GEC Circle",
    rating: 4.4, reviews: 1540, distance: 1.1, price: 2, open: true, time: "20-30 min",
    tags: ["Kebab", "Curry", "Family dining"], address: "GEC Circle, Chattogram",
    description: "A lively family restaurant serving kebabs, curries and popular local dishes.",
    hours: "11:00 AM - 11:00 PM", service: "Dine-in, takeaway, family seating",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=82", pin: [64, 25]
  },
  {
    id: 19, name: "Well Food Centre", cuisine: "Dessert", city: "Chittagong", area: "GEC Circle",
    rating: 4.5, reviews: 2840, distance: 1.0, price: 1, open: true, time: "10-20 min",
    tags: ["Bakery", "Dessert", "Fast food"], address: "GEC Circle, Chattogram",
    description: "A popular bakery and quick-food stop for cakes, sweets, snacks and casual meals.",
    hours: "8:00 AM - 11:00 PM", service: "Dine-in, takeaway, bakery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=82", pin: [76, 37]
  },
  {
    id: 20, name: "Cafe 24", cuisine: "Cafe", city: "Chittagong", area: "Khulshi",
    rating: 4.4, reviews: 760, distance: 1.9, price: 2, open: true, time: "15-25 min",
    tags: ["Coffee", "Pasta", "Burgers"], address: "Khulshi, Chattogram",
    description: "A modern neighborhood cafe with coffee, pasta, burgers and light desserts.",
    hours: "10:00 AM - 11:00 PM", service: "Dine-in, takeaway, cafe",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=82", pin: [30, 16]
  },
  {
    id: 21, name: "Bir Chattala", cuisine: "Bangladeshi", city: "Chittagong", area: "Chawkbazar",
    rating: 4.5, reviews: 1690, distance: 2.1, price: 2, open: true, time: "20-30 min",
    tags: ["Mezban", "Kala Bhuna", "Local cuisine"], address: "Chawkbazar, Chattogram",
    description: "Traditional Chittagonian cooking with mezban, kala bhuna and hearty local plates.",
    hours: "11:00 AM - 10:30 PM", service: "Dine-in, takeaway, local cuisine",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=82", pin: [55, 58]
  },
  {
    id: 22, name: "Tava Restaurant", cuisine: "Asian", city: "Chittagong", area: "Jamal Khan",
    rating: 4.5, reviews: 1120, distance: 2.0, price: 2, open: true, time: "20-30 min",
    tags: ["Grill", "Chinese", "Continental"], address: "Jamal Khan Road, Chattogram",
    description: "A city-center restaurant for grills, Chinese dishes and continental meals.",
    hours: "12:00 PM - 11:00 PM", service: "Dine-in, takeaway, reservation",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=82", pin: [48, 40]
  },
  {
    id: 23, name: "Meridian Hotel Restaurant", cuisine: "Asian", city: "Chittagong", area: "Lalkhan Bazar",
    rating: 4.4, reviews: 890, distance: 1.5, price: 3, open: true, time: "25-35 min",
    tags: ["Chinese", "Continental", "Hotel dining"], address: "Lalkhan Bazar, Chattogram",
    description: "Hotel-style dining with Chinese, continental and Bangladeshi menu options.",
    hours: "7:00 AM - 11:00 PM", service: "Dine-in, reservation, hotel dining",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=82", pin: [42, 28]
  },
  {
    id: 24, name: "The Arrosto", cuisine: "Cafe", city: "Chittagong", area: "Panchlaish",
    rating: 4.6, reviews: 720, distance: 2.3, price: 2, open: true, time: "15-25 min",
    tags: ["Coffee", "Steak", "Pasta"], address: "Panchlaish, Chattogram",
    description: "A contemporary cafe and restaurant serving coffee, pasta, steak and desserts.",
    hours: "11:00 AM - 11:00 PM", service: "Dine-in, takeaway, cafe",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=82", pin: [68, 58]
  }
);

const chittagongDefaults = {
  8: ["GEC Circle, Chattogram", "A popular family restaurant for Bangladeshi meals, mezban dishes and group dining."],
  9: ["Bulbul Center, O.R. Nizam Road, Chattogram", "An upscale dining option serving buffet, Asian and continental selections."],
  10: ["Khulshi, Chattogram", "A casual cafe known for coffee, burgers, snacks and relaxed hangouts."],
  11: ["Agrabad Commercial Area, Chattogram", "A Chittagonian food destination focused on mezban beef and kala bhuna."],
  12: ["Nasirabad, Chattogram", "A dining spot with Thai, Chinese and continental food for families and groups."],
  13: ["Patenga Sea Beach Road, Chattogram", "A sea-view choice for seafood, local snacks and Bangladeshi meals."]
};

restaurants.forEach((restaurant) => {
  const defaults = chittagongDefaults[restaurant.id];
  restaurant.address ||= defaults?.[0] || `${restaurant.area}, ${restaurant.city}`;
  restaurant.description ||= defaults?.[1] || `Explore ${restaurant.tags.join(", ")} at ${restaurant.name}.`;
  restaurant.hours ||= "11:00 AM - 11:00 PM";
  restaurant.service ||= "Dine-in and takeaway";
  restaurant.phone ||= "Contact restaurant";
});

const state = {
  cuisine: "All",
  openOnly: false,
  highRated: false,
  savedOnly: false,
  saved: new Set(JSON.parse(localStorage.getItem("foodfinder-saved") || "[]"))
};

const $ = (selector) => document.querySelector(selector);
const elements = {
  search: $("#searchInput"),
  location: $("#locationInput"),
  sort: $("#sortInput"),
  price: $("#priceInput"),
  distance: $("#distanceInput"),
  list: $("#restaurantList"),
  pins: $("#mapPins"),
  count: $("#resultCount"),
  savedCount: $("#savedCount"),
  modal: $("#bookingModal"),
  detailsModal: $("#detailsModal")
};

function priceMarks(level) {
  return "৳".repeat(level);
}

function mapUrl(restaurant) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name}, ${restaurant.address}`)}`;
}

function filteredRestaurants() {
  const query = elements.search.value.trim().toLowerCase();
  const maxDistance = Number(elements.distance.value || Infinity);
  const selectedPrice = Number(elements.price.value || 0);
  const selectedLocation = elements.location.value;
  const selectedCity = selectedLocation.startsWith("city:") ? selectedLocation.slice(5) : "";

  const filtered = restaurants.filter((restaurant) => {
    const searchable = `${restaurant.name} ${restaurant.cuisine} ${restaurant.city} ${restaurant.area} ${restaurant.tags.join(" ")}`.toLowerCase();
    return (!query || searchable.includes(query))
      && (!selectedLocation || (selectedCity ? restaurant.city === selectedCity : restaurant.area === selectedLocation))
      && (state.cuisine === "All" || restaurant.cuisine === state.cuisine || restaurant.tags.includes(state.cuisine))
      && (!state.openOnly || restaurant.open)
      && (!state.highRated || restaurant.rating >= 4.5)
      && (!state.savedOnly || state.saved.has(restaurant.id))
      && (!selectedPrice || restaurant.price === selectedPrice)
      && restaurant.distance <= maxDistance;
  });

  return filtered.sort((a, b) => {
    if (elements.sort.value === "rating") return b.rating - a.rating;
    if (elements.sort.value === "distance") return a.distance - b.distance;
    if (elements.sort.value === "price") return a.price - b.price;
    return (b.rating * 2 - b.distance * 0.12) - (a.rating * 2 - a.distance * 0.12);
  });
}

function render() {
  const results = filteredRestaurants();
  const selectedLocation = elements.location.value;
  const place = selectedLocation.startsWith("city:") ? selectedLocation.slice(5) : selectedLocation || "your area";
  elements.count.textContent = `${results.length} ${results.length === 1 ? "place" : "places"} found near ${place}`;
  const isChittagong = place === "Chittagong" || results.some((restaurant) => restaurant.city === "Chittagong");
  $("#mapLabelOne").textContent = isChittagong ? "Chittagong City" : "Dhanmondi Lake";
  $("#mapLabelTwo").textContent = isChittagong ? "GEC Circle" : "Satmasjid Road";

  if (!results.length) {
    elements.list.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>No tasty matches yet</h3>
        <p>Try another cuisine, location or filter combination.</p>
        <button class="primary-button" type="button" data-reset>Reset filters</button>
      </div>`;
  } else {
    elements.list.innerHTML = results.map((restaurant) => `
      <article class="restaurant-card" data-card="${restaurant.id}">
        <div class="card-image-wrap">
          <img class="card-image" src="${restaurant.image}" alt="${restaurant.name} food" loading="lazy">
          <span class="open-badge">${restaurant.open ? "Open now" : "Opens at 5 PM"}</span>
        </div>
        <div class="restaurant-info">
          <div>
            <h3><button type="button" data-details="${restaurant.id}">${restaurant.name}</button></h3>
            <div class="restaurant-meta">
              <span class="rating"><i data-lucide="star"></i>${restaurant.rating} <small>(${restaurant.reviews.toLocaleString()})</small></span>
              <span class="dot">${restaurant.cuisine}</span>
              <span class="dot">${priceMarks(restaurant.price)}</span>
            </div>
            <div class="restaurant-meta">
              <span><i data-lucide="map-pin"></i> ${restaurant.distance} km</span>
              <span class="dot">${restaurant.area}</span>
              <span class="dot">${restaurant.time}</span>
            </div>
            <div class="dish-tags">${restaurant.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          </div>
          <div class="card-actions">
            <button class="save-button ${state.saved.has(restaurant.id) ? "saved" : ""}" type="button" data-save="${restaurant.id}" aria-label="Save ${restaurant.name}" title="Save restaurant">
              <i data-lucide="heart"></i>
            </button>
            <button class="details-button" type="button" data-details="${restaurant.id}">View details</button>
            <button class="book-button" type="button" data-book="${restaurant.id}">Book table</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  elements.pins.innerHTML = results.map((restaurant) => `
    <button class="map-pin" style="left:${restaurant.pin[0]}%;top:${restaurant.pin[1]}%" data-pin="${restaurant.id}" title="${restaurant.name}">
      <span>${restaurant.name}</span><small>${restaurant.area}</small>
    </button>
  `).join("");

  elements.savedCount.textContent = state.saved.size;
  localStorage.setItem("foodfinder-saved", JSON.stringify([...state.saved]));
  if (window.lucide) window.lucide.createIcons();
}

function resetFilters() {
  elements.search.value = "";
  elements.location.value = "";
  elements.price.value = "";
  elements.distance.value = "";
  elements.sort.value = "recommended";
  state.cuisine = "All";
  state.openOnly = false;
  state.highRated = false;
  state.savedOnly = false;
  document.querySelectorAll(".cuisine").forEach((button) => button.classList.toggle("active", button.dataset.cuisine === "All"));
  document.querySelectorAll(".filter-button").forEach((button) => button.classList.remove("active"));
  $(".saved-header").classList.remove("active");
  render();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

function focusRestaurant(id) {
  const restaurant = restaurants.find((item) => item.id === id);
  if (!restaurant) return;
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.toggle("active", Number(pin.dataset.pin) === id));
  $("#mapSelectionName").textContent = restaurant.name;
  $("#mapSelectionAddress").textContent = `${restaurant.address} - ${restaurant.cuisine} - ${restaurant.rating} rating`;
  $("#mapDetailsButton").disabled = false;
  $("#mapDetailsButton").dataset.details = restaurant.id;
  $("#mapDirectionsLink").href = mapUrl(restaurant);
  $("#mapDirectionsLink").setAttribute("aria-disabled", "false");
}

function showRestaurantOnMap(id) {
  focusRestaurant(id);
  $(".map-panel").scrollIntoView({ behavior: "smooth", block: "center" });
}

function openDetails(id) {
  const restaurant = restaurants.find((item) => item.id === id);
  if (!restaurant) return;
  $("#detailsImage").src = restaurant.image;
  $("#detailsImage").alt = `${restaurant.name} food and dining`;
  $("#detailsTitle").textContent = restaurant.name;
  $("#detailsAddress").innerHTML = `<i data-lucide="map-pin"></i> ${restaurant.address}`;
  $("#detailsStats").innerHTML = `
    <span><i data-lucide="star"></i> ${restaurant.rating} (${restaurant.reviews.toLocaleString()} reviews)</span>
    <span>${restaurant.cuisine}</span>
    <span>${priceMarks(restaurant.price)}</span>
    <span>${restaurant.open ? "Open now" : "Closed"}</span>`;
  $("#detailsDescription").textContent = restaurant.description;
  $("#detailsItems").textContent = restaurant.tags.join(", ");
  $("#detailsHours").textContent = restaurant.hours;
  $("#detailsService").textContent = restaurant.service;
  $("#detailsPhone").textContent = restaurant.phone;
  $("#detailsDirections").href = mapUrl(restaurant);
  $("#detailsBookButton").dataset.book = restaurant.id;
  elements.detailsModal.showModal();
  focusRestaurant(id);
  if (window.lucide) window.lucide.createIcons();
}

function openBooking(id) {
  const restaurant = restaurants.find((item) => item.id === id);
  $("#bookingTitle").textContent = restaurant.name;
  $("#bookingMeta").textContent = `${restaurant.area} · ${restaurant.cuisine} · ${priceMarks(restaurant.price)}`;
  $("#bookingMessage").textContent = "";
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  $("#bookingDate").min = tomorrow.toISOString().split("T")[0];
  $("#bookingDate").value = tomorrow.toISOString().split("T")[0];
  elements.modal.showModal();
}

$("#heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  $("#discover").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-quick]").forEach((button) => {
  button.addEventListener("click", () => {
    elements.search.value = button.dataset.quick;
    render();
    $("#discover").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".cuisine").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".cuisine").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.cuisine = button.dataset.cuisine;
    render();
    $("#discover").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    if (button.dataset.filter === "open") state.openOnly = button.classList.contains("active");
    if (button.dataset.filter === "rating") state.highRated = button.classList.contains("active");
    render();
  });
});

[elements.search, elements.location, elements.sort, elements.price, elements.distance].forEach((control) => {
  control.addEventListener(control === elements.search ? "input" : "change", render);
});

elements.list.addEventListener("click", (event) => {
  const save = event.target.closest("[data-save]");
  const book = event.target.closest("[data-book]");
  const details = event.target.closest("[data-details]");
  const reset = event.target.closest("[data-reset]");

  if (save) {
    const id = Number(save.dataset.save);
    if (state.saved.has(id)) {
      state.saved.delete(id);
      showToast("Removed from saved places");
    } else {
      state.saved.add(id);
      showToast("Saved for later");
    }
    render();
  }
  if (book) openBooking(Number(book.dataset.book));
  if (details) openDetails(Number(details.dataset.details));
  if (reset) resetFilters();
});

elements.pins.addEventListener("click", (event) => {
  const pin = event.target.closest("[data-pin]");
  if (pin) showRestaurantOnMap(Number(pin.dataset.pin));
});

$("#mapDetailsButton").addEventListener("click", (event) => {
  if (event.currentTarget.dataset.details) openDetails(Number(event.currentTarget.dataset.details));
});

$(".details-close").addEventListener("click", () => elements.detailsModal.close());

$("#detailsBookButton").addEventListener("click", (event) => {
  const id = Number(event.currentTarget.dataset.book);
  elements.detailsModal.close();
  openBooking(id);
});

$(".saved-header").addEventListener("click", () => {
  state.savedOnly = !state.savedOnly;
  $(".saved-header").classList.toggle("active", state.savedOnly);
  render();
  $("#discover").scrollIntoView({ behavior: "smooth" });
  if (state.savedOnly && !state.saved.size) showToast("Save a restaurant to see it here");
});

$("#clearFilters").addEventListener("click", resetFilters);

$("#locationButton").addEventListener("click", () => {
  elements.location.value = "city:Chittagong";
  $("#currentLocation").textContent = "Chittagong";
  render();
  showToast("Showing restaurants in Chittagong");
});

$("#mapLocate").addEventListener("click", () => {
  document.querySelector(".user-pin").animate(
    [{ transform: "translate(-50%, -50%) scale(.8)" }, { transform: "translate(-50%, -50%) scale(1.25)" }, { transform: "translate(-50%, -50%) scale(1)" }],
    { duration: 700 }
  );
  showToast("Showing restaurants near you");
});

$(".menu-button").addEventListener("click", (event) => {
  const nav = $(".main-nav");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});

$("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#guestName").value.trim();
  if (!name) return;
  $("#bookingMessage").textContent = `Thanks, ${name}. Your table request is confirmed!`;
  setTimeout(() => {
    elements.modal.close();
    showToast("Reservation added to your plans");
    event.currentTarget.reset();
  }, 1100);
});

$(".modal-close").addEventListener("click", () => elements.modal.close());

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  elements.location.value = "city:Chittagong";
  render();
});
