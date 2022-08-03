import React, { useRef, useState } from "react";
import {
  LightgalleryProvider,
  LightgalleryItem,
  useLightgallery,
} from "react-lightgallery";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import { useParams } from "react-router-dom";
import Topic from "../../../contents/Topic";
import { images } from "../../../../assets/img";
import "./styles.scss";
import Rate from "../../../layout/Rate";
import SelectEl from "../../../contents/SelectEl";

const GROUP2 = [];
for (const el in images.products.detail) {
  GROUP2.push(images.products.detail[el]);
}
const OpenButtonWithHook = ({ item }) => {
  const { openGallery } = useLightgallery();
  return (
    <span className="c-gallery" onClick={() => openGallery("group2", item)}>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
    </span>
  );
};

const DetailProduct = () => {
  const refOutSize = useRef("");
  const params = useParams();
  const data_pages = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: params.productId, link: "/" },
  ];
  const [itemZoom, setItemZoom] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    draggable: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: function (i) {
      return (
        <span key={i}>
          <img
            onClick={() => setItemZoom(i)}
            src={GROUP2[i]}
            alt={"item-" + i}
          />
        </span>
      );
    },
  };

  const handleZoom = (e, img) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    e.target.style.opacity = 0;
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    e.target.parentNode.style.backgroundPosition = `${x}% ${y}%`;
    e.target.parentNode.style.backgroundImage = `url(${img})`;
  };

  const handleZoomOut = (e) => {
    e.target.style.opacity = 1;
    e.target.parentNode.style.backgroundPosition = `none`;
    e.target.parentNode.style.backgroundImage = `none`;
  };

  return (
    <main className="p-detailProduct" ref={refOutSize}>
      <Topic data_pages={data_pages} />
      <div className="p-detailProduct__inner l-container">
        <div className="p-detailProduct__content">
          <div className="img-product">
            <LightgalleryProvider>
              <SliderSlick {...settings}>
                {1 &&
                  GROUP2.map((img, index) => (
                    <LightgalleryItem group="group2" key={index} src={img}>
                      <span className="img">
                        <img
                          onMouseMove={(e) => handleZoom(e, img)}
                          onMouseLeave={handleZoomOut}
                          src={img}
                          alt="img"
                        />
                      </span>
                    </LightgalleryItem>
                  ))}
              </SliderSlick>
              <OpenButtonWithHook item={itemZoom} />
            </LightgalleryProvider>
          </div>
          <div className="content-product">
            <h3 className="ttl">The Slouch Dress</h3>
            <div className="rate">
              <Rate />
              <span className="review">(1 customer review)</span>
            </div>
            <p className="des">
              The slick and designed Solar t-shirt by Zoli. features an
              intricate triangle print and tops stitched chest pocket in
              contrast colouring.
            </p>
            <span className="price">$28.00</span>
            <div className="form-item">
              <SelectEl name="size" data={["S", "M", "L", "XL", "XXL"]} />
              <SelectEl
                name="color"
                data={["White", "Green", "Blue", "Dress"]}
              />
            </div>
            <div className="form-item">
              {/* <input type="text" value={1} name="quality" /> */}
              <button className="add-cart">Add To Cart</button>
            </div>
            <div className="content-product__item">
              <p>
                <span>Categories:</span>Mens, Others, Uncategorized, Womens
              </p>
              <ul>
                <li>Free global shipping on all orders</li>
                <li>30 days easy returns if you change your mind</li>
                <li>Order before noon for same day dispatch</li>
              </ul>
            </div>
            <div className="content-product__item">
              <p className="ttl-1">Guaranteed Safe Checkout</p>
              <figure>
                <img src={images.common.payment} alt="Icon cart" />
              </figure>
            </div>
          </div>
        </div>
        <div className="p-detailProduct__end">
          <ul className="list-ttl">
            <li>Description</li>
            <li>Reviews (1)</li>
          </ul>
          <div className="content-popup">
            <h3>Sed do eiusmod tempor incididunt ut labore</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="content-popup">
            <div className="content-review">
              <div className="list-review">
                <div className="list-review__item">
                  <span className="avatar">
                    <img src={images.common.user} alt="User" />
                    <Rate />
                  </span>
                  <div className="infor">
                    <p className="mame">admin (verified owner)</p>
                    <p className="date">January 31, 2019</p>
                    <p className="content">
                      Congratulations!
                      <br /> Amazing Work, Good Luck With Sale
                    </p>
                  </div>
                </div>
                <div className="list-review__item">
                  <span className="avatar">
                    <img src={images.common.user} alt="User" />
                    <Rate />
                  </span>
                  <div className="infor">
                    <p className="mame">User 01 (verified owner)</p>
                    <p className="date">January 31, 2019</p>
                    <p className="content">
                      Congratulations!
                      <br /> Amazing Work, Good Luck With Sale
                    </p>
                  </div>
                </div>
                <div className="list-review__item">
                  <span className="avatar">
                    <img src={images.common.user} alt="User" />
                    <Rate />
                  </span>
                  <div className="infor">
                    <p className="mame">User 02 (verified owner)</p>
                    <p className="date">January 31, 2019</p>
                    <p className="content">
                      Congratulations!
                      <br /> Amazing Work, Good Luck With Sale
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment-review">
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="rate">
                  <p>Your rating *</p>
                  <Rate />
                </div>
                <div className="comment">
                  <label htmlFor="comment">Your review *</label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailProduct;
