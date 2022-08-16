
require("./index.less")
import Link from "next/link";
import {getFormatTimeFromDate} from "../../tools/dateTool";

export default function ArticleItem({data={}}) {
    return (
        <div className="article-item">
            <div className="top">
                <Link href={"/article/detail?id="+data.id}>
                    <a className="title">{data.title}</a>
                </Link>
                <span className="time">{getFormatTimeFromDate(data.create_time)}</span>
            </div>
            <div className="bottom">
                {data.intro}
            </div>
        </div>
    )
}