import FlexLayout from "../../layout/flexLayout";

require("./index.less")

export default function SectionContainer({title, moreText, moreHref, children}) {
    return (
        <div className="section bx">
            <div className="title-bar">
                <h5 className="title">{title}</h5>
                <a href={moreHref} className="more">{moreText}&gt;</a>
            </div>
            <FlexLayout>
                {children}
            </FlexLayout>
        </div>
    )
}