"use client";
import React, { useEffect, useState } from "react";
import FormInput from "../general/formInput/FormInput";
import classes from "./ContactUs.module.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (errors || success) {
      setTimeout(() => {
        setErrors(false);
        setSuccess(false);
        setLoading(false);
      }, 3000);
    }
  }, [errors, success]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((val) => ({
      ...val,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    if (!formData.email || !formData.firstName || !formData.lastName) {
      setErrors(true);
      return;
    }

    setTimeout(() => {
      setSuccess(true);
    }, 3500);
  };

  return (
    <div>
      <div>
        <span>STAY IN THE KNOW</span>
        <h2>Sign Up For Our Newsletter</h2>
        <p>
          Get the latest insights on sustainable architecture, project
          highlights, and industry trends—delivered straight to your inbox. Join
          our community of forward-thinking designers, builders, and
          eco-conscious enthusiasts.
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        {errors && (
          <p className={`alert alert-danger ${classes.form_error}`}>
            {"Kindly revisit your input and enter valid information"}
          </p>
        )}

        {success ? (
          <p className={`alert alert-success ${classes.form_error}`}>
            {"Thank you for choosing to join us. We'll update you in your mail"}
          </p>
        ) : loading ? (
          <p className={`alert alert-loading ${classes.form_error}`}>
            {"processing......"}
          </p>
        ) : (
          <span></span>
        )}
        <div className={classes.form_names}>
          <FormInput
            label={true}
            labelText="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormInput
            label={true}
            labelText="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormInput
            label={true}
            labelText="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className={`btn ${classes.form_btn}`}>
            Sign Me Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
