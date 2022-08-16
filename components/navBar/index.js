import {useRouter} from "next/router";

require("./index.less")
import Link from "next/link"

import {menuData} from "../../config/menuConfig";
import {BaseURL} from "../../config/serverConfig";
import {useEffect, useState} from "react";
import {getUser, removeUser} from "../../api/userApi";

export default function NavBar({data}) {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState({})

    const [freshFlag, setFreshFlag] = useState(false)
    useEffect(() => {
        getUser().then(result => {
            setUserInfo(result)
        })
    }, [freshFlag])

    return (
        <div id="nav-bar">
            <div className="content bx">
                <div className="top">
                    <div className="left">
                        <h1 className="logo">
                            <a href="#">
                                撩学堂
                            </a>
                        </h1>
                    </div>
                    <div className="center">
                        <form action="/search">
                            <div className="search-bar">
                                <div className="category">
                                    <label>
                                        <select name="category">
                                            <option value="all">全部</option>
                                            <option value="course">课程</option>
                                            <option value="teacher">讲师</option>
                                            <option value="article">文章</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="keyword">
                                    <label>
                                        <input type="text" placeholder="请输入搜索关键字" name="kw"/>
                                    </label>
                                </div>
                                <div className="submit-btn">
                                    <input className="iconfont" type="submit" value="&#xe610;&nbsp;搜索"/>
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
                                    <Link href={"/"}><a><li>撩课学院 - itlike.com</li></a></Link>
                                    <Link href={"/mine"}><a><li>我的学习</li></a></Link>
                                    <Link href={"/mine/setting"}><a><li>设置</li></a></Link>
                                    <li className="exit" onClick={() => {
                                        removeUser()
                                        setFreshFlag(!freshFlag)
                                        router.reload()
                                    }}>退出登录</li>
                                </ul>
                            </div>
                        </div>}


                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul className="menus">
                            {
                                menuData.map(item => {
                                    return <li key={item.id}
                                               className={router.pathname === item.route ? "current" : ""}>
                                        <Link href={item.route}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </li>
                                })
                            }

                            {/*<li><Link href="/teacher"><a>讲师</a></Link></li>*/}
                            {/*<li><Link href="/course"><a>课程</a></Link></li>*/}
                            {/*<li><Link href="/article"><a>文章</a></Link></li>*/}
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li className="iconfont icon-liwu">
                                关注领取福利
                                <div className="ad-pane">
                                    <div className="title">关注撩课公众号</div>
                                    <div className="sub-title">- 领取课程免费福利,超值学习资料 -</div>
                                    <img className="ewm" src={BaseURL + data.wechat_qrcode} alt=""/>
                                </div>
                            </li>
                            <li className="iconfont icon-weixinxiaochengxu">
                                微信小程序
                                <div className="ad-pane">
                                    <div className="title">撩课-小程序</div>
                                    <div className="sub-title">- 关注关注 -</div>
                                    <img className="ewm" src={BaseURL + data.mini_program} alt=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}