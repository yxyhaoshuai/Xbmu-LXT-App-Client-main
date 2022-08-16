import {getFormatTimeFromDate} from "../../tools/dateTool";
import Link from "next/link";
require("./index.less")

export default function ArticleCard({data={}}) {

    return (
        <div className="news-card column2">
            <ul>
                {data.map(item=> {
                    return <li key={item.id}>
                        <Link href={"/article/detail?id="+item.id}>
                            <a>{item.title}</a>
                        </Link>

                        <span>{getFormatTimeFromDate(item.create_time)}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}