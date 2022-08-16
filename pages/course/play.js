
import CoursePlayer from "../../components/coursePlayer";
import {useEffect, useState} from "react";
import {getUser, isLogin, updateUserStudyHistory} from "../../api/userApi";
import {useRouter} from "next/router";
import {getCourseOutline} from "../../api/courseApi";

export default function CoursePlay() {

    const router = useRouter()
    const [outlineData, setOutlineData] = useState([])


    useEffect(() => {
        getUser().then(userInfo=>{
            if (userInfo.id === undefined) {
                router.replace("/login")
            }
        })

    }, [])

    // 只要课程id发生改变, 那么久需要重新发送网络请求, 获取最新的大纲列表
    useEffect(() => {
        if (!router.query.id) return;
        getCourseOutline(router.query.id).then(result=>{
            setOutlineData(result.data)
        })
    }, [router.query.id])

    return (
        <>
            <CoursePlayer data={outlineData}/>
        </>
    )
}