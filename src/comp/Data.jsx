import React, { Component } from "react";
import { getData } from "../redux/actions/action";
import { connect } from "react-redux";
import Loading from "./Loading";
import FormUpload from "./FormUpload";
import './data.css'
export class Data extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <FormUpload />
        <div className="row col-12 justify-content-left container m-auto p-5">
          {this.props.data.length !== 0 ? (
            this.props.data.map((d) => (
              <div className="col-3 p-4" key={Math.random()}>
                <div class="wrapper">
                  <div class="card">
                    <img src={d.uploadImage} alt="" className="col-12" />
                    <div class="info">
                      <h1>Road</h1>
                      <p>
                        Lorem Ipsum is simply dummy text from the printing and
                        typeseting industry
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Data);
