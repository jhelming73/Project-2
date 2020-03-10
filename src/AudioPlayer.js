import React from 'react'
import sound from './ChuckTheme.mp3'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src={sound} controls autoPlay />
      </div>
    );
  }
}

export default AudioPlayer;
