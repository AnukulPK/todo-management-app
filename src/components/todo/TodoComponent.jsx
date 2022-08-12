import React, { useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Field, Form, Formik } from "formik";

const TodoComponent = () => {
  const { id } = useParams();
  const [formId, setFormId] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

  return (
    <div>
      <h1>Todo</h1>
      <div className="container">
        <Formik>
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
