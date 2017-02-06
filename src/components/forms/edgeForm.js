import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, } from 'material-ui/RadioButton';
import { Field, reduxForm, reset, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { graphActs, } from '../../modules';
import MenuItem from 'material-ui/MenuItem';
import { Checkbox, RadioButtonGroup, SelectField, Toggle, } from 'redux-form-material-ui';

const styles = {
  block: { maxWidth: 250, },
  radioButton: { marginBottom: 16, },
};
const mapStateToProps = ({ nodes, }) => ({ nodes, });

const resetForm = formID => (action, dispatch) => dispatch(reset(formID));

const BaseForm = ({ handleSubmit, nodes, }) => (
  <form onSubmit={handleSubmit} onChange={(...args) => { console.log('args', args); }} >

    <Field name="source" label="source" component={SelectField} hintText="Select a source node">
      {nodes.map(n => <MenuItem value={n} primaryText={`node_${n.id}`} />)}
    </Field>
    <Field name="weight" label="weight" component={TextField} hintText="Set edge weight" />
    <Field name="neighbors" label="neighbors" component={RadioButtonGroup} >
      {nodes.map(n => <Toggle style={styles.radioButton} value={n} label={`node_${n.id}`} />)}
    </Field>

    <FlatButton primary label="Create Edges" type="submit" />
  </form>
  );

const ReduxCreate = reduxForm()(BaseForm);

const EdgeForm = ({ addEdgesForm, nodes, }) => (
  <ReduxCreate
    nodes={nodes}
    form={'addEdges'}
    onSubmit={addEdgesForm}
    enableReinitialize
    onSubmitSuccess={resetForm('addEdges')}

  />
  );

export default connect(mapStateToProps, graphActs)(EdgeForm);
