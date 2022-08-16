import CategoryBar from "../../components/categoryBar";
import TeacherItem from "../../components/teacherItem";
import {getTeacherList} from "../../api/teacherApi";
import {useState} from "react";

export default function Teacher({teacherList}) {
    const [isOnlyStar, setOnlyIsStar] = useState(false)
    return (
        <>
            <CategoryBar data={[{id: 0, title: "全部"}, {id: 1, title: "明星讲师"}]} handlerClick={(item) => {
                // console.log("筛选:", item)
                setOnlyIsStar(item.id === 1)
            }}/>
            <div className="bx">

                {teacherList.filter(item=>{
                   return isOnlyStar ? item.is_star===1 : true
                }).map(item=>{
                    return <TeacherItem key={item.id} data={item}/>
                })}
            </div>

        </>
    )
}

export const getServerSideProps = async (context) => {
    let teacherList = await getTeacherList()
    return {
        props: {
            teacherList: teacherList.data
        }
    }

}