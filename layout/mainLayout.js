import NavBar from "../components/navBar";
import MiniNavBar from "../components/miniNavBar";
import Footer from "../components/footer";
import FixedCard from "../components/fixedCard";
import {useRouter} from "next/router";
import Head from "next/head";
import {useEffect, useState} from "react";
import {getConfigData} from "../api/homeApi";


export default function MainLayout({children}) {
    const router = useRouter()

    const [data, setData] = useState({})

    useEffect(() => {
        // console.log("尝试获取导航栏相关的数据")
        getConfigData().then(result=>{
            let data = result.data;
            setData(data)
        })
    }, [])

    return <>
        <Head>
            <title>撩学堂-在线教育(itlike.com)</title>
            <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            <meta name="keyword" content="全栈,大数据,人工智能,前端,后端,React,Vue,Node"/>
            <meta name="description" content="撩课, 是一家致力于打造高质量课程的平台!圆您coding梦!"/>
        </Head>
        {router.pathname === "/" ? <NavBar data={data}/> : <MiniNavBar/>}
        {children}
        <Footer data={data}/>
        <FixedCard data={data}/>
    </>
}