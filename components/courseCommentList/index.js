import {getFormatTimeFromDate} from "../../tools/dateTool";

require("./index.less")
import {BaseURL} from "../../config/serverConfig";
export default function CourseCommentList({data=[]}) {
    return (
        <div className="comment-list">
            <div className="comment-title">
                评论
            </div>
            <div className="comment-items">
                {data.map(item=>{
                    return <div key={item.id} className="comment-item">
                        <div className="top">
                            <img className="user-header" src={BaseURL + item.header} alt=""/>
                            <div className="message">
                                <div className="message-top">
                                    <span className="user-name">{item.nick_name}</span>
                                    <div className="star">
                                        <div className="y_star" style={{width: `${item.score / 5 * 100}%`}}/>
                                    </div>
                                </div>
                                <div className="comment-time">
                                    {getFormatTimeFromDate(item.create_time)}
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            {item.content}
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}