import React from 'react';
import MiniFrames from './MiniFrames';

const FrameSelector = props => {

  const onFrameChange = num => {props.changeFrame(num)}

  return(
    <div className='FrameSelector'>
      <div>
        <button 
          style={{visibility: !props.previewMode ? 'visible' : 'hidden' }}
          onClick={() => onFrameChange('prev')}>{props.isFirstFrame ? '<=' : '<='}
        </button>
        <button 
          style={{visibility: !props.previewMode ? 'visible' : 'hidden' }} 
          onClick={() => onFrameChange('next')}>{props.isLastFrame ? '=>' : '=>'}
        </button>
      </div>
      <div>
      <button onClick={() => props.togglePreviewMode()}>preview mode: {props.previewMode ? 'on' : 'off'}</button>
      <br/>
      <label>Preview speed:</label>
      <input id="framerateSlider" type="range" name="framerate" min="1" max="24" value={props.previewRate} onChange={e => props.changePreviewRate(e.target.value)} step='1'></input>
      {props.previewRate}fps
      </div>
      <MiniFrames addBlankFrame={() => props.addBlankFrame()} frameNum={props.frameNum} changeFrame={i => props.changeFrame(i)} frames={props.frames}/>
    </div>
  )
}

export default FrameSelector