import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "./assets/image-avatar.png";
import product1 from "./assets/image-product-1.jpg";
import product2 from "./assets/image-product-2.jpg";
import product3 from "./assets/image-product-3.jpg";
import product4 from "./assets/image-product-4.jpg";
import thumbnail1 from "./assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "./assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "./assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "./assets/image-product-4-thumbnail.jpg";

function App() {
  //SVG'S
  const hamburgerMenu = (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fill-rule="evenodd"
      />
    </svg>
  );
  const closeMenu = (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#69707D"
        fill-rule="evenodd"
      />
    </svg>
  );
  const iconCart = (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="#69707D"
        fill-rule="nonzero"
      />
    </svg>
  );
  const iconCartWhite = (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="#FFF"
        fill-rule="nonzero"
      />
    </svg>
  );
  const iconDelete = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="#69707D"
      viewBox="0 0 18 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
      />
    </svg>
  );
  const iconNext = (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
  const iconPrev = (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );

  const navRef = useRef(null);
  const itemCounterRef = useRef(null);
  const checkoutRef = useRef(null);
  const imgBtnRefs = [useRef(null), useRef(null)];
  const mainContentRef = useRef(null);

  const [currentProduct, setCurrentProduct] = useState("product-1");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const [menuImg, setMenuImg] = useState(hamburgerMenu);
  const [mainImg, setMainImg] = useState(product1);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  let [itemCount, setItemCount] = useState(0);
  let displayedProductNum = 1;

  useEffect(() => {
    //UPDATING ITEM COUNTER
    const counter = itemCounterRef.current;
    if (itemCount === 0) {
      counter.classList.add("hidden");
    }

    if (itemCount > 0) {
      counter.classList.remove("hidden");
    }

    //UPDATING THE DISPLAYED PRICES TO MATCH THE ITEM COUNT
    if (currentProduct === "product-1") {
      setPrice(250 * itemCount);
      setDiscountPrice((250 * itemCount) / 2);
    }
    if (currentProduct === "product-2") {
      setPrice(500 * itemCount);
      setDiscountPrice((500 * itemCount) / 2);
    }
    if (currentProduct === "product-3") {
      setPrice(750 * itemCount);
      setDiscountPrice((750 * itemCount) / 2);
    }
    if (currentProduct === "product-4") {
      setPrice(1000 * itemCount);
      setDiscountPrice((1000 * itemCount) / 2);
    }

    //UPDATING CART STATUS TO DISPLAY RELEVANT CONTENT
    if (itemCount > 0) {
      setIsCartEmpty(false);
    } else if (itemCount <= 0) {
      setIsCartEmpty(true);
    }
  }, [itemCount]);

  const toggleMenu = (e) => {
    if (!isMenuToggled) {
      setMenuImg(closeMenu);
      setIsMenuToggled(true);
    } else {
      setMenuImg(hamburgerMenu);
      setIsMenuToggled(false);
    }

    const navList = navRef.current;
    const prevBtn = imgBtnRefs[0].current;
    const nextBtn = imgBtnRefs[1].current;
    const mainBody = mainContentRef.current;

    navList.classList.toggle("hideNav");
    navList.classList.toggle("showNav");

    prevBtn.classList.toggle("opacity-0");
    nextBtn.classList.toggle("opacity-0");
  };

  const toggleCheckout = () => {
    const checkout = checkoutRef.current;
    checkout.classList.toggle("hideCheckOut");
    console.log(checkoutRef);
  };

  const handleNextBtn = () => {
    console.log("clicked");

    if (displayedProductNum > 0 && displayedProductNum < 5) {
      displayedProductNum++;
      console.log(displayedProductNum);
    }

    if (displayedProductNum === 1) {
      setMainImg(product1);
      setCurrentProduct("product-1");
    } else if (displayedProductNum === 2) {
      setMainImg(product2);
      setCurrentProduct("product-2");
    } else if (displayedProductNum === 3) {
      setMainImg(product3);
      setCurrentProduct("product-3");
    } else if (displayedProductNum === 4) {
      setMainImg(product4);
      setCurrentProduct("product-4");
    }
  };
  const handlePrevBtn = () => {
    console.log("clicked");

    if (displayedProductNum > 1 && displayedProductNum < 5) {
      displayedProductNum--;
      console.log(displayedProductNum);
    }

    if (displayedProductNum === 1) {
      setMainImg(product1);
      setCurrentProduct("product-1");
    } else if (displayedProductNum === 2) {
      setMainImg(product2);
      setCurrentProduct("product-2");
    } else if (displayedProductNum === 3) {
      setMainImg(product3);
      setCurrentProduct("product-3");
    } else if (displayedProductNum === 4) {
      setMainImg(product4);
      setCurrentProduct("product-4");
    }
  };

  return (
    <div className="app">
      <motion.header
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <div className="menuContainer">
          <div className="menu md:hidden " onClick={toggleMenu}>
            {menuImg}
          </div>
          <h2 className="text-3xl font-bold mb-2">sneakers</h2>
        </div>

        <nav className="hideNav" ref={navRef}>
          <ul className="navList">
            <li className="navText">Collections</li>
            <li className="navText">Men</li>
            <li className="navText">Women</li>
            <li className="navText">About</li>
            <li className="navText">Contact</li>
          </ul>
        </nav>

        <div className="cartGrp">
          <div className="cartIcon " onClick={toggleCheckout}>
            {iconCart}
            <span className="itemCounter hidden" ref={itemCounterRef}>
              {itemCount}
            </span>
          </div>
          <img src={avatar} alt="profile image" className="avatar" />
        </div>
      </motion.header>

      <div className="checkoutContainer hideCheckOut" ref={checkoutRef}>
        <h2 className="font-bold border-b border-slate-300 p-3">Cart</h2>

        <div className="cartDetailsContainer">
          {isCartEmpty && (
            <div className="mt-10 mx-auto font-bold text-center text-slate-500">
              Cart is empty
            </div>
          )}

          {!isCartEmpty && (
            <div className="mt-2 mx-auto ">
              <div className="checkoutDetailsContainer">
                <img
                  src={mainImg}
                  alt="product image"
                  className="checkoutImg"
                />

                <div className="text-slate-400 text-sm md:text-base">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    {discountPrice} x {itemCount}
                    <span className="text-black font-bold"> ${price}</span>
                  </p>
                </div>

                <div
                  className="deleteIcon"
                  onClick={() => {
                    setIsCartEmpty(true);
                    setItemCount(0);
                  }}
                >
                  {iconDelete}
                </div>
              </div>

              <button className="checkoutBtn">Checkout</button>
            </div>
          )}
        </div>
      </div>

      <main className="mainContent" ref={mainContentRef}>
        <motion.section
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="imgSection flex flex-col items-center"
        >
          <div className="mainImgContainer">
            <button
              className="mainImgBtn"
              id="prevBtn"
              ref={imgBtnRefs[0]}
              onClick={handlePrevBtn}
            >
              {iconPrev}
            </button>

            <img src={mainImg} alt="Main image" className="mainImg" />

            <button
              className="mainImgBtn"
              id="nextBtn"
              ref={imgBtnRefs[1]}
              onClick={handleNextBtn}
            >
              {iconNext}
            </button>
          </div>

          <div className="thumbNailContainer">
            <img
              src={thumbnail1}
              alt="image thumbnail"
              className="thumbnail"
              onClick={(e) => {
                setMainImg(product1);
                setCurrentProduct("product-1");
                setPrice(250);
                setDiscountPrice(250 / 2);
                setItemCount(0);
              }}
            />
            <img
              src={thumbnail2}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product2);
                setCurrentProduct("product-2");
                setPrice(500);
                setDiscountPrice(500 / 2);
                setItemCount(0);
              }}
            />
            <img
              src={thumbnail3}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product3);
                setCurrentProduct("product-3");
                setPrice(750);
                setDiscountPrice(750 / 2);
                setItemCount(0);
              }}
            />
            <img
              src={thumbnail4}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product4);
                setCurrentProduct("product-4");
                setPrice(1000);
                setDiscountPrice(1000 / 2);
                setItemCount(0);
              }}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="textSection"
        >
          <h3 className="text-orange-500 font-bold text-sm tracking-widest mb-5">
            SNEAKER COMPANY
          </h3>

          <h1 className="text-4xl md:text-5xl capitalize font-bold mb-5">
            Fall limited edition sneakers
          </h1>

          <p className="text-sm w-auto lg:w-10/12">
            These low profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll everything the
            weather can offer.
          </p>

          <div className="pricingGrp">
            <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start py-3 md:py-0">
              <div className="flex flex-row items-center gap-3">
                <p className="discountPrice">${discountPrice}</p>
                <p className="bg-orange-200 text-orange-500 font-bold px-2 py-1 text-xs rounded-lg">
                  50%
                </p>
              </div>
              <p className="price">${price}</p>
            </div>

            <div className="addToCartGrp">
              <div className="addRemoveGrp">
                <button
                  className="minusBtn"
                  onClick={() => {
                    // const counter = itemCounterRef.current;
                    // if (itemCount === 0) {
                    //   counter.classList.add("hidden");
                    // }

                    if (itemCount >= 0) {
                      itemCount--;
                    }
                    setItemCount(itemCount);
                  }}
                >
                  -
                </button>

                <p className="font-bold md:font-semibold">{itemCount}</p>

                <button
                  className="addBtn"
                  onClick={() => {
                    const counter = itemCounterRef.current;
                    // if (itemCount >= 0) {
                    //   counter.classList.remove("hidden");
                    // }

                    itemCount++;
                    setItemCount(itemCount);
                  }}
                >
                  +
                </button>
              </div>

              <button
                className="addToCartBtn"
                onClick={() => {
                  const checkout = checkoutRef.current;
                  checkout.classList.remove("hideCheckOut");
                }}
              >
                {iconCartWhite}
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
