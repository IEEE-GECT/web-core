import * as React from "react"
import { Member } from "../components/member.component"
let core_members = [
  {
    name: "Ashwin P Joby",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Ashwin_P_Joby_?updatedAt=1681400998493",
    position: "Chairperson",
  },
  {
    name: "Swathy M",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Swathy_M.JPG?updatedAt=1681401013239",
    position: "Secretary",
  },
  {
    name: "Chaithanya M C",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Chaithanya.M.C.jpg?updatedAt=1681400983846",
    position: "MDC",
  },
  {
    name: "Akhil T",
    img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Aravind_p_OlbxMp-L.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652256708532",
    position: "ECC",
  },
  {
    name: "Akhil Naseem",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Aquil_Naseem.jpg?updatedAt=1681400991519",
    position: "Treasurer",
  },
  {
    name: "Haseena Beegam H",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Haseena_Beegam_H_.jpg?updatedAt=1681400995164",
    position: "Vice Chairperson",
  },
  {
    name: "Anena Samrin",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Anena_Samrin.JPG?updatedAt=1681401003309",
    position: "Joint Secretary",
  },
  {
    name: "Ashwal Shaji",
    img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABHINAV_RAJ_VICE_CHAIR_PES_PCc33b_sC.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549399042",
    position: "Photography Lead",
  },
  {
    name: "Abhiram R",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Abhiram_R.jpg?updatedAt=1681401009443",
    position: "Joint treasurer",
  },
  {
    name: "Ben A Sabu",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Ben_A_Sabu_.jpg?updatedAt=1681401006478",
    position: "Webmaster",
  },
  {
    name: "Sreejith K S",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Sreejith_KS.jpg?updatedAt=1681401019893",
    position: "Webmaster",
  },
  {
    name: "Anjitha J",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Anjitha_J_.jpg?updatedAt=1681401015317",
    position: "Webteam",
  },
  {
    name: "Anurag C K",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/ANURAG_C_K.jpg?updatedAt=1681401019312",
    position: "Webteam",
  },
  {
    name: "Bhadra Nair",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Bhadra_Nair.jpg?updatedAt=1681400989982",
    position: "Editor",
  },
  {
    name: "Devika K Lyju",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Devika_K_Lyju.jpg.jpg?updatedAt=1681400985252",
    position: "Social Media Head",
  },
  {
    name: "Andria Angel",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Andria_Angel.jpg?updatedAt=1681400999935",
    position: "LINK Representative",
  },
  {
    name: "Abu Ayman",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/abooo.jpg?updatedAt=1681400991973",
    position: "SIGHT Lead",
  },
  {
    name: "Sreeraj V R",
    img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/SREERAJ_VR.jpg?updatedAt=1681401002840",
    position: "Technical Coordinator",
  },
]
let societies = [
  {
    soc_name: "Power & Energy Society",
    members: [
      {
        name: "Anupriya Krishnakumar",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Anupriya_Krishnakumar.JPG?updatedAt=1681401011728",
        position: "Chairperson",
      },
      {
        name: "K Abhishek",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Abishek.JPG?updatedAt=1681401002499",
        position: "Secretary",
      },
      {
        name: "Vaishnavi B",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/VAISHNAVI_B.jpg?updatedAt=1681400995650",
        position: "WiP",
      },
    ],
  },
  {
    soc_name: "Technology and Engineering Management Soceity",
    members: [
      {
        name: "Ann Susan Thomas",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Ann_Susan_Thomas.JPG?updatedAt=1681401002065",
        position: "Chairperson",
      },
      {
        name: "Anena Samrin",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Anena_Samrin.JPG?updatedAt=1681401003309",
        position: "Secretary",
      },
    ],
  },
  {
    soc_name: "Computer Soceity",
    members: [
      {
        name: "Haseena Beegam H",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Haseena_Beegam_H_.jpg?updatedAt=1681400995164",
        position: "Chairperson",
      },

      {
        name: "Sneha Sara Elias",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Sneha_Sara_Elias.jpg?updatedAt=1681400989641",
        position: "Secretary",
      },
      {
        name: "Anjana P R",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Anjana_P_R.jpg?updatedAt=1681400996477",
        position: "WiC",
      },
    ],
  },
  {
    soc_name: "Communication Society",
    members: [
      {
        name: "Adithya Anil",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Adithya_Anil.jpg?updatedAt=1681400985903",
        position: "Chairperson",
      },
      {
        name: "Bhadra Nair",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Bhadra_Nair.jpg?updatedAt=1681400989982",
        position: "Secretary",
      },
      {
        name: "Nithya K",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Nithya_K.jpg?updatedAt=1681400999603",
        position: "WiCE",
      },
    ],
  },
  {
    soc_name: "Signal Processing Society",
    members: [
      {
        name: "Alan Nelson",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Alan_Nelson.jpg?updatedAt=1681400984488",
        position: "Chairperson",
      },
      {
        name: "Pavithra S",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Pavithra_S.jpg?updatedAt=1681400996685",
        position: "Secretary",
      },
    ],
  },
  {
    soc_name: "Power Electronics Society",
    members: [
      {
        name: "Amalkrishna S",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Amalkrishna_s.jpg?updatedAt=1681400994283",
        position: "Chairperson",
      },
      {
        name: "Dhanya Sivadas M M",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Dhanya_Sivadas_M_M.jpg?updatedAt=1681400991138",
        position: "Secretary",
      },
    ],
  },
  {
    soc_name: "Industry Applications Society",
    members: [
      {
        name: "Kevin Shibu",
        img: " https://ik.imagekit.io/nm1ondc9y/Kevin_Shibu.jpg?updatedAt=1685107592824",
        position: "Chairperson",
      },
      {
        name: "Adwaitha M R",
        img: "https://ik.imagekit.io/nm1ondc9y/Adwaitha_M_R.jpg?updatedAt=1685107593067",
        position: "Secretary",
      },
    ],
  },
  {
    soc_name: "Robotics and Automation Society",
    members: [
      {
        name: "Franklin Francis",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Franklin_Francis.jpg?updatedAt=1681401004396",
        position: "Chairperson",
      },
      {
        name: "Adhil Saeem",
        img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABU_AYMAN_SEC_ROBOTICS_AND_AUTOMATION_n5Z_qXJtx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549423640",
        position: "Secretary",
      },
    ],
  },
  {
    soc_name: "Women In Engineering",
    members: [
      {
        name: "Gopika Pulikalath",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Gopika_Pulikunnath.jpg?updatedAt=1681400976219",
        position: "Chairperson",
      },

      {
        name: "Chaithanya M C",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Chaithanya.M.C.jpg?updatedAt=1681400983846",
        position: "Vice Chairperson",
      },

      {
        name: "Noorjahan K P",
        img: "https://ik.imagekit.io/0ta3q23cu/EXECOM_Members/Noorjahan_K_P.jpg?updatedAt=1681400998859",
        position: "Secretary",
      },
    ],
  },
]

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            EXECUTIVE COMMITTEE
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{" "}
          our talented team of young professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Meet the very versatile and dynamic Executive Committee Team of IEEE
          SB GECT for the year 2023- 2024
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        {core_members.map(m => {
          return (
            <Member
              memberName={m.name}
              imageLink={m.img}
              memberPos={m.position}
            />
          )
        })}
      </div>

      <div>
        {societies.map(society => {
          return (
            <>
              <hr className="mb-6 mt-4"></hr>
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xl font-normal tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  {society.soc_name}
                </p>
              </div>
              <div className="my-4"></div>
              <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                {society.members.map(mem => {
                  return (
                    <Member
                      memberName={mem.name}
                      imageLink={mem.img}
                      memberPos={mem.position}
                    />
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Team
