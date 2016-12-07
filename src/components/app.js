import React from 'react';

import Cabecalho from './cabecalho.js';
import Conteudo from './conteudo.js';

module.exports = React.createClass({

    // RENDER
    render: function() {
        
        return (
            <div>
                <Cabecalho />
                <div className="conteudo">
                	{this.props.children}
            	</div>
            </div>
        );
    }
});