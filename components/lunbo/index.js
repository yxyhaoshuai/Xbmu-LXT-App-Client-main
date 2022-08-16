import {useEffect, useState} from "react";
import Grade from 'grade-js'
import {useRouter} from "next/router";
import {BaseURL} from "../../config/serverConfig";

require("./index.less")

export default function Lunbo({data}) {
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [data, setData] = useState([
    //     {id: 0, title: "撩课-标题-1", img: "/assets/images/banner-1.jpg"},
    //     {id: 1, title: "撩课-标题-2", img: "/assets/images/banner-2.jpg"},
    //     {id: 2, title: "撩课-标题-3", img: "/assets/images/banner-3.jpg"},
    //     {id: 3, title: "撩课-标题-4", img: "/assets/images/banner-4.jpg"},
    //     {id: 4, title: "撩课-标题-5", img: "/assets/images/banner-5.jpg"},
    //
    // ])
    useEffect(() => {
        // 注释掉load事件, 防止, 页面跳转出去, 再跳回来后, 失效
        // window.addEventListener('load', function () {
        // setTimeout(() => {

        // }, 3000)

        // })

        // try {
        //     Grade(document.querySelectorAll('.lb-bgc'))
        // }catch (e) {
        //
        // }
    }, [])

    return (
        <div className="like-lb">
            <ul className="images">
                {data.map((item, idx) => {
                    return <li key={item.id} className={idx === currentIndex ? "current": ""}>
                        <a className="lb-bgc" href="">
                            <div className="back_filter_img" style={{backgroundImage: `url(${BaseURL + item.ad_url})`}}/>
                            <img src={BaseURL + item.ad_url} alt="" crossOrigin={"anonymous"}/>
                        </a>
                    </li>
                })}
            </ul>
            <ul className="titles">
                {data.map((item, idx) => {
                    return <li key={item.id} className={idx === currentIndex ? "current": ""} onMouseOver={() => {
                        setCurrentIndex(idx)
                    }}>
                        <a href="#">{item.title}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}