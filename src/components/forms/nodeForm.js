import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, reset, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { nodeActs, } from '../../modules';

const resetForm = formID => (action, dispatch) => dispatch(reset(formID));

const BaseForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} onChange={(...args) => { console.log('args', args); }} >
    <Field name="count" component={TextField} hintText="content" />
    <FlatButton primary label="Create Nodes" type="submit" />
  </form>
  );

const ReduxCreate = reduxForm()(BaseForm);

const NodeForm = ({ createFormNodes, }) => (
  <ReduxCreate
    form={'nodeCount'}
    onSubmit={createFormNodes}
    enableReinitialize
    onSubmitSuccess={resetForm('nodeCount')}

  />
  );

export default connect(null, nodeActs)(NodeForm);
