/* eslint-disable react/prop-types */
import { Bookmark } from "lucide-react"

export const Card = ({job}) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={job.logo} alt="" />
                    <button >Save <Bookmark size={13} /></button>
                </div>
                <div className="center">
                    <h3>{job.company} <span> {job.posted} </span></h3>
                    <h2>{job.title} </h2>
                    <div className="tag">
                        <h4>{job.tags[0]}</h4>
                        <h4>{job.tags[1]}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{job.salary}</h3>
                    <p>{job.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}
