import React from 'react'
//import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const TopStudent = () => {
    return (
        <>
            <Helmet>
            <link href="https://m4mohammadkhalid.github.io/file/font.min.css" rel="stylesheet" />

            </Helmet>
<section className="kids-care-routine-area">
  <div className="container-fluid">
    <div className="row">
      <div style={{paddingBottom:'26px'}} className="col-xl-12">
        <h2 className="area-heading font-per"><center>Class Routine</center></h2>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="table-wrapper">
          <table style={{width: '100%'}}>
            <tbody><tr className="table-time">
                <td className="table-corner font-green">Day</td>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
                <th scope="col">8.00 am - 9.00 am</th>
              </tr>
              <tr>
                <th scope="row">sat</th>
                <td className="bgc-orange">Mathmetics</td>
                <td className="bg-yellow">Art class</td>
                <td className="bg-brick">Open</td>
                <td className="bg-green">Sports</td>
                <td className="bg-blue-two">Social awarness</td>
                <td className="bg-per">Basic Skills</td>
                <td className="bgc-orange">Geography</td>
              </tr>
              <tr>
                <th scope="row">sun</th>
                <td className="bg-yellow">Mathmetics</td>
                <td className="bg-brick">Geography</td>
                <td className="bg-green">Closed</td>
                <td className="bg-blue-two">Art class</td>
                <td className="bg-per">Basic Skills</td>
                <td className="bgc-orange">Sports</td>
                <td className="bg-yellow">Social awarness</td>
              </tr>
              <tr>
                <th scope="row">mon</th>
                <td className="bg-brick">Sports</td>
                <td className="bg-green">Social</td>
                <td className="bg-blue-two">Basic Skills</td>
                <td className="bg-per">Mathmetics</td>
                <td className="bgc-orange">Art class</td>
                <td className="bg-yellow">Geography</td>
                <td className="bg-brick">Social awarness</td>
              </tr>
              <tr>
                <th scope="row">tue</th>
                <td className="bg-green">Art class</td>
                <td className="bg-blue-two">Geography</td>
                <td className="bg-per">Basic Skills</td>
                <td className="bgc-orange">Mathmetics</td>
                <td className="bg-yellow">Art class</td>
                <td className="bg-brick">Sports</td>
                <td className="bg-green">Social awarness</td>
              </tr>
              <tr>
                <th scope="row">wed</th>
                <td className="bg-blue-two">Basic Skills</td>
                <td className="bg-per">Geography</td>
                <td className="bgc-orange">Sports</td>
                <td className="bg-yellow">Social</td>
                <td className="bg-brick">Art class</td>
                <td className="bg-green">Social awarness</td>
                <td className="bg-blue-two">Geography</td>
              </tr>
              <tr>
                <th scope="row">thus</th>
                <td className="bg-per">Social awarness</td>
                <td className="bgc-orange">Social</td>
                <td className="bg-yellow">Geography</td>
                <td className="bg-brick">Mathmetics</td>
                <td className="bg-green">Art class</td>
                <td className="bg-blue-two">Sports</td>
                <td className="bg-per">Basic Skills</td>
              </tr>
            </tbody></table>
          <div className="routine-holiday"><span>Friday ( holidays )</span></div>
        </div>
        <div className="res-routine collapse-wrapper">
          <div id="accordion" role="tablist">
            <div className="card">
              <div className="card-header" role="tab" id="headingEight">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight">Saturday </a>
                </h5>
              </div>
              <div id="collapseEight" className="collapse " role="tabpanel" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="card">
              <div className="card-header" role="tab" id="headingTen">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    Sunday  
                  </a>
                </h5>
              </div>
              <div id="collapseTen" className="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Monday
                  </a>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingThree">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Tuesday 
                  </a>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingFour">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Wednesday 
                  </a>
                </h5>
              </div>
              <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingFive">
                <h5 className="mb-0">
                  <a className="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Thursday  
                  </a>
                </h5>
              </div>
              <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">8.00 am - 9.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">9.00 am - 10.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Art class</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">10.00 am - 11.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Geography</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-brick">11.00 am - 12.00 am</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-brick">Mathmetics</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-per">12.00 am - 1.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-per">Social awarness</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-orange">1.00 pm - 2.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-orange">Basic skills</div></div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-sm-6"><div className="sin-sub bg-green">2.00 pm - 3.00 pm</div></div>
                      <div className="col-sm-6"><div className="sin-sub bg-green">Mathmetics</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default TopStudent
