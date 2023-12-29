import { useState } from "react";
import style from './App.module.css';
import { Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundImage:`url('/image/901414.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", 
        }}
        className="container"
      >
        <Container>
          <div style={{ display: "flex", alignItems: "center", color: "white", justifyContent: "space-between", paddingTop: "18px" }} className="Nav">
            <img style={{ width: "5%" }} src="/image/burgerLogo.jpg" alt="" />
            <div style={{ display: "flex", justifyContent: "space-between", width: "25%" }}>
              <p style={{ fontSize: "100%" }}>Home</p>
              <p style={{ fontSize: "100%" }}>Menu</p>
              <p style={{ fontSize: "100%" }}>About</p>
              <p style={{ fontSize: "100%" }}>Shop</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "12%" }}>
              <img src="/image/search.png" style={{ width: "16%" }} alt="" />
              <img src="/image/user.png" style={{ width: "16%" }} alt="" />
              <img src="/image/cart.png" style={{ width: "16%" }} alt="" />
            </div>
          </div>
          <div style={{ color: "white", fontFamily: "math", width: "50%" }}>
            <div>
              <p style={{ fontSize: "435%", fontWeight: "bold", lineHeight: "1em", marginBottom: "0.5em" }}>THE ULTIMATE BURGER HAVEN</p>
            </div>
            <p style={{ marginBottom: "1px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore provident dicta esse perspiciatis obcaecati iste dolore accusamus dolorem a corrupti. Culpa quidem ut accusamus optio a ullam ratione eaque odio!</p>
          </div>
          <div>
            {/* <Button className={style.button}>
              Order Now
            </Button>
            <Button className={style.button}>View Menu</Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;


  