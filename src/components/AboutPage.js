/**
 * Static Page for About Page
 */
import React, {Component} from 'react';
const AboutPage = () => (
  <div className="container aboutPage">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">Introduction</h1>
        <p>* Although I haven’t used it before, I chose react for this project. Therefore I believe I haven’t used the best practice.</p>
        <p>* I solved the assignment in a more efficient way, but it didn’t fit the visualization. You can find the solution under "src/solution/solution.js".</p>
      </div>
      <div className="col-12 content">
        <h1 className="page-header">Assumptions</h1>
        <p>* The height of each building cannot be more than 9 floors (just for the visualization).</p>
        <p>•	The input must be ‘digit-digit-digit……..’. first digit cannot be ‘0’(because there is no meaning to this height in the visualization).</p>
      </div>
      <div className="col-12 content">
        <h1 className="page-header">Resources</h1>
        <p> <a href="http://codepen.io/Toni47/pen/dbrIG">Rain simulation</a></p>
        <p><a href="https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents">Pluralsight React Getting Started</a></p>
      </div>
    </div>

  </div>
);
export default AboutPage;
