// class Hello extends React.Component {
//     render() {
//       return <div className="nav">
//         <Link />
//         <Link />
//         <Link />
//       </div>;
//     }
//   }
  
//   class Link extends React.Component {
//       state = {
//         open: false
//     }
//     handleClick = () => {
//         this.setState({ open: !this.state.open });
//     }
//     render () {
//         const { open } = this.state;
//         return (
//           <div className="link">
//             <span onClick={this.handleClick}>Click Me</span>
//           <div className={`menu ${open ? 'open' : ''}`}>
//             <ul>
//               <li>Test 1</li>
//               <li>Test 2</li>
//               <li>Test 3</li>
//             </ul>
//           </div>
//           </div>
//       )
//     }
//   }
  
//   ReactDOM.render(
//     <Hello name="World" />,
//     document.getElementById('container')
//   );