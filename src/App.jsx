import { useState, useRef, useEffect } from "react";
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
      width="14"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
          id="a"
        />
      </defs>
      <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
    </svg>
  );

  const navRef = useRef(null);
  const itemCounterRef = useRef(null);

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburgerMenu);
  const [mainImg, setMainImg] = useState(product1);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  let [itemCount, setItemCount] = useState(0);

  // useEffect(() => {
  //   console.log(price, discountPrice);
  // }, [price]);

  //UPDATING ITEM COUNTER
  useEffect(() => {
    const counter = itemCounterRef.current;
    if (itemCount === 0) {
      counter.classList.add("hidden");
    }

    if (itemCount > 0) {
      counter.classList.remove("hidden");
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
    console.log(navList);

    navList.classList.toggle("hideNav");
    navList.classList.toggle("showNav");
  };

  return (
    <div className="app">
      <header>
        <div className="menuContainer">
          <div className="menu md:hidden" onClick={toggleMenu}>
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
          <div className="cartIcon ">
            {iconCart}
            <span className="itemCounter hidden" ref={itemCounterRef}>
              {itemCount}
            </span>
          </div>
          <img src={avatar} alt="profile image" className="avatar" />
        </div>
      </header>

      <main className="mainContent">
        <section className="imgSection flex flex-col items-center">
          <img src={mainImg} alt="Main image" className="mainImg" />

          <div className="thumbNailContainer">
            <img
              src={thumbnail1}
              alt="image thumbnail"
              className="thumbnail"
              onClick={(e) => {
                setMainImg(product1);
                setPrice(250);
                setDiscountPrice(250 / 2);
              }}
            />
            <img
              src={thumbnail2}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product2);
                setPrice(500);
                setDiscountPrice(500 / 2);
              }}
            />
            <img
              src={thumbnail3}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product3);
                setPrice(750);
                setDiscountPrice(750 / 2);
              }}
            />
            <img
              src={thumbnail4}
              alt="image thumbnail"
              className="thumbnail"
              onClick={() => {
                setMainImg(product4);
                setPrice(1000);
                setDiscountPrice(1000 / 2);
              }}
            />
          </div>
        </section>

        <section className="textSection">
          <h3 className="text-orange-500 font-bold text-sm tracking-widest mb-5">
            SNEAKER COMPANY
          </h3>

          <h1 className="text-5xl capitalize font-bold mb-5">
            Fall limited edition sneakers
          </h1>

          <p className="text-sm w-auto lg:w-10/12">
            These low profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll everything the
            weather can offer.
          </p>

          <div className="pricingGrp">
            <div className="flex flex-row items-center gap-3">
              <p className="discountPrice">${discountPrice}</p>
              <p className="bg-orange-200 text-orange-500 font-bold px-2 py-1 text-xs rounded-lg">
                50%
              </p>
            </div>
            <p className="price">${price}</p>

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

                <p className=" font-semibold">{itemCount}</p>

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

              <button className="addToCartBtn">
                {iconCartWhite}
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
