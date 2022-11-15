# HTML-Assignments/Responsive Webpage Assignment:-

HTML FILE:-

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Webpage</title>
    <link rel="stylesheet" href="Styling2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="TabView.css">
    <link rel="stylesheet" href="MobileView.css">
</head>

<body>

    <!-- -------- Header Section --------- -->

    <div class="Header">
        <div class="Header-1">
            <div class="Header-1-Leftside">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="Header-1-Middle">
                <p>
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                </p>
            </div>
            <div class="Header-1-Rightside">
                <select name="currency">
                    <option value="usd">USD $</option>
                    <option value="inr">INR</option>
                </select>
                <select name="language">
                    <option value="eng">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
        </div>
        <div>
            <hr style="width: 100%; height: 0.5px; background-color: darkgray;">
        </div>
        <div class="Header-2">
            <div class="Header-2-leftside">
                <h1>AirCommerce</h1>
            </div>
            <div class="Header-2-middle">
                <input type="search" placeholder="Enter your product name..." class="searchbar">
                <i class="fa fa-search"></i>
            </div>
            <div class="Header-2-rightside">
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-heart">
                    <sup style="background-color: rgba(255, 0, 0, 0.534); color: white; font-size: small;">0</sup>
                </i>
                <i class="fa fa-shopping-bag">
                    <sup style="background-color: rgba(255, 0, 0, 0.534); color: white; font-size: small;">0</sup>
                </i>
            </div>
        </div>
        <div>
            <hr style="width: 100%; height: 0.5px; background-color: darkgray;">
        </div>

        <!-- --------Tab Bar Section------- -->

        <div class="tab-bar">
            <i class="fa fa-bars"></i>
            <i class="fa fa-shopping-bag">
                <sup style="background-color: rgba(255, 0, 0, 0.534); color: white; font-size: small;">0</sup>
            </i>
            <i class="fa fa-home"></i>
            <i class="fa-regular fa-heart">
                <sup style="background-color: rgba(255, 0, 0, 0.534); color: white; font-size: small;">0</sup>
            </i>
            <i class="fa fa-th-large" aria-hidden="true"></i>
        </div>
    </div>

    <!-- ----------Body Section---------- -->

    <div class="body">

        <div class="body-container-1">

            <div>HOME</div>
            <div>CATEGORIES</div>
            <div>MEN'S</div>
            <div>WOMEN'S</div>
            <div>JEWELRY</div>
            <div>PERFUME</div>
            <div>BLOG</div>
            <div>HOT OFFERS</div>
        </div>


        <div class="body-container-2-banner">

            <!-- <img src="banner-1.jpg"> -->

            <div class="banner1-text">
                <p style="color: rgba(255, 0, 0, 0.534);font-size: 2.5em; font-weight: bolder;">Trending Item</p>
                <p style="font-size: 4em; font-weight: bold;">WOMEN'S LATEST FASHION SALE</p>
                <p style="color: darkgray; margin-top: 10px; font-size: x-large;">starting at $ <span
                        style="font-size: xx-large; font-weight: bolder;">20</span>.00</p>
                <button
                    style="background-color: rgba(255, 0, 0, 0.534); color: white; border-radius: 5px; border: none;height: 30px; width:100px;">SHOP
                    NOW
                </button>
            </div>
        </div>


        <div class="body-container-3">

            <div class="body-container-3-items">
                <div class="item-1"><img src="dress.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">DRESS & FROCK</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(53)</p>
                </div>
            </div>

            <div class="body-container-3-items">
                <div class="item-1"><img src="jacket.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">WINTER WEAR</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(58)</p>
                </div>
            </div>

            <div class="body-container-3-items">
                <div class="item-1"><img src="glasses.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">GLASSES & LENS</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(68)</p>
                </div>
            </div>

            <div class="body-container-3-items">
                <div class="item-1"><img src="shorts.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">SHORTS & JEANS</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(84)</p>
                </div>
            </div>

            <div class="body-container-3-items">
                <div class="item-1"><img src="hat.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">HAT & CAPS</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(63)</p>
                </div>
            </div>

            <div class="body-container-3-items">
                <div class="item-1"><img src="bag.svg"></div>
                <div class="item-2">
                    <p style="font-size: large; font-weight: bolder;">BAGS</p>
                    <p style="color: rgba(255, 0, 0, 0.6); font-size: larger">Show All</p>
                </div>
                <div class="item-3">
                    <p style="font-size: small;">(73)</p>
                </div>
            </div>
        </div>


        <div class="body-container-4">

            <!-- --------------Sidebar--------------- -->

            <div class="body-container-4-sidebar">

                <div class="body-container-4-sidebar1">
                    <h2>CATEGORY</h2>
                    <div class="sidebar1-items">
                        <img src="dress.svg">
                        <p style="width: 180px;">Clothes</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="shoes.svg">
                        <p style="width: 180px;">Footwear</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="jewelry.svg">
                        <p style="width: 180px;">Jewelry</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="perfume.svg">
                        <p style="width: 180px;">Perfume</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="cosmetics.svg">
                        <p style="width: 180px;">Cosmetics</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="glasses.svg">
                        <p style="width: 180px;">Glasses</p>
                        <p style="width: 30px;">+</p>
                    </div>
                    <div class="sidebar1-items">
                        <img src="bag.svg">
                        <p style="width: 180px;">Bags</p>
                        <p style="width: 30px;">+</p>
                    </div>
                </div>


                <div class="body-container-4-sidebar2">
                    <h2>BEST SELLERS</h2>
                    <div>
                        <div class="sidebar2-items">
                            <img src="1.jpg">
                            <div>
                                <div>
                                    <p>Baby Fabric Shoes</p>
                                </div>
                                <div class="stars">
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                </div>
                                <div>
                                    <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                            style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="sidebar2-items">
                            <img src="2.jpg">
                            <div>
                                <div>
                                    <p>Baby Fabric Shoes</p>
                                </div>
                                <div class="stars">
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                </div>
                                <div>
                                    <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                            style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="sidebar2-items">
                            <img src="3.jpg">
                            <div>
                                <div>
                                    <p>Baby Fabric Shoes</p>
                                </div>
                                <div class="stars">
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                </div>
                                <div>
                                    <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                            style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="sidebar2-items">
                            <img src="4.jpg">
                            <div>
                                <div>
                                    <p>Baby Fabric Shoes</p>
                                </div>
                                <div class="stars">
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                    <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                </div>
                                <div>
                                    <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                            style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="body-container-4-main">

                <div class="body-container-4-main1">
                    <div>
                        <div>
                            <h2>New Arrivals</h2>
                        </div>
                        <div class="main1-item">
                            <img src="clothes-1.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="clothes-2.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="clothes-3.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="shirt-1.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Trending</h2>
                        </div>
                        <div class="main1-item">
                            <img src="sports-5.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="sports-2.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="party-wear-1.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="sports-3.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Top Rated</h2>
                        </div>
                        <div class="main1-item">
                            <img src="watch-3.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="jewellery-3.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="perfume.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                        <div class="main1-item">
                            <img src="belt.jpg">
                            <div class="main1-item-text">
                                <p style="font-weight: bolder; font-size: larger;">Relax Short Full Slee...</p>
                                <p style="color: rgb(145, 145, 145); font-size: large;">Clothes</p>
                                <p style="color: rgba(255, 0, 0, 0.6);">$45 <span
                                        style="color: rgb(145, 145, 145); text-decoration-line: line-through; font-size: smaller;">$12</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body-container-4-main2">
                    <h2>Deal Of The Day</h2>
                    <div class="main2-banner"><img src="shampoo.jpg">
                        <div class="main2-text">
                            <div>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <h3>SHAMPOO, CONDITIONER & FACEWASH PACKS</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nihil,
                                    voluptatem sequi facilis sint in atque,</p>
                                <p style="color: rgba(255, 0, 0, 0.6); font-size: large;">$150 <span
                                        style="text-decoration-line: line-through; font-size: large; color: rgb(145, 145, 145);">$200</span>
                                </p>
                                <button
                                    style="background-color: rgba(255, 0, 0, 0.534); color: white; border-radius: 10px; border: none;height: 40px; width:150px;font-size: larger;font-weight: bolder;margin-top: 10px;">ADD
                                    TO CART
                                </button>
                                <p style="font-size: large; color: rgb(145, 145, 145);margin-top: 10px;"> HURRY  UP
                                     OFFERS  ENDS  IN: </p>
                                <button
                                    style="width: 50px; height:50px;border-radius: 10px; font-weight: bold;margin-right: 15px;">360
                                    Days</button>
                                <button
                                    style="width: 50px; height:50px;border-radius: 10px; font-weight: bold;margin-right: 15px;">24
                                    Hours</button>
                                <button
                                    style="width: 50px; height:50px;border-radius: 10px; font-weight: bold;margin-right: 15px;">59
                                    Mins</button>
                                <button style="width: 50px; height:50px;border-radius: 10px; font-weight: bold;">00
                                    Sec</button>
                            </div>
                        </div>
                    </div>
                </div>
            

            <div class="body-container-4-main3">
                <h2>New Products</h2>
                <div class="main">
                    <div class="main-item">
                        <img src="jacket-1.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="jacket-5.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="jacket-6.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="clothes-3.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="shoe-2.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="watch-3.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="watch-1.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="party-wear-1.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="jacket-4.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="shoe-4.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="shoe-1.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="main-item">
                        <img src="shorts-1.jpg">
                        <div>
                            <div style="color: rgba(255, 0, 0, 0.534); font-weight: bolder;">JACKET</div>
                            <div>Lorem ipsum dolor</div>
                            <div class="star">
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                                <i class="fa fa-star" aria-hidden="true" style="color: rgb(250, 246, 10);"></i>
                            </div>
                            <div>
                                <p style="text-decoration-line: line-through; color: rgb(145, 145, 145);">$5.00<span
                                        style="font-weight: bold; color: black; margin-left: 15px;">$4.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="body-container-6">

        <div class="body-container-6-leftsidebar">
            <div>
                <h2 style="justify-items: center;">Testimonial</h2>
            </div>
            <div class="leftsidebar-box"">
                    <img src=" testimonial-1.jpg">
                <div>
                    <h2>ALAN DOE</h2>
                </div>
                <div>
                    <p>CEO & Founder Invision</p>
                </div>
                <div><i class="fa fa-quote-left" aria-hidden="true" style="font-size: xxx-large; color:rgba(255, 0, 0, 0.534);"></i></div>
                <div style="text-align:center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, neque voluptate accusamus pariatur commodi ab?
                </div>
            </div>
        </div>
        <div class="body-container-6-middle">
            <div><img src="cta-banner.jpg">
                <!-- <div class="container-6-middle-text">
                    <div><button>20% DISCOUNT</button></div>
                    <h2>Summer Collection</h2>
                    <p>Starting @ $10</p>
                    <p>SHOP NOW</p>
                </div> -->
            </div>
        </div>
        <div class="body-container-6-rightsidebar">
            <div>
                <h2>Our Services</h2>
            </div>
            <div class="rightsidebar-box">
                <div class="rightsidebar-item">
                    <div><i class="fa-solid fa-ship" style="color: rgba(255, 0, 0, 0.534); font-size: xx-large;"></i></div>
                    <div>
                        <h3>Worldwide Delivery</h3>
                        <p style="color: rgb(145, 145, 145); font-size:medium">For Order Over $100</p>
                    </div>
                </div>
                <div class="rightsidebar-item">
                    <div><i class="fa fa-rocket" aria-hidden="true" style="color: rgba(255, 0, 0, 0.534); font-size: xx-large;"></i></div>
                    <div>
                        <h3>Next Day Delivery</h3>
                        <p style="color: rgb(145, 145, 145); font-size:medium">UK Orders Only</p>
                    </div>
                </div>
                <div class="rightsidebar-item">
                    <div><i class="fa fa-phone" aria-hidden="true" style="color: rgba(255, 0, 0, 0.534); font-size: xx-large;"></i></div>
                    <div>
                        <h3>Best Online Support</h3>
                        <p style="color: rgb(145, 145, 145); font-size:medium">Hours: 8AM - 11PM</p>
                    </div>
                </div>
                <div class="rightsidebar-item">
                    <div><i class="fa fa-reply" aria-hidden="true" style="color: rgba(255, 0, 0, 0.534); font-size: xx-large;"></i></div>
                    <div>
                        <h3>Return Policy</h3>
                        <p style="color: rgb(145, 145, 145); font-size:medium">Easy & Free Return</p>
                    </div>
                </div>
                <div class="rightsidebar-item">
                    <div><i class="fa fa-ticket" aria-hidden="true" style="color: rgba(255, 0, 0, 0.534); font-size: xx-large;"></i></div>
                    <div>
                        <h3>30% Money Back</h3>
                        <p style="color: rgb(145, 145, 145); font-size:medium">For Order Over $100</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div class="body-container-7">

        <div>
            <div>
                <img src="blog-1.jpg">
                <div>
                    <p style="color: rgba(255, 0, 0, 0.6);">Fashion</p>
                    <h3>Clothes Retail KPIs 2021 Guide for Clothes Executives</h3>
                    <p>By Mr. Admin / Apr 06, 2022</p>
                </div>
            </div>
            <div>
                <img src="blog-2.jpg">
                <div>
                    <p style="color: rgba(255, 0, 0, 0.6);">Clothes</p>
                    <h3>Clothes Retail KPIs 2021 Guide for Clothes Executives</h3>
                    <p>By Mr. Admin / Apr 06, 2022</p>
                </div>
            </div>
            <div>
                <img src="blog-3.jpg">
                <div>
                    <p style="color: rgba(255, 0, 0, 0.6);">Shoes</p>
                    <h3>Clothes Retail KPIs 2021 Guide for Clothes Executives</h3>
                    <p>By Mr. Admin / Apr 06, 2022</p>
                </div>
            </div>
            <div>
                <img src="blog-4.jpg">
                <div>
                    <p style="color: rgba(255, 0, 0, 0.6);">Electronics</p>
                    <h3>Clothes Retail KPIs 2021 Guide for Clothes Executives</h3>
                    <p>By Mr. Admin / Apr 06, 2022</p>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div class="Footer">

        <div class="sub-footer1">
            <div style="color: rgba(255, 0, 0, 0.6); font-weight: bold; font-size: larger;">BRAND DIRECTORY</div>
            <p>FASHION: <span>T-Shirt | Shirt | Shorts & Jeans | Jacket | Dress & Frock | Innerwear | Hosiary</span></p>
            <p>FOOTWEAR: <span>Sports | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded</span></p>
            <p>JEWELLERY: <span>Neckless | Earring | Couple Ring | Pendals | Crystal | Bangles | Bracelet | Nosepin | Chain</span></p>
            <p>COSMETICS: <span>Shampoo | Bodywash | Facewash | Makeup Kit | Liner | Lipstick | Perfume | Body Soap | Scrub | Hair Gel | Hair Dye | Sunscrin | Skin Loson</span></p>
        </div>
        <hr>
        <div class="sub-footer2">
            <div class="sub-footer2-text">
                <h3>POPULAR CATEGORIES</h3>
                <p>Fashion</p>
                <p>Electronics</p>
                <p>Cosmetics</p>
                <p>Health</p>
                <p>Watches</p>
            </div>
            <div class="sub-footer2-text">
                <h3>PRODUCTS</h3>
                <p>Price Drops</p>
                <p>New Products</p>
                <p>Best Sales</p>
                <p>Contact Us</p>
                <p>Sitemap</p>
            </div>
            <div class="sub-footer2-text">
                <h3>OUR COMPANY</h3>
                <p>Delivery</p>
                <p>Legal Notice</p>
                <p>Terms And Condition</p>
                <p>About Us</p>
                <p>Secure Payment</p>
            </div>
            <div class="sub-footer2-text">
                <h3>SERVICES</h3>
                <p>Price Drops</p>
                <p>New Products</p>
                <p>Best Sales</p>
                <p>Contact Us</p>
                <p>Sitemap</p>
            </div>
            <div class="sub-footer2-text">
                <h3>CONTACT</h3>
                <div>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</p>
                </div>
                <div>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>(607)936-8058</p>
                </div>
                <div>
                    <i class="fa fa-envelope-square" aria-hidden="true"></i>
                    <p>Example@Gmail.Com</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="sub-footer3">
            <img src="payment.png">
            <p>Copyright AirCommerce All Right Reserve</p>
        </div>
    </div>
</body>

</html>


CSS FILE:-


*{
    margin: 0;
    padding: 0;
}
/* Header,body{
    margin: 0px 8%;
} */

.Header-1{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 8%;
    /* box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); */
}
.Header-1-Leftside i {
    width: 15px;
    height: 15px;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.12);
    padding: 3px;
    text-align: center;
    cursor: pointer;
}
.Header-1-Middle{
    font-size: 0.8rem;
}
.Header-1-Rightside select{
    border: none;
    background-color: transparent;
    margin-left: 10px;
}

.Header-2{
    display: flex;
    justify-content: space-between;
    padding: 1%;
    height: 5vh;
    margin: 0px 8%;
    /* box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); */
}
.Header-2-leftside{
    color: rgba(255, 0, 0, 0.534);
}
.searchbar{
    height: 90%;
    width: 100%;
    padding: 3px;
    border-radius: 10px;
    box-shadow: 0px 0.5px 3px rgba(128, 128, 128, 0.158);
    font-size: 15px;
}
.Header-2-middle{
    position: relative;
    width: 50vw;
    
}
.Header-2-middle i{
    position: absolute;
    right: 1.5%;
    top: 20%;
    font-size: 1.3em;
}
.Header-2-rightside i{
    padding-left: 10px; 
    font-size: 25px;
}

.tab-bar{
    position: fixed;
    bottom: 0;
    display: none;
    justify-content: space-around;
    width: 50%;
    left: 25%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.tab-bar i{
    padding: 5px;
    font-size: 2rem;
}
.body{
    margin: 0px 8%;
}
.body-container-1{
    display: flex;
    justify-content: space-around;
    width: 60vw;
    font-weight: bold;
    padding: 20px 200px;
    cursor: pointer;
}
.body-container-2-banner{
    background-image: url('banner-1.jpg');
    /* width: 100%; */
    height: 70vh;
    background-size: 100% 100%;
    border-radius: 15px;
    font-size: 15px;
}
.banner1-text{
    padding: 10% 10%;
    width: 35%;
    height: 60%;
}

.body-container-3{
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    width: 100%;
    height: 120px;
    margin-top: 35px;
}
.body-container-3-items{
    display: flex;
    min-width: 280px;
    height: 80px;
    border: 0.5px solid rgb(145, 145, 145);
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px 35px;
}
.item-1 img{
    width: 55px;
    height: 55px;
    border: 0.5px solid rgb(145, 145, 145);
    background-color: rgba(221, 218, 218, 0.863);
    border-radius: 5px;
}
.item-2{
    width: 180px;
    height: 60px;
    line-height: 30px;
}
.item-3{
    width: 30px;
    height: 40px;
    margin-bottom: 10px;
}
.body-container-4{
    display: flex;
    position: relative;
}
.body-container-4-sidebar{
    position: sticky;
    top: 0;
    height: 50%;
}
.body-container-4-sidebar1{
    border: 1px solid black;
    border-radius: 10px;
    min-width: 20%;
    max-height: 30%;
    margin-top: 30px;
    padding: 10px;
    /* position: sticky;
    top: 5px; */
}
.sidebar1-items{
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
}
.sidebar1-items img{
    width: 30px;
    height: 30px;
}
.sidebar1-items p{
    font-weight: bolder;
    font-size: large;
}
.body-container-4-sidebar2{
    border: 1px solid black;
    border-radius: 10px;
    min-width: 20%;
    max-height: 50%;
    margin-top: 40px;
    padding: 10px 10px;
}
.sidebar2-items{
    display: flex;
    margin: 15px 0px;
}
.sidebar2-items div{
    line-height: 30px;
    margin-left: 10px;
}
.sidebar2-items img{
    width: 100px;
    height: 100px;
}
.stars{
    display: flex;
}
.body-container-4-main1{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
}
.body-container-4-main1 h2{
    margin-bottom: 30px;
}
.body-container-4-main1 div{
    min-width: 200px;
    margin: 10px 0px;
}
.main1-item{
    display: flex;
    width: 300px;
    min-height: 70px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
}
.main1-item img{
    width: 100px;
    height: 80px;
}
.main1-item-text{
    line-height: 25px;
}
.body-container-4-main2{
    margin: 10px 30px;
    position: relative;
}
.main2-banner{
    border: 1px solid black;
    border-radius: 10px;
    margin: 25px 0px;
    padding: 5px;
}
.main2-text{
    width: 40%;
    height: 100%;
    line-height: 30px;
    position: absolute;
    top: 100px;
    right: 20px;
}
.main2-banner img{
    width: 50vw;
    height: 70vh;
}
.body-container-4-main3{
    margin: 20px 30px;
}
.main{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.main-item{
    border: 1px solid black;
    border-radius: 10px;
    width: 200px;
    height: 280px;
    padding: 5px 10px;
    margin: 20px 5px;  
}
.main-item div{
    margin: 5px 0px;
    margin-left: 20px;
}
.main-item img{
    width: 150px;
    height: 150px;
    margin-left: 20px;
}
.body-container-6{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.leftsidebar-box{
    border: 1px solid black;
    min-width: 20%;
    height: 80%;
    border-radius: 10px;
    margin: 20px 0px;
    text-align: center;
    line-height: 25px;
}
.rightsidebar-box{
    border: 1px solid black;
    /* min-width: 20%; */
    min-height: 50%;
    border-radius: 10px;
    padding: 10px 0px;
    margin: 20px 0px;
    text-align: center;
}
.rightsidebar-item{
    display: flex;
    justify-content: space-around;
    margin: 20px 20px;
}
.rightsidebar-item :nth-child(2){
    line-height: 25px;
}
.leftsidebar-box img{
    border-radius: 100px;
    width: 150px;
    margin: 10px 0px;
}
.body-container-6-leftsidebar{
    width: 20%;
}

.body-container-6-middle{
    width: 55%;
}
/* .body-container-6-middle-text{
    position: absolute;
    background-color: white;
    top: 0px;  
} */
.body-container-6-middle img{
    width: 100%;
    border-radius: 10px;
    position: relative;
    float: left;
}
.body-container-6-rightsidebar{
    min-width: 20%;
}
.body-container-7{
    margin-top: 50px;
}
.body-container-7 > div{
    display: flex;
    justify-content: space-between;
    /* margin: 0px 15px; */
}

.body-container-7 img{
    width: 320px;
    height: 200px;
    border-radius: 20px;
    margin: 15px 5px;
}

.Footer{
    background-color: black;
    opacity: 0.8;
    padding-top: 10px;
    height: 40%;
    margin-top: 50px;
}

.sub-footer1{
    width: 1500px;
    height: 15%;
    margin: 25px 150px;
    line-height: 50px;
}
.sub-footer1 p{
    color: white;
    word-spacing: 7px;
}
.sub-footer1 span{
    color: white;
    opacity: 0.5;
}
.sub-footer2{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 25px 150px;
}
.sub-footer2-text{
    width: 150px;
    line-height: 40px;
}
.sub-footer2-text h3{
    text-decoration: underline rgba(255, 0, 0, 0.534) 2px;
    text-underline-offset: 10px;
    color: white;
}
.sub-footer2-text p{
    color: white;
    opacity: 0.5;
}
.sub-footer2-text i{
    color: white;
    opacity: 0.5;
    font-size: x-large;
}
.sub-footer2-text div{
    display: flex;
    justify-content: space-between;
}
.sub-footer3{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sub-footer3 img{
    margin-top: 30px;
    margin-bottom: 10px;
}
.sub-footer3 p{
    color: white;
    opacity: 0.5;
    font-size: larger;
    word-spacing: 8px;
}
@media only screen and (max-width: 480px){
    .Header-1{
        margin: 0px 3%;
    }
    .Header-1-Leftside{
        display: none;
    }
    .Header-1-Rightside{
        display: none;
    }
    .tab-bar{
        display: flex;
        width: 100%;
        left: 0%;
    }
    .Header-2-rightside{
        display: none;
    }
    .Header-2{
        flex-direction: column;
        align-items: center;
        height: 10vh;
        margin: 0px 3%;
    }
    .body-container-1{
        display: none;
    }
    .body-container-2-banner{
        height: 50vh;
        margin-top: 20px;
        font-size: 1px;
    }
    .banner1-text{
        background-color: white;
        background: transparent;    
        width: 90%;
        height: 80%;
    }
    .body-container-4-sidebar1, .body-container-4-sidebar2{
        display: none;
    }
    .body-container-4-main1{
        flex-direction: column;
        max-width: 80px;
    }
    .main2-banner{
        width: 300px;
    }
    .main2-banner img{
        width: 250px;
        height: 300px;
    }
    .body-container-4-main2{
        height: 400px;
        margin: 5px;
    }
    .main2-text{
        display: none;
        width: 500px;
        height: 10px;  
    }
    .body-container-7{
        overflow: hidden;
    }
    .sub-footer1{
        width: 300px;
        margin: 5px 20px;
    }
    .sub-footer2{
        margin: 5px 20px;
        width: 250px;
    }
}

@media only screen and (max-width: 1200px){
    .Header-1{
        margin: 0px 3%;
    }
    .Header-1-Leftside{
        display: none;
    }
    .tab-bar{
        display: flex;
        background-color: white;
    }
    .Header-2{
        margin: 0px 3%;
    }
    .Header-2-rightside{
        display: none;
    }
    .body-container-1{
        display: none;
    }
    .body-container-2-banner{
        height: 40vh;
        margin-top: 20px;
        font-size: 10px;
    }
    .body-container-4-sidebar1, .body-container-4-sidebar2{
        display: none;
    }
    .body-container-4-main1{
        flex-wrap: wrap;
    }
    .main1-item{
        width: 280px;
    }
    .main2-text{
        width: 45%;
    }
    .body-container-6{
        flex-direction: column;
    }
    .body-container-6-middle{
        width: 100%;
    }
    .body-container-6-leftsidebar{
        width: 100%;
    }
    .rightsidebar-box{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .body-container-7 div :nth-child(3){
        display: none;
    }
    .body-container-7 div :nth-child(4){
        display: none;
    }
    .sub-footer1{
        width: 500px;
    }
}



SCREENSHOT:-

![Web capture_15-11-2022_112259_127 0 0 1](https://user-images.githubusercontent.com/114746088/201838001-f0a9a54f-4396-4c3c-b1c3-7ad008b84bc0.jpeg)


![Web capture_15-11-2022_11248_127 0 0 1](https://user-images.githubusercontent.com/114746088/201838097-d3e654d5-66da-4dae-881d-dcfbece7b3f1.jpeg)
