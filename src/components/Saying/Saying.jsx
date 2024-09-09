import React from "react";
import style from "./Saying.module.css";
import user from "../../assets/images/user.jpg";
import { StarOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";

const Saying = () => {
  return (
    <div className={style.saying}>
      <h1 className={style.our}>Our Testimonial</h1>
      <div className={style.allClient}>
        <div className={style.profile}>
          <p>
            Lorem Ipsum is simply dummy text of the printing Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          <hr />
          <div className={style.yanYana}>
            <div className={style.yanleft}>
              <img style={{ width: "25%" }} src={user} alt="user" />
              <h2>
                Cliend Name <p>Profession</p>{" "}
                <div className={style.allIconslar}>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>{" "}
              </h2>
            </div>
            <div className={style.yanright}>
              <HeartOutlined className={style.heart} />
            </div>
          </div>
        </div>

        <div className={style.profile}>
          <p>
            Lorem Ipsum is simply dummy text of the printing Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          <hr />
          <div className={style.yanYana}>
            <div className={style.yanleft}>
              <img style={{ width: "25%" }} src={user} alt="user" />
              <h2>
                Cliend Name <p>Profession</p>{" "}
                <div className={style.allIconslar}>
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>{" "}
              </h2>

              <div className={style.start}></div>
            </div>
            <div className={style.yanright}>
              <HeartOutlined className={style.heart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saying;
