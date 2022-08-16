require("./index.less")
import Link from "next/link";
export default function BreadNav({data=[]}) {
    return (
        <div className="bread-nav">
            <div className="content bx">
                <ul>
                    {data.map(item=>{
                        return <li key={item.id}>
                            <Link href={item.href}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}