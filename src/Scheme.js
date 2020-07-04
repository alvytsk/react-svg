import React from 'react';
import scheme from './scheme.svg'
import { SvgLoader, SvgProxy } from 'react-svgmt';

const Scheme = ({ rects }) => {

    rects.map(({ id, name, i }) => (
        console.log( {id} , { name } )
    ));

    function onClickHandler(name) {
        console.log('clicked: ' + name);
    }

    return(
        <SvgLoader path={ scheme } className="svgSchema">            
            { rects.map( ({id, color}) => (
                <SvgProxy
                    key={ id }
                    selector={"#" + id }
                    fill={ color }
                    onClick={(id) => {onClickHandler({id})}}
                />
            ))}
            { rects.map( ({ id, name, i }) => (
                <div>
                    <SvgProxy
                        key={ i }
                        selector={ "#" + id + "_text" }> { name } </SvgProxy>
                </div>
            ))}
            <SvgProxy selector="#text1"> ЪУЪ! </SvgProxy>
        </SvgLoader>
    );
}

export default Scheme;