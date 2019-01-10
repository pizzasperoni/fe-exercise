import React, { PureComponent } from 'react'
import { Button, Form, Input} from 'reactstrap'


class SearchBar extends PureComponent {

  render(){
    return(
      <div>
        <Form inline onSubmit={this.props.onSubmit}>
          <div>
            <Input type="text" placeholder="Name" value={this.props.name}/>
          </div>
          <div>
          <Input type="select" name="select" value={this.props.position}>
            <option value="position">Position</option>
            <option value="goal_keeper">Goal Keeper</option>
            <option value="defender">Defender</option>
            <option value="midfielder">Midfielder</option>
            <option value="forward">Forward</option>
          </Input>
          </div>
          <div>
            <Input type="number" placeholder="Age" value={this.props.age}/>
          </div>
          <div>
            <Button type="submit" >Submit</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default SearchBar