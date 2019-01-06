import React from 'react'
import Items from '../components/items'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch
    ("http://localhost:5000/items")
    .then(response => response.json())
      .then(json => {
       this.setState({
          items: json.data
          
        })
      })
  }
  
  render (){
    return (
      <div>
      <Items items={this.state.items} />
      </div>
    )
  }
}
export default App
