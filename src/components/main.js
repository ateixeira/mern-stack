import React from 'react';
import { Link } from 'react-router';

import Cabecalho from './cabecalho';

const Main = React.createClass({
    render() {
        return (
            <div>
                <Cabecalho />
                <div className="conteudo">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Main;
