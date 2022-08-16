
require("./index.less")

export default function SectionNoticeBar({title}) {

    return (
        <div className="section-notice">
            <div className="content bx">
                <ul className="menus">
                    <li className="current"><a>{title}</a></li>
                </ul>
            </div>
        </div>
    )
}