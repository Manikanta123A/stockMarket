import React from 'react';
function VideoScreen({Source}) {
    return ( <>
     <iframe width="100%" className='mt-5 pt-5 mb-3 pb-3' height="400" src={`https://www.youtube.com/embed/${Source}` }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </> );
}

export default VideoScreen;