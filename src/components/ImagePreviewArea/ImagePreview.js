import React from 'react'
import * as Workspace from './WorkspaceComponents'
import Information from './Information'

const ImagePreview = (props) => {
    return (
        <div className="ImagePreview" style={{'backgroundImage': 'url(' + props.image + ')'}}>
            <div className="WorkspaceOverview">
                <Information 
                    name="Coworking Space, South Korea"
                    price={props.price}
                    duration="1" />
                <Workspace.Meta
                    people={props.people} />
            </div>
        </div>
    )
}

export default ImagePreview