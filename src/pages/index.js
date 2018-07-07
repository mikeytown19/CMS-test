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
                  <h1 className="has-text-weight-bold primary"><i>"Big League Service with a Small Town Feel"</i></h1>
                </div>

        <TwoColumn
         switches=""
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
              <section className="">
              <p className="text-left">Although the home inspection portion of your transaction is only one step to making a wise decision, it can play a BIG role in present and future costs associated with home ownership!</p>

              <p className="text-left">
              <button className="button-secondary shit" style={{ marginTop: '40px'}}>
                      Learn More 2
                </button>
              </p>

              </section>
            )
          }}
          content2={()=>{
            return (
              <section className="">
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
              <section className="">
               <button className="button-secondary shit" style={{ marginBottom: '40px'}}>
                      Learn More
                </button>
              </section>
            )
          }}
          content2={()=>{
            return (
              <section className="">
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

