import { Result, Button } from 'antd';
import {useRouter} from "next/router";

export default function NotFound() {
    const router = useRouter()
    return (
        <Result
            status="404"
            title="404"
            subTitle="小撩提示: 页面不存在!"
            extra={<Button type="primary" onClick={() => {
                router.replace("/")
            }}>返回首页</Button>}
        />
    )
}