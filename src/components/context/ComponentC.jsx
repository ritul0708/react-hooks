import React from 'react';
import { UserContext, ChannelContext } from '../../App';


// This is not the most readable code to just consume two prop values
// Suppose we have more props like that we can't use context API in that way
const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return (
                      <div>User Context Value---- {user} <br /> Channel Context Value---- {channel}</div>
                    )
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC