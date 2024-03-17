import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer>
    //   <div className="container-fluid bg-primary">
    //     <div className="row ">
    //       <div className="col-md-9 py-3 text-white">
    //         Get connected with us on social networks!
    //       </div>
    //       <div className="col-md-3 py-3 text-center text-white">
    //         <Link to="/" title="Apple">
    //           <i className="bi bi-apple text-light me-3"></i>
    //         </Link>
    //         <Link to="/" title="Windows">
    //           <i className="bi bi-windows text-light me-3"></i>
    //         </Link>
    //         <Link to="/" title="Android">
    //           <i className="bi bi-android2 text-light me-3"></i>
    //         </Link>
    //         |
    //         <Link to="/" title="Twitter">
    //           <i className="bi bi-twitter-x text-light ms-3 me-3"></i>
    //         </Link>
    //         <Link to="/" title="Facebook">
    //           <i className="bi bi-facebook text-light me-3"></i>
    //         </Link>
    //         <Link to="/" title="Instagram">
    //           <i className="bi bi-instagram text-light me-3"></i>
    //         </Link>
    //         <Link to="/" title="Youtube">
    //           <i className="bi bi-youtube text-light me-3"></i>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container-fluid bg-dark text-white">
    //     <div className="row ">
    //       <div className="col-md-3 py-3">
    //         <div className="h6">Company Name</div>
    //         <hr />
    //         <p>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book.
    //         </p>
    //       </div>
    //       <div className="col-md-3 py-3">
    //         <div className="h6">Products</div>
    //         <hr />
    //         <ul className="list-group list-group-flush">
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Electronics
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Mobiles
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Car & bike
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Super Market
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Travel Cards
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-md-3 py-3">
    //         <div className="h6">Policy</div>
    //         <hr />
    //         <ul className="list-group list-group-flush">
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Return Policy
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Terms Of Use
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Security
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               Privacy
    //             </Link>
    //           </li>
    //           <li className="list-group-item bg-dark text-white border-light">
    //             <Link
    //               to="/"
    //               className="text-decoration-none text-white stretched-link"
    //             >
    //               EPR Compliance
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-md-3 py-3">
    //         <div className="h6">Address</div>
    //         <hr />
    //         <address>
    //           <strong>Twitter, Inc.</strong>
    //           <br />
    //           1355 Market St, Suite 900
    //           <br />
    //           San Francisco, CA 94103
    //           <br />
    //           <abbr title="Phone">P:</abbr> (123) 456-7890
    //         </address>
    //         <div className="h6">Customer Care</div>
    //         <hr />
    //         <i className="bi bi-telephone"></i> +1800 100 1000
    //         <br />
    //         <i className="bi bi-envelope"></i> info@email.com
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container-fluid bg-secondary text-white text-center">
    //     <div className="row">
    //       <div className="col-md-2 py-2">
    //         <Link to="/" className="text-white text-decoration-none">
    //           <i className="bi bi-briefcase text-warning"></i> Partner with us
    //         </Link>
    //       </div>
    //       <div className="col-md-2 py-2">
    //         <Link to="/" className="text-white text-decoration-none">
    //           <i className="bi bi-badge-ad text-info"></i> Advertise
    //         </Link>
    //       </div>
    //       <div className="col-md-2 py-2">
    //         <Link to="/" className="text-white text-decoration-none">
    //           <i className="bi bi-gift"></i> Gift
    //         </Link>
    //       </div>
    //       <div className="col-md-3 py-2">
    //         © 2009-{new Date().getFullYear()} React-E-Commerce.com (
    //         {process.env.REACT_APP_VERSION})
    //       </div>
    //       <div className="col-md-3 py-2 bg-white">
    //         <img
    //           src="../../images/payment/american_express.webp"
    //           width="32"
    //           alt="American Express"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/maestro.webp"
    //           width="32"
    //           alt="Maestro"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/netbanking.webp"
    //           width="32"
    //           alt="Net Banking"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/paypal.webp"
    //           width="32"
    //           alt="Paypal"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/rupay.webp"
    //           width="32"
    //           alt="Rupay"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/upi.webp"
    //           width="32"
    //           alt="UPI"
    //           className="me-2"
    //         />
    //         <img
    //           src="../../images/payment/visa.webp"
    //           width="32"
    //           alt="Visa"
    //           className="me-2"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <>
    
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="container my-5">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Bootstrap Angular
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

    </>
  );
};
export default Footer;
