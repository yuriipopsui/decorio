import { useState } from "react";
import styles from "./CreateObjectForm.module.scss";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const CreateObjectForm = () => {
  const [newObject, setNewObject] = useState({});

  const onChangeHandler = (event) => {
    event.preventDefault();
    setNewObject({...newObject, [event.target.name]: event.target.value});
    console.log(newObject);
  };
  const onClickHandler = () => {
    console.log("Click for Adding Work");
    return true;
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
          onChange={onChangeHandler}
        />
        <InputField
          className={styles.objectForm__input}
          type="text"
          name="name"
          placeholder="Input address"
          onChange={onChangeHandler}
        />
        </div>
        <fieldset className={styles.objectForm__fieldset}>
          <legend>Consumer:</legend>
          <div className={styles.objectForm__inputField}>
            {/* <label htmlFor="consumerName">Name: </label> */}
            <InputField
              labelTitle="Name"
              className={styles.objectForm__input}
              type="text"
              name="consumerName"
              placeholder="Input Consumer Name"
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.objectForm__inputFieldDouble}>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="consumerPhone">Phone: </label> */}
              <InputField
                className={styles.objectForm__input}
                labelTitle="Phone"
                type="text"
                name="consumerPhone"
                placeholder="Input Consumer Phone"
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="consumerInfo">Comment: </label> */}
              <InputField
                labelTitle="Comment"
                className={styles.objectForm__input}
                type="textaria"
                name="consumerInfo"
                placeholder="Input some Information"
                onChange={onChangeHandler}
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
                name="decorationType"
                placeholder="Input Type of decoration"
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.objectForm__inputField}>
              {/* <label htmlFor="selectedColor">Selected Color: </label> */}
              <InputField
                className={styles.objectForm__input}
                labelTitle="Selected Color"
                type="text"
                name="selectedColor"
                placeholder="Input Selected Color"
                onChange={onChangeHandler}
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
                  name="squareMeters"
                  placeholder="Input Square Meters"
                  onChange={onChangeHandler}
                />
              </div>
              <div className={styles.objectForm__inputField}>
                {/* <label htmlFor="linearMeters">Linear Meters: </label> */}
                <InputField
                  className={styles.objectForm__input}
                  labelTitle="Linear Meters"
                  type="text"
                  name="linearMeters"
                  placeholder="Input Linear Meters"
                  onChange={onChangeHandler}
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
        <InputField
          className={styles.objectForm__input}
          labelTitle="Deadline"
          type="text"
          name="deadline"
          placeholder="Input Deadline"
          onChange={onChangeHandler}
        />
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
