import ajax from "../tools/ajax";

export const getCourseCategoryList = () => ajax("/api/client/course/category")
export const getCourseListWithCategoryId = (category_id=-1) => ajax("/api/client/course/list", {category_id, page_size: 100})

export const getCourseDetailInfo = (id) => ajax("/api/client/course/basic_info/"+id)
export const getCourseOutline = (id) => ajax("/api/client/course/outline/"+id)
export const getCourseComments = (id) => ajax("/api/client/course/comment/"+id)
export const addCourseComment = (user_id, course_id, score, content) => ajax("/api/client/course/setComment", {user_id, course_id, score, content}, "post")

