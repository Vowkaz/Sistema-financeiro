import Head from "next/head";

import {Layout} from "@/components/layout";
import Estimate from "@/components/estimate";
import React from "react";
import SubscribeBudget from "@/components/dialogSubscribeBudget";
import {Button} from "@/components/ui/button";

class Budgets extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Budgets</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="item center scrollbar grid h-[93vh] snap-end scroll-pb-[2rem] grid-rows-2 overflow-y-scroll	">
          <section
            className="m-2
            h-[90vh] flex-col rounded-lg border-2
            border-solid border-black p-3
             -shadow-card shadow-black dark:shadow-cardD dark:border-white">
            <article className="p-3">
              <section className="mb-4 h-16  w-full">
                <Button variant="neoBrut"
                        className="float-right text-2xl"
                >
                  <SubscribeBudget/>
                </Button>
              </section>
              <Estimate/>
            </article>
          </section>
          {/*<div className="h-3 w-3 bg-transparent p-3"></div>*/}

        </main>
      </Layout>
    )
  }
}

export default Budgets
