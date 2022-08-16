import CourseCommentPane from "../../components/courseCommentPane";
import CourseIntro from "../../components/courseIntro";
import BreadNav from "../../components/breadNav";
import CourseDetailContainer from "../../components/courseDetailContainer";
import CourseLinkTeacher from "../../components/courseLinkTeacher";
import CourseCommentList from "../../components/courseCommentList";
import CourseOutline from "../../components/courseOutline";
import {addCourseComment, getCourseComments, getCourseDetailInfo, getCourseOutline} from "../../api/courseApi";
import {useEffect, useState} from "react";
import {getUser} from "../../api/userApi";
import {message} from "antd";
import {useRouter} from "next/router";

export default function CourseDetail({courseDetailInfo, courseOutlines}) {
    const {teacher_id, name, header, position} = courseDetailInfo;
    const [comments, setComments] = useState([])
    const router = useRouter()
    useEffect(() => {
        getCourseComments(courseDetailInfo.id).then(result=>{
            setComments(result.data)
        })
    }, [courseDetailInfo.id])

    const _handlerComment = (score, content) => {
        getUser().then(info=>{
            if (info.id === undefined) {
                message.warn("请先登录后, 再进行课程评论!")
                router.push("/login?dest_url=/course/detail?id="+courseDetailInfo.id)
            } else {
                addCourseComment(info.id, courseDetailInfo.id, score, content).then(result=>{
                    console.log(result)
                    if (result.code === -1) {
                        message.error(result.msg)
                    }else {
                        message.success("评论成功!")
                        router.reload()
                    }
                })
            }
        })
    }

    return (
        <>
            <BreadNav data={[{id: 0, title: "首页", href: "/"}, {id: 1, title: "课程列表", href: "/course"}, {id: 2, title: courseDetailInfo.title, href: "#"}]}/>
            <div className="bx">
                <CourseIntro data={courseDetailInfo}/>
                <CourseDetailContainer
                    descContent={<div dangerouslySetInnerHTML={{__html: courseDetailInfo.intro}}/>}
                    dgContent={<CourseOutline course_id={courseDetailInfo.id} data={courseOutlines}/>}
                    rightNodes={<>
                        <CourseLinkTeacher data={{teacher_id, name, header, position}}/>
                        <CourseCommentPane _handlerComment={_handlerComment}/>
                        <CourseCommentList data={comments}/>
                    </>}
                />
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {id} = context.query;
    if (id === undefined) {
        return {
            redirect: {
                destination: '/course',
                permanent: false,
            },
        }
    } else {
        let courseDetailInfo = (await getCourseDetailInfo(id)).data[0]
        let courseOutlines = (await getCourseOutline(id)).data
        return {
            props: {
                courseDetailInfo,
                courseOutlines
            }
        }
    }

}

