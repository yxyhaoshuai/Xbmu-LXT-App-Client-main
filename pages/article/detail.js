import BreadNav from "../../components/breadNav";
import {getArticleDetail} from "../../api/articleApi";
import {getFormatTimeFromDate} from "../../tools/dateTool";

export default function ArticleDetail({articleDetail}) {

    // const router = useRouter()
    // console.log(router)

    return (
        <>
            <BreadNav data={[{id: 0, title: "首页", href: "/"}, {id: 1, title: "文章列表", href: "/article"}, {id: 2, title: articleDetail.title, href: ""}]}/>
            <div className="news-detail bx">
                <h3 className="title">{articleDetail.title}</h3>
                <p className="time">{getFormatTimeFromDate(articleDetail.create_time)}</p>
                <div className="content" dangerouslySetInnerHTML={{__html: articleDetail.content}}/>
            </div>

            <style jsx>{`
              .news-detail {
                text-align: center;
              }

              .news-detail>.title {
                font-size: 22px;
                color: #000;
                margin: 10px 0;
              }

              .news-detail>.time {
                font-size: 14px;
                color: #999;
              }

              .news-detail>.content {
                padding-top: 15px;
                text-align: left;
                min-height: 300px;
              }

            `}</style>
        </>
    )
}

export const getServerSideProps = async (context) => {

    // 文章id获取
    const {id} = context.query;
    if (id === undefined) {
        return {
            redirect: {
                destination: '/article',
                permanent: false,
            },
        }
    } else {
        let articleDetail = await getArticleDetail(id)
        return {
            props: {
                articleDetail: articleDetail.data
            }
        }
    }
}