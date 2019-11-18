import React from 'react';

const withCollapse = WrappedComponent => {
    return class WithCollapse extends React.Component {
      state = {
        isCollapsed: this.props.collapsed,
      };

      componentDidUpdate(prevProps){
        if(prevProps.collapsed !== this.props.collapsed){
            this.setState({isCollapsed: this.props.collapsed});
        }
      }
  
      toggle = () => {
        this.setState(prevState => ({
          isCollapsed: !prevState.isCollapsed,
        }));
      };
  
      render() {
        const { isCollapsed } = this.state;
        return (
            <WrappedComponent 
                isCollapsed={isCollapsed} 
                toggle={this.toggle} 
                {...this.props} />
        );
      }
    };
  };
  
  export default withCollapse;