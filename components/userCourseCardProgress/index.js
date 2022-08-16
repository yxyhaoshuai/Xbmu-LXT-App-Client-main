import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
require("./index.less")

export default function UserCourseCardProgress({data}) {
    return (
        <div className="course-progress-card column5">
            <div className="image">
                {data.course_is_hot === 1 ? <span className="tag">热门</span>: ""}
                <Link href={"/course/detail?id="+data.course_id}>
                    <a>
                        <img src={BaseURL + data.course_fm_url} alt=""/>
                    </a>
                </Link>

            </div>
            <div className="title">
                <Link href={"/course/detail?id="+data.course_id}>
                    <a>
                        {data.course_title}
                    </a>
                </Link>
            </div>
            <div className="progress-pane">
                <div className="progress-bar">
                    <div className="value" style={{width: `${data.learned_count / data.course_outline_count * 100}%`}}/>
                </div>

            </div>
            <div className="progress-text">
                已学习{data.learned_count}/{data.course_outline_count}课时
            </div>
        </div>
    )
}