import CategoryBar from "../../components/categoryBar";
import CourseCard from "../../components/courseCard";
import FlexLayout from "../../layout/flexLayout";
import {getCourseCategoryList, getCourseListWithCategoryId} from "../../api/courseApi";
import {useEffect, useState} from "react";

export default function Course({categoryList, courseList}) {
    const [currentCategoryID, setCurrentCategoryID] = useState(-1)
    const [data, setData] = useState(courseList)
    useEffect(() => {
        getCourseListWithCategoryId(currentCategoryID).then(({data}) => {
            setData(data)
        })
    }, [currentCategoryID])
    return (
        <>
            <CategoryBar data={categoryList} handlerClick={(item) => {
                setCurrentCategoryID(item.id)
            }}/>
            <div className="bx">
                <FlexLayout>
                    {data.map(item=><CourseCard key={item.id} data={item}/>)}
                </FlexLayout>
            </div>
        </>
    )
}


export const getServerSideProps = async (context) => {
    let categoryList = (await getCourseCategoryList()).data
    let courseList = (await getCourseListWithCategoryId()).data
    categoryList = [{id: -1, title: "全部"}, ...categoryList]
    return {
        props: {
            categoryList,
            courseList
        }
    }

}