import TeacherIntro from "../../../components/teacherIntro";
import SectionNoticeBar from "../../../components/sectionNoticeBar";
import FlexLayout from "../../../layout/flexLayout";
import CourseCard from "../../../components/courseCard";
import {getTeacherDetail} from "../../../api/teacherApi";


export default function TeacherDetail({teacherDetail}) {

    // "id":1,"name":"撩课-王顺子","header":"/images/teacher/sz.png","position":"讲师","intro":"一名爱分享技术的程序员","is_star":1
    let {id, name, header, position, intro, is_star, courses} = teacherDetail;
    return (
        <>
            <TeacherIntro data={{id, name, header, position, intro, is_star}}/>
            <SectionNoticeBar title={"发布课程"}/>
            <div className="bx">
                <FlexLayout>
                    {courses.map(item=>{
                        return <CourseCard key={item.id} data={item}/>
                    })}
                </FlexLayout>
            </div>

        </>
    )
}

export const getServerSideProps = async (context) => {

    // 文章id获取
    const {id} = context.params;
    let teacherDetail = (await getTeacherDetail(id)).data
    return {
        props: {
            teacherDetail
        }
    }

}