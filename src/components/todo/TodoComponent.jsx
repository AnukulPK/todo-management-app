import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  RetrieveTodo,
  UpdateTodoDetails,
} from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

const TodoComponent = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [formId, setFormId] = useState("");
  const [description, setDescription] = useState("");
  const currentDate = moment(new Date()).format("YYYY-MM-DD");
  const [targetDate, setTargetDate] = useState(currentDate);

  const onSubmit = (values) => {
    let username = AuthenticationService.getLoggedInUserName();
    UpdateTodoDetails(username, id, {
      id: id,
      description: values.description,
      targetDate: values.targetDate,
    }).then(() => {
      navigate("/todos");
    });
  };

  useEffect(() => {
    let username = AuthenticationService.getLoggedInUserName();
    RetrieveTodo(username, id).then((res) => {
      setDescription(res.data.description);
      setTargetDate(moment(res.data.targetDate).format("YYYY-MM-DD"));
    });
  }, []);

  const validate = (values) => {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters for a description";
    }

    // if (moment(values.targetDate).isValid()) {
    //   errors.targetDate = "Enter a valid target date";
    // }
    return errors;
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
          validateOnChange={false}
          validateOnBlur={false}
          validate={validate}
          enableReinitialize={true}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />

              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
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
