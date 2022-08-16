import {BaseURL} from "../../config/serverConfig";

require("./index.less")

export default function UserIntro({data={}}) {
    return (
        <div className="user-info-pane">
            <img className="user-header" src={BaseURL + data.header} alt=""/>
                <span className="user-nickname">{data.nick_name}</span>
                <span className="zym">{data.intro}</span>
        </div>
    )
}