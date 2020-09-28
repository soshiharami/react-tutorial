import * as React from 'react';

interface MyComponentProps {
    greeting: string;
}

class Props extends React.Component<MyComponentProps, {}> {
    render() {
        return (
            <div>
                {this.props.greeting}
            </div>
        );
    }
}

export default Props;
