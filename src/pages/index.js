import React, { Component } from "react";
import Link from 'gatsby-link'
import BasicContent from '../components/Basic-Content'
import TwoColumn from '../components/2column'





export default class IndexPage extends Component {
  render() {


    return (
      <section className="">

        <BasicContent switches="large-padding text-center"
          content={()=>{
            return (
              <section>
                <div>
                  <h1 className="has-text-weight-bold">Hi, Welcome to my website. </h1>
                </div>
                <button className="button-secondary shit" style={{ marginBottom: '40px'}}>
                      Learn More
                </button>
              </section>
            )
          }} >
        </BasicContent>

        <TwoColumn
         switches="large-padding bg-primary-gray"
         colSize1="six"
         colSize2="six"
         before={()=>{
          return (
            <section className="">
             <h2 className="color-white">Before Content</h2>
             <br/>
            </section>
          )
        }}
          content1={()=>{
            return (
              <section className="text-center">
               <button className="button-secondary shit" style={{ marginBottom: '40px'}}>
                      Learn More
                </button>
              </section>
            )
          }}
          content2={()=>{
            return (
              <section className="text-center">
               <button className="button-secondary shit" style={{ marginBottom: '40px'}}>
                      Learn More 2
                </button>
              </section>
            )
          }}
          after={()=>{
            return (
              <section className="">


               <h2 className="color-white">After Content</h2>

              </section>
            )
          }}
          >


        </TwoColumn>


      </section>
    )
  }
}

