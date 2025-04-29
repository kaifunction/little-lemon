import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./CustomerInfo.css";

function CustomerInfo(props) {
     const location = useLocation();
     const bookingData = location.state?.bookingData || {};
     // console.log("bookingData", bookingData);
  const navigate = useNavigate();
  const handleBack = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to go back and rebook a table?",
      // icon: "warning",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, go back!",
      cancelButtonText: "No, stay here!",
      customClass: {
        popup: "my-popup", // 弹窗本体
        icon: "my-icon", // 图标
        title: "my-title", // 标题
        confirmButton: "my-confirm-btn", // 确认按钮
        cancelButton: "my-cancel-btn", // 取消按钮
        htmlContainer: "my-content", // 内容文本
      },
    });
    if (result.isConfirmed) {
      navigate("/booking");
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter your first name!"),
      lastName: Yup.string().required("Please enter your last name!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address!"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be digits")
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .required("Please enter your phone number!"),
      specialRequests: Yup.string(),
    }),
    onSubmit: (values) => {
      navigate("/confirm", {
          state: {
               bookingData: bookingData,
               customerData: values,
          },
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="customer-info-form">
      <h1>Customer Information</h1>
      {/* <p>This is the customer information page.</p> */}
      <button onClick={handleBack} className="customer-back-button">Back to Confirmed Booking</button>
      <div className='customer-info'>
        <div className="customer-info-group">
          <label htmlFor="firstName" className="form-label">
            First Name<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="info-error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="customer-info-group">
          <label htmlFor="lastName" className="form-label">
            Last Name<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="info-error">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="customer-info-group">
          <label htmlFor="phone" className="form-label">
            Phone<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="phone"
            name="phone"
               placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="info-error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="customer-info-group">
          <label htmlFor="email" className="form-label">
            Email<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
               placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="info-error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="customer-info-group  full-width">
          <label htmlFor="specialRequests" className="form-label">
            Special Requests
          </label>
          <textarea
          className="customer-form-textarea"
            id="specialRequests"
            name="specialRequests"
               placeholder="Any special requests?"
            value={formik.values.specialRequests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.specialRequests && formik.errors.specialRequests ? (
            <div>{formik.errors.specialRequests}</div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="customer-submit-button">Submit</button>
    </form>
  );
}
export default CustomerInfo;
