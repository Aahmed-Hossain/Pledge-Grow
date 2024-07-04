/* eslint-disable react/prop-types */
import { useState } from "react";

const BannerModal = ({ closeModal }) => {
  const [activeContainer, setActiveContainer] = useState(1);
  return (
    <div className="modal_container">
      
      <div className="modal_content">
        <h6 >
          {activeContainer === 1 && <div>Step 1 of 3 </div>}
          {activeContainer === 2 && <div>Step 2 of 3 </div>}
          {activeContainer === 3 && <div>Step 3 of 3 </div>}
        </h6>
        BannerModal

         {/* close next button */}
         <div className="btn_close_next">
          {activeContainer === 1 && (
            <button
              type="button"
              style={{color:'red'}}
              className="btn"
              onClick={closeModal}
            >
              Cancel
            </button>
          )}

          {activeContainer !== 1 && (
            <button
            style={{color:'blue'}}
              onClick={() => setActiveContainer(activeContainer - 1)}
              className="btn"
            >
              Back
            </button>
          )}

          {activeContainer !== 3 && (
            <button
            style={{color:'green'}}
              onClick={() => setActiveContainer(activeContainer + 1)}
                className="btn"
            >
              Next
            </button>
          )}
          {activeContainer === 3 && (
            <button
              onClick={() => console.log('clicked')}
              style={{color:'yellowgreen'}}
               className="btn"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerModal;
