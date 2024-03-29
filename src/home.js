const callHome = () => {
    let homeHTML = `
    <header>
    <div class="header">
        <div class="logo">
            <p>Fettan </p>
            <img src="assets/logo.png" alt="logo">
            <p>Coffee®</p>
        </div>
        <div class="nav">
            <ul>
                <li><a class="active" href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
<main>
    <div class="main">
        <h2>
            THE <span class="secondary-color">FETTAN COFFEE®</span> DIFFERENCE IS REAL
        </h2>
        <p class="space">
            <span class="secondary-color">Fettan Coffee®</span> is proud to offer premium beverage and food options that are thoughtfully crafted with guest, community, and environment top of mind.
        </p>
        <h3>
            Savor the taste of freshly roasted beans and handcrafted drinks
        </h3>
        <p>
            Welcome to our cozy coffee shop, where we brew delicious, handcrafted drinks using only the finest, locally sourced ingredients. Our baristas are trained to expertly craft each drink with care and precision, ensuring a perfect cup every time.
        </p>
        <h3>
            Relax, unwind, and connect with friends over a delicious cup of coffee
        </h3>
        <p class="space">
            Our menu features a variety of classic and specialty drinks, including our signature lattes, cappuccinos, and mochas. We also offer a selection of teas, hot cocoa, and seasonal beverages.
        </p>
        <h1 class="space">
            The perfect blend of comfort and quality
        </h1>
        <p>
            We source our beans from the finest regions around the world, including South America, Central America, and Africa, to bring you the best cup of coffee possible. Click regions for details.
        </p>
        <div class="region space">
            <div><button><img src="assets/asya.png" alt="asya">Asia</button></div>
            <div><button><img src="assets/afrika.png" alt="afrika">Africa</button></div>
            <div><button><img src="assets/amerika.png" alt="amerika">Caribbean & America</button></div>
        </div>
        <div>
            <p>
                Order now from partners <i>Getir</i> and <i>Yemeksepeti</i> to enjoy our delicious coffee from the comfort of your own home, or come visit us and get it in-store. Either way, we can't wait to serve you!
            </p>
            <div class="order">
                <div><button><img src="assets/yemeksepeti.png" alt="yemeksepeti"></button></div>
                <div><button><img src="assets/getiryemek.png" alt="getir"></button></div>
            </div>
        </div>
    </div>
</main>
<footer>
    <div class="footer">
        <div class="footer-left">
            <img src="assets/logo.png" alt="logo">
            <div class="secondary-color">Fettan Coffee®</div>
            <div>Taste of Fresh <i class="fa-solid fa-mug-hot"></i> Handcrafted</div>
        </div>
        <div class="footer-right">
            <div>
                <p><span class="secondary-color">Fettan Coffee®</span> Kahve San. Tic. Ltd. Company</p>
                <p>Bahcelievler Mah. Aytac Cd. 26/26</p>
                <p>Tepebasi / ESKISEHIR</p>
                <p><i><b>Tel</b>: 0 222 222 00 00</i></p>
            </div>
            <div>
                <ul>
                    <li><button><i class="fa-brands fa-instagram"></i></button></li>
                    <li><button><i class="fa-brands fa-twitter"></i></button></li>
                    <li><button><i class="fa-brands fa-youtube"></i></button></li>
                    <li><button><i class="fa-brands fa-facebook"></i></button></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<footer class="footer-end">
    <div class="about">
        <span>
            <a href="https://www.theodinproject.com/" id="odin">The Odin Project</a> | fatiharapoglu
        </span>
        <a href="https://github.com/fatiharapoglu">
            <img class="github-icon" src="assets/GitHub-Mark-Light-120px-plus.png" alt="github-logo">
        </a>
    </div>
</footer>
    `;
    return homeHTML;
};

export { callHome };
