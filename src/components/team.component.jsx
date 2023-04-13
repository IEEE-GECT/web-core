import * as React from "react"
import { Member } from "./member.component"

export const Team = () => {
  let core_members = [
    {
      name: "Ashwin P Joby",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Dennis_Mathew_Jose_HVn2rEZKdzNf.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1646549668325",
      position: "Chairperson",
    },
    {
      name: "Swathy M",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Ananya_M_-_Secretary_KcKUdTkXmKtf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549430444",
      position: "Secretary",
    },
    {
      name: "Chaithanya M C",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/VISHNUPRIYA_MD_CHAIR_ITJKN1AER.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549551440",
      position: "MDC",
    },
    {
      name: "Akhil T",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Aravind_p_OlbxMp-L.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652256708532",
      position: "ECC",
    },
    {
      name: "Akhil Naseem",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NANDANA_TREASURER_URQbinwlm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549598820",
      position: "Treasurer",
    },
    {
      name: "Haseena Beegam H",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NEHA_SUSAN_VICE_CHAIR_CS_CHAIR_muQlw8Av5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549518975",
      position: "Vice Chairperson",
    },
    {
      name: "Anena Samrin",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABHINAV_RAJ_VICE_CHAIR_PES_PCc33b_sC.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549399042",
      position: "Joint Secretary,Photography Lead",
    },
    {
      name: "Ashwal Shaji",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABHINAV_RAJ_VICE_CHAIR_PES_PCc33b_sC.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549399042",
      position: "Photography Lead",
    },
    {
      name: "Abhiram R",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Malayil_Vivekanandan_Joint_Treasurer__Tech_Team_Lead_n1J3N1ZaB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549518950",
      position: "Joint treasurer",
    },
    {
      name: "Ben A Sabu",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/AMAL_RAMESH_WEBMASTER_bDWCz7IAj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549392592",
      position: "Webmaster",
    },
    {
      name: "Sreejith K S",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NAVNEETH_VARIAR_WEBMASTER_tSoSRFH6-unO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549524753",
      position: "Webmaster",
    },
    {
      name: "Anjitha J",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NAVNEETH_VARIAR_WEBMASTER_tSoSRFH6-unO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549524753",
      position: "Webteam",
    },
    {
      name: "Anurag C K",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NAVNEETH_VARIAR_WEBMASTER_tSoSRFH6-unO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549524753",
      position: "Webteam",
    },
    {
      name: "Bhadra Nair",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/SNEHA_C_EDITOR_G3q2R_fGR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549532217",
      position: "Editor",
    },
    {
      name: "Devika K Lyju",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/HADHI_AMEEN_Social_Media_Lead_KoS1kxyYh.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549587188",
      position: "Social Media Head",
    },
    {
      name: "Andria Angel",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/MUBEENA_K_P_Link_Rep_jtIeorE8S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549553048",
      position: "LINK Representative",
    },
    {
      name: "Abu Ayman",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/BASTIN_BABU_SIGHT_COLEAD_osGvkCFfW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549425267",
      position: "SIGHT Lead",
    },
    {
      name: "Sreeraj V R",
      img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABDULLAH_RISHAD_TECH_TEAM_COLEAD_ia-zRl3X7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549377338",
      position: "Technical Coordinator",
    },
  ]

  let societies = [
    {
      soc_name: "Power & Energy Society",
      members: [
        {
          name: "Anupriya Krishnakumar",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NAVANEETH_M_PES_CHAIR_SaeC8Hj5P5Xg.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549368643",
          position: "Chairperson",
        },
        {
          name: "K Abhishek",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/C_A_Lakshmi_-_Secretary_PES_1aw4Z6boxb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549405014",
          position: "Secretary",
        },
        {
          name: "Vaishnavi B",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/DEVIKA_K_LYJU_WIP_REP_OF_PES_inSlRqrK0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549667288",
          position: "WiP",
        },
      ],
    },
    {
      soc_name: "Technology and Engineering Management Soceity",
      members: [
        {
          name: "Ann Susan Thomas",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ANUSHREE_P_TEMS_CHAIR_cpgSZcvNp.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1646549662192",
          position: "Chairperson",
        },
        {
          name: "Anena Samrin",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/AIDA_NAZRIN_SEC_TEMS_YEdWppGGuhfo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549382069",
          position: "Secretary",
        },
      ],
    },
    {
      soc_name: "Computer Soceity",
      members: [
        {
          name: "Haseena Beegam H",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NEHA_SUSAN_VICE_CHAIR_CS_CHAIR_muQlw8Av5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549518975",
          position: "Chairperson",
        },

        {
          name: "Sneha Sara Elias",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ATHIRA_I357nLYYx?ik-sdk-version=javascript-1.4.3&updatedAt=1651403589548",
          position: "Secretary",
        },
        {
          name: "Anjana P R",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/photo_2022-05-01_20-09-15_lP9j48DbKJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651416497298",
          position: "WiC",
        },
      ],
    },
    {
      soc_name: "Communication Society",
      members: [
        {
          name: "Adhithya Anil",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Thenha_Chair_Comm_Society_GdPisK8b6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549709134",
          position: "Chairperson",
        },
        {
          name: "Bhadra Nair",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ABHINAV_M_R_SECRETARY_MbAGbHFKB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549407852",
          position: "Secretary",
        },
        {
          name: "Nithya K",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ANJU_ANN_JOHN_WICE_COORDINATOR_Sj7KhOgt-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549474099",
          position: "WiCE",
        },
      ],
    },
    {
      soc_name: "Signal Processing Society",
      members: [
        {
          name: "Alan Nelson",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/NEHA_K_BINEESH_CHAIR_SPS_w7d0cw8hQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549704491",
          position: "Chairperson",
        },
        {
          name: "Pavithra S",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Ashwin_P_Joby_secretary_of_sps_GhMHH0M6Y.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549404090",
          position: "Secretary",
        },
      ],
    },
    {
      soc_name: "Power Electronics Society",
      members: [
        {
          name: "Amalkrishna S",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/GOVIND_S_L_CHAIR_PELS_TX_dWENbY-UP.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1646549726048",
          position: "Chairperson",
        },
        {
          name: "Dhanya Sivadas M M",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Rahmath_T_A_-_PELS_Secretary_A3UkE9-AdiPl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549589436",
          position: "Secretary",
        },
      ],
    },
    {
      soc_name: "Industry Applications Society",
      members: [
        {
          name: "Kevin Shibu",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/Sruthy_S_Nair_-_Chair_IAS_vsvJ4SWwD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549561901",
          position: "Chairperson",
        },
        {
          name: "Adwaitha M R",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/PRANAV_BABU_SECRETARY_IAS_dWsx6ik92.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549530335",
          position: "Secretary",
        },
      ],
    },
    {
      soc_name: "Robotics and Automation Society",
      members: [
        {
          name: "Franklin",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/ADETHYA_CHAIR_RAS_I3GNbqsOHA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549377273",
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
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/LIYA_K_K_CHAIR_WIE_QUqCGGuj4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549537675",
          position: "Chairperson",
        },

        {
          name: "Chaithanya M C",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/EASWARI_M_VICE_CHAIR_OF_WIE_Rw85Y_zQ_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549596584",
          position: "Vice Chairperson",
        },

        {
          name: "Noorjahan K P",
          img: "https://ik.imagekit.io/fnsxnpbnzvj/IEEE_EXECOM/SWEDA_DINESH_WIE_SEC_pZ3hpYeR1uix.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646549536020",
          position: "Secretary",
        },
      ],
    },
  ]

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
          SB GECT for the year 2022- 2023
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
