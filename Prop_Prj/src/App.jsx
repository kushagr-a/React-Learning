// import { Bookmark } from "lucide-react"
import { Card } from "./components/Card"


const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    posted: "5 days ago",
    title: "Senior Software",
    tags: ["Part Time", "Remote"],
    salary: "$500/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "3 days ago",
    title: "UI/UX Designer",
    tags: ["Full Time", "Remote"],
    salary: "$200/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "1 day ago",
    title: "Frontend Developer",
    tags: ["Contract", "Hybrid"],
    salary: "$150/hr",
    location: "Pune, India"
  },
  {
    id: 4,
    company: "Meta",
    logo: "data:image/png;base64,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",
    posted: "2 days ago",
    title: "Backend Engineer",
    tags: ["Full Time", "Remote"],
    salary: "$180/hr",
    location: "Delhi, India"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    posted: "6 days ago",
    title: "React Developer",
    tags: ["Part Time", "Onsite"],
    salary: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    id: 6,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    posted: "4 days ago",
    title: "Full Stack Engineer",
    tags: ["Full Time", "Hybrid"],
    salary: "$220/hr",
    location: "Chennai, India"
  }
]

const App = () => {
  return (
    <div className="Parent">
      {jobs.map(job => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  )
}

export default App
