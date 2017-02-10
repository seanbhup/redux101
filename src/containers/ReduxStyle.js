import React, {Component} from "react";
// We need some glue. this component (container) needs to know about our redux
// So we include the connect method from react-redux (the glue)
import {connect} from "react-redux";

class ReduxStyle extends Component{
    render(){
        var studentArray = [];
        this.props.students.map((student, index)=>{
            studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
        });
        var studentArray2 = [];
        this.props.students2.map((student2, index)=>{
            studentArray2.push(<li key={student2.name}>{student2.name} - {student2.seat}</li>)
        });
        return(
            <div>
                <h1 className="container">
                    LONGBLOB PLEASE
                </h1>
                <h2>{studentArray}</h2>
                <h2>{studentArray2}</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        // From our master reducer, we have a 'state' object
        // inside our state project, we have a property: students
        students: state.students,
        students2: state.students2
    }
};

export default connect(mapStateToProps)(ReduxStyle);
