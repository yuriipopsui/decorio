import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CreateObjectForm.module.scss";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { createProject } from "../../../store/reducers/createProjectReducer";

const CreateObjectForm = () => {

  const dispatch = useDispatch();
  const [newObject, setNewObject] = useState({
    date: '',
    address: '',
    customer: {
      name: '',
      phone: '',
      info: ''
    },
    decor: {
      name: '',
      color: '',
      description: ''
    },
    measure: {
      square: null,
      linear: null
    }
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setNewObject({...newObject, [event.target.name]: event.target.value});
    console.log('Worked');
    // console.log(event.target.value);
    // console.log(newObject);
  };

  const onChangeCustomer = (event) => {
    event.preventDefault();
    setNewObject({
      ...newObject,
      customer: {
        ...newObject.customer,
        [event.target.name]: event.target.value
      }
    });
    // console.log(event.target.value);
    // console.log(newObject);
  }

  const onChangeDecor = (event) => {
    event.preventDefault();
    setNewObject({
      ...newObject,
      decor:{
        ...newObject.decor,
        [event.target.name]: event.target.value
      }
    });
  }

  const onChangeMeasure = (event) => {
    event.preventDefault();
    setNewObject({
      ...newObject,
      measure: {
        ...newObject.measure,
        [event.target.name]: event.target.value
      }
    })
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    console.log(newObject);
    dispatch(createProject(newObject));
  };

  return (
    <>
      <form className={styles.objectForm} action="">
      <div className={styles.objectForm__inputFieldHeader}>
        <InputField
          className={styles.objectForm__input}
          type="text"
          name="date"
          placeholder="Input date"
          value={newObject.date}
          onChange={onChangeHandler}
        />
        <InputField
          className={styles.objectForm__input}
          type="text"
          name="address"
          placeholder="Input address"
          value={newObject.address}
          onChange={onChangeHandler}
        />
        </div>
        <fieldset className={styles.objectForm__fieldset}>
          <legend>Customer:</legend>
          <div className={styles.objectForm__inputField}>
            {/* <label htmlFor="consumerName">Name: </label> */}
            <InputField
              labelTitle="Name"
              className={styles.objectForm__input}
              type="text"
              name="name"
              placeholder="Input Customer Name"
              value={newObject.customer.name}
              onChange={onChangeCustomer}
            />
          </div>
          <div className={styles.objectForm__inputFieldDouble}>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="consumerPhone">Phone: </label> */}
              <InputField
                className={styles.objectForm__input}
                labelTitle="Phone"
                type="text"
                name="phone"
                placeholder="Input Customer Phone"
                value={newObject.customer.phone}
                onChange={onChangeCustomer}
              />
            </div>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="consumerInfo">Comment: </label> */}
              <InputField
                labelTitle="Comment"
                className={styles.objectForm__input}
                type="textaria"
                name="info"
                placeholder="Input some Information"
                value={newObject.customer.info}
                onChange={onChangeCustomer}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.objectForm__fieldset}>
          <legend>About Order:</legend>
          <div className={styles.objectForm__inputFieldDouble}>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="decorationType">Type of decor: </label> */}
              <InputField
                className={styles.objectForm__input}
                labelTitle="Type ofDecor"
                type="text"
                name="name"
                placeholder="Input Type of decoration"
                value={newObject.decor.name}
                onChange={onChangeDecor}
              />
            </div>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="selectedColor">Selected Color: </label> */}
              <InputField
                className={styles.objectForm__input}
                labelTitle="Selected Color"
                type="text"
                name="color"
                placeholder="Input Selected Color"
                value={newObject.decor.color}
                onChange={onChangeDecor}
              />
            </div>
          </div>
          <fieldset className={`${styles.objectForm__fieldset} ${styles.objectForm__inputQuantity}`}>
            <legend>Set Quantity: </legend>
            <div className={styles.objectForm__inputFieldDouble}>
              <div className={styles.objectForm__inputField}>
                {/* <label htmlFor="squareMeters">Square Meters: </label> */}
                <InputField
                  className={styles.objectForm__input}
                  labelTitle="Square Meters"
                  type="text"
                  name="square"
                  placeholder="Input Square Meters"
                  value={newObject.measure.square}
                  onChange={onChangeMeasure}
                />
              </div>
              <div className={styles.objectForm__inputField}>
                {/* <label htmlFor="linearMeters">Linear Meters: </label> */}
                <InputField
                  className={styles.objectForm__input}
                  labelTitle="Linear Meters"
                  type="text"
                  name="linear"
                  placeholder="Input Linear Meters"
                  value={newObject.measure.linear}
                  onChange={onChangeMeasure}
                />
              </div>
            </div>
          </fieldset>
          <Button
            buttonTitle={"Add type of Work"}
            buttonColor={"#2563a4"}
            onClick={onClickHandler}
          />
        </fieldset>
        {/* <label htmlFor="deadline">Deadline: </label> */}
        {/* <InputField
          className={styles.objectForm__input}
          labelTitle="Deadline"
          type="text"
          name="deadline"
          placeholder="Input Deadline"
          onChange={onChangeHandler}
        /> */}
        <Button
          buttonTitle={"Save Order"}
          buttonColor={"#2563a4"}
          onClick={onClickHandler}
        />
      </form>
    </>
  );
};

export default CreateObjectForm;
