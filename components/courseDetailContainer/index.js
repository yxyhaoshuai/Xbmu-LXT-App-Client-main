import {useEffect} from "react";


require("./index.less")

export default function CourseDetailContainer({dgContent, descContent, rightNodes}) {

    useEffect(() => {
        // 0. 通过变量, 记录当前选中的索引值
        let currentIndex = 0;

        // 1. 获取到所有的选项卡和面板元素
        let tabs = document.querySelectorAll(".tabs>li");
        let panes = document.querySelectorAll(".panes>li");

        // 2. 每一个选项卡, 监听对应的鼠标单击事件
        for (let i = 0, len=tabs.length; i < len; i++) {
            let tab = tabs[i];
            tab.onclick = function () {
                // 2.1 切换选项卡的选中状态
                tabs[currentIndex].className = "";
                tabs[i].className = "current";

                // 2. 切换面板的显示(联动)
                panes[currentIndex].className = "";
                panes[i].className = "current";
                currentIndex = i;


            }
        }

    }, [])

    return (
        <div className="detail-container">
            <div className="top">
                <ul className="tabs">
                    <li className="current">课程详情</li>
                    <li>课程大纲</li>
                </ul>
            </div>
            <div className="bottom">
                <div className="left">
                    <ul className="panes">
                        <li className="current">
                            {descContent}
                        </li>
                        <li>
                            {dgContent}
                        </li>
                    </ul>
                </div>
                <div className="right">
                    {rightNodes}
                </div>
            </div>
        </div>
    )
}