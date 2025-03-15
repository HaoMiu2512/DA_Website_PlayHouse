const products = [
    {
      id: 1,
      name: "LABUBU Limited Edition Merlion Plush Series",
      price: 499000,
      originalPrice: 599000,
      image: "../assets/images/sanpham/labubu/sanpham-labubu-limit.jpg",
      badges: "Bán chạy",
      badgeColor: "#38c172", // green
      wishlist: true
    },
    {
      id: 2,
      name: "LABUBU × PRONOUNCE - WINGS OF FORTUNE",
      price: 350000,
      image: "../assets/images/sanpham/labubu/sanpham-labubu-1.jpg",
      badges: "Bán chạy",
      badgeColor: "#38c172", // green
      wishlist: true
    },
    {
      id: 3,
      name: "LABUBU - Good Luck To You",
      price: 1200000,
      originalPrice: 1500000,
      image: "../assets/images/sanpham/labubu/sanpham-labubu-2.jpg",
      badges: "Mới",
      badgeColor: "#3490dc", // blue
      wishlist: true
    },
    {
      id: 4,
      name: "Labubu Chinese New Year China",
      price: 790000,
      image: "../assets/images/sanpham/labubu/sanpham-labubu-3.jpg",
      badges: "Mới",
      badgeColor: "#3490dc", // blue
      wishlist: true
    },
    {
      id: 5,
      name: "Baby Three 12 Con Giáp Zodiac Chinese",
      price: 150000,
      image: "../assets/images/sanpham/babythree/sanpham-babythree-1.jpg",
      badges: "Giảm giá",
      badgeColor: "#e3342f", // red
      wishlist: true
    },
    {
      id: 6,
      name: "Baby Three Lucky Cat",
      price: 450000,
      originalPrice: 520000,
      image: "../assets/images/sanpham/babythree/sanpham-babythree-2.jpg",
      badges: "Giảm giá",
      badgeColor: "#e3342f",
      wishlist: true
    },
    {
      id: 7,
      name: "Mô hình OnePiece Luffy nika gear 5",
      price: 320000,
      image: "../assets/images/sanpham/mohinh/sanpham-mohinh-1.jpg",
      badges: "Giảm giá",
      badgeColor: "#e3342f", // red
      wishlist: true
    },
    {
      id: 8,
      name: "Mô hình Luffy Gear 5 Nika vs Kaido",
      price: 890000,
      originalPrice: 950000,
      image: "../assets/images/sanpham/mohinh/sanpham-mohinh-2.png",
      badges: "Giảm giá",
      badgeColor: "#e3342f",
      wishlist: true
    },
  ];

  // Hàm định dạng giá tiền
  function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
            .format(price)
            .replace('₫', 'đ');
  }

  // Hàm tạo toast thông báo
  function showToast(title, description) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<strong>${title}</strong><br>${description}`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Xử lý các hành động
  function handleAddToCart(productName) {
    showToast("Thêm vào giỏ hàng thành công", `${productName} đã được thêm vào giỏ hàng.`);
  }
  function handleAddToWishlist(productName, btnWishlist) {
    const product = products.find(p => p.name === productName);
    if (product) {
      product.wishlist = !product.wishlist;
      if (product.wishlist) {
        btnWishlist.classList.add('wishlist-active');
        btnWishlist.querySelector('.tooltip').textContent = 'Bỏ yêu thích';
        showToast("Đã thêm vào yêu thích", `${productName} đã được thêm vào danh sách yêu thích.`);
      } else {
        btnWishlist.classList.remove('wishlist-active');
        btnWishlist.querySelector('.tooltip').textContent = 'Yêu thích';
        showToast("Đã xóa khỏi yêu thích", `${productName} đã được xóa khỏi danh sách yêu thích.`);
      }
    }
  }

  // Hàm tạo mã HTML cho từng sản phẩm
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Container hình ảnh
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Badge nếu có
    if (product.badges) {
        const badges = document.createElement('span');
        badges.className = 'badges';
        badges.style.backgroundColor = product.badgeColor;
        badges.style.display = 'inline-block';
        // Tăng padding để chữ cách biên nhiều hơn và màu nền bao trọn badge
        badges.style.padding = '8px 16px';
        badges.style.fontSize = '0.8rem';
        badges.style.fontWeight = '600';
        badges.style.color = '#fff';
        badges.style.borderRadius = '9999px';
        badges.style.textTransform = 'uppercase';
        // Nếu cần, có thể thêm margin để cách biệt thêm so với các thành phần khác
        badges.style.margin = '0';
        badges.textContent = product.badges;
        imageContainer.appendChild(badges);
      }
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    imageContainer.appendChild(img);

    // Overlay buttons
    const overlay = document.createElement('div');
    overlay.className = 'overlay-buttons';

    // Button Add to Cart (Shopping Cart Icon)
    const btnCart = document.createElement('button');
    btnCart.setAttribute('aria-label', 'Add to cart');
    btnCart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.98-1.75l1.54-9.26H6"></path>
      </svg>`;
    btnCart.addEventListener('click', function(e) {
      e.stopPropagation();
      handleAddToCart(product.name);
    });
    overlay.appendChild(btnCart);

    // Button Add to Wishlist (Heart Icon)
    const btnWishlist = document.createElement('button');
    btnWishlist.setAttribute('aria-label', 'Add to wishlist');
    btnWishlist.className = product.wishlist ? 'wishlist-active' : '';
    btnWishlist.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      <span class="tooltip">${product.wishlist ? 'Bỏ yêu thích' : 'Yêu thích'}</span>`;
    btnWishlist.addEventListener('click', function(e) {
      e.stopPropagation();
      handleAddToWishlist(product.name, btnWishlist);
    });
    overlay.appendChild(btnWishlist);

    // Link Quick View (Eye Icon)
    const linkView = document.createElement('a');
    linkView.href = `/products/${product.id}`;
    linkView.setAttribute('aria-label', 'Quick view');
    linkView.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>`;
    overlay.appendChild(linkView);

    imageContainer.appendChild(overlay);
    card.appendChild(imageContainer);

    // Thông tin sản phẩm
    const info = document.createElement('div');
    info.className = 'product-info';

    const nameEl = document.createElement('h3');
    nameEl.textContent = product.name;
    info.appendChild(nameEl);

    const priceEl = document.createElement('div');
    priceEl.innerHTML = `<span class="price">${formatPrice(product.price)}</span>`;
    if(product.originalPrice) {
      priceEl.innerHTML += `<span class="original-price">${formatPrice(product.originalPrice)}</span>`;
    }
    info.appendChild(priceEl);

    card.appendChild(info);
    return card;
  }

  // Hiển thị danh sách sản phẩm
  function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = ''; // Clear existing products
    if (productsToDisplay.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'Bạn chưa thêm sản phẩm yêu thích';
      productsGrid.appendChild(message);
    } else {
      productsToDisplay.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
      });
    }
  }

  // Initial display of all products
  displayProducts(products);

  // Event listener for wishlist section
  document.getElementById('wishlistSection').addEventListener('click', function() {
    const wishlistProducts = products.filter(product => product.wishlist);
    displayProducts(wishlistProducts);
  });