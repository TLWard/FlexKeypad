import * as React from 'react';

//This function creates a high order component that will contain tranfer the state as to props to the wrapped component. 
//This function takes a component...
export function withSizeUpdates(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

            this.state = { width: '0', height: '0' };
        }

        componentDidMount() {

            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }
        updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent width={this.state.width} height={this.state.height} {...this.props} />;
        }
    };
}