import React from 'react'
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'
 


const TableTest = () =>{
    
const blockElements = {
    content: 'tabs-content',
    panel: 'tabs-panel',
    label: 'tabs-title'
}
 return (
<Tabbordion blockElements={blockElements} className="tabs" name="tabs">
    <TabPanel>
        <TabLabel>My title</TabLabel>
        <TabContent>
            <h2>Sample</h2>
            <p>Content</p>
        </TabContent>
    </TabPanel>
    <TabPanel>
        <TabLabel>Another title</TabLabel>
        <TabContent>
            <h2>Another Sample</h2>
            <p>Some other kind of content</p>
        </TabContent>
    </TabPanel>
</Tabbordion>
 )
}

export default TableTest