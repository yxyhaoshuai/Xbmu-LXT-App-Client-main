require("./index.less")
import Link from "next/link";
import {BaseURL} from "../../config/serverConfig";

export default function TeacherCard({data={}}) {
    return (
        <div className="teacher-card column3">
            <div className="left">
                {/*<Link href={"/teacher/detail/[...ids]"} as={"/teacher/detail/123"}>*/}
                <Link href={"/teacher/detail/"+data.id}>
                    <a>
                        <img className="t-header" src={BaseURL + data.header} alt=""/>
                        <div className="t-name">{data.name}</div>
                    </a>
                </Link>

            </div>
            <div className="right">
                <div className="t-position">{data.position}</div>
                <div className="t-intro">
                    {data.intro}
                </div>
            </div>
        </div>
    )
}