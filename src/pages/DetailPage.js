import { useState } from "react";

export default function ProductPage() {
    const [color, setColor] = useState("black");
    const [image, setimage] = useState("assets/4.png");
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-page">
            <div className=" py-lg-5 py-md-2">
                <div className="row main-container ">
                    <div className="top-border-bold">
                        <img src="assets/top-row.svg" />
                    </div>
                    <div className="left-border-bold">
                        <img src="assets/leftrow.svg" />
                    </div>
                    <div className="col-md-6 text-center ">
                        <div className="image-section">
                            <div className="big-image">
                                <img src={image} alt="Hoodie" className="img-fluid" />
                            </div>
                            <div className="images-section  gap-2 d-flex justify-content-center mt-3">
                                <div onClick={()=>{
                                    setimage("assets/1.png")
                                }}>
                                    <img src="assets/1.png" className="img-thumbnail mx-1" width="100" />
                                </div>
                                <div onClick={()=>{
                                    setimage("assets/2.png")
                                }}>
                                    <img src="assets/2.png" className="img-thumbnail mx-1" width="100" />
                                </div>
                                <div onClick={()=>{
                                    setimage("assets/3.png")
                                }}>
                                    <img src="assets/3.png" className="img-thumbnail mx-1" width="100" />
                                </div>

                            </div>
                            <div className="middle-border-bold">
                                <img src="assets/centerrow.svg" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="details-section">
                            <div className="topsecondrow">
                                <img src="assets/topsecondrow.svg" />
                            </div>
                            <div className="rightsecondrow">
                                <img src="assets/rightsecondrow.svg" />
                            </div>
                            <div className="text-start flex py-3">
                                <div className="product-title gap-2">
                                    <div className="title-left">
                                        <img src="assets/Titleleftboder.svg" />
                                    </div>
                                    <div>
                                        <h2>HOODIES TYPE 1</h2>
                                        <h2 className="zipper">ZIPPER</h2>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="red-bar"></div>
                                        <div className="cyan-bar"></div>
                                    </div>
                                </div>
                                <p className="fs-4 dis-price pt-2">Rs. 699
                                    <span className="price">
                                        Rs. 999.00</span></p>

                                <div className="title-right">
                                    <img src="assets/Title-right-boder.svg" />
                                </div>

                            </div>

                            <div className="d-flex gap-3 align-items-center">
                                <h5 className="title-text">COLOR:</h5>
                                <div className="d-flex gap-3 align-items-center">
                                    <label class="custom-checkbox">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="custom-checkbox">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex gap-3 align-items-center mt-3">
                                <h5 className="title-text">SIZE:</h5>
                                <div className="d-flex">
                                    <button className="btn size-btn activec mx-1">XS</button>
                                    <button className="btn size-btn mx-1">S</button>
                                    <button className="btn size-btn mx-1">M</button>
                                    <button className="btn size-btn mx-1">L</button>
                                    {/* <button className="btn size-btn mx-1">XL</button> */}
                                    <button className="btn size-btn mx-1">XXL</button>
                                </div>
                            </div>

                            <div className="d-flex gap-3 align-items-center mt-3">
                                <h5 className="title-text">QUANTITY:</h5>
                                <div class="quantity-box">
                                    <button class="quantity-btn" onClick={()=>{
                                        setQuantity((prev)=>{
                                            return prev -1
                                        })
                                    }}>-</button>
                                    <span>{quantity}</span>
                                    <button class="quantity-btn" onClick={()=>{
                                        setQuantity((prev)=>{
                                            return prev + 1
                                        })
                                    }}>+</button>
                                </div>
                            </div>

                            <div className="mt-4 btns-group">
                                <button className="custom-btn active">ADD TO CART</button>
                                <button className="custom-btn">BUY IT NOW</button>
                            </div>
                            <div className="bottomsecondrow">
                                <img src="assets/bottomsecondrow.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="right-border-bold">
                        <img src="assets/rightfirstrow.svg" />
                    </div>
                    <div className="bottom-border-bold">
                        <img src="assets/bottomrow.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
