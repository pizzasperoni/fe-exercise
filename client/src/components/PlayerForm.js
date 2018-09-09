import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PlayerForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="email" name="email" id="exampleEmail" placeholder="Player Name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleSelect">Position</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Goal Keeper</option>
            <option>Defender</option>
            <option>Midielder</option>
            <option>Forward</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
        <Button>Search</Button>
      </Form>
    );
  }
}