import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BannerUser = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const usersDataString = localStorage.getItem('users_bd');
  const usersData = JSON.parse(usersDataString);
  const firstUser = usersData[0];
  const userEmail = firstUser.email;
  const userId = localStorage.getItem('currentUserId');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageKey = searchParams.get('imageKey');
  const base64Image = localStorage.getItem(imageKey);

  useEffect(() => {
    if (base64Image) {
      setImageSrc(`data:image/jpeg;base64,${base64Image}`);
    }
  }, [base64Image]);

  return (
    <>
      <section className="aboutS" id="about">
        <div className="max-width">
          <h2 className="title3">Usuario</h2>
          <div className="about-content">
            <div className="column left">
              {/* <div>
                <img src={imageSrc} />
              </div> */}
            </div>
            <div className="column right">
              <p>ID: {userId}</p>
              <p>email: {userEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerUser;
