import React from "react";
import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";

import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the shape of form values
interface FormValues {
  name: string;
  email: string;
  coursename: string;
  phone: string;
}

const WhyMITAcademy: React.FC = () => {
  // Initial form values
  const initialValues: FormValues = {
    name: "",
    email: "",
    coursename: "",
    phone: "",
  };

  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 simvol olmalıdır")
      .max(30, "Maksimum 30 simvol olmalıdır")
      .required("Boş ola bilməz").matches(/^[^\d]+$/, "Rəqəm daxil edilə bilməz"),
    email: Yup.string()
      .email("Elektron poçt ünvanı etibarlı deyil")
      .required("Elektron poçt mütləq doldurulmalıdır"),
    phone: Yup.string(),
  });

  // Form submission handler
  const onSubmit = (_values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    emailjs.sendForm("service_c27pptt", "template_zrb44wl", "#form", "user_XSVgRv73Ciboc6WRBgZW2").then(
      () => {
        toast.success("Müraciətiniz qeydə alındı. Sizinlə tezliklə əlaqə saxlanılacaq.");
        resetForm();
      },
      (error) => {
        toast.error("Serverdə xəta var. Bir az sonra yenidən cəhd edin.");
        console.log(error.text);
      }
    );
  };

  // Formik hook
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="space-top space-extra-bottom" id="contact-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 text-center text-xl-start">
            <div className="title-area">
              <h2 className="sec-title h1">Niyə MIT Academy?</h2>
              <strong className="sec-subtitle mt-4">
                MIT Academy beynəlxalq dərəcəli kadrların hazırlığına zəmanət verən özəl təhsil müəssisəsidir.
              </strong>
            </div>
            <div className="row gx-80 gy-xl-4 mb-4 mb-xl-0">
              {/* Add your form elements here */}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="position-relative">
              <form id="form" className="form-style2" onSubmit={formik.handleSubmit}>
                <div className="form-inner">
                  <h3 className="form-title h5">
                    <span className="text-theme">100lərlə gənc</span> Modern dünyanı bizimlə kəşf edib. Elə indicə yaz, dərslərimizə qoşul!
                  </h3>
                  <div className="row">
                    <div className="col-md-6 col-xl-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Soyad və adınız"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Elektron poçtunuz"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-12">
                      <div className="form-group">
                        <select
                          name="coursename"
                          id="coursename"
                          onChange={formik.handleChange}
                          value={formik.values.coursename}
                        >
                          <option disabled hidden>
                            Müraciət edəcəyiniz sahəni seçin
                          </option>
                          <option value="IT">IT</option>
                          <option value="Dizayn">Dizayn</option>
                          <option value="Proqramlaşdırma">Proqramlaşdırma</option>
                          <option value="Ofis proqramları">Ofis proqramları</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Əlaqə nömrəniz"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                        />
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="vs-btn">
                        İndi müraciət et!
                      </button>
                    </div>
                  </div>
                </div>
                <div className="vs-circle color2"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMITAcademy;
