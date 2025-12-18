import "./mongodb.scss";
import caseStudies from "./mongodb-case-studies";

const caseStudy = ({title, description, url, icon}) => {
    return (
        <>
            <div className="line-break"></div>
            <div class="content">
                <img src={icon} width={42} height={42}/>
                <div class="content-text">
                    <p className="description">{description}</p>
                    <a className="title" href={url} target="_blank">{title}</a>
                </div>
            </div>
        </>
    )
}

export default function MongoDb() {
    return (
        <div className="mongodb">
        <div className="section">
            
            {caseStudies.map((cs) => (
                <>
                {caseStudy({title: cs.title, description: cs.description, url: cs.url, icon: cs.icon})}
                </>
            ))}
        </div>
      </div>
    )
}