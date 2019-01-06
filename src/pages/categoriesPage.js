import React from 'react'
import Items from '../components/category'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch
    ("http://localhost:5000/categories")
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
       <h2> Browse categories:</h2>
      <Items items={this.state.items} />
      </div>
    )
  }
}
export default App
