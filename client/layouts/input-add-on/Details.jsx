import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Input add-on');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Input add-on</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="w5">
                            <div className="b--black-30 ba br2 flex h2 w-100 mb3">
                                <div className="bg-black-05 flex items-center justify-center pa2 br b--black-30 w-30">
                                    <Rectangle />
                                </div>
                                <input type="text" className="bn pa2 flex-auto" style={{ marginRight: '1px' }} />
                            </div>
                            <div className="b--black-30 ba br2 flex h2 w-100 mb3">
                                <input type="text" className="bn pa2 flex-auto" style={{ marginLeft: '1px' }} />
                                <div className="bg-black-05 flex items-center justify-center pa2 bl b--black-30 w-40">
                                    <Rectangle />
                                </div>
                            </div>
                            <div className="b--black-30 ba br2 flex h2 w-100">
                                <div className="bg-black-05 flex items-center justify-center pa2 br b--black-30 w-20">
                                    <Rectangle />
                                </div>
                                <input type="text" className="bn pa2 flex-auto" />
                                <div className="bg-black-05 flex items-center justify-center pa2 bl b--black-30 w-30">
                                    <Rectangle />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<!-- Add-on prepended -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Add-on -->
    <div style="
        /* Content is centered */            
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>

    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />
</div>

<!-- Add-on appended -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />

    <!-- Add-on -->
    <div style="
        /* Content is centered */            
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>
</div>

<!-- Appended and prepended add-ons -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Add-on -->
    <div style="
        /* Content is centered */            
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>

    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />

    <!-- Add-on -->
    <div style="
        /* Content is centered */            
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
