
require("./index.less")
import {BaseURL} from "../../config/serverConfig";

export default function TeacherIntro({data: {id, name, header, position, intro, is_star}}) {

    return (
        <div className="teacher-intro">
            <div className="content bx">
                <img className="t-header" src={BaseURL + header} alt=""/>
                    <div className="intro-pane">
                        <p className={`t-position-name ${is_star === 1 ? "is-star": ""}`}>{position}: {name}</p>
                        <p className="desc">{intro}</p>
                    </div>
            </div>
        </div>
    )
}