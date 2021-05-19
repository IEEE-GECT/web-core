import * as React from 'react'

const CardOne = () => {
    return (
        <div class="p-10">  
        
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://www.whatdigitalcamera.com/wp-content/uploads/sites/13/2014/09/Samsung_WB350F_sample_image_4-300x400.jpg" alt="Mountain"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            </div>
      </div>
    )
}

export default CardOne