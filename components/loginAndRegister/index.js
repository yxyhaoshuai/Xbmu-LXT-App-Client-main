import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {message} from "antd";
import {isLogin, login, register, saveUser} from "../../api/userApi";
import {useRouter} from "next/router";

require("./index.less")

export default function LoginAndRegister() {

    const [current, setCurrent] = useState(0)
    const router = useRouter()

    const r_account = useRef()
    const r_pwd = useRef()
    const r_r_pwd = useRef()

    const l_account = useRef()
    const l_pwd = useRef()

    useEffect(() => {
        isLogin().then(result=>{
            if (result) {
                router.replace("/")
            }
        })
    }, [])




    const _handlerLogin = (evt) => {
        evt.preventDefault()
        let account = l_account.current.value;
        let password = l_pwd.current.value;

        if (account.trim().length > 0 && password.trim().length > 0) {
            login(account.trim(), password.trim()).then(result => {
                console.log(result)
                if (result.data.id === -1) {
                    message.error("账号或者密码错误, 请重新输入")
                } else {
                    // console.log("登录成功")
                    // 保存用户信息
                    saveUser(result.data)
                    message.success("登录成功!")
                    // 跳转到用户想要跳转的目标页
                    let {dest_url = "/"} = router.query
                    router.replace(dest_url)
                }
            })
        } else {
            message.warn("请检查账号和密码是否符合规则")
        }

    }

    const _handlerRegister = (evt) => {
        evt.preventDefault()
        let accountV = r_account.current.value;
        let pwdV = r_pwd.current.value;
        let r_pwdV = r_r_pwd.current.value;

        if (pwdV !== r_pwdV) {
            message.warn("请检查密码和确认密码")
            return;
        }

        // 网络请求, 注册账号
        register(accountV, pwdV).then(result => {
            if (result.code === 0) {
                message.success("注册成功!")
                // 成功之后的处理逻辑
                setCurrent(0)
            } else {
                message.error("注册失败, 请更换用户名重试")
            }
        })

    }


    return (
        <div className='lr-mask show'>
            <div className="lr-pane">
                {/*<span className="close iconfont icon-icon_close" onClick={() => {*/}
                {/*    setShow(false)*/}
                {/*}}/>*/}
                <ul className="tabs">
                    {["账号登录", "立即注册"].map((item, idx) => {
                        return <li key={idx} className={idx === current ? "current" : ""} onClick={() => {
                            setCurrent(idx)
                        }}>{item}</li>
                    })}
                </ul>
                <ul className="panes">
                    <li className={current === 0 ? "current" : ""}>
                        <form onSubmit={_handlerLogin}>
                            <label>
                                <span className="iconfont icon-yonghu"/>
                                <input ref={l_account} name="account" type="text" placeholder="请输入账号"/>
                            </label>

                            <label>
                                <span className="iconfont icon-mima1"/>
                                <input ref={l_pwd} name="pwd" type="password" placeholder="请输入密码"/>
                            </label>

                            <input className="btn" type="submit" value="立即登录"/>

                        </form>
                    </li>
                    <li className={current === 1 ? "current" : ""}>

                        <form onSubmit={_handlerRegister}>
                            <label>
                                <span className="iconfont icon-yonghu"/>
                                <input ref={r_account} name="account" type="text" placeholder="请输入账号"/>
                            </label>

                            <label>
                                <span className="iconfont icon-mima1"/>
                                <input ref={r_pwd} name="pwd" type="text" placeholder="请输入密码"/>
                            </label>

                            <label>
                                <span className="iconfont icon-querenmima"/>
                                <input ref={r_r_pwd} name="r_pwd" type="text" placeholder="请再次输入密码"/>
                            </label>

                            <input className="btn" type="submit" value="立即注册"/>

                        </form>


                    </li>
                </ul>
            </div>
        </div>
    )
}