import { Result, Button } from 'antd';
import {useRouter} from "next/router";

export default function ServerError() {
    const router = useRouter()
    return (
        <Result
            status="500"
            title="500"
            subTitle="不好意思, 页面出现一点点错误!"
            extra={<Button type="primary" onClick={()=>{
                router.replace("/")
            }}>返回首页</Button>}
        />
    )
}