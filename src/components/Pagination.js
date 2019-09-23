import React, { Component } from 'react'

import styles from './../Pagination.module.css'

export default class Pagination extends Component {

  state = {
    total: null,
    per_page: null,
    current_page: null
  }

  componentDidMount() {
    this.requestPage(1);
  }

  requestPage = async pageNumber => {
    let response = await fetch(`https://reqres.in/api/colors?page=${pageNumber}`);
    const data = await response.json();

    this.setState({
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,
    });    
  }  

  render() {

    
    let renderPageNumbers;

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';

        if(number === 1 || number === this.state.total || (number >= this.state.current_page - 2 && number <= this.state.current_page + 2)){
          return (
            <span key={number} className={classes} onClick={() => this.requestPage(number)}>{number}</span>
          );
        }else{
          return <p>Nothing</p>
        }
      });

    return (
      <div className={styles.pagination}>
        <span onClick={() => this.requestPage(1)}>&laquo;</span>
        {renderPageNumbers}
        <span onClick={() => this.requestPage(1)}>&raquo;</span>
      </div>
    )
  }else{
    return (
      <div><h1>Nothing</h1></div>
    )
  }
}
}
