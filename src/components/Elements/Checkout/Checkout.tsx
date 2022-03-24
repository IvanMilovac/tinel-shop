import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiTimes } from "react-icons/ti";
import { RiLoader2Line } from "react-icons/ri";

import { Backdrop, Input, Button } from "../../Commons";

import { WorkshopContext } from "../../App/App";

import { useScrollTop, useStoreDispatch } from "../../../hooks";

import {
  FieldValidation,
  EmailFieldValidation,
  AddressValidation,
} from "./CheckoutValidation";

import "./Checkout.scss";

const GenderOptions = [
  {
    value: "m",
    label: "Male",
  },
  {
    value: "f",
    label: "Female",
  },
  {
    value: "o",
    label: "Other",
  },
];

interface ICheckout {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  gender: any;
  address: string;
  postalCode: string;
  agree: boolean;
}

export const Checkout = () => {
  const [successfullCO, setSuccefullCO] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICheckout>();

  const { resetState } = useStoreDispatch();

  useScrollTop(successfullCO);

  const { checkout, setCheckout } = useContext(WorkshopContext);

  const { firstName, lastName, email, date, gender, address, postalCode } =
    errors;

  const handleCheckout = (data: ICheckout) => {
    setIsLoading(true);
    setTimeout(() => {
      setSuccefullCO(true);
      setIsLoading(false);
    }, 1750);
  };

  const navigate = useNavigate();

  const handleBackToShop = () => {
    resetState();
    setCheckout(false);
    setSuccefullCO(false);
    navigate("/");
  };

  return (
    <>
      <Backdrop
        show={checkout}
        handleClick={() => setCheckout(false)}
        alpha={0.5}
      />
      <div className="checkout">
        <div className="checkout__header">
          <h4 className="checkout__header-title">
            {successfullCO ? "Thank you !" : "Checkout"}
          </h4>
          <TiTimes
            className="checkout__header-close"
            onClick={() => {
              setCheckout(false);
            }}
          />
          <p className="checkout__header-desc">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing.
          </p>
        </div>
        <div className="checkout__body">
          {!successfullCO ? (
            <form
              onSubmit={handleSubmit(handleCheckout)}
              noValidate
              className="checkout__form"
            >
              <Input
                label="First Name"
                inputClass={`input ${firstName?.message && "input-error"}`}
                placeholder="Type your first name here"
                error={firstName?.message}
                type="text"
                {...register("firstName", FieldValidation)}
              />
              <Input
                label="Last Name"
                inputClass={`input ${lastName?.message && "input-error"}`}
                placeholder="Type your last name here"
                error={lastName?.message}
                type="text"
                {...register("lastName", FieldValidation)}
              />
              <Input
                label="Email Address"
                inputClass={`input ${email?.message && "input-error"}`}
                placeholder="Type your email here"
                error={email?.message}
                type="email"
                {...register("email", EmailFieldValidation)}
              />
              <div className="checkout__body-date-gender">
                <Input
                  label="Date of birth"
                  inputClass={`input ${date?.message && "input-error"}`}
                  placeholder="Type your birth day"
                  error={date?.message}
                  type="date"
                  {...register("date", FieldValidation)}
                />
                <Input
                  label="Gender"
                  inputClass={`input ${gender?.message && "input-error"}`}
                  placeholder="Choose gender"
                  error={gender?.message}
                  type="select"
                  options={GenderOptions}
                  {...register("gender", FieldValidation)}
                />
              </div>
              <Input
                label="Address"
                inputClass={`input ${address?.message && "input-error"}`}
                placeholder="Type your address here"
                error={address?.message}
                type="text"
                {...register("address", AddressValidation)}
              />
              <Input
                label="Zip Code"
                inputClass={`input ${postalCode?.message && "input-error"}`}
                placeholder="eg. 21310"
                error={postalCode?.message}
                type="text"
                {...register("postalCode", FieldValidation)}
              />
              <div className="checkout__agree-container">
                <input
                  type="checkbox"
                  {...register("agree", FieldValidation)}
                  className="checkout__agree"
                  id="agree"
                />
                <label
                  htmlFor="agree"
                  className="checkout__agree-label"
                  data-content="I Agree"
                >
                  Agree
                </label>
              </div>
              <Button type="submit" color="primary">
                {isLoading && <RiLoader2Line className="checkout__spinner" />}
                Checkout
              </Button>
            </form>
          ) : (
            <Button color="primary" onClick={handleBackToShop}>
              Back to shop
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
