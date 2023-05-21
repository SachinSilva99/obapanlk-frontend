import Nav from "../Nav/Nav";
import "./Home.css";

const Home = () => {
    const listItems = ["Home", "Ads", "Profile", "Withdraw", "Logout"];

    return (
        <div>
            <Nav logo={"Obapan.Lk"} listItems={listItems} />
            <div className="home_content">
                <div className="home_img"></div>
                <div className="home-content-left">
                    <h1 className="heading">
                        Unlock the power of
                        <br /> your clicks,
                        <br /> get paid!
                    </h1>
                    <p className="home-about">
                        Welcome to our click-to-paid website, where your every
                        click holds the power to earn you money! Unlock a world
                        of opportunities as you engage with online content,
                        advertisements, and promotions. Whether you're browsing,
                        exploring, or simply enjoying your favorite websites, we
                        believe in rewarding your active participation. With our
                        innovative platform, you can transform your clicks into
                        a steady stream of income, making your online experience
                        more rewarding than ever before. Join the click-to-paid
                        revolution and start maximizing your earning potential
                        today!
                    </p>
                </div>

            </div>
            <div className="home_ad"></div>
            <footer className="home_footer">
                Copyright © 2023 Obapan.lk. All rights reserved
            </footer>
        </div>
    );
};

export default Home;
