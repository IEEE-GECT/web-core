import * as React from "react"

export const Team = () => {
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
          SB GECT for the year 2021- 2022
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/yohan_25WV6i0-o2.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Yohan Sunil Tharakan</p>
            <p className="text-sm text-gray-800">Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/leah_x3bCw2OTQ.jpg?tr=w-1080,h-1920,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Leah Liz Paul</p>
            <p className="text-sm text-gray-800">Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/fathima_zTyiBI4EQ.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Fathima Shirin</p>
            <p className="text-sm text-gray-800">Treasurer</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/paul_czTJ4J6L7.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Paul B Kalarikkal</p>
            <p className="text-sm text-gray-800">Vice Chair, PES Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/ananya_Y2HU2d4fL.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Ananya M</p>
            <p className="text-sm text-gray-800">
              Joint Secretary, PES Secretary
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/20210204_175423_-_Amrutha_T_D_aa9gDGj-J.jpg?tr=w-1080,h-1080,fo-custom"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Amrutha T D</p>
            <p className="text-sm text-gray-800">Joint Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/neha_1gmziapg1.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Neha Susan Manoj</p>
            <p className="text-sm text-gray-800">Joint Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/abhijith_x_LXolGMN.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Abhijith V</p>
            <p className="text-sm text-gray-800">ECC & PR Head</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/arya_WVzjw97ZZ.jpg?tr=w-1080,h-1350,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Arya Ramachandran</p>
            <p className="text-sm text-gray-800">MD Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/maria_wZYatfccj.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Maria Viji George</p>
            <p className="text-sm text-gray-800">MD Vice Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/hazrath_jupQa3U9b.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Hazrath Rahman</p>
            <p className="text-sm text-gray-800">Joint Treasurer</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/aathira_dFQPKJmFy.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Aathiragouri S</p>
            <p className="text-sm text-gray-800">Editor</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/roshan_hjnh3CMD7.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Roshan Silvester Lopez</p>
            <p className="text-sm text-gray-800">Social Media Head</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/dennis_qQptZ4WsyL.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Denni Mathew Jose</p>
            <p className="text-sm text-gray-800">LINK Representative</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/malayil_orkTkOeah.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Malayil Vivekanandan</p>
            <p className="text-sm text-gray-800">Chief Webmaster</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/DSC_0202_-_Melvin_M_Thomas_DMTX_pj6p.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Melvin Thomas</p>
            <p className="text-sm text-gray-800">Photography Lead</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/Sai_Anand_-_Sai_Anand_e-4I8lTny.jpg"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Sai Anand</p>
            <p className="text-sm text-gray-800">PES Vice Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG-20201025-WA0024-01_-_Aswin_Rajesh__mURgUYfTi.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Ashwin Rajesh</p>
            <p className="text-sm text-gray-800">RAS Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/photo_-_Sreehari_Bijikumar__GHlOMioy.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Sreehari B</p>
            <p className="text-sm text-gray-800">RAS Vice Chair</p>
          </div>
        </div>

        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/vinayak_L2wDMfgr_J.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Vinayak Sankar</p>
            <p className="text-sm text-gray-800">RAS Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/ajmal_-_Mohammed_Ajmal_uq53aLd3mg.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Mohammed Ajmal</p>
            <p className="text-sm text-gray-800">PELS Chairman</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20210129_183150_214_-_Divyasree_V_7UvuEeFJI.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Divyasree V</p>
            <p className="text-sm text-gray-800">PELS Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG-20181114-WA0095_3-01-01_-_Krishnanand_V_P_gKOY4e2Mx.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Krishnanandh V P</p>
            <p className="text-sm text-gray-800">CS Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20200531_124312_-_22_Praveena_M_Das_fSyWFeUSLt.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Praveena M Das</p>
            <p className="text-sm text-gray-800">CS Vice Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/20201030_233712_-_Niranjan_Neelakantan_AqffCCKW67.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Niranjan Neelakantan </p>
            <p className="text-sm text-gray-800">CS Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20210205_094953_-_Abijith_T_V_Do0v9UY1P.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Abhijith T V</p>
            <p className="text-sm text-gray-800">IAS Secretary</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/biline_UTkL1V0b3.PNG?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Biline K C</p>
            <p className="text-sm text-gray-800">WIE Chairman</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20200915_180940_387_-_NEHA_SUSAN_MANOJ_cQweEFs-u.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Neha Susan Manoj</p>
            <p className="text-sm text-gray-800">WIE Vice Chair</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20210514_180345_tPVy0lf0s.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Rishika Raveendran</p>
            <p className="text-sm text-gray-800">WIE Secretary</p>
          </div>
        </div>
      </div>
      <div className="my-10"></div>
      <hr></hr>
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Webmasters
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/malayil_orkTkOeah.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Malayil Vivekanandan</p>
          </div>
        </div>

        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG-20200217-WA0081-01_-_Abil_Savio_hj2ZwHnczh.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Abil Savio</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20210204_154656_-_Dennis_Mathew_Jose_1p3dI-5Zni.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Denni Mathew Jose</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/gokul_fRdnMOWX8.jpeg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Gokul P Dinesh</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://ik.imagekit.io/ieeeGec/IMG_20210514_180345_tPVy0lf0s.jpg?tr=w-1080,h-1080,fo-auto"
            alt="Person"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-medium font-bold">Rishika Raveendran</p>
          </div>
        </div>
      </div>
    </div>
  )
}
