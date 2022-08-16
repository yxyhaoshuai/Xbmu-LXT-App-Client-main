
require("./index.less")

export default function FlexLayout({children}) {

    return (
        <div className="flex-container">
            {children}
        </div>
    )
}