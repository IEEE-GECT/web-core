import * as React from 'react';
// import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

import CoverflowEffect from '../components/slider.component';
import { Content } from '../components/tems.component';

const IndexPage = () => (
	<Layout route="/">
		<Seo title="" />
		<div className="relative -mt-20" style={{ height: `calc(90vh - 90px)` }}>
			<StaticImage
				src="../images/group.jpg"
				quality={100}
				placeholder="blurred"
				formats={[ 'AUTO', 'WEBP', 'AVIF' ]}
				alt="cover"
				className="inset-0"
				style={{ position: 'absolute' }}
			/>
			<div className="bg-black opacity-40 absolute inset-0" />
			<div className="absolute h-full w-full text-white flex items-center justify-center">
				<h1 className="text-3xl sm:text-6xl font-bold">IEEE Student Branch GEC Thrissur</h1>
			</div>
		</div>

		<div className="pt-10 pb-5 px-2 sm:px-10">
			<div className="rounded-lg shadow-2xl glass-effect">
				<Content />
			</div>
		</div>

		{/* <CoverflowEffect /> */}

		<div className="pt-5 pb-10 px-2 sm:px-10">
			<div className="rounded-lg shadow-2xl glass-effect">
				<section class="text-gray-600 body-font">
					<div class="container px-5 py-24 mx-auto flex flex-wrap">
						<div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
							<div class="w-full sm:p-4 px-4 mb-6">
								<h1 class="title-font font-medium text-3xl mb-2 text-gray-900">About Us</h1>
								<div class="leading-relaxed text-justify text-medium">
								Ever since it's inception,the IEEE SB GECT has always been a very active presence in the institution. Being the very first technical society student branch of the institution, the SB has played a very vital and crucial role in the development of research and technology in the institution. The SB has evolved into being accommodative of all fields of interests apart from science and technology. As amazing as it's past,the SB continues to be one of the top tier SBs of the IEEE Kerala Section, courtesy to it's consistently top-notch activities!!
								</div>
							</div>
							<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
								<h2 class="title-font font-medium text-3xl text-gray-900">215</h2>
								<p class="leading-relaxed">Active Members</p>
							</div>
							<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
								<h2 class="title-font font-medium text-3xl text-gray-900">8</h2>
								<p class="leading-relaxed">Societies</p>
							</div>
							<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
								<h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
								<p class="leading-relaxed">Awards</p>
							</div>
							<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
								<h2 class="title-font font-medium text-3xl text-gray-900">200+</h2>
								<p class="leading-relaxed">Events</p>
							</div>
						</div>
						<div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
							<img
								class="object-cover object-center w-full h-full"
								src="https://dummyimage.com/600x300"
								alt="stats"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div className="pt-5 pb-10 px-2 sm:px-10">
			<div className="rounded-lg shadow-2xl glass-effect">
				<div class="text-gray-600 body-font">
					<div class="container px-5 py-24 mx-auto flex flex-wrap">
						<h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
							Mission
						</h2>
						<div class="md:w-3/5 md:pl-6">
							<p class="leading-relaxed text-base">
								Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar
								toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled
								squid meh taiyaki drinking vinegar tacos.
							</p>
							{/* <div class="flex md:mt-4 mt-6">
								<button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
									Button
								</button>
								<a class="text-indigo-500 inline-flex items-center ml-4">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</a>
							</div> */}
						</div>
					</div>
				</div>

        <div class="text-gray-600 body-font">
					<div class="container px-5 py-24 mx-auto flex flex-wrap">
						<h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
							Vision
						</h2>
						<div class="md:w-3/5 md:pl-6 mb-2.5">
							<p class="leading-relaxed text-base">
								Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar
								toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled
								squid meh taiyaki drinking vinegar tacos.
							</p>
							{/* <div class="flex md:mt-4 mt-6">
								<button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
									Button
								</button>
								<a class="text-indigo-500 inline-flex items-center ml-4">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</a>
							</div> */}
						</div>
					</div>
				</div>

			</div>
		</div>
	</Layout>
);

export default IndexPage;
