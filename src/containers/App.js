import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import {robots} from './robots';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import {  Container ,Row,Col } from 'reactstrap';
import Scroll from '../component/Scroll'
import ErrorBoundary from '../component/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField,requestRobots } from './../actions/actions'





class App extends Component {

  componentDidMount(){
    // console.log(this.props.store.getState(),"store")
    this.props.requestRobot();
  }
  // onsearchChange=(event)=>{
  //   this.setState({searchValue:event.target.value});
  //   this.props.searchAction(event.target.value);
  // }
  render() {
    const { searchValue,onsearchChange,robots,isPending,error}=this.props;
    const filterRobots=robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(searchValue);
    });
    console.log(robots,"filterRobots")

    if(isPending){
      return <h1>Loading</h1>
    }else{ 
    return (
        <Container>
            <div className="App" >
              <div>
              <h1>Robots Friends</h1>
              <SearchBox searchValue={onsearchChange}/>
                <Row>
                    <Col md="6">
                      <Scroll>
                        <ErrorBoundary>
                           <CardList robots={filterRobots} />
                         </ErrorBoundary>
                      </Scroll>
                  </Col>
              </Row>
            </div>
          </div>
        </Container>
    );
    }
   
  }
}

 const mapStateToProps = (state) => {
  console.log(state,"state");
  return {
    searchValue:state.searchRobots.searchValue,
    isPending:state.requestRobot.isPending,
    robots:state.requestRobot.robots,
    error:state.requestRobot.error
  }
};

 const mapDispatchToProps = (dispatch) => {
  return {
    onsearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    requestRobot:()=>dispatch(requestRobots())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
