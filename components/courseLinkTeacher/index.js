import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import Link from "next/link";

export default function CourseLinkTeacher({data}) {
    const {teacher_id, name, header, position} = data
    return (
        <div className="c-teacher">
            <Link href={"/teacher/detail/" + teacher_id}>
                <a>
                    <div className="top">
                        <img src={BaseURL + header} alt=""/>
                    </div>
                    <div className="bottom">
                        {position + ": " + name}
                    </div>
                </a>
            </Link>

        </div>
    )
}