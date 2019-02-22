// Aubrey Ngapeita David
import React from 'react'
import Modules from './Modules'
// import {getModules} from '../../api'

const DropdownModule = () => {
//    constructor (props){
//        super(props)
//        this.state={
//             moduleList:[]
//        }
//    }

  //    componentDidMount(){
  //        getModules()
  //         .then(moduleList=>{
  //             this.setState({moduleList})
  //         })
  //         .catch(err=>console.log('error',err))
  //    }
  return (
    <React.Fragment>
      <h1>DropdownModule Component</h1>
      <ul>
        {/* {this.state.moduleList.map(module => {
          return (<li>module</li>
        })} */}
      </ul>
      <Modules />
    </React.Fragment>
  )
}
export default DropdownModule
