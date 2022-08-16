import {useEffect} from "react";
// import {getUser} from "../../api/userApi";
// import {useRouter} from "next/router";
// import {addCourseComment} from "../../api/courseApi";

require("./index.less")

export default function CourseCommentPane({_handlerComment}) {

    // const router = useRouter()

    useEffect(() => {
        let score = 5;
        // 1. 星星评分效果
        let star = document.querySelector(".comment-pane .star");
        let y_star = document.querySelector(".comment-pane .y_star");
        star.onclick = function (event) {
            // 鼠标点击的位置
            // console.log(event.offsetX)

            // 2.3 3 2.1 3
            score = Math.ceil(event.offsetX / star.offsetWidth * 5)
            y_star.style.width = score / 5 * 100 + "%";
        }

        // 2. 点击评论按钮之后, 获取到用户的评价信息(分数, 评价内容)
        let submit = document.getElementsByClassName("submit")[0];
        let content = document.getElementsByClassName("comment-content")[0];
        submit.onclick = function () {
            // 获取分数, 以及评论内容
            // console.log("分数:", score);
            let content_v = content.value
            // console.log("评论内容: ", content_v)

            _handlerComment && _handlerComment(score, content_v)

            // 借助网络请求, 调用对应的接口, 就可以把评论信息, 传递给服务器
            // getUser().then(result=>{
            //     if (result.id === undefined) {
            //         router.push("/login")
            //     } else {
            //         addCourseComment(result.id, )
            //     }
            // })
        }
    }, [])

    return (
        <div className="comment-pane">
            <div className="comment-title">
                评论
            </div>
            <div className="form-pane">
                <div className="comment-score">
                    <span>给该课打分:</span>
                    <div className="star">
                        <div className="y_star" style={{width: "100%"}}/>
                    </div>
                </div>
                <label>
                    <textarea className="comment-content" placeholder="请输入对该课程的评价"/>
                </label>
                <div className="submit">评论</div>
            </div>

        </div>
    )
}