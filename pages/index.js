import Lunbo from "../components/lunbo";
import SectionContainer from "../components/sectionContainer";
import CourseCard from "../components/courseCard";
import TeacherCard from "../components/teacherCard";
import ArticleCard from "../components/articleCard";
// import {useEffect} from "react";
// import axios from "axios";

import "../tools/arrayTool"

import {getFocusCourses, getHotCourses, getLastArticle, getStarTeachers} from "../api/homeApi";


// 1. 在哪里 (应该在页面组件内部发送网络请求: 组件内部发送网路请求 复用价值低)
// 2. 什么时候 发送这个网络请求
// CSR (客户端渲染): 网络请求的时机: 组件生命周期

// SSR (服务器端渲染): 网络请求时机:  getServerSideProps

// SSG + ISG: 编译时 getStaticProps

export default function Home({focusCourseData, hotCourseData, starTeacherData, lastArticleData}) {
    // console.log(focusCourseData, hotCourseData, starTeacherData, lastArticleData)
    // useEffect(() => {
    //     // 组件加载完毕执行一次
    //     // 网络请求
    // }, [])

    let [left, right] = lastArticleData.splitTwo()
    return (
        <div>
            {/*<ul>*/}
            {/*    {data.map(item => {*/}
            {/*        return <li key={item.id}><img src={item.avatar_url} alt=""/>{item.login}</li>*/}
            {/*    })*/}
            {/*    }*/}
            {/*</ul>*/}

            <Lunbo data={focusCourseData}/>
            <SectionContainer title={"- 热 . 门 . 好 . 课 -"} moreText={"更多"} moreHref={"/course"}>
                {hotCourseData.map(item => {
                    return <CourseCard key={item.id} data={item}/>
                })}
            </SectionContainer>

            <SectionContainer title={"- 明 . 星 . 讲 . 师 -"} moreText={"更多"} moreHref={"/teacher"}>
                {starTeacherData.map(item => {
                    return <TeacherCard key={item.id} data={item}/>
                })}
            </SectionContainer>

            <SectionContainer title={"- 学 . 院 . 新 . 闻 -"} moreText={"更多"} moreHref={"/article"}>
                <ArticleCard data={left}/>
                <ArticleCard data={right}/>
            </SectionContainer>

        </div>
    )
}

export const getServerSideProps = async (context) =>
{
    // 此处发送网络请求
    // let focusCourseData = await getFocusCourses()
    //
    // let hotCourseData = await getHotCourses()
    //
    // let starTeacherData = await getStarTeachers()
    //
    // let lastArticleData = await getLastArticle()

    let result = await Promise.all([getFocusCourses(), getHotCourses(), getStarTeachers(), getLastArticle()])
    const [focusCourseData, hotCourseData, starTeacherData, lastArticleData] = result.map(item=>item.data)

    return {
        props: {
            focusCourseData,
            hotCourseData,
            starTeacherData,
            lastArticleData
        }
    }
}



// export const getStaticProps = async (context) => {
//     // 此处发送网络请求
//     // 静态生成只会执行一次, 生成一次
//     // 内容被改了 -> 又不会重新生成 -> 旧数据
//     // 增量式静态生成(ISG) -> 设定时间间隔, 每隔多久, 重新生成一次
//     const response = await axios.get("http://localhost:5000/api/client/article/list")
//     return {
//         props: {
//             data: response.data.data
//         }
//     }
// }

// export const getServerSideProps = async (context) =>
// {
//     // 此处发送网络请求
//     const response = await axios.get("https://api.github.com/users/wangshunzi/followers")
//     console.log("----", response.data)
//     return {
//         props: {
//             data: response.data
//         }
//     }
// }