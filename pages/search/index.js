import BreadNav from "../../components/breadNav";
import FlexLayout from "../../layout/flexLayout";
import CourseCard from "../../components/courseCard";
import TeacherCard from "../../components/teacherCard";
import ArticleItem from "../../components/articleItem";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getSearchResult} from "../../api/searchApi";

export default function Search() {

    const router = useRouter()

    const [searchResult, setSearchResult] = useState({
        articleResult: [],
        courseResult: [],
        teacherResult: []
    })

    useEffect(() => {
        const {category, kw} = router.query;
        if (category === undefined) return;
        getSearchResult(category, kw).then(result => {
            console.log("搜索结果", result)
            if (category === "all") {
                setSearchResult(result.data)
            } else if (category === "teacher") {
                setSearchResult({
                    articleResult: [],
                    courseResult: [],
                    teacherResult: result.data
                })
            }else if (category === "course") {
                setSearchResult({
                    articleResult: [],
                    courseResult: result.data,
                    teacherResult: []
                })
            } else if (category === "article") {
                setSearchResult({
                    articleResult: result.data,
                    courseResult: [],
                    teacherResult: []
                })
            }


        })
    }, [router.query.category, router.query.kw])

    return (
        <>
            <BreadNav/>
            {["course", "all"].includes(router.query.category)?<div className="search-result bx">
                <div className="title">
                    课程的搜索结果:
                </div>
                <FlexLayout>
                    {searchResult.courseResult.map(item=> {
                        return <CourseCard key={item.id} data={item}/>
                    })}
                </FlexLayout>
            </div>: ""}

            {["teacher", "all"].includes(router.query.category)? <div className="search-result bx">
                <div className="title">
                    讲师的搜索结果:
                </div>
                <FlexLayout>
                    {searchResult.teacherResult.map(item=> {
                        return <TeacherCard key={item.id} data={item}/>
                    })}
                </FlexLayout>
            </div>: ""}

            {["article", "all"].includes(router.query.category)? <div className="search-result bx">
                <div className="title">
                    文章的搜索结果:
                </div>
                    {searchResult.articleResult.map(item=> {
                        return <ArticleItem key={item.id} data={item}/>
                    })}
            </div>: "" }

            <style jsx>{`
              .search-result {
                margin-top: 30px;
              }

              .search-result > .title {
                font-size: 16px;
                color: #999;
                margin-bottom: 20px;
              }
            `}</style>
        </>
    )
}