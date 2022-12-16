const callMenu = () => {
    let menuHTML = `
    <header>
    <div class="header">
        <div class="logo">
            <p>Fettan </p>
            <img src="assets/logo.png" alt="logo">
            <p>Coffee®</p>
        </div>
        <div class="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a class="active" href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
<main>
    <div class="main">
        <h1>Hot Beverages <i class="fa-solid fa-mug-hot"></i></h1>
        <div class="menu">
            <div class="menu-item">
                <img src="assets/menu/turkishcoffee.png" alt="">
                <p><span class="secondary-color">Turkish coffee</span> is a strong, flavorful coffee made with spices.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/americano.png" alt="">
                <p>An <span class="secondary-color">americano</span> is a type of coffee made by diluting a shot of espresso with hot water.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/cappucino.png" alt="">
                <p>A <span class="secondary-color">cappuccino</span> is a type of coffee drink made with espresso, steamed milk, and foam.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/chai-tea-latte.png" alt="">
                <p>A <span class="secondary-color">chai tea latte</span> is a type of tea drink made with black tea, spices, milk, and sweetener.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/cotd.png" alt="">
                <p>Today's special coffee is a rich and aromatic blend of Guatemalan and Sumatran beans.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/espresso.png" alt="">
                <p><span class="secondary-color">Espresso</span> is a type of coffee made by forcing hot water through finely ground coffee beans.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/hotchocolate.png" alt="">
                <p><span class="secondary-color">Hot chocolate</span> is a type of drink made with chocolate and hot milk.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/latte.png" alt="">
                <p>A <span class="secondary-color">latte</span> is a type of coffee drink made with espresso and steamed milk.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/macchiato.png" alt="">
                <p>A <span class="secondary-color">machiato</span> is a type of coffee drink made with a shot of espresso and a small amount of steamed milk.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/mocha.png" alt="">
                <p>A <span class="secondary-color">mocha</span> is a type of coffee drink made with espresso, chocolate, and steamed milk.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/turtle.png" alt="">
                <p>A <span class="secondary-color">turtle mocha</span> is a type of coffee drink made with espresso, chocolate, caramel, and steamed milk.</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/turkishtea.png" alt="">
                <p><span class="secondary-color">Turkish tea</span> is a type of black tea that is brewed with sugar and served in small glasses with a tulip-shaped design.</p>
            </div>
        </div>
        <h1>Cold Beverages <i class="fa-regular fa-snowflake"></i></h1>
        <div class="menu">
            <div class="menu-item">
                <img src="assets/menu/mochacooler.png" alt="">
                <p>Mocha Cooler</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/mintcooler.png" alt="">
                <p>Mint Cooler</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/coffeecooler.png" alt="">
                <p>Coffee Cooler</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/turtlecooler.png" alt="">
                <p>Turtle Mocha Cooler</p>
            </div>
        </div>
        <h1>Bakery <i class="fa-solid fa-bread-slice"></i></h1>
        <div class="menu">
            <div class="menu-item">
                <img src="assets/menu/cupcake.png" alt="">
                <p>Chocolate Cupcake</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/carrot.png" alt="">
                <p>Carrot Cake</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/cheddarsandwich.png" alt="">
                <p>Cheddar Sandwich</p>
            </div>
            <div class="menu-item">
                <img src="assets/menu/bagel.png" alt="">
                <p>Bagel with 3 Cheese</p>
            </div>
        </div>
</main>
<footer class="footer-end">
    <div class="about">
        <span>
            <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page" id="odin">The Odin Project</a> | fatiharapoglu
        </span>
        <a href="https://github.com/fatiharapoglu">
            <img class="github-icon" src="assets/GitHub-Mark-Light-120px-plus.png" alt="github-logo">
        </a>
    </div>
</footer>
    `;
    return menuHTML;
};

export { callMenu };