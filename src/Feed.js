import { Avatar } from '@material-ui/core'
import { Info } from '@material-ui/icons'
import React from 'react'
import './Feeds.css'

function Feeds() {
    return(
        <div className="feed">
            <div className="feed-top">
            <div className="feeds">
            <h2>Add to your Feeds</h2>
                <Info />
            </div>
            <div className="feed-field">
                <Avatar className="feed-avatar"/>
                <div>
                   <h2>My career matters</h2>
                   <p>Company.Human Resources</p>
                   <button>+ Follow</button>
                </div>
            </div>
            <div className="feed-field">
                <Avatar className="feed-avatar"/>
                <div className="beside">
                   <h2>side hustle</h2>
                   <p>Company.Information and technology service</p>
                   <button>+ follow</button>
                </div>
            </div>
            <p>View all recommendations</p>
            </div>
        </div>
    )
}
export default Feeds