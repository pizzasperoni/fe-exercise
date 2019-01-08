import React, { PureComponent } from 'react'
import { Button, Form, Input} from 'reactstrap'


class SearchBar extends PureComponent {
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const player = {
      name: this.state.name,
      position: this.state.position,
      age: this.state.age
    }
    this.props.fetchPlayers(player)
  }

  
  render(){
    return(
      <div>
        <Form inline>
          <div>
            <Input type="text" placeholder="Name" />
          </div>
          <div>
          <Input type="select" name="select">
            <option value="position">Position</option>
            <option value="goal_keeper">Goal Keeper</option>
            <option value="defender">Defender</option>
            <option value="midfielder">Midfielder</option>
            <option value="forward">Forward</option>
          </Input>
          </div>
          <div>
            <Input type="number" placeholder="Age"  />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    )
    
  }
}



export default SearchBar