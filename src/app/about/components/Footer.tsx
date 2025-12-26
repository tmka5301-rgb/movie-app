import React from "react";

export const Footer = () => {
  return (
    <div className="bg-indigo-700 flex justify-between">
      <div>
        <div className="font-bold text-base text-indigo-700 gap-2 flex">
          <img
            className="h-6 w-6 flex text-center"
            src="./Vector (2).png"
            alt=""
          />
          Movie Z
        </div>
        <p>2024 Movie Z . All Rights Reserved</p>
      </div>
      <div className="flex gap-20">
        <div>
          <div>Contact Information</div>
          <div>
            <div></div>
            <div>
              <p>Email:</p>
              <p>Support@movieZ.com</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <p>Phone:</p>
              <p>+97699112233</p>
            </div>
          </div>
        </div>
        <div>
          <div>Follow us</div>
          <div className="gap">
            <button>Facebook</button>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Youtube</button>
          </div>
        </div>
      </div>
    </div>
  );
};
