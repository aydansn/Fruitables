import React from 'react'
import style from "./Customers.module.css";
import { UsergroupAddOutlined } from "@ant-design/icons";


const Customers = () => {
  return (
    <div className={style.customers}>
      <div className={style.users}>
        <div className={style.user}>
        <UsergroupAddOutlined className={style.icons1}/>
            <h2 className={style.satisfied}>satisfied customers</h2>
            <h1 className={style.numbers}>1963</h1>
        </div>

        <div className={style.user}>
        <UsergroupAddOutlined className={style.icons1} />
            <h2 className={style.satisfied}>quality of service </h2>
            <h1 className={style.numbers}>99%</h1>
        </div>

        <div className={style.user}>
        <UsergroupAddOutlined  className={style.icons1}/>
            <h2 className={style.satisfied}>quality certificates </h2>
            <h1 className={style.numbers}>33</h1>
        </div>

        <div className={style.user}>
        <UsergroupAddOutlined  className={style.icons1}/>
            <h2 className={style.satisfied}>Available Products </h2>
            <h1 className={style.numbers}>789</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Customers