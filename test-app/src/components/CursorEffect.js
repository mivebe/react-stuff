import "../styles/CursorEffect.css"
import shoe from "../adidas.png"
import { useEffect } from "react";

function CursorEffect() {
    useEffect(() => {

        //Movement Animation to happen
        const card = document.querySelector(".card");
        const container = document.querySelector(".container");
        //Items
        const title = document.querySelector(".title");
        const sneaker = document.querySelector(".sneaker img");
        const purchase = document.querySelector(".purchase");
        const description = document.querySelector(".info h3");
        const sizes = document.querySelector(".sizes");

        //Moving Animation Event
        container.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 130;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 130;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        //Animate In
        container.addEventListener("mouseenter", (e) => {
            card.style.transition = "none";
            //Popout
            title.style.transform = "translateZ(150px)";
            sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
            description.style.transform = "translateZ(125px)";
            sizes.style.transform = "translateZ(100px)";
            purchase.style.transform = "translateZ(75px)";
        });
        //Animate Out
        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            //Popback
            title.style.transform = "translateZ(0px)";
            sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
            description.style.transform = "translateZ(0px)";
            sizes.style.transform = "translateZ(0px)";
            purchase.style.transform = "translateZ(0px)";
        });
    }, [])

    return (<div>
        <div className="container">
            <div className="card">
                <div className="sneaker">
                    <div className="circle"></div>
                    <img src={shoe} alt="adidas" />
                </div>
                <div className="info">
                    <h1 className="title">Adidas ZX</h1>
                    <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTIONAL COMFORT.</h3>
                    <div className="sizes">
                        <button>39</button>
                        <button>40</button>
                        <button className="active">42</button>
                        <button>44</button>
                    </div>
                    <div className="purchase">
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CursorEffect;
