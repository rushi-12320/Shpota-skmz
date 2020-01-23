import React, {Component} from "react";
import {Skills} from "../skills/Skills";

export class Programmer extends Component {
    render() {
        const pr = this.props.programmer;
        return <div className="collection-item col s12 m8 offset-m2 l6 offset-l3">
            <div className="row valign-wrapper">
                <div className="col s2">
                    <img src={pr.picture}
                         alt="" className="responsive-img"/>
                </div>
                <div className="col s10">
                    <span className="name">{pr.name}</span>
                    <br/><span className="company">{pr.company}</span>
                    <br/><Skills skills={pr.skills}/>
                </div>
            </div>
        </div>;
    }
}