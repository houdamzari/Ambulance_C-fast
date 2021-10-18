import React from 'react';
import styled from "styled-components";
import {theme} from "../theme";
import {variables} from "../Utilities/Variables";
const Wrappper = styled.div`

`

function Container({children}) {
    return (
        <Wrappper>
            {children}
        </Wrappper>
    );
}

export default Container;