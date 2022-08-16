import {useState} from "react";

require("./index.less")

export default function CategoryBar({data=[], handlerClick}) {
    const [current, setCurrent] = useState(0)
    return (
        <div className="category-bar">
            <div className="content bx">
                <dl>
                    <dt>筛选:</dt>
                    {data.map((item, index)=>{
                        return <dd key={item.id} className={index === current ? "selected": ""} onClick={() => {
                            setCurrent(index)
                            handlerClick && handlerClick(item)
                        }}>{item.title}</dd>
                    })}
                </dl>
            </div>
        </div>
    )
}