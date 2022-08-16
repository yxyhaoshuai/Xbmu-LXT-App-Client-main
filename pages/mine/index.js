import UserIntro from "../../components/userIntro";
import SectionNoticeBar from "../../components/sectionNoticeBar";
import FlexLayout from "../../layout/flexLayout";
import UserCourseCardProgress from "../../components/userCourseCardProgress";
import {useEffect, useState} from "react";
import {getUser, getUserStudyHistory} from "../../api/userApi";
import {useRouter} from "next/router";


export default function Mine() {

    const router = useRouter()

    const [userInfo, setUserInfo] = useState({})
    const [studyHistory, setStudyHistory] = useState([])
    useEffect(() => {
        getUser().then(result=>{
            if (result.id === undefined) {
                router.replace("/")
            }else {
                setUserInfo(result)
                getUserStudyHistory(result.id).then(({data})=>{
                    setStudyHistory(data)
                })
            }
        })
    }, [])


    return (
        <>
            <UserIntro data={userInfo}/>
            <SectionNoticeBar title={"我的学习"}/>
            <div className="bx">
                <FlexLayout>
                    {studyHistory.map(item=>{
                        return <UserCourseCardProgress key={item.id} data={item}/>
                    })}
                </FlexLayout>
            </div>
        </>
    )
}