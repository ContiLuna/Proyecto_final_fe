import React from 'react';
import "./Error404.css";
import SmokeAnimation from "./Error404"

const Error404 = () => {
    return (
        <div className='pb-170'>
            <div className="ag-page-404">
                <div className="ag-toaster-wrap">
                    <div className="ag-toaster">
                        <div className="ag-toaster_back"></div>
                        <div className="ag-toaster_front">
                            <div className="js-toaster_lever ag-toaster_lever"></div>
                        </div>
                        <div className="ag-toaster_toast-handler">
                            <div className="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
                        </div>
                    </div>

                    <canvas id="canvas-404" className="ag-canvas-404">
                        {<SmokeAnimation />}
                    </canvas>
                    <img className="ag-canvas-404_img" alt="" src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/404-error-smoke-from-toaster/images/smoke.png" />
                </div>
            </div>
        </div>
    );
};

export default Error404;