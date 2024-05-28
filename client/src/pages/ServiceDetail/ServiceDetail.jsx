import React, { useEffect, useState } from 'react';
import { getService, addComment, getCommentsByServiceId } from '../../utils/api';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { MdLocationPin } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import Map from '../../components/Map';
import CommentSection from './CommentSection';
import AccessRequestForm from './AccessRequestForm';
import styled from 'styled-components';
import ClientdachLayout from "../ClientInterface/ClientdachLayout";

const Wrapper = styled.div`
  padding: 20px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* Column layout for small screens */
  max-width: 1350px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; /* Row layout for larger screens */
  }
`;

const InnerContainer = styled.div`
  flex: 3;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px; /* Add margin-bottom for spacing on small screens */
  margin-right: 0;

  @media (min-width: 768px) {
    margin-right: 20px; /* Add margin-right for spacing on larger screens */
    margin-bottom: 0;
  }
`;

const ServiceTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns on small screens */
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* Four columns on larger screens */
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 0;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`;

const ServiceDescription = styled.span`
  display: block;
  margin-top: 10px;
  color: #555;
  text-align: justify;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const MapContainerStyled = styled.div`
  flex: 1;
  height: 200px; /* Smaller height for the map */
  margin-top: 20px;

  @media (min-width: 768px) {
    height: 300px;
    margin-top: 0;
    margin-left: 20px;
  }
`;

const FixedFormContainer = styled.div`
  flex: 1;
  width: 100%;

  @media (min-width: 768px) {
    position: sticky;
    top: 20px;
    width: 400px; /* Adjust width as needed */
    margin-left: 20px;
  }
`;

const ServiceDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(-1)[0];
  const { data, isLoading, isError } = useQuery(['serv', id], () => getService(id));
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Example static image URLs for testing
  const staticImageURLs = [
    'https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664299069577-11579b487e6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await getCommentsByServiceId(id);
        setComments(commentsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      await addComment(id, comment);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <Wrapper>
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <div className="flexCenter paddings">
          <span>Error while fetching the service details</span>
        </div>
      </Wrapper>
    );
  }

  return (<div><ClientdachLayout/>
    <Wrapper>
      
      <ContentContainer>
        <InnerContainer>
          <ServiceTitle>{data?.title || 'Service Title'}</ServiceTitle>
          <ImageGrid>
            {staticImageURLs.map((url, index) => (
              <ServiceImage key={index} src={url} alt={`service image ${index + 1}`} />
            ))}
          </ImageGrid>
          <ServiceDetails>
            <LeftColumn>
              <ServiceDescription>{data?.description || 'Service Description'}</ServiceDescription>
              <InfoRow>
                <FaRegClock size={25} />
                <span>{data?.yearsOfExperience || 'X'} years of experience</span>
              </InfoRow>
              <InfoRow>
                <MdLocationPin size={25} />
                <span className="secondaryText">{data?.location || 'Service Location'}</span>
              </InfoRow>
            </LeftColumn>
            <MapContainerStyled>
              <Map address={data?.location || 'Service Location'} />
            </MapContainerStyled>
          </ServiceDetails>
          <CommentSection
            comments={comments}
            comment={comment}
            handleCommentChange={handleCommentChange}
            handleSubmitComment={handleSubmitComment}
          />
        </InnerContainer>
        <FixedFormContainer>
          <AccessRequestForm onSubmit={handleSubmitComment} onClose={() => {}} />
        </FixedFormContainer>
      </ContentContainer>
    </Wrapper></div>
  );
};

export default ServiceDetail;
//good dhna lcode dial assmaa
// import React from 'react'
// import { getService } from '../../utils/api';
// import { useQuery } from 'react-query';
// import { useLocation } from 'react-router-dom';
// import "./ServiceDetail.css";
// import { PuffLoader } from 'react-spinners';
// import { MdLocationPin } from 'react-icons/md';
// import { FaRegClock } from "react-icons/fa";
// import Map from '../../components/Map';
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import { sliderSettings } from "../../utils/common";

// const ServiceDetail = () => {
//     const { pathname } = useLocation();
//   const id = pathname.split("/").slice(-1)[0];
//   const { data, isLoading, isError } = useQuery(["serv", id], () => getService(id));
 
 
//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the service details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       <div className="flexColStart paddings innerWidth service-container">
//          {/* image */}
//          <img src={`http://localhost:3003/${data?.image}`} alt="service image" />

         
//          <div className="flexCenter service-details">
//           {/* left */}
//          <div className="flexColStart left">
           
//             {/* head */}
//             <div className="flexStart head">
//               <span className="primaryText">{data?.title}</span>
//               </div>
//                {/* description */}
//             <span className="secondaryText" style={{ textAlign: "justify" }}>
//               {data?.description}
//             </span>
            
//                {/* yearsofexperience */}
//             <div className='flexStart' style={{ gap: "1rem" }}>
//                 <FaRegClock size={25} />
//                 <span>{data?.yearsOfExperience} ans d'expérience</span>
//               </div>

//             {/* address */}
//              <div className="flexStart" style={{ gap: "1rem" }}>
//               <MdLocationPin size={25} />
//               <span className="secondaryText">
//                 {data?.location}
//               </span>
//             </div>
        

//            {/* button de demande*/}
//             <button className="button">
//                 Demander le service
//               </button>
//             </div>

//             {/* right side */}
//           <div className="map">
//             <Map
//               address={data?.location}
//             />
//           </div>
      
       
//           </div>
//             </div>
 
//             <div className="carousel-container">
//             {data?.ServiceImages && (
//               <Swiper {...sliderSettings}>
//               <SlideNextButton />
//                 {/* Map through service images and render each image */}
//                 {data.ServiceImages.map((image, index) => (
//                   <SwiperSlide key={index.i}>
//                    <img src={`http://localhost:3003/${image.imageUrl}`} alt={`Service Image `} />
//                  </SwiperSlide>
                
//                 ))}
//               </Swiper>
//             )}
//       </div>
//     </div>
//   );
// };
// const SlideNextButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter r-buttons">
//       <button onClick={() => swiper.slidePrev()} className="r-prevButton">
//         &lt;
//       </button>
//       <button onClick={() => swiper.slideNext()} className="r-nextButton">
//         &gt;
//       </button>
//     </div>
//   );
// };
// export default ServiceDetail;
