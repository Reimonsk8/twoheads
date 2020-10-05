import React from 'react'
import './TwoHeadsHeader.css'
import {Segment, Header} from 'semantic-ui-react'

//segment glitch background
const TwoHeadsHeader = ({name}) => {
    return(
      <Segment id="background" basic inverted padded='very'vertical>
        <h1 className="glitch" data-text="TWO HEADS">TWO HEADS </h1>
        <Header></Header>
      </Segment>
    )
  }

export default TwoHeadsHeader;