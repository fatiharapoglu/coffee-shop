const callContact = () => {
    let contactHTML = `
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
                <li><a href="#">Menu</a></li>
                <li><a class="active" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
<main>
    <div class="main">
       <div class="contact">
            <h1>Tell us how you feel</h1>
            <form action="#" method="post" autocomplete="off">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Fettan">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="fttn@msn.com">
                <label for="message">Message:</label>
                <input id="message" name="message" placeholder="Your coffee sucks!"></input>
                <button id="submit" type="submit" value="Submit">Submit</button>
            </form>
            <h1>Our shop location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9734.161425431985!2d30.51272769688246!3d39.78301409225965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15e397ff02e5%3A0xc7c4c24413b5af1a!2sEspark%20Eski%C5%9Fehir!5e0!3m2!1str!2str!4v1670093951207!5m2!1str!2str" width="100%" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
    </div>
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
</main>
<footer class="footer-end">
    <div class="about">
        <span>
            <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page" id="odin">The Odin Project</a> | fatiharapoglu
        </span>
        <a href="https://github.com/fatiharapoglu">
            <img class="githubIcon" src="assets/GitHub-Mark-Light-120px-plus.png" alt="github-logo">
        </a>
    </div>
</footer>
    `
    return contactHTML;
};

export { callContact };