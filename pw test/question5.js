// Q5. Ans

import React from 'react';

// Higher-Order Component (HOC)
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isLoading, ...props } = this.props;
      
      if (isLoading) {
        return <div>Loading...</div>;
      }
      
      return <WrappedComponent {...props} />;
    }
  };
};

// Usage of the HOC
const MyComponent = ({ data }) => {
  return <div>{data}</div>;
};

const MyComponentWithLoading = withLoading(MyComponent);

// Render the enhanced component
ReactDOM.render(
  <MyComponentWithLoading isLoading={true} data="Hello, World!" />,
  document.getElementById('root')
);
