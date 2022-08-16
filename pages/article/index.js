import BreadNav from "../../components/breadNav";
import ArticleItem from "../../components/articleItem";
import {getArticleList} from "../../api/articleApi";

export default function Article({articleList=[]}) {

    return (
        <>
            <BreadNav data={[{id: 0, title: "首页", href: "/"}, {id: 1, title: "文章列表", href: "/article"}]}/>
            <div className="bx">
                {articleList.map(item=>{
                    return <ArticleItem key={item.id} data={item}/>
                })}
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    let articleList = await getArticleList()
    return {
        props: {
            articleList: articleList.data
        }
    }
}