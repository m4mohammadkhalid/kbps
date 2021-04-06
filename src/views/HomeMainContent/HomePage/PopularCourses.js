import React from "react";
import { Link } from "react-router-dom";
//import { listBlogsWithCategoriesAndTags } from '../../../components/Middleware/blog';

const PopularCourses = () => {
  // const [data, setData] = useState()
  // const apiget = () => {
  //   fetch('https://adminsparrow.herokuapp.com/blogs')
  // .then(response => response.json())
  //     .then((json) => {
  //   setData(json)
  // });
  // }
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.01s"
            >
              <div className="heading_s1 text-center">
                {/* <button onClick={apiget}>Button</button> */}
                {/* <h2>{JSON.stringify(data)} Courses</h2> */}
              </div>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.02s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img1.jpg" alt="course_img1" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>

              </div>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.03s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img2.jpg" alt="course_img2" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>
                

              </div>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.04s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img3.jpg" alt="course_img3" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>
              
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.05s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img4.jpg" alt="course_img4" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>
              
              </div>
              
           
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.06s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img5.jpg" alt="course_img5" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>
              
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="content_box box_shadow1 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.07s"
            >
              <div className="content_img">
                <Link to="#">
                  <img src="assets/images/course_img6.jpg" alt="course_img6" />
                </Link>
              </div>
              <div className="content_desc">
                <h4 className="content_title">
                  <Link to="#">Nullam id varius nunc id varius nunc</Link>
                </h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum you need to
                  be sure anything embarrassing hidden in the middle of text.
                </p>
             
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.07s"
            >
              <div className="medium_divider" />
              <Link to="#" className="btn btn-default rounded-0">
                View All Courses <i className="ion-ios-arrow-thin-right ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default PopularCourses;
