import {BaseURL} from "../../config/serverConfig";


require("./index.less")

export default function FixedCard({data}) {
    return (
        <div className="fixed-contact">
            <div className="contact">

            </div>
            <div className="app">

                <div className="ewm-pane">
                    <img src={BaseURL+`${data.app}`} alt=""/>
                </div>
            </div>
            <div className="back-top">

            </div>
        </div>
    )
}