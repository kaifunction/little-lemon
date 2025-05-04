// import { useState } from "react";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const navigator = useNavigate();
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [guests, setGuests] = useState(1);
  //   const [occasion, setOccasion] = useState("Birthday");

  const formik = useFormik({
    initialValues: {
      date:"",
      time:"",
      guests:"",
      occasion:"",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      date: Yup.string().required("Please pick a date!"),
      time: Yup.string().required("Please pick a time!"),
      guests: Yup.number()
        .min(1, "At least one guest")
        .max(10, "Maximum 10 guests")
        .required("Please enter number of guests"),
      occasion: Yup.string().required("Please pick an occasion!"),
    }),
    onSubmit: (values) => {
      console.log("=========>",values);
      props.setBookingData(values); // 保存 BookingForm 的表单数据
      props.dispatch({ type: "change_date", date: new Date(values.date) });
      props.submitForm(values);
      navigator("/customer", {
        state: {
          bookingData: values,
        },
      });  // <== 加上这一句！！！
    },
  });

  const handleBack = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to go back and rebook a table?",
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
      navigator("/");
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Reserve Your Table</h1>
      {/* ===== */}
      <div className="form-group">
        <div className="booking-form-group">
        <label htmlFor="res-date" className="form-label">
          Choose date<span style={{ color: "red" }}> *</span>
        </label>
        <input
          className="form-input"
          type="date"
          name="date"
          id="res-date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="form-error">{formik.errors.date}</div>
        ) : null}
        </div>
        {/* ===== */}
        <div className="booking-form-group">
        <label htmlFor="res-time" className="form-label">
          Choose time<span style={{ color: "red" }}> *</span>
        </label>
        <select
          className="form-select"
          type="select"
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled hidden>Please select a time</option>
          {props.availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className="form-error">{formik.errors.time}</div>
        ) : null}
        </div>
        {/* ====== */}
        <div className="booking-form-group">
        <label htmlFor="guests" className="form-label">
          Number of guests<span style={{ color: "red" }}> *</span>
        </label>
        <input
          className="form-input"
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          placeholder="Select number of guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests && (
          <div className="form-error">{formik.errors.guests}</div>
        )}
        </div>
        {/* ====== */}
        <div className="booking-form-group">
        <label htmlFor="occasion" className="form-label">
          Occasion
        </label>
        <select
          className="form-select"
          name="occasion"
          id="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled hidden>Please select an Occasion</option>
          <option>Birthday</option>
          <option>Dinner</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className="form-error">{formik.errors.occasion}</div>
        ) : null}
        </div>
      </div>
      {/* <input type="submit" value="Make Your reservation"/> */}

      <div className="form-button-container">
        <button type="submit" className="form-button">
          Reserve a Table
        </button>
        <button onClick={handleBack} className="back-button">
          Back
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
