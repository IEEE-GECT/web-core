import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/blogs.css"
// import { Link } from "gatsby"

let scholarships = [
  {
    name: "IEEE Aerospace and Electronic Systems Society Engineering Scholarship",
    description:
      "This scholarship recognizes students pursuing studies in Electrical Engineering at the undergraduate level, and systems engineering at the graduate level.",
    eligibility: [
      "IEEE student members studying electrical/electronic engineering at the undergraduate level or first professional degree, and systems engineering at the graduate level",
      "Cumulative GPA of 2.8 or above",
    ],
    fund: {
      graduate: "$10,000 USD and a certificate",
      undergraduate: "Two awards of $10,000 USD each and a certificate",
    },
    more_info:
      "https://ieee-aess.org/awards/education-awards/engineering-scholarship",
  },
  {
    name: "Richaard E.Merwin Scholarship",
    description:
      "to recognize and reward active student volunteer leaders in student branches or chapters who show promise in their academic and professional efforts.",
    eligibility: "Graduate students, and those in the final two years of an undergraduate program in electrical or computer engineering, computer science, or a well-defined computer related field of engineering who are active members of a student branch or chapter are eligible.",
    frequency: "twice per year",
    fund: "US$1000",
    Criteria: "Evaluation criteria include participation in student IEEE branch/chapter activities (30%), academic achievement (30%), extracurricular activities (10%), letter of recommendation from student branch/chapter advisor (20%), and quality of Student Ambassador vision statement (10%)",
    apply:
      "https://www.computer.org/volunteering/awards/scholarships/merwin",
  },
  {
    name: "Upsilon Pi Epsilon Scholarship",
    description:
      "raise the importance of academic achievement in our future computer professionals.",
    eligibility: "All graduate and undergraduate students who are IEEE Computer Society members and full-time students at an academic institution are eligible. Student winners of the Computer Society’s Richard Merwin or UPE/CS award for the previous year (13 months) are not eligible.   ",
    frequency: "Annually",
    fund: "$1,000",
    apply:
      " https://www.computer.org/volunteering/awards/scholarships/upe-student-award",
  },
  {
    name: "Lance Stafford Larson Student Award",
    description:
      "The Larson family, which includes IEEE Past President Robert Larson, created this award to encourage students to develop excellence in their communication skills and to motivate students toward achievement in the field of Computer Science.      ",
    eligibility: "All IEEE student members. There will be one award for undergraduates and a second for graduate students.",
    frequency: "Annually",
    fund: "$500",
    apply:
      "https://www.computer.org/volunteering/awards/scholarships/larson",
  },
  {
    name: "IEEE McMurray Award for Industry Achievements in Power Electronics",
    description:
      "The IEEE McMurray Award for Industry Achievements in Power Electronics recognizes the work of engineers working in the field of power electronics, which has shown or is likely to show a major impact on the industry, and the resulting products possibly on society.",
    eligibility: "The award recipient must be an active member of IEEE. ",
    frequency: "Annually",
    fund: "$500",
    apply:
      "https://students.ieee.org/ieee-mcmurray-award-for-industry-achievements-in- power-electronics/",
  },
  {
    name: "IEEE PES India Scholarship Award { not available from 2022}",
    description:
      "Express a willingness to consider a career in power and energy engineering",
    eligibility: [
      "Working on an electrical engineering undergraduate bachelor’s degree",
      "Enrolled in a university with curricula covering power engineering subjects",
      "Takes power and energy engineering subjects as electives",
      "1st year full-time regular UG Engineering program student in Electrical Engineering",
      "Higher Secondary marks above 70%",
      "12th standard marks above 70%",
      "Valid cut off rank in IIT JEE (Main)/IIT JEE (Advanced)/state level engineering entrance examinations",
    ],
    frequency: "Annually",
    fund: {
      per_year_per_student: "Rs. 50,000 towards college and hostel fee",
      expenses:
        "Up to Rs. 25,000 towards attending seminars, conferences, etc.",
    },
    apply: "https://r10.ieee.org/ic-pes/ipisa-2/",
  },
  {
    name: "Undergraduate/Pre graduate Scholarship Program",
    description:
      "Applicant must be a BS, BS/MS or MS student in electrical engineering (or related field). The faculty mentor must be an IEEE MTT-S member.",
    frequency: "Twice a year",
    fund: "$1500 USD cash award, travel supplement, certificate",
    apply: "https://mtt.org/students/",
  },
  {
    name: "Jack Keil Wolf ISIT Student Paper Award",
    description:
      "Student, who is the principal author and presenter, must be a registered student of an educational institution at the time of paper submission.",
    frequency: "Annually",
    fund: "$500 honorarium to be divided equally between all student authors, and a plaque for each student author",
    more_info: "https://www.itsoc.org/honors/wolf-award",
  },
  {
    name: "IES Student Best Paper Award",
    description:
      "To recognize the student best paper in the Industrial Electronics Society publications or conferences, and to encourage the student or graduate student author to contribute further to the field of industrial electronics.",
    eligibility: "Must be student or graduate student member of the IEEE.",
    frequency: "Annually",
    fund: "US$2,000 and certificate, plus reimbursement for IES-approved travel expenses",
    apply:
      "https://www.ieee-ies.org/about/awards/awards-info/186-ies-student-best-paper-award",
  },
  {
    name: "Electron Devices Society Undergraduate Student Scholarship",
    description:
      "One-year fellowships awarded to promote, recognize, and support undergraduate level study and hands-on experience within the field of interest Electron Devices Society (EDS).",
    eligibility: [
      "IEEE EDS student member at the time of nomination",
      "Full-time undergraduate student in an engineering program",
      "Successfully completed an undergraduate course on microelectronic devices with passing grade",
    ],
    frequency: "Annually",
    fund: "US$1,000 and a plaque",
    apply:
      "https://eds.ieee.org/education/student-fellowships/undergraduate-student-scholarships",
  },
  {
    name: "Caixin Sun and Stanislaw Grzybowski Best Student Paper Award",
    description:
      "IEEE Caixin Sun and Stanislaw Grzybowski Best Student Paper Awards will be given at each IEEE International Conference on High Voltage Engineering and Applications (ICHVE).",
    eligibility: [
      "Full-time student (bachelor, master, PhD or equivalent)",
      "First author of the paper",
      "Present the paper at an oral / poster session of the ICHVE",
    ],
    frequency: "Biennially",
    fund: "Subsidy of 500 US$ for a maximum of 10 awards per paper",
    more_info: "https://ieeedeis.org/about/awards/",
  },
  {
    name: "IEEE Conference on Control Technology and Applications (CCTA) Best Student Paper Award",
    description:
      "To recognize excellence in a CCTA paper whose primary contributor(s) is a (are) student member(s) of the IEEE.",
    eligibility:
      "Primary contributor(s) who was a (were) student(s) at the time of original submission.",
    fund: "Certificate and travel expenses to CCTA for one recipient, certificates and free student conference registrations for finalists",
    apply: "https://ieeecss.org/awards/ccta-best-student-paper-award",
    funding: "IEEE Control Systems Society",
  },
  
  {
    name: "IEEE Broadcast Technology Society / AFCCE Jules Cohen Memorial Scholarships",
    description:
      "Scholarships of up to $10,000 to promising undergraduate and graduate students interested in a career in broadcast engineering.",
    eligibility: [
      "Undergraduate or Graduate engineering student interested in a career in broadcast engineering",
      "Undergraduate students in last or second to last year",
    ],
    fund: "Up to $10,000 for 1-3 students",
    apply: "https://bts.ieee.org/awards.html",
  },
  {
    name: "Clyde M. Hunt Memorial Award",
    description:
      "Recognizes a student paper of exceptional interest and applicability to the field of Broadcast Engineering.",
    eligibility:
      "Any student pursuing a course of study in a field related to broadcast engineering",
    fund: {
      first_prize: "$250, Certificate and trip to Annual Broadcast Symposium",
      second_prize:
        "$250, Certificate, and complimentary registration to the Annual Broadcast Symposium",
      third_prize:
        "$250, Certificate, and complimentary registration to the Annual Broadcast Symposium",
    },
    apply: "Broadcast Technology Society Website",
  },
]

function makeCard(scholarship, index) {
  return (
    <div className="scholarshipcard" key={index}>
      <div className="heading3">{scholarship.name}</div>
      {Object.entries(scholarship).map(([heading, data], dataIndex) =>
        heading !== "name" ? (
          <div className="scholorshipdataitem" key={dataIndex}>
            <div className="itemheading">{heading}</div>
            <div className="itemdata">
              {Array.isArray(data) ? (
                data.map((item, itemIndex) => (
                  <div className="listitem" key={itemIndex}>
                    {" "}
                    {item}
                  </div>
                ))
              ) : typeof data === "object" ? (
                Object.entries(data).map(([key, value], objIndex) => (
                  <div key={objIndex}>{value}</div>
                ))
              ) : typeof data === "string" && data.startsWith("http") ? (
                <a href={data} target="_blank" rel="noopener noreferrer">
                  {data}
                </a>
              ) : (
                data
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}

const Scholorships = () => (
  <Layout route="/scholorships/">
    <Seo
      title="scolorships"
      image="https://ik.imagekit.io/0ta3q23cu/blogs/tuch_display.jpg?updatedAt=1685774963438"
    />
    <div className="pagebg ">
      <h1 className="h1">Scholarships List</h1>
      <h5>IEEE, the world’s largest technical professional volunteer-led organization, has a lot of scope for IEEE Student Members to involve and get recognized. Applying for scholarships, awards and grants are one of the perks for the dedicated volunteers.
</h5>

      {scholarships.map((scholarship, index) => makeCard(scholarship, index))}
    </div>
  </Layout>
)

export default Scholorships