import React from 'react'

class MiniFrame extends React.Component {

  state={
    mouseOver: false
  }

  componentDidMount() {
    this.renderMiniFrame()
  }

  componentDidUpdate() {
    this.renderMiniFrame()
  }

  renderMiniFrame = () => {
    const {frame} = this.props;
    const pixelsTall = frame.length; const pixelsAcross = frame[0].length
    const canvas = this.refs.canvas; 
    const ctx = canvas.getContext("2d"); 
    const width = canvas.width; 
    const blockSize = width/frame[0].length;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, width, width);

    for(let y = 0; y < pixelsTall; y++){
      for(let x = 0; x < pixelsAcross; x++){
        ctx.fillStyle=frame[y][x];
        ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
      }
    }

    // console.log(`${this.props.frameNumber+1}`)
    ctx.font = "96px Press Start 2P";
    ctx.fillStyle = "black";
    // ctx.textAlign = "center";
    ctx.fillText(`${this.props.frameNumber+1}.`, 0, canvas.height);
    
    if (this.state.mouseOver) {
      this.drawCross(ctx, canvas)
      this.drawDuplicate(ctx, canvas)
    }
  }

  drawCross (ctx, canvas) {
    ctx.beginPath(); ctx.moveTo(canvas.width-canvas.width/50, canvas.width/50); ctx.lineTo(canvas.width-5*canvas.width/50, 5*canvas.width/50);
      ctx.moveTo(canvas.width-5*canvas.width/50, canvas.width/50); ctx.lineTo(canvas.width-canvas.width/50, 5*canvas.width/50);
      ctx.moveTo(canvas.width-7*canvas.width/50, 0); ctx.lineTo(canvas.width-7*canvas.width/50, 7*canvas.width/50);
      ctx.moveTo(canvas.width, 7*canvas.width/50); ctx.lineTo(canvas.width-7*canvas.width/50, 7*canvas.width/50);
      ctx.closePath(); ctx.stroke()
  }

  drawDuplicate () {

  }

  handleClick = e => {
    const canvas = this.refs.canvas; 
    const rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; let y = e.clientY - rect.top;
    if (x >= canvas.width-7*canvas.width/50 && y <= 7*canvas.width/50) this.props.deleteFrame(this.props.frameNumber) 
    else this.props.changeFrame(this.props.frameNumber)
  }

  handleMouseOver = () => {
    this.setState({mouseOver: true})
    this.renderMiniFrame()
  }

  handleMouseOut = () => {
    this.setState({mouseOver: false})
    this.renderMiniFrame()
  }

  render() {
    return(
      <div id='miniFrame'>
        <canvas 
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          style={this.props.frameNumber === this.props.selectedFrameNum ? {border: '2px solid white', boxShadow: `6px 6px 5px grey`} : null }
          id='miniCanvas' 
          onClick={e => this.handleClick(e)} 
          ref="canvas" 
          width={160} 
          height={100} />
      </div>
    )
  }
}
export default MiniFrame