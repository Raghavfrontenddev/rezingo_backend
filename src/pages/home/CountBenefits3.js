import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const CountBenefits3 = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth">
        <div className="row align-items-center">
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-1">
          <div className="card">
            <div className="funfact-content funfact-res text-left paddingnew">
              <h3 style={{fontWeight:"500",fontSize:"36px"}}>Performance: sharpen your focus</h3>
              <p className="pt-4 ptag" style={{fontSize:"17px"}}>
              Excellence requires clarity, focus and mental dexterity. REZINGO delivers you the best advantages possible for daily life, setting you up to make your move. Our Natural Engineering approach is proven to put you on top.</p>
                {/* <div className="ptag">
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Innovative Health Metric</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Promote Wellness</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Get More Rewards</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Encourage Healthy Living</li>
                </div> */}
              <div>
                <Link
                 style={{textDecoration:"underline"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 READ MORE
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-2" >
            <div className="card rounded-3xl p-4">
            <div className="funfact-image text-center ">
              <Link>
                <img
                  src="https://lyma.life/assets/images/supplement/benefits-performance@2x.webp"
                  alt=""
                  className="img-fluid h-b1"
                />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountBenefits3.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountBenefits3;
