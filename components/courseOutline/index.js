
require("./index.less")
import Link from "next/link";

export default function CourseOutline({course_id, data=[]}) {
    return (
        <div className="course-dg">
            <ul className="dg">
                {data.map(item => {
                    return <li key={item.id}>
                        <span className="c-num">课时{item.num}: </span>
                        <span className="c-progress"/>
                        <span className="c-title">{item.title}</span>
                        <Link href={`/course/play?id=${course_id}&o_id=${item.id}`}>
                            <a className="c-view">立即观看</a>
                        </Link>

                    </li>
                })}

            </ul>
        </div>
    )
}