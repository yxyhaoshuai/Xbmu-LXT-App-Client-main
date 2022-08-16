import 'antd/dist/antd.less'
import '../styles/base.css'
import MainLayout from "../layout/mainLayout";

// import App from 'next/app'
// import axios from "axios";

// {Component, pageProps, configData}
function MyApp({Component, pageProps}) {
    // console.log("--------", configData)
    // console.log("--------", configData)
    return <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
}

// MyApp.getInitialProps = async (appContext) => {
//   console.log("----App数据获取被执行了")
//   const appProps = await App.getInitialProps(appContext);
//
//   let configData = (await axios.get("http://localhost:5000/api/client/home/web_config")).data.data
//
//   // let myData = {
//   //     name: "sz",
//   //     age: 18
//   // }
//
//   return { ...appProps, configData }
// }

export default MyApp
