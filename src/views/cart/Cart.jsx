import { lazy, Suspense } from "react"; // Import Suspense
import { Link } from "react-router-dom";
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const CartView = () => {
  const onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  {/* Table content */}
                </table>
              </div>
              <div className="card-footer">
                {/* Card footer content */}
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <i className="bi bi-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                {/* Wrap CouponApplyForm with Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                  <CouponApplyForm onSubmit={onSubmitApplyCouponCode} />
                </Suspense>
              </div>
            </div>
            <div className="card">
              {/* Card content */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light border-top p-4">
        <div className="container">
          {/* Payment and refund policy */}
        </div>
      </div>
    </div>
  );
};

export default CartView;
