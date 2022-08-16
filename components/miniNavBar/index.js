import {miniMenuData} from "../../config/menuConfig";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getUser, removeUser} from "../../api/userApi";
import {BaseURL} from "../../config/serverConfig";

require("./index.less")

export default function MiniNavBar() {
    const router = useRouter()
    const {category="all", kw=""} = router.query;

    const [categoryV, setCategoryV] = useState(category)
    const [kwV, setKwV] = useState(kw)

    const [userInfo, setUserInfo] = useState({})
    const [freshFlag, setFreshFlag] = useState(false)

    useEffect(() => {
        setCategoryV(category)
        setKwV(kw)
    }, [category, kw])


    useEffect(() => {
        getUser().then(result => {
            setUserInfo(result)
        })
    }, [freshFlag, router.pathname, router.query])


    return (
        <div className="navbar-mini">
            <div className="content bx">
                <div className="left">
                    <h1 className="logo">
                        <Link href={"/"}>
                            <a>
                                撩学堂
                            </a>
                        </Link>
                    </h1>
                    <ul className="menus">
                        {
                            miniMenuData.map(item => {
                                return <li key={item.id} className={router.pathname === item.route ? "current": ""}>
                                    <Link href={item.route}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="center">
                    <form action="/search">
                        <div className="search-bar">
                            <div className="category">
                                <label>
                                    <select name="category" value={categoryV} onChange={(evt)=>{
                                        setCategoryV(evt.target.value)
                                    }}>
                                        <option value="all">全部</option>
                                        <option value="course">课程</option>
                                        <option value="teacher">讲师</option>
                                        <option value="article">文章</option>
                                    </select>
                                </label>
                            </div>
                            <div className="keyword">
                                <label>
                                    <input type="text" placeholder="请输入搜索关键字" name="kw" value={kwV} onChange={(evt)=>{
                                        setKwV(evt.target.value)
                                    }}/>
                                </label>
                            </div>
                            <div className="submit-btn">
                                <input className="iconfont" type="submit" value="&#xe610;"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                    {userInfo.id === undefined ? <div className="intro">
                        <Link href={"/login"}>
                            <a>
                                <div className="user">
                                    <span className="nick-name">请登录</span>
                                    <img className="header" src="/assets/images/place.png" alt=""/>
                                </div>
                            </a>
                        </Link>
                    </div> : <div className="intro">
                        <div className="user">
                            <span className="nick-name">{userInfo.nick_name}</span>
                            <img className="header" src={BaseURL + userInfo.header} alt=""/>
                        </div>
                        <div className="operation-pane">
                            <ul className="operation">
                                <li><Link href={"/"}><a>撩课学院 - itlike.com</a></Link></li>
                                <li><Link href={"/mine"}><a>我的学习</a></Link></li>
                                <li><Link href={"/mine/setting"}><a>设置</a></Link></li>
                                <li className="exit" onClick={() => {
                                    removeUser()
                                    setFreshFlag(!freshFlag)
                                    router.reload()
                                }}>退出</li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}