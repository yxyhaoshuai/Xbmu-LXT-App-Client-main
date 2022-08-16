

require("./index.less")

import Link from "next/link";
import {BaseURL} from "../../config/serverConfig";

export default function CourseCard({data={}}) {

    return (
        <div className="course-card column5">
            <div className="image">
                {""+data.is_hot === "1" ? <span className="tag">热门</span> : ""}

                <Link href={{
                    pathname: "/course/detail",
                    query: {id: data.id}
                }}>
                    <a>
                        <img src={BaseURL + data.fm_url} alt=""/>
                    </a>
                </Link>

            </div>
            <div className="title">
                <a href="#">
                    {data.title}
                </a>
            </div>
            <div className="score">
                <div className="star">
                    <div className="y_star" style={{width: `${data.comment_avg_score / 5 * 100}%`}}/>
                </div>
                <span className="score_text">{data.comment_avg_score}分</span>
            </div>
            <div className="zan">
                <span className="good iconfont icon-icon_good">{data.comment_total_count}人好评</span>
            </div>
        </div>
    )
}