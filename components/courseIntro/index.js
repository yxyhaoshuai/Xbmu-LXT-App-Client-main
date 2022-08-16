import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import Link from "next/link";

export default function CourseIntro({data}) {
    return (
        <div className="course-intro-pane">
            <div className="left">
                <img src={BaseURL + data.fm_url} alt="" className="course-fm"/>
            </div>
            <div className="right">
                <h3 className="course-title">{data.title}</h3>
                <p className="comment-message">评分: {data.comment_avg_score} 分&emsp;&emsp;评价人数: {data.comment_count} 人</p>
                <p className="teacher-name">讲师: {data.name}</p>
                <Link href={"/course/play?id="+data.id}>
                    <a className="get-course">立即学习</a>
                </Link>
            </div>
        </div>
    )
}