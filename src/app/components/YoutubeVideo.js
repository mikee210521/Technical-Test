'use client';
import React from 'react';
import YouTube from 'react-youtube';



export default class YoutubeVideo extends React.Component{
    render() {
        const onReady = event => {
            event.target.playVideoAt(50);
        }


        const opts = {
            height: '350',
            width: '520',
            playerVars: {
                autoplay: 1,
            }
        }

        const {videoId} = this.props;
        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
            />
        )
    }
}