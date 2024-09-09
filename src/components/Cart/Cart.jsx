import React from "react";
// import style from "./Cart.module.css";
import style from "./Cart.module.css";
import { HeatMapOutlined } from "@ant-design/icons";

const Cart = () => {
  return (
    <div>
      <div className={style.allContact}>
        <div className={style.centerTouch}>
          <h1 className={style.H1TAG}>Get in touch</h1>
          <p
            style={{ textAlign: "center", padding: "10px 180px" }}
            className={style.with}
          >
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <p style={{ textAlign: "center" }} className={style.download}>
            Download Now.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1723225394834!5m2!1sen!2sbd"
            width="600"
            height="450"
          ></iframe>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "30px",
            }}
            className={style.yanForm}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                gap: "20px",
              }}
              className={style.sag}
            >
              <input
                style={{
                  padding: "20px 30px",
                  borderRadius: "10px",
                  border: "none",
                }}
                className={style.yourName}
                type="text"
                placeholder="Your Name"
              />
              <input
                style={{
                  padding: "20px 30px",
                  borderRadius: "10px",
                  border: "none",
                }}
                className={style.yourName}
                type="text"
                placeholder="Enter Your Email"
              />
              <input
                style={{
                  padding: "70px 30px",
                  borderRadius: "10px",
                  border: "none",
                }}
                className={style.yourMessage}
                type="text"
                placeholder="Your Message"
              />
              <button
                style={{
                  padding: "20px 40px",
                  borderRadius: "10px",
                  border: "1px solid orange",
                  backgroundColor: "white",
                  color: "yellowgreen",
                }}
                className={style.submit}
              >
                Submit
              </button>
            </div>
            <div
              style={{
                with: "30%",
                textAlign: "end",
                display: "grid",
                rowGap: "50px ",
              }}
              className={style.sol}
            >
              <div className={style.alladress}>
                <div
                  style={{
                    padding: "25px 25px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    gap: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                  }}
                  className={style.adress}
                >
                  <div className={style.loca}>
                    <HeatMapOutlined
                      style={{
                        fontSize: "25px",
                        paddingBottom: "28px",
                        color: "yellowgreen",
                      }}
                    />
                  </div>
                  <div className={style.newYork}>
                    <h2
                      style={{
                        color: "#45595B",
                        padding: " 5px 0px",
                        textAlign: "start",
                      }}
                    >
                      Adress
                    </h2>
                    <p style={{ padding: "0px" }}>123 Street New York.USA</p>
                  </div>
                </div>
              </div>

              <div className={style.alladress}>
                <div
                  style={{
                    padding: "25px 25px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    gap: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                  }}
                  className={style.adress}
                >
                  <div className={style.loca}>
                    <HeatMapOutlined
                      style={{
                        fontSize: "25px",
                        paddingBottom: "28px",
                        color: "yellowgreen",
                      }}
                    />
                  </div>
                  <div className={style.newYork}>
                    <h2
                      style={{
                        color: "#45595B",
                        padding: " 5px 0px",
                        textAlign: "start",
                      }}
                    >
                      Mail Us
                    </h2>
                    <p style={{ padding: "0px" }}>info@example.com</p>
                  </div>
                </div>
              </div>

              <div className={style.alladress}>
                <div
                  style={{
                    padding: "25px 25px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    gap: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                  }}
                  className={style.adress}
                >
                  <div className={style.loca}>
                    <HeatMapOutlined
                      style={{
                        fontSize: "25px",
                        paddingBottom: "28px",
                        color: "yellowgreen",
                      }}
                    />
                  </div>
                  <div className={style.newYork}>
                    <h2
                      style={{
                        color: "#45595B",
                        padding: " 5px 0px",
                        textAlign: "start",
                      }}
                    >
                      Telephone
                    </h2>
                    <p style={{ padding: "0px" }}>(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
