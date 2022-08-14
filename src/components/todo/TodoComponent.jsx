import React, { useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Field, Form, Formik } from "formik";

const TodoComponent = () => {
  const { id } = useParams();
  const [formId, setFormId] = useState("");
  const [description, setDescription] = useState("Learn Forms");
  const [targetDate, setTargetDate] = useState(moment().format("YYYY-MM-DD"));

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Todo</h1>
      <div className="container">
        <Formik
          initialValues={{
            description,
            targetDate,
          }}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                />
              </fieldset>

              <fieldset className="form-group">
                <label>Target Date</label>
                <Field className="form-control" type="date" name="targetDate" />
              </fieldset>
              <button type="submit" className="btn  btn-success">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TodoComponent;
