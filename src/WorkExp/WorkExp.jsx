import React from 'react'
import ReactPlayer from 'react-player'
import './WorkExp.css'

const WorkExp = () => {
      return (
        <div className='player'>
          <section id="WorkExp">
            <div className='player-wrapper'>
              <ReactPlayer
                url="https://dianne-adair-s3.s3-us-west-1.amazonaws.com/Videos/DianneAdair.mp4"
                width='35%'
                height='35%'
                controls={true}
              />
              <ReactPlayer
                url="https://dianne-adair-s3.s3-us-west-1.amazonaws.com/Videos/MikeWadeVO.mp4"
                width='35%'
                height='36%'
                controls={true}
              />
            </div>
              <div className='player-links-wrapper'>
                <div className='player-DAlink'>
                  <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://dianneadair.org">
                    DianneAdair.Org
                  </a>
                </div>
              <div className="player-LongArrow">
                </div>
                  <div className='player-MVlink'>
                    <a
                      target='_blank'
                      rel="noopener noreferrer"
                      href='https://mikewadevo.com'>
                      MikeWadeVo.Com
                    </a>
                  </div>
                </div>
              <div className="player-shift">
                <ReactPlayer
                  url="https://dianne-adair-s3.s3-us-west-1.amazonaws.com/Videos/shiftradr.mp4"
                  width='32%'
                  height='32%'
                  controls={true}
                />
              </div>
              <div className='player-Shift-link'>
                <a
                  target='_blank'
                  rel="noopener noreferrer"
                  href="https://shiftradr.com">
                  shiftradr.com
                </a>
              </div>
          </section>
        </div>
      )
    }

    export default WorkExp